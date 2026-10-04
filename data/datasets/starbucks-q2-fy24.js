(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q2-fy24",
  "name": "Starbucks · Q2 FY24",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 119.806640625,
    "titleWeight": 800,
    "periodX": 208.359375,
    "periodY": 269.56494140625,
    "periodNoteY": 311.23681640625
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
      "lineGap": 11.870914220809937
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
      "value": 5.2,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.6,
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 1.8,
      "notes": [
        "(4%) Y/Y",
        "Packaged beverages, royalty and",
        "licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 8.6,
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 2.2,
      "notes": [
        "26% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "type": "cost",
      "label": [
        "Product &",
        "distribution"
      ],
      "value": 2.6
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
      "value": 1.1,
      "notes": [
        "13% margin",
        "(2pp) Y/Y"
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
        "9% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.3
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
      "value": 0.1
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.2,
      "sourceWidth": 240.91552734375,
      "targetWidth": 240.91552734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.6,
      "sourceWidth": 74.22802734375,
      "targetWidth": 74.22802734375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 84.64599609375,
      "targetWidth": 84.64599609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.2,
      "sourceWidth": 101.5751953125,
      "targetWidth": 101.5751953125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 3.7,
      "sourceWidth": 173.19873046875,
      "targetWidth": 173.19873046875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.6,
      "sourceWidth": 125.015625,
      "targetWidth": 123.71337890625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1,
      "sourceWidth": 48.18310546875,
      "targetWidth": 48.18310546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.2,
      "sourceWidth": 53.39208984375,
      "targetWidth": 53.39208984375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 1.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.8,
      "sourceWidth": 36.462890625,
      "targetWidth": 35.16064453125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 10.41796875,
      "targetWidth": 9.11572265625,
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
      "value": 0.7,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
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
      "value": 0.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 386.76708984375,
        "y": 455.7861328125,
        "width": 72.92578125,
        "height": 240.91552734375
      },
      "food": {
        "x": 386.76708984375,
        "y": 856.8779296875,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "other_revenue": {
        "x": 386.76708984375,
        "y": 1101.7001953125,
        "width": 72.92578125,
        "height": 84.64599609375
      },
      "revenue": {
        "x": 854.2734375,
        "y": 639.40283203125,
        "width": 72.92578125,
        "height": 399.78955078125
      },
      "gross_profit": {
        "x": 1316.57080078125,
        "y": 524.80517578125,
        "width": 72.92578125,
        "height": 101.5751953125
      },
      "store_opex": {
        "x": 1319.17529296875,
        "y": 817.810546875,
        "width": 72.92578125,
        "height": 173.19873046875
      },
      "product_distribution": {
        "x": 1316.57080078125,
        "y": 1086.0732421875,
        "width": 72.92578125,
        "height": 123.71337890625
      },
      "other_income": {
        "x": 1656.45703125,
        "y": 532.61865234375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "operating_profit": {
        "x": 1785.37939453125,
        "y": 441.46142578125,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "operating_expenses": {
        "x": 1785.37939453125,
        "y": 653.7275390625,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "net_profit": {
        "x": 2255.490234375,
        "y": 347.69970703125,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "tax": {
        "x": 2255.490234375,
        "y": 562.5703125,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "other_expense": {
        "x": 2255.490234375,
        "y": 700.6083984375,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "ga": {
        "x": 2255.490234375,
        "y": 838.646484375,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "depreciation_amortization": {
        "x": 2255.490234375,
        "y": 1022.26318359375,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "other_opex": {
        "x": 2255.490234375,
        "y": 1199.36865234375,
        "width": 72.92578125,
        "height": 5.208984375
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 423.22998046875,
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
                "text": "(1%) Y/Y",
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
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 882.9228515625,
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
            "top": 1006.63623046875,
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
                "text": "(4%) Y/Y",
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
            "lineGap": 7.8134765625,
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
            "top": 492.2490234375,
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
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777",
                "text": "(2%) Y/Y"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1353.03369140625,
            "top": 339.88623046875,
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
                "text": "26% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777",
                "text": "(1pp) Y/Y"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1821.84228515625,
            "top": 257.8447265625,
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
                "text": "13% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777",
                "text": "(2pp) Y/Y"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2463.849609375,
            "top": 307.330078125,
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
                "text": "9% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777",
                "text": "(1pp) Y/Y"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1692.919921875,
            "top": 553.45458984375,
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
            "x": 1524.93017578125,
            "top": 859.482421875,
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
            "x": 1524.93017578125,
            "top": 1084.77099609375,
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
            "x": 1821.84228515625,
            "top": 726.6533203125,
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
            "x": 2463.849609375,
            "top": 530.01416015625,
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
            "x": 2463.849609375,
            "top": 661.541015625,
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
            "x": 2472.96533203125,
            "top": 819.11279296875,
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
            "x": 2472.96533203125,
            "top": 988.40478515625,
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
            "x": 2472.96533203125,
            "top": 1165.51025390625,
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
      "key": "starbucks-q2-fy24-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 774.83642578125,
      "y": 242.2177734375,
      "width": 226.5908203125,
      "height": 225.28857421875
    },
    {
      "key": "starbucks-q2-fy24-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 390.673828125,
      "width": 149.75830078125,
      "height": 234.404296875
    },
    {
      "key": "starbucks-q2-fy24-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 128.92236328125,
      "y": 737.0712890625,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q2-fy24-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 985.80029296875,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"21\" y=\"938\" width=\"209\" height=\"114\" rx=\"23\" fill=\"#00643b\"/><rect x=\"240\" y=\"938\" width=\"291\" height=\"114\" rx=\"23\" fill=\"#00643b\"/><rect x=\"541\" y=\"938\" width=\"324\" height=\"114\" rx=\"23\" fill=\"#00643b\"/><text x=\"125\" y=\"979\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\">Store count</text><text x=\"125\" y=\"1009\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\" data-operating-metric=\"store_count\">38,951</text><text x=\"125\" y=\"1033\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">+6% Y/Y</text><text x=\"385\" y=\"979\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\">US Active Rewards</text><text x=\"349\" y=\"1009\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">32.8M</text><text x=\"445\" y=\"1009\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\">members</text><text x=\"385\" y=\"1033\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">+6% Y/Y</text><text x=\"651\" y=\"981\" text-anchor=\"middle\" font-size=\"20\" fill=\"#ffffff\">Same Store Sale</text><text x=\"757\" y=\"981\" text-anchor=\"middle\" font-size=\"20\" fill=\"#ffffff\">(</text><text x=\"782\" y=\"981\" text-anchor=\"middle\" font-size=\"20\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">3%</text><text x=\"827\" y=\"981\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">) Y/Y</text><text x=\"652\" y=\"1006\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">Ticket</text><text x=\"720\" y=\"1006\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+4%</text><text x=\"776\" y=\"1006\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">Y/Y</text><text x=\"647\" y=\"1030\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">Transactions</text><text x=\"722\" y=\"1030\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">(</text><text x=\"748\" y=\"1030\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\" data-operating-metric=\"transactions\">7%</text><text x=\"806\" y=\"1030\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">) Y/Y</text></g></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "38951",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "38,951"
    },
    {
      "id": "active_rewards",
      "value": "32800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "32.8M"
    },
    {
      "id": "same_store_sale",
      "value": "3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "3%"
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
      "value": "7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "7%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "星巴克 · 2024 财年第二季度",
      "meta": {
        "title": "星巴克 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 3 月",
        "titleSize": 108
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 (1%)"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 (0%)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (4%)",
            "包装饮品、版税和",
            "授权收入、原料"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (2%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 26%",
            "同比 (1 个百分点)"
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
            "利润率 13%",
            "同比 (2 个百分点)"
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
            "利润率 9%",
            "同比 (1 个百分点)"
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
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
                    "weight": 700,
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
                    "text": "同比 (0%)",
                    "size": 27.34716796875,
                    "weight": 700,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 882.9228515625,
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
                "top": 1006.63623046875,
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
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "weight": 700,
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
                "top": 492.2490234375,
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
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777",
                    "text": "同比 (2%)"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1353.03369140625,
                "top": 339.88623046875,
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
                    "text": "利润率 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777",
                    "text": "同比 (1 个百分点)"
                  }
                ]
              }
            ]
          },
          "product_distribution": {
            "blocks": [
              {
                "x": 1524.93017578125,
                "top": 1084.77099609375,
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
                "x": 1524.93017578125,
                "top": 859.482421875,
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
                "x": 1692.919921875,
                "top": 553.45458984375,
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
                "x": 1821.84228515625,
                "top": 257.8447265625,
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
                    "text": "利润率 13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777",
                    "text": "同比 (2 个百分点)"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1821.84228515625,
                "top": 726.6533203125,
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
                "x": 2463.849609375,
                "top": 307.330078125,
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
                    "text": "利润率 9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777",
                    "text": "同比 (1 个百分点)"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2463.849609375,
                "top": 530.01416015625,
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
                "x": 2463.849609375,
                "top": 661.541015625,
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
                "x": 2472.96533203125,
                "top": 819.11279296875,
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
                "x": 2472.96533203125,
                "top": 988.40478515625,
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
                "x": 2472.96533203125,
                "top": 1165.51025390625,
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"21\" y=\"938\" width=\"209\" height=\"114\" rx=\"23\" fill=\"#00643b\"/><rect x=\"240\" y=\"938\" width=\"291\" height=\"114\" rx=\"23\" fill=\"#00643b\"/><rect x=\"541\" y=\"938\" width=\"324\" height=\"114\" rx=\"23\" fill=\"#00643b\"/><text x=\"125\" y=\"979\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\">门店数</text><text x=\"125\" y=\"1009\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\" data-operating-metric=\"store_count\">38,951</text><text x=\"125\" y=\"1033\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">同比 +6%</text><text x=\"385\" y=\"979\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\">美国活跃奖励会员</text><text x=\"349\" y=\"1009\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">32.8M</text><text x=\"445\" y=\"1009\" text-anchor=\"middle\" font-size=\"21\" fill=\"#ffffff\">会员</text><text x=\"385\" y=\"1033\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">同比 +6%</text><text x=\"651\" y=\"981\" text-anchor=\"middle\" font-size=\"20\" fill=\"#ffffff\">同店销售额</text><text x=\"757\" y=\"981\" text-anchor=\"middle\" font-size=\"20\" fill=\"#ffffff\">(</text><text x=\"782\" y=\"981\" text-anchor=\"middle\" font-size=\"20\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">3%</text><text x=\"827\" y=\"981\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">) 同比</text><text x=\"652\" y=\"1006\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">客单价</text><text x=\"720\" y=\"1006\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+4%</text><text x=\"776\" y=\"1006\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">同比</text><text x=\"647\" y=\"1030\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">交易量</text><text x=\"722\" y=\"1030\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">(</text><text x=\"748\" y=\"1030\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\" data-operating-metric=\"transactions\">7%</text><text x=\"806\" y=\"1030\" text-anchor=\"middle\" font-size=\"18\" fill=\"#ffffff\">) 同比</text></g></g>"
    }
  }
});})();
