(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q3-fy23",
  "name": "GM · Q3 FY23",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q3 FY23 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/gm-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.91666666666666,
    "titleSize": 122.39583333333333,
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
      "value": 36.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+4% Y/Y"
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
        "+9% Y/Y"
      ]
    },
    {
      "id": "corporate",
      "label": "Corporate",
      "value": 0.1,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+109% Y/Y"
      ]
    },
    {
      "id": "auto",
      "label": "Auto",
      "value": 40.5,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+5% Y/Y"
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
      "value": 3.6,
      "type": "source",
      "col": 0,
      "order": 5,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 44.1,
      "type": "hub",
      "col": 0,
      "order": 6,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 8.3,
      "type": "profit",
      "col": 0,
      "order": 7,
      "notes": [
        "19% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 35.8,
      "type": "cost",
      "col": 0,
      "order": 8
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 3,
      "type": "profit",
      "col": 0,
      "order": 9,
      "notes": [
        "6% margin",
        "+0pp Y/Y"
      ],
      "valueText": "$3.0B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "Expenses"
      ],
      "value": 5.3,
      "type": "cost",
      "col": 0,
      "order": 10
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.5,
      "type": "profit",
      "col": 0,
      "order": 11
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 3,
      "type": "profit",
      "col": 0,
      "order": 12,
      "notes": [
        "7% margin",
        "(1pp) Y/Y"
      ],
      "valueText": "$3.0B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.5,
      "type": "cost",
      "col": 0,
      "order": 13
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2.9,
      "type": "cost",
      "col": 0,
      "order": 14
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.3,
      "type": "cost",
      "col": 0,
      "order": 15
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 36.1,
      "sourceWidth": 388.0208333333333,
      "targetWidth": 388.0208333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 4.3,
      "sourceWidth": 45.572916666666664,
      "targetWidth": 45.572916666666664,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.1,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 1.3020833333333333,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 40.5,
      "sourceWidth": 434.8958333333333,
      "targetWidth": 434.8958333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cruise",
      "target": "revenue",
      "value": 0.025,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 1.3020833333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 3.6,
      "sourceWidth": 37.760416666666664,
      "targetWidth": 37.760416666666664,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 8.3,
      "sourceWidth": 89.84375,
      "targetWidth": 88.54166666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 35.8,
      "sourceWidth": 384.1145833333333,
      "targetWidth": 384.1145833333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3,
      "sourceWidth": 32.55208333333333,
      "targetWidth": 31.25,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.3,
      "sourceWidth": 55.98958333333333,
      "targetWidth": 55.98958333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.5,
      "sourceWidth": 27.34375,
      "targetWidth": 27.34375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 3.90625,
      "targetWidth": 3.90625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.5,
      "sourceWidth": 4.557291666666666,
      "targetWidth": 3.90625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "c1x": 2284.1396484375,
        "c2x": 2288.04638671875
      }
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.9,
      "sourceWidth": 31.25,
      "targetWidth": 31.25,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.3,
      "sourceWidth": 24.739583333333332,
      "targetWidth": 24.739583333333332,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 440.1591796875,
        "y": 415.3645833333333,
        "width": 72.92578125,
        "height": 388.0208333333333
      },
      "gm_international": {
        "x": 440.1591796875,
        "y": 946.6145833333333,
        "width": 72.92578125,
        "height": 45.572916666666664
      },
      "corporate": {
        "x": 440.1591796875,
        "y": 1138.0208333333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "auto": {
        "x": 809.9970703125,
        "y": 520.8333333333333,
        "width": 72.92578125,
        "height": 434.8958333333333
      },
      "cruise": {
        "x": 809.9970703125,
        "y": 1180.9895833333333,
        "width": 72.92578125,
        "height": 1.3020833333333333
      },
      "gm_financial": {
        "x": 804.7880859375,
        "y": 1329.4270833333333,
        "width": 72.92578125,
        "height": 37.760416666666664
      },
      "revenue": {
        "x": 1187.6484375,
        "y": 631.5104166666666,
        "width": 72.92578125,
        "height": 473.9583333333333
      },
      "gross_profit": {
        "x": 1557.486328125,
        "y": 544.2708333333333,
        "width": 72.92578125,
        "height": 88.54166666666666
      },
      "cost_of_sales": {
        "x": 1560.0908203125,
        "y": 777.34375,
        "width": 72.92578125,
        "height": 384.1145833333333
      },
      "operating_profit": {
        "x": 1933.83544921875,
        "y": 454.4270833333333,
        "width": 72.92578125,
        "height": 31.25
      },
      "operating_expenses": {
        "x": 1935.1376953125,
        "y": 686.1979166666666,
        "width": 72.92578125,
        "height": 55.98958333333333
      },
      "other_income": {
        "x": 2194.28466796875,
        "y": 446.6145833333333,
        "width": 72.92578125,
        "height": 4.557291666666666
      },
      "net_profit": {
        "x": 2310.1845703125,
        "y": 351.5625,
        "width": 72.92578125,
        "height": 31.25
      },
      "tax": {
        "x": 2310.1845703125,
        "y": 632.8125,
        "width": 72.92578125,
        "height": 3.90625
      },
      "other": {
        "x": 2310.1845703125,
        "y": 938.8020833333333,
        "width": 72.92578125,
        "height": 31.25
      },
      "sga": {
        "x": 2310.1845703125,
        "y": 1183.59375,
        "width": 72.92578125,
        "height": 24.739583333333332
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 317.7083333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gm_international": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 843.75,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 947.9166666666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "GM International",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "corporate": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 1035.15625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+109% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 1115.7770833333332,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Corporate",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "auto": {
        "blocks": [
          {
            "x": 846.4599609375,
            "top": 369.79166666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Auto",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cruise": {
        "blocks": [
          {
            "x": 846.4599609375,
            "top": 1078.125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+0% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 768.3251953125,
            "top": 1158.0416666666665,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cruise",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "gm_financial": {
        "blocks": [
          {
            "x": 841.2509765625,
            "top": 1226.5625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 777.44091796875,
            "top": 1324.7125,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "GM Financial",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1224.111328125,
            "top": 480.46875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1593.94921875,
            "top": 352.8645833333333,
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
                "size": 39.0625
              },
              {
                "text": "19% margin",
                "size": 27.34375,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1970.29833984375,
            "top": 265.625,
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
                "size": 39.0625
              },
              {
                "text": "6% margin",
                "size": 27.34375,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1596.5537109375,
            "top": 1174.4791666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36.45833333333333,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1971.6005859375,
            "top": 756.5104166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 36.45833333333333,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 36.45833333333333,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2230.74755859375,
            "top": 457.03125,
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
                "size": 31.25
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 321.6145833333333,
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
                "size": 39.0625
              },
              {
                "text": "7% margin",
                "size": 27.34375,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 600.2604166666666,
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
                "size": 31.25
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 920.5729166666666,
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
                "size": 31.25
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 1154.9479166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25
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
      "x": 1127.7451171875,
      "y": 246.09375,
      "width": 205.7548828125,
      "height": 204.42708333333331
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 36.462890625,
      "y": 562.5,
      "width": 364.62890625,
      "height": 203.125
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2023 财年第三季度",
      "meta": {
        "title": "GM 2023 财年第三季度利润表",
        "titleSize": 113.28125
      },
      "nodes": {
        "gm_north_america": {
          "label": "通用北美",
          "notes": [
            "同比 +4%"
          ]
        },
        "gm_international": {
          "label": "通用国际",
          "notes": [
            "同比 +9%"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 +109%"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +5%"
          ]
        },
        "cruise": {
          "label": "Cruise 自动驾驶",
          "notes": [
            "同比 +0%"
          ]
        },
        "gm_financial": {
          "label": "通用金融",
          "notes": [
            "同比 +14%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 19%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
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
            "运营",
            "费用"
          ]
        },
        "other_income": {
          "label": "其他收入"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 (1 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他费用"
        },
        "sga": {
          "label": "销售及管理"
        }
      },
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 476.6220703125,
                "top": 317.7083333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gm_international": {
            "blocks": [
              {
                "x": 476.6220703125,
                "top": 843.75,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 947.9166666666666,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "通用国际",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "corporate": {
            "blocks": [
              {
                "x": 476.6220703125,
                "top": 1035.15625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +109%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 1115.7770833333332,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "auto": {
            "blocks": [
              {
                "x": 846.4599609375,
                "top": 369.79166666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cruise": {
            "blocks": [
              {
                "x": 846.4599609375,
                "top": 1078.125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +0%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 768.3251953125,
                "top": 1158.0416666666665,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "Cruise 自动驾驶",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 841.2509765625,
                "top": 1226.5625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 777.44091796875,
                "top": 1324.7125,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "通用金融",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1224.111328125,
                "top": 480.46875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1593.94921875,
                "top": 352.8645833333333,
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
                    "size": 39.0625
                  },
                  {
                    "text": "利润率 19%",
                    "size": 27.34375,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1970.29833984375,
                "top": 265.625,
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
                    "size": 39.0625
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.34375,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1596.5537109375,
                "top": 1174.4791666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1971.6005859375,
                "top": 756.5104166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2230.74755859375,
                "top": 457.03125,
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
                    "size": 31.25
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 321.6145833333333,
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
                    "size": 39.0625
                  },
                  {
                    "text": "利润率 7%",
                    "size": 27.34375,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 600.2604166666666,
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
                    "size": 31.25
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 920.5729166666666,
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
                    "size": 31.25
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 1154.9479166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售及管理",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"169.2919921875\" y=\"1436.1979166666665\" font-size=\"39.0625\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text><g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.3\" y=\"530\" font-size=\"39.06\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g>"
    }
  },
  "annotationsSvg": "<text x=\"169.2919921875\" y=\"1436.1979166666665\" font-size=\"39.0625\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text><g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.3\" y=\"530\" font-size=\"39.06\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g>"
});})();
