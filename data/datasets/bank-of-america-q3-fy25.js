window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "bank-of-america-q3-fy25",
  "name": "Bank of America · Q3 FY25",
  "company": "Bank of America",
  "meta": {
    "company": "Bank of America",
    "title": "Bank of America Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/bank-of-america-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 194,
    "titleSize": 116,
    "titleWeight": 800,
    "titleTextLength": 2502,
    "hidePeriodStamp": true,
    "logoWidth": 395,
    "logoHeight": 214,
    "logoY": 289,
    "logoViewBox": "0 0 380 205",
    "logoSvg": "<g transform=\"translate(6,2)\"><path d=\"M28 89 L121 38 L202 65 L111 115 Z\" fill=\"#073b89\"/><path d=\"M67 111 L158 60 L238 87 L149 137 Z\" fill=\"#073b89\"/><path d=\"M130 28 L215 0 L285 23 L199 52 Z\" fill=\"#ef001b\"/><path d=\"M87 62 L178 31 L254 57 L163 88 Z\" fill=\"#ef001b\"/><path d=\"M121 106 L218 53 L302 82 L205 136 Z\" fill=\"#ef001b\"/><path d=\"M160 148 L261 94 L345 123 L248 178 Z\" fill=\"#ef001b\"/></g>",
    "logoX": 693
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
        "node": "#0b3f91",
        "label": "#083b8d"
      },
      "hub": {
        "node": "#0b3f91",
        "label": "#083b8d"
      },
      "profit": {
        "node": "#26a321",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d40000",
        "label": "#9d1604"
      }
    },
    "linkTint": {
      "source": "#859fc6",
      "hub": "#859fc6",
      "profit": "#9acd99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97\" y=\"245\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g fill=\"#0b3f91\"><rect x=\"34\" y=\"1208\" width=\"373\" height=\"153\" rx=\"29\"/><rect x=\"414\" y=\"1208\" width=\"430\" height=\"153\" rx=\"29\"/><rect x=\"852\" y=\"1208\" width=\"235\" height=\"153\" rx=\"29\"/></g><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"220\" y=\"1260\" font-size=\"30\" font-weight=\"800\">Average deposits</text><text x=\"220\" y=\"1299\" font-size=\"29\" font-weight=\"400\" data-operating-metric=\"average_deposits\">$1.99T</text><text x=\"220\" y=\"1331\" font-size=\"22\" font-weight=\"400\">+4% Y/Y &amp; +1% Q/Q</text><text x=\"629\" y=\"1260\" font-size=\"30\" font-weight=\"800\">Average loans and leases</text><text x=\"629\" y=\"1299\" font-size=\"29\" font-weight=\"400\" data-operating-metric=\"average_loans_leases\">$1.15T</text><text x=\"629\" y=\"1331\" font-size=\"22\" font-weight=\"400\">+9% Y/Y &amp; +2% Q/Q</text><text x=\"970\" y=\"1260\" font-size=\"30\" font-weight=\"800\">CET1 ratio</text><text x=\"970\" y=\"1299\" font-size=\"29\" font-weight=\"400\" data-operating-metric=\"cet1_ratio\">11.6%</text><text x=\"970\" y=\"1331\" font-size=\"22\" font-weight=\"400\">+0.1pp Q/Q</text></g></g>",
  "layout": {
    "scale": 10.7,
    "nodes": {
      "consumer_banking": {
        "x": 385,
        "y": 383,
        "width": 73,
        "height": 119
      },
      "global_wealth_investment_management": {
        "x": 385,
        "y": 652,
        "width": 73,
        "height": 67
      },
      "global_banking": {
        "x": 385,
        "y": 871,
        "width": 73,
        "height": 67
      },
      "global_markets": {
        "x": 385,
        "y": 1093,
        "width": 73,
        "height": 67
      },
      "segment_revenue": {
        "x": 852,
        "y": 537,
        "width": 73,
        "height": 320
      },
      "revenue": {
        "x": 1319,
        "y": 642,
        "width": 73,
        "height": 300
      },
      "all_other": {
        "x": 1319,
        "y": 1035,
        "width": 73,
        "height": 19
      },
      "pretax_income": {
        "x": 1786,
        "y": 479,
        "width": 73,
        "height": 102
      },
      "noninterest_expenses": {
        "x": 1786,
        "y": 850,
        "width": 73,
        "height": 186
      },
      "operating_expenses": {
        "x": 1786,
        "y": 1226,
        "width": 73,
        "height": 15
      },
      "net_income": {
        "x": 2253,
        "y": 284,
        "width": 73,
        "height": 91
      },
      "tax": {
        "x": 2253,
        "y": 449,
        "width": 73,
        "height": 11
      },
      "compensation_benefits": {
        "x": 2253,
        "y": 547,
        "width": 73,
        "height": 113
      },
      "occupancy": {
        "x": 2253,
        "y": 737,
        "width": 73,
        "height": 21
      },
      "information_processing": {
        "x": 2253,
        "y": 859,
        "width": 73,
        "height": 21
      },
      "product_delivery": {
        "x": 2253,
        "y": 983,
        "width": 73,
        "height": 13
      },
      "professional_fees": {
        "x": 2253,
        "y": 1208,
        "width": 73,
        "height": 8
      },
      "marketing": {
        "x": 2253,
        "y": 1100,
        "width": 73,
        "height": 8
      },
      "other_expenses": {
        "x": 2253,
        "y": 1312,
        "width": 73,
        "height": 11
      }
    },
    "labels": {
      "consumer_banking": {
        "blocks": [
          {
            "x": 365,
            "top": 389,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Consumer",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "31% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 421,
            "top": 294,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "global_wealth_investment_management": {
        "blocks": [
          {
            "x": 357,
            "top": 642,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Global Wealth &",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Investment",
                "size": 39,
                "weight": 800
              },
              {
                "text": "20% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 413,
            "top": 563,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "global_banking": {
        "blocks": [
          {
            "x": 365,
            "top": 866,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Global Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "34% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 421,
            "top": 782,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "global_markets": {
        "blocks": [
          {
            "x": 365,
            "top": 1091,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Global Markets",
                "size": 40,
                "weight": 800
              },
              {
                "text": "26% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 421,
            "top": 1002,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "segment_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1355,
            "top": 454,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 41,
                "weight": 800
              },
              {
                "text": "(net of interest expenses)",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "all_other": {
        "blocks": [
          {
            "x": 1355,
            "top": 1074,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "All Other",
                "size": 36,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "(noninterest loss)",
                "size": 36,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1819,
            "top": 371,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f47"
              }
            ]
          }
        ]
      },
      "noninterest_expenses": {
        "blocks": [
          {
            "x": 1819,
            "top": 1057,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Noninterest",
                "size": 37,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "expenses",
                "size": 37,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1819,
            "top": 1258,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Provision for",
                "size": 35,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "credit losses",
                "size": 35,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2367,
            "top": 273,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "+23% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2431,
            "top": 418,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2368,
            "top": 545,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Compensation",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "& benefits",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2401,
            "top": 711,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Occupancy",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "information_processing": {
        "blocks": [
          {
            "x": 2394,
            "top": 814,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Information",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "processing",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "product_delivery": {
        "blocks": [
          {
            "x": 2366,
            "top": 963,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Product delivery",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2353,
            "top": 1173,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Professional fees",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2353,
            "top": 1083,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Marketing ($0.6B)",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              }
            ]
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2384,
            "top": 1302,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other ($0.9B)",
                "size": 30,
                "weight": 800,
                "color": "#9d1604"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "consumer_banking",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Consumer",
        "Banking"
      ],
      "value": 11.2,
      "notes": [
        "+7% Y/Y",
        "31% net margin"
      ],
      "color": "#0b3f91",
      "labelColor": "#083b8d",
      "linkTint": "#859fc6"
    },
    {
      "id": "global_wealth_investment_management",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Global Wealth &",
        "Investment Management"
      ],
      "value": 6.3,
      "notes": [
        "+10% Y/Y",
        "20% net margin"
      ],
      "color": "#0b3f91",
      "labelColor": "#083b8d",
      "linkTint": "#859fc6"
    },
    {
      "id": "global_banking",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Global Banking",
      "value": 6.2,
      "notes": [
        "+7% Y/Y",
        "34% net margin"
      ],
      "color": "#0b3f91",
      "labelColor": "#083b8d",
      "linkTint": "#859fc6"
    },
    {
      "id": "global_markets",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Global Markets",
      "value": 6.2,
      "notes": [
        "+11% Y/Y",
        "26% net margin"
      ],
      "color": "#0b3f91",
      "labelColor": "#083b8d",
      "linkTint": "#859fc6"
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 29.9,
      "color": "#0b3f91",
      "labelColor": "#083b8d",
      "linkTint": "#859fc6"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 28.1,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#0b3f91",
      "labelColor": "#083b8d",
      "linkTint": "#859fc6"
    },
    {
      "id": "all_other",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "All Other",
        "(noninterest loss)"
      ],
      "value": -1.7,
      "valueText": "($1.7B)",
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Pretax income",
      "value": 9.5,
      "color": "#26a321",
      "labelColor": "#008f47",
      "linkTint": "#9acd99"
    },
    {
      "id": "noninterest_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 17.3,
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 1.3,
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net income",
      "value": 8.5,
      "notes": [
        "+23% Y/Y"
      ],
      "color": "#26a321",
      "labelColor": "#008f47",
      "linkTint": "#9acd99"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 1,
      "valueText": "($1.0B)",
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "compensation_benefits",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 10.5,
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "occupancy",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Occupancy",
      "value": 1.9,
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "information_processing",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": [
        "Information",
        "processing"
      ],
      "value": 1.8,
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "product_delivery",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "Product delivery",
      "value": 1,
      "valueText": "($1.0B)",
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "professional_fees",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Professional fees",
      "value": 0.6,
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "marketing",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": "Marketing",
      "value": 0.6,
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Other",
      "value": 0.9,
      "color": "#d40000",
      "labelColor": "#9d1604",
      "linkTint": "#df8585"
    }
  ],
  "links": [
    {
      "source": "consumer_banking",
      "target": "segment_revenue",
      "value": 11.2,
      "width": 119,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 119,
      "targetWidth": 119
    },
    {
      "source": "global_wealth_investment_management",
      "target": "segment_revenue",
      "value": 6.3,
      "width": 67,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 67,
      "targetWidth": 67
    },
    {
      "source": "global_banking",
      "target": "segment_revenue",
      "value": 6.2,
      "width": 67,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 67,
      "targetWidth": 67
    },
    {
      "source": "global_markets",
      "target": "segment_revenue",
      "value": 6.2,
      "width": 67,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 67,
      "targetWidth": 67
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 28.1,
      "width": 300,
      "sourceWidth": 301,
      "targetWidth": 300,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_revenue",
      "target": "all_other",
      "value": 1.7,
      "width": 19,
      "sourceWidth": 19,
      "targetWidth": 19,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 9.5,
      "width": 102,
      "sourceWidth": 101,
      "targetWidth": 102,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd99"
    },
    {
      "source": "revenue",
      "target": "noninterest_expenses",
      "value": 17.3,
      "width": 186,
      "sourceWidth": 185,
      "targetWidth": 186,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 1.3,
      "width": 15,
      "sourceWidth": 14,
      "targetWidth": 15,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 8.5,
      "width": 91,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd99",
      "sourceWidth": 91,
      "targetWidth": 91
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1,
      "width": 11,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "sourceWidth": 11,
      "targetWidth": 11
    },
    {
      "source": "noninterest_expenses",
      "target": "compensation_benefits",
      "value": 10.5,
      "width": 113,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "sourceWidth": 112,
      "targetWidth": 113
    },
    {
      "source": "noninterest_expenses",
      "target": "occupancy",
      "value": 1.9,
      "width": 21,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "sourceWidth": 21,
      "targetWidth": 21
    },
    {
      "source": "noninterest_expenses",
      "target": "information_processing",
      "value": 1.8,
      "width": 21,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "sourceWidth": 20,
      "targetWidth": 21
    },
    {
      "source": "noninterest_expenses",
      "target": "product_delivery",
      "value": 1,
      "width": 13,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "sourceWidth": 11,
      "targetWidth": 13
    },
    {
      "source": "noninterest_expenses",
      "target": "professional_fees",
      "value": 0.6,
      "width": 8,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "sourceWidth": 7,
      "targetWidth": 8
    },
    {
      "source": "noninterest_expenses",
      "target": "marketing",
      "value": 0.6,
      "width": 8,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "sourceWidth": 7,
      "targetWidth": 8
    },
    {
      "source": "noninterest_expenses",
      "target": "other_expenses",
      "value": 0.9,
      "width": 11,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "sourceWidth": 8,
      "targetWidth": 11
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "$1.99T",
      "$1.15T"
    ],
    "zh": {
      "name": "美国银行 · 2025 财年第三季度",
      "meta": {
        "title": "美国银行 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "titleTextLength": 2180
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97\" y=\"245\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g fill=\"#0b3f91\"><rect x=\"34\" y=\"1208\" width=\"373\" height=\"153\" rx=\"29\"/><rect x=\"414\" y=\"1208\" width=\"430\" height=\"153\" rx=\"29\"/><rect x=\"852\" y=\"1208\" width=\"235\" height=\"153\" rx=\"29\"/></g><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"220\" y=\"1260\" font-size=\"30\" font-weight=\"800\">平均存款</text><text x=\"220\" y=\"1299\" font-size=\"29\" font-weight=\"400\" data-operating-metric=\"average_deposits\">$1.99T</text><text x=\"220\" y=\"1331\" font-size=\"22\" font-weight=\"400\">同比 +4% / 环比 +1%</text><text x=\"629\" y=\"1260\" font-size=\"30\" font-weight=\"800\">平均贷款与租赁</text><text x=\"629\" y=\"1299\" font-size=\"29\" font-weight=\"400\" data-operating-metric=\"average_loans_leases\">$1.15T</text><text x=\"629\" y=\"1331\" font-size=\"22\" font-weight=\"400\">同比 +9% / 环比 +2%</text><text x=\"970\" y=\"1260\" font-size=\"30\" font-weight=\"800\">CET1 比率</text><text x=\"970\" y=\"1299\" font-size=\"29\" font-weight=\"400\" data-operating-metric=\"cet1_ratio\">11.6%</text><text x=\"970\" y=\"1331\" font-size=\"22\" font-weight=\"400\">环比 +0.1 个百分点</text></g></g>",
      "nodes": {
        "consumer_banking": {
          "label": "消费者银行",
          "notes": [
            "同比 +7%",
            "净利率 31%"
          ]
        },
        "global_wealth_investment_management": {
          "label": "全球财富与投资管理",
          "notes": [
            "同比 +10%",
            "净利率 20%"
          ]
        },
        "global_banking": {
          "label": "全球银行",
          "notes": [
            "同比 +7%",
            "净利率 34%"
          ]
        },
        "global_markets": {
          "label": "全球市场",
          "notes": [
            "同比 +11%",
            "净利率 26%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "all_other": {
          "label": "其他（非利息亏损）"
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "noninterest_expenses": {
          "label": "非利息费用"
        },
        "operating_expenses": {
          "label": "信用损失拨备"
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
        "occupancy": {
          "label": "场地占用"
        },
        "information_processing": {
          "label": "信息处理"
        },
        "product_delivery": {
          "label": "产品交付"
        },
        "professional_fees": {
          "label": "专业费用"
        },
        "marketing": {
          "label": "市场营销"
        },
        "other_expenses": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "consumer_banking": {
            "blocks": [
              {
                "x": 365,
                "top": 389,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "消费者",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "银行",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 31%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 421,
                "top": 294,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "global_wealth_investment_management": {
            "blocks": [
              {
                "x": 357,
                "top": 642,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "全球财富与",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "投资管理",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "净利率 20%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 413,
                "top": 563,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "global_banking": {
            "blocks": [
              {
                "x": 365,
                "top": 866,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "全球银行",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 34%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 421,
                "top": 782,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "global_markets": {
            "blocks": [
              {
                "x": 365,
                "top": 1091,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "全球市场",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 26%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 421,
                "top": 1002,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "segment_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1355,
                "top": 454,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 41,
                    "weight": 800
                  },
                  {
                    "text": "（扣除利息支出）",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 1355,
                "top": 1074,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "（非利息亏损）",
                    "size": 36,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1819,
                "top": 371,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ]
              }
            ]
          },
          "noninterest_expenses": {
            "blocks": [
              {
                "x": 1819,
                "top": 1057,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 37,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "费用",
                    "size": 37,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1819,
                "top": 1258,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 35,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "拨备",
                    "size": 35,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2367,
                "top": 273,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2431,
                "top": 418,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2368,
                "top": 545,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "与福利",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2401,
                "top": 711,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "information_processing": {
            "blocks": [
              {
                "x": 2394,
                "top": 814,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "信息处理",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "处理",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "product_delivery": {
            "blocks": [
              {
                "x": 2366,
                "top": 963,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品交付",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2353,
                "top": 1173,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2353,
                "top": 1083,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "市场营销（$0.6B）",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2384,
                "top": 1302,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他（$0.9B）",
                    "size": 30,
                    "weight": 800,
                    "color": "#9d1604"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "average_deposits",
      "value": "1.99",
      "unit": "T",
      "currency": "USD",
      "literal": "$1.99T",
      "comparison": "eq"
    },
    {
      "id": "average_loans_leases",
      "value": "1.15",
      "unit": "T",
      "currency": "USD",
      "literal": "$1.15T",
      "comparison": "eq"
    },
    {
      "id": "cet1_ratio",
      "value": "11.6",
      "unit": "%",
      "currency": null,
      "literal": "11.6%",
      "comparison": "eq"
    }
  ]
});
