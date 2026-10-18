(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q1-fy24",
  "name": "GM · Q1 FY24",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q1 FY24 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/gm-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
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
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "GM North America",
      "value": 36.1,
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "GM International",
      "value": 3.1,
      "notes": [
        "(17%) Y/Y"
      ]
    },
    {
      "id": "corporate",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Corporate",
      "value": 0.032,
      "notes": [
        "+3% Y/Y"
      ],
      "valueText": "$32M"
    },
    {
      "id": "auto",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Auto",
      "value": 39.2,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "gm_financial",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "GM Financial",
      "value": 3.8,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 0,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 43,
      "notes": [
        "+8% Y/Y"
      ],
      "valueText": "$43.0B"
    },
    {
      "id": "gross_profit",
      "col": 0,
      "order": 6,
      "type": "profit",
      "label": "Gross profit",
      "value": 9,
      "notes": [
        "21% margin",
        "+3pp Y/Y"
      ],
      "valueText": "$9.0B"
    },
    {
      "id": "cost_of_sales",
      "col": 0,
      "order": 7,
      "type": "cost",
      "label": "Cost of sales",
      "value": 34,
      "notes": [],
      "valueText": "($34.0B)"
    },
    {
      "id": "operating_profit",
      "col": 0,
      "order": 8,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.7,
      "notes": [
        "9% margin",
        "+3pp Y/Y"
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
      "value": 5.3,
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 0,
      "order": 11,
      "type": "profit",
      "label": "Net profit",
      "value": 3,
      "notes": [
        "7% margin",
        "+1pp Y/Y"
      ],
      "valueText": "$3.0B"
    },
    {
      "id": "tax",
      "col": 0,
      "order": 12,
      "type": "cost",
      "label": "Tax",
      "value": 0.8,
      "notes": []
    },
    {
      "id": "other",
      "col": 0,
      "order": 13,
      "type": "cost",
      "label": "Other",
      "value": 3.1,
      "notes": []
    },
    {
      "id": "sga",
      "col": 0,
      "order": 14,
      "type": "cost",
      "label": "SG&A",
      "value": 2.2,
      "notes": []
    },
    {
      "id": "interest",
      "label": "Interest",
      "type": "cost",
      "value": 0.022,
      "notes": [],
      "valueText": "($22M)"
    },
    {
      "id": "cruise",
      "label": "Cruise",
      "type": "source",
      "value": 0.025,
      "notes": [
        "+0% Y/Y"
      ],
      "valueText": "$25M"
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 36.1,
      "sourceWidth": 385.46484375,
      "targetWidth": 385.46484375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 3.1,
      "sourceWidth": 33.8583984375,
      "targetWidth": 32.55615234375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.032,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 39.2,
      "sourceWidth": 419.3232421875,
      "targetWidth": 418.02099609375,
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
      "value": 3.8,
      "sourceWidth": 41.671875,
      "targetWidth": 40.36962890625,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9,
      "sourceWidth": 96.3662109375,
      "targetWidth": 96.3662109375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 34,
      "sourceWidth": 363.32666015625,
      "targetWidth": 362.0244140625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.7,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.3,
      "sourceWidth": 55.99658203125,
      "targetWidth": 57.298828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.8,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.022,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 3.1,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.2,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 438.85693359375,
        "y": 524.80517578125,
        "width": 72.92578125,
        "height": 385.46484375
      },
      "gm_international": {
        "x": 438.85693359375,
        "y": 1061.33056640625,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "corporate": {
        "x": 438.85693359375,
        "y": 1228.01806640625,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "auto": {
        "x": 812.6015625,
        "y": 596.4287109375,
        "width": 72.92578125,
        "height": 419.3232421875
      },
      "cruise": {
        "x": 812.6015625,
        "y": 1207.18212890625,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "gm_financial": {
        "x": 812.6015625,
        "y": 1345.22021484375,
        "width": 72.92578125,
        "height": 41.671875
      },
      "revenue": {
        "x": 1186.34619140625,
        "y": 677.16796875,
        "width": 72.92578125,
        "height": 459.69287109375
      },
      "gross_profit": {
        "x": 1558.78857421875,
        "y": 600.33544921875,
        "width": 72.92578125,
        "height": 96.3662109375
      },
      "cost_of_sales": {
        "x": 1560.0908203125,
        "y": 846.4599609375,
        "width": 72.92578125,
        "height": 362.0244140625
      },
      "operating_profit": {
        "x": 1929.9287109375,
        "y": 522.20068359375,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "operating_expenses": {
        "x": 1931.23095703125,
        "y": 707.11962890625,
        "width": 72.92578125,
        "height": 57.298828125
      },
      "net_profit": {
        "x": 2308.88232421875,
        "y": 446.67041015625,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "tax": {
        "x": 2308.88232421875,
        "y": 649.82080078125,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "interest": {
        "x": 2308.88232421875,
        "y": 751.39599609375,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "other": {
        "x": 2308.88232421875,
        "y": 889.43408203125,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "sga": {
        "x": 2308.88232421875,
        "y": 1118.62939453125,
        "width": 72.92578125,
        "height": 23.4404296875
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 475.31982421875,
            "top": 425.83447265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+10% Y/Y",
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
            "x": 475.31982421875,
            "top": 963.662109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "(17%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 1053.51708984375,
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
            "x": 475.31982421875,
            "top": 1127.7451171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 1204.57763671875,
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
            "x": 849.064453125,
            "top": 445.3681640625,
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
                "text": "+7% Y/Y",
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
            "x": 849.064453125,
            "top": 1106.9091796875,
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
            "top": 1181.13720703125,
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
            "x": 849.064453125,
            "top": 1244.947265625,
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
            "x": 782.64990234375,
            "top": 1341.3134765625,
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
            "x": 1222.80908203125,
            "top": 526.107421875,
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
                "text": "+8% Y/Y",
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
            "x": 1595.25146484375,
            "top": 408.9052734375,
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
                "text": "21% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 1966.3916015625,
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
                "text": "9% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 1596.5537109375,
            "top": 1221.5068359375,
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
                "size": 36.462890625
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1967.69384765625,
            "top": 778.7431640625,
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
                "size": 36.462890625
              },
              {
                "text": "$value",
                "size": 36.462890625
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 389.37158203125,
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
                "text": "7% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
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
            "x": 2492.4990234375,
            "top": 606.8466796875,
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
      "interest": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 717.53759765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Interest",
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
            "x": 2492.4990234375,
            "top": 858.18017578125,
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
      },
      "sga": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 1089.97998046875,
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
      }
    }
  },
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1101.7001953125,
      "y": 273.4716796875,
      "width": 253.93798828125,
      "height": 252.6357421875
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 28.6494140625,
      "y": 612.0556640625,
      "width": 372.4423828125,
      "height": 208.359375
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2024 财年第一季度",
      "meta": {
        "title": "GM 2024 财年第一季度利润表",
        "titleSize": 111.9931640625
      },
      "nodes": {
        "gm_north_america": {
          "label": "通用北美",
          "notes": [
            "同比 +10%"
          ]
        },
        "gm_international": {
          "label": "通用国际",
          "notes": [
            "同比 (17%)"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 +3%"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +7%"
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
            "同比 +8%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 21%",
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
            "利润率 9%",
            "同比 +3 个百分点"
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
            "利润率 7%",
            "同比 +1 个百分点"
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
        "interest": {
          "label": "利息",
          "notes": []
        },
        "cruise": {
          "label": "Cruise 自动驾驶",
          "notes": [
            "同比 +0%"
          ]
        }
      },
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 475.31982421875,
                "top": 425.83447265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +10%",
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
                "x": 475.31982421875,
                "top": 963.662109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 (17%)",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 1053.51708984375,
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
                "x": 475.31982421875,
                "top": 1127.7451171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 1204.57763671875,
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
                "x": 849.064453125,
                "top": 445.3681640625,
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
                    "text": "同比 +7%",
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
                "x": 849.064453125,
                "top": 1106.9091796875,
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
                "top": 1190.63720703125,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "Cruise 自动驾驶",
                    "size": 28.6494140625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 849.064453125,
                "top": 1244.947265625,
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
                "x": 782.64990234375,
                "top": 1341.3134765625,
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
                "x": 1222.80908203125,
                "top": 526.107421875,
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
                    "text": "同比 +8%",
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
                "x": 1595.25146484375,
                "top": 408.9052734375,
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
                    "text": "利润率 21%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1966.3916015625,
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
                    "text": "利润率 9%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1596.5537109375,
                "top": 1221.5068359375,
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
                    "size": 36.462890625
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1967.69384765625,
                "top": 778.7431640625,
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
                    "size": 36.462890625
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 389.37158203125,
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
                    "text": "利润率 7%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 2492.4990234375,
                "top": 606.8466796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
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
          "interest": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 717.53759765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利息",
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
                "x": 2492.4990234375,
                "top": 858.18017578125,
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
          },
          "sga": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 1089.97998046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售及管理（SG&A）",
                    "size": 20.8359375,
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
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"585\" text-anchor=\"start\" font-size=\"39\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g><g><text x=\"169\" y=\"1437\" font-size=\"39\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  },
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"585\" text-anchor=\"start\" font-size=\"39\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g><g><text x=\"169\" y=\"1437\" font-size=\"39\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text></g>"
});})();
