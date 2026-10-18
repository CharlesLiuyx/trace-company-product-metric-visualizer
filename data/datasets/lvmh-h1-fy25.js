window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "lvmh-h1-fy25",
  "name": "LVMH · H1 FY25",
  "company": "LVMH",
  "meta": {
    "company": "LVMH",
    "title": "LVMH H1 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/lvmh-h1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2083.59375,
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
        "node": "#b39769",
        "label": "#b39769"
      },
      "hub": {
        "node": "#b39769",
        "label": "#b39769"
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
      "source": "#d6c9b4",
      "hub": "#d6c9b4",
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
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"230\" y=\"204\" font-size=\"30\" font-weight=\"800\" fill=\"#155077\">in euros</text></g>",
  "rasterAnnotations": [
    {
      "key": "lvmh-company-wordmark",
      "href": "data/assets/raster-annotations/lvmh/company-wordmark.png",
      "x": 734.466796875,
      "y": 304.7255859375,
      "width": 453.181640625,
      "height": 125.015625
    },
    {
      "key": "lvmh-business-wines-spirits-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-wines-spirits-cluster.png",
      "x": 10.41796875,
      "y": 317.748046875,
      "width": 166.6875,
      "height": 175.80322265625
    },
    {
      "key": "lvmh-business-fashion-leather-goods-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-fashion-leather-goods-cluster.png",
      "x": 13.0224609375,
      "y": 549.5478515625,
      "width": 160.17626953125,
      "height": 154.96728515625
    },
    {
      "key": "lvmh-business-perfumes-cosmetics-cluster-h1-fy26",
      "href": "data/assets/raster-annotations/lvmh/business-perfumes-cosmetics-cluster-h1-fy26.png",
      "x": 13.0224609375,
      "y": 798.27685546875,
      "width": 161.478515625,
      "height": 105.48193359375
    },
    {
      "key": "lvmh-business-watches-jewelry-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-watches-jewelry-cluster.png",
      "x": 13.0224609375,
      "y": 974.080078125,
      "width": 165.38525390625,
      "height": 96.3662109375
    },
    {
      "key": "lvmh-business-selective-retailing-cluster-h1-fy26",
      "href": "data/assets/raster-annotations/lvmh/business-selective-retailing-cluster-h1-fy26.png",
      "x": 18.2314453125,
      "y": 1106.9091796875,
      "width": 160.17626953125,
      "height": 157.57177734375
    },
    {
      "key": "lvmh-business-other-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-other-cluster.png",
      "x": 33.8583984375,
      "y": 1289.2236328125,
      "width": 127.6201171875,
      "height": 79.43701171875
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "wines_spirits": {
        "x": 476.6220703125,
        "y": 403.6962890625,
        "width": 70.3212890625,
        "height": 22.13818359375
      },
      "fashion_leather_goods": {
        "x": 476.6220703125,
        "y": 550.85009765625,
        "width": 70.3212890625,
        "height": 161.478515625
      },
      "perfumes_cosmetics": {
        "x": 476.6220703125,
        "y": 842.55322265625,
        "width": 70.3212890625,
        "height": 35.16064453125
      },
      "watches_jewelry": {
        "x": 476.6220703125,
        "y": 1000.125,
        "width": 70.3212890625,
        "height": 42.97412109375
      },
      "selective_retailing": {
        "x": 476.6220703125,
        "y": 1175.92822265625,
        "width": 70.3212890625,
        "height": 72.92578125
      },
      "other_activities_eliminations": {
        "x": 476.6220703125,
        "y": 1345.22021484375,
        "width": 70.3212890625,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 925.89697265625,
        "y": 673.26123046875,
        "width": 70.3212890625,
        "height": 335.9794921875
      },
      "gross_profit": {
        "x": 1375.171875,
        "y": 588.615234375,
        "width": 70.3212890625,
        "height": 225.28857421875
      },
      "cost_of_sales": {
        "x": 1375.171875,
        "y": 1001.42724609375,
        "width": 70.3212890625,
        "height": 110.69091796875
      },
      "operating_profit": {
        "x": 1840.07373046875,
        "y": 472.71533203125,
        "width": 70.3212890625,
        "height": 75.5302734375
      },
      "operating_expenses": {
        "x": 1840.07373046875,
        "y": 769.62744140625,
        "width": 70.3212890625,
        "height": 146.4560546875
      },
      "net_profit": {
        "x": 2273.7216796875,
        "y": 358.11767578125,
        "width": 70.3212890625,
        "height": 50.78759765625
      },
      "tax": {
        "x": 2273.7216796875,
        "y": 615.96240234375,
        "width": 70.3212890625,
        "height": 22.13818359375
      },
      "other": {
        "x": 2273.7216796875,
        "y": 748.79150390625,
        "width": 70.3212890625,
        "height": 2.6044921875
      },
      "sales_marketing": {
        "x": 2273.7216796875,
        "y": 918.08349609375,
        "width": 70.3212890625,
        "height": 122.4111328125
      },
      "general_administrative": {
        "x": 2273.7216796875,
        "y": 1185.0439453125,
        "width": 70.3212890625,
        "height": 23.4404296875
      }
    },
    "labels": {
      "wines_spirits": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 308.63232421875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 6.51123046875
          },
          {
            "x": 455.7861328125,
            "top": 370.489013671875,
            "lines": [
              {
                "text": "Wines",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              },
              {
                "text": "& Spirits",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 10.41796875
          }
        ]
      },
      "fashion_leather_goods": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 455.7861328125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 6.51123046875
          },
          {
            "x": 455.7861328125,
            "top": 587.31298828125,
            "lines": [
              {
                "text": "Fashion &",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              },
              {
                "text": "Leather Goods",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 10.41796875
          }
        ]
      },
      "perfumes_cosmetics": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 746.18701171875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 6.51123046875
          },
          {
            "x": 455.7861328125,
            "top": 812.857177734375,
            "lines": [
              {
                "text": "Perfumes",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              },
              {
                "text": "& Cosmetics",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 10.41796875
          }
        ]
      },
      "watches_jewelry": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 902.45654296875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 6.51123046875
          },
          {
            "x": 455.7861328125,
            "top": 977.335693359375,
            "lines": [
              {
                "text": "Watches",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              },
              {
                "text": "& Jewelry",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 10.41796875
          }
        ]
      },
      "selective_retailing": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 1079.56201171875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 400
              },
              {
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 6.51123046875
          },
          {
            "x": 455.7861328125,
            "top": 1168.11474609375,
            "lines": [
              {
                "text": "Selective",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              },
              {
                "text": "retailers",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 10.41796875
          }
        ]
      },
      "other_activities_eliminations": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 1286.619140625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 6.51123046875
          },
          {
            "x": 455.7861328125,
            "top": 1323.98876953125,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 10.41796875
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 961.0576171875,
            "top": 523.5029296875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#b39769",
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1410.33251953125,
            "top": 399.78955078125,
            "lines": [
              {
                "text": "Gross profit",
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
                "text": "67% of revenue",
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
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1410.33251953125,
            "top": 1127.7451171875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1875.234375,
            "top": 285.19189453125,
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
                "text": "23% of revenue",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1875.234375,
            "top": 932.408203125,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2506.82373046875,
            "top": 320.3525390625,
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
                "text": "15% of revenue",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2506.82373046875,
            "top": 586.0107421875,
            "lines": [
              {
                "text": "Tax",
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
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2506.82373046875,
            "top": 712.32861328125,
            "lines": [
              {
                "text": "Other",
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
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2506.82373046875,
            "top": 906.36328125,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "Marketing",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "37% of revenue",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "general_administrative": {
        "blocks": [
          {
            "x": 2506.82373046875,
            "top": 1139.46533203125,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "Administrative",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
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
      "value": 2.6,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4"
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
      "value": 19.1,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4"
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
      "value": 4.1,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4"
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
      "value": 5.1,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4"
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
      "value": 8.6,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4"
    },
    {
      "id": "other_activities_eliminations",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "Other",
      "value": 0.3,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 39.8,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 26.6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 13.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
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
      "value": 17.6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 5.9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 2.6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.4,
      "color": "#d29191",
      "labelColor": "#941100",
      "linkTint": "#e08585"
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
      "value": 14.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
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
      "value": 2.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "wines_spirits",
      "target": "revenue",
      "value": 2.6,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "y0": 414.765380859375,
      "y1": 684.330322265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "fashion_leather_goods",
      "target": "revenue",
      "value": 19.1,
      "sourceWidth": 161.478515625,
      "targetWidth": 161.478515625,
      "y0": 631.58935546875,
      "y1": 776.138671875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "perfumes_cosmetics",
      "target": "revenue",
      "value": 4.1,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "y0": 860.133544921875,
      "y1": 874.458251953125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "watches_jewelry",
      "target": "revenue",
      "value": 5.1,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "y0": 1021.612060546875,
      "y1": 913.525634765625,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "selective_retailing",
      "target": "revenue",
      "value": 8.6,
      "sourceWidth": 72.92578125,
      "targetWidth": 72.92578125,
      "y0": 1212.39111328125,
      "y1": 971.4755859375,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "other_activities_eliminations",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.30224609375,
      "y0": 1346.5224609375,
      "y1": 1008.589599609375,
      "sourceOrder": 0,
      "targetOrder": 5,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 26.6,
      "sourceWidth": 225.28857421875,
      "targetWidth": 225.28857421875,
      "y0": 785.905517578125,
      "y1": 701.259521484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 13.2,
      "sourceWidth": 110.69091796875,
      "targetWidth": 110.69091796875,
      "y0": 953.895263671875,
      "y1": 1056.772705078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 9,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "y0": 626.38037109375,
      "y1": 510.48046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 17.6,
      "sourceWidth": 149.75830078125,
      "targetWidth": 146.4560546875,
      "y0": 739.024658203125,
      "y1": 842.85546875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 5.9,
      "sourceWidth": 50.78759765625,
      "targetWidth": 50.78759765625,
      "y0": 498.109130859375,
      "y1": 383.511474609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 2.6,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "y0": 534.572021484375,
      "y1": 627.031494140625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.4,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 546.943359375,
      "y1": 750.09375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 14.7,
      "sourceWidth": 122.4111328125,
      "targetWidth": 122.4111328125,
      "y0": 830.8330078125,
      "y1": 979.2890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_administrative",
      "value": 2.9,
      "sourceWidth": 24.044921875,
      "targetWidth": 23.4404296875,
      "y0": 904.06103515625,
      "y1": 1196.76416015625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "路威酩轩 · 2025 财年上半年",
      "meta": {
        "title": "路威酩轩 2025 财年上半年利润表",
        "titleTextLength": 1836.1669921875
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"230\" y=\"204\" font-size=\"30\" font-weight=\"800\" fill=\"#155077\">单位：欧元</text></g>",
      "nodes": {
        "wines_spirits": {
          "label": [
            "葡萄酒",
            "与烈酒"
          ]
        },
        "fashion_leather_goods": {
          "label": [
            "时装与",
            "皮具"
          ]
        },
        "perfumes_cosmetics": {
          "label": [
            "香水与",
            "美妆"
          ]
        },
        "watches_jewelry": {
          "label": [
            "腕表与",
            "珠宝"
          ]
        },
        "selective_retailing": {
          "label": [
            "精选",
            "零售"
          ]
        },
        "other_activities_eliminations": {
          "label": "其他"
        },
        "revenue": {
          "label": "收入"
        },
        "gross_profit": {
          "label": "毛利润"
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润"
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润"
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他"
        },
        "sales_marketing": {
          "label": [
            "销售与",
            "市场费用"
          ]
        },
        "general_administrative": {
          "label": [
            "一般及",
            "行政费用"
          ]
        }
      },
      "layout": {
        "labels": {
          "wines_spirits": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 308.63232421875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 400
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 6.51123046875
              },
              {
                "x": 455.7861328125,
                "top": 370.489013671875,
                "lines": [
                  {
                    "text": "葡萄酒",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  },
                  {
                    "text": "与烈酒",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 10.41796875
              }
            ]
          },
          "fashion_leather_goods": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 455.7861328125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 400
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 6.51123046875
              },
              {
                "x": 455.7861328125,
                "top": 587.31298828125,
                "lines": [
                  {
                    "text": "时装与",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  },
                  {
                    "text": "皮具",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 10.41796875
              }
            ]
          },
          "perfumes_cosmetics": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 746.18701171875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 6.51123046875
              },
              {
                "x": 455.7861328125,
                "top": 812.857177734375,
                "lines": [
                  {
                    "text": "香水与",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  },
                  {
                    "text": "美妆",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 10.41796875
              }
            ]
          },
          "watches_jewelry": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 902.45654296875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 6.51123046875
              },
              {
                "x": 455.7861328125,
                "top": 977.335693359375,
                "lines": [
                  {
                    "text": "腕表与",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  },
                  {
                    "text": "珠宝",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 10.41796875
              }
            ]
          },
          "selective_retailing": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 1079.56201171875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 400
                  },
                  {
                    "text": "同比 (0%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 6.51123046875
              },
              {
                "x": 455.7861328125,
                "top": 1168.11474609375,
                "lines": [
                  {
                    "text": "精选",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  },
                  {
                    "text": "零售",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 10.41796875
              }
            ]
          },
          "other_activities_eliminations": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 1286.619140625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 6.51123046875
              },
              {
                "x": 455.7861328125,
                "top": 1323.98876953125,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 10.41796875
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 961.0576171875,
                "top": 523.5029296875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#b39769",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1410.33251953125,
                "top": 399.78955078125,
                "lines": [
                  {
                    "text": "毛利润",
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
                    "text": "占收入 67%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1410.33251953125,
                "top": 1127.7451171875,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1875.234375,
                "top": 285.19189453125,
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
                    "text": "占收入 23%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1875.234375,
                "top": 932.408203125,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2506.82373046875,
                "top": 320.3525390625,
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
                    "text": "占收入 15%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2506.82373046875,
                "top": 586.0107421875,
                "lines": [
                  {
                    "text": "税费",
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
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2506.82373046875,
                "top": 712.32861328125,
                "lines": [
                  {
                    "text": "其他",
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
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2506.82373046875,
                "top": 906.36328125,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "市场费用",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 37%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "general_administrative": {
            "blocks": [
              {
                "x": 2506.82373046875,
                "top": 1139.46533203125,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "行政费用",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          }
        }
      }
    }
  }
});
