(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "goldman-sachs-q2-fy25",
  "name": "Goldman Sachs · Q2 FY25",
  "company": "Goldman Sachs",
  "meta": {
    "company": "Goldman Sachs",
    "title": "Goldman Sachs Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/goldman-sachs-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 120.00000000000001,
    "titleWeight": 800,
    "titleTextLength": 2508,
    "logoWidth": 242.2177734375,
    "logoHeight": 243.52001953125,
    "logoY": 260.44921875,
    "logoViewBox": "0 0 244 242",
    "logoSvg": ((window.SANKEY_BUSINESS_ICONS || {}).goldmanSachsWordmark || '')
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
      "value": 10.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+24% Y/Y",
        "31% net margin"
      ],
      "valueText": "$10.1B"
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
        "(3%) Y/Y",
        "17% net margin"
      ],
      "valueText": "$3.8B"
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
        "+2% Y/Y",
        "(7%) net margin"
      ],
      "valueText": "$0.7B"
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 14.6,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+15% Y/Y"
      ],
      "valueText": "$14.6B"
    },
    {
      "id": "pretax_income",
      "label": [
        "Pretax income"
      ],
      "value": 5,
      "type": "profit",
      "col": 2,
      "order": 4,
      "valueText": "$5.0B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 9.2,
      "type": "cost",
      "col": 2,
      "order": 5,
      "valueText": "($9.2B)"
    },
    {
      "id": "provision_for_credit_loss",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 0.4,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($0.4B)"
    },
    {
      "id": "net_income",
      "label": [
        "Net income"
      ],
      "value": 3.7,
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": [
        "+22% Y/Y"
      ],
      "valueText": "$3.7B"
    },
    {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 1.2,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($1.2B)"
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 4.7,
      "type": "cost",
      "col": 3,
      "order": 9,
      "valueText": "($4.7B)"
    },
    {
      "id": "transaction_based",
      "label": [
        "Transaction based"
      ],
      "value": 2,
      "type": "cost",
      "col": 3,
      "order": 10,
      "valueText": "($2.0B)"
    },
    {
      "id": "market_development",
      "label": [
        "Market dev."
      ],
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 11,
      "valueText": "($0.2B)"
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
      "order": 12,
      "valueText": "($0.5B)"
    },
    {
      "id": "da",
      "label": [
        "D&A"
      ],
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 13,
      "valueText": "($0.6B)"
    },
    {
      "id": "occupancy",
      "label": [
        "Occupancy"
      ],
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 14,
      "valueText": "($0.2B)"
    },
    {
      "id": "professional_fees",
      "label": [
        "Professional fees"
      ],
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "order": 15,
      "valueText": "($0.4B)"
    },
    {
      "id": "other",
      "label": [
        "Other"
      ],
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 16,
      "valueText": "($0.6B)"
    }
  ],
  "links": [
    {
      "source": "global_banking_markets",
      "target": "revenue",
      "value": 10.1,
      "sourceWidth": 195.3369140625,
      "targetWidth": 195.3369140625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "asset_wealth_management",
      "target": "revenue",
      "value": 3.8,
      "sourceWidth": 72.92578125,
      "targetWidth": 72.92578125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "platform_solutions",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5,
      "sourceWidth": 95.06396484375,
      "targetWidth": 95.06396484375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 9.2,
      "sourceWidth": 177.10546875,
      "targetWidth": 177.10546875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_loss",
      "value": 0.4,
      "sourceWidth": 9.11572265625,
      "targetWidth": 6.51123046875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.7,
      "sourceWidth": 71.62353515625,
      "targetWidth": 71.62353515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.2,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 4.7,
      "sourceWidth": 91.1572265625,
      "targetWidth": 88.552734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "transaction_based",
      "value": 2,
      "sourceWidth": 39.0673828125,
      "targetWidth": 37.76513671875,
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
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.2,
      "sourceWidth": 3.90673828125,
      "targetWidth": 2.6044921875,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.4,
      "sourceWidth": 9.11572265625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 6,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.6,
      "sourceWidth": 9.11572265625,
      "targetWidth": 11.72021484375,
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
      "value": "14.5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.5%"
    },
    {
      "id": "roe",
      "value": "12.8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "12.8%"
    }
  ],
  "layout": {
    "scale": 19.2732421875,
    "nodes": {
      "global_banking_markets": {
        "x": 395.8828125,
        "y": 403.6962890625,
        "width": 72.92578125,
        "height": 195.3369140625
      },
      "asset_wealth_management": {
        "x": 395.8828125,
        "y": 803.48583984375,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "platform_solutions": {
        "x": 395.8828125,
        "y": 1057.423828125,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "revenue": {
        "x": 1019.65869140625,
        "y": 696.70166015625,
        "width": 72.92578125,
        "height": 281.28515625
      },
      "pretax_income": {
        "x": 1642.13232421875,
        "y": 479.2265625,
        "width": 72.92578125,
        "height": 95.06396484375
      },
      "operating_expenses": {
        "x": 1642.13232421875,
        "y": 901.154296875,
        "width": 72.92578125,
        "height": 177.10546875
      },
      "provision_for_credit_loss": {
        "x": 1642.13232421875,
        "y": 1247.5517578125,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "net_income": {
        "x": 2264.60595703125,
        "y": 277.37841796875,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "tax": {
        "x": 2264.60595703125,
        "y": 412.81201171875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "compensation_benefits": {
        "x": 2264.60595703125,
        "y": 506.57373046875,
        "width": 72.92578125,
        "height": 88.552734375
      },
      "transaction_based": {
        "x": 2264.60595703125,
        "y": 677.16796875,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "market_development": {
        "x": 2264.60595703125,
        "y": 802.18359375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "communication_technology": {
        "x": 2264.60595703125,
        "y": 899.85205078125,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "da": {
        "x": 2264.60595703125,
        "y": 1019.65869140625,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "occupancy": {
        "x": 2264.60595703125,
        "y": 1131.65185546875,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "professional_fees": {
        "x": 2264.60595703125,
        "y": 1225.41357421875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "other": {
        "x": 2264.60595703125,
        "y": 1320.4775390625,
        "width": 72.92578125,
        "height": 11.72021484375
      }
    },
    "labels": {
      "global_banking_markets": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 312.5390625,
            "lines": [
              {
                "text": "$value",
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
            "x": 364.62890625,
            "top": 438.85693359375,
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
                "text": "31% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13,
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "asset_wealth_management": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 709.72412109375,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "(3%) Y/Y",
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
            "top": 776.138671875,
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
                "text": "17% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13,
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "platform_solutions": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 966.2666015625,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+2% Y/Y",
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
            "top": 981.8935546875,
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
                "text": "(7%) net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13,
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1056.12158203125,
            "top": 553.45458984375,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "$value",
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
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1678.59521484375,
            "top": 376.34912109375,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
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
            "x": 1678.59521484375,
            "top": 1096.4912109375,
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
                "text": "$value",
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
            "x": 1678.59521484375,
            "top": 1276.201171875,
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
                "text": "$value",
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
            "x": 2492.4990234375,
            "top": 239.61328125,
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
                "text": "+22% Y/Y",
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
            "x": 2492.4990234375,
            "top": 393.2783203125,
            "lines": [
              {
                "text": "Tax",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
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
            "x": 2492.4990234375,
            "top": 502.6669921875,
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
                "text": "$value",
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
            "top": 661.541015625,
            "lines": [
              {
                "text": "Transaction based",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
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
            "top": 773.5341796875,
            "lines": [
              {
                "text": "Market dev.",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
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
            "top": 879.01611328125,
            "lines": [
              {
                "text": "Communication,",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Technology",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
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
      "da": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 994.916015625,
            "lines": [
              {
                "text": "D&A",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
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
            "top": 1096.4912109375,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
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
            "top": 1198.06640625,
            "lines": [
              {
                "text": "Professional fees",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
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
            "top": 1299.6416015625,
            "lines": [
              {
                "text": "Other",
                "size": 31.000000000000004,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"123.00000000000001\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"117.00000000000001\" y=\"1133\" width=\"242\" height=\"148\" rx=\"29.000000000000004\" fill=\"#6a96c3\"/><text x=\"238\" y=\"1186\" text-anchor=\"middle\" font-size=\"29.000000000000004\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"238\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">14.5%</text><text x=\"238\" y=\"1257\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">(0.3pp) Q/Q</text></g><g><rect x=\"367.00000000000006\" y=\"1133\" width=\"352\" height=\"148\" rx=\"29.000000000000004\" fill=\"#6a96c3\"/><text x=\"543\" y=\"1186\" text-anchor=\"middle\" font-size=\"29.000000000000004\" font-weight=\"800\" fill=\"white\">Annualized ROE</text><text data-operating-metric=\"roe\" x=\"543\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">12.8%</text><text x=\"543\" y=\"1257\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+1.9pp Y/Y</text></g><text x=\"242\" y=\"1321\" font-size=\"27\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"160\" y=\"1352\" font-size=\"27\" fill=\"#777\">ROE = Return on average common equity</text></g>",
  "i18n": {
    "zh": {
      "name": "高盛 · 2025 财年第二季度",
      "meta": {
        "title": "高盛 2025 财年第二季度利润表",
        "titleTextLength": 1799.7041015625,
        "period": "2025 财年第二季度"
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
                "x": 432.345703125,
                "top": 312.5390625,
                "lines": [
                  {
                    "text": "$value",
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
                "x": 364.62890625,
                "top": 438.85693359375,
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
                    "text": "净利率 31%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13,
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "asset_wealth_management": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 709.72412109375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 (3%)",
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
                "top": 776.138671875,
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
                    "text": "净利率 17%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13,
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "platform_solutions": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 966.2666015625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +2%",
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
                "top": 981.8935546875,
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
                    "text": "净利率 (7%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13,
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1056.12158203125,
                "top": 553.45458984375,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "$value",
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
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1678.59521484375,
                "top": 376.34912109375,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
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
                "x": 1678.59521484375,
                "top": 1096.4912109375,
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
                    "text": "$value",
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
                "x": 1678.59521484375,
                "top": 1276.201171875,
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
                    "text": "$value",
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
                "x": 2492.4990234375,
                "top": 239.61328125,
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
                    "text": "同比 +22%",
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
                "x": 2492.4990234375,
                "top": 393.2783203125,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
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
                "x": 2492.4990234375,
                "top": 502.6669921875,
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
                    "text": "$value",
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
                "top": 661.541015625,
                "lines": [
                  {
                    "text": "交易相关",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
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
                "top": 773.5341796875,
                "lines": [
                  {
                    "text": "市场开发",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
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
                "top": 879.01611328125,
                "lines": [
                  {
                    "text": "通信与",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "技术",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
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
          "da": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 994.916015625,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
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
                "top": 1096.4912109375,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
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
                "top": 1198.06640625,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
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
                "top": 1299.6416015625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.000000000000004,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"123.00000000000001\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"117.00000000000001\" y=\"1133\" width=\"242\" height=\"148\" rx=\"29.000000000000004\" fill=\"#6a96c3\"/><text x=\"238\" y=\"1186\" text-anchor=\"middle\" font-size=\"29.000000000000004\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"238\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">14.5%</text><text x=\"238\" y=\"1257\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">环比 (0.3 个百分点)</text></g><g><rect x=\"367.00000000000006\" y=\"1133\" width=\"352\" height=\"148\" rx=\"29.000000000000004\" fill=\"#6a96c3\"/><text x=\"543\" y=\"1186\" text-anchor=\"middle\" font-size=\"29.000000000000004\" font-weight=\"800\" fill=\"white\">年化 ROE</text><text data-operating-metric=\"roe\" x=\"543\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">12.8%</text><text x=\"543\" y=\"1257\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">同比 +1.9 个百分点</text></g><text x=\"242\" y=\"1321\" font-size=\"27\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"160\" y=\"1352\" font-size=\"27\" fill=\"#777\">ROE = 平均普通股权益回报率</text></g>"
    }
  }
});})();
