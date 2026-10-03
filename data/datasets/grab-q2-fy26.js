(function(){ window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "grab-q2-fy26",
  "name": "Grab · Q2 FY26",
  "company": "Grab",
  "meta": {
    "company": "Grab",
    "title": "Grab Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/grab-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "linkOpacity": 1,
    "type": {
      "name": 29,
      "value": 29,
      "note": 21,
      "lineGap": 6
    }
  },
  "nodes": [
    {
      "id": "deliveries",
      "value": 531,
      "type": "source",
      "label": "Deliveries",
      "notes": [
        "+21% Y/Y",
        "18% adjusted margin",
        "+4pp Y/Y"
      ],
      "col": 0,
      "order": 0,
      "color": "#00b14f",
      "labelColor": "#00b14f"
    },
    {
      "id": "mobility",
      "value": 331,
      "type": "source",
      "label": "Mobility",
      "notes": [
        "+12% Y/Y",
        "58% adjusted margin",
        "+2pp Y/Y"
      ],
      "col": 0,
      "order": 1,
      "color": "#00b14f",
      "labelColor": "#00b14f"
    },
    {
      "id": "financial_services",
      "value": 134,
      "type": "source",
      "label": "Financial Services",
      "notes": [
        "+59% Y/Y",
        "(11%) adjusted margin",
        "+20pp Y/Y"
      ],
      "col": 0,
      "order": 2,
      "color": "#00b14f",
      "labelColor": "#00b14f"
    },
    {
      "id": "revenue",
      "value": 997,
      "type": "hub",
      "label": "Revenue",
      "notes": [
        "+22% Y/Y"
      ],
      "col": 1,
      "order": 3,
      "color": "#00b14f",
      "labelColor": "#00b14f"
    },
    {
      "id": "gross_profit",
      "value": 434,
      "type": "profit",
      "label": "Gross profit",
      "notes": [
        "44% margin",
        "+0pp Y/Y"
      ],
      "col": 2,
      "order": 4,
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "value": 562,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "notes": [],
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_profit",
      "value": 19,
      "type": "profit",
      "label": "Operating profit",
      "notes": [
        "2% margin",
        "+1pp Y/Y"
      ],
      "col": 3,
      "order": 6,
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "operating_expenses",
      "value": 416,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "notes": [],
      "col": 3,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "other_income",
      "value": 173,
      "type": "profit",
      "label": "Other",
      "notes": [],
      "col": 4,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "tax_benefit",
      "value": 43,
      "type": "profit",
      "label": "Tax benefit",
      "notes": [],
      "col": 4,
      "order": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "net_profit",
      "value": 234,
      "type": "profit",
      "label": "Net profit",
      "notes": [],
      "col": 5,
      "order": 10,
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "ga",
      "value": 139,
      "type": "cost",
      "label": "G&A",
      "notes": [
        "14% of revenue",
        "(0pp) Y/Y"
      ],
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "rnd",
      "value": 103,
      "type": "cost",
      "label": "R&D",
      "notes": [
        "10% of revenue",
        "(3pp) Y/Y"
      ],
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sm",
      "value": 102,
      "type": "cost",
      "label": "S&M",
      "notes": [
        "10% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "other_opex",
      "value": 72,
      "type": "cost",
      "label": "Other",
      "notes": [
        "7% of revenue",
        "+4pp Y/Y"
      ],
      "col": 5,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "deliveries",
      "target": "revenue",
      "value": 531,
      "sourceWidth": 210.9638671875,
      "targetWidth": 210.9638671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d4a9"
    },
    {
      "source": "mobility",
      "target": "revenue",
      "value": 331,
      "sourceWidth": 131.52685546875,
      "targetWidth": 131.52685546875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85d4a9"
    },
    {
      "source": "financial_services",
      "target": "revenue",
      "value": 134,
      "sourceWidth": 53.39208984375,
      "targetWidth": 52.08984375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85d4a9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 434,
      "sourceWidth": 171.896484375,
      "targetWidth": 171.896484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 562,
      "sourceWidth": 222.68408203125,
      "targetWidth": 222.68408203125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 19,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 416,
      "sourceWidth": 164.0830078125,
      "targetWidth": 165.38525390625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 19,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y1": 368.53564453125,
      "linkTint": "#99cd99"
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 43,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y1": 356.164306640625,
      "linkTint": "#99cd99"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 173,
      "sourceWidth": 69.01904296875,
      "targetWidth": 67.716796875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "y1": 406.30078125,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 139,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 103,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 102,
      "sourceWidth": 41.671875,
      "targetWidth": 40.36962890625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 72,
      "sourceWidth": 28.6494140625,
      "targetWidth": 27.34716796875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "deliveries": {
        "x": 429.7412109375,
        "y": 363.32666015625,
        "width": 72.92578125,
        "height": 210.9638671875
      },
      "mobility": {
        "x": 429.7412109375,
        "y": 737.0712890625,
        "width": 72.92578125,
        "height": 131.52685546875
      },
      "financial_services": {
        "x": 429.7412109375,
        "y": 1048.30810546875,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "revenue": {
        "x": 897.24755859375,
        "y": 602.93994140625,
        "width": 72.92578125,
        "height": 394.58056640625
      },
      "gross_profit": {
        "x": 1364.75390625,
        "y": 497.4580078125,
        "width": 71.62353515625,
        "height": 171.896484375
      },
      "cost_of_revenue": {
        "x": 1364.75390625,
        "y": 877.7138671875,
        "width": 71.62353515625,
        "height": 222.68408203125
      },
      "operating_profit": {
        "x": 1830.9580078125,
        "y": 429.7412109375,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "operating_expenses": {
        "x": 1830.9580078125,
        "y": 595.12646484375,
        "width": 72.92578125,
        "height": 165.38525390625
      },
      "tax_benefit": {
        "x": 2156.51953125,
        "y": 313.84130859375,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "other_income": {
        "x": 2161.728515625,
        "y": 419.3232421875,
        "width": 72.92578125,
        "height": 69.01904296875
      },
      "net_profit": {
        "x": 2298.46435546875,
        "y": 347.69970703125,
        "width": 72.92578125,
        "height": 92.45947265625
      },
      "ga": {
        "x": 2298.46435546875,
        "y": 613.35791015625,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "rnd": {
        "x": 2298.46435546875,
        "y": 815.2060546875,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "sm": {
        "x": 2298.46435546875,
        "y": 997.5205078125,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "other_opex": {
        "x": 2298.46435546875,
        "y": 1195.4619140625,
        "width": 72.92578125,
        "height": 27.34716796875
      }
    },
    "labels": {
      "deliveries": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 270.8671875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00b14f"
              },
              {
                "text": "+21% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 251.33349609375,
            "top": 440.1591796875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Deliveries",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#00b14f"
              },
              {
                "text": "18% adjusted margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "mobility": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 645.9140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00b14f"
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 251.33349609375,
            "top": 744.884765625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Mobility",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#00b14f"
              },
              {
                "text": "58% adjusted margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "financial_services": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 955.8486328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00b14f"
              },
              {
                "text": "+59% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 231.7998046875,
            "top": 1001.42724609375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Financial Services",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#00b14f"
              },
              {
                "text": "(11%) adjusted margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+20pp Y/Y",
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
            "x": 937.6171875,
            "top": 459.69287109375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1401.216796875,
            "top": 315.1435546875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "44% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1401.216796875,
            "top": 1121.23388671875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1867.4208984375,
            "top": 247.4267578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "2% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1867.4208984375,
            "top": 782.64990234375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2198.19140625,
            "top": 503.96923828125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "x": 2192.982421875,
            "top": 227.89306640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2497.7080078125,
            "top": 351.6064453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 600.33544921875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 791.765625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "10% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 977.98681640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "10% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 1170.71923828125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans\" ><rect x=\"50\" y=\"864\" width=\"292\" height=\"126\" rx=\"32\" fill=\"#00b14f\"/><g fill=\"white\"><text x=\"196.0\" y=\"905\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\">On-Demand GMV</text><text data-operating-metric=\"on_demand_gmv\" x=\"196.0\" y=\"938\" text-anchor=\"middle\" font-size=\"24\">$6.4B</text><text x=\"196.0\" y=\"970\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\">+21% Y/Y</text></g><rect x=\"349\" y=\"864\" width=\"256\" height=\"126\" rx=\"32\" fill=\"#00b14f\"/><g fill=\"white\"><text x=\"477.0\" y=\"905\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\">Group MTUs</text><text data-operating-metric=\"group_mtus\" x=\"477.0\" y=\"938\" text-anchor=\"middle\" font-size=\"24\">54M</text><text x=\"477.0\" y=\"970\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\">+17% Y/Y</text></g><g fill=\"#777777\"><text x=\"327\" y=\"1014\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\">GMV = Gross Merchandise Value</text><text x=\"327\" y=\"1040\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\">MTUs = Monthly Transacting Users</text></g></g></g>",
  "rasterAnnotations": [
    {
      "x": 697,
      "y": 247,
      "width": 488,
      "height": 184,
      "key": "logo",
      "href": "data/assets/raster-annotations/grab-q2-fy26/logo.png"
    },
    {
      "x": 143,
      "y": 323,
      "width": 216,
      "height": 107,
      "key": "deliveries",
      "href": "data/assets/raster-annotations/grab-q2-fy26/deliveries.png"
    },
    {
      "x": 135,
      "y": 625,
      "width": 224,
      "height": 107,
      "key": "mobility",
      "href": "data/assets/raster-annotations/grab-q2-fy26/mobility.png"
    },
    {
      "x": 137,
      "y": 887,
      "width": 220,
      "height": 107,
      "key": "financial_services",
      "href": "data/assets/raster-annotations/grab-q2-fy26/financial_services.png"
    }
  ],
  "operatingMetrics": [
    {
      "id": "on_demand_gmv",
      "value": "6.4",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$6.4B"
    },
    {
      "id": "group_mtus",
      "value": "54000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "54M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Grab · 2026 财年第二季度",
      "meta": {
        "title": "Grab 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 111.9931640625
      },
      "nodes": {
        "deliveries": {
          "label": "配送",
          "notes": [
            "同比 +21%",
            "经调整利润率 18%",
            "同比 +4 个百分点"
          ]
        },
        "mobility": {
          "label": "出行",
          "notes": [
            "同比 +12%",
            "经调整利润率 58%",
            "同比 +2 个百分点"
          ]
        },
        "financial_services": {
          "label": "金融服务",
          "notes": [
            "同比 +59%",
            "经调整利润率 (11%)",
            "同比 +20 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +22%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 44%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "tax_benefit": {
          "label": "税收收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": []
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 14%",
            "同比 (0 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 10%",
            "同比 (3 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 10%",
            "同比 (1 个百分点)"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": [
            "占收入 7%",
            "同比 +4 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "deliveries": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 270.8671875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00b14f"
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 251.33349609375,
                "top": 440.1591796875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "配送",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#00b14f"
                  },
                  {
                    "text": "经调整利润率 18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "mobility": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 645.9140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00b14f"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 251.33349609375,
                "top": 744.884765625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "出行",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#00b14f"
                  },
                  {
                    "text": "经调整利润率 58%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "financial_services": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 955.8486328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00b14f"
                  },
                  {
                    "text": "同比 +59%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 231.7998046875,
                "top": 1001.42724609375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "金融服务",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#00b14f"
                  },
                  {
                    "text": "经调整利润率 (11%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +20 个百分点",
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
                "x": 937.6171875,
                "top": 459.69287109375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1401.216796875,
                "top": 315.1435546875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 44%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1401.216796875,
                "top": 1121.23388671875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1867.4208984375,
                "top": 247.4267578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1867.4208984375,
                "top": 782.64990234375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2198.19140625,
                "top": 503.96923828125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax_benefit": {
            "blocks": [
              {
                "x": 2192.982421875,
                "top": 227.89306640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2497.7080078125,
                "top": 351.6064453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 600.33544921875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 791.765625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 977.98681640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 1170.71923828125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans\" ><rect x=\"50\" y=\"864\" width=\"292\" height=\"126\" rx=\"32\" fill=\"#00b14f\"/><g fill=\"white\"><text x=\"196.0\" y=\"905\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\">按需 GMV</text><text data-operating-metric=\"on_demand_gmv\" x=\"196.0\" y=\"938\" text-anchor=\"middle\" font-size=\"24\">$6.4B</text><text x=\"196.0\" y=\"970\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\">同比 +21%</text></g><rect x=\"349\" y=\"864\" width=\"256\" height=\"126\" rx=\"32\" fill=\"#00b14f\"/><g fill=\"white\"><text x=\"477.0\" y=\"905\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\">集团 MTUs</text><text data-operating-metric=\"group_mtus\" x=\"477.0\" y=\"938\" text-anchor=\"middle\" font-size=\"24\">54M</text><text x=\"477.0\" y=\"970\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\">同比 +17%</text></g><g fill=\"#777777\"><text x=\"327\" y=\"1014\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\">GMV = 商品交易总额</text><text x=\"327\" y=\"1040\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\">MTUs = 月交易用户数</text></g></g></g>"
    }
  }
}); })();
