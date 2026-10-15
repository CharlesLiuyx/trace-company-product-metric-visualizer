(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "goldman-sachs-q3-fy25",
  "name": "Goldman Sachs · Q3 FY25",
  "company": "Goldman Sachs",
  "meta": {
    "company": "Goldman Sachs",
    "title": "Goldman Sachs Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/goldman-sachs-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 195,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2508,
    "logoWidth": 244,
    "logoHeight": 243,
    "logoY": 266,
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
      "value": 10.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+18% Y/Y",
        "32% net margin"
      ],
      "valueText": "$10.1B"
    },
    {
      "id": "asset_wealth_management",
      "label": [
        "Asset & Wealth",
        "Management"
      ],
      "value": 4.4,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+17% Y/Y",
        "20% net margin"
      ],
      "valueText": "$4.4B"
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
        "+71% Y/Y",
        "(4%) net margin"
      ],
      "valueText": "$0.7B"
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 15.2,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+20% Y/Y"
      ],
      "valueText": "$15.2B"
    },
    {
      "id": "pretax_income",
      "label": [
        "Pretax income"
      ],
      "value": 5.4,
      "type": "profit",
      "col": 2,
      "order": 4,
      "valueText": "$5.4B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 9.5,
      "type": "cost",
      "col": 2,
      "order": 5,
      "valueText": "($9.5B)"
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
      "order": 6,
      "valueText": "($0.3B)"
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
        "+37% Y/Y"
      ],
      "valueText": "$4.1B"
    },
    {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 1.3,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($1.3B)"
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
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 13,
      "valueText": "($0.5B)"
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
      "value": 0.9,
      "type": "cost",
      "col": 3,
      "order": 16,
      "valueText": "($0.9B)"
    }
  ],
  "links": [
    {
      "source": "global_banking_markets",
      "target": "revenue",
      "value": 10.1,
      "sourceWidth": 162.78076171875,
      "targetWidth": 162.78076171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "asset_wealth_management",
      "target": "revenue",
      "value": 4.4,
      "sourceWidth": 71.62353515625,
      "targetWidth": 71.62353515625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "platform_solutions",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.4,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 9.5,
      "sourceWidth": 154.96728515625,
      "targetWidth": 152.36279296875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_loss",
      "value": 0.3,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4.1,
      "sourceWidth": 66.41455078125,
      "targetWidth": 66.41455078125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.3,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 4.7,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 991.00927734375
    },
    {
      "source": "operating_expenses",
      "target": "transaction_based",
      "value": 2,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 1044.4013671875
    },
    {
      "source": "operating_expenses",
      "target": "market_development",
      "value": 0.2,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "y0": 1061.33056640625
    },
    {
      "source": "operating_expenses",
      "target": "communication_technology",
      "value": 0.5,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "y0": 1066.53955078125
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.5,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 4,
      "targetOrder": 0,
      "y0": 1075.004150390625
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.2,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 5,
      "targetOrder": 0,
      "y0": 1082.817626953125
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.4,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 6,
      "targetOrder": 0,
      "y0": 1088.026611328125
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.9,
      "sourceWidth": 15.626953125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 7,
      "targetOrder": 0,
      "y0": 1097.79345703125
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
      "value": "14.4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.4%"
    },
    {
      "id": "roe",
      "value": "14.2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.2%"
    }
  ],
  "layout": {
    "scale": 17,
    "nodes": {
      "global_banking_markets": {
        "x": 398.4873046875,
        "y": 484.435546875,
        "width": 72.92578125,
        "height": 162.78076171875
      },
      "asset_wealth_management": {
        "x": 398.4873046875,
        "y": 816.50830078125,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "platform_solutions": {
        "x": 398.4873046875,
        "y": 1040.49462890625,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "revenue": {
        "x": 1020.9609375,
        "y": 698.00390625,
        "width": 72.92578125,
        "height": 246.12451171875
      },
      "pretax_income": {
        "x": 1644.73681640625,
        "y": 513.0849609375,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "operating_expenses": {
        "x": 1644.73681640625,
        "y": 953.244140625,
        "width": 72.92578125,
        "height": 152.36279296875
      },
      "provision_for_credit_loss": {
        "x": 1644.73681640625,
        "y": 1274.89892578125,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "net_income": {
        "x": 2267.21044921875,
        "y": 286.494140625,
        "width": 72.92578125,
        "height": 66.41455078125
      },
      "tax": {
        "x": 2267.21044921875,
        "y": 455.7861328125,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "compensation_benefits": {
        "x": 2267.21044921875,
        "y": 566.47705078125,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "transaction_based": {
        "x": 2267.21044921875,
        "y": 721.4443359375,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "market_development": {
        "x": 2267.21044921875,
        "y": 828.228515625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "communication_technology": {
        "x": 2267.21044921875,
        "y": 919.3857421875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "da": {
        "x": 2267.21044921875,
        "y": 1020.9609375,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "occupancy": {
        "x": 2267.21044921875,
        "y": 1116.02490234375,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "professional_fees": {
        "x": 2267.21044921875,
        "y": 1211.0888671875,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "other": {
        "x": 2267.21044921875,
        "y": 1299.6416015625,
        "width": 72.92578125,
        "height": 14.32470703125
      }
    },
    "labels": {
      "global_banking_markets": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 390.673828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+18% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 500.0625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Global Banking &",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Markets",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "32% net margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "asset_wealth_management": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 722.74658203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+17% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 798.27685546875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Asset & Wealth",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Management",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "20% net margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "platform_solutions": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 946.73291015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+71% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 983.19580078125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Platform",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Solutions",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "(4%) net margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1057.423828125,
            "top": 550.85009765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+20% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1681.19970703125,
            "top": 402.39404296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Pretax income",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1681.19970703125,
            "top": 1122.5361328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "provision_for_credit_loss": {
        "blocks": [
          {
            "x": 1681.19970703125,
            "top": 1295.73486328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Provision for",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 257.8447265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net income",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "+37% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 429.7412109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 563.87255859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Compensation",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "transaction_based": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 717.53759765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Transaction based",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "market_development": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 812.6015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Market dev.",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "communication_technology": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 903.7587890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Communication,",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Technology",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1009.24072265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "D&A",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1103.00244140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Occupancy",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1195.4619140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Professional fees",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1285.31689453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"123\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"117\" y=\"1133\" width=\"242\" height=\"148\" rx=\"29\" fill=\"#6a96c3\"/><text x=\"238\" y=\"1186\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"238\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">14.4%</text><text x=\"238\" y=\"1257\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">(0.6pp) Y/Y</text></g><g><rect x=\"367\" y=\"1133\" width=\"352\" height=\"148\" rx=\"29\" fill=\"#6a96c3\"/><text x=\"543\" y=\"1186\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">Annualized ROE</text><text data-operating-metric=\"roe\" x=\"543\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">14.2%</text><text x=\"543\" y=\"1257\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">+3.8pp Y/Y</text></g><text x=\"242\" y=\"1321\" font-size=\"27\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"160\" y=\"1352\" font-size=\"27\" fill=\"#777\">ROE = Return on average common equity</text></g>",
  "i18n": {
    "zh": {
      "name": "高盛 · 2025 财年第三季度",
      "meta": {
        "title": "高盛 2025 财年第三季度利润表",
        "titleTextLength": 1800,
        "period": "2025 财年第三季度"
      },
      "nodes": {
        "global_banking_markets": {
          "label": [
            "全球银行与",
            "市场"
          ],
          "notes": [
            "同比 +18%",
            "净利率 32%"
          ]
        },
        "asset_wealth_management": {
          "label": [
            "资产与财富",
            "管理"
          ],
          "notes": [
            "同比 +17%",
            "净利率 20%"
          ]
        },
        "platform_solutions": {
          "label": [
            "平台",
            "解决方案"
          ],
          "notes": [
            "同比 +71%",
            "净利率 (4%)"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 +20%"
          ]
        },
        "pretax_income": {
          "label": [
            "税前利润"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
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
            "同比 +37%"
          ]
        },
        "tax": {
          "label": [
            "税费"
          ]
        },
        "compensation_benefits": {
          "label": [
            "薪酬与",
            "福利"
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
                "x": 434.9501953125,
                "top": 390.673828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +18%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 500.0625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "全球银行与",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "市场",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 32%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "asset_wealth_management": {
            "blocks": [
              {
                "x": 434.9501953125,
                "top": 722.74658203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 798.27685546875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "资产与财富",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "管理",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 20%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "platform_solutions": {
            "blocks": [
              {
                "x": 434.9501953125,
                "top": 946.73291015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +71%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 983.19580078125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "平台",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "解决方案",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 (4%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1057.423828125,
                "top": 550.85009765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +20%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1681.19970703125,
                "top": 402.39404296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1681.19970703125,
                "top": 1122.5361328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "provision_for_credit_loss": {
            "blocks": [
              {
                "x": 1681.19970703125,
                "top": 1295.73486328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 257.8447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "同比 +37%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 429.7412109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 563.87255859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "薪酬与",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "福利",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "transaction_based": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 717.53759765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "交易相关",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "market_development": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 812.6015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "市场开发",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "communication_technology": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 903.7587890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "通信与",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "技术",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1009.24072265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1103.00244140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1195.4619140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1285.31689453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"123\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"117\" y=\"1133\" width=\"242\" height=\"148\" rx=\"29\" fill=\"#6a96c3\"/><text x=\"238\" y=\"1186\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"238\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">14.4%</text><text x=\"238\" y=\"1257\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">同比 (0.6 个百分点)</text></g><g><rect x=\"367\" y=\"1133\" width=\"352\" height=\"148\" rx=\"29\" fill=\"#6a96c3\"/><text x=\"543\" y=\"1186\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">年化 ROE</text><text data-operating-metric=\"roe\" x=\"543\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">14.2%</text><text x=\"543\" y=\"1257\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">同比 +3.8 个百分点</text></g><text x=\"242\" y=\"1321\" font-size=\"27\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"160\" y=\"1352\" font-size=\"27\" fill=\"#777\">ROE = 平均普通股权益回报率</text></g>"
    }
  }
});})();