(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q4-fy23",
  "name": "GM · Q4 FY23",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q4 FY23 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/gm-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 122.4111328125,
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
      "value": 35.2,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(1%) Y/Y"
      ],
      "valueText": "$35.2B"
    },
    {
      "id": "gm_international",
      "label": "GM International",
      "value": 3.9,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(9%) Y/Y"
      ],
      "valueText": "$3.9B"
    },
    {
      "id": "corporate",
      "label": "Corporate",
      "value": 0.1,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+118% Y/Y"
      ],
      "valueText": "$0.1B"
    },
    {
      "id": "auto",
      "label": "Auto",
      "value": 39.3,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(1%) Y/Y"
      ],
      "valueText": "$39.3B"
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
      "value": 3.7,
      "type": "source",
      "col": 0,
      "order": 5,
      "notes": [
        "+14% Y/Y"
      ],
      "valueText": "$3.7B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 43.0,
      "type": "hub",
      "col": 0,
      "order": 6,
      "notes": [
        "(0%) Y/Y"
      ],
      "valueText": "$43.0B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 6.4,
      "type": "profit",
      "col": 0,
      "order": 7,
      "notes": [
        "15% margin",
        "(5pp) Y/Y"
      ],
      "valueText": "$6.4B"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 36.6,
      "type": "cost",
      "col": 0,
      "order": 8,
      "valueText": "($36.6B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.9,
      "type": "profit",
      "col": 0,
      "order": 9,
      "notes": [
        "2% margin",
        "(4pp) Y/Y"
      ],
      "valueText": "$0.9B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating Expenses",
      "value": 5.5,
      "type": "cost",
      "col": 0,
      "order": 10,
      "valueText": "($5.5B)"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.8,
      "type": "profit",
      "col": 0,
      "order": 11,
      "valueText": "$0.8B"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.3,
      "type": "profit",
      "col": 0,
      "order": 12,
      "valueText": "$0.3B"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2.0,
      "type": "profit",
      "col": 0,
      "order": 13,
      "notes": [
        "5% margin",
        "+0pp Y/Y"
      ],
      "valueText": "$2.0B"
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 3.1,
      "type": "cost",
      "col": 0,
      "order": 14,
      "valueText": "($3.1B)"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.4,
      "type": "cost",
      "col": 0,
      "order": 15,
      "valueText": "($2.4B)"
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 35.2,
      "sourceWidth": 376.34912109375,
      "targetWidth": 376.34912109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 3.9,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 39.3,
      "sourceWidth": 419.3232421875,
      "targetWidth": 419.3232421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cruise",
      "target": "revenue",
      "value": 0.025,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 3.7,
      "sourceWidth": 40.36962890625,
      "targetWidth": 39.0673828125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 6.4,
      "sourceWidth": 69.01904296875,
      "targetWidth": 67.716796875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 36.6,
      "sourceWidth": 390.673828125,
      "targetWidth": 390.673828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.9,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.5,
      "sourceWidth": 58.60107421875,
      "targetWidth": 57.298828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.9,
      "sourceWidth": 9.11572265625,
      "targetWidth": 10.41796875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "tax",
      "target": "net_profit",
      "value": 0.8,
      "sourceWidth": 7.8134765625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "curve": {
        "c1x": 2285.44189453125,
        "c2x": 2285.44189453125
      }
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 1.35,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "curve": {
        "c1x": 2285.44189453125,
        "c2x": 2285.44189453125
      }
    },
    {
      "source": "operating_expenses",
      "target": "other_expense",
      "value": 3.1,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.4,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 440.1591796875,
        "y": 483.13330078125,
        "width": 72.92578125,
        "height": 376.34912109375
      },
      "gm_international": {
        "x": 440.1591796875,
        "y": 1015.751953125,
        "width": 72.92578125,
        "height": 41.671875
      },
      "corporate": {
        "x": 440.1591796875,
        "y": 1214.99560546875,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "auto": {
        "x": 813.90380859375,
        "y": 582.10400390625,
        "width": 72.92578125,
        "height": 419.3232421875
      },
      "cruise": {
        "x": 813.90380859375,
        "y": 1166.8125,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "gm_financial": {
        "x": 808.69482421875,
        "y": 1299.6416015625,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "revenue": {
        "x": 1187.6484375,
        "y": 677.16796875,
        "width": 72.92578125,
        "height": 459.69287109375
      },
      "gross_profit": {
        "x": 1563.99755859375,
        "y": 567.779296875,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "cost_of_sales": {
        "x": 1569.20654296875,
        "y": 823.01953125,
        "width": 72.92578125,
        "height": 390.673828125
      },
      "operating_profit": {
        "x": 1945.5556640625,
        "y": 476.6220703125,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "operating_expenses": {
        "x": 1945.5556640625,
        "y": 733.16455078125,
        "width": 72.92578125,
        "height": 57.298828125
      },
      "tax": {
        "x": 2186.47119140625,
        "y": 360.72216796875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "other_income": {
        "x": 2195.5869140625,
        "y": 489.64453125,
        "width": 72.92578125,
        "height": 1.35
      },
      "net_profit": {
        "x": 2308.88232421875,
        "y": 390.673828125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "other_expense": {
        "x": 2308.88232421875,
        "y": 928.50146484375,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "sga": {
        "x": 2308.88232421875,
        "y": 1267.08544921875,
        "width": 72.92578125,
        "height": 24.74267578125
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 382.8603515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
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
            "top": 916.78125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "(9%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.18505859375,
            "top": 1013.1474609375,
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
            "x": 479.2265625,
            "top": 1110.81591796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+118% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.18505859375,
            "top": 1192.0484375,
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
            "x": 850.36669921875,
            "top": 428.43896484375,
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
                "text": "(1%) Y/Y",
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
            "x": 850.36669921875,
            "top": 1066.53955078125,
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
            "x": 785.25439453125,
            "top": 1143.9630859375,
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
            "x": 845.15771484375,
            "top": 1198.06640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 785.25439453125,
            "top": 1294.4326171875,
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
            "x": 1224.111328125,
            "top": 523.5029296875,
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
                "text": "(0%) Y/Y",
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
            "x": 1600.46044921875,
            "top": 372.4423828125,
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
                "text": "15% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
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
            "x": 1982.0185546875,
            "top": 281.28515625,
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
                "text": "2% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
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
            "top": 339.88623046875,
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
            "top": 1224.111328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36.462890625,
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
            "x": 1982.0185546875,
            "top": 799.5791015625,
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
                "size": 36.462890625
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2222.93408203125,
            "top": 272.16943359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
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
      "other_income": {
        "blocks": [
          {
            "x": 2232.0498046875,
            "top": 505.271484375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
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
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 906.36328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
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
      },
      "sga": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 1238.43603515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
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
      }
    }
  },
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1126.44287109375,
      "y": 298.21435546875,
      "width": 208.359375,
      "height": 205.7548828125
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 36.462890625,
      "y": 618.56689453125,
      "width": 364.62890625,
      "height": 197.94140625
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2023 财年第四季度",
      "meta": {
        "title": "GM 2023 财年第四季度利润表",
        "titleSize": 114.59765625
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
            "同比 (9%)"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 +118%"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 (1%)"
          ]
        },
        "cruise": {
          "label": "Cruise 业务",
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
            "同比 (0%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 15%",
            "同比 (5 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "tax": {
          "label": "税项收益"
        },
        "other_income": {
          "label": "其他收益"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 5%",
            "同比 +0 个百分点"
          ]
        },
        "other_expense": {
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
                "x": 476.6220703125,
                "top": 382.8603515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
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
                "top": 916.78125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.18505859375,
                "top": 1013.1474609375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用国际",
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
                "x": 479.2265625,
                "top": 1110.81591796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +118%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.18505859375,
                "top": 1192.0484375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "公司及其他",
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
                "x": 850.36669921875,
                "top": 428.43896484375,
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
                    "text": "同比 (1%)",
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
                "x": 850.36669921875,
                "top": 1066.53955078125,
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
                "x": 785.25439453125,
                "top": 1143.9630859375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "Cruise 业务",
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
                "x": 845.15771484375,
                "top": 1198.06640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 785.25439453125,
                "top": 1294.4326171875,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用金融",
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
                "x": 1224.111328125,
                "top": 523.5029296875,
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
                    "text": "同比 (0%)",
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
                "x": 1600.46044921875,
                "top": 372.4423828125,
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
                    "text": "利润率 15%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 24.74267578125,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1982.0185546875,
                "top": 281.28515625,
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
                    "text": "利润率 2%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 24.74267578125,
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
                "top": 339.88623046875,
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
                    "text": "同比 +0 个百分点",
                    "size": 24.74267578125,
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
                "top": 1224.111328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 36.462890625,
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
                "x": 1982.0185546875,
                "top": 799.5791015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营",
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
                    "size": 36.462890625
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2222.93408203125,
                "top": 272.16943359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税项收益",
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
          "other_income": {
            "blocks": [
              {
                "x": 2232.0498046875,
                "top": 505.271484375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
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
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 906.36328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
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
          },
          "sga": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 1238.43603515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售及管理",
                    "size": 26,
                    "weight": 800
                  },
                  {
                    "text": "费用（SG&A）",
                    "size": 26,
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
      "annotationsSvg": "<text x=\"170\" y=\"1437\" font-size=\"39\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text><g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.27\" y=\"582\" font-size=\"39.07\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g>"
    }
  },
  "annotationsSvg": "<text x=\"170\" y=\"1437\" font-size=\"39\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text><g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.27\" y=\"582\" font-size=\"39.07\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g>"
});})();
