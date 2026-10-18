window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "ups-q4-fy23",
  "name": "UPS · Q4 FY23",
  "company": "UPS",
  "meta": {
    "company": "UPS",
    "title": "UPS Q4 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/ups-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 196,
    "titleSize": 124,
    "titleWeight": 800,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 215,
    "logoHeight": 245,
    "logoY": 224,
    "logoViewBox": "0 0 240 280",
    "logoSvg": "\n    <g>\n      <path d=\"M120 2C168 2 204 9 228 22v105c0 61-41 110-108 143C53 237 12 188 12 127V22C36 9 72 2 120 2Z\" fill=\"#ffb500\"/>\n      <path d=\"M120 25c40 0 71 5 91 15v87c0 52-35 94-91 125-56-31-91-73-91-125V40c20-10 51-15 91-15Z\" fill=\"#351b14\"/>\n      <path d=\"M29 40c20-10 51-15 91-15s71 5 91 15v24H29Z\" fill=\"#ffb500\"/>\n      <text x=\"120\" y=\"173\" text-anchor=\"middle\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"104\" font-weight=\"900\" letter-spacing=\"-12\" fill=\"#ffb500\">UPS</text>\n      <text x=\"192\" y=\"247\" text-anchor=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"23\" fill=\"#ffb500\">®</text>\n    </g>"
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
        "node": "#ffb500",
        "label": "#3a221b"
      },
      "hub": {
        "node": "#ffb500",
        "label": "#3a221b"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9c1707"
      }
    },
    "linkTint": {
      "source": "#f8d78a",
      "hub": "#f8d78a",
      "profit": "#9dce9b",
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
  "layout": {
    "scale": 12.62,
    "nodes": {
      "us_domestic_package": {
        "x": 363,
        "y": 378,
        "width": 72,
        "height": 160
      },
      "international_package": {
        "x": 363,
        "y": 779,
        "width": 72,
        "height": 43
      },
      "supply_chain_solutions": {
        "x": 363,
        "y": 1082,
        "width": 72,
        "height": 33
      },
      "revenue": {
        "x": 988,
        "y": 641,
        "width": 72,
        "height": 236
      },
      "operating_profit": {
        "x": 1616,
        "y": 415,
        "width": 72,
        "height": 23
      },
      "operating_expenses": {
        "x": 1621,
        "y": 863,
        "width": 72,
        "height": 213
      },
      "net_profit": {
        "x": 2231,
        "y": 232,
        "width": 73,
        "height": 13
      },
      "other_expense": {
        "x": 2231,
        "y": 446,
        "width": 73,
        "height": 2
      },
      "tax": {
        "x": 2231,
        "y": 539,
        "width": 73,
        "height": 3
      },
      "interest": {
        "x": 2231,
        "y": 355,
        "width": 73,
        "height": 4
      },
      "comp_benefits": {
        "x": 2231,
        "y": 663,
        "width": 73,
        "height": 123
      },
      "maintenance": {
        "x": 2231,
        "y": 863,
        "width": 73,
        "height": 7
      },
      "depreciation_amortization": {
        "x": 2231,
        "y": 951,
        "width": 73,
        "height": 8
      },
      "purchased_transportation": {
        "x": 2231,
        "y": 1041,
        "width": 73,
        "height": 37
      },
      "fuel": {
        "x": 2231,
        "y": 1165,
        "width": 73,
        "height": 13
      },
      "other_occupancy": {
        "x": 2231,
        "y": 1263,
        "width": 73,
        "height": 5
      },
      "other_operating": {
        "x": 2231,
        "y": 1356,
        "width": 73,
        "height": 23
      }
    },
    "labels": {
      "us_domestic_package": {
        "icons": {
          "x": 190,
          "y": 350,
          "names": [
            "package"
          ],
          "size": 76,
          "color": "#777777"
        },
        "blocks": [
          {
            "x": 400,
            "top": 280,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "(7%) Y/Y",
                "size": 36,
                "weight": 600,
                "color": "#3a221b"
              }
            ]
          },
          {
            "x": 190,
            "top": 410,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "US Domestic",
                "size": 40,
                "weight": 600,
                "color": "#3a221b"
              },
              {
                "text": "Package",
                "size": 40,
                "weight": 600,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 190,
            "top": 518,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "8% operating margin",
                "size": 27,
                "weight": 600,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "international_package": {
        "icons": {
          "x": 190,
          "y": 695,
          "names": [
            "globe"
          ],
          "size": 76,
          "color": "#777777"
        },
        "blocks": [
          {
            "x": 400,
            "top": 681,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "(7%) Y/Y",
                "size": 36,
                "weight": 600,
                "color": "#3a221b"
              }
            ]
          },
          {
            "x": 190,
            "top": 745,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 600,
                "color": "#3a221b"
              },
              {
                "text": "Package",
                "size": 40,
                "weight": 600,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 190,
            "top": 850,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "19% operating margin",
                "size": 27,
                "weight": 600,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "supply_chain_solutions": {
        "icons": {
          "x": 190,
          "y": 1020,
          "names": [
            "truck"
          ],
          "size": 76,
          "color": "#777777"
        },
        "blocks": [
          {
            "x": 400,
            "top": 984,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "(11%) Y/Y",
                "size": 36,
                "weight": 600,
                "color": "#3a221b"
              }
            ]
          },
          {
            "x": 190,
            "top": 1060,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Supply Chain",
                "size": 40,
                "weight": 600,
                "color": "#3a221b"
              },
              {
                "text": "Solutions",
                "size": 40,
                "weight": 600,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 190,
            "top": 1145,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "4% operating margin",
                "size": 27,
                "weight": 600,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1016,
            "top": 493,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 600,
                "color": "#3a221b"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "(8%) Y/Y",
                "size": 39,
                "weight": 600,
                "color": "#3a221b"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1654,
            "top": 226,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36,
                "weight": 600,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "10% margin",
                "size": 36,
                "weight": 600,
                "color": "#008f51"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 36,
                "weight": 600,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1657,
            "top": 1090,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2445,
            "top": 148,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 35,
                "weight": 600,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "6% margin",
                "size": 35,
                "weight": 600,
                "color": "#008f51"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 35,
                "weight": 600,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2325,
            "top": 339,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest ($0.2B)",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2325,
            "top": 427,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other ($0.2B)",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2325,
            "top": 522,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax ($0.5B)",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "comp_benefits": {
        "blocks": [
          {
            "x": 2325,
            "top": 681,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Comp & benefits",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "maintenance": {
        "blocks": [
          {
            "x": 2325,
            "top": 845,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Maintenance ($0.7B)",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2325,
            "top": 914,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "Amortization ($0.9B)",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "purchased_transportation": {
        "blocks": [
          {
            "x": 2325,
            "top": 1027,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Purchased",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "transportation ($3.8B)",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "fuel": {
        "blocks": [
          {
            "x": 2325,
            "top": 1150,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Fuel ($1.3B)",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "other_occupancy": {
        "blocks": [
          {
            "x": 2325,
            "top": 1237,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other occupancy",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2325,
            "top": 1346,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other ($2.3B)",
                "size": 30,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      }
    }
  },
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
      "value": 16.9,
      "notes": [
        "(7%) Y/Y",
        "8% operating margin"
      ],
      "color": "#ffb500",
      "labelColor": "#3a221b",
      "linkTint": "#f8d78a",
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
      "value": 4.6,
      "notes": [
        "(7%) Y/Y",
        "19% operating margin"
      ],
      "color": "#ffb500",
      "labelColor": "#3a221b",
      "linkTint": "#f8d78a",
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
      "value": 3.4,
      "notes": [
        "(11%) Y/Y",
        "4% operating margin"
      ],
      "color": "#ffb500",
      "labelColor": "#3a221b",
      "linkTint": "#f8d78a",
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
      "value": 24.9,
      "notes": [
        "(8%) Y/Y"
      ],
      "color": "#ffb500",
      "labelColor": "#3a221b",
      "linkTint": "#f8d78a"
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.5,
      "notes": [
        "10% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#9dce9b"
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
      "value": 22.4,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "label": "Net profit",
      "value": 1.6,
      "notes": [
        "6% margin",
        "(6pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#9dce9b"
    },
    {
      "id": "tax",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 0.5,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "interest",
      "col": 3,
      "order": 3,
      "type": "cost",
      "label": "Interest",
      "value": 0.2,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "comp_benefits",
      "col": 3,
      "order": 4,
      "type": "cost",
      "label": "Comp & benefits",
      "value": 12.9,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "maintenance",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Maintenance",
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "depreciation_amortization",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Depreciation &",
        "Amortization"
      ],
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "purchased_transportation",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": [
        "Purchased",
        "transportation"
      ],
      "value": 3.8,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "fuel",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Fuel",
      "value": 1.3,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "other_occupancy",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Other occupancy",
      "value": 0.5,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "other_operating",
      "col": 3,
      "order": 10,
      "type": "cost",
      "label": "Other",
      "value": 2.3,
      "color": "#cc0000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "other_expense",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.2,
      "color": "#cc0000"
    }
  ],
  "links": [
    {
      "source": "us_domestic_package",
      "target": "revenue",
      "value": 16.9,
      "sourceWidth": 160,
      "targetWidth": 160,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f8d78a",
      "y0": 458,
      "y1": 721
    },
    {
      "source": "international_package",
      "target": "revenue",
      "value": 4.6,
      "sourceWidth": 43,
      "targetWidth": 43,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f8d78a",
      "y0": 800.5,
      "y1": 822.5
    },
    {
      "source": "supply_chain_solutions",
      "target": "revenue",
      "value": 3.4,
      "sourceWidth": 33,
      "targetWidth": 33,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f8d78a",
      "y0": 1098.5,
      "y1": 860.5
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 2.5,
      "sourceWidth": 23,
      "targetWidth": 23,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dce9b",
      "y0": 652.5,
      "y1": 426.5
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 22.4,
      "sourceWidth": 213,
      "targetWidth": 213,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 770.5,
      "y1": 969.5
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.6,
      "sourceWidth": 13,
      "targetWidth": 13,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dce9b",
      "y0": 421.5,
      "y1": 238.5
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 433,
      "y1": 447
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 435.5,
      "y1": 540.5
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.2,
      "sourceWidth": 4,
      "targetWidth": 4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 430,
      "y1": 357
    },
    {
      "source": "operating_expenses",
      "target": "comp_benefits",
      "value": 12.9,
      "sourceWidth": 121.29166666666667,
      "targetWidth": 123,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 923.6458333333334,
      "y1": 724.5
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.7,
      "sourceWidth": 6.902777777777779,
      "targetWidth": 7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 987.7430555555555,
      "y1": 866.5
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.9,
      "sourceWidth": 7.888888888888889,
      "targetWidth": 8,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 995.1388888888889,
      "y1": 955
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 3.8,
      "sourceWidth": 36.486111111111114,
      "targetWidth": 37,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 1017.3263888888889,
      "y1": 1059.5
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 1.3,
      "sourceWidth": 12.819444444444445,
      "targetWidth": 13,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 1041.9791666666667,
      "y1": 1171.5
    },
    {
      "source": "operating_expenses",
      "target": "other_occupancy",
      "value": 0.5,
      "sourceWidth": 4.930555555555555,
      "targetWidth": 5,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 1050.8541666666667,
      "y1": 1265.5
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 2.3,
      "sourceWidth": 22.680555555555557,
      "targetWidth": 23,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#df8585",
      "y0": 1064.6597222222224,
      "y1": 1367.5
    }
  ],
  "i18n": {
    "zh": {
      "name": "UPS · 2023 财年第四季度",
      "meta": {
        "title": "UPS 2023 财年第四季度利润表"
      },
      "nodes": {
        "us_domestic_package": {
          "label": [
            "美国国内",
            "包裹"
          ],
          "notes": [
            "同比 (7%)",
            "营业利润率 8%"
          ]
        },
        "international_package": {
          "label": [
            "国际",
            "包裹"
          ],
          "notes": [
            "同比 (7%)",
            "营业利润率 19%"
          ]
        },
        "supply_chain_solutions": {
          "label": [
            "供应链",
            "解决方案"
          ],
          "notes": [
            "同比 (11%)",
            "营业利润率 4%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (8%)"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 10%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 (6 个百分点)"
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
          "label": "其他场地费用"
        },
        "other_operating": {
          "label": "其他"
        },
        "other_expense": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "us_domestic_package": {
            "blocks": [
              {
                "x": 400,
                "top": 280,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 36,
                    "weight": 600,
                    "color": "#3a221b"
                  }
                ]
              },
              {
                "x": 190,
                "top": 410,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "美国国内",
                    "size": 40,
                    "weight": 600,
                    "color": "#3a221b"
                  },
                  {
                    "text": "包裹",
                    "size": 40,
                    "weight": 600,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 190,
                "top": 518,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 8%",
                    "size": 27,
                    "weight": 600,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "international_package": {
            "blocks": [
              {
                "x": 400,
                "top": 681,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 36,
                    "weight": 600,
                    "color": "#3a221b"
                  }
                ]
              },
              {
                "x": 190,
                "top": 745,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "国际",
                    "size": 40,
                    "weight": 600,
                    "color": "#3a221b"
                  },
                  {
                    "text": "包裹",
                    "size": 40,
                    "weight": 600,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 190,
                "top": 850,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 19%",
                    "size": 27,
                    "weight": 600,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "supply_chain_solutions": {
            "blocks": [
              {
                "x": 400,
                "top": 984,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 (11%)",
                    "size": 36,
                    "weight": 600,
                    "color": "#3a221b"
                  }
                ]
              },
              {
                "x": 190,
                "top": 1060,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "供应链",
                    "size": 40,
                    "weight": 600,
                    "color": "#3a221b"
                  },
                  {
                    "text": "解决方案",
                    "size": 40,
                    "weight": 600,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 190,
                "top": 1145,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 4%",
                    "size": 27,
                    "weight": 600,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1016,
                "top": 493,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 600,
                    "color": "#3a221b"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 39,
                    "weight": 600,
                    "color": "#3a221b"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1654,
                "top": 226,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36,
                    "weight": 600,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 10%",
                    "size": 36,
                    "weight": 600,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 36,
                    "weight": 600,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1657,
                "top": 1090,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2445,
                "top": 148,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 35,
                    "weight": 600,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 6%",
                    "size": 35,
                    "weight": 600,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 35,
                    "weight": 600,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2325,
                "top": 339,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息 ($0.2B)",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2325,
                "top": 427,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他 ($0.2B)",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2325,
                "top": 522,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费 ($0.5B)",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "comp_benefits": {
            "blocks": [
              {
                "x": 2325,
                "top": 681,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "maintenance": {
            "blocks": [
              {
                "x": 2325,
                "top": 845,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "维修 ($0.7B)",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2325,
                "top": 914,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "摊销 ($0.9B)",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "purchased_transportation": {
            "blocks": [
              {
                "x": 2325,
                "top": 1027,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "外购",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "运输 ($3.8B)",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "fuel": {
            "blocks": [
              {
                "x": 2325,
                "top": 1150,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "燃油 ($1.3B)",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "other_occupancy": {
            "blocks": [
              {
                "x": 2325,
                "top": 1237,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他场地费用",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2325,
                "top": 1346,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他 ($2.3B)",
                    "size": 30,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
