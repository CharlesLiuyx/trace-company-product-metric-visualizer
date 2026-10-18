(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q4-fy22",
  "name": "GM · Q4 FY22",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q4 FY22 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/gm-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 122,
    "titleWeight": 800
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#09a7db",
        "label": "#09a7db"
      },
      "hub": {
        "node": "#09a7db",
        "label": "#09a7db"
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
      "source": "#89cfe8",
      "hub": "#89cfe8",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "gm_north_america",
      "label": "GM North America",
      "value": 35.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+32% Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "label": "GM International",
      "value": 4.3,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+25% Y/Y"
      ]
    },
    {
      "id": "corporate",
      "label": "Corporate",
      "value": 0.044,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+19% Y/Y"
      ],
      "valueText": "$44M"
    },
    {
      "id": "auto",
      "label": "Auto",
      "value": 39.8,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+31% Y/Y"
      ]
    },
    {
      "id": "cruise",
      "label": "Cruise",
      "value": 0.025,
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "+0% Y/Y"
      ],
      "valueText": "$25M"
    },
    {
      "id": "gm_financial",
      "label": "GM Financial",
      "value": 3.3,
      "type": "source",
      "col": 0,
      "order": 5,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 43.1,
      "type": "hub",
      "col": 0,
      "order": 6,
      "notes": [
        "+28% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 8.5,
      "type": "profit",
      "col": 0,
      "order": 7,
      "notes": [
        "20% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 34.6,
      "type": "cost",
      "col": 0,
      "order": 8,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 2.6,
      "type": "profit",
      "col": 0,
      "order": 9,
      "notes": [
        "6% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "Expenses"
      ],
      "value": 5.9,
      "type": "cost",
      "col": 0,
      "order": 10,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2,
      "type": "profit",
      "col": 0,
      "order": 11,
      "notes": [
        "5% margin",
        "(1pp) Y/Y"
      ],
      "valueText": "$2.0B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.6,
      "type": "cost",
      "col": 0,
      "order": 12,
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 3.4,
      "type": "cost",
      "col": 0,
      "order": 13,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2.5,
      "type": "cost",
      "col": 0,
      "order": 14,
      "notes": [],
      "valueText": "($2.5B)"
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 35.5,
      "sourceWidth": 334.67724609375,
      "targetWidth": 334.67724609375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 4.3,
      "sourceWidth": 41.671875,
      "targetWidth": 39.0673828125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.044,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 39.8,
      "sourceWidth": 375.046875,
      "targetWidth": 375.046875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cruise",
      "target": "revenue",
      "value": 0.025,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 3.3,
      "sourceWidth": 31.25390625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 8.5,
      "sourceWidth": 80.7392578125,
      "targetWidth": 79.43701171875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 34.6,
      "sourceWidth": 325.5615234375,
      "targetWidth": 325.5615234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.6,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.9,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 3.4,
      "sourceWidth": 32.55615234375,
      "targetWidth": 31.25390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.5,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 445.3681640625,
        "y": 445.3681640625,
        "width": 72.92578125,
        "height": 334.67724609375
      },
      "gm_international": {
        "x": 445.3681640625,
        "y": 929.8037109375,
        "width": 72.92578125,
        "height": 41.671875
      },
      "corporate": {
        "x": 445.3681640625,
        "y": 1108.21142578125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "auto": {
        "x": 824.32177734375,
        "y": 545.64111328125,
        "width": 72.92578125,
        "height": 375.046875
      },
      "cruise": {
        "x": 816.50830078125,
        "y": 1181.13720703125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "gm_financial": {
        "x": 819.11279296875,
        "y": 1316.57080078125,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "revenue": {
        "x": 1211.0888671875,
        "y": 627.6826171875,
        "width": 72.92578125,
        "height": 406.30078125
      },
      "gross_profit": {
        "x": 1569.20654296875,
        "y": 572.98828125,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "cost_of_sales": {
        "x": 1569.20654296875,
        "y": 793.06787109375,
        "width": 72.92578125,
        "height": 325.5615234375
      },
      "operating_profit": {
        "x": 1936.43994140625,
        "y": 513.0849609375,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "operating_expenses": {
        "x": 1937.7421875,
        "y": 720.14208984375,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "net_profit": {
        "x": 2314.09130859375,
        "y": 444.06591796875,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "tax": {
        "x": 2314.09130859375,
        "y": 621.17138671875,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "sga": {
        "x": 2314.09130859375,
        "y": 832.13525390625,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "other": {
        "x": 2314.09130859375,
        "y": 1013.1474609375,
        "width": 72.92578125,
        "height": 23.4404296875
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 356.8154296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+32% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 416.71875,
            "top": 498.76025390625,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "GM North America",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "gm_international": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 838.15771484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+25% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 414.1142578125,
            "top": 927.0126953125,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "GM International",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "corporate": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 1017.05419921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+19% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 414.1142578125,
            "top": 1084.77099609375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Corporate",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "auto": {
        "blocks": [
          {
            "x": 862.0869140625,
            "top": 401.091796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Auto",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+31% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cruise": {
        "blocks": [
          {
            "x": 854.2734375,
            "top": 1089.97998046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+0% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 782.64990234375,
            "top": 1158.80576171875,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cruise",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "gm_financial": {
        "blocks": [
          {
            "x": 854.2734375,
            "top": 1226.7158203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 782.64990234375,
            "top": 1308.6685546875,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "GM Financial",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1247.5517578125,
            "top": 485.73779296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+28% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1605.66943359375,
            "top": 390.673828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "20% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1972.90283203125,
            "top": 330.7705078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "6% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1605.66943359375,
            "top": 1142.06982421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1975.50732421875,
            "top": 791.765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35.16064453125
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2505.521484375,
            "top": 395.8828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "5% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2502.9169921875,
            "top": 604.2421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2502.9169921875,
            "top": 823.01953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2502.9169921875,
            "top": 989.70703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1142.06982421875,
      "y": 246.12451171875,
      "width": 204.45263671875,
      "height": 204.45263671875
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 50.78759765625,
      "y": 562.5703125,
      "width": 358.11767578125,
      "height": 199.24365234375
    }
  ],
  "i18n": {
    "zh": {
      "name": "通用汽车 · 2022 财年第四季度",
      "meta": {
        "title": "通用汽车 2022 财年第四季度利润表"
      },
      "nodes": {
        "gm_north_america": {
          "label": "通用汽车北美",
          "notes": [
            "同比 +32%"
          ]
        },
        "gm_international": {
          "label": "通用汽车国际",
          "notes": [
            "同比 +25%"
          ]
        },
        "corporate": {
          "label": "公司总部",
          "notes": [
            "同比 +19%"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +31%"
          ]
        },
        "cruise": {
          "label": "Cruise 自动驾驶",
          "notes": [
            "同比 +0%"
          ]
        },
        "gm_financial": {
          "label": "通用汽车金融",
          "notes": [
            "同比 +1%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +28%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 20%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 6%",
            "同比 +0 个百分点"
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
            "利润率 5%",
            "同比 (1 个百分点)"
          ]
        },
        "tax": {
          "label": "所得税",
          "notes": []
        },
        "sga": {
          "label": "销售及管理费用",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 356.8154296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +32%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 416.71875,
                "top": 498.76025390625,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用汽车北美",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "gm_international": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 838.15771484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 414.1142578125,
                "top": 927.0126953125,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用汽车国际",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "corporate": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 1017.05419921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 414.1142578125,
                "top": 1084.77099609375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "公司总部",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "auto": {
            "blocks": [
              {
                "x": 862.0869140625,
                "top": 401.091796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +31%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cruise": {
            "blocks": [
              {
                "x": 854.2734375,
                "top": 1089.97998046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +0%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 782.64990234375,
                "top": 1158.80576171875,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "Cruise 自动驾驶",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 854.2734375,
                "top": 1226.7158203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 782.64990234375,
                "top": 1308.6685546875,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用汽车金融",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1247.5517578125,
                "top": 485.73779296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1605.66943359375,
                "top": 390.673828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "利润率 20%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1972.90283203125,
                "top": 330.7705078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1605.66943359375,
                "top": 1142.06982421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1975.50732421875,
                "top": 791.765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2505.521484375,
                "top": 395.8828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "利润率 5%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2502.9169921875,
                "top": 604.2421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "所得税",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2502.9169921875,
                "top": 823.01953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售及管理费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2502.9169921875,
                "top": 989.70703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625
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
