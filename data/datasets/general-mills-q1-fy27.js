window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "general-mills-q1-fy27",
  "name": "General Mills · Q1 FY27",
  "company": "General Mills",
  "meta": {
    "company": "General Mills",
    "title": "General Mills Q1 FY27 Income Statement",
    "period": "Q1 FY27",
    "periodNote": "Ending Aug. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/general-mills-q1-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 197.91666666666666,
    "titleSize": 125.0,
    "titleWeight": 800,
    "periodX": 2236.9791666666665,
    "periodY": 1302.0833333333333,
    "periodNoteY": 1345.0520833333333
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#234291",
        "label": "#234291"
      },
      "hub": {
        "node": "#234291",
        "label": "#234291"
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
      "source": "#95a3c5",
      "hub": "#95a3c5",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0625,
      "value": 39.0625,
      "note": 27.34375,
      "lineGap": 10.416666666666666
    }
  },
  "nodes": [
    {
      "id": "north_america_retail",
      "label": [
        "North America",
        "Retail"
      ],
      "value": 2.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(7%) Y/Y",
        "20% segment margin"
      ]
    },
    {
      "id": "pet",
      "label": "Pet",
      "value": 0.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+0% Y/Y",
        "16% segment margin"
      ]
    },
    {
      "id": "north_america_foodservice",
      "label": [
        "North America",
        "Foodservice"
      ],
      "value": 0.5,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+1% Y/Y",
        "15% segment margin"
      ]
    },
    {
      "id": "international",
      "label": "International",
      "value": 0.8,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+5% Y/Y",
        "9% segment margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Net sales",
      "value": 4.4,
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.5,
      "type": "profit",
      "col": 2,
      "order": 5,
      "notes": [
        "34% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 2.9,
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.6,
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": [
        "14% margin",
        "(24pp) Y/Y"
      ]
    },
    {
      "id": "sga",
      "label": [
        "SG&A",
        "expenses"
      ],
      "value": 0.8,
      "type": "cost",
      "col": 3,
      "order": 8,
      "notes": []
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.021,
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": [],
      "valueText": "($21M)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.4,
      "type": "profit",
      "col": 4,
      "order": 10,
      "notes": [
        "9% margin",
        "(18pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "north_america_retail",
      "target": "revenue",
      "value": 2.5,
      "sourceWidth": 171.875,
      "targetWidth": 171.875,
      "y0": 625.0,
      "y1": 816.40625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pet",
      "target": "revenue",
      "value": 0.6,
      "sourceWidth": 41.666666666666664,
      "targetWidth": 41.666666666666664,
      "y0": 888.0208333333333,
      "y1": 923.1770833333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "north_america_foodservice",
      "target": "revenue",
      "value": 0.5,
      "sourceWidth": 36.45833333333333,
      "targetWidth": 36.45833333333333,
      "y0": 1085.9375,
      "y1": 962.2395833333333,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 57.291666666666664,
      "targetWidth": 54.6875,
      "y0": 1286.4583333333333,
      "y1": 1007.8124999999999,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.5,
      "sourceWidth": 102.86458333333333,
      "targetWidth": 102.86458333333333,
      "y0": 781.9010416666666,
      "y1": 666.015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2.9,
      "sourceWidth": 201.82291666666666,
      "targetWidth": 201.82291666666666,
      "y0": 934.2447916666666,
      "y1": 1048.828125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.6,
      "sourceWidth": 44.27083333333333,
      "targetWidth": 44.27083333333333,
      "y0": 636.71875,
      "y1": 550.78125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "sga",
      "value": 0.8,
      "sourceWidth": 57.291666666666664,
      "targetWidth": 58.59375,
      "y0": 687.5,
      "y1": 824.8697916666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "restructuring",
      "value": 0.021,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 1.3020833333333333,
      "y0": 716.796875,
      "y1": 1045.5729166666665,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 27.34375,
      "targetWidth": 27.34375,
      "y0": 542.3177083333333,
      "y1": 442.05729166666663,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 9.114583333333332,
      "targetWidth": 9.114583333333332,
      "y0": 560.546875,
      "y1": 643.2291666666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.1,
      "sourceWidth": 7.8125,
      "targetWidth": 6.510416666666666,
      "y0": 569.0104166666666,
      "y1": 784.5052083333333,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "operating_expenses",
      "representation": "data-only"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/general-mills/company-logo-q3-fy26.png",
      "x": 670.5729166666666,
      "y": 264.32291666666663,
      "width": 475.26041666666663,
      "height": 270.8333333333333
    },
    {
      "key": "north-america-retail-product-cluster",
      "href": "data/assets/raster-annotations/general-mills/north-america-retail-product-cluster-q3-fy26.png",
      "x": 169.27083333333331,
      "y": 402.34375,
      "width": 190.10416666666666,
      "height": 134.11458333333331
    },
    {
      "key": "pet-product-cluster",
      "href": "data/assets/raster-annotations/general-mills/pet-product-cluster-q3-fy26.png",
      "x": 196.61458333333331,
      "y": 700.5208333333333,
      "width": 139.32291666666666,
      "height": 123.69791666666666
    },
    {
      "key": "north-america-foodservice-product-cluster",
      "href": "data/assets/raster-annotations/general-mills/north-america-foodservice-product-cluster-q3-fy26.png",
      "x": 191.40625,
      "y": 936.1979166666666,
      "width": 147.13541666666666,
      "height": 97.65625
    },
    {
      "key": "international-product-cluster",
      "href": "data/assets/raster-annotations/general-mills/international-product-cluster-q3-fy26.png",
      "x": 187.5,
      "y": 1177.0833333333333,
      "width": 165.36458333333331,
      "height": 95.05208333333333
    }
  ],
  "layout": {
    "scale": 69.01041666666666,
    "nodes": {
      "north_america_retail": {
        "x": 436.19791666666663,
        "y": 539.0625,
        "width": 72.91666666666666,
        "height": 171.875
      },
      "pet": {
        "x": 436.19791666666663,
        "y": 867.1875,
        "width": 72.91666666666666,
        "height": 41.666666666666664
      },
      "north_america_foodservice": {
        "x": 436.19791666666663,
        "y": 1067.7083333333333,
        "width": 72.91666666666666,
        "height": 36.45833333333333
      },
      "international": {
        "x": 436.19791666666663,
        "y": 1257.8125,
        "width": 72.91666666666666,
        "height": 57.291666666666664
      },
      "revenue": {
        "x": 902.34375,
        "y": 730.46875,
        "width": 72.91666666666666,
        "height": 304.6875
      },
      "gross_profit": {
        "x": 1369.7916666666665,
        "y": 614.5833333333333,
        "width": 72.91666666666666,
        "height": 102.86458333333333
      },
      "cost_of_sales": {
        "x": 1369.7916666666665,
        "y": 947.9166666666666,
        "width": 72.91666666666666,
        "height": 201.82291666666666
      },
      "operating_profit": {
        "x": 1837.2395833333333,
        "y": 528.6458333333333,
        "width": 72.91666666666666,
        "height": 44.27083333333333
      },
      "sga": {
        "x": 1837.2395833333333,
        "y": 795.5729166666666,
        "width": 72.91666666666666,
        "height": 58.59375
      },
      "restructuring": {
        "x": 1837.2395833333333,
        "y": 1044.921875,
        "width": 72.91666666666666,
        "height": 1.3020833333333333
      },
      "net_profit": {
        "x": 2303.3854166666665,
        "y": 428.38541666666663,
        "width": 72.91666666666666,
        "height": 27.34375
      },
      "tax": {
        "x": 2303.3854166666665,
        "y": 638.671875,
        "width": 72.91666666666666,
        "height": 9.114583333333332
      },
      "other": {
        "x": 2303.3854166666665,
        "y": 781.25,
        "width": 72.91666666666666,
        "height": 6.510416666666666
      }
    },
    "labels": {
      "north_america_retail": {
        "blocks": [
          {
            "x": 472.65625,
            "top": 445.3125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 265.625,
            "top": 553.3854166666666,
            "anchor": "middle",
            "lineGap": 6.510416666666666,
            "lines": [
              {
                "text": "North America",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Retail",
                "size": 39.0625,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 265.625,
            "top": 654.9479166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "20% segment margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "pet": {
        "blocks": [
          {
            "x": 472.65625,
            "top": 773.4375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 265.625,
            "top": 838.5416666666666,
            "anchor": "middle",
            "lineGap": 6.510416666666666,
            "lines": [
              {
                "text": "Pet",
                "size": 39.0625,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 265.625,
            "top": 890.625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "16% segment margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "north_america_foodservice": {
        "blocks": [
          {
            "x": 472.65625,
            "top": 973.9583333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 265.625,
            "top": 1040.3645833333333,
            "anchor": "middle",
            "lineGap": 6.510416666666666,
            "lines": [
              {
                "text": "North America",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Foodservice",
                "size": 39.0625,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 265.625,
            "top": 1141.9270833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "15% segment margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 472.65625,
            "top": 1164.0625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 265.625,
            "top": 1278.6458333333333,
            "anchor": "middle",
            "lineGap": 6.510416666666666,
            "lines": [
              {
                "text": "International",
                "size": 39.0625,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 265.625,
            "top": 1329.4270833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "9% segment margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 938.8020833333333,
            "top": 585.9375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Net sales",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34375,
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
            "x": 1406.25,
            "top": 433.59375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "34% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34375,
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
            "x": 1406.25,
            "top": 1170.5729166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.854166666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1873.6979166666665,
            "top": 348.9583333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "14% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(24pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 1873.6979166666665,
            "top": 878.90625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "SG&A",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.854166666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 1873.6979166666665,
            "top": 1071.6145833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Restructuring",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.854166666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2516.927083333333,
            "top": 385.41666666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "9% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(18pp) Y/Y",
                "size": 27.34375,
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
            "x": 2516.927083333333,
            "top": 610.6770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Tax",
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
      "other": {
        "blocks": [
          {
            "x": 2516.927083333333,
            "top": 753.90625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
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
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "通用磨坊 · 2027 财年第一季度",
      "meta": {
        "title": "通用磨坊 2027 财年第一季度利润表",
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 8 月",
        "titleSize": 109.375
      },
      "nodes": {
        "north_america_retail": {
          "label": "北美零售",
          "notes": [
            "同比 (7%)",
            "分部利润率 20%"
          ]
        },
        "pet": {
          "label": "宠物业务",
          "notes": [
            "同比 +0%",
            "分部利润率 16%"
          ]
        },
        "north_america_foodservice": {
          "label": "北美餐饮服务",
          "notes": [
            "同比 +1%",
            "分部利润率 15%"
          ]
        },
        "international": {
          "label": "国际业务",
          "notes": [
            "同比 +5%",
            "分部利润率 9%"
          ]
        },
        "revenue": {
          "label": "净销售额",
          "notes": [
            "同比 (3%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 34%",
            "同比 (0 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 14%",
            "同比 (24 个百分点)"
          ]
        },
        "sga": {
          "label": "销售、一般及管理费用",
          "notes": []
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 9%",
            "同比 (18 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "north_america_retail": {
            "blocks": [
              {
                "x": 472.65625,
                "top": 445.3125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 265.625,
                "top": 553.3854166666666,
                "anchor": "middle",
                "lineGap": 6.510416666666666,
                "lines": [
                  {
                    "text": "北美零售",
                    "size": 39.0625,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 265.625,
                "top": 654.9479166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "分部利润率 20%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "pet": {
            "blocks": [
              {
                "x": 472.65625,
                "top": 773.4375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 265.625,
                "top": 838.5416666666666,
                "anchor": "middle",
                "lineGap": 6.510416666666666,
                "lines": [
                  {
                    "text": "宠物业务",
                    "size": 39.0625,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 265.625,
                "top": 890.625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "分部利润率 16%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "north_america_foodservice": {
            "blocks": [
              {
                "x": 472.65625,
                "top": 973.9583333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 265.625,
                "top": 1040.3645833333333,
                "anchor": "middle",
                "lineGap": 6.510416666666666,
                "lines": [
                  {
                    "text": "北美餐饮服务",
                    "size": 39.0625,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 265.625,
                "top": 1141.9270833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "分部利润率 15%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 472.65625,
                "top": 1164.0625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 265.625,
                "top": 1278.6458333333333,
                "anchor": "middle",
                "lineGap": 6.510416666666666,
                "lines": [
                  {
                    "text": "国际业务",
                    "size": 39.0625,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 265.625,
                "top": 1329.4270833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "分部利润率 9%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 938.8020833333333,
                "top": 585.9375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "净销售额",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.34375,
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
                "x": 1406.25,
                "top": 433.59375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 34%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34375,
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
                "x": 1406.25,
                "top": 1170.5729166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.854166666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1873.6979166666665,
                "top": 348.9583333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 14%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (24 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 1873.6979166666665,
                "top": 878.90625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "管理费用",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.854166666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 1873.6979166666665,
                "top": 1071.6145833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.854166666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2516.927083333333,
                "top": 385.41666666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 9%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (18 个百分点)",
                    "size": 27.34375,
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
                "x": 2516.927083333333,
                "top": 610.6770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "税费",
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
          "other": {
            "blocks": [
              {
                "x": 2516.927083333333,
                "top": 753.90625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
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
          }
        }
      }
    }
  }
});
