window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "ups-q4-fy24",
  "name": "UPS · Q4 FY24",
  "company": "UPS",
  "meta": {
    "company": "UPS",
    "title": "UPS Q4 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/ups-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 186,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 1990,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 230,
    "logoHeight": 260,
    "logoY": 255,
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
        "node": "#d40000",
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
        "x": 369,
        "y": 531,
        "width": 72,
        "height": 244
      },
      "international_package": {
        "x": 369,
        "y": 933,
        "width": 72,
        "height": 68
      },
      "supply_chain_solutions": {
        "x": 369,
        "y": 1139,
        "width": 72,
        "height": 42
      },
      "revenue": {
        "x": 984,
        "y": 673,
        "width": 72,
        "height": 357
      },
      "operating_profit": {
        "x": 1623,
        "y": 457,
        "width": 73,
        "height": 40
      },
      "operating_expenses": {
        "x": 1623,
        "y": 842,
        "width": 73,
        "height": 316
      },
      "net_profit": {
        "x": 2237,
        "y": 267,
        "width": 73,
        "height": 23
      },
      "other_expense": {
        "x": 2237,
        "y": 392,
        "width": 73,
        "height": 7
      },
      "tax": {
        "x": 2237,
        "y": 496,
        "width": 73,
        "height": 4
      },
      "interest": {
        "x": 2237,
        "y": 587,
        "width": 73,
        "height": 3
      },
      "comp_benefits": {
        "x": 2237,
        "y": 663,
        "width": 73,
        "height": 183
      },
      "maintenance": {
        "x": 2237,
        "y": 913,
        "width": 73,
        "height": 10
      },
      "depreciation_amortization": {
        "x": 2237,
        "y": 993,
        "width": 73,
        "height": 12
      },
      "purchased_transportation": {
        "x": 2237,
        "y": 1065,
        "width": 73,
        "height": 51
      },
      "fuel": {
        "x": 2237,
        "y": 1177,
        "width": 73,
        "height": 16
      },
      "other_occupancy": {
        "x": 2237,
        "y": 1257,
        "width": 73,
        "height": 7
      },
      "other_operating": {
        "x": 2237,
        "y": 1324,
        "width": 73,
        "height": 32
      }
    },
    "labels": {
      "us_domestic_package": {
        "icons": {
          "x": 188,
          "y": 441,
          "names": [
            "package"
          ],
          "size": 76,
          "color": "#777777",
          "strokeWidth": 2.1
        },
        "blocks": [
          {
            "x": 403,
            "top": 440,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "+2% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 317,
            "top": 538,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "US Domestic",
                "size": 40,
                "weight": 800,
                "color": "#3a221b"
              },
              {
                "text": "Package",
                "size": 40,
                "weight": 800,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 190,
            "top": 646,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "10% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "international_package": {
        "icons": {
          "x": 188,
          "y": 794,
          "names": [
            "globe"
          ],
          "size": 76,
          "color": "#777777",
          "strokeWidth": 2.1
        },
        "blocks": [
          {
            "x": 403,
            "top": 842,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 317,
            "top": 878,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800,
                "color": "#3a221b"
              },
              {
                "text": "Package",
                "size": 40,
                "weight": 800,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 190,
            "top": 984,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "21% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "supply_chain_solutions": {
        "icons": {
          "x": 188,
          "y": 1062,
          "names": [
            "truck"
          ],
          "size": 76,
          "color": "#777777",
          "strokeWidth": 2.1
        },
        "blocks": [
          {
            "x": 403,
            "top": 1048,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "(9%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 317,
            "top": 1129,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Supply Chain",
                "size": 40,
                "weight": 800,
                "color": "#3a221b"
              },
              {
                "text": "Solutions",
                "size": 40,
                "weight": 800,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 190,
            "top": 1235,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "7% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1020,
            "top": 526,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#3a221b"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "+2% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1660,
            "top": 272,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "12% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1660,
            "top": 1178,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 39,
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
            "x": 2430,
            "top": 197,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "7% margin",
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
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2325,
            "top": 487,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax ($0.4B)",
                "size": 31,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2325,
            "top": 578,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest ($0.2B)",
                "size": 31,
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
            "top": 716,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Comp & benefits",
                "size": 31,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 31,
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
            "top": 904,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Maintenance ($0.8B)",
                "size": 31,
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
            "top": 957,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "Amortization",
                "size": 31,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
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
            "top": 1055,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Purchased",
                "size": 31,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "transportation",
                "size": 31,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
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
            "top": 1168,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Fuel ($1.1B)",
                "size": 31,
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
            "top": 1219,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other occupancy",
                "size": 31,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 31,
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
            "top": 1315,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other ($2.3B)",
                "size": 31,
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
            "top": 383,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other $0.6B",
                "size": 31,
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
      "value": 17.3,
      "notes": [
        "+2% Y/Y",
        "10% operating margin"
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
      "value": 4.9,
      "notes": [
        "+7% Y/Y",
        "21% operating margin"
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
      "value": 3.1,
      "notes": [
        "(9%) Y/Y",
        "7% operating margin"
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
      "value": 25.3,
      "notes": [
        "+2% Y/Y"
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
      "value": 2.9,
      "notes": [
        "12% margin",
        "+2pp Y/Y"
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
      "color": "#d40000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 1,
      "type": "profit",
      "label": "Net profit",
      "value": 1.7,
      "notes": [
        "7% margin",
        "+0pp Y/Y"
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
      "value": 0.4,
      "color": "#d40000",
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
      "color": "#d40000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "comp_benefits",
      "col": 3,
      "order": 4,
      "type": "cost",
      "label": "Comp & benefits",
      "value": 13,
      "color": "#d40000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585",
      "valueText": "($13.0B)"
    },
    {
      "id": "maintenance",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Maintenance",
      "value": 0.8,
      "color": "#d40000",
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
      "color": "#d40000",
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
      "value": 3.7,
      "color": "#d40000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "fuel",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Fuel",
      "value": 1.1,
      "color": "#d40000",
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
      "color": "#d40000",
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
      "color": "#d40000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "other_expense",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.6,
      "valueText": "$0.6B"
    }
  ],
  "links": [
    {
      "source": "us_domestic_package",
      "target": "revenue",
      "value": 17.3,
      "sourceWidth": 244,
      "targetWidth": 244,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f8d78a"
    },
    {
      "source": "international_package",
      "target": "revenue",
      "value": 4.9,
      "sourceWidth": 68,
      "targetWidth": 68,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f8d78a"
    },
    {
      "source": "supply_chain_solutions",
      "target": "revenue",
      "value": 3.1,
      "sourceWidth": 42,
      "targetWidth": 45,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f8d78a"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 2.9,
      "sourceWidth": 41,
      "targetWidth": 40,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dce9b"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 22.4,
      "sourceWidth": 316,
      "targetWidth": 316,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.7,
      "sourceWidth": 23,
      "targetWidth": 23,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dce9b"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.6,
      "sourceWidth": 10,
      "targetWidth": 7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 4,
      "targetWidth": 4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "comp_benefits",
      "value": 13,
      "sourceWidth": 183,
      "targetWidth": 183,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.8,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.9,
      "sourceWidth": 12,
      "targetWidth": 12,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 3.7,
      "sourceWidth": 51,
      "targetWidth": 51,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 1.1,
      "sourceWidth": 16,
      "targetWidth": 16,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "other_occupancy",
      "value": 0.5,
      "sourceWidth": 7,
      "targetWidth": 7,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 2.3,
      "sourceWidth": 37,
      "targetWidth": 32,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "联合包裹 · 2024 财年第四季度",
      "meta": {
        "title": "联合包裹 2024 财年第四季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1910
      },
      "nodes": {
        "us_domestic_package": {
          "label": [
            "美国国内",
            "包裹"
          ],
          "notes": [
            "同比 +2%",
            "营业利润率 10%"
          ]
        },
        "international_package": {
          "label": [
            "国际",
            "包裹"
          ],
          "notes": [
            "同比 +7%",
            "营业利润率 21%"
          ]
        },
        "supply_chain_solutions": {
          "label": [
            "供应链",
            "解决方案"
          ],
          "notes": [
            "同比 (9%)",
            "营业利润率 7%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +2%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 12%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
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
        },
        "other_expense": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "us_domestic_package": {
            "icons": {
              "x": 188,
              "y": 441,
              "names": [
                "package"
              ],
              "size": 76,
              "color": "#777777",
              "strokeWidth": 2.1
            },
            "blocks": [
              {
                "x": 403,
                "top": 440,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 317,
                "top": 538,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "美国国内",
                    "size": 40,
                    "weight": 800,
                    "color": "#3a221b"
                  },
                  {
                    "text": "包裹",
                    "size": 40,
                    "weight": 800,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 190,
                "top": 646,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "international_package": {
            "icons": {
              "x": 188,
              "y": 794,
              "names": [
                "globe"
              ],
              "size": 76,
              "color": "#777777",
              "strokeWidth": 2.1
            },
            "blocks": [
              {
                "x": 403,
                "top": 842,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 317,
                "top": 878,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "国际",
                    "size": 40,
                    "weight": 800,
                    "color": "#3a221b"
                  },
                  {
                    "text": "包裹",
                    "size": 40,
                    "weight": 800,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 190,
                "top": 984,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 21%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "supply_chain_solutions": {
            "icons": {
              "x": 188,
              "y": 1062,
              "names": [
                "truck"
              ],
              "size": 76,
              "color": "#777777",
              "strokeWidth": 2.1
            },
            "blocks": [
              {
                "x": 403,
                "top": 1048,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 317,
                "top": 1129,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "供应链",
                    "size": 40,
                    "weight": 800,
                    "color": "#3a221b"
                  },
                  {
                    "text": "解决方案",
                    "size": 40,
                    "weight": 800,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 190,
                "top": 1235,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1020,
                "top": 526,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#3a221b"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1660,
                "top": 272,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1660,
                "top": 1178,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 39,
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
                "x": 2430,
                "top": 197,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 7%",
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
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2325,
                "top": 487,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费 ($0.4B)",
                    "size": 31,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2325,
                "top": 578,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息 ($0.2B)",
                    "size": 31,
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
                "top": 716,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 31,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "top": 904,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "维修 ($0.8B)",
                    "size": 31,
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
                "top": 957,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 31,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "摊销",
                    "size": 31,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
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
                "top": 1055,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "外购",
                    "size": 31,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "运输",
                    "size": 31,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
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
                "top": 1168,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "燃油 ($1.1B)",
                    "size": 31,
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
                "top": 1219,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他占用成本",
                    "size": 31,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "top": 1315,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他 ($2.3B)",
                    "size": 31,
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
                "top": 383,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他 $0.6B",
                    "size": 31,
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
