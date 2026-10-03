/* UPS Q1 FY25: source values and measured native Sankey geometry. */
(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "ups-q1-fy25",
  "name": "UPS · Q1 FY25",
  "company": "UPS",
  "meta": {
    "company": "UPS",
    "title": "UPS Q1 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/ups-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 124,
    "titleWeight": 800,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 230,
    "logoHeight": 250,
    "logoY": 257,
    "logoViewBox": "0 0 240 280",
    "logoSvg": "\n    <g>\n      <path d=\"M120 2C168 2 204 9 228 22v105c0 61-41 110-108 143C53 237 12 188 12 127V22C36 9 72 2 120 2Z\" fill=\"#ffb406\"/>\n      <path d=\"M120 25c40 0 71 5 91 15v87c0 52-35 94-91 125-56-31-91-73-91-125V40c20-10 51-15 91-15Z\" fill=\"#341b14\"/>\n      <path d=\"M29 40c20-10 51-15 91-15s71 5 91 15v24H29Z\" fill=\"#ffb406\"/>\n      <text x=\"120\" y=\"173\" text-anchor=\"middle\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"104\" font-weight=\"900\" letter-spacing=\"-12\" fill=\"#ffb406\">UPS</text>\n      <text x=\"192\" y=\"247\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"#ffb406\">®</text>\n    </g>"
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
        "node": "#ffb406",
        "label": "#341b14"
      },
      "hub": {
        "node": "#ffb406",
        "label": "#341b14"
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
      "source": "#f7d688",
      "hub": "#f7d688",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"other_income\" data-link-numerator=\"other_income\" data-link-denominator=\"net_profit\" data-link-anchor-x=\"2160\" data-link-anchor-y=\"356\"><path d=\"M2060 348H2135C2170 348 2175 365 2232 366\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"2092\" y=\"284\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#008f51\">Other</text><text x=\"2092\" y=\"325\" text-anchor=\"middle\" font-size=\"31\" fill=\"#008f51\">$0.1B</text></g>",
  "layout": {
    "scale": 13.58,
    "routes": {
      "other_income": {
        "x": 2136,
        "y": 348,
        "width": 0,
        "height": 2
      }
    },
    "nodes": {
      "us_domestic_package": {
        "x": 364,
        "y": 476,
        "width": 71,
        "height": 196
      },
      "international_package": {
        "x": 364,
        "y": 859,
        "width": 71,
        "height": 58
      },
      "supply_chain_solutions": {
        "x": 364,
        "y": 1113,
        "width": 71,
        "height": 35
      },
      "revenue": {
        "x": 984,
        "y": 679,
        "width": 71,
        "height": 292
      },
      "operating_profit": {
        "x": 1607,
        "y": 523,
        "width": 71,
        "height": 21
      },
      "operating_expenses": {
        "x": 1609,
        "y": 802,
        "width": 72,
        "height": 269
      },
      "net_profit": {
        "x": 2232,
        "y": 366,
        "width": 71,
        "height": 15
      },
      "tax": {
        "x": 2232,
        "y": 502,
        "width": 71,
        "height": 4
      },
      "interest": {
        "x": 2232,
        "y": 602,
        "width": 71,
        "height": 2
      },
      "comp_benefits": {
        "x": 2232,
        "y": 673,
        "width": 71,
        "height": 159
      },
      "maintenance": {
        "x": 2232,
        "y": 904,
        "width": 71,
        "height": 8
      },
      "depreciation_amortization": {
        "x": 2232,
        "y": 986,
        "width": 71,
        "height": 12
      },
      "purchased_transportation": {
        "x": 2232,
        "y": 1066,
        "width": 71,
        "height": 36
      },
      "fuel": {
        "x": 2232,
        "y": 1171,
        "width": 71,
        "height": 14
      },
      "other_occupancy": {
        "x": 2232,
        "y": 1254,
        "width": 71,
        "height": 6
      },
      "other_operating": {
        "x": 2232,
        "y": 1327,
        "width": 71,
        "height": 26
      }
    },
    "labels": {
      "us_domestic_package": {
        "icons": {
          "x": 150,
          "y": 432,
          "names": [
            "package"
          ],
          "size": 76,
          "color": "#777777",
          "strokeWidth": 2.1
        },
        "blocks": [
          {
            "x": 399.5,
            "top": 387,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#341b14"
              },
              {
                "text": "+1% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          },
          {
            "x": 190,
            "top": 528,
            "lines": [
              {
                "text": "US Domestic",
                "size": 40,
                "weight": 800,
                "color": "#341b14"
              },
              {
                "text": "Package",
                "size": 40,
                "weight": 800,
                "color": "#341b14"
              }
            ],
            "anchor": "middle",
            "lineGap": 8,
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 190,
            "top": 635,
            "lines": [
              {
                "text": "7% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "international_package": {
        "icons": {
          "x": 150,
          "y": 724,
          "names": [
            "globe"
          ],
          "size": 76,
          "color": "#777777",
          "strokeWidth": 2.1
        },
        "blocks": [
          {
            "x": 399.5,
            "top": 770,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#341b14"
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          },
          {
            "x": 190,
            "top": 810,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800,
                "color": "#341b14"
              },
              {
                "text": "Package",
                "size": 40,
                "weight": 800,
                "color": "#341b14"
              }
            ],
            "anchor": "middle",
            "lineGap": 8,
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 190,
            "top": 914,
            "lines": [
              {
                "text": "15% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "supply_chain_solutions": {
        "icons": {
          "x": 150,
          "y": 1020,
          "names": [
            "truck"
          ],
          "size": 76,
          "color": "#777777",
          "strokeWidth": 2.1
        },
        "blocks": [
          {
            "x": 399.5,
            "top": 1023,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#341b14"
              },
              {
                "text": "(15%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          },
          {
            "x": 190,
            "top": 1091,
            "lines": [
              {
                "text": "Supply Chain",
                "size": 40,
                "weight": 800,
                "color": "#341b14"
              },
              {
                "text": "Solutions",
                "size": 40,
                "weight": 800,
                "color": "#341b14"
              }
            ],
            "anchor": "middle",
            "lineGap": 8,
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 190,
            "top": 1218,
            "lines": [
              {
                "text": "2% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1019.5,
            "top": 535,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#341b14"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#341b14"
              },
              {
                "text": "(1%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1642.5,
            "top": 341,
            "lines": [
              {
                "text": "Operating profit",
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
                "text": "8% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1645,
            "top": 1090,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
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
            "lineGap": 8
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2446,
            "top": 287,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "6% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "other_income": {
        "blocks": []
      },
      "tax": {
        "blocks": [
          {
            "x": 2324,
            "top": 494,
            "lines": [
              {
                "text": "Tax ($0.3B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2324,
            "top": 593,
            "lines": [
              {
                "text": "Interest ($0.2B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      },
      "comp_benefits": {
        "blocks": [
          {
            "x": 2324,
            "top": 719,
            "lines": [
              {
                "text": "Comp & benefits",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      },
      "maintenance": {
        "blocks": [
          {
            "x": 2324,
            "top": 894,
            "lines": [
              {
                "text": "Maintenance ($0.7B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2324,
            "top": 958,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Amortization ($0.9B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      },
      "purchased_transportation": {
        "blocks": [
          {
            "x": 2324,
            "top": 1051,
            "lines": [
              {
                "text": "Purchased",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "transportation ($2.7B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      },
      "fuel": {
        "blocks": [
          {
            "x": 2324,
            "top": 1166,
            "lines": [
              {
                "text": "Fuel ($1.1B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      },
      "other_occupancy": {
        "blocks": [
          {
            "x": 2324,
            "top": 1225,
            "lines": [
              {
                "text": "Other occupancy",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2324,
            "top": 1328,
            "lines": [
              {
                "text": "Other ($2.0B)",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 8
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "other_income",
      "representation": "flow",
      "label": "Other",
      "value": 0.1,
      "valueText": "$0.1B",
      "type": "profit",
      "labelColor": "#008f51"
    }
  ],
  "nodes": [
    {
      "id": "us_domestic_package",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "US Domestic",
        "Package"
      ],
      "value": 14.5,
      "notes": [
        "+1% Y/Y",
        "7% operating margin"
      ],
      "color": "#ffb406",
      "linkTint": "#f7d688",
      "icons": [
        "package"
      ]
    },
    {
      "id": "international_package",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "International",
        "Package"
      ],
      "value": 4.4,
      "notes": [
        "+3% Y/Y",
        "15% operating margin"
      ],
      "color": "#ffb406",
      "linkTint": "#f7d688",
      "icons": [
        "globe"
      ]
    },
    {
      "id": "supply_chain_solutions",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Supply Chain",
        "Solutions"
      ],
      "value": 2.7,
      "notes": [
        "(15%) Y/Y",
        "2% operating margin"
      ],
      "color": "#ffb406",
      "linkTint": "#f7d688",
      "icons": [
        "truck"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 21.5,
      "notes": [
        "(1%) Y/Y"
      ],
      "color": "#ffb406",
      "linkTint": "#f7d688"
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.7,
      "notes": [
        "8% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 19.9,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.2,
      "notes": [
        "6% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "interest",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": "Interest",
      "value": 0.2,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "comp_benefits",
      "col": 3,
      "order": 3,
      "type": "cost",
      "label": "Comp & benefits",
      "value": 11.8,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "maintenance",
      "col": 3,
      "order": 4,
      "type": "cost",
      "label": "Maintenance",
      "value": 0.7,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "depreciation_amortization",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": [
        "Depreciation &",
        "Amortization"
      ],
      "value": 0.9,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "purchased_transportation",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Purchased",
        "transportation"
      ],
      "value": 2.7,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "fuel",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Fuel",
      "value": 1.1,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "other_occupancy",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Other occupancy",
      "value": 0.6,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "other_operating",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Other",
      "value": 2,
      "color": "#cc0000",
      "linkTint": "#e08585",
      "valueText": "($2.0B)"
    }
  ],
  "links": [
    {
      "source": "us_domestic_package",
      "target": "revenue",
      "value": 14.5,
      "sourceWidth": 196,
      "targetWidth": 196,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international_package",
      "target": "revenue",
      "value": 4.4,
      "sourceWidth": 58,
      "targetWidth": 58,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "supply_chain_solutions",
      "target": "revenue",
      "value": 2.7,
      "sourceWidth": 35,
      "targetWidth": 38,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.7,
      "sourceWidth": 22,
      "targetWidth": 21,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 19.9,
      "sourceWidth": 270,
      "targetWidth": 269,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.2,
      "sourceWidth": 16,
      "targetWidth": 14,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "sourceRoute": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 1,
      "y0": 348,
      "y1": 366.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "interactionOnly": true,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 3,
      "targetWidth": 4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "comp_benefits",
      "value": 11.8,
      "sourceWidth": 160,
      "targetWidth": 159,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.7,
      "sourceWidth": 10,
      "targetWidth": 8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.9,
      "sourceWidth": 12,
      "targetWidth": 12,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 2.7,
      "sourceWidth": 37,
      "targetWidth": 36,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 1.1,
      "sourceWidth": 15,
      "targetWidth": 14,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_occupancy",
      "value": 0.6,
      "sourceWidth": 8,
      "targetWidth": 6,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 2,
      "sourceWidth": 27,
      "targetWidth": 26,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "联合包裹 · 2025 财年第一季度",
      "meta": {
        "title": "联合包裹 2025 财年第一季度利润表",
        "period": "",
        "periodNote": ""
      },
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"other_income\" data-link-numerator=\"other_income\" data-link-denominator=\"net_profit\" data-link-anchor-x=\"2160\" data-link-anchor-y=\"356\"><path d=\"M2060 348H2135C2170 348 2175 365 2232 366\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"2092\" y=\"284\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#008f51\">其他</text><text x=\"2092\" y=\"325\" text-anchor=\"middle\" font-size=\"31\" fill=\"#008f51\">$0.1B</text></g>",
      "nonNodeMetrics": {
        "other_income": {
          "label": "其他"
        }
      },
      "nodes": {
        "us_domestic_package": {
          "label": [
            "美国国内",
            "包裹"
          ],
          "notes": [
            "同比 +1%",
            "营业利润率 7%"
          ]
        },
        "international_package": {
          "label": [
            "国际",
            "包裹"
          ],
          "notes": [
            "同比 +3%",
            "营业利润率 15%"
          ]
        },
        "supply_chain_solutions": {
          "label": [
            "供应链",
            "解决方案"
          ],
          "notes": [
            "同比 (15%)",
            "营业利润率 2%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (1%)"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 8%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 +0 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "interest": {
          "label": "利息"
        },
        "comp_benefits": {
          "label": "薪酬与福利"
        },
        "maintenance": {
          "label": "维修"
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ]
        },
        "purchased_transportation": {
          "label": [
            "外购",
            "运输"
          ]
        },
        "fuel": {
          "label": "燃油"
        },
        "other_occupancy": {
          "label": "其他占用成本"
        },
        "other_operating": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "us_domestic_package": {
            "icons": {
              "x": 150,
              "y": 432,
              "names": [
                "package"
              ],
              "size": 76,
              "color": "#777777",
              "strokeWidth": 2.1
            },
            "blocks": [
              {
                "x": 399.5,
                "top": 387,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#341b14"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              },
              {
                "x": 190,
                "top": 528,
                "lines": [
                  {
                    "text": "美国国内",
                    "size": 40,
                    "weight": 800,
                    "color": "#341b14"
                  },
                  {
                    "text": "包裹",
                    "size": 40,
                    "weight": 800,
                    "color": "#341b14"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8,
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 190,
                "top": 635,
                "lines": [
                  {
                    "text": "营业利润率 7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "international_package": {
            "icons": {
              "x": 150,
              "y": 724,
              "names": [
                "globe"
              ],
              "size": 76,
              "color": "#777777",
              "strokeWidth": 2.1
            },
            "blocks": [
              {
                "x": 399.5,
                "top": 770,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#341b14"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              },
              {
                "x": 190,
                "top": 810,
                "lines": [
                  {
                    "text": "国际",
                    "size": 40,
                    "weight": 800,
                    "color": "#341b14"
                  },
                  {
                    "text": "包裹",
                    "size": 40,
                    "weight": 800,
                    "color": "#341b14"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8,
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 190,
                "top": 914,
                "lines": [
                  {
                    "text": "营业利润率 15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "supply_chain_solutions": {
            "icons": {
              "x": 150,
              "y": 1020,
              "names": [
                "truck"
              ],
              "size": 76,
              "color": "#777777",
              "strokeWidth": 2.1
            },
            "blocks": [
              {
                "x": 399.5,
                "top": 1023,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#341b14"
                  },
                  {
                    "text": "同比 (15%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              },
              {
                "x": 190,
                "top": 1091,
                "lines": [
                  {
                    "text": "供应链",
                    "size": 40,
                    "weight": 800,
                    "color": "#341b14"
                  },
                  {
                    "text": "解决方案",
                    "size": 40,
                    "weight": 800,
                    "color": "#341b14"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8,
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 190,
                "top": 1218,
                "lines": [
                  {
                    "text": "营业利润率 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1019.5,
                "top": 535,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#341b14"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#341b14"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1642.5,
                "top": 341,
                "lines": [
                  {
                    "text": "营业利润",
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
                    "text": "利润率 8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1645,
                "top": 1090,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36,
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
                "lineGap": 8
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2446,
                "top": 287,
                "lines": [
                  {
                    "text": "净利润",
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
                    "text": "利润率 6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "other_income": {
            "blocks": []
          },
          "tax": {
            "blocks": [
              {
                "x": 2324,
                "top": 494,
                "lines": [
                  {
                    "text": "税费（$0.3B）",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2324,
                "top": 593,
                "lines": [
                  {
                    "text": "利息（$0.2B）",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          },
          "comp_benefits": {
            "blocks": [
              {
                "x": 2324,
                "top": 719,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          },
          "maintenance": {
            "blocks": [
              {
                "x": 2324,
                "top": 894,
                "lines": [
                  {
                    "text": "维修（$0.7B）",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2324,
                "top": 958,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "摊销（$0.9B）",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          },
          "purchased_transportation": {
            "blocks": [
              {
                "x": 2324,
                "top": 1051,
                "lines": [
                  {
                    "text": "外购",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "运输（$2.7B）",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          },
          "fuel": {
            "blocks": [
              {
                "x": 2324,
                "top": 1166,
                "lines": [
                  {
                    "text": "燃油（$1.1B）",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          },
          "other_occupancy": {
            "blocks": [
              {
                "x": 2324,
                "top": 1225,
                "lines": [
                  {
                    "text": "其他占用成本",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2324,
                "top": 1328,
                "lines": [
                  {
                    "text": "其他（$2.0B）",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 8
              }
            ]
          }
        }
      }
    }
  }
});})();
