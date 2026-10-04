(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q3-fy23",
  "name": "Starbucks · Q3 FY23",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending June 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q3-fy23.png",
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
      "value": 5.6,
      "notes": [
        "+13% Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.7,
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 1.9,
      "notes": [
        "+8% Y/Y",
        "Packaged beverages, royalty and",
        "licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 9.2,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 2.6,
      "notes": [
        "28% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "type": "cost",
      "label": [
        "Product &",
        "distribution"
      ],
      "value": 2.9,
      "notes": []
    },
    {
      "id": "store_opex",
      "type": "cost",
      "label": "Store opex",
      "value": 3.7,
      "notes": []
    },
    {
      "id": "other_income",
      "type": "profit",
      "label": "Other",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 1.6,
      "notes": [
        "17% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.1,
      "notes": []
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 1.1,
      "notes": [
        "12% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "notes": []
    },
    {
      "id": "other_expense",
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "ga",
      "type": "cost",
      "label": [
        "General &",
        "administrative"
      ],
      "value": 0.6,
      "notes": []
    },
    {
      "id": "depreciation_amortization",
      "type": "cost",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "value": 0.3,
      "notes": []
    },
    {
      "id": "other_opex",
      "type": "cost",
      "label": "Other opex",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "restructuring",
      "type": "cost",
      "label": "Restructuring",
      "value": 0.007,
      "valueText": "($7M)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.6,
      "sourceWidth": 240,
      "targetWidth": 240,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.7,
      "sourceWidth": 73,
      "targetWidth": 73,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 80,
      "targetWidth": 80,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.6,
      "sourceWidth": 112,
      "targetWidth": 112,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 3.7,
      "sourceWidth": 159,
      "targetWidth": 159,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.9,
      "sourceWidth": 122,
      "targetWidth": 123,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.6,
      "sourceWidth": 64,
      "targetWidth": 64,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.1,
      "sourceWidth": 48,
      "targetWidth": 46,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 1.6,
      "sourceWidth": 3,
      "targetWidth": 4,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.1,
      "sourceWidth": 49,
      "targetWidth": 49,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 6,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.6,
      "sourceWidth": 25,
      "targetWidth": 26,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.3,
      "sourceWidth": 14,
      "targetWidth": 15,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 6,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.007,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 388.0693359375,
        "y": 438.85693359375,
        "width": 72.92578125,
        "height": 240
      },
      "food": {
        "x": 388.0693359375,
        "y": 850.36669921875,
        "width": 72.92578125,
        "height": 73
      },
      "other_revenue": {
        "x": 388.0693359375,
        "y": 1086.0732421875,
        "width": 72.92578125,
        "height": 80
      },
      "revenue": {
        "x": 855.57568359375,
        "y": 640.96552734375,
        "width": 72.92578125,
        "height": 393
      },
      "gross_profit": {
        "x": 1320.4775390625,
        "y": 524.023828125,
        "width": 72.92578125,
        "height": 112
      },
      "store_opex": {
        "x": 1324.38427734375,
        "y": 835.0001953125001,
        "width": 72.92578125,
        "height": 159
      },
      "product_distribution": {
        "x": 1324.38427734375,
        "y": 1044.010693359375,
        "width": 72.92578125,
        "height": 123
      },
      "other_income": {
        "x": 1652.55029296875,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 3
      },
      "operating_profit": {
        "x": 1786.681640625,
        "y": 413.98403320312497,
        "width": 72.92578125,
        "height": 68
      },
      "operating_expenses": {
        "x": 1789.2861328125,
        "y": 695.0087402343751,
        "width": 72.92578125,
        "height": 46
      },
      "net_profit": {
        "x": 2256.79248046875,
        "y": 313.971533203125,
        "width": 72.92578125,
        "height": 49
      },
      "tax": {
        "x": 2256.79248046875,
        "y": 505.922607421875,
        "width": 72.92578125,
        "height": 14
      },
      "other_expense": {
        "x": 2256.79248046875,
        "y": 617.2646484375,
        "width": 72.92578125,
        "height": 6
      },
      "ga": {
        "x": 2256.79248046875,
        "y": 771.9714843749999,
        "width": 72.92578125,
        "height": 26
      },
      "depreciation_amortization": {
        "x": 2256.79248046875,
        "y": 907.014404296875,
        "width": 72.92578125,
        "height": 15
      },
      "other_opex": {
        "x": 2256.79248046875,
        "y": 1050.001025390625,
        "width": 72.92578125,
        "height": 6
      },
      "restructuring": {
        "x": 2256.79248046875,
        "y": 1175.92822265625,
        "width": 72.92578125,
        "height": 2
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 335.9794921875,
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
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 627.6826171875,
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
            "top": 748.79150390625,
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
                "text": "+16% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 876.41162109375,
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
            "top": 987.1025390625,
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
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 1089.97998046875,
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
            "x": 892.03857421875,
            "top": 493.55126953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
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
                "text": "+12% Y/Y",
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
            "x": 1354.3359375,
            "top": 334.67724609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
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
                "text": "28% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
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
            "top": 226.5908203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
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
                "text": "17% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
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
            "top": 272.16943359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
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
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "store_opex": {
        "blocks": [
          {
            "x": 1519.72119140625,
            "top": 865.99365234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Store opex",
                "size": 33.8583984375,
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
            "top": 1043.09912109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product &",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "distribution",
                "size": 33.8583984375,
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
            "x": 1825.7490234375,
            "top": 752.6982421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "expenses",
                "size": 33.8583984375,
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
            "x": 2461.2451171875,
            "top": 476.6220703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 33.8583984375,
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
      "other_expense": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 593.82421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 33.8583984375,
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
      "ga": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 722.74658203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "administrative",
                "size": 33.8583984375,
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
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 864.69140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "amortization",
                "size": 33.8583984375,
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
      "other_opex": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 1020.9609375,
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
                "size": 33.8583984375,
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
            "x": 2471.6630859375,
            "top": 1147.27880859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 33.8583984375,
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
            "x": 1686.40869140625,
            "top": 550.943359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
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
      "key": "starbucks-q3-fy23-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 776.138671875,
      "y": 242.2177734375,
      "width": 226.5908203125,
      "height": 226.5908203125
    },
    {
      "key": "starbucks-q3-fy23-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 389.37158203125,
      "width": 149.75830078125,
      "height": 234.404296875
    },
    {
      "key": "starbucks-q3-fy23-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 128.92236328125,
      "y": 738.37353515625,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q3-fy23-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 988.40478515625,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"311.23681640625\" y=\"1221.5068359375\" width=\"380.255859375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1221.5068359375\" width=\"420.62548828125\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">Store count</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">37,200</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">+6% Y/Y</text><text x=\"501.36474609375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">US Active Rewards</text><text x=\"445.3681640625\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">31.4M</text><text x=\"559.9658203125\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">members</text><text x=\"501.36474609375\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">+15% Y/Y</text><text x=\"838.646484375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Same Store Sale</text><text x=\"983.19580078125\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+10%</text><text x=\"1065.2373046875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Y/Y</text><text x=\"873.80712890625\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Ticket</text><text x=\"950.6396484375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+4%</text><text x=\"1022.26318359375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text><text x=\"846.4599609375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Transactions</text><text x=\"979.2890625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">+5%</text><text x=\"1054.8193359375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "37200",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "37,200"
    },
    {
      "id": "active_rewards",
      "value": "31400000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "31.4M"
    },
    {
      "id": "same_store_sale",
      "value": "10",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+10%"
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
      "value": "5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+5%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Starbucks · 2023 财年第三季度",
      "meta": {
        "title": "Starbucks 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 6 月",
        "titleSize": 108
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 +13%"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 +16%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +8%",
            "包装饮品、版税和",
            "授权收入、原料"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 28%",
            "同比 +1 个百分点"
          ]
        },
        "product_distribution": {
          "label": [
            "产品与",
            "分销"
          ],
          "notes": []
        },
        "store_opex": {
          "label": "门店运营费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 17%",
            "同比 +1 个百分点"
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
            "利润率 12%",
            "同比 +1 个百分点"
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
        "ga": {
          "label": [
            "一般及",
            "行政"
          ],
          "notes": []
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ],
          "notes": []
        },
        "other_opex": {
          "label": "其他运营费用",
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
                "x": 424.5322265625,
                "top": 335.9794921875,
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
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 627.6826171875,
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
                "x": 424.5322265625,
                "top": 748.79150390625,
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
                    "text": "同比 +16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 876.41162109375,
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
                "x": 424.5322265625,
                "top": 987.1025390625,
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
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 1089.97998046875,
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
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "授权收入、原料",
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
                "x": 892.03857421875,
                "top": 493.55126953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
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
                    "text": "同比 +12%",
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
                "x": 1354.3359375,
                "top": 334.67724609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
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
                    "text": "利润率 28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "top": 226.5908203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
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
                    "text": "利润率 17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "top": 272.16943359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
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
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "store_opex": {
            "blocks": [
              {
                "x": 1519.72119140625,
                "top": 865.99365234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "门店运营费用",
                    "size": 33.8583984375,
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
                "top": 1043.09912109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "分销",
                    "size": 33.8583984375,
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
                "x": 1825.7490234375,
                "top": 752.6982421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "费用",
                    "size": 33.8583984375,
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
                "x": 2461.2451171875,
                "top": 476.6220703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 33.8583984375,
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
          "other_expense": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 593.82421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 33.8583984375,
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
          "ga": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 722.74658203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "行政",
                    "size": 33.8583984375,
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
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 864.69140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "摊销",
                    "size": 33.8583984375,
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
          "other_opex": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 1020.9609375,
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
                    "size": 33.8583984375,
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
                "x": 2471.6630859375,
                "top": 1147.27880859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组",
                    "size": 33.8583984375,
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
                "x": 1686.40869140625,
                "top": 550.943359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"311.23681640625\" y=\"1221.5068359375\" width=\"380.255859375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1221.5068359375\" width=\"420.62548828125\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">门店数</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">37,200</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比 +6%</text><text x=\"501.36474609375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">美国活跃奖励会员</text><text x=\"445.3681640625\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">31.4M</text><text x=\"559.9658203125\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">会员</text><text x=\"501.36474609375\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比 +15%</text><text x=\"838.646484375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">同店销售额</text><text x=\"983.19580078125\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+10%</text><text x=\"1065.2373046875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">同比</text><text x=\"873.80712890625\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">客单价</text><text x=\"950.6396484375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+4%</text><text x=\"1022.26318359375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text><text x=\"846.4599609375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">交易量</text><text x=\"979.2890625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">+5%</text><text x=\"1054.8193359375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text></g>"
    }
  }
});})();
