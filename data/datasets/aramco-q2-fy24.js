(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "aramco-q2-fy24",
  "name": "Saudi Aramco · Q2 FY24",
  "company": "Saudi Aramco",
  "meta": {
    "company": "Saudi Aramco",
    "title": "Aramco Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/aramco-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#0083a8",
        "label": "#0083a8"
      },
      "hub": {
        "node": "#0083a8",
        "label": "#0083a8"
      },
      "profit": {
        "node": "#299f27",
        "label": "#009653"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9f1900"
      }
    },
    "linkTint": {
      "source": "#84bdcf",
      "hub": "#84bdcf",
      "profit": "#99cc99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.067,
      "value": 37.765,
      "note": 27.347,
      "lineGap": 9.116
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g><text x=\"233.102\" y=\"281.285\" font-size=\"39.067\" font-weight=\"800\" fill=\"#155477\">In SAR billion</text></g>",
  "rasterAnnotations": [
    {
      "key": "aramco-wordmark-q2-fy24",
      "href": "data/assets/raster-annotations/aramco/wordmark-q2-fy24.png",
      "x": 756,
      "y": 270,
      "width": 500,
      "height": 144
    },
    {
      "key": "aramco-mark-q2-fy24",
      "href": "data/assets/raster-annotations/aramco/mark-q2-fy24.png",
      "x": 1284,
      "y": 217,
      "width": 196,
      "height": 197
    }
  ],
  "nodes": [
    {
      "id": "crude_oil",
      "label": "Crude Oil",
      "value": 211,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "refined_chemical_products",
      "label": [
        "Refined &",
        "Chemical products"
      ],
      "value": 198,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "natural_gas_ngls",
      "label": [
        "Natural gas",
        "& NGLs"
      ],
      "value": 12,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "metal_products",
      "label": "Metal products",
      "value": 2,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(37%) Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 3,
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "+178% Y/Y"
      ]
    },
    {
      "id": "reported_revenue",
      "label": "Revenue",
      "value": 426,
      "type": "hub",
      "col": 1,
      "order": 5,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "other_income_related_sales",
      "label": [
        "Other income",
        "related to sales"
      ],
      "value": 45,
      "type": "source",
      "col": 1,
      "order": 6,
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": [
        "Revenue &",
        "Other income"
      ],
      "value": 471,
      "type": "hub",
      "col": 2,
      "order": 7,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 206,
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "44% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 264,
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "finance",
      "label": "Finance",
      "value": 4,
      "type": "profit",
      "col": 4,
      "order": 10
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 109,
      "type": "profit",
      "col": 4,
      "order": 11,
      "notes": [
        "23% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 101,
      "type": "cost",
      "col": 4,
      "order": 12
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 1,
      "type": "cost",
      "col": 4,
      "order": 13
    },
    {
      "id": "purchases",
      "label": "Purchases",
      "value": 134,
      "type": "cost",
      "col": 4,
      "order": 14
    },
    {
      "id": "royalties",
      "label": "Royalties",
      "value": 55,
      "type": "cost",
      "col": 4,
      "order": 15
    },
    {
      "id": "producing_manufacturing",
      "label": [
        "Producing &",
        "Manufacturing"
      ],
      "value": 25,
      "type": "cost",
      "col": 4,
      "order": 16
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 25,
      "type": "cost",
      "col": 4,
      "order": 17
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 21,
      "type": "cost",
      "col": 4,
      "order": 18
    },
    {
      "id": "exploration",
      "label": "Exploration",
      "value": 2,
      "type": "cost",
      "col": 4,
      "order": 19
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1,
      "type": "cost",
      "col": 4,
      "order": 20
    }
  ],
  "links": [
    {
      "source": "crude_oil",
      "target": "reported_revenue",
      "value": 211,
      "sourceWidth": 119.806640625,
      "targetWidth": 118.50439453125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "refined_chemical_products",
      "target": "reported_revenue",
      "value": 198,
      "sourceWidth": 111.9931640625,
      "targetWidth": 111.9931640625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "natural_gas_ngls",
      "target": "reported_revenue",
      "value": 12,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "metal_products",
      "target": "reported_revenue",
      "value": 2,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "other",
      "target": "reported_revenue",
      "value": 3,
      "sourceWidth": 1.692919921875,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "reported_revenue",
      "target": "revenue",
      "value": 426,
      "sourceWidth": 239.61328125,
      "targetWidth": 239.61328125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_income_related_sales",
      "target": "revenue",
      "value": 45,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 207,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 264,
      "sourceWidth": 148.4560546875,
      "targetWidth": 148.4560546875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "finance",
      "target": "net_profit",
      "value": 4,
      "sourceWidth": 2.34404296875,
      "targetWidth": 2.34404296875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 105,
      "sourceWidth": 58.60107421875,
      "targetWidth": 58.861523437500004,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 101,
      "sourceWidth": 56.647705078125,
      "targetWidth": 55.99658203125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 1,
      "sourceWidth": 0.651123046875,
      "targetWidth": 1.30224609375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "purchases",
      "value": 134,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "royalties",
      "value": 55,
      "sourceWidth": 31.25390625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "producing_manufacturing",
      "value": 25,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 25,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 21,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "exploration",
      "value": 2,
      "sourceWidth": 0.651123046875,
      "targetWidth": 1.30224609375,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1,
      "sourceWidth": 0.651123046875,
      "targetWidth": 1.30224609375,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.5625703125,
    "nodes": {
      "crude_oil": {
        "x": 419.323,
        "y": 429.741,
        "width": 72.926,
        "height": 119.807
      },
      "refined_chemical_products": {
        "x": 419.323,
        "y": 686.284,
        "width": 72.926,
        "height": 111.993
      },
      "natural_gas_ngls": {
        "x": 419.323,
        "y": 935.013,
        "width": 72.926,
        "height": 6.511
      },
      "metal_products": {
        "x": 419.323,
        "y": 1084.771,
        "width": 72.926,
        "height": 1.302
      },
      "other": {
        "x": 419.323,
        "y": 1228.018,
        "width": 72.926,
        "height": 1.693
      },
      "reported_revenue": {
        "x": 884.225,
        "y": 630.287,
        "width": 72.926,
        "height": 239.613
      },
      "other_income_related_sales": {
        "x": 886.83,
        "y": 1100.398,
        "width": 72.926,
        "height": 24.743
      },
      "revenue": {
        "x": 1354.336,
        "y": 744.885,
        "width": 72.926,
        "height": 264.356
      },
      "operating_profit": {
        "x": 1816.633,
        "y": 563.873,
        "width": 72.926,
        "height": 115.9
      },
      "operating_expenses": {
        "x": 1819.238,
        "y": 1047.006,
        "width": 72.926,
        "height": 148.456
      },
      "finance": {
        "x": 2118.754,
        "y": 388.069,
        "width": 72.926,
        "height": 2.344
      },
      "net_profit": {
        "x": 2288.046,
        "y": 411.51,
        "width": 72.926,
        "height": 61.206
      },
      "tax": {
        "x": 2288.046,
        "y": 541.734,
        "width": 72.926,
        "height": 55.997
      },
      "other_expense": {
        "x": 2288.046,
        "y": 679.772,
        "width": 72.926,
        "height": 1.302
      },
      "purchases": {
        "x": 2288.046,
        "y": 747.489,
        "width": 72.926,
        "height": 75.53
      },
      "royalties": {
        "x": 2288.046,
        "y": 889.434,
        "width": 72.926,
        "height": 29.952
      },
      "producing_manufacturing": {
        "x": 2288.046,
        "y": 994.916,
        "width": 72.926,
        "height": 14.325
      },
      "da": {
        "x": 2288.046,
        "y": 1076.958,
        "width": 72.926,
        "height": 14.325
      },
      "sga": {
        "x": 2288.046,
        "y": 1173.324,
        "width": 72.926,
        "height": 11.72
      },
      "exploration": {
        "x": 2288.046,
        "y": 1276.201,
        "width": 72.926,
        "height": 1.302
      },
      "rnd": {
        "x": 2288.046,
        "y": 1366.056,
        "width": 72.926,
        "height": 1.302
      }
    },
    "labels": {
      "crude_oil": {
        "blocks": [
          {
            "x": 464.902,
            "top": 330.771,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 397.185,
            "top": 467.111,
            "anchor": "end",
            "lineGap": 6.511,
            "lines": [
              {
                "text": "Crude Oil",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "refined_chemical_products": {
        "blocks": [
          {
            "x": 459.693,
            "top": 586.011,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 397.185,
            "top": 699.957,
            "anchor": "end",
            "lineGap": 6.511,
            "lines": [
              {
                "text": "Refined &",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Chemical products",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "natural_gas_ngls": {
        "blocks": [
          {
            "x": 457.088,
            "top": 841.251,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 397.185,
            "top": 895.945,
            "anchor": "end",
            "lineGap": 6.511,
            "lines": [
              {
                "text": "Natural gas",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "& NGLs",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "metal_products": {
        "blocks": [
          {
            "x": 459.693,
            "top": 984.498,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "(37%) Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 397.185,
            "top": 1062.888,
            "anchor": "end",
            "lineGap": 6.511,
            "lines": [
              {
                "text": "Metal products",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 455.786,
            "top": 1126.443,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "+178% Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 397.185,
            "top": 1209.331,
            "anchor": "end",
            "lineGap": 6.511,
            "lines": [
              {
                "text": "Other",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "reported_revenue": {
        "blocks": [
          {
            "x": 916.781,
            "top": 481.831,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income_related_sales": {
        "blocks": [
          {
            "x": 919.386,
            "top": 1132.954,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other income",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "related to sales",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.347,
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
            "x": 1390.799,
            "top": 539.13,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue &",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Other income",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.347,
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
            "x": 1862.212,
            "top": 369.838,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "44% margin",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.347,
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
            "x": 1855.701,
            "top": 1208.484,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              }
            ]
          }
        ]
      },
      "finance": {
        "blocks": [
          {
            "x": 2155.217,
            "top": 299.517,
            "anchor": "middle",
            "lineGap": 7.8,
            "lines": [
              {
                "text": "Finance",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 350.304,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "23% margin",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2400.04,
            "top": 554.757,
            "anchor": "start",
            "lineGap": 3.907,
            "lines": [
              {
                "text": "Tax (101B)",
                "size": 31.254,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2405.249,
            "top": 660.239,
            "anchor": "start",
            "lineGap": 3.907,
            "lines": [
              {
                "text": "Other (1B)",
                "size": 31.254,
                "weight": 800
              }
            ]
          }
        ]
      },
      "purchases": {
        "blocks": [
          {
            "x": 2385.715,
            "top": 769.627,
            "anchor": "start",
            "lineGap": 3.907,
            "lines": [
              {
                "text": "Purchases (134B)",
                "size": 31.254,
                "weight": 800
              }
            ]
          }
        ]
      },
      "royalties": {
        "blocks": [
          {
            "x": 2400.04,
            "top": 882.923,
            "anchor": "start",
            "lineGap": 3.907,
            "lines": [
              {
                "text": "Royalties (55B)",
                "size": 31.254,
                "weight": 800
              }
            ]
          }
        ]
      },
      "producing_manufacturing": {
        "blocks": [
          {
            "x": 2496.406,
            "top": 937.617,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Producing &",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "Manufacturing",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2422.178,
            "top": 1066.54,
            "anchor": "start",
            "lineGap": 3.907,
            "lines": [
              {
                "text": "D&A (25B)",
                "size": 31.254,
                "weight": 800
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2401.342,
            "top": 1164.208,
            "anchor": "start",
            "lineGap": 3.907,
            "lines": [
              {
                "text": "SG&A (21B)",
                "size": 31.254,
                "weight": 800
              }
            ]
          }
        ]
      },
      "exploration": {
        "blocks": [
          {
            "x": 2389.622,
            "top": 1251.458,
            "anchor": "start",
            "lineGap": 3.907,
            "lines": [
              {
                "text": "Exploration (2B)",
                "size": 31.254,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2420.875,
            "top": 1345.22,
            "anchor": "start",
            "lineGap": 3.907,
            "lines": [
              {
                "text": "R&D (1B)",
                "size": 31.254,
                "weight": 800
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "沙特阿美 · 2024 财年第二季度",
      "meta": {
        "title": "沙特阿美 2024 财年第二季度利润表",
        "titleSize": 104.1796875
      },
      "annotationsSvg": "<g><text x=\"233.102\" y=\"281.285\" font-size=\"39.067\" font-weight=\"800\" fill=\"#155477\">单位：十亿沙特里亚尔</text></g>",
      "nodes": {
        "crude_oil": {
          "label": "原油",
          "notes": [
            "同比 +1%"
          ]
        },
        "refined_chemical_products": {
          "label": [
            "炼油及",
            "化工产品"
          ],
          "notes": [
            "同比 +11%"
          ]
        },
        "natural_gas_ngls": {
          "label": [
            "天然气及",
            "天然气液"
          ],
          "notes": [
            "同比 +19%"
          ]
        },
        "metal_products": {
          "label": "金属产品",
          "notes": [
            "同比 -37%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +178%"
          ]
        },
        "reported_revenue": {
          "label": "收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "other_income_related_sales": {
          "label": [
            "销售相关",
            "其他收入"
          ],
          "notes": [
            "同比 -2%"
          ]
        },
        "revenue": {
          "label": [
            "收入及",
            "其他收入"
          ],
          "notes": [
            "同比 +5%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 44%",
            "同比 -4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "finance": {
          "label": "财务收益"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 23%",
            "同比 -2 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_expense": {
          "label": "其他"
        },
        "purchases": {
          "label": "采购"
        },
        "royalties": {
          "label": "特许权使用费"
        },
        "producing_manufacturing": {
          "label": [
            "生产及",
            "制造"
          ]
        },
        "da": {
          "label": "折旧及摊销"
        },
        "sga": {
          "label": "销售、一般及行政费用"
        },
        "exploration": {
          "label": "勘探"
        },
        "rnd": {
          "label": "研发"
        }
      },
      "layout": {
        "labels": {
          "crude_oil": {
            "blocks": [
              {
                "x": 464.902,
                "top": 330.771,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 397.185,
                "top": 467.111,
                "anchor": "end",
                "lineGap": 6.511,
                "lines": [
                  {
                    "text": "原油",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "refined_chemical_products": {
            "blocks": [
              {
                "x": 459.693,
                "top": 586.011,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 397.185,
                "top": 699.957,
                "anchor": "end",
                "lineGap": 6.511,
                "lines": [
                  {
                    "text": "炼油及",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "化工产品",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "natural_gas_ngls": {
            "blocks": [
              {
                "x": 457.088,
                "top": 841.251,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 397.185,
                "top": 895.945,
                "anchor": "end",
                "lineGap": 6.511,
                "lines": [
                  {
                    "text": "天然气及",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "天然气液",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "metal_products": {
            "blocks": [
              {
                "x": 459.693,
                "top": 984.498,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 -37%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 397.185,
                "top": 1062.888,
                "anchor": "end",
                "lineGap": 6.511,
                "lines": [
                  {
                    "text": "金属产品",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 455.786,
                "top": 1126.443,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 +178%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 397.185,
                "top": 1209.331,
                "anchor": "end",
                "lineGap": 6.511,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "reported_revenue": {
            "blocks": [
              {
                "x": 916.781,
                "top": 481.831,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income_related_sales": {
            "blocks": [
              {
                "x": 919.386,
                "top": 1132.954,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售相关",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "其他收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 -2%",
                    "size": 27.347,
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
                "x": 1390.799,
                "top": 539.13,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入及",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "其他收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.347,
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
                "x": 1862.212,
                "top": 369.838,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "利润率 44%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 -4 个百分点",
                    "size": 27.347,
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
                "x": 1855.701,
                "top": 1208.484,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "finance": {
            "blocks": [
              {
                "x": 2155.217,
                "top": 299.517,
                "anchor": "middle",
                "lineGap": 7.8,
                "lines": [
                  {
                    "text": "财务收益",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 350.304,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "利润率 23%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 -2 个百分点",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2389.622,
                "top": 554.757,
                "anchor": "start",
                "lineGap": 3.907,
                "lines": [
                  {
                    "text": "税费 (101B)",
                    "size": 31.254,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2389.622,
                "top": 660.239,
                "anchor": "start",
                "lineGap": 3.907,
                "lines": [
                  {
                    "text": "其他 (1B)",
                    "size": 31.254,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "purchases": {
            "blocks": [
              {
                "x": 2389.622,
                "top": 769.627,
                "anchor": "start",
                "lineGap": 3.907,
                "lines": [
                  {
                    "text": "采购 (134B)",
                    "size": 31.254,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "royalties": {
            "blocks": [
              {
                "x": 2389.622,
                "top": 882.923,
                "anchor": "start",
                "lineGap": 3.907,
                "lines": [
                  {
                    "text": "特许权使用费 (55B)",
                    "size": 31.254,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "producing_manufacturing": {
            "blocks": [
              {
                "x": 2496.406,
                "top": 937.617,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "生产及",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "制造",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2389.622,
                "top": 1066.54,
                "anchor": "start",
                "lineGap": 3.907,
                "lines": [
                  {
                    "text": "折旧及摊销 (25B)",
                    "size": 31.254,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2389.622,
                "top": 1164.208,
                "anchor": "start",
                "lineGap": 3.907,
                "lines": [
                  {
                    "text": "销售、一般及行政费用 (21B)",
                    "size": 20.836,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "exploration": {
            "blocks": [
              {
                "x": 2389.622,
                "top": 1251.458,
                "anchor": "start",
                "lineGap": 3.907,
                "lines": [
                  {
                    "text": "勘探 (2B)",
                    "size": 31.254,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2389.622,
                "top": 1345.22,
                "anchor": "start",
                "lineGap": 3.907,
                "lines": [
                  {
                    "text": "研发 (1B)",
                    "size": 31.254,
                    "weight": 800
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});})();
