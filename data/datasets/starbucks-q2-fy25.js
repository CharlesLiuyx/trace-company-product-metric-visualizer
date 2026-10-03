(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q2-fy25",
  "name": "Starbucks · Q2 FY25",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending March. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/starbucks-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "periodX": 208.359375,
    "periodY": 266.96044921875,
    "periodNoteY": 312.5390625
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
      "value": 5.3,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.7,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 1.8,
      "notes": [
        "(2%) Y/Y",
        "Packaged beverages, royalty and",
        "licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 8.8,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 1.8,
      "notes": [
        "21% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "type": "cost",
      "label": [
        "Product &",
        "distribution"
      ],
      "value": 2.7
    },
    {
      "id": "store_opex",
      "type": "cost",
      "label": "Store opex",
      "value": 4.2
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
      "value": 0.6,
      "notes": [
        "7% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.3
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 0.4,
      "notes": [
        "4% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.1
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
      "id": "restructuring",
      "type": "cost",
      "label": "Restructuring",
      "value": 0.1
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
      "value": 5.3,
      "sourceWidth": 222.68408203125,
      "targetWidth": 222.68408203125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.7,
      "sourceWidth": 70.3212890625,
      "targetWidth": 70.3212890625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.8,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.7,
      "sourceWidth": 114.59765625,
      "targetWidth": 114.59765625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 4.2,
      "sourceWidth": 175.80322265625,
      "targetWidth": 175.80322265625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.5,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.3,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 4.557861328125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 4.557861328125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.6,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.4,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "sourceWidth": 5.860107421875,
      "targetWidth": 5.208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 5.860107421875,
      "targetWidth": 5.208984375,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 388.069,
        "y": 462.297,
        "width": 72.926,
        "height": 222.684
      },
      "food": {
        "x": 388.069,
        "y": 865.994,
        "width": 72.926,
        "height": 70.321
      },
      "other_revenue": {
        "x": 388.069,
        "y": 1093.887,
        "width": 72.926,
        "height": 75.53
      },
      "revenue": {
        "x": 854.273,
        "y": 695.399,
        "width": 72.926,
        "height": 368.536
      },
      "gross_profit": {
        "x": 1324.384,
        "y": 570.384,
        "width": 72.926,
        "height": 78.135
      },
      "product_distribution": {
        "x": 1324.384,
        "y": 826.926,
        "width": 72.926,
        "height": 114.598
      },
      "store_opex": {
        "x": 1321.78,
        "y": 992.312,
        "width": 72.926,
        "height": 175.803
      },
      "other_income": {
        "x": 1656.457,
        "y": 518.294,
        "width": 72.926,
        "height": 2.604
      },
      "operating_profit": {
        "x": 1786.682,
        "y": 427.137,
        "width": 72.926,
        "height": 26.045
      },
      "operating_expenses": {
        "x": 1789.286,
        "y": 692.795,
        "width": 72.926,
        "height": 54.694
      },
      "net_profit": {
        "x": 2256.792,
        "y": 320.353,
        "width": 72.926,
        "height": 16.929
      },
      "tax": {
        "x": 2256.792,
        "y": 531.316,
        "width": 72.926,
        "height": 3.907
      },
      "other_expense": {
        "x": 2256.792,
        "y": 662.843,
        "width": 72.926,
        "height": 3.907
      },
      "ga": {
        "x": 2256.792,
        "y": 798.277,
        "width": 72.926,
        "height": 26.045
      },
      "depreciation_amortization": {
        "x": 2256.792,
        "y": 964.964,
        "width": 72.926,
        "height": 16.929
      },
      "restructuring": {
        "x": 2256.792,
        "y": 1108.211,
        "width": 72.926,
        "height": 5.209
      },
      "other_opex": {
        "x": 2256.792,
        "y": 1231.925,
        "width": 72.926,
        "height": 5.209
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 362.0244140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 626.38037109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Beverage",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00754a"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "food": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 765.720703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 873.80712890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Food",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00754a"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 992.3115234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 1087.37548828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00754a"
              },
              {
                "text": "Packaged beverages, royalty and",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#777777"
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
            "top": 541.734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#00754a"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+2% Y/Y",
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
            "x": 1360.84716796875,
            "top": 380.255859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "21% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 1823.14453125,
            "top": 235.70654296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "7% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
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
            "x": 2458.640625,
            "top": 265.658203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "4% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "product_distribution": {
        "blocks": [
          {
            "x": 1530.13916015625,
            "top": 809.9970703125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Product &",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "distribution",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "store_opex": {
        "blocks": [
          {
            "x": 1530.13916015625,
            "top": 1039.1923828125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Store opex",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1824.44677734375,
            "top": 756.60498046875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "expenses",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2459.94287109375,
            "top": 765.720703125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "General &",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "administrative",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2459.94287109375,
            "top": 932.408203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "amortization",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2459.94287109375,
            "top": 1088.677734375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2459.94287109375,
            "top": 1208.484375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other opex",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2459.94287109375,
            "top": 489.64453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2459.94287109375,
            "top": 622.4736328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1692.919921875,
            "top": 530.01416015625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 781.34765625,
      "y": 251.33349609375,
      "width": 225.28857421875,
      "height": 226.5908203125
    },
    {
      "src": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 125.015625,
      "y": 388.0693359375,
      "width": 158.8740234375,
      "height": 239.61328125
    },
    {
      "src": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 125.015625,
      "y": 735.76904296875,
      "width": 162.78076171875,
      "height": 136.73583984375
    },
    {
      "src": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 148.4560546875,
      "y": 985.80029296875,
      "width": 115.89990234375,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1204.57763671875\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00754a\"/><rect x=\"307.330078125\" y=\"1204.57763671875\" width=\"420.62548828125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00754a\"/><text x=\"162.78076171875\" y=\"1257.9697265625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">Store count</text><text x=\"162.78076171875\" y=\"1295.73486328125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"store_count\">40,789</text><text x=\"162.78076171875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">+5% Y/Y</text><text x=\"470.11083984375\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">Same Store Sale</text><text x=\"617.2646484375\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"24.74267578125\" font-weight=\"400\" fill=\"#ffffff\">(</text><text x=\"639.40283203125\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"24.74267578125\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">1%</text><text x=\"681.07470703125\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">) Y/Y</text><text x=\"453.181640625\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">Ticket</text><text x=\"531.31640625\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+1%</text><text x=\"591.2197265625\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">Y/Y</text><text x=\"476.6220703125\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">Transactions</text><text x=\"558.66357421875\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">(</text><text x=\"580.8017578125\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"transactions\">2%</text><text x=\"642.00732421875\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">) Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "40789",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "40,789"
    },
    {
      "id": "same_store_sale",
      "value": "1",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "1%"
    },
    {
      "id": "ticket",
      "value": "1",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+1%"
    },
    {
      "id": "transactions",
      "value": "2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "2%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Starbucks · 2025 财年第二季度",
      "meta": {
        "title": "Starbucks 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 3 月",
        "titleSize": 111.9931640625
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
            "同比 +7%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (2%)",
            "包装饮品、版税和",
            "授权收入、原料"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +2%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 21%",
            "同比 (4 个百分点)"
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
            "利润率 7%",
            "同比 (6 个百分点)"
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
            "利润率 4%",
            "同比 (5 个百分点)"
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
        "restructuring": {
          "label": "重组"
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
                    "text": "同比 +7%"
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
                    "text": "同比 (2%)"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "其他"
                  },
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
                    "text": "同比 +2%"
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
                    "text": "利润率 21%"
                  },
                  {
                    "text": "同比 (4 个百分点)"
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
                    "text": "利润率 7%"
                  },
                  {
                    "text": "同比 (6 个百分点)"
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
                    "text": "利润率 4%"
                  },
                  {
                    "text": "同比 (5 个百分点)"
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
                    "text": "分销"
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
          "ga": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "一般及"
                  },
                  {
                    "text": "行政"
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
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1204.57763671875\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00754a\"/><rect x=\"307.330078125\" y=\"1204.57763671875\" width=\"420.62548828125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00754a\"/><text x=\"162.78076171875\" y=\"1257.9697265625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">门店数</text><text x=\"162.78076171875\" y=\"1295.73486328125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"store_count\">40,789</text><text x=\"162.78076171875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">同比 +5%</text><text x=\"470.11083984375\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">同店销售额</text><text x=\"617.2646484375\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"24.74267578125\" font-weight=\"400\" fill=\"#ffffff\">(</text><text x=\"639.40283203125\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"24.74267578125\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">1%</text><text x=\"681.07470703125\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">) 同比</text><text x=\"453.181640625\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">客单价</text><text x=\"531.31640625\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+1%</text><text x=\"591.2197265625\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">同比</text><text x=\"476.6220703125\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">交易量</text><text x=\"558.66357421875\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">(</text><text x=\"580.8017578125\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"transactions\">2%</text><text x=\"642.00732421875\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#ffffff\">) 同比</text></g>"
    }
  }
});})();
