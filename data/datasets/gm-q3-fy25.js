(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q3-fy25",
  "name": "GM · Q3 FY25",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q3 FY25 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/gm-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.61458333333331,
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
      "value": 40.6,
      "valueText": "$40.6B",
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "GM International",
      "value": 3.6,
      "valueText": "$3.6B",
      "notes": [
        "+4% Y/Y"
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
        "(3%) Y/Y"
      ]
    },
    {
      "id": "auto",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Auto",
      "value": 44.3,
      "valueText": "$44.3B",
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "gm_financial",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "GM Financial",
      "value": 4.3,
      "valueText": "$4.3B",
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 0,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 48.6,
      "valueText": "$48.6B",
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 0,
      "order": 6,
      "type": "profit",
      "label": "Gross profit",
      "value": 6.7,
      "valueText": "$6.7B",
      "notes": [
        "14% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 0,
      "order": 7,
      "type": "cost",
      "label": "Cost of sales",
      "value": 41.9,
      "valueText": "($41.9B)"
    },
    {
      "id": "operating_profit",
      "col": 0,
      "order": 8,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.1,
      "valueText": "$1.1B",
      "notes": [
        "2% margin",
        "(5pp) Y/Y"
      ]
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
      "value": 5.6,
      "valueText": "($5.6B)"
    },
    {
      "id": "interest",
      "col": 0,
      "order": 10,
      "type": "profit",
      "label": "Interest",
      "value": 0.3,
      "valueText": "$0.3B"
    },
    {
      "id": "net_profit",
      "col": 0,
      "order": 11,
      "type": "profit",
      "label": "Net profit",
      "value": 1.3,
      "valueText": "$1.3B",
      "notes": [
        "3% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 0,
      "order": 12,
      "type": "cost",
      "label": "Tax",
      "value": 0.1,
      "valueText": "($0.1B)"
    },
    {
      "id": "other",
      "col": 0,
      "order": 13,
      "type": "cost",
      "label": "Other",
      "value": 3.5,
      "valueText": "($3.5B)"
    },
    {
      "id": "sga",
      "col": 0,
      "order": 14,
      "type": "cost",
      "label": "SG&A",
      "value": 2,
      "valueText": "($2.0B)"
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 40.6,
      "sourceWidth": 363.28125,
      "targetWidth": 363.28125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 3.6,
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
      "value": 44.3,
      "sourceWidth": 395.8333333333333,
      "targetWidth": 394.53125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 4.3,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 6.7,
      "sourceWidth": 58.59375,
      "targetWidth": 58.59375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 41.9,
      "sourceWidth": 375,
      "targetWidth": 375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.1,
      "sourceWidth": 9.114583333333332,
      "targetWidth": 9.114583333333332,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.6,
      "sourceWidth": 49.479166666666664,
      "targetWidth": 49.479166666666664,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1,
      "sourceWidth": 7.8125,
      "targetWidth": 9.114583333333332,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 1.3020833333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "c1x": 2298.46435546875,
        "c2x": 2291.953125
      }
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 3.5,
      "sourceWidth": 31.25,
      "targetWidth": 31.25,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2,
      "sourceWidth": 18.229166666666664,
      "targetWidth": 18.229166666666664,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 442.763671875,
        "y": 459.63541666666663,
        "width": 72.92578125,
        "height": 363.28125
      },
      "gm_international": {
        "x": 442.763671875,
        "y": 1035.15625,
        "width": 72.92578125,
        "height": 32.55208333333333
      },
      "corporate": {
        "x": 442.763671875,
        "y": 1236.9791666666665,
        "width": 72.92578125,
        "height": 1.3020833333333333
      },
      "auto": {
        "x": 816.50830078125,
        "y": 558.59375,
        "width": 72.92578125,
        "height": 395.8333333333333
      },
      "gm_financial": {
        "x": 816.50830078125,
        "y": 1268.2291666666665,
        "width": 72.92578125,
        "height": 39.0625
      },
      "revenue": {
        "x": 1190.2529296875,
        "y": 647.1354166666666,
        "width": 72.92578125,
        "height": 433.59375
      },
      "gross_profit": {
        "x": 1563.99755859375,
        "y": 565.1041666666666,
        "width": 72.92578125,
        "height": 58.59375
      },
      "cost_of_sales": {
        "x": 1563.99755859375,
        "y": 821.6145833333333,
        "width": 72.92578125,
        "height": 375
      },
      "operating_profit": {
        "x": 1940.3466796875,
        "y": 479.16666666666663,
        "width": 72.92578125,
        "height": 9.114583333333332
      },
      "operating_expenses": {
        "x": 1940.3466796875,
        "y": 667.96875,
        "width": 72.92578125,
        "height": 49.479166666666664
      },
      "interest": {
        "x": 2207.30712890625,
        "y": 436.19791666666663,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "net_profit": {
        "x": 2311.48681640625,
        "y": 376.3020833333333,
        "width": 72.92578125,
        "height": 11.71875
      },
      "tax": {
        "x": 2311.48681640625,
        "y": 591.1458333333333,
        "width": 72.92578125,
        "height": 1.3020833333333333
      },
      "other": {
        "x": 2311.48681640625,
        "y": 785.15625,
        "width": 72.92578125,
        "height": 31.25
      },
      "sga": {
        "x": 2311.48681640625,
        "y": 1010.4166666666666,
        "width": 72.92578125,
        "height": 18.229166666666664
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 479.2265625,
            "top": 363.28125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "(1%) Y/Y",
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
            "x": 479.2265625,
            "top": 940.1041666666666,
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
            "x": 397.18505859375,
            "top": 1027.34375,
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
            "x": 479.2265625,
            "top": 1140.625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 328.166015625,
            "top": 1213.5416666666665,
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
            "x": 852.97119140625,
            "top": 410.15625,
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
                "text": "(1%) Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gm_financial": {
        "blocks": [
          {
            "x": 852.97119140625,
            "top": 1170.5729166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 794.3701171875,
            "top": 1264.3229166666665,
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
            "x": 1226.7158203125,
            "top": 497.3958333333333,
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
                "text": "(0%) Y/Y",
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
            "x": 1600.46044921875,
            "top": 377.60416666666663,
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
                "text": "14% margin",
                "size": 27.34375,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
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
            "x": 1976.8095703125,
            "top": 291.66666666666663,
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
                "text": "2% margin",
                "size": 27.34375,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.34375,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 332.03125,
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
                "text": "3% margin",
                "size": 27.34375,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 1600.46044921875,
            "top": 1212.2395833333333,
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
                "size": 33.854166666666664
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1976.8095703125,
            "top": 733.0729166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.854166666666664
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2243.77001953125,
            "top": 453.125,
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
      "tax": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 550.78125,
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
            "top": 760.4166666666666,
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
            "top": 979.1666666666666,
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
      "x": 1122.5361328125,
      "y": 264.32291666666663,
      "width": 204.45263671875,
      "height": 205.72916666666666
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 35.16064453125,
      "y": 572.9166666666666,
      "width": 364.62890625,
      "height": 197.91666666666666
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2025 财年第三季度",
      "meta": {
        "title": "GM 2025 财年第三季度利润表",
        "titleSize": 111.97916666666666
      },
      "nodes": {
        "gm_north_america": {
          "label": "通用北美",
          "notes": [
            "同比 (1%)"
          ]
        },
        "gm_international": {
          "label": "通用国际",
          "notes": [
            "同比 +4%"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 (3%)"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 (1%)"
          ]
        },
        "gm_financial": {
          "label": "通用金融",
          "notes": [
            "同比 +8%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (0%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 14%",
            "同比 (6 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 (5 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "interest": {
          "label": "利息收入"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 (4 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他"
        },
        "sga": {
          "label": "销售及管理（SG&A）"
        }
      },
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 479.2265625,
                "top": 363.28125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 (1%)",
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
                "x": 479.2265625,
                "top": 940.1041666666666,
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
                "x": 397.18505859375,
                "top": 1027.34375,
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
                "x": 479.2265625,
                "top": 1140.625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 1213.5416666666665,
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
                "x": 852.97119140625,
                "top": 410.15625,
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
                    "text": "同比 (1%)",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 852.97119140625,
                "top": 1170.5729166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 794.3701171875,
                "top": 1264.3229166666665,
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
                "x": 1226.7158203125,
                "top": 497.3958333333333,
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
                    "text": "同比 (0%)",
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
                "x": 1600.46044921875,
                "top": 377.60416666666663,
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
                    "text": "利润率 14%",
                    "size": 27.34375,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
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
                "x": 1976.8095703125,
                "top": 291.66666666666663,
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
                    "text": "利润率 2%",
                    "size": 27.34375,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.34375,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 332.03125,
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
                    "text": "利润率 3%",
                    "size": 27.34375,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 1600.46044921875,
                "top": 1212.2395833333333,
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
                    "size": 33.854166666666664
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1976.8095703125,
                "top": 733.0729166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.854166666666664
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2243.77001953125,
                "top": 453.125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "利息收入",
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
          "tax": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 550.78125,
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
                "top": 760.4166666666666,
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
                "top": 950.5208333333334,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售及管理",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "（SG&A）",
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
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.3\" y=\"540.4\" text-anchor=\"start\" font-size=\"39.06\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g>"
    }
  },
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.3\" y=\"540.4\" text-anchor=\"start\" font-size=\"39.06\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g>"
});})();
