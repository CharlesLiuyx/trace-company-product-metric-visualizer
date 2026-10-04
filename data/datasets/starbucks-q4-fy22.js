(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q4-fy22",
  "name": "Starbucks · Q4 FY22",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "Ending Sept, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 119.806640625,
    "titleWeight": 800,
    "periodX": 1713.755859375,
    "periodY": 1412.93701171875,
    "periodNoteY": 1457.21337890625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#00754a",
        "label": "#00754a"
      },
      "hub": {
        "node": "#00754a",
        "label": "#00754a"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d60000",
        "label": "#a31904"
      }
    },
    "linkTint": {
      "source": "#84b9a3",
      "hub": null,
      "profit": "#9acb98",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "beverage",
      "label": "Beverage",
      "type": "source",
      "value": 6.2,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "food",
      "label": "Food",
      "type": "source",
      "value": 1.9,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "type": "source",
      "value": 0.3,
      "notes": [
        "(17%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "type": "hub",
      "value": 8.4,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "type": "profit",
      "value": 5.7,
      "notes": [
        "68% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "label": [
        "Product &",
        "distribution costs"
      ],
      "type": "cost",
      "value": 2.7,
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other",
      "type": "profit",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "type": "profit",
      "value": 1.2,
      "notes": [
        "14% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "type": "cost",
      "value": 4.6,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "type": "profit",
      "value": 0.9,
      "notes": [
        "10% margin",
        "(11pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "type": "cost",
      "value": 0.2,
      "notes": []
    },
    {
      "id": "other_expense",
      "label": "Other",
      "type": "cost",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "store_opex",
      "label": "Store opex",
      "type": "cost",
      "value": 3.5,
      "notes": []
    },
    {
      "id": "other_opex",
      "label": "Other opex",
      "type": "cost",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "depreciation_amortization",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "type": "cost",
      "value": 0.4,
      "notes": []
    },
    {
      "id": "ga",
      "label": "G&A",
      "type": "cost",
      "value": 0.5,
      "notes": []
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "type": "cost",
      "value": 0.035,
      "valueText": "($35M)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 6.2,
      "sourceWidth": 304.7255859375,
      "targetWidth": 303.42333984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 91.1572265625,
      "targetWidth": 91.1572265625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 5.7,
      "sourceWidth": 278.6806640625,
      "targetWidth": 278.6806640625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.7,
      "sourceWidth": 131.52685546875,
      "targetWidth": 132.8291015625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.2,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.6,
      "sourceWidth": 223.986328125,
      "targetWidth": 223.986328125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.9,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 4.84472265625,
      "targetWidth": 3.90673828125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "store_opex",
      "value": 3.5,
      "sourceWidth": 173.19873046875,
      "targetWidth": 171.896484375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.4,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.5,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.035,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.30224609375,
      "sourceOrder": 4,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 394.58056640625,
        "y": 453.181640625,
        "width": 71.62353515625,
        "height": 304.7255859375
      },
      "food": {
        "x": 394.58056640625,
        "y": 888.1318359375,
        "width": 71.62353515625,
        "height": 91.1572265625
      },
      "other_revenue": {
        "x": 394.58056640625,
        "y": 1103.00244140625,
        "width": 71.62353515625,
        "height": 15.626953125
      },
      "revenue": {
        "x": 854.2734375,
        "y": 546.943359375,
        "width": 71.62353515625,
        "height": 410.20751953125
      },
      "gross_profit": {
        "x": 1295.73486328125,
        "y": 502.6669921875,
        "width": 71.62353515625,
        "height": 278.6806640625
      },
      "product_distribution": {
        "x": 1295.73486328125,
        "y": 903.7587890625,
        "width": 71.62353515625,
        "height": 132.8291015625
      },
      "other_income": {
        "x": 1655.15478515625,
        "y": 569.08154296875,
        "width": 71.62353515625,
        "height": 3.90673828125
      },
      "operating_profit": {
        "x": 1781.47265625,
        "y": 446.67041015625,
        "width": 71.62353515625,
        "height": 58.60107421875
      },
      "operating_expenses": {
        "x": 1781.47265625,
        "y": 750.09375,
        "width": 71.62353515625,
        "height": 223.986328125
      },
      "net_profit": {
        "x": 2230.74755859375,
        "y": 369.837890625,
        "width": 71.62353515625,
        "height": 39.0673828125
      },
      "tax": {
        "x": 2230.74755859375,
        "y": 541.734375,
        "width": 71.62353515625,
        "height": 10.41796875
      },
      "other_expense": {
        "x": 2230.74755859375,
        "y": 623.77587890625,
        "width": 71.62353515625,
        "height": 3.90673828125
      },
      "store_opex": {
        "x": 2230.74755859375,
        "y": 707.11962890625,
        "width": 71.62353515625,
        "height": 171.896484375
      },
      "other_opex": {
        "x": 2230.74755859375,
        "y": 980.59130859375,
        "width": 71.62353515625,
        "height": 26.044921875
      },
      "depreciation_amortization": {
        "x": 2230.74755859375,
        "y": 1110.81591796875,
        "width": 71.62353515625,
        "height": 16.92919921875
      },
      "ga": {
        "x": 2230.74755859375,
        "y": 1229.3203125,
        "width": 71.62353515625,
        "height": 5.208984375
      },
      "restructuring": {
        "x": 2230.74755859375,
        "y": 1337.40673828125,
        "width": 71.62353515625,
        "height": 1.30224609375
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 360.72216796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00754a",
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 690.1904296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Beverage",
                "size": 39.0673828125,
                "color": "#00754a",
                "weight": 700
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "food": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 793.06787109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00754a",
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 918.08349609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Food",
                "size": 39.0673828125,
                "color": "#00754a",
                "weight": 700
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 1007.9384765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00754a",
                "weight": 400
              },
              {
                "text": "(17%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 1086.0732421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "color": "#00754a",
                "weight": 700
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 207.05712890625,
            "top": 1132.9541015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Packaged beverages, royalty and",
                "size": 22.13818359375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 22.13818359375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 890.736328125,
            "top": 399.78955078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "color": "#00754a",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00754a",
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1330.8955078125,
            "top": 316.44580078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "color": "#008f47",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#008f47",
                "weight": 400
              },
              {
                "text": "68% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1814.02880859375,
            "top": 257.8447265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "color": "#008f47",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#008f47",
                "weight": 400
              },
              {
                "text": "14% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2420.87548828125,
            "top": 320.3525390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "color": "#008f47",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#008f47",
                "weight": 400
              },
              {
                "text": "10% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(11pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "product_distribution": {
        "blocks": [
          {
            "x": 1330.8955078125,
            "top": 1053.51708984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Product &",
                "size": 37.76513671875,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "distribution costs",
                "size": 37.76513671875,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1816.63330078125,
            "top": 992.3115234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1691.61767578125,
            "top": 582.10400390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "color": "#008f47",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#008f47",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2420.87548828125,
            "top": 510.48046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2420.87548828125,
            "top": 606.8466796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      },
      "store_opex": {
        "blocks": [
          {
            "x": 2420.87548828125,
            "top": 752.6982421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Store opex",
                "size": 35.16064453125,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2420.87548828125,
            "top": 954.54638671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other opex",
                "size": 35.16064453125,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2420.87548828125,
            "top": 1060.0283203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "amortization",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2420.87548828125,
            "top": 1196.76416015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2431.29345703125,
            "top": 1291.828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Restructuring",
                "size": 32.55615234375,
                "color": "#a31904",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "color": "#a31904",
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "35711",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "35,711"
    },
    {
      "id": "active_rewards",
      "value": "28700000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "28.7M"
    },
    {
      "id": "same_store_sale",
      "value": "7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+7%"
    },
    {
      "id": "ticket",
      "value": "8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+8%"
    },
    {
      "id": "transactions",
      "value": "1",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "1%"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "starbucks-q4-fy22-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 807.392578125,
      "y": 237.0087890625,
      "width": 154.96728515625,
      "height": 154.96728515625
    },
    {
      "key": "starbucks-q4-fy22-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 446.67041015625,
      "width": 145.8515625,
      "height": 237.0087890625
    },
    {
      "key": "starbucks-q4-fy22-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 131.52685546875,
      "y": 776.138671875,
      "width": 151.060546875,
      "height": 134.13134765625
    },
    {
      "key": "starbucks-q4-fy22-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 154.96728515625,
      "y": 980.59130859375,
      "width": 105.48193359375,
      "height": 102.87744140625
    }
  ],
  "i18n": {
    "zh": {
      "name": "星巴克 · 2022 财年第四季度",
      "meta": {
        "title": "星巴克 2022 财年第四季度利润表",
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 9 月"
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 +3%"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 +8%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (17%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 68%",
            "同比 (2 个百分点)"
          ]
        },
        "product_distribution": {
          "label": [
            "产品与",
            "分销成本"
          ],
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 14%",
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 (11 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_expense": {
          "label": "其他",
          "notes": []
        },
        "store_opex": {
          "label": "门店运营费用",
          "notes": []
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": []
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ],
          "notes": []
        },
        "ga": {
          "label": "一般及行政",
          "notes": []
        },
        "restructuring": {
          "label": "重组",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "beverage": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "$value"
                  },
                  {
                    "text": "同比 +3%"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "饮品"
                  }
                ]
              }
            ]
          },
          "food": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "$value"
                  },
                  {
                    "text": "同比 +8%"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "食品"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "$value"
                  },
                  {
                    "text": "同比 (17%)"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "其他"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "包装饮品、版税和"
                  },
                  {
                    "text": "授权收入、原料"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "收入"
                  },
                  {
                    "text": "$value"
                  },
                  {
                    "text": "同比 +3%"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "毛利润"
                  },
                  {
                    "text": "$value"
                  },
                  {
                    "text": "利润率 68%"
                  },
                  {
                    "text": "同比 (2 个百分点)"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "营业利润"
                  },
                  {
                    "text": "$value"
                  },
                  {
                    "text": "利润率 14%"
                  },
                  {
                    "text": "同比 (4 个百分点)"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "净利润"
                  },
                  {
                    "text": "$value"
                  },
                  {
                    "text": "利润率 10%"
                  },
                  {
                    "text": "同比 (11 个百分点)"
                  }
                ]
              }
            ]
          },
          "product_distribution": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "产品与"
                  },
                  {
                    "text": "分销成本"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "运营"
                  },
                  {
                    "text": "费用"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "其他"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "税费"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "其他"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "store_opex": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "门店运营费用"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "其他运营费用"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "折旧与"
                  },
                  {
                    "text": "摊销"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "一般及行政"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "重组"
                  },
                  {
                    "text": "$value"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1221.5068359375\" width=\"313.84130859375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"638.1005859375\" y=\"1221.5068359375\" width=\"412.81201171875\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">门店数</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">35,711</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比 +6%</text><text x=\"468.80859375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">活跃奖励会员</text><text x=\"411.509765625\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">28.7M</text><text x=\"533.9208984375\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">会员</text><text x=\"468.80859375\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比 +16%</text><text x=\"782.64990234375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">同店销售额</text><text x=\"953.244140625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+7%</text><text x=\"1015.751953125\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text><text x=\"803.48583984375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">客单价</text><text x=\"881.62060546875\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+8%</text><text x=\"946.73291015625\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比</text><text x=\"794.3701171875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">交易量</text><text x=\"876.41162109375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">(</text><text x=\"905.06103515625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"transactions\">1%</text><text x=\"964.96435546875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">) 同比</text><text x=\"170\" y=\"1437\" font-size=\"36\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1221.5068359375\" width=\"313.84130859375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"638.1005859375\" y=\"1221.5068359375\" width=\"412.81201171875\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">Store count</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">35,711</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">+6% Y/Y</text><text x=\"468.80859375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">Active Reward</text><text x=\"411.509765625\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">28.7M</text><text x=\"533.9208984375\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">members</text><text x=\"468.80859375\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">+16% Y/Y</text><text x=\"782.64990234375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Same Store Sale</text><text x=\"953.244140625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+7%</text><text x=\"1015.751953125\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text><text x=\"803.48583984375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Ticket</text><text x=\"881.62060546875\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+8%</text><text x=\"946.73291015625\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Y/Y</text><text x=\"794.3701171875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Transactions</text><text x=\"876.41162109375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">(</text><text x=\"905.06103515625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"transactions\">1%</text><text x=\"964.96435546875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">) Y/Y</text><text x=\"170\" y=\"1437\" font-size=\"36\" fill=\"#000000\">Source: Quarterly results</text></g>"
});})();
