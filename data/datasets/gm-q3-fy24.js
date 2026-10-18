(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q3-fy24",
  "name": "GM · Q3 FY24",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q3 FY24 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/gm-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
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
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "GM North America",
      "value": 41.2,
      "notes": [
        "+14% Y/Y"
      ],
      "valueText": "$41.2B"
    },
    {
      "id": "gm_international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "GM International",
      "value": 3.5,
      "notes": [
        "(19%) Y/Y"
      ],
      "valueText": "$3.5B"
    },
    {
      "id": "corporate",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Corporate",
      "value": 0.1,
      "notes": [
        "(7%) Y/Y"
      ],
      "valueText": "$0.1B"
    },
    {
      "id": "auto",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Auto",
      "value": 44.7,
      "notes": [
        "+10% Y/Y"
      ],
      "valueText": "$44.7B"
    },
    {
      "id": "gm_financial",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "GM Financial",
      "value": 4,
      "notes": [
        "+11% Y/Y"
      ],
      "valueText": "$4.0B"
    },
    {
      "id": "revenue",
      "col": 0,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 48.8,
      "notes": [
        "+10% Y/Y"
      ],
      "valueText": "$48.8B"
    },
    {
      "id": "gross_profit",
      "col": 0,
      "order": 6,
      "type": "profit",
      "label": "Gross profit",
      "value": 9.8,
      "notes": [
        "20% margin",
        "+3pp Y/Y"
      ],
      "valueText": "$9.8B"
    },
    {
      "id": "cost_of_sales",
      "col": 0,
      "order": 7,
      "type": "cost",
      "label": "Cost of sales",
      "value": 39,
      "notes": [],
      "valueText": "($39.0B)"
    },
    {
      "id": "operating_profit",
      "col": 0,
      "order": 8,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.7,
      "notes": [
        "7% margin",
        "+1pp Y/Y"
      ],
      "valueText": "$3.7B"
    },
    {
      "id": "operating_expenses",
      "col": 0,
      "order": 9,
      "type": "cost",
      "label": [
        "Operating",
        "Expenses"
      ],
      "value": 6.1,
      "notes": [],
      "valueText": "($6.1B)"
    },
    {
      "id": "interest",
      "col": 0,
      "order": 10,
      "type": "profit",
      "label": "Interest",
      "value": 0.1,
      "notes": [],
      "valueText": "$0.1B"
    },
    {
      "id": "net_profit",
      "col": 0,
      "order": 11,
      "type": "profit",
      "label": "Net profit",
      "value": 3,
      "notes": [
        "6% margin",
        "(1pp) Y/Y"
      ],
      "valueText": "$3.0B"
    },
    {
      "id": "tax",
      "col": 0,
      "order": 12,
      "type": "cost",
      "label": "Tax",
      "value": 0.7,
      "notes": [],
      "valueText": "($0.7B)"
    },
    {
      "id": "other",
      "col": 0,
      "order": 13,
      "type": "cost",
      "label": "Other",
      "value": 3.4,
      "notes": [],
      "valueText": "($3.4B)"
    },
    {
      "id": "sga",
      "col": 0,
      "order": 14,
      "type": "cost",
      "label": "SG&A",
      "value": 2.7,
      "valueText": "($2.7B)",
      "notes": []
    },
    {
      "id": "cruise",
      "label": "Cruise",
      "value": 0.026,
      "type": "source",
      "valueText": "$26M",
      "notes": [
        "+4% Y/Y"
      ],
      "col": 0,
      "order": 15
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 41.2,
      "sourceWidth": 371.09375,
      "targetWidth": 371.09375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 3.5,
      "sourceWidth": 32.55208333333333,
      "targetWidth": 31.25,
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
      "value": 44.7,
      "sourceWidth": 403.6458333333333,
      "targetWidth": 403.6458333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cruise",
      "target": "revenue",
      "value": 0.026,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 1.3020833333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 4,
      "sourceWidth": 37.760416666666664,
      "targetWidth": 33.854166666666664,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.8,
      "sourceWidth": 88.54166666666666,
      "targetWidth": 87.23958333333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 39,
      "sourceWidth": 350.26041666666663,
      "targetWidth": 351.5625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.7,
      "sourceWidth": 32.55208333333333,
      "targetWidth": 33.854166666666664,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.1,
      "sourceWidth": 54.6875,
      "targetWidth": 54.6875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3,
      "sourceWidth": 27.34375,
      "targetWidth": 27.34375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 6.510416666666666,
      "targetWidth": 6.510416666666666,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 5.208333333333333,
      "targetWidth": 5.208333333333333,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "c1x": 2281.53515625,
        "c2x": 2284.1396484375
      }
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 3.4,
      "sourceWidth": 29.947916666666664,
      "targetWidth": 29.947916666666664,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.7,
      "sourceWidth": 24.739583333333332,
      "targetWidth": 24.739583333333332,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 436.25244140625,
        "y": 467.44791666666663,
        "width": 72.92578125,
        "height": 371.09375
      },
      "gm_international": {
        "x": 436.25244140625,
        "y": 970.0520833333333,
        "width": 72.92578125,
        "height": 32.55208333333333
      },
      "corporate": {
        "x": 436.25244140625,
        "y": 1132.8125,
        "width": 72.92578125,
        "height": 1.3020833333333333
      },
      "auto": {
        "x": 812.6015625,
        "y": 550.78125,
        "width": 72.92578125,
        "height": 403.6458333333333
      },
      "gm_financial": {
        "x": 807.392578125,
        "y": 1283.8541666666665,
        "width": 72.92578125,
        "height": 37.760416666666664
      },
      "revenue": {
        "x": 1183.74169921875,
        "y": 643.2291666666666,
        "width": 72.92578125,
        "height": 438.8020833333333
      },
      "gross_profit": {
        "x": 1554.8818359375,
        "y": 550.78125,
        "width": 72.92578125,
        "height": 87.23958333333333
      },
      "cost_of_sales": {
        "x": 1553.57958984375,
        "y": 816.40625,
        "width": 72.92578125,
        "height": 351.5625
      },
      "operating_profit": {
        "x": 1922.115234375,
        "y": 468.75,
        "width": 72.92578125,
        "height": 33.854166666666664
      },
      "operating_expenses": {
        "x": 1929.9287109375,
        "y": 688.8020833333333,
        "width": 72.92578125,
        "height": 54.6875
      },
      "interest": {
        "x": 2194.28466796875,
        "y": 467.44791666666663,
        "width": 72.92578125,
        "height": 5.208333333333333
      },
      "net_profit": {
        "x": 2304.9755859375,
        "y": 384.1145833333333,
        "width": 72.92578125,
        "height": 32.55208333333333
      },
      "tax": {
        "x": 2304.9755859375,
        "y": 604.1666666666666,
        "width": 72.92578125,
        "height": 6.510416666666666
      },
      "other": {
        "x": 2304.9755859375,
        "y": 828.125,
        "width": 72.92578125,
        "height": 29.947916666666664
      },
      "sga": {
        "x": 2304.9755859375,
        "y": 1035.15625,
        "width": 72.92578125,
        "height": 24.739583333333332
      },
      "cruise": {
        "x": 807.392578125,
        "y": 1128.90625,
        "width": 72.92578125,
        "height": 1.3020833333333333
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 367.1875,
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
          }
        ]
      },
      "gm_international": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 869.7916666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "(19%) Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.18505859375,
            "top": 964.84375,
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
            "x": 472.71533203125,
            "top": 1032.5520833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 332.07275390625,
            "top": 1109.9645833333332,
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
      "cruise": {
        "blocks": [
          {
            "x": 843.85546875,
            "top": 1032.5520833333333,
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
          },
          {
            "x": 785.25439453125,
            "top": 1102.8645833333333,
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
            "x": 843.85546875,
            "top": 1188.8020833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 785.25439453125,
            "top": 1282.5520833333333,
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
      "auto": {
        "blocks": [
          {
            "x": 849.064453125,
            "top": 399.7395833333333,
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
                "text": "+10% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1220.20458984375,
            "top": 492.1875,
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
                "text": "+10% Y/Y",
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
            "x": 1591.3447265625,
            "top": 359.375,
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
                "text": "20% margin",
                "size": 27.34375,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 1591.3447265625,
            "top": 1184.8958333333333,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1958.578125,
            "top": 278.6458333333333,
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
                "text": "7% margin",
                "size": 27.34375,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1966.3916015625,
            "top": 760.4166666666666,
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
      "interest": {
        "blocks": [
          {
            "x": 2230.74755859375,
            "top": 488.28125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Interest",
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
            "x": 2492.4990234375,
            "top": 330.72916666666663,
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
                "text": "6% margin",
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
            "x": 2492.4990234375,
            "top": 565.1041666666666,
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
            "x": 2492.4990234375,
            "top": 798.1770833333333,
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
            "x": 2492.4990234375,
            "top": 1011.7187499999999,
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
  "annotationsSvg": "<g transform=\"scale(1.30224609375,1.3020833333333333)\"><g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"34\" y=\"450\" text-anchor=\"start\" font-size=\"30\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g></g>",
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1127.7451171875,
      "y": 248.69791666666666,
      "width": 205.7548828125,
      "height": 205.72916666666666
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 36.462890625,
      "y": 617.1875,
      "width": 363.32666015625,
      "height": 196.61458333333331
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2024 财年第三季度",
      "meta": {
        "title": "GM 2024 财年第三季度利润表",
        "titleSize": 111.97916666666666
      },
      "nodes": {
        "gm_north_america": {
          "label": "通用北美",
          "notes": [
            "同比 +14%"
          ]
        },
        "gm_international": {
          "label": "通用国际",
          "notes": [
            "同比 (19%)"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 (7%)"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +10%"
          ]
        },
        "gm_financial": {
          "label": "通用金融",
          "notes": [
            "同比 +11%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 20%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 (1 个百分点)"
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
        "sga": {
          "label": "销售及管理（SG&A）",
          "notes": []
        },
        "cruise": {
          "label": "Cruise 自动驾驶",
          "notes": [
            "同比 +4%"
          ]
        }
      },
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 367.1875,
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
              }
            ]
          },
          "gm_international": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 869.7916666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 (19%)",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.18505859375,
                "top": 964.84375,
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
                "x": 472.71533203125,
                "top": 1032.5520833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 332.07275390625,
                "top": 1109.9645833333332,
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
          "cruise": {
            "blocks": [
              {
                "x": 843.85546875,
                "top": 1032.5520833333333,
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
              },
              {
                "x": 785.25439453125,
                "top": 1102.8645833333333,
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
                "x": 843.85546875,
                "top": 1188.8020833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 785.25439453125,
                "top": 1282.5520833333333,
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
          "auto": {
            "blocks": [
              {
                "x": 849.064453125,
                "top": 399.7395833333333,
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
                    "text": "同比 +10%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1220.20458984375,
                "top": 492.1875,
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
                    "text": "同比 +10%",
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
                "x": 1591.3447265625,
                "top": 359.375,
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
                    "text": "利润率 20%",
                    "size": 27.34375,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1591.3447265625,
                "top": 1184.8958333333333,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1958.578125,
                "top": 278.6458333333333,
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
                    "text": "利润率 7%",
                    "size": 27.34375,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1966.3916015625,
                "top": 760.4166666666666,
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
          "interest": {
            "blocks": [
              {
                "x": 2230.74755859375,
                "top": 488.28125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "利息",
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
                "x": 2492.4990234375,
                "top": 330.72916666666663,
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
                    "text": "利润率 6%",
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
                "x": 2492.4990234375,
                "top": 565.1041666666666,
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
                "x": 2492.4990234375,
                "top": 798.1770833333333,
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
                "x": 2492.4990234375,
                "top": 1011.7187499999999,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售及管理（SG&A）",
                    "size": 22.135416666666668,
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375,1.3020833333333333)\"><g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"34\" y=\"450\" text-anchor=\"start\" font-size=\"30\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g></g>"
    }
  }
});})();
