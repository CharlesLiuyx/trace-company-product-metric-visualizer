(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "goldman-sachs-q1-fy24",
  "name": "Goldman Sachs · Q1 FY24",
  "company": "Goldman Sachs",
  "meta": {
    "company": "Goldman Sachs",
    "title": "Goldman Sachs Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/goldman-sachs-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 117.2021484375,
    "titleWeight": 800,
    "titleTextLength": 2513.3349609375,
    "logoWidth": 243.52001953125,
    "logoHeight": 242.2177734375,
    "logoY": 248.72900390625,
    "logoViewBox": "0 0 244 242",
    "logoSvg": ((window.SANKEY_BUSINESS_ICONS || {}).goldmanSachsWordmark || "")
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
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#6b96c3",
        "label": "#6b96c3"
      },
      "hub": {
        "node": "#6b96c3",
        "label": "#6b96c3"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#aec3da",
      "hub": null,
      "profit": "#8ec88e",
      "cost": "#de7878"
    },
    "linkOpacity": 1,
    "type": {
      "name": 38,
      "value": 39,
      "note": 27,
      "lineGap": 9
    }
  },
  "nodes": [
    {
      "id": "global_banking_markets",
      "label": [
        "Global Banking &",
        "Markets"
      ],
      "value": 9.7,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+15% Y/Y",
        "36% net margin"
      ]
    },
    {
      "id": "asset_wealth_management",
      "label": [
        "Asset & Wealth",
        "Management"
      ],
      "value": 3.8,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+18% Y/Y",
        "18% net margin"
      ]
    },
    {
      "id": "platform_solutions",
      "label": [
        "Platform",
        "Solutions"
      ],
      "value": 0.7,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+24% Y/Y",
        "(13%) net margin"
      ]
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 14.2,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": [
        "Pretax income"
      ],
      "value": 5.2,
      "type": "profit",
      "col": 2,
      "order": 4
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 8.7,
      "type": "cost",
      "col": 2,
      "order": 5
    },
    {
      "id": "provision_for_credit_loss",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 0.3,
      "type": "cost",
      "col": 2,
      "order": 6
    },
    {
      "id": "net_income",
      "label": [
        "Net income"
      ],
      "value": 4.1,
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 8
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 4.6,
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "transaction_based",
      "label": [
        "Transaction based"
      ],
      "value": 1.5,
      "type": "cost",
      "col": 3,
      "order": 10
    },
    {
      "id": "market_development",
      "label": [
        "Market dev."
      ],
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 11
    },
    {
      "id": "communication_technology",
      "label": [
        "Communication,",
        "Technology"
      ],
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 12
    },
    {
      "id": "da",
      "label": [
        "D&A"
      ],
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 13
    },
    {
      "id": "occupancy",
      "label": [
        "Occupancy"
      ],
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 14
    },
    {
      "id": "professional_fees",
      "label": [
        "Professional fees"
      ],
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "order": 15
    },
    {
      "id": "other",
      "label": [
        "Other"
      ],
      "value": 0.7,
      "type": "cost",
      "col": 3,
      "order": 16
    }
  ],
  "links": [
    {
      "source": "global_banking_markets",
      "target": "revenue",
      "value": 9.7,
      "sourceWidth": 216.1728515625,
      "targetWidth": 216.1728515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "asset_wealth_management",
      "target": "revenue",
      "value": 3.8,
      "sourceWidth": 83.34375,
      "targetWidth": 83.34375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "platform_solutions",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.2,
      "sourceWidth": 116,
      "targetWidth": 116,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 8.7,
      "sourceWidth": 191.43017578125,
      "targetWidth": 191.43017578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_loss",
      "value": 0.3,
      "sourceWidth": 7.71337890625,
      "targetWidth": 6.51123046875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4.1,
      "sourceWidth": 92,
      "targetWidth": 92.45947265625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.1,
      "sourceWidth": 24,
      "targetWidth": 24.74267578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 4.6,
      "sourceWidth": 101.5751953125,
      "targetWidth": 101.5751953125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "transaction_based",
      "value": 1.5,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "market_development",
      "value": 0.2,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "communication_technology",
      "value": 0.5,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.6,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.2,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 6,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.4,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.7,
      "sourceWidth": 16.92919921875,
      "targetWidth": 15.626953125,
      "sourceOrder": 7,
      "targetOrder": 0
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
      "id": "cet1",
      "value": "14.7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.7%"
    },
    {
      "id": "roe",
      "value": "14.8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.8%"
    }
  ],
  "layout": {
    "scale": 17,
    "nodes": {
      "global_banking_markets": {
        "x": 393.2783203125,
        "y": 395.8828125,
        "width": 72.92578125,
        "height": 216.1728515625
      },
      "asset_wealth_management": {
        "x": 393.2783203125,
        "y": 768.3251953125,
        "width": 72.92578125,
        "height": 83.34375
      },
      "platform_solutions": {
        "x": 393.2783203125,
        "y": 1023.5654296875,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "revenue": {
        "x": 1015.751953125,
        "y": 658.9365234375,
        "width": 72.92578125,
        "height": 315.1435546875
      },
      "pretax_income": {
        "x": 1629.10986328125,
        "y": 500.0625,
        "width": 72.92578125,
        "height": 116
      },
      "operating_expenses": {
        "x": 1639.52783203125,
        "y": 899.85205078125,
        "width": 72.92578125,
        "height": 191.43017578125
      },
      "provision_for_credit_loss": {
        "x": 1642.13232421875,
        "y": 1274.89892578125,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "net_income": {
        "x": 2262.00146484375,
        "y": 304.7255859375,
        "width": 72.92578125,
        "height": 92.45947265625
      },
      "tax": {
        "x": 2262.00146484375,
        "y": 476.6220703125,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "compensation_benefits": {
        "x": 2262.00146484375,
        "y": 580.8017578125,
        "width": 72.92578125,
        "height": 101.5751953125
      },
      "transaction_based": {
        "x": 2262.00146484375,
        "y": 747.4892578125,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "market_development": {
        "x": 2262.00146484375,
        "y": 856.8779296875,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "communication_technology": {
        "x": 2262.00146484375,
        "y": 946.73291015625,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "da": {
        "x": 2262.00146484375,
        "y": 1047.005859375,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "occupancy": {
        "x": 2262.00146484375,
        "y": 1250.15625,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "professional_fees": {
        "x": 2262.00146484375,
        "y": 1151.185546875,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "other": {
        "x": 2262.00146484375,
        "y": 1342.61572265625,
        "width": 72.92578125,
        "height": 15.626953125
      }
    },
    "labels": {
      "global_banking_markets": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 300.81884765625,
            "lines": [
              {
                "text": "$9.7B",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+15% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 364.62890625,
            "top": 436.25244140625,
            "lines": [
              {
                "text": "Global Banking &",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Markets",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "36% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "asset_wealth_management": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 670.65673828125,
            "lines": [
              {
                "text": "$3.8B",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+18% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 359.419921875,
            "top": 754.00048828125,
            "lines": [
              {
                "text": "Asset & Wealth",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Management",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "18% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "platform_solutions": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 925.89697265625,
            "lines": [
              {
                "text": "$0.7B",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+24% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 347.69970703125,
            "top": 972.77783203125,
            "lines": [
              {
                "text": "Platform",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Solutions",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "(13%) net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1048.30810546875,
            "top": 503.96923828125,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "$14.2B",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+16% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
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
            "x": 1664.2705078125,
            "top": 385.46484375,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$5.2B",
                "size": 39,
                "weight": 400,
                "color": "#008f47"
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
            "x": 1665.57275390625,
            "top": 1105.60693359375,
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($8.7B)",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "provision_for_credit_loss": {
        "blocks": [
          {
            "x": 1675.99072265625,
            "top": 1290.52587890625,
            "lines": [
              {
                "text": "Provision for",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.3B)",
                "size": 34,
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
            "x": 2480.77880859375,
            "top": 290.40087890625,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$4.1B",
                "size": 39,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "+20% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
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
            "x": 2480.77880859375,
            "top": 449.27490234375,
            "lines": [
              {
                "text": "Tax",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($1.1B)",
                "size": 30.000000000000004,
                "weight": 400,
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
            "x": 2480.77880859375,
            "top": 572.98828125,
            "lines": [
              {
                "text": "Compensation",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($4.6B)",
                "size": 30.000000000000004,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "transaction_based": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 724.048828125,
            "lines": [
              {
                "text": "Transaction based",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($1.5B)",
                "size": 30.000000000000004,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "market_development": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 820.4150390625,
            "lines": [
              {
                "text": "Market dev.",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.2B)",
                "size": 30.000000000000004,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "communication_technology": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 918.08349609375,
            "lines": [
              {
                "text": "Communication,",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Technology ($0.5B)",
                "size": 31.000000000000004,
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
            "x": 2492.4990234375,
            "top": 1011.84521484375,
            "lines": [
              {
                "text": "D&A",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.6B)",
                "size": 30.000000000000004,
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
            "x": 2492.4990234375,
            "top": 1218.90234375,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.2B)",
                "size": 30.000000000000004,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 1119.931640625,
            "lines": [
              {
                "text": "Professional fees",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.4B)",
                "size": 30.000000000000004,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 1312.6640625,
            "lines": [
              {
                "text": "Other",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.7B)",
                "size": 30.000000000000004,
                "weight": 400,
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122.4111328125\" y=\"256.54248046875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"117.2021484375\" y=\"1152.48779296875\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#6a96c3\"/><text x=\"237.659912109375\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"237.659912109375\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">14.7%</text><text x=\"237.659912109375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">(0.1pp) Y/Y</text></g><g><rect x=\"367.2333984375\" y=\"1152.48779296875\" width=\"350.30419921875\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#6a96c3\"/><text x=\"542.385498046875\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">Annualized ROE</text><text data-operating-metric=\"roe\" x=\"542.385498046875\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">14.8%</text><text x=\"542.385498046875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+3.2pp Y/Y</text></g><text x=\"242.2177734375\" y=\"1341.3134765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"147.15380859375\" y=\"1386.89208984375\" font-size=\"27.34716796875\" fill=\"#777\">ROE = Return on average common equity</text></g>",
  "i18n": {
    "zh": {
      "name": "高盛 · 2024 财年第一季度",
      "meta": {
        "title": "高盛 2024 财年第一季度利润表",
        "titleTextLength": 1799.7041015625,
        "period": "2024 财年第一季度"
      },
      "nodes": {
        "global_banking_markets": {
          "label": [
            "全球银行",
            "与市场"
          ]
        },
        "asset_wealth_management": {
          "label": [
            "资产与财富",
            "管理"
          ]
        },
        "platform_solutions": {
          "label": [
            "平台",
            "解决方案"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ]
        },
        "pretax_income": {
          "label": [
            "税前利润"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "provision_for_credit_loss": {
          "label": [
            "信用损失",
            "拨备"
          ]
        },
        "net_income": {
          "label": [
            "净利润"
          ]
        },
        "tax": {
          "label": [
            "税费"
          ]
        },
        "compensation_benefits": {
          "label": [
            "薪酬",
            "与福利"
          ]
        },
        "transaction_based": {
          "label": [
            "交易相关"
          ]
        },
        "market_development": {
          "label": [
            "市场开发"
          ]
        },
        "communication_technology": {
          "label": [
            "通信与",
            "技术"
          ]
        },
        "da": {
          "label": [
            "折旧与摊销"
          ]
        },
        "occupancy": {
          "label": [
            "场地占用"
          ]
        },
        "professional_fees": {
          "label": [
            "专业费用"
          ]
        },
        "other": {
          "label": [
            "其他"
          ]
        }
      },
      "layout": {
        "labels": {
          "global_banking_markets": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 300.81884765625,
                "lines": [
                  {
                    "text": "$9.7B",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 364.62890625,
                "top": 436.25244140625,
                "lines": [
                  {
                    "text": "全球银行",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "与市场",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 36%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "asset_wealth_management": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 670.65673828125,
                "lines": [
                  {
                    "text": "$3.8B",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 359.419921875,
                "top": 754.00048828125,
                "lines": [
                  {
                    "text": "资产与财富",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "管理",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 18%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "platform_solutions": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 925.89697265625,
                "lines": [
                  {
                    "text": "$0.7B",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 347.69970703125,
                "top": 972.77783203125,
                "lines": [
                  {
                    "text": "平台",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "解决方案",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 (13%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1048.30810546875,
                "top": 503.96923828125,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "$14.2B",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
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
                "x": 1664.2705078125,
                "top": 385.46484375,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$5.2B",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f47"
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
                "x": 1665.57275390625,
                "top": 1105.60693359375,
                "lines": [
                  {
                    "text": "运营",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($8.7B)",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "provision_for_credit_loss": {
            "blocks": [
              {
                "x": 1675.99072265625,
                "top": 1290.52587890625,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.3B)",
                    "size": 34,
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
                "x": 2480.77880859375,
                "top": 290.40087890625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$4.1B",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "同比 +20%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
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
                "x": 2480.77880859375,
                "top": 449.27490234375,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($1.1B)",
                    "size": 30.000000000000004,
                    "weight": 400,
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
                "x": 2480.77880859375,
                "top": 572.98828125,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "与福利",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($4.6B)",
                    "size": 30.000000000000004,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "transaction_based": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 724.048828125,
                "lines": [
                  {
                    "text": "交易相关",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($1.5B)",
                    "size": 30.000000000000004,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "market_development": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 820.4150390625,
                "lines": [
                  {
                    "text": "市场开发",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.2B)",
                    "size": 30.000000000000004,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "communication_technology": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 918.08349609375,
                "lines": [
                  {
                    "text": "通信与技术",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.5B)",
                    "size": 31.000000000000004,
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
                "x": 2492.4990234375,
                "top": 1011.84521484375,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.6B)",
                    "size": 30.000000000000004,
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
                "x": 2492.4990234375,
                "top": 1218.90234375,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.2B)",
                    "size": 30.000000000000004,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 1119.931640625,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.4B)",
                    "size": 30.000000000000004,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 1312.6640625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.7B)",
                    "size": 30.000000000000004,
                    "weight": 400,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122.4111328125\" y=\"256.54248046875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"117.2021484375\" y=\"1152.48779296875\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#6a96c3\"/><text x=\"237.659912109375\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"237.659912109375\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">14.7%</text><text x=\"237.659912109375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"19.53369140625\" fill=\"white\">同比 (0.1 个百分点)</text></g><g><rect x=\"367.2333984375\" y=\"1152.48779296875\" width=\"350.30419921875\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#6a96c3\"/><text x=\"542.385498046875\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">年化 ROE</text><text data-operating-metric=\"roe\" x=\"542.385498046875\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">14.8%</text><text x=\"542.385498046875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"19.53369140625\" fill=\"white\">同比 +3.2 个百分点</text></g><text x=\"242.2177734375\" y=\"1341.3134765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"147.15380859375\" y=\"1386.89208984375\" font-size=\"27.34716796875\" fill=\"#777\">ROE = 平均普通股权益回报率</text></g>"
    }
  }
});})();
