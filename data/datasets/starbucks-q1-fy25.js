(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q1-fy25",
  "name": "Starbucks · Q1 FY25",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197,
    "titleSize": 122,
    "titleWeight": 800,
    "periodX": 208,
    "periodY": 267,
    "periodNoteY": 311
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
        "(0%) Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.8,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 1.9,
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
      "value": 9.4,
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 2.3,
      "notes": [
        "24% margin",
        "(3pp) Y/Y"
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
      "value": 1.1,
      "notes": [
        "12% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.2
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 0.8,
      "notes": [
        "8% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.2
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
      "value": 0.7
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
      "value": 0.2
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.7,
      "sourceWidth": 238.31103515625,
      "targetWidth": 238.31103515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 80.7392578125,
      "targetWidth": 80.7392578125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.3,
      "sourceWidth": 96.3662109375,
      "targetWidth": 96.3662109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 4.2,
      "sourceWidth": 177.10546875,
      "targetWidth": 177.10546875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.9,
      "sourceWidth": 121.10888671875,
      "targetWidth": 122.4111328125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.1,
      "sourceWidth": 44.2763671875,
      "targetWidth": 44.2763671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.2,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 1.953369140625,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.8,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 10.41796875,
      "targetWidth": 7.8134765625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 3.90673828125,
      "targetWidth": 2.6044921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
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
      "target": "other_opex",
      "value": 0.2,
      "sourceWidth": 6.51123046875,
      "targetWidth": 5.208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 388.0693359375,
        "y": 454.48388671875,
        "width": 72.92578125,
        "height": 238.31103515625
      },
      "food": {
        "x": 388.0693359375,
        "y": 856.8779296875,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "other_revenue": {
        "x": 388.0693359375,
        "y": 1089.97998046875,
        "width": 72.92578125,
        "height": 80.7392578125
      },
      "revenue": {
        "x": 855.57568359375,
        "y": 643.3095703125,
        "width": 72.92578125,
        "height": 394.58056640625
      },
      "gross_profit": {
        "x": 1324.38427734375,
        "y": 536.525390625,
        "width": 72.92578125,
        "height": 96.3662109375
      },
      "store_opex": {
        "x": 1321.77978515625,
        "y": 830.8330078125,
        "width": 72.92578125,
        "height": 177.10546875
      },
      "product_distribution": {
        "x": 1321.77978515625,
        "y": 1099.095703125,
        "width": 72.92578125,
        "height": 122.4111328125
      },
      "other_income": {
        "x": 1679.8974609375,
        "y": 515.689453125,
        "width": 71.62353515625,
        "height": 1.953369140625
      },
      "operating_profit": {
        "x": 1799.7041015625,
        "y": 434.9501953125,
        "width": 71.62353515625,
        "height": 46.880859375
      },
      "operating_expenses": {
        "x": 1791.890625,
        "y": 656.33203125,
        "width": 71.62353515625,
        "height": 52.08984375
      },
      "net_profit": {
        "x": 2256.79248046875,
        "y": 354.2109375,
        "width": 71.62353515625,
        "height": 32.55615234375
      },
      "tax": {
        "x": 2256.79248046875,
        "y": 520.8984375,
        "width": 71.62353515625,
        "height": 7.8134765625
      },
      "other_expense": {
        "x": 2256.79248046875,
        "y": 651.123046875,
        "width": 71.62353515625,
        "height": 2.6044921875
      },
      "ga": {
        "x": 2256.79248046875,
        "y": 856.8779296875,
        "width": 71.62353515625,
        "height": 28.6494140625
      },
      "depreciation_amortization": {
        "x": 2256.79248046875,
        "y": 1031.37890625,
        "width": 71.62353515625,
        "height": 16.92919921875
      },
      "other_opex": {
        "x": 2256.79248046875,
        "y": 1188.95068359375,
        "width": 71.62353515625,
        "height": 5.208984375
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 360.72216796875,
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
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "weight": 700,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 632.8916015625,
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
            "x": 423.22998046875,
            "top": 764.41845703125,
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
                "text": "+2% Y/Y",
                "size": 27.34716796875,
                "weight": 700,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 879.01611328125,
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
            "x": 423.22998046875,
            "top": 994.916015625,
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
                "weight": 700,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 1092.58447265625,
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
                "weight": 700,
                "color": "#00754a"
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#00754a"
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
            "top": 498.76025390625,
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
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "(0%) Y/Y",
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
            "x": 1362.1494140625,
            "top": 352.90869140625,
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
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "24% margin",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1836.1669921875,
            "top": 246.12451171875,
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
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "12% margin",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 299.5166015625,
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
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "8% margin",
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
      "other_income": {
        "blocks": [
          {
            "x": 1716.3603515625,
            "top": 533.9208984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#008000"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#008000"
              }
            ]
          }
        ]
      },
      "store_opex": {
        "blocks": [
          {
            "x": 1521.0234375,
            "top": 879.01611328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Store opex",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "product_distribution": {
        "blocks": [
          {
            "x": 1521.0234375,
            "top": 1092.58447265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product &",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "distribution",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
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
            "x": 1828.353515625,
            "top": 727.95556640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "expenses",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
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
            "x": 2458.640625,
            "top": 490.94677734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2458.640625,
            "top": 618.56689453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2469.05859375,
            "top": 815.2060546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "administrative",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2469.05859375,
            "top": 983.19580078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "amortization",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2469.05859375,
            "top": 1152.48779296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other opex",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "starbucks-q1-fy25-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 774.83642578125,
      "y": 242.2177734375,
      "width": 226.5908203125,
      "height": 225.28857421875
    },
    {
      "key": "starbucks-q1-fy25-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 390.673828125,
      "width": 149.75830078125,
      "height": 234.404296875
    },
    {
      "key": "starbucks-q1-fy25-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 128.92236328125,
      "y": 737.0712890625,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q1-fy25-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 985.80029296875,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1207.18212890625\" width=\"272.16943359375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1207.18212890625\" width=\"378.95361328125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1207.18212890625\" width=\"420.62548828125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">Store count</text><text x=\"162.78076171875\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">22.0M</text><text x=\"162.78076171875\" y=\"1330.8955078125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">+7% Y/Y</text><text x=\"501.36474609375\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">US Active Rewards</text><text x=\"450.5771484375\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">34.6M</text><text x=\"565.1748046875\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">members</text><text x=\"501.36474609375\" y=\"1330.8955078125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">+1% Y/Y</text><text x=\"836.0419921875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Same Store Sale</text><text x=\"985.80029296875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">(</text><text x=\"1014.44970703125\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">4%</text><text x=\"1074.35302734375\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">) Y/Y</text><text x=\"826.92626953125\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Ticket</text><text x=\"925.89697265625\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+3%</text><text x=\"996.21826171875\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text><text x=\"823.01953125\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Transactions</text><text x=\"936.31494140625\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">(</text><text x=\"966.2666015625\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">6%</text><text x=\"1041.796875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">) Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "22000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "22.0M"
    },
    {
      "id": "active_rewards",
      "value": "34600000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "34.6M"
    },
    {
      "id": "same_store_sale",
      "value": "4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "4%"
    },
    {
      "id": "ticket",
      "value": "3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+3%"
    },
    {
      "id": "transactions",
      "value": "6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "6%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Starbucks · 2025 财年第一季度",
      "meta": {
        "title": "Starbucks 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 12 月",
        "titleSize": 108
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 (0%)"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 +2%"
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
            "同比 (0%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 24%",
            "同比 (3 个百分点)"
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
            "利润率 12%",
            "同比 (4 个百分点)"
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
            "利润率 8%",
            "同比 (3 个百分点)"
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
                "x": 423.22998046875,
                "top": 360.72216796875,
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
                    "text": "同比 (0%)",
                    "size": 27.34716796875,
                    "weight": 700,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 207.05712890625,
                "top": 632.8916015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "饮品",
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
                "x": 423.22998046875,
                "top": 764.41845703125,
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
                    "text": "同比 +2%",
                    "size": 27.34716796875,
                    "weight": 700,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 207.05712890625,
                "top": 879.01611328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "食品",
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
                "x": 423.22998046875,
                "top": 994.916015625,
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
                    "text": "同比 (2%)",
                    "size": 27.34716796875,
                    "weight": 700,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 207.05712890625,
                "top": 1092.58447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00754a"
                  },
                  {
                    "text": "包装饮品、版税和",
                    "size": 22.13818359375,
                    "weight": 700,
                    "color": "#00754a"
                  },
                  {
                    "text": "授权收入、原料",
                    "size": 22.13818359375,
                    "weight": 400,
                    "color": "#00754a"
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
                "top": 498.76025390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#00754a"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 (0%)",
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
                "x": 1362.1494140625,
                "top": 352.90869140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 24%",
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
          "product_distribution": {
            "blocks": [
              {
                "x": 1521.0234375,
                "top": 1092.58447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "分销",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
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
                "x": 1521.0234375,
                "top": 879.01611328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "门店运营费用",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
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
                "x": 1716.3603515625,
                "top": 533.9208984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#008000"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#008000"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1836.1669921875,
                "top": 246.12451171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 1828.353515625,
                "top": 727.95556640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "费用",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 299.5166015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 8%",
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
          "tax": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 490.94677734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2458.640625,
                "top": 618.56689453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2469.05859375,
                "top": 815.2060546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "行政",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2469.05859375,
                "top": 983.19580078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "摊销",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2469.05859375,
                "top": 1152.48779296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1207.18212890625\" width=\"272.16943359375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1207.18212890625\" width=\"378.95361328125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1207.18212890625\" width=\"420.62548828125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">门店数</text><text x=\"162.78076171875\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">22.0M</text><text x=\"162.78076171875\" y=\"1330.8955078125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比 +7%</text><text x=\"501.36474609375\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">美国活跃奖励会员</text><text x=\"450.5771484375\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">34.6M</text><text x=\"565.1748046875\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">会员</text><text x=\"501.36474609375\" y=\"1330.8955078125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比 +1%</text><text x=\"836.0419921875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">同店销售额</text><text x=\"985.80029296875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">(</text><text x=\"1014.44970703125\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">4%</text><text x=\"1074.35302734375\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">) 同比</text><text x=\"826.92626953125\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">客单价</text><text x=\"925.89697265625\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+3%</text><text x=\"996.21826171875\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text><text x=\"823.01953125\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">交易量</text><text x=\"936.31494140625\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">(</text><text x=\"966.2666015625\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">6%</text><text x=\"1041.796875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">) 同比</text></g>"
    }
  }
});})();
