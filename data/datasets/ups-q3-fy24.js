window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "ups-q3-fy24",
  "name": "UPS · Q3 FY24",
  "company": "UPS",
  "meta": {
    "company": "UPS",
    "title": "UPS Q3 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/ups-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 119.806640625,
    "titleWeight": 800,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 229.1953125,
    "logoHeight": 250.03125,
    "logoY": 256.54248046875,
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
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "layout": {
    "nodes": {
      "us_domestic_package": {
        "x": 363.327,
        "y": 468.75,
        "width": 71.624,
        "height": 167.969
      },
      "international_package": {
        "x": 363.327,
        "y": 851.562,
        "width": 71.624,
        "height": 52.083
      },
      "supply_chain_solutions": {
        "x": 363.327,
        "y": 1113.281,
        "width": 71.624,
        "height": 39.062
      },
      "revenue": {
        "x": 985.8,
        "y": 680.99,
        "width": 71.624,
        "height": 259.115
      },
      "operating_profit": {
        "x": 1605.669,
        "y": 531.25,
        "width": 72.926,
        "height": 23.438
      },
      "operating_expenses": {
        "x": 1601.763,
        "y": 830.729,
        "width": 72.926,
        "height": 235.677
      },
      "other_income": {
        "x": 2044.526,
        "y": 351.562,
        "width": 71.624,
        "height": 2.604
      },
      "net_profit": {
        "x": 2230.748,
        "y": 373.698,
        "width": 72.926,
        "height": 18.229
      },
      "tax": {
        "x": 2230.748,
        "y": 516.927,
        "width": 72.926,
        "height": 3.906
      },
      "interest": {
        "x": 2230.748,
        "y": 610.677,
        "width": 72.926,
        "height": 2.604
      },
      "comp_benefits": {
        "x": 2230.748,
        "y": 691.406,
        "width": 72.926,
        "height": 138.021
      },
      "maintenance": {
        "x": 2230.748,
        "y": 902.344,
        "width": 72.926,
        "height": 7.812
      },
      "depreciation_amortization": {
        "x": 2230.748,
        "y": 983.073,
        "width": 72.926,
        "height": 10.417
      },
      "purchased_transportation": {
        "x": 2230.748,
        "y": 1065.104,
        "width": 72.926,
        "height": 39.062
      },
      "fuel": {
        "x": 2230.748,
        "y": 1171.875,
        "width": 72.926,
        "height": 13.021
      },
      "other_occupancy": {
        "x": 2230.748,
        "y": 1252.604,
        "width": 72.926,
        "height": 5.208
      },
      "other_operating": {
        "x": 2230.748,
        "y": 1317.708,
        "width": 72.926,
        "height": 20.833
      }
    },
    "labels": {
      "us_domestic_package": {
        "icons": {
          "x": 187.523,
          "y": 410.156,
          "names": [
            "package"
          ],
          "size": 76.833,
          "color": "#777777"
        },
        "blocks": [
          {
            "x": 399.79,
            "top": 377.604,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#341b14"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#341b14"
              }
            ]
          },
          {
            "x": 311.237,
            "top": 477.865,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "US Domestic",
                "size": 39.067,
                "weight": 800,
                "color": "#341b14"
              },
              {
                "text": "Package",
                "size": 39.067,
                "weight": 400,
                "color": "#341b14"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 182.314,
            "top": 583.333,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "6% operating margin",
                "size": 27.347,
                "weight": 400,
                "color": "#341b14"
              }
            ]
          }
        ]
      },
      "international_package": {
        "icons": {
          "x": 187.523,
          "y": 730.469,
          "names": [
            "globe"
          ],
          "size": 76.833,
          "color": "#777777"
        },
        "blocks": [
          {
            "x": 399.79,
            "top": 760.417,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#341b14"
              },
              {
                "text": "+3% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#341b14"
              }
            ]
          },
          {
            "x": 311.237,
            "top": 798.177,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "International",
                "size": 39.067,
                "weight": 800,
                "color": "#341b14"
              },
              {
                "text": "Package",
                "size": 39.067,
                "weight": 400,
                "color": "#341b14"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 182.314,
            "top": 899.74,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "18% operating margin",
                "size": 27.347,
                "weight": 400,
                "color": "#341b14"
              }
            ]
          }
        ]
      },
      "supply_chain_solutions": {
        "icons": {
          "x": 187.523,
          "y": 1033.854,
          "names": [
            "truck"
          ],
          "size": 76.833,
          "color": "#777777"
        },
        "blocks": [
          {
            "x": 399.79,
            "top": 1019.531,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#341b14"
              },
              {
                "text": "+8% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#341b14"
              }
            ]
          },
          {
            "x": 311.237,
            "top": 1101.562,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Supply Chain",
                "size": 39.067,
                "weight": 800,
                "color": "#341b14"
              },
              {
                "text": "Solutions",
                "size": 39.067,
                "weight": 400,
                "color": "#341b14"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 182.314,
            "top": 1204.427,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "9% operating margin",
                "size": 27.347,
                "weight": 400,
                "color": "#341b14"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1022.263,
            "top": 536.458,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800,
                "color": "#341b14"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#341b14"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#341b14"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1642.132,
            "top": 347.656,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "9% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1638.226,
            "top": 1089.844,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 36.463,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36.463,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.463,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2444.316,
            "top": 309.896,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "7% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2080.338,
            "top": 266.927,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 502.604,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Tax ($0.4B)",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 596.354,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Interest ($0.2B)",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "comp_benefits": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 716.146,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Comp & benefits",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "maintenance": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 878.906,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Maintenance ($0.7B)",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 951.823,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Amortization ($0.9B)",
                "size": 29.952,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "purchased_transportation": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 1049.479,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Purchased",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "transportation ($3.4B)",
                "size": 29.952,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "fuel": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 1165.365,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Fuel ($1.1B)",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_occupancy": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 1221.354,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other occupancy",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2325.812,
            "top": 1315.104,
            "anchor": "start",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other ($1.7B)",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
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
      "value": 14.5,
      "notes": [
        "+6% Y/Y",
        "6% operating margin"
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
        "18% operating margin"
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
      "value": 3.4,
      "notes": [
        "+8% Y/Y",
        "9% operating margin"
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
      "value": 22.2,
      "notes": [
        "+6% Y/Y"
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
      "value": 2,
      "notes": [
        "9% margin",
        "+3pp Y/Y"
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
      "value": 20.3,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.5,
      "notes": [
        "7% margin",
        "+2pp Y/Y"
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
      "value": 0.4,
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
      "value": 12,
      "color": "#cc0000",
      "linkTint": "#e08585",
      "valueText": "($12.0B)"
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
      "value": 3.4,
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
      "value": 0.5,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "other_operating",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Other",
      "value": 1.7,
      "color": "#cc0000",
      "linkTint": "#e08585"
    },
    {
      "id": "other_income",
      "col": 2,
      "order": -1,
      "type": "profit",
      "label": "Other",
      "value": 0.2
    }
  ],
  "links": [
    {
      "source": "us_domestic_package",
      "target": "revenue",
      "value": 14.5,
      "sourceWidth": 167.96875,
      "targetWidth": 167.96875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f7d688"
    },
    {
      "source": "international_package",
      "target": "revenue",
      "value": 4.4,
      "sourceWidth": 52.08333333333333,
      "targetWidth": 52.08333333333333,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f7d688"
    },
    {
      "source": "supply_chain_solutions",
      "target": "revenue",
      "value": 3.4,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f7d688"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 2,
      "sourceWidth": 23.4375,
      "targetWidth": 23.4375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 20.3,
      "sourceWidth": 235.67708333333331,
      "targetWidth": 235.67708333333331,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.5,
      "sourceWidth": 15.625,
      "targetWidth": 15.625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 5.208333333333333,
      "targetWidth": 3.90625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.2,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "comp_benefits",
      "value": 12,
      "sourceWidth": 139.32291666666666,
      "targetWidth": 138.02083333333331,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.7,
      "sourceWidth": 7.8125,
      "targetWidth": 7.8125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.9,
      "sourceWidth": 10.416666666666666,
      "targetWidth": 10.416666666666666,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 3.4,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 1.1,
      "sourceWidth": 13.020833333333332,
      "targetWidth": 13.020833333333332,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_occupancy",
      "value": 0.5,
      "sourceWidth": 5.208333333333333,
      "targetWidth": 5.208333333333333,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 1.7,
      "sourceWidth": 20.833333333333332,
      "targetWidth": 20.833333333333332,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "UPS · 2024 财年第三季度",
      "meta": {
        "title": "UPS 2024 财年第三季度利润表"
      },
      "nodes": {
        "us_domestic_package": {
          "label": [
            "美国国内",
            "包裹"
          ],
          "notes": [
            "同比 +6%",
            "营业利润率 6%"
          ]
        },
        "international_package": {
          "label": [
            "国际",
            "包裹"
          ],
          "notes": [
            "同比 +3%",
            "营业利润率 18%"
          ]
        },
        "supply_chain_solutions": {
          "label": [
            "供应链",
            "解决方案"
          ],
          "notes": [
            "同比 +8%",
            "营业利润率 9%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 9%",
            "同比 +3 个百分点"
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
            "利润率 7%",
            "同比 +2 个百分点"
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
            "icons": {
              "x": 187.523,
              "y": 410.156,
              "names": [
                "package"
              ],
              "size": 76.833,
              "color": "#777777"
            },
            "blocks": [
              {
                "x": 399.79,
                "top": 377.604,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#341b14"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ]
              },
              {
                "x": 311.237,
                "top": 477.865,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "美国国内",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#341b14"
                  },
                  {
                    "text": "包裹",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 182.314,
                "top": 583.333,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润率 6%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ]
              }
            ]
          },
          "international_package": {
            "icons": {
              "x": 187.523,
              "y": 730.469,
              "names": [
                "globe"
              ],
              "size": 76.833,
              "color": "#777777"
            },
            "blocks": [
              {
                "x": 399.79,
                "top": 760.417,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#341b14"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ]
              },
              {
                "x": 311.237,
                "top": 798.177,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#341b14"
                  },
                  {
                    "text": "包裹",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 182.314,
                "top": 899.74,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润率 18%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ]
              }
            ]
          },
          "supply_chain_solutions": {
            "icons": {
              "x": 187.523,
              "y": 1033.854,
              "names": [
                "truck"
              ],
              "size": 76.833,
              "color": "#777777"
            },
            "blocks": [
              {
                "x": 399.79,
                "top": 1019.531,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#341b14"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ]
              },
              {
                "x": 311.237,
                "top": 1101.562,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "供应链",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#341b14"
                  },
                  {
                    "text": "解决方案",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 182.314,
                "top": 1204.427,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润率 9%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1022.263,
                "top": 536.458,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#341b14"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#341b14"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#341b14"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1642.132,
                "top": 347.656,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 9%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1638.226,
                "top": 1089.844,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.463,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36.463,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.463,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2444.316,
                "top": 309.896,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 7%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2080.338,
                "top": 266.927,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 502.604,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "税费 ($0.4B)",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 596.354,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "利息 ($0.2B)",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "comp_benefits": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 716.146,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "maintenance": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 878.906,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "维修 ($0.7B)",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 951.823,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "摊销 ($0.9B)",
                    "size": 29.952,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "purchased_transportation": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 1049.479,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "外购",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "运输 ($3.4B)",
                    "size": 29.952,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "fuel": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 1165.365,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "燃油 ($1.1B)",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_occupancy": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 1221.354,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他占用成本",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2325.812,
                "top": 1315.104,
                "anchor": "start",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他 ($1.7B)",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
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
