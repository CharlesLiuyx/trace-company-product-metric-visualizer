window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "warner-bros-q2-fy23",
  "name": "Warner Bros. Discovery · Q2 FY23",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 195,
    "titleSize": 124,
    "titleWeight": 800,
    "titleTextLength": 2450,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#727272",
    "noteColor": "#727272",
    "palette": {
      "source": {
        "node": "#0020af",
        "label": "#0020af"
      },
      "hub": {
        "node": "#0020af",
        "label": "#0020af"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#11955c"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#8d1400"
      }
    },
    "linkTint": {
      "source": "#8593d3",
      "hub": "#8593d3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"48\" y=\"1233\" width=\"755\" height=\"120\" rx=\"30\" fill=\"#0020af\"/><text x=\"120\" y=\"1286\" font-size=\"30\" fill=\"white\">DTC subscribers</text><text data-operating-metric=\"dtc_subscribers\" x=\"370\" y=\"1286\" font-size=\"30\" fill=\"white\">95.8M</text><text x=\"470\" y=\"1286\" font-size=\"30\" fill=\"white\">(+4% Y/Y, -2% Q/Q)</text><text x=\"147\" y=\"1327\" font-size=\"30\" fill=\"white\">Global ARPU</text><text data-operating-metric=\"global_arpu\" x=\"342\" y=\"1327\" font-size=\"30\" fill=\"white\">$7.71</text><text x=\"433\" y=\"1327\" font-size=\"30\" fill=\"white\">(+2% Y/Y, +3% Q/Q)</text><text x=\"199\" y=\"1387\" font-size=\"28\" fill=\"#777777\">ARPU = Average Revenue Per User</text></g>",
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "label": "DTC subscribers",
      "literal": "95.8M",
      "value": "95800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+4% Y/Y",
        "-2% Q/Q"
      ],
      "quote": "DTC subscribers 95.8M (+4% Y/Y, -2% Q/Q)",
      "anchor": {
        "type": "image-box",
        "box": [
          117.2021484375,
          1256.66748046875,
          618.56689453125,
          35.16064453125
        ]
      }
    },
    {
      "id": "global_arpu",
      "label": "Global ARPU",
      "literal": "$7.71",
      "value": "0.00771",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+2% Y/Y",
        "+3% Q/Q"
      ],
      "quote": "Global ARPU $7.71 (+2% Y/Y, +3% Q/Q)",
      "anchor": {
        "type": "image-box",
        "box": [
          143.2470703125,
          1298.33935546875,
          586.0107421875,
          32.55615234375
        ]
      }
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "studios": {
        "x": 431.04345703125,
        "y": 407.60302734375,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "networks": {
        "x": 431.04345703125,
        "y": 704.51513671875,
        "width": 72.92578125,
        "height": 167.98974609375
      },
      "streaming": {
        "x": 431.04345703125,
        "y": 1075.6552734375,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "gross_revenue": {
        "x": 804.7880859375,
        "y": 591.2197265625,
        "width": 72.92578125,
        "height": 324.25927734375
      },
      "revenue": {
        "x": 1178.53271484375,
        "y": 652.42529296875,
        "width": 72.92578125,
        "height": 303.42333984375
      },
      "eliminations": {
        "x": 1178.53271484375,
        "y": 1082.16650390625,
        "width": 70.3212890625,
        "height": 20.8359375
      },
      "gross_profit": {
        "x": 1554.8818359375,
        "y": 522.20068359375,
        "width": 71.62353515625,
        "height": 108.08642578125
      },
      "cost_of_revenue": {
        "x": 1552.27734375,
        "y": 871.20263671875,
        "width": 72.92578125,
        "height": 194.03466796875
      },
      "operating_loss": {
        "x": 1774.96142578125,
        "y": 927.19921875,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "operating_expenses": {
        "x": 1923.41748046875,
        "y": 653.7275390625,
        "width": 72.92578125,
        "height": 135.43359375
      },
      "sga": {
        "x": 2299.7666015625,
        "y": 376.34912109375,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "amortization": {
        "x": 2299.7666015625,
        "y": 635.49609375,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "restructuring": {
        "x": 2299.7666015625,
        "y": 929.8037109375,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "asset_impairment": {
        "x": 2299.7666015625,
        "y": 1145.9765625,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "gross_revenue": {
        "blocks": []
      },
      "studios": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 313.84130859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 400
              },
              {
                "text": "(23%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 421.81650390625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Studios",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 800
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 468.80859375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "12% adj. margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 610.75341796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 764.8892578125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Networks",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 800
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 802.18359375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "38% adj. margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "streaming": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 983.19580078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 1067.7193359375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Direct to",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 800
              },
              {
                "text": "consumer",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 800
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 1160.30126953125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(0%) adj. margin",
                "size": 27.34716796875,
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
            "x": 1213.693359375,
            "top": 506.57373046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#0020af",
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1213.693359375,
            "top": 1112.1181640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36.462890625,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "color": "#a11900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1590.04248046875,
            "top": 377.6513671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "color": "#00985e",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#00985e",
                "weight": 400
              },
              {
                "text": "36% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1588.740234375,
            "top": 1083.46875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1815.3310546875,
            "top": 971.4755859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 400
              },
              {
                "text": "(9%) margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(4pp) Q/Q",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1959.88037109375,
            "top": 494.853515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#a11900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 382.8603515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 647.21630859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 400
              },
              {
                "text": "18% of revenue",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 888.1318359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 400
              },
              {
                "text": "1% of revenue",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "asset_impairment": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1105.60693359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Asset",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "impairment",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#a11900",
                "weight": 400
              },
              {
                "text": "0% of revenue",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "studios",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Studios",
      "value": 2.6,
      "notes": [
        "(23%) Y/Y",
        "12% adj. margin"
      ]
    },
    {
      "id": "networks",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Networks",
      "value": 5.8,
      "notes": [
        "(6%) Y/Y",
        "38% adj. margin"
      ]
    },
    {
      "id": "streaming",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Direct to",
        "consumer"
      ],
      "value": 2.7,
      "notes": [
        "+13% Y/Y",
        "(0%) adj. margin"
      ]
    },
    {
      "id": "gross_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Gross revenue",
      "value": 11.1
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 3,
      "type": "hub",
      "label": "Revenue",
      "value": 10.4,
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.7,
      "notes": []
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 5,
      "type": "profit",
      "label": "Gross profit",
      "value": 3.7,
      "notes": [
        "36% margin"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 6.6,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": 0.9,
      "notes": [
        "(9%) margin",
        "(4pp) Q/Q"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.6,
      "notes": []
    },
    {
      "id": "sga",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "SG&A",
      "value": 2.6,
      "notes": [
        "25% of revenue"
      ]
    },
    {
      "id": "amortization",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "Amortization",
      "value": 1.9,
      "notes": [
        "18% of revenue"
      ]
    },
    {
      "id": "restructuring",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.1,
      "notes": [
        "1% of revenue"
      ]
    },
    {
      "id": "asset_impairment",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": [
        "Asset",
        "impairment"
      ],
      "value": 0.006,
      "notes": [
        "0% of revenue"
      ],
      "valueText": "($6M)"
    }
  ],
  "links": [
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 2.6,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 5.8,
      "sourceWidth": 167.98974609375,
      "targetWidth": 167.98974609375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "streaming",
      "target": "gross_revenue",
      "value": 2.7,
      "sourceWidth": 79.43701171875,
      "targetWidth": 80.7392578125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 10.4,
      "sourceWidth": 303.42333984375,
      "targetWidth": 303.42333984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 0.7,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.7,
      "sourceWidth": 109.388671875,
      "targetWidth": 108.08642578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 6.6,
      "sourceWidth": 194.03466796875,
      "targetWidth": 194.03466796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.7,
      "sourceWidth": 108.08642578125,
      "targetWidth": 109.388671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.9,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.6,
      "sourceWidth": 74.22802734375,
      "targetWidth": 74.22802734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.9,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "asset_impairment",
      "value": 0.006,
      "sourceWidth": 1.30224609375,
      "targetWidth": 2.6044921875,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros/company-wordmark.png",
      "x": 729.2578125,
      "y": 237.0087890625,
      "width": 716.2353515625,
      "height": 214.87060546875
    },
    {
      "key": "business-studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-studios-cluster.png",
      "x": 33.8583984375,
      "y": 382.8603515625,
      "width": 156.26953125,
      "height": 156.26953125
    },
    {
      "key": "business-networks-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-networks-cluster.png",
      "x": 36.462890625,
      "y": 696.70166015625,
      "width": 136.73583984375,
      "height": 216.1728515625
    },
    {
      "key": "business-streaming-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-streaming-cluster.png",
      "x": 91.1572265625,
      "y": 1054.8193359375,
      "width": 58.60107421875,
      "height": 104.1796875
    }
  ],
  "i18n": {
    "zh": {
      "name": "Warner Bros. Discovery · 2023 财年第二季度",
      "meta": {
        "title": "Warner Bros. 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "titleTextLength": 2160
      },
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"48\" y=\"1233\" width=\"755\" height=\"120\" rx=\"30\" fill=\"#0020af\"/><text x=\"120\" y=\"1286\" font-size=\"30\" fill=\"white\">DTC 订阅用户</text><text data-operating-metric=\"dtc_subscribers\" x=\"370\" y=\"1286\" font-size=\"30\" fill=\"white\">95.8M</text><text x=\"470\" y=\"1286\" font-size=\"30\" fill=\"white\">(同比 +4%, 环比 -2%)</text><text x=\"147\" y=\"1327\" font-size=\"30\" fill=\"white\">全球 ARPU</text><text data-operating-metric=\"global_arpu\" x=\"342\" y=\"1327\" font-size=\"30\" fill=\"white\">$7.71</text><text x=\"433\" y=\"1327\" font-size=\"30\" fill=\"white\">(同比 +2%, 环比 +3%)</text><text x=\"199\" y=\"1387\" font-size=\"28\" fill=\"#777777\">ARPU = 每用户平均收入</text></g>",
      "nodes": {
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 (23%)",
            "调整后利润率 12%"
          ]
        },
        "networks": {
          "label": "线性网络",
          "notes": [
            "同比 (6%)",
            "调整后利润率 38%"
          ]
        },
        "streaming": {
          "label": [
            "直接面向",
            "消费者"
          ],
          "notes": [
            "同比 +13%",
            "调整后利润率 (0%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (4%)"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 36%"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (9%)",
            "环比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "sga": {
          "label": "销售及管理费用",
          "notes": [
            "占收入 25%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 18%"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 1%"
          ]
        },
        "asset_impairment": {
          "label": [
            "资产",
            "减值"
          ],
          "notes": [
            "占收入 0%"
          ]
        },
        "gross_revenue": {
          "label": "总收入"
        }
      },
      "layout": {
        "labels": {
          "gross_revenue": {
            "blocks": []
          },
          "studios": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 313.84130859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 400
                  },
                  {
                    "text": "同比 (23%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 421.81650390625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "影视工作室",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 468.80859375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "调整后利润率 12%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 610.75341796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 400
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 764.8892578125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "线性网络",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 802.18359375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "调整后利润率 38%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "streaming": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 983.19580078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 1067.7193359375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 800
                  },
                  {
                    "text": "消费者",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 1160.30126953125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "调整后利润率 (0%)",
                    "size": 27.34716796875,
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
                "x": 1213.693359375,
                "top": 506.57373046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#0020af",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1213.693359375,
                "top": 1112.1181640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 36.462890625,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#a11900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1590.04248046875,
                "top": 377.6513671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "color": "#00985e",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#00985e",
                    "weight": 400
                  },
                  {
                    "text": "利润率 36%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1588.740234375,
                "top": 1083.46875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1815.3310546875,
                "top": 971.4755859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 400
                  },
                  {
                    "text": "利润率 (9%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "环比 (4 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1959.88037109375,
                "top": 494.853515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#a11900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 382.8603515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售及管理费用",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 647.21630859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 400
                  },
                  {
                    "text": "占收入 18%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 888.1318359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 400
                  },
                  {
                    "text": "占收入 1%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "asset_impairment": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1105.60693359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "资产",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "减值",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#a11900",
                    "weight": 400
                  },
                  {
                    "text": "占收入 0%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
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