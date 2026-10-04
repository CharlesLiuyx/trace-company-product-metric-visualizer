(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q4-fy23",
  "name": "Starbucks · Q4 FY23",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Sept. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "periodX": 207.05712890625,
    "periodY": 268.2626953125,
    "periodNoteY": 309.9345703125
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
      "value": 36.462890625,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "beverage",
      "type": "source",
      "label": "Beverage",
      "value": 5.7,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.7,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 2,
      "notes": [
        "+10% Y/Y",
        "Packaged beverages, royalty and licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 9.4,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 2.7,
      "notes": [
        "29% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "type": "cost",
      "label": [
        "Product &",
        "distribution"
      ],
      "value": 2.9
    },
    {
      "id": "store_opex",
      "type": "cost",
      "label": "Store opex",
      "value": 3.7
    },
    {
      "id": "other_income",
      "type": "profit",
      "label": "Other",
      "value": 0.1
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 1.7,
      "notes": [
        "18% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.1
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 1.2,
      "notes": [
        "13% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.4
    },
    {
      "id": "other_expense",
      "type": "cost",
      "label": "Other",
      "value": 0.1
    },
    {
      "id": "ga",
      "type": "cost",
      "label": [
        "General &",
        "administrative"
      ],
      "value": 0.6
    },
    {
      "id": "depreciation_amortization",
      "type": "cost",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "value": 0.4
    },
    {
      "id": "other_opex",
      "type": "cost",
      "label": "Other opex",
      "value": 0.1
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.7,
      "sourceWidth": 253.93798828125,
      "targetWidth": 253.93798828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.7,
      "sourceWidth": 76.83251953125,
      "targetWidth": 76.83251953125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 2,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.7,
      "sourceWidth": 121.10888671875,
      "targetWidth": 121.10888671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 3.7,
      "sourceWidth": 165.38525390625,
      "targetWidth": 165.38525390625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.9,
      "sourceWidth": 131.52685546875,
      "targetWidth": 130.224609375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.7,
      "sourceWidth": 71.62353515625,
      "targetWidth": 71.62353515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.1,
      "sourceWidth": 49.4853515625,
      "targetWidth": 49.4853515625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 1.7,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.2,
      "sourceWidth": 53.39208984375,
      "targetWidth": 53.39208984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 16.92919921875,
      "targetWidth": 15.626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.6,
      "sourceWidth": 28.6494140625,
      "targetWidth": 27.34716796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.4,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 6.51123046875,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 385.46484375,
        "y": 432.345703125,
        "width": 72.92578125,
        "height": 253.93798828125
      },
      "food": {
        "x": 385.46484375,
        "y": 841.2509765625,
        "width": 72.92578125,
        "height": 76.83251953125
      },
      "other_revenue": {
        "x": 385.46484375,
        "y": 1052.21484375,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "revenue": {
        "x": 854.2734375,
        "y": 638.1005859375,
        "width": 72.92578125,
        "height": 418.02099609375
      },
      "gross_profit": {
        "x": 1313.96630859375,
        "y": 554.7568359375,
        "width": 72.92578125,
        "height": 121.10888671875
      },
      "store_opex": {
        "x": 1319.17529296875,
        "y": 841.2509765625,
        "width": 72.92578125,
        "height": 165.38525390625
      },
      "product_distribution": {
        "x": 1316.57080078125,
        "y": 1070.4462890625,
        "width": 72.92578125,
        "height": 130.224609375
      },
      "other_income": {
        "x": 1651.248046875,
        "y": 586.0107421875,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "operating_profit": {
        "x": 1789.2861328125,
        "y": 455.7861328125,
        "width": 71.62353515625,
        "height": 75.5302734375
      },
      "operating_expenses": {
        "x": 1786.681640625,
        "y": 716.2353515625,
        "width": 71.62353515625,
        "height": 49.4853515625
      },
      "net_profit": {
        "x": 2252.8857421875,
        "y": 355.51318359375,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "tax": {
        "x": 2252.8857421875,
        "y": 586.0107421875,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "other_expense": {
        "x": 2252.8857421875,
        "y": 713.630859375,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "ga": {
        "x": 2252.8857421875,
        "y": 881.62060546875,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "depreciation_amortization": {
        "x": 2252.8857421875,
        "y": 1048.30810546875,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "other_opex": {
        "x": 2252.8857421875,
        "y": 1194.15966796875,
        "width": 72.92578125,
        "height": 6.51123046875
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 338.583984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 634.19384765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Beverage",
                "size": 37.76513671875,
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
            "x": 421.927734375,
            "top": 744.884765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
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
            "x": 208.359375,
            "top": 881.62060546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Food",
                "size": 37.76513671875,
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
            "x": 421.927734375,
            "top": 955.8486328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 1096.4912109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "Packaged beverages, royalty and",
                "size": 22.13818359375,
                "weight": 400
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 22.13818359375,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 890.736328125,
            "top": 492.2490234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
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
            "x": 1350.42919921875,
            "top": 368.53564453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "29% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1825.7490234375,
            "top": 266.96044921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "18% margin",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 358.11767578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "13% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 571.68603515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 691.49267578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 838.646484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "administrative",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1009.24072265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "amortization",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1165.51025390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other opex",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "store_opex": {
        "blocks": [
          {
            "x": 1522.32568359375,
            "top": 872.5048828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Store opex",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "product_distribution": {
        "blocks": [
          {
            "x": 1523.6279296875,
            "top": 1070.4462890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product &",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "distribution",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1823.14453125,
            "top": 783.9521484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 400
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
            "x": 1687.7109375,
            "top": 606.8466796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "starbucks-q4-fy23-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 774.83642578125,
      "y": 240.91552734375,
      "width": 226.5908203125,
      "height": 226.5908203125
    },
    {
      "key": "starbucks-q4-fy23-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 390.673828125,
      "width": 149.75830078125,
      "height": 234.404296875
    },
    {
      "key": "starbucks-q4-fy23-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 128.92236328125,
      "y": 739.67578125,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q4-fy23-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 987.1025390625,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1221.5068359375\" width=\"378.95361328125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"704.51513671875\" y=\"1221.5068359375\" width=\"421.927734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"164.0830078125\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">Store count</text><text x=\"164.0830078125\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">38,038</text><text x=\"164.0830078125\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">+7% Y/Y</text><text x=\"502.6669921875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">US Active Rewards</text><text x=\"460.9951171875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">32.6M</text><text x=\"563.87255859375\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">members</text><text x=\"502.6669921875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">+14% Y/Y</text><text x=\"836.0419921875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Same Store Sale</text><text x=\"994.916015625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+8%</text><text x=\"1058.72607421875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"#ffffff\">Y/Y</text><text x=\"893.3408203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Ticket</text><text x=\"970.17333984375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+4%</text><text x=\"1028.7744140625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Y/Y</text><text x=\"872.5048828125\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Transactions</text><text x=\"983.19580078125\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"transactions\">+3%</text><text x=\"1043.09912109375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "38038",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "38,038"
    },
    {
      "id": "active_rewards",
      "value": "32600000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "32.6M"
    },
    {
      "id": "same_store_sale",
      "value": "8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+8%"
    },
    {
      "id": "ticket",
      "value": "4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+4%"
    },
    {
      "id": "transactions",
      "value": "3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+3%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "星巴克 · 2023 财年第四季度",
      "meta": {
        "title": "星巴克 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 9 月"
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 +11%"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 +12%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +10%",
            "包装饮品、版税和授权收入、原料"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 29%",
            "同比 +3 个百分点"
          ]
        },
        "product_distribution": {
          "label": [
            "产品与",
            "分销"
          ]
        },
        "store_opex": {
          "label": "门店运营费用"
        },
        "other_income": {
          "label": "其他"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 18%",
            "同比 +4 个百分点"
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
            "利润率 13%",
            "同比 +3 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_expense": {
          "label": "其他"
        },
        "ga": {
          "label": [
            "一般及",
            "行政"
          ]
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ]
        },
        "other_opex": {
          "label": "其他运营费用"
        }
      },
      "layout": {
        "labels": {
          "beverage": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 338.583984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 634.19384765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "饮品",
                    "size": 37.76513671875,
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
                "x": 421.927734375,
                "top": 744.884765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
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
                "x": 208.359375,
                "top": 881.62060546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "食品",
                    "size": 37.76513671875,
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
                "x": 421.927734375,
                "top": 955.8486328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 1096.4912109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "包装饮品、版税和",
                    "size": 22.13818359375,
                    "weight": 400
                  },
                  {
                    "text": "授权收入、原料",
                    "size": 22.13818359375,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 890.736328125,
                "top": 492.2490234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
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
                "x": 1350.42919921875,
                "top": 368.53564453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 29%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34716796875,
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
                "x": 1825.7490234375,
                "top": 266.96044921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 18%",
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
          "net_profit": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 358.11767578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 571.68603515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 691.49267578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 838.646484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "行政",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1009.24072265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "摊销",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1165.51025390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "store_opex": {
            "blocks": [
              {
                "x": 1522.32568359375,
                "top": 872.5048828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "门店运营费用",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "product_distribution": {
            "blocks": [
              {
                "x": 1523.6279296875,
                "top": 1070.4462890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "分销",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1823.14453125,
                "top": 783.9521484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 400
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
                "x": 1687.7109375,
                "top": 606.8466796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1221.5068359375\" width=\"378.95361328125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"704.51513671875\" y=\"1221.5068359375\" width=\"421.927734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"164.0830078125\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">门店数</text><text x=\"164.0830078125\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">38,038</text><text x=\"164.0830078125\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比 +7%</text><text x=\"502.6669921875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">美国活跃奖励会员</text><text x=\"460.9951171875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">32.6M</text><text x=\"563.87255859375\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">会员</text><text x=\"502.6669921875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比 +14%</text><text x=\"836.0419921875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">同店销售额</text><text x=\"994.916015625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+8%</text><text x=\"1058.72607421875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"#ffffff\">同比</text><text x=\"893.3408203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">客单价</text><text x=\"970.17333984375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+4%</text><text x=\"1028.7744140625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比</text><text x=\"872.5048828125\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">交易量</text><text x=\"983.19580078125\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"transactions\">+3%</text><text x=\"1043.09912109375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比</text></g>"
    }
  }
});})();
