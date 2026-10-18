window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "ups-q4-fy22",
  "name": "UPS · Q4 FY22",
  "company": "UPS",
  "meta": {
    "company": "UPS",
    "title": "UPS Q4 FY22 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/ups-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.333,
    "titleY": 196.615,
    "titleSize": 122.396,
    "titleWeight": 800,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 221.354,
    "logoHeight": 253.906,
    "logoY": 226.562,
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
      "lineGap": 10.417
    }
  },
  "layout": {
    "scale": 9.115,
    "nodes": {
      "us_domestic_package": {
        "x": 363.281,
        "y": 406.25,
        "width": 71.615,
        "height": 166.667
      },
      "international_package": {
        "x": 363.281,
        "y": 792.969,
        "width": 71.615,
        "height": 45.573
      },
      "supply_chain_solutions": {
        "x": 365.885,
        "y": 1093.75,
        "width": 71.615,
        "height": 35.156
      },
      "revenue": {
        "x": 980.469,
        "y": 630.208,
        "width": 72.917,
        "height": 246.094
      },
      "operating_profit": {
        "x": 1617.188,
        "y": 449.219,
        "width": 72.917,
        "height": 28.646
      },
      "operating_expenses": {
        "x": 1615.885,
        "y": 893.229,
        "width": 72.917,
        "height": 217.448
      },
      "net_profit": {
        "x": 2230.469,
        "y": 302.083,
        "width": 72.917,
        "height": 31.25
      },
      "tax": {
        "x": 2230.469,
        "y": 488.281,
        "width": 72.917,
        "height": 9.115
      },
      "interest": {
        "x": 2230.469,
        "y": 574.219,
        "width": 72.917,
        "height": 2.604
      },
      "comp_benefits": {
        "x": 2230.469,
        "y": 662.76,
        "width": 72.917,
        "height": 121.094
      },
      "maintenance": {
        "x": 2230.469,
        "y": 872.396,
        "width": 72.917,
        "height": 5.208
      },
      "depreciation_amortization": {
        "x": 2230.469,
        "y": 954.427,
        "width": 72.917,
        "height": 7.812
      },
      "purchased_transportation": {
        "x": 2230.469,
        "y": 1045.573,
        "width": 72.917,
        "height": 40.365
      },
      "fuel": {
        "x": 2230.469,
        "y": 1169.271,
        "width": 72.917,
        "height": 14.323
      },
      "other_occupancy": {
        "x": 2230.469,
        "y": 1276.042,
        "width": 72.917,
        "height": 3.906
      },
      "other_operating": {
        "x": 2230.469,
        "y": 1365.885,
        "width": 72.917,
        "height": 22.135
      },
      "other_income": {
        "x": 2093.75,
        "y": 381.51,
        "width": 72.917,
        "height": 13.021
      }
    },
    "labels": {
      "us_domestic_package": {
        "icons": {
          "x": 186.198,
          "y": 335.938,
          "names": [
            "package"
          ],
          "size": 75.521,
          "color": "#777777",
          "strokeWidth": 2.734
        },
        "blocks": [
          {
            "x": 399.74,
            "top": 312.5,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "+3% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 188.802,
            "top": 425.781,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "US Domestic",
                "size": 37.76,
                "weight": 800,
                "color": "#3a221b"
              },
              {
                "text": "Package",
                "size": 37.76,
                "weight": 800,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 188.802,
            "top": 529.948,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "10% operating margin",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "international_package": {
        "icons": {
          "x": 186.198,
          "y": 721.354,
          "names": [
            "globe"
          ],
          "size": 75.521,
          "color": "#777777",
          "strokeWidth": 2.734
        },
        "blocks": [
          {
            "x": 399.74,
            "top": 697.917,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "(8%) Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 188.802,
            "top": 772.135,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "International",
                "size": 37.76,
                "weight": 800,
                "color": "#3a221b"
              },
              {
                "text": "Package",
                "size": 37.76,
                "weight": 800,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 188.802,
            "top": 876.302,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "21% operating margin",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "supply_chain_solutions": {
        "icons": {
          "x": 186.198,
          "y": 1022.135,
          "names": [
            "truck"
          ],
          "size": 75.521,
          "color": "#777777",
          "strokeWidth": 2.734
        },
        "blocks": [
          {
            "x": 399.74,
            "top": 998.698,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "(18%) Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 188.802,
            "top": 1066.406,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Supply Chain",
                "size": 37.76,
                "weight": 800,
                "color": "#3a221b"
              },
              {
                "text": "Solutions",
                "size": 37.76,
                "weight": 800,
                "color": "#3a221b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 188.802,
            "top": 1170.573,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "9% operating margin",
                "size": 27.344,
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
            "x": 1016.927,
            "top": 486.979,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.062,
                "weight": 800,
                "color": "#3a221b"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#3a221b"
              },
              {
                "text": "(3%) Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1653.646,
            "top": 265.625,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.062,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "12% margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 26.042,
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
            "x": 1652.344,
            "top": 1131.51,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Operating",
                "size": 36.458,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "expenses",
                "size": 36.458,
                "weight": 800,
                "color": "#9c1707"
              },
              {
                "text": "$value",
                "size": 36.458,
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
            "x": 2425.781,
            "top": 269.531,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.062,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "3% margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2135.417,
            "top": 411.458,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Other $1.5B",
                "size": 31.25,
                "weight": 600,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2324.219,
            "top": 475.26,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Tax ($1.0B)",
                "size": 29.948,
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
            "x": 2324.219,
            "top": 563.802,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Interest ($0.2B)",
                "size": 29.948,
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
            "x": 2324.219,
            "top": 686.198,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Comp & benefits",
                "size": 29.948,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "($13.3B)",
                "size": 29.948,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "maintenance": {
        "blocks": [
          {
            "x": 2324.219,
            "top": 861.979,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Maintenance ($0.6B)",
                "size": 29.948,
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
            "x": 2324.219,
            "top": 923.177,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 29.948,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "Amortization ($0.9B)",
                "size": 29.948,
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
            "x": 2324.219,
            "top": 1028.646,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Purchased",
                "size": 29.948,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "transportation ($4.5B)",
                "size": 29.948,
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
            "x": 2324.219,
            "top": 1160.156,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Fuel ($1.6B)",
                "size": 29.948,
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
            "x": 2324.219,
            "top": 1240.885,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Other occupancy",
                "size": 29.948,
                "weight": 600,
                "color": "#9c1707"
              },
              {
                "text": "($0.5B)",
                "size": 29.948,
                "weight": 600,
                "color": "#9c1707"
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2324.219,
            "top": 1358.073,
            "anchor": "start",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Other ($2.5B)",
                "size": 29.948,
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
      "value": 18.3,
      "notes": [
        "+3% Y/Y",
        "10% operating margin"
      ],
      "color": "#ffb500",
      "labelColor": "#3a221b",
      "linkTint": "#f8d78a",
      "icons": [
        "package"
      ],
      "valueText": "$18.3B"
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
      "value": 5.0,
      "notes": [
        "(8%) Y/Y",
        "21% operating margin"
      ],
      "color": "#ffb500",
      "labelColor": "#3a221b",
      "linkTint": "#f8d78a",
      "icons": [
        "globe"
      ],
      "valueText": "$5.0B"
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
      "value": 3.8,
      "notes": [
        "(18%) Y/Y",
        "9% operating margin"
      ],
      "color": "#ffb500",
      "labelColor": "#3a221b",
      "linkTint": "#f8d78a",
      "icons": [
        "truck"
      ],
      "valueText": "$3.8B"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 27.0,
      "notes": [
        "(3%) Y/Y"
      ],
      "color": "#ffb500",
      "labelColor": "#3a221b",
      "linkTint": "#f8d78a",
      "valueText": "$27.0B"
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.2,
      "notes": [
        "12% margin",
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
      "value": 23.8,
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
      "value": 3.5,
      "notes": [
        "3% margin",
        "+2pp Y/Y"
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
      "value": 1.0,
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
      "value": 13.3,
      "color": "#d40000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "maintenance",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Maintenance",
      "value": 0.6,
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
      "value": 4.5,
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
      "value": 1.6,
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
      "value": 2.5,
      "color": "#d40000",
      "labelColor": "#9c1707",
      "linkTint": "#df8585"
    },
    {
      "id": "other_income",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 1.5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#9dce9b"
    }
  ],
  "links": [
    {
      "source": "us_domestic_package",
      "target": "revenue",
      "value": 18.3,
      "sourceWidth": 166.667,
      "targetWidth": 166.667,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f8d78a"
    },
    {
      "source": "international_package",
      "target": "revenue",
      "value": 5.0,
      "sourceWidth": 45.573,
      "targetWidth": 45.573,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f8d78a"
    },
    {
      "source": "supply_chain_solutions",
      "target": "revenue",
      "value": 3.8,
      "sourceWidth": 35.156,
      "targetWidth": 33.854,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f8d78a"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 3.2,
      "sourceWidth": 28.646,
      "targetWidth": 28.646,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dce9b"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 23.8,
      "sourceWidth": 217.448,
      "targetWidth": 217.448,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.0,
      "sourceWidth": 18.229,
      "targetWidth": 18.229,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dce9b"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 1.5,
      "sourceWidth": 13.021,
      "targetWidth": 13.021,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9dce9b"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.0,
      "sourceWidth": 9.115,
      "targetWidth": 9.115,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.2,
      "sourceWidth": 1.302,
      "targetWidth": 2.604,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "comp_benefits",
      "value": 13.3,
      "sourceWidth": 121.094,
      "targetWidth": 121.094,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.6,
      "sourceWidth": 5.208,
      "targetWidth": 5.208,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.9,
      "sourceWidth": 7.812,
      "targetWidth": 7.812,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 4.5,
      "sourceWidth": 40.365,
      "targetWidth": 40.365,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 1.6,
      "sourceWidth": 14.323,
      "targetWidth": 14.323,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "other_occupancy",
      "value": 0.5,
      "sourceWidth": 3.906,
      "targetWidth": 3.906,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 2.5,
      "sourceWidth": 24.74,
      "targetWidth": 22.135,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "联合包裹 · 2022 财年第四季度",
      "meta": {
        "title": "联合包裹 2022 财年第四季度利润表",
        "period": "",
        "periodNote": ""
      },
      "nodes": {
        "us_domestic_package": {
          "label": [
            "美国国内",
            "包裹"
          ],
          "notes": [
            "同比 +3%",
            "营业利润率 10%"
          ]
        },
        "international_package": {
          "label": [
            "国际",
            "包裹"
          ],
          "notes": [
            "同比 (8%)",
            "营业利润率 21%"
          ]
        },
        "supply_chain_solutions": {
          "label": [
            "供应链",
            "解决方案"
          ],
          "notes": [
            "同比 (18%)",
            "营业利润率 9%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (3%)"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 12%",
            "同比 (2pp)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 +2pp"
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
        "other_income": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "us_domestic_package": {
            "blocks": [
              {
                "x": 399.74,
                "top": 312.5,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 188.802,
                "top": 425.781,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "美国国内",
                    "size": 37.76,
                    "weight": 800,
                    "color": "#3a221b"
                  },
                  {
                    "text": "包裹",
                    "size": 37.76,
                    "weight": 800,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 188.802,
                "top": 529.948,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "营业利润率 10%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "international_package": {
            "blocks": [
              {
                "x": 399.74,
                "top": 697.917,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 188.802,
                "top": 772.135,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "国际",
                    "size": 37.76,
                    "weight": 800,
                    "color": "#3a221b"
                  },
                  {
                    "text": "包裹",
                    "size": 37.76,
                    "weight": 800,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 188.802,
                "top": 876.302,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "营业利润率 21%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "supply_chain_solutions": {
            "blocks": [
              {
                "x": 399.74,
                "top": 998.698,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 (18%)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 188.802,
                "top": 1066.406,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "供应链",
                    "size": 37.76,
                    "weight": 800,
                    "color": "#3a221b"
                  },
                  {
                    "text": "解决方案",
                    "size": 37.76,
                    "weight": 800,
                    "color": "#3a221b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 188.802,
                "top": 1170.573,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "营业利润率 9%",
                    "size": 27.344,
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
                "x": 1016.927,
                "top": 486.979,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.062,
                    "weight": 800,
                    "color": "#3a221b"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#3a221b"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1653.646,
                "top": 265.625,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.062,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 12%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2pp)",
                    "size": 26.042,
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
                "x": 1652.344,
                "top": 1131.51,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "费用",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#9c1707"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
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
                "x": 2425.781,
                "top": 269.531,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.062,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 3%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2pp",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2135.417,
                "top": 411.458,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "其他 $1.5B",
                    "size": 31.25,
                    "weight": 600,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2324.219,
                "top": 475.26,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "税费 ($1.0B)",
                    "size": 29.948,
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
                "x": 2324.219,
                "top": 563.802,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "利息 ($0.2B)",
                    "size": 29.948,
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
                "x": 2324.219,
                "top": 686.198,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 29.948,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "($13.3B)",
                    "size": 29.948,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "maintenance": {
            "blocks": [
              {
                "x": 2324.219,
                "top": 861.979,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "维修 ($0.6B)",
                    "size": 29.948,
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
                "x": 2324.219,
                "top": 923.177,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 29.948,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "摊销 ($0.9B)",
                    "size": 29.948,
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
                "x": 2324.219,
                "top": 1028.646,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "外购",
                    "size": 29.948,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "运输 ($4.5B)",
                    "size": 29.948,
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
                "x": 2324.219,
                "top": 1160.156,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "燃油 ($1.6B)",
                    "size": 29.948,
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
                "x": 2324.219,
                "top": 1240.885,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "其他占用成本",
                    "size": 29.948,
                    "weight": 600,
                    "color": "#9c1707"
                  },
                  {
                    "text": "($0.5B)",
                    "size": 29.948,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2324.219,
                "top": 1358.073,
                "anchor": "start",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "其他 ($2.5B)",
                    "size": 29.948,
                    "weight": 600,
                    "color": "#9c1707"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"169\" y=\"1437\" font-size=\"39\" font-weight=\"700\" fill=\"#111111\">来源：季度业绩</text>"
    }
  },
  "annotationsSvg": "<text x=\"169\" y=\"1437\" font-size=\"39\" font-weight=\"700\" fill=\"#111111\">Source: Quarterly results</text>"
});
