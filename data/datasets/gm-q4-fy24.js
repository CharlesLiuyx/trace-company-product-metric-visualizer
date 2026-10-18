(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
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
  "key": "gm-q4-fy24",
  "name": "GM · Q4 FY24",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q4 FY24 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/gm-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.91666666666666,
    "titleSize": 122.39583333333333,
    "titleWeight": 800
  },
  "nodes": [
    {
      "id": "gm_north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "GM North America",
      "value": 39.5,
      "valueText": "$39.5B",
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "GM International",
      "value": 4,
      "valueText": "$4.0B",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "corporate",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Corporate",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": [
        "(21%) Y/Y"
      ]
    },
    {
      "id": "auto",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Auto",
      "value": 43.6,
      "valueText": "$43.6B",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "cruise",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Cruise",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": [
        "NM"
      ]
    },
    {
      "id": "gm_financial",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "GM Financial",
      "value": 4.1,
      "valueText": "$4.1B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 0,
      "order": 6,
      "type": "hub",
      "label": "Revenue",
      "value": 47.7,
      "valueText": "$47.7B",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 0,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 8.3,
      "valueText": "$8.3B",
      "notes": [
        "17% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 0,
      "order": 8,
      "type": "cost",
      "label": "Cost of sales",
      "value": 39.4,
      "valueText": "($39.4B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 0,
      "order": 9,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.5,
      "valueText": "$1.5B",
      "notes": [
        "3% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 0,
      "order": 10,
      "type": "cost",
      "label": "Operating Expenses",
      "value": 6.7,
      "valueText": "($6.7B)",
      "notes": []
    },
    {
      "id": "net_loss",
      "col": 0,
      "order": 11,
      "type": "cost",
      "label": "Net loss",
      "value": -2.9,
      "valueText": "($2.9B)",
      "notes": []
    },
    {
      "id": "other_net",
      "col": 0,
      "order": 12,
      "type": "cost",
      "label": "Other",
      "value": 4.4,
      "valueText": "($4.4B)",
      "notes": []
    },
    {
      "id": "other_opex",
      "col": 0,
      "order": 13,
      "type": "cost",
      "label": "Other",
      "value": 3.4,
      "valueText": "($3.4B)",
      "notes": []
    },
    {
      "id": "sga",
      "col": 0,
      "order": 14,
      "type": "cost",
      "label": "SG&A",
      "value": 3.3,
      "valueText": "($3.3B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 39.5,
      "sourceWidth": 359.375,
      "targetWidth": 358.07291666666663,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 4,
      "sourceWidth": 36.45833333333333,
      "targetWidth": 36.45833333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.1,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 1.3020833333333333,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 43.6,
      "sourceWidth": 395.8333333333333,
      "targetWidth": 395.8333333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cruise",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 1.3020833333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 4.1,
      "sourceWidth": 37.760416666666664,
      "targetWidth": 37.760416666666664,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 8.3,
      "sourceWidth": 76.82291666666666,
      "targetWidth": 75.52083333333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 39.4,
      "sourceWidth": 358.07291666666663,
      "targetWidth": 358.07291666666663,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.5,
      "sourceWidth": 14.322916666666666,
      "targetWidth": 14.322916666666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.7,
      "sourceWidth": 61.197916666666664,
      "targetWidth": 61.197916666666664,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_net",
      "value": 1.5,
      "sourceWidth": 14.322916666666666,
      "targetWidth": 14.322916666666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "net_loss",
      "target": "other_net",
      "value": 2.9,
      "sourceWidth": 26.041666666666664,
      "targetWidth": 26.041666666666664,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 3.4,
      "sourceWidth": 31.25,
      "targetWidth": 31.25,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 3.3,
      "sourceWidth": 29.947916666666664,
      "targetWidth": 31.25,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 442.763671875,
        "y": 463.54166666666663,
        "width": 72.92578125,
        "height": 359.375
      },
      "gm_international": {
        "x": 442.763671875,
        "y": 971.3541666666666,
        "width": 72.92578125,
        "height": 36.45833333333333
      },
      "corporate": {
        "x": 442.763671875,
        "y": 1147.1354166666665,
        "width": 72.92578125,
        "height": 1.3020833333333333
      },
      "auto": {
        "x": 815.2060546875,
        "y": 566.40625,
        "width": 72.92578125,
        "height": 395.8333333333333
      },
      "cruise": {
        "x": 815.2060546875,
        "y": 1106.7708333333333,
        "width": 72.92578125,
        "height": 1.3020833333333333
      },
      "gm_financial": {
        "x": 817.810546875,
        "y": 1233.0729166666665,
        "width": 72.92578125,
        "height": 37.760416666666664
      },
      "revenue": {
        "x": 1187.6484375,
        "y": 643.2291666666666,
        "width": 72.92578125,
        "height": 434.8958333333333
      },
      "gross_profit": {
        "x": 1560.0908203125,
        "y": 544.2708333333333,
        "width": 72.92578125,
        "height": 75.52083333333333
      },
      "cost_of_sales": {
        "x": 1558.78857421875,
        "y": 800.78125,
        "width": 72.92578125,
        "height": 358.07291666666663
      },
      "operating_profit": {
        "x": 1976.8095703125,
        "y": 425.78125,
        "width": 72.92578125,
        "height": 14.322916666666666
      },
      "operating_expenses": {
        "x": 1978.11181640625,
        "y": 686.1979166666666,
        "width": 72.92578125,
        "height": 61.197916666666664
      },
      "net_loss": {
        "x": 2203.400390625,
        "y": 455.72916666666663,
        "width": 72.92578125,
        "height": 26.041666666666664
      },
      "other_net": {
        "x": 2306.27783203125,
        "y": 513.0208333333333,
        "width": 72.92578125,
        "height": 40.36458333333333
      },
      "other_opex": {
        "x": 2306.27783203125,
        "y": 777.34375,
        "width": 72.92578125,
        "height": 31.25
      },
      "sga": {
        "x": 2306.27783203125,
        "y": 968.75,
        "width": 72.92578125,
        "height": 31.25
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 479.2265625,
            "top": 364.5833333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gm_international": {
        "blocks": [
          {
            "x": 479.2265625,
            "top": 869.7916666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
            "x": 397.18505859375,
            "top": 964.84375,
            "anchor": "end",
            "lineGap": 9.114583333333332,
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
            "x": 479.2265625,
            "top": 1048.1770833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(21%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "auto": {
        "blocks": [
          {
            "x": 851.6689453125,
            "top": 414.0625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Auto",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cruise": {
        "blocks": [
          {
            "x": 851.6689453125,
            "top": 1009.1145833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "NM",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 774.83642578125,
            "top": 1083.3333333333333,
            "anchor": "end",
            "lineGap": 9.114583333333332,
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
            "x": 854.2734375,
            "top": 1134.1145833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 787.85888671875,
            "top": 1229.1666666666665,
            "anchor": "end",
            "lineGap": 9.114583333333332,
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
            "top": 492.1875,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
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
            "x": 1596.5537109375,
            "top": 351.5625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "17% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 1595.25146484375,
            "top": 1174.4791666666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
            "x": 2013.2724609375,
            "top": 234.375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "3% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
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
            "x": 2014.57470703125,
            "top": 760.4166666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 33.854166666666664,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_loss": {
        "blocks": [
          {
            "x": 2239.86328125,
            "top": 345.0520833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Net loss",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_net": {
        "blocks": [
          {
            "x": 2472.96533203125,
            "top": 490.88541666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2472.96533203125,
            "top": 753.90625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
      },
      "sga": {
        "blocks": [
          {
            "x": 2472.96533203125,
            "top": 944.0104166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "SG&A",
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
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1118.62939453125,
      "y": 221.35416666666666,
      "width": 205.7548828125,
      "height": 204.42708333333331
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 35.16064453125,
      "y": 597.65625,
      "width": 365.93115234375,
      "height": 196.61458333333331
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2024 财年第四季度",
      "meta": {
        "title": "GM 2024 财年第四季度利润表",
        "titleSize": 114.58333333333333
      },
      "nodes": {
        "gm_north_america": {
          "label": "通用北美",
          "notes": [
            "同比 +12%"
          ]
        },
        "gm_international": {
          "label": "通用国际",
          "notes": [
            "同比 +1%"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 (21%)"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +11%"
          ]
        },
        "cruise": {
          "label": "Cruise 自动驾驶",
          "notes": [
            "无可比意义"
          ]
        },
        "gm_financial": {
          "label": "通用金融",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 17%",
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
            "利润率 3%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_loss": {
          "label": "净亏损",
          "notes": []
        },
        "other_net": {
          "label": "其他",
          "notes": []
        },
        "other_opex": {
          "label": "其他",
          "notes": []
        },
        "sga": {
          "label": "销售及管理（SG&A）",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 479.2265625,
                "top": 364.5833333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gm_international": {
            "blocks": [
              {
                "x": 479.2265625,
                "top": 869.7916666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                "x": 397.18505859375,
                "top": 964.84375,
                "anchor": "end",
                "lineGap": 9.114583333333332,
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
                "x": 479.2265625,
                "top": 1048.1770833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (21%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "auto": {
            "blocks": [
              {
                "x": 851.6689453125,
                "top": 414.0625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cruise": {
            "blocks": [
              {
                "x": 851.6689453125,
                "top": 1009.1145833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "无可比意义",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 774.83642578125,
                "top": 1083.3333333333333,
                "anchor": "end",
                "lineGap": 9.114583333333332,
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
                "x": 854.2734375,
                "top": 1134.1145833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 787.85888671875,
                "top": 1229.1666666666665,
                "anchor": "end",
                "lineGap": 9.114583333333332,
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
                "top": 492.1875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
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
                "x": 1596.5537109375,
                "top": 351.5625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 17%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 1595.25146484375,
                "top": 1174.4791666666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                "x": 2013.2724609375,
                "top": 234.375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 3%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
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
                "x": 2014.57470703125,
                "top": 760.4166666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "运营",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 33.854166666666664,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_loss": {
            "blocks": [
              {
                "x": 2239.86328125,
                "top": 345.0520833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "净亏损",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_net": {
            "blocks": [
              {
                "x": 2472.96533203125,
                "top": 490.88541666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2472.96533203125,
                "top": 753.90625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
          },
          "sga": {
            "blocks": [
              {
                "x": 2500,
                "top": 944.0104166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售及管理 SG&A",
                    "size": 27,
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
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.2763671875\" y=\"566.40625\" text-anchor=\"start\" font-size=\"39.06\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g><g class=\"sankey-interactive-annotation\" data-node=\"corporate\"><text x=\"332.07275390625\" y=\"1134.1145833333333\" text-anchor=\"end\" font-size=\"39.06\" font-weight=\"800\" fill=\"#09a7db\">公司及其他</text></g>"
    }
  },
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.2763671875\" y=\"566.40625\" text-anchor=\"start\" font-size=\"39.06\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g><g class=\"sankey-interactive-annotation\" data-node=\"corporate\"><text x=\"332.07275390625\" y=\"1134.1145833333333\" text-anchor=\"end\" font-size=\"39.06\" font-weight=\"800\" fill=\"#09a7db\">Corporate</text></g>"
});})();
