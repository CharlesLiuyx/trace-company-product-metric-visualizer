(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "goldman-sachs-q2-fy23",
  "name": "Goldman Sachs · Q2 FY23",
  "company": "Goldman Sachs",
  "meta": {
    "company": "Goldman Sachs",
    "title": "Goldman Sachs Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/goldman-sachs-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 117.2021484375,
    "titleWeight": 800,
    "titleTextLength": 2513.3349609375,
    "logoWidth": 242.2177734375,
    "logoHeight": 244.822265625,
    "logoY": 239.61328125,
    "logoViewBox": "0 0 244 242",
    "logoSvg": ((window.SANKEY_BUSINESS_ICONS || {}).goldmanSachsWordmark || ''),
    "logoX": 919.3857421875
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
      "value": 7.2,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(14%) Y/Y",
        "29% net margin"
      ],
      "valueText": "$7.2B"
    },
    {
      "id": "asset_wealth_management",
      "label": [
        "Asset & Wealth",
        "Management"
      ],
      "value": 3,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(4%) Y/Y",
        "(7%) net margin"
      ],
      "valueText": "$3.0B"
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
        "+92% Y/Y",
        "(101%) net margin"
      ],
      "valueText": "$0.7B"
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 10.9,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "(8%) Y/Y"
      ],
      "valueText": "$10.9B"
    },
    {
      "id": "pretax_income",
      "label": [
        "Pretax income"
      ],
      "value": 1.7,
      "type": "profit",
      "col": 2,
      "order": 4,
      "valueText": "$1.7B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 8.5,
      "type": "cost",
      "col": 2,
      "order": 5,
      "valueText": "($8.5B)"
    },
    {
      "id": "provision_for_credit_loss",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 0.6,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($0.6B)"
    },
    {
      "id": "net_income",
      "label": [
        "Net income"
      ],
      "value": 1.2,
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": [
        "(58%) Y/Y"
      ],
      "valueText": "$1.2B"
    },
    {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($0.5B)"
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 3.6,
      "type": "cost",
      "col": 3,
      "order": 9,
      "valueText": "($3.6B)"
    },
    {
      "id": "transaction_based",
      "label": [
        "Transaction based"
      ],
      "value": 1.4,
      "type": "cost",
      "col": 3,
      "order": 10,
      "valueText": "($1.4B)"
    },
    {
      "id": "market_development",
      "label": [
        "Market dev."
      ],
      "value": 0.1,
      "type": "cost",
      "col": 3,
      "order": 11,
      "valueText": "($0.1B)"
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
      "value": 1.6,
      "type": "cost",
      "col": 3,
      "order": 13,
      "valueText": "($1.6B)"
    },
    {
      "id": "occupancy",
      "label": [
        "Occupancy"
      ],
      "value": 0.3,
      "type": "cost",
      "col": 3,
      "order": 14,
      "valueText": "($0.3B)"
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
      "value": 0.7,
      "type": "cost",
      "col": 3,
      "order": 16,
      "valueText": "($0.7B)"
    }
  ],
  "links": [
    {
      "source": "global_banking_markets",
      "target": "revenue",
      "value": 7.2,
      "sourceWidth": 212.26611328125,
      "targetWidth": 212.26611328125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "asset_wealth_management",
      "target": "revenue",
      "value": 3,
      "sourceWidth": 89.85498046875,
      "targetWidth": 89.85498046875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "platform_solutions",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 19.53369140625,
      "targetWidth": 16.92919921875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 1.7,
      "sourceWidth": 52.08984375,
      "targetWidth": 50.78759765625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 8.5,
      "sourceWidth": 250.03125,
      "targetWidth": 250.03125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_loss",
      "value": 0.6,
      "sourceWidth": 16.92919921875,
      "targetWidth": 18.2314453125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 1.2,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 3.6,
      "sourceWidth": 105.48193359375,
      "targetWidth": 106.7841796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "transaction_based",
      "value": 1.4,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "market_development",
      "value": 0.1,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "communication_technology",
      "value": 0.5,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 1.6,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.3,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 7,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.4,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.7,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "sourceOrder": 6,
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
      "value": "14.9",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.9%"
    },
    {
      "id": "roe",
      "value": "4.0",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "4.0%"
    }
  ],
  "layout": {
    "scale": 22.5,
    "nodes": {
      "global_banking_markets": {
        "x": 384.16259765625,
        "y": 394.58056640625,
        "width": 72.92578125,
        "height": 212.26611328125
      },
      "asset_wealth_management": {
        "x": 384.16259765625,
        "y": 782.64990234375,
        "width": 72.92578125,
        "height": 89.85498046875
      },
      "platform_solutions": {
        "x": 384.16259765625,
        "y": 1058.72607421875,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "revenue": {
        "x": 1006.63623046875,
        "y": 642.00732421875,
        "width": 72.92578125,
        "height": 319.05029296875
      },
      "pretax_income": {
        "x": 1617.3896484375,
        "y": 463.599609375,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "operating_expenses": {
        "x": 1618.69189453125,
        "y": 796.974609375,
        "width": 72.92578125,
        "height": 250.03125
      },
      "provision_for_credit_loss": {
        "x": 1623.90087890625,
        "y": 1235.83154296875,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "net_income": {
        "x": 2251.58349609375,
        "y": 227.89306640625,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "tax": {
        "x": 2251.58349609375,
        "y": 338.583984375,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "compensation_benefits": {
        "x": 2251.58349609375,
        "y": 401.091796875,
        "width": 72.92578125,
        "height": 106.7841796875
      },
      "transaction_based": {
        "x": 2251.58349609375,
        "y": 609.451171875,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "market_development": {
        "x": 2251.58349609375,
        "y": 748.79150390625,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "communication_technology": {
        "x": 2251.58349609375,
        "y": 838.646484375,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "da": {
        "x": 2251.58349609375,
        "y": 940.2216796875,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "professional_fees": {
        "x": 2251.58349609375,
        "y": 1083.46875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "other": {
        "x": 2251.58349609375,
        "y": 1181.13720703125,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "occupancy": {
        "x": 2251.58349609375,
        "y": 1294.4326171875,
        "width": 72.92578125,
        "height": 11.72021484375
      }
    },
    "labels": {
      "global_banking_markets": {
        "blocks": [
          {
            "x": 420.62548828125,
            "top": 302.12109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "(14%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 364.62890625,
            "top": 440.1591796875,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "29% net margin",
                "size": 27.34716796875,
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
            "x": 420.62548828125,
            "top": 687.5859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 364.62890625,
            "top": 781.34765625,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "(7%) net margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "platform_solutions": {
        "blocks": [
          {
            "x": 420.62548828125,
            "top": 963.662109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+92% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 347.69970703125,
            "top": 972.77783203125,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "(101%) net margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1041.796875,
            "top": 494.853515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "(8%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1653.8525390625,
            "top": 354.2109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 1653.8525390625,
            "top": 1060.0283203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 1653.8525390625,
            "top": 1270.9921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Provision for",
                "size": 36.462890625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 36.462890625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 2487.2900390625,
            "top": 196.63916015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net income",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "(58%) Y/Y",
                "size": 27.34716796875,
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
            "x": 2487.2900390625,
            "top": 333.375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2487.2900390625,
            "top": 418.02099609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2487.2900390625,
            "top": 591.2197265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Transaction based",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2487.2900390625,
            "top": 713.630859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Market dev.",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2487.2900390625,
            "top": 807.392578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2487.2900390625,
            "top": 925.89697265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "D&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2487.2900390625,
            "top": 1259.27197265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2487.2900390625,
            "top": 1049.6103515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional fees",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2487.2900390625,
            "top": 1166.8125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122.4111328125\" y=\"256.54248046875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"117.2021484375\" y=\"1152.48779296875\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#6a96c3\"/><text x=\"237.0087890625\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"237.0087890625\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">14.9%</text><text x=\"237.0087890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+0.1pp Q/Q</text></g><g><rect x=\"367.2333984375\" y=\"1152.48779296875\" width=\"351.6064453125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#6a96c3\"/><text x=\"543.03662109375\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">Annualized ROE</text><text data-operating-metric=\"roe\" x=\"543.03662109375\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">4.0%</text><text x=\"543.03662109375\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">(7.6pp) Q/Q</text></g><text x=\"242.2177734375\" y=\"1341.3134765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"147.15380859375\" y=\"1386.89208984375\" font-size=\"27.34716796875\" fill=\"#777\">ROE = Return on average common equity</text><text x=\"169.2919921875\" y=\"1437.6796875\" font-size=\"37.76513671875\" font-weight=\"800\" fill=\"#000\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "高盛 · 2023 财年第二季度",
      "meta": {
        "title": "高盛 2023 财年第二季度利润表",
        "titleTextLength": 1797.099609375,
        "period": "2023 财年第二季度"
      },
      "nodes": {
        "global_banking_markets": {
          "label": [
            "全球银行",
            "与市场"
          ],
          "notes": [
            "同比 (14%)",
            "净利率 29%"
          ]
        },
        "asset_wealth_management": {
          "label": [
            "资产与财富",
            "管理"
          ],
          "notes": [
            "同比 (4%)",
            "净利率 (7%)"
          ]
        },
        "platform_solutions": {
          "label": [
            "平台",
            "解决方案"
          ],
          "notes": [
            "同比 +92%",
            "净利率 (101%)"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 (8%)"
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
            "同比 (58%)"
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
                "x": 420.62548828125,
                "top": 302.12109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 (14%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 364.62890625,
                "top": 440.1591796875,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "净利率 29%",
                    "size": 27.34716796875,
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
                "x": 420.62548828125,
                "top": 687.5859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 364.62890625,
                "top": 781.34765625,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "净利率 (7%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "platform_solutions": {
            "blocks": [
              {
                "x": 420.62548828125,
                "top": 963.662109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +92%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 347.69970703125,
                "top": 972.77783203125,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "净利率 (101%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1041.796875,
                "top": 494.853515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1653.8525390625,
                "top": 354.2109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 1653.8525390625,
                "top": 1060.0283203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营",
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
                "x": 1653.8525390625,
                "top": 1270.9921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 2487.2900390625,
                "top": 196.63916015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "同比 (58%)",
                    "size": 27.34716796875,
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
                "x": 2487.2900390625,
                "top": 333.375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2487.2900390625,
                "top": 418.02099609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2487.2900390625,
                "top": 591.2197265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "交易相关",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2487.2900390625,
                "top": 713.630859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "市场开发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2487.2900390625,
                "top": 807.392578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2487.2900390625,
                "top": 925.89697265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2487.2900390625,
                "top": 1259.27197265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2487.2900390625,
                "top": 1049.6103515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2487.2900390625,
                "top": 1166.8125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122.4111328125\" y=\"256.54248046875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"117.2021484375\" y=\"1152.48779296875\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#6a96c3\"/><text x=\"237.0087890625\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"237.0087890625\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">14.9%</text><text x=\"237.0087890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">环比 +0.1 个百分点</text></g><g><rect x=\"367.2333984375\" y=\"1152.48779296875\" width=\"351.6064453125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#6a96c3\"/><text x=\"543.03662109375\" y=\"1205.8798828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">年化 ROE</text><text data-operating-metric=\"roe\" x=\"543.03662109375\" y=\"1244.947265625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">4.0%</text><text x=\"543.03662109375\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">环比 (7.6 个百分点)</text></g><text x=\"242.2177734375\" y=\"1341.3134765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"147.15380859375\" y=\"1386.89208984375\" font-size=\"27.34716796875\" fill=\"#777\">ROE = 平均普通股权益回报率</text><text x=\"169.2919921875\" y=\"1437.6796875\" font-size=\"37.76513671875\" font-weight=\"800\" fill=\"#000\">来源：季度业绩</text></g>"
    }
  }
});})();
