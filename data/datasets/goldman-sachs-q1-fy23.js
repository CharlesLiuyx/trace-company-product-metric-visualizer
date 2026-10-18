(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "goldman-sachs-q1-fy23",
  "name": "Goldman Sachs · Q1 FY23",
  "company": "Goldman Sachs",
  "meta": {
    "company": "Goldman Sachs",
    "title": "Goldman Sachs Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/goldman-sachs-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 114.59765625,
    "titleWeight": 800,
    "logoWidth": 243.52001953125,
    "logoHeight": 242.2177734375,
    "logoY": 273.4716796875,
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
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    }
  },
  "nodes": [
    {
      "id": "global_banking_markets",
      "label": [
        "Global Banking &",
        "Markets"
      ],
      "value": 8.4,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(16%) Y/Y",
        "35% net margin"
      ]
    },
    {
      "id": "asset_wealth_management",
      "label": [
        "Asset & Wealth",
        "Management"
      ],
      "value": 3.2,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+24% Y/Y",
        "15% net margin"
      ]
    },
    {
      "id": "platform_solutions",
      "label": [
        "Platform",
        "Solutions"
      ],
      "value": 0.6,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+110% Y/Y",
        "(44%) net margin"
      ]
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 12.2,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": [
        "Pretax income"
      ],
      "value": 4,
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
      "value": 8.4,
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
      "value": 0.2,
      "type": "profit",
      "col": 2,
      "order": 6
    },
    {
      "id": "net_income",
      "label": [
        "Net income"
      ],
      "value": 3.2,
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": [
        "(18%) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 0.8,
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
      "value": 4.1,
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "transaction_based",
      "label": [
        "Transaction based"
      ],
      "value": 1.4,
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
      "value": 1,
      "type": "cost",
      "col": 3,
      "order": 13
    },
    {
      "id": "occupancy",
      "label": [
        "Occupancy"
      ],
      "value": 0.3,
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
      "value": 8.4,
      "sourceWidth": 205.7548828125,
      "targetWidth": 204.45263671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "asset_wealth_management",
      "target": "revenue",
      "value": 3.2,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "platform_solutions",
      "target": "revenue",
      "value": 0.6,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.8,
      "sourceWidth": 93.76171875,
      "targetWidth": 93.76171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 8.4,
      "sourceWidth": 203.150390625,
      "targetWidth": 204.45263671875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "provision_for_credit_loss",
      "target": "pretax_income",
      "value": 0.2,
      "sourceWidth": 3.90673828125,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.2,
      "sourceWidth": 78.134765625,
      "targetWidth": 79.43701171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.8,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 4.1,
      "sourceWidth": 100.27294921875,
      "targetWidth": 100.27294921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "transaction_based",
      "value": 1.4,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "market_development",
      "value": 0.2,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "communication_technology",
      "value": 0.5,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 1,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.4,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.3,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 6,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.7,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 7,
      "targetOrder": 0
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "cost_of_revenue",
      "representation": "data-only"
    },
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "14.8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.8%"
    },
    {
      "id": "rotce",
      "value": "12.6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "12.6%"
    }
  ],
  "layout": {
    "scale": 24.352001953125,
    "nodes": {
      "global_banking_markets": {
        "x": 389.37158203125,
        "y": 428.43896484375,
        "width": 72.92578125,
        "height": 205.7548828125
      },
      "asset_wealth_management": {
        "x": 389.37158203125,
        "y": 813.90380859375,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "platform_solutions": {
        "x": 389.37158203125,
        "y": 1100.39794921875,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "revenue": {
        "x": 1011.84521484375,
        "y": 671.958984375,
        "width": 72.92578125,
        "height": 296.912109375
      },
      "pretax_income": {
        "x": 1635.62109375,
        "y": 453.181640625,
        "width": 72.92578125,
        "height": 96.3662109375
      },
      "operating_expenses": {
        "x": 1622.5986328125,
        "y": 895.9453125,
        "width": 72.92578125,
        "height": 204.45263671875
      },
      "provision_for_credit_loss": {
        "x": 1488.46728515625,
        "y": 651.123046875,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "net_income": {
        "x": 2258.0947265625,
        "y": 247.4267578125,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "tax": {
        "x": 2258.0947265625,
        "y": 389.37158203125,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "compensation_benefits": {
        "x": 2258.0947265625,
        "y": 466.2041015625,
        "width": 72.92578125,
        "height": 100.27294921875
      },
      "transaction_based": {
        "x": 2258.0947265625,
        "y": 651.123046875,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "market_development": {
        "x": 2258.0947265625,
        "y": 789.1611328125,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "communication_technology": {
        "x": 2258.0947265625,
        "y": 895.9453125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "da": {
        "x": 2258.0947265625,
        "y": 1002.7294921875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "professional_fees": {
        "x": 2258.0947265625,
        "y": 1130.349609375,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "occupancy": {
        "x": 2258.0947265625,
        "y": 1239.73828125,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "other": {
        "x": 2258.0947265625,
        "y": 1346.5224609375,
        "width": 72.92578125,
        "height": 15.626953125
      }
    },
    "labels": {
      "global_banking_markets": {
        "blocks": [
          {
            "x": 425.83447265625,
            "top": 329.46826171875,
            "lines": [
              {
                "text": "$8.4B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "(16%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          },
          {
            "x": 364.62890625,
            "top": 457.08837890625,
            "lines": [
              {
                "text": "Global Banking &",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Markets",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "35% net margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13.0224609375
          }
        ]
      },
      "asset_wealth_management": {
        "blocks": [
          {
            "x": 425.83447265625,
            "top": 713.630859375,
            "lines": [
              {
                "text": "$3.2B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+24% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          },
          {
            "x": 364.62890625,
            "top": 777.44091796875,
            "lines": [
              {
                "text": "Asset & Wealth",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Management",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "15% net margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13.0224609375
          }
        ]
      },
      "platform_solutions": {
        "blocks": [
          {
            "x": 425.83447265625,
            "top": 1000.125,
            "lines": [
              {
                "text": "$0.6B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+110% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          },
          {
            "x": 364.62890625,
            "top": 998.82275390625,
            "lines": [
              {
                "text": "Platform",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Solutions",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "(44%) net margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13.0224609375
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1048.30810546875,
            "top": 523.5029296875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "$12.2B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1672.083984375,
            "top": 338.583984375,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$4.0B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f47"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "provision_for_credit_loss": {
        "blocks": [
          {
            "x": 1524.93017578125,
            "top": 664.1455078125,
            "lines": [
              {
                "text": "Provision for",
                "size": 36.462890625,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "credit losses",
                "size": 36.462890625,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$0.2B",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1659.0615234375,
            "top": 1108.21142578125,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($8.4B)",
                "size": 36.462890625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 217.47509765625,
            "lines": [
              {
                "text": "Net income",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$3.2B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "(18%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 358.11767578125,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.8B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 467.50634765625,
            "lines": [
              {
                "text": "Compensation",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($4.1B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "transaction_based": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 648.5185546875,
            "lines": [
              {
                "text": "Transaction based",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($1.4B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "market_development": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 770.9296875,
            "lines": [
              {
                "text": "Market dev.",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.2B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "communication_technology": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 865.99365234375,
            "lines": [
              {
                "text": "Communication,",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Technology",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.5B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 985.80029296875,
            "lines": [
              {
                "text": "D&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($1.0B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 1097.79345703125,
            "lines": [
              {
                "text": "Professional fees",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.4B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 1208.484375,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.3B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 1329.59326171875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.7B)",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10.41796875
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122.4111328125\" y=\"255.240234375\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"151.060546875\" y=\"1152.48779296875\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#6b96c3\"/><text x=\"271.518310546875\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"271.518310546875\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">14.8%</text><text x=\"271.518310546875\" y=\"1276.201171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+0.4pp Y/Y</text></g><g><rect x=\"401.091796875\" y=\"1152.48779296875\" width=\"273.4716796875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#6b96c3\"/><text x=\"537.82763671875\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">ROTCE</text><text data-operating-metric=\"rotce\" x=\"537.82763671875\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">12.6%</text><text x=\"537.82763671875\" y=\"1276.201171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">(3.2pp) Y/Y</text></g><text x=\"240.91552734375\" y=\"1341.3134765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"88.552734375\" y=\"1386.89208984375\" font-size=\"27.34716796875\" fill=\"#777\">ROTCE = Return on average tangible common equity</text><text x=\"169.2919921875\" y=\"1438.98193359375\" font-size=\"37.76513671875\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "高盛 · 2023 财年第一季度",
      "meta": {
        "title": "高盛 2023 财年第一季度利润表",
        "period": "2023 财年第一季度"
      },
      "nodes": {
        "global_banking_markets": {
          "label": [
            "全球银行",
            "与市场"
          ],
          "notes": [
            "同比 (16%)",
            "净利率 35%"
          ]
        },
        "asset_wealth_management": {
          "label": [
            "资产与财富",
            "管理"
          ],
          "notes": [
            "同比 +24%",
            "净利率 15%"
          ]
        },
        "platform_solutions": {
          "label": [
            "平台",
            "解决方案"
          ],
          "notes": [
            "同比 +110%",
            "净利率 (44%)"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 (5%)"
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
          ],
          "notes": [
            "同比 (18%)"
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
        "professional_fees": {
          "label": [
            "专业费用"
          ]
        },
        "occupancy": {
          "label": [
            "场地占用"
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
                "x": 425.83447265625,
                "top": 329.46826171875,
                "lines": [
                  {
                    "text": "$8.4B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 (16%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              },
              {
                "x": 364.62890625,
                "top": 457.08837890625,
                "lines": [
                  {
                    "text": "全球银行",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "与市场",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 35%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13.0224609375
              }
            ]
          },
          "asset_wealth_management": {
            "blocks": [
              {
                "x": 425.83447265625,
                "top": 713.630859375,
                "lines": [
                  {
                    "text": "$3.2B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              },
              {
                "x": 364.62890625,
                "top": 777.44091796875,
                "lines": [
                  {
                    "text": "资产与财富",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "管理",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13.0224609375
              }
            ]
          },
          "platform_solutions": {
            "blocks": [
              {
                "x": 425.83447265625,
                "top": 1000.125,
                "lines": [
                  {
                    "text": "$0.6B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +110%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              },
              {
                "x": 364.62890625,
                "top": 998.82275390625,
                "lines": [
                  {
                    "text": "平台",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 (44%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13.0224609375
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1048.30810546875,
                "top": 523.5029296875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "$12.2B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1672.083984375,
                "top": 338.583984375,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$4.0B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "provision_for_credit_loss": {
            "blocks": [
              {
                "x": 1524.93017578125,
                "top": 664.1455078125,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "拨备",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$0.2B",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1659.0615234375,
                "top": 1108.21142578125,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($8.4B)",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 217.47509765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$3.2B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "同比 (18%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 358.11767578125,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.8B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 467.50634765625,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "与福利",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($4.1B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "transaction_based": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 648.5185546875,
                "lines": [
                  {
                    "text": "交易相关",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($1.4B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "market_development": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 770.9296875,
                "lines": [
                  {
                    "text": "市场开发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.2B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "communication_technology": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 865.99365234375,
                "lines": [
                  {
                    "text": "通信与",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "技术",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.5B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 985.80029296875,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($1.0B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 1097.79345703125,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.4B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 1208.484375,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.3B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 1329.59326171875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.7B)",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10.41796875
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122.4111328125\" y=\"255.240234375\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"151.060546875\" y=\"1152.48779296875\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#6b96c3\"/><text x=\"271.518310546875\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"271.518310546875\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">14.8%</text><text x=\"271.518310546875\" y=\"1276.201171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比 +0.4 个百分点</text></g><g><rect x=\"401.091796875\" y=\"1152.48779296875\" width=\"273.4716796875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#6b96c3\"/><text x=\"537.82763671875\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">ROTCE</text><text data-operating-metric=\"rotce\" x=\"537.82763671875\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">12.6%</text><text x=\"537.82763671875\" y=\"1276.201171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比 (3.2 个百分点)</text></g><text x=\"240.91552734375\" y=\"1341.3134765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"88.552734375\" y=\"1386.89208984375\" font-size=\"27.34716796875\" fill=\"#777\">ROTCE = 平均有形普通股权益回报率</text><text x=\"169.2919921875\" y=\"1438.98193359375\" font-size=\"37.76513671875\" font-weight=\"800\">来源：季度业绩</text></g>"
    }
  }
});})();
