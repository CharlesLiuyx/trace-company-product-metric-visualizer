window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "lvmh-fy22",
  "name": "LVMH · FY22",
  "company": "LVMH",
  "meta": {
    "company": "LVMH",
    "title": "LVMH FY22 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/lvmh-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197,
    "titleSize": 122,
    "titleWeight": 800,
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
        "label": "#008f4b"
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
  "rasterAnnotations": [
    {
      "key": "lvmh-company-wordmark",
      "href": "data/assets/raster-annotations/lvmh/company-wordmark.png",
      "x": 734.466796875,
      "y": 307.330078125,
      "width": 457.08837890625,
      "height": 117.2021484375
    },
    {
      "key": "lvmh-business-wines-spirits-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-wines-spirits-cluster.png",
      "x": 18.2314453125,
      "y": 257.8447265625,
      "width": 153.6650390625,
      "height": 162.78076171875
    },
    {
      "key": "lvmh-business-fashion-leather-goods-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-fashion-leather-goods-cluster.png",
      "x": 19.53369140625,
      "y": 513.0849609375,
      "width": 145.8515625,
      "height": 149.75830078125
    },
    {
      "key": "lvmh-business-perfumes-cosmetics-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-perfumes-cosmetics-cluster.png",
      "x": 19.53369140625,
      "y": 770.9296875,
      "width": 148.4560546875,
      "height": 104.1796875
    },
    {
      "key": "lvmh-business-watches-jewelry-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-watches-jewelry-cluster.png",
      "x": 19.53369140625,
      "y": 959.75537109375,
      "width": 151.060546875,
      "height": 91.1572265625
    },
    {
      "key": "lvmh-business-selective-retailing-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-selective-retailing-cluster.png",
      "x": 27.34716796875,
      "y": 1127.7451171875,
      "width": 132.8291015625,
      "height": 108.08642578125
    },
    {
      "key": "lvmh-business-other-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-other-cluster.png",
      "x": 41.671875,
      "y": 1302.24609375,
      "width": 110.69091796875,
      "height": 71.62353515625
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "wines_spirits": {
        "x": 477,
        "y": 342,
        "width": 73,
        "height": 32
      },
      "fashion_leather_goods": {
        "x": 477,
        "y": 508,
        "width": 73,
        "height": 178
      },
      "perfumes_cosmetics": {
        "x": 477,
        "y": 815,
        "width": 73,
        "height": 35
      },
      "watches_jewelry": {
        "x": 477,
        "y": 981,
        "width": 73,
        "height": 49
      },
      "selective_retailing": {
        "x": 477,
        "y": 1156,
        "width": 73,
        "height": 69
      },
      "other_activities_eliminations": {
        "x": 477,
        "y": 1354,
        "width": 73,
        "height": 2
      },
      "revenue": {
        "x": 944,
        "y": 614,
        "width": 73,
        "height": 364
      },
      "gross_profit": {
        "x": 1426,
        "y": 567,
        "width": 73,
        "height": 249
      },
      "cost_of_sales": {
        "x": 1426,
        "y": 951,
        "width": 73,
        "height": 115
      },
      "operating_profit": {
        "x": 1881,
        "y": 504,
        "width": 73,
        "height": 97
      },
      "operating_expenses": {
        "x": 1880,
        "y": 731,
        "width": 73,
        "height": 152
      },
      "net_profit": {
        "x": 2346,
        "y": 437,
        "width": 73,
        "height": 68
      },
      "tax": {
        "x": 2346,
        "y": 636,
        "width": 73,
        "height": 25
      },
      "other": {
        "x": 2346,
        "y": 766,
        "width": 73,
        "height": 2
      },
      "sales_marketing": {
        "x": 2346,
        "y": 881,
        "width": 73,
        "height": 128
      },
      "general_administrative": {
        "x": 2346,
        "y": 1166,
        "width": 73,
        "height": 23
      },
      "other_opex": {
        "x": 2346,
        "y": 1352,
        "width": 73,
        "height": 2
      }
    },
    "labels": {
      "wines_spirits": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 247.4267578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#b39769"
              },
              {
                "text": "+19% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 310.4,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Wines",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
              },
              {
                "text": "& Spirits",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
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
            "top": 410.20751953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#b39769"
              },
              {
                "text": "+25% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 549.4,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Fashion &",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
              },
              {
                "text": "Leather Goods",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
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
            "top": 722.74658203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#b39769"
              },
              {
                "text": "+17% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 784.9,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Perfumes",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
              },
              {
                "text": "& Cosmetics",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
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
            "top": 890.736328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#b39769"
              },
              {
                "text": "+18% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 957.9,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Watches",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
              },
              {
                "text": "& Jewelry",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
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
            "top": 1062.6328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#b39769"
              },
              {
                "text": "+26% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 1142.9,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Selective",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
              },
              {
                "text": "retailers",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b39769"
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
            "top": 1298.33935546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#b39769"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 1331.7,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#b39769"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 976.6845703125,
            "top": 470.11083984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800,
                "color": "#b39769"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#b39769"
              },
              {
                "text": "+23% Y/Y",
                "size": 27,
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
            "x": 1462.42236328125,
            "top": 372.4423828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "68% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
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
            "x": 1462.42236328125,
            "top": 1079.56201171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
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
            "x": 1912.99951171875,
            "top": 315.1435546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "27% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
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
            "x": 1912.99951171875,
            "top": 893.3408203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
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
            "x": 2545.89111328125,
            "top": 410.20751953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "20% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27,
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
            "x": 2545.89111328125,
            "top": 625.078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "x": 2545.89111328125,
            "top": 726.6533203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Interest &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "x": 2545.89111328125,
            "top": 885.52734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Marketing",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "36% of revenue",
                "size": 27,
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
            "x": 2545.89111328125,
            "top": 1113.42041015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Administrative",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "6% of revenue",
                "size": 27,
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
            "x": 2545.89111328125,
            "top": 1312.6640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other opex",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
      "value": 7.1,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4",
      "valueText": "€7.1B",
      "notes": [
        "+19% Y/Y"
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
      "value": 38.6,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4",
      "valueText": "€38.6B",
      "notes": [
        "+25% Y/Y"
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
      "value": 7.7,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4",
      "valueText": "€7.7B",
      "notes": [
        "+17% Y/Y"
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
      "value": 10.6,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4",
      "valueText": "€10.6B",
      "notes": [
        "+18% Y/Y"
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
      "value": 14.9,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4",
      "valueText": "€14.9B",
      "notes": [
        "+26% Y/Y"
      ]
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
      "linkTint": "#d6c9b4",
      "valueText": "€0.3B",
      "notes": []
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 79.2,
      "color": "#b39769",
      "labelColor": "#b39769",
      "linkTint": "#d6c9b4",
      "valueText": "€79.2B",
      "notes": [
        "+23% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 54.2,
      "color": "#2ca02c",
      "labelColor": "#008f4b",
      "linkTint": "#99cd99",
      "valueText": "€54.2B",
      "notes": [
        "68% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 25.0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "(€25.0B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 21.0,
      "color": "#2ca02c",
      "labelColor": "#008f4b",
      "linkTint": "#99cd99",
      "valueText": "€21.0B",
      "notes": [
        "27% of revenue",
        "+0pp Y/Y"
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
      "value": 33.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "(€33.2B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 14.8,
      "color": "#2ca02c",
      "labelColor": "#008f4b",
      "linkTint": "#99cd99",
      "valueText": "€14.8B",
      "notes": [
        "20% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 5.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "(€5.4B)",
      "notes": []
    },
    {
      "id": "other",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": [
        "Interest &",
        "Other"
      ],
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
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
      "value": 28.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "(€28.2B)",
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
      "value": 5.0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "(€5.0B)",
      "notes": [
        "6% of revenue"
      ]
    },
    {
      "id": "other_opex",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "Other opex",
      "value": 0.017,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "(€0.017B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "wines_spirits",
      "target": "revenue",
      "value": 7.1,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 358.0,
      "y1": 630.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "fashion_leather_goods",
      "target": "revenue",
      "value": 38.6,
      "sourceWidth": 178,
      "targetWidth": 178,
      "y0": 597.0,
      "y1": 735.0,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "perfumes_cosmetics",
      "target": "revenue",
      "value": 7.7,
      "sourceWidth": 35,
      "targetWidth": 35,
      "y0": 832.5,
      "y1": 841.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "watches_jewelry",
      "target": "revenue",
      "value": 10.6,
      "sourceWidth": 49,
      "targetWidth": 49,
      "y0": 1005.5,
      "y1": 883.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "selective_retailing",
      "target": "revenue",
      "value": 14.9,
      "sourceWidth": 69,
      "targetWidth": 68,
      "y0": 1190.5,
      "y1": 942.0,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "other_activities_eliminations",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 1355.0,
      "y1": 977.0,
      "sourceOrder": 0,
      "targetOrder": 5,
      "linkTint": "#d6c9b4"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 54.2,
      "sourceWidth": 249,
      "targetWidth": 249,
      "y0": 738.5,
      "y1": 691.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 25.0,
      "sourceWidth": 115,
      "targetWidth": 115,
      "y0": 920.5,
      "y1": 1008.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 21.0,
      "sourceWidth": 97,
      "targetWidth": 97,
      "y0": 615.5,
      "y1": 552.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 33.2,
      "sourceWidth": 152,
      "targetWidth": 152,
      "y0": 740.0,
      "y1": 807.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 14.8,
      "sourceWidth": 68,
      "targetWidth": 68,
      "y0": 538.0,
      "y1": 471.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 5.4,
      "sourceWidth": 26,
      "targetWidth": 25,
      "y0": 585.0,
      "y1": 648.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.9,
      "sourceWidth": 3,
      "targetWidth": 2,
      "y0": 599.5,
      "y1": 767.0,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 28.2,
      "sourceWidth": 128,
      "targetWidth": 128,
      "y0": 795.0,
      "y1": 945.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_administrative",
      "value": 5.0,
      "sourceWidth": 22,
      "targetWidth": 23,
      "y0": 870.0,
      "y1": 1177.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.017,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 882.0,
      "y1": 1353.0,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "LVMH · 2022 财年",
      "meta": {
        "title": "LVMH 2022 财年利润表",
        "titleSize": 112
      },
      "nodes": {
        "wines_spirits": {
          "label": "葡萄酒与烈酒",
          "notes": [
            "同比 +19%"
          ]
        },
        "fashion_leather_goods": {
          "label": "时装与皮具",
          "notes": [
            "同比 +25%"
          ]
        },
        "perfumes_cosmetics": {
          "label": "香水与美妆",
          "notes": [
            "同比 +17%"
          ]
        },
        "watches_jewelry": {
          "label": "腕表与珠宝",
          "notes": [
            "同比 +18%"
          ]
        },
        "selective_retailing": {
          "label": "精选零售",
          "notes": [
            "同比 +26%"
          ]
        },
        "other_activities_eliminations": {
          "label": "其他",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +23%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 68%",
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
            "占收入 27%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "占收入 20%",
            "同比 (1 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "利息与其他",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与市场费用",
          "notes": [
            "占收入 36%"
          ]
        },
        "general_administrative": {
          "label": "一般及行政费用",
          "notes": [
            "占收入 6%"
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
                "top": 247.4267578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#b39769"
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 337.0,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "葡萄酒与烈酒",
                    "size": 34,
                    "weight": 800,
                    "color": "#b39769"
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
                "top": 410.20751953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#b39769"
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 576.0,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "时装与皮具",
                    "size": 34,
                    "weight": 800,
                    "color": "#b39769"
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
                "top": 722.74658203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#b39769"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 811.5,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "香水与美妆",
                    "size": 34,
                    "weight": 800,
                    "color": "#b39769"
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
                "top": 890.736328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#b39769"
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 984.5,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "腕表与珠宝",
                    "size": 34,
                    "weight": 800,
                    "color": "#b39769"
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
                "top": 1062.6328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#b39769"
                  },
                  {
                    "text": "同比 +26%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 1169.5,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "精选零售",
                    "size": 34,
                    "weight": 800,
                    "color": "#b39769"
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
                "top": 1298.33935546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#b39769"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 1334.0,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 34,
                    "weight": 800,
                    "color": "#b39769"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 976.6845703125,
                "top": 470.11083984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 34,
                    "weight": 800,
                    "color": "#b39769"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#b39769"
                  },
                  {
                    "text": "同比 +23%",
                    "size": 27,
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
                "x": 1462.42236328125,
                "top": 372.4423828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 34,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 68%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
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
                "x": 1462.42236328125,
                "top": 1079.56201171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
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
                "x": 1912.99951171875,
                "top": 315.1435546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 34,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 27%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
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
                "x": 1912.99951171875,
                "top": 893.3408203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
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
                "x": 2545.89111328125,
                "top": 410.20751953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 34,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 20%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27,
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
                "x": 2545.89111328125,
                "top": 625.078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 2545.89111328125,
                "top": 726.6533203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利息与",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "其他",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 2545.89111328125,
                "top": 885.52734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "市场费用",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 36%",
                    "size": 27,
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
                "x": 2545.89111328125,
                "top": 1113.42041015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 6%",
                    "size": 27,
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
                "x": 2545.89111328125,
                "top": 1312.6640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"56\" y=\"242\" font-size=\"39\" font-weight=\"700\" fill=\"#155077\">以欧元计</text>"
    }
  },
  "annotationsSvg": "<text x=\"56\" y=\"242\" font-size=\"39\" font-weight=\"700\" fill=\"#155077\">in euros</text>"
});
