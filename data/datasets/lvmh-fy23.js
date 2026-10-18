window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "lvmh-fy23",
  "name": "LVMH · FY23",
  "company": "LVMH",
  "meta": {
    "company": "LVMH",
    "title": "LVMH FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/lvmh-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 1888.2568359375,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
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
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#b99e6e",
        "label": "#b99e6e"
      },
      "hub": {
        "node": "#b99e6e",
        "label": "#b99e6e"
      },
      "profit": {
        "node": "#2aa52a",
        "label": "#008f4b"
      },
      "cost": {
        "node": "#d90000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#dcd2bd",
      "hub": "#dcd2bd",
      "profit": "#9bce9a",
      "cost": "#e18384"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29.000000000000004,
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "lvmh-company-wordmark",
      "href": "data/assets/raster-annotations/lvmh/company-wordmark.png",
      "x": 755.302734375,
      "y": 300.81884765625,
      "width": 450.5771484375,
      "height": 134.13134765625
    },
    {
      "key": "lvmh-business-wines-spirits-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-wines-spirits-cluster.png",
      "x": 11.72021484375,
      "y": 289.0986328125,
      "width": 164.0830078125,
      "height": 175.80322265625
    },
    {
      "key": "lvmh-business-fashion-leather-goods-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-fashion-leather-goods-cluster.png",
      "x": 13.0224609375,
      "y": 527.40966796875,
      "width": 153.6650390625,
      "height": 157.57177734375
    },
    {
      "key": "lvmh-business-perfumes-cosmetics-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-perfumes-cosmetics-cluster.png",
      "x": 16.92919921875,
      "y": 761.81396484375,
      "width": 149.75830078125,
      "height": 106.7841796875
    },
    {
      "key": "lvmh-business-watches-jewelry-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-watches-jewelry-cluster.png",
      "x": 18.2314453125,
      "y": 955.8486328125,
      "width": 157.57177734375,
      "height": 91.1572265625
    },
    {
      "key": "lvmh-business-selective-retailing-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-selective-retailing-cluster.png",
      "x": 24.74267578125,
      "y": 1099.095703125,
      "width": 140.642578125,
      "height": 109.388671875
    },
    {
      "key": "lvmh-business-other-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-other-cluster.png",
      "x": 39.0673828125,
      "y": 1291.828125,
      "width": 119.806640625,
      "height": 74.22802734375
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "wines_spirits": {
        "x": 475.31982421875,
        "y": 381.55810546875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "fashion_leather_goods": {
        "x": 475.31982421875,
        "y": 540.43212890625,
        "width": 72.92578125,
        "height": 144.54931640625
      },
      "perfumes_cosmetics": {
        "x": 475.31982421875,
        "y": 826.92626953125,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "watches_jewelry": {
        "x": 475.31982421875,
        "y": 988.40478515625,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "selective_retailing": {
        "x": 475.31982421875,
        "y": 1149.88330078125,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "other_activities_eliminations": {
        "x": 475.31982421875,
        "y": 1340.01123046875,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 942.826171875,
        "y": 666.75,
        "width": 72.92578125,
        "height": 294.3076171875
      },
      "gross_profit": {
        "x": 1397.31005859375,
        "y": 582.10400390625,
        "width": 72.92578125,
        "height": 200.5458984375
      },
      "cost_of_sales": {
        "x": 1399.91455078125,
        "y": 953.244140625,
        "width": 72.92578125,
        "height": 92.45947265625
      },
      "operating_profit": {
        "x": 1879.14111328125,
        "y": 476.6220703125,
        "width": 72.92578125,
        "height": 76.83251953125
      },
      "operating_expenses": {
        "x": 1879.14111328125,
        "y": 761.81396484375,
        "width": 72.92578125,
        "height": 125.015625
      },
      "net_profit": {
        "x": 2344.04296875,
        "y": 352.90869140625,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "tax": {
        "x": 2344.04296875,
        "y": 595.12646484375,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "other": {
        "x": 2344.04296875,
        "y": 721.4443359375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "sales_marketing": {
        "x": 2344.04296875,
        "y": 867.2958984375,
        "width": 72.92578125,
        "height": 105.48193359375
      },
      "general_administrative": {
        "x": 2344.04296875,
        "y": 1108.21142578125,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "other_opex": {
        "x": 2344.04296875,
        "y": 1264.48095703125,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "wines_spirits": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 286.494140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 328.166015625,
            "top": 349.001953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Wines",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "& Spirits",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "fashion_leather_goods": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 446.67041015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 328.166015625,
            "top": 568.430419921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Fashion &",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "Leather Goods",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "perfumes_cosmetics": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 731.8623046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
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
            "x": 328.166015625,
            "top": 796.974609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Perfumes",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "& Cosmetics",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "watches_jewelry": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 893.3408203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
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
            "x": 328.166015625,
            "top": 963.010986328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Watches",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "& Jewelry",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "selective_retailing": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 1053.51708984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "+20% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 328.166015625,
            "top": 1136.209716796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Selective",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "retailers",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "other_activities_eliminations": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 1238.43603515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "+15% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 328.166015625,
            "top": 1321.77978515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 979.2890625,
            "top": 520.8984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "+9% Y/Y",
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
            "x": 1433.77294921875,
            "top": 393.2783203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "69% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1436.37744140625,
            "top": 1060.0283203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1915.60400390625,
            "top": 283.8896484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "26% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
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
            "x": 1915.60400390625,
            "top": 902.45654296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "x": 2531.56640625,
            "top": 334.67724609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "19% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
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
            "x": 2531.56640625,
            "top": 561.26806640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 681.07470703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 863.38916015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Marketing",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "36% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "general_administrative": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 1054.8193359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Administrative",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 1246.24951171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other opex",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
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
      "id": "wines_spirits",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Wines",
        "& Spirits"
      ],
      "value": 6.6,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€6.6B",
      "notes": [
        "(7%) Y/Y"
      ]
    },
    {
      "id": "fashion_leather_goods",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Fashion &",
        "Leather Goods"
      ],
      "value": 42.2,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€42.2B",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "perfumes_cosmetics",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Perfumes",
        "& Cosmetics"
      ],
      "value": 8.3,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€8.3B",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "watches_jewelry",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Watches",
        "& Jewelry"
      ],
      "value": 10.9,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€10.9B",
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "selective_retailing",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": [
        "Selective",
        "retailers"
      ],
      "value": 17.9,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€17.9B",
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "other_activities_eliminations",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "Other",
      "value": 0.3,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€0.3B",
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 86.2,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€86.2B",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 59.3,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€59.3B",
      "notes": [
        "69% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 26.9,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€26.9B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 22.6,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€22.6B",
      "notes": [
        "26% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 36.7,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€36.7B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 16,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€16.0B",
      "notes": [
        "19% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 5.7,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€5.7B)",
      "notes": []
    },
    {
      "id": "other",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.9,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€0.9B)",
      "notes": []
    },
    {
      "id": "sales_marketing",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": [
        "Sales &",
        "Marketing"
      ],
      "value": 30.8,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€30.8B)",
      "notes": [
        "36% of revenue"
      ]
    },
    {
      "id": "general_administrative",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": [
        "General &",
        "Administrative"
      ],
      "value": 5.7,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€5.7B)",
      "notes": [
        "7% of revenue"
      ]
    },
    {
      "id": "other_opex",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "Other opex",
      "value": 0.2,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€0.2B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "wines_spirits",
      "target": "revenue",
      "value": 6.6,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.13334982259825,
      "y0": 393.2783203125,
      "y1": 678.3166749112992,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "fashion_leather_goods",
      "target": "revenue",
      "value": 42.2,
      "sourceWidth": 144.54931640625,
      "targetWidth": 142.6556572393559,
      "y0": 612.706787109375,
      "y1": 761.2111784422762,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "perfumes_cosmetics",
      "target": "revenue",
      "value": 8.3,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.274094227620086,
      "y0": 841.2509765625,
      "y1": 846.6760541757642,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "watches_jewelry",
      "target": "revenue",
      "value": 10.9,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.2703969364083,
      "y0": 1007.287353515625,
      "y1": 879.4482997577785,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "selective_retailing",
      "target": "revenue",
      "value": 17.9,
      "sourceWidth": 61.20556640625,
      "targetWidth": 60.40374675900655,
      "y0": 1180.486083984375,
      "y1": 928.2853716054858,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "other_activities_eliminations",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.570372202510917,
      "y0": 1341.3134765625,
      "y1": 959.7724310862446,
      "sourceOrder": 0,
      "targetOrder": 5,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 59.3,
      "sourceWidth": 201.84814453125,
      "targetWidth": 200.5458984375,
      "y0": 767.674072265625,
      "y1": 682.376953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 26.9,
      "sourceWidth": 92.45947265625,
      "targetWidth": 92.45947265625,
      "y0": 914.827880859375,
      "y1": 999.473876953125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 22.6,
      "sourceWidth": 76.83251953125,
      "targetWidth": 76.83251953125,
      "y0": 620.520263671875,
      "y1": 515.038330078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 36.7,
      "sourceWidth": 123.71337890625,
      "targetWidth": 125.015625,
      "y0": 720.793212890625,
      "y1": 824.32177734375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 16,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
      "y0": 503.96923828125,
      "y1": 380.255859375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 5.7,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "y0": 541.083251953125,
      "y1": 604.893310546875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.9,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 552.15234375,
      "y1": 722.74658203125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 30.8,
      "sourceWidth": 105.48193359375,
      "targetWidth": 105.48193359375,
      "y0": 814.554931640625,
      "y1": 920.036865234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_expenses",
      "target": "general_administrative",
      "value": 5.7,
      "sourceWidth": 18.2314453125,
      "targetWidth": 19.53369140625,
      "y0": 876.41162109375,
      "y1": 1117.978271484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.2,
      "sourceWidth": 1.30224609375,
      "targetWidth": 2.6044921875,
      "y0": 886.178466796875,
      "y1": 1265.783203125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18384"
    }
  ],
  "i18n": {
    "zh": {
      "name": "LVMH · 2023 财年",
      "meta": {
        "title": "路威酩轩 2023 财年利润表",
        "titleTextLength": 1718.96484375
      },
      "nodes": {
        "wines_spirits": {
          "label": [
            "葡萄酒",
            "与烈酒"
          ],
          "notes": [
            "同比 (7%)"
          ]
        },
        "fashion_leather_goods": {
          "label": [
            "时装与",
            "皮具"
          ],
          "notes": [
            "同比 +9%"
          ]
        },
        "perfumes_cosmetics": {
          "label": [
            "香水与",
            "美妆"
          ],
          "notes": [
            "同比 +7%"
          ]
        },
        "watches_jewelry": {
          "label": [
            "腕表与",
            "珠宝"
          ],
          "notes": [
            "同比 +3%"
          ]
        },
        "selective_retailing": {
          "label": [
            "精选",
            "零售"
          ],
          "notes": [
            "同比 +20%"
          ]
        },
        "other_activities_eliminations": {
          "label": "其他",
          "notes": [
            "同比 +15%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 69%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 26%",
            "同比 (0 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "占收入 19%",
            "同比 (0 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "sales_marketing": {
          "label": [
            "销售与",
            "市场费用"
          ],
          "notes": [
            "占收入 36%"
          ]
        },
        "general_administrative": {
          "label": [
            "一般及",
            "行政费用"
          ],
          "notes": [
            "占收入 7%"
          ]
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "wines_spirits": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 286.494140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 349.001953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "葡萄酒",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "与烈酒",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "fashion_leather_goods": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 446.67041015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 568.430419921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "时装与",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "皮具",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "perfumes_cosmetics": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 731.8623046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 796.974609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "香水与",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "美妆",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "watches_jewelry": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 893.3408203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 963.010986328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "腕表与",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "珠宝",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "selective_retailing": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 1053.51708984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 +20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 1136.209716796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "精选",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "零售",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "other_activities_eliminations": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 1238.43603515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 1321.77978515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 979.2890625,
                "top": 520.8984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 +9%",
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
                "x": 1433.77294921875,
                "top": 393.2783203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 69%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1436.37744140625,
                "top": 1060.0283203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1915.60400390625,
                "top": 283.8896484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
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
                "x": 1915.60400390625,
                "top": 902.45654296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "x": 2531.56640625,
                "top": 334.67724609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
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
                "x": 2531.56640625,
                "top": 561.26806640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 681.07470703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 863.38916015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "市场费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 36%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "general_administrative": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 1054.8193359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 1246.24951171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"300\" y=\"266\" font-size=\"39\" font-weight=\"700\" fill=\"#155077\">单位：欧元</text>"
    }
  },
  "annotationsSvg": "<text x=\"300\" y=\"266\" font-size=\"39\" font-weight=\"700\" fill=\"#155077\">in euros</text>"
});
