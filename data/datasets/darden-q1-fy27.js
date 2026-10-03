(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "darden-q1-fy27",
  "name": "Darden Restaurants · Q1 FY27",
  "company": "Darden Restaurants",
  "meta": {
    "company": "Darden Restaurants",
    "title": "Darden Q1 FY27 Income Statement",
    "period": "Q1 FY27",
    "periodNote": "Ending Aug. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/darden-q1-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 216.1728515625,
    "titleSize": 127.6201171875,
    "titleWeight": 800,
    "titleTextLength": 2187.7734375,
    "periodX": 1333.5,
    "periodY": 1299.6416015625,
    "periodNoteY": 1341.3134765625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "revenue:left",
        "revenue:right"
      ]
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#a8ad00",
        "label": "#a8ad00"
      },
      "hub": {
        "node": "#342d2c",
        "label": "#342d2c"
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
      "source": "#d1d385",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 7.8134765625
    }
  },
  "rasterAnnotations": [
    {
      "key": "company",
      "href": "data/assets/raster-annotations/darden/company-logo-q3-fy26.png",
      "x": 677.16796875,
      "y": 259.14697265625,
      "width": 656.33203125,
      "height": 169.2919921875
    },
    {
      "key": "olive",
      "href": "data/assets/raster-annotations/darden/olive-garden-logo.png",
      "x": 39.0673828125,
      "y": 391.97607421875,
      "width": 299.5166015625,
      "height": 217.47509765625
    },
    {
      "key": "longhorn",
      "href": "data/assets/raster-annotations/darden/longhorn-logo-q3-fy26.png",
      "x": 13.0224609375,
      "y": 671.958984375,
      "width": 352.90869140625,
      "height": 134.13134765625
    },
    {
      "key": "fine",
      "href": "data/assets/raster-annotations/darden/fine-dining-brand-cluster.png",
      "x": 52.08984375,
      "y": 868.59814453125,
      "width": 313.84130859375,
      "height": 97.66845703125
    },
    {
      "key": "other",
      "href": "data/assets/raster-annotations/darden/other-business-brand-cluster.png",
      "x": 13.0224609375,
      "y": 1083.46875,
      "width": 352.90869140625,
      "height": 97.66845703125
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "cost_of_revenue",
      "representation": "data-only"
    },
    {
      "id": "gross_profit",
      "representation": "data-only"
    },
    {
      "id": "other_gains",
      "representation": "annotation",
      "value": 0.004,
      "type": "profit"
    }
  ],
  "nodes": [
    {
      "id": "olive_garden",
      "type": "source",
      "label": "Olive Garden",
      "value": 1.3,
      "notes": [
        "+2% Y/Y",
        "20% segment margin"
      ],
      "color": "#a8ad00",
      "linkTint": "#d1d385"
    },
    {
      "id": "longhorn",
      "type": "source",
      "label": "LongHorn Steakhouse",
      "value": 0.9,
      "notes": [
        "+11% Y/Y",
        "18% segment margin"
      ],
      "color": "#8b0e04",
      "linkTint": "#c48b87"
    },
    {
      "id": "fine_dining",
      "type": "source",
      "label": "Fine Dining",
      "value": 0.3,
      "notes": [
        "+6% Y/Y",
        "13% segment margin"
      ],
      "color": "#d57f00",
      "linkTint": "#e4bd85"
    },
    {
      "id": "other_business",
      "type": "source",
      "label": "Other Business",
      "value": 0.7,
      "notes": [
        "+4% Y/Y",
        "16% segment margin"
      ],
      "color": "#7c9d6b",
      "linkTint": "#bccbb4"
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 3.2,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 0.3,
      "notes": [
        "10% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 2.9
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 0.2,
      "notes": [
        "7% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "interest",
      "type": "cost",
      "label": "Interest",
      "value": 0.1
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.035,
      "valueText": "($35M)"
    },
    {
      "id": "restaurant_labor",
      "type": "cost",
      "label": "Restaurant Labor",
      "value": 1,
      "valueText": "($1.0B)"
    },
    {
      "id": "food_beverage",
      "type": "cost",
      "label": "Food & Beverage",
      "value": 1,
      "valueText": "($1.0B)"
    },
    {
      "id": "restaurant_expenses",
      "type": "cost",
      "label": [
        "Restaurant",
        "expenses"
      ],
      "value": 0.5
    },
    {
      "id": "da",
      "type": "cost",
      "label": "D&A",
      "value": 0.1
    },
    {
      "id": "ga",
      "type": "cost",
      "label": "G&A",
      "value": 0.1
    },
    {
      "id": "marketing",
      "type": "cost",
      "label": "Marketing",
      "value": 0.1
    }
  ],
  "links": [
    {
      "source": "olive_garden",
      "target": "revenue",
      "value": 1.3,
      "sourceWidth": 136.73583984375,
      "targetWidth": 136.73583984375,
      "y0": 507.224853515625,
      "y1": 732.513427734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#d1d385"
    },
    {
      "source": "longhorn",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "y0": 780.696533203125,
      "y1": 844.506591796875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#c48b87"
    },
    {
      "source": "fine_dining",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "y0": 991.00927734375,
      "y1": 903.7587890625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#e4bd85"
    },
    {
      "source": "other_business",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 72.92578125,
      "targetWidth": 72.92578125,
      "y0": 1191.55517578125,
      "y1": 955.8486328125,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#bccbb4"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.3,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "y0": 680.423583984375,
      "y1": 531.967529296875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 2.9,
      "sourceWidth": 295.60986328125,
      "targetWidth": 294.3076171875,
      "y0": 844.506591796875,
      "y1": 983.19580078125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 24.74267578125,
      "targetWidth": 23.4404296875,
      "y0": 528.060791015625,
      "y1": 319.05029296875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "y0": 543.03662109375,
      "y1": 462.29736328125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.035,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.90673828125,
      "y0": 546.943359375,
      "y1": 541.083251953125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restaurant_labor",
      "value": 1,
      "sourceWidth": 105.48193359375,
      "targetWidth": 105.48193359375,
      "y0": 888.782958984375,
      "y1": 662.192138671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "food_beverage",
      "value": 1,
      "sourceWidth": 100.27294921875,
      "targetWidth": 100.27294921875,
      "y0": 991.660400390625,
      "y1": 818.461669921875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restaurant_expenses",
      "value": 0.5,
      "sourceWidth": 55.99658203125,
      "targetWidth": 54.6943359375,
      "y0": 1069.795166015625,
      "y1": 977.98681640625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.1,
      "sourceWidth": 15.626953125,
      "targetWidth": 14.32470703125,
      "y0": 1105.60693359375,
      "y1": 1104.955810546875,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.1,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "y0": 1120.582763671875,
      "y1": 1214.344482421875,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.90673828125,
      "y0": 1129.04736328125,
      "y1": 1319.826416015625,
      "sourceOrder": 5,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 104.1796875,
    "nodes": {
      "olive_garden": {
        "x": 391.97607421875,
        "y": 438.85693359375,
        "width": 72.92578125,
        "height": 136.73583984375
      },
      "longhorn": {
        "x": 391.97607421875,
        "y": 737.0712890625,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "fine_dining": {
        "x": 391.97607421875,
        "y": 975.38232421875,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "other_business": {
        "x": 391.97607421875,
        "y": 1155.09228515625,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "revenue": {
        "x": 1014.44970703125,
        "y": 664.1455078125,
        "width": 72.92578125,
        "height": 328.166015625
      },
      "operating_profit": {
        "x": 1636.92333984375,
        "y": 515.689453125,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "operating_expenses": {
        "x": 1636.92333984375,
        "y": 836.0419921875,
        "width": 72.92578125,
        "height": 294.3076171875
      },
      "net_profit": {
        "x": 2260.69921875,
        "y": 307.330078125,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "interest": {
        "x": 2260.69921875,
        "y": 459.69287109375,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "tax": {
        "x": 2260.69921875,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "restaurant_labor": {
        "x": 2260.69921875,
        "y": 609.451171875,
        "width": 72.92578125,
        "height": 105.48193359375
      },
      "food_beverage": {
        "x": 2260.69921875,
        "y": 768.3251953125,
        "width": 72.92578125,
        "height": 100.27294921875
      },
      "restaurant_expenses": {
        "x": 2260.69921875,
        "y": 950.6396484375,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "da": {
        "x": 2260.69921875,
        "y": 1097.79345703125,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "ga": {
        "x": 2260.69921875,
        "y": 1207.18212890625,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "marketing": {
        "x": 2260.69921875,
        "y": 1317.873046875,
        "width": 72.92578125,
        "height": 3.90673828125
      }
    },
    "labels": {
      "olive_garden": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 347.69970703125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#a8ad00",
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 618.56689453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "20% segment margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "longhorn": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 642.00732421875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#8b0e04",
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 804.7880859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "18% segment margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "fine_dining": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 881.62060546875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#d57f00",
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 233.10205078125,
            "top": 963.662109375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Fine Dining",
                "size": 39.0673828125,
                "color": "#d57f00",
                "weight": 800
              },
              {
                "text": "13% segment margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_business": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 1061.33056640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#7c9d6b",
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 229.1953125,
            "top": 1165.51025390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other Business",
                "size": 39.0673828125,
                "color": "#7c9d6b",
                "weight": 800
              },
              {
                "text": "16% segment margin",
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
            "x": 1050.91259765625,
            "top": 516.99169921875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "color": "#342d2c",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#342d2c",
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
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
            "x": 1673.38623046875,
            "top": 330.7705078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "10% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 1673.38623046875,
            "top": 1149.88330078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 253.93798828125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "7% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 450.5771484375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Interest ($0.1B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 527.40966796875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax ($35M)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 1088.677734375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "D&A ($0.1B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 1199.36865234375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "G&A ($0.1B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 1304.8505859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Marketing ($0.1B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "restaurant_labor": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 625.078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Restaurant Labor",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "food_beverage": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 781.34765625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Food & Beverage",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "restaurant_expenses": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 919.3857421875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Restaurant",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "达登餐饮集团 · 2027 财年第一季度",
      "meta": {
        "title": "达登餐饮集团 2027 财年第一季度利润表",
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 8 月",
        "titleTextLength": 2018.4814453125
      },
      "nodes": {
        "olive_garden": {
          "label": "橄榄花园",
          "notes": [
            "同比 +2%",
            "分部利润率 20%"
          ]
        },
        "longhorn": {
          "label": "长角牛排馆",
          "notes": [
            "同比 +11%",
            "分部利润率 18%"
          ]
        },
        "fine_dining": {
          "label": "高端餐饮",
          "notes": [
            "同比 +6%",
            "分部利润率 13%"
          ]
        },
        "other_business": {
          "label": "其他业务",
          "notes": [
            "同比 +4%",
            "分部利润率 16%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 10%",
            "同比下降 1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比下降 1 个百分点"
          ]
        },
        "interest": {
          "label": "利息"
        },
        "tax": {
          "label": "税费"
        },
        "restaurant_labor": {
          "label": "餐厅人工"
        },
        "food_beverage": {
          "label": "食品和饮料"
        },
        "restaurant_expenses": {
          "label": "餐厅费用"
        },
        "da": {
          "label": "折旧与摊销"
        },
        "ga": {
          "label": "一般及行政费用"
        },
        "marketing": {
          "label": "营销费用"
        }
      },
      "layout": {
        "labels": {
          "olive_garden": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 347.69970703125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#a8ad00",
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 207.05712890625,
                "top": 618.56689453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "分部利润率 20%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "longhorn": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 642.00732421875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#8b0e04",
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 207.05712890625,
                "top": 804.7880859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "分部利润率 18%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "fine_dining": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 881.62060546875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#d57f00",
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 233.10205078125,
                "top": 963.662109375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "高端餐饮",
                    "size": 39.0673828125,
                    "color": "#d57f00",
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 13%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_business": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 1061.33056640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#7c9d6b",
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 229.1953125,
                "top": 1165.51025390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他业务",
                    "size": 39.0673828125,
                    "color": "#7c9d6b",
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 16%",
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
                "x": 1050.91259765625,
                "top": 516.99169921875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "color": "#342d2c",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#342d2c",
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
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
                "x": 1673.38623046875,
                "top": 330.7705078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 10%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比下降 1 个百分点",
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
                "x": 1673.38623046875,
                "top": 1149.88330078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 33.8583984375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 253.93798828125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比下降 1 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 450.5771484375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利息（$0.1B）",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 527.40966796875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费（$35M）",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 1088.677734375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "折旧与摊销（$0.1B）",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2492,
                "top": 1199.36865234375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "一般及行政费用（$0.1B）",
                    "size": 23.44,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 1304.8505859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营销费用（$0.1B）",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "restaurant_labor": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 625.078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "餐厅人工",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "food_beverage": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 781.34765625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "食品和饮料",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "restaurant_expenses": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 919.3857421875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "餐厅费用",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g class=\"sankey-interactive-annotation\" data-node=\"other_gains\"><path d=\"M1161 466 H1217 C1235 466 1235 422 1257 421\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"1190\" y=\"502\" text-anchor=\"middle\" font-family=\"Noto Sans\" font-size=\"24\" font-weight=\"800\" fill=\"#008f51\">其他收益</text><text x=\"1190\" y=\"534\" text-anchor=\"middle\" font-family=\"Noto Sans\" font-size=\"24\" fill=\"#008f51\">$4M</text></g></g>"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g class=\"sankey-interactive-annotation\" data-node=\"other_gains\"><path d=\"M1161 466 H1217 C1235 466 1235 422 1257 421\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"1190\" y=\"502\" text-anchor=\"middle\" font-family=\"Noto Sans\" font-size=\"24\" font-weight=\"800\" fill=\"#008f51\">Other gains</text><text x=\"1190\" y=\"534\" text-anchor=\"middle\" font-family=\"Noto Sans\" font-size=\"24\" fill=\"#008f51\">$4M</text></g></g>"
});})();
