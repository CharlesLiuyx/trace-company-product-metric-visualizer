(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q1-fy23",
  "name": "GM · Q1 FY23",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q1 FY23 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/gm-q1-fy23.png",
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
      "value": 32.9,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "label": "GM International",
      "value": 3.7,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "corporate",
      "label": "Corporate",
      "value": 0.031,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(42%) Y/Y"
      ],
      "valueText": "$31M"
    },
    {
      "id": "auto",
      "label": "Auto",
      "value": 36.6,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+12% Y/Y"
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
        "(4%) Y/Y"
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
        "+6% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 40,
      "type": "hub",
      "col": 0,
      "order": 6,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 7.7,
      "type": "profit",
      "col": 0,
      "order": 7,
      "notes": [
        "19% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 32.2,
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
      "label": "Operating Expenses",
      "value": 5.2,
      "type": "cost",
      "col": 0,
      "order": 10,
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.2,
      "type": "profit",
      "col": 0,
      "order": 11,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2.3,
      "type": "profit",
      "col": 0,
      "order": 12,
      "notes": [
        "6% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.4,
      "type": "cost",
      "col": 0,
      "order": 13,
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.5,
      "type": "cost",
      "col": 0,
      "order": 14,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2.6,
      "type": "cost",
      "col": 0,
      "order": 15,
      "notes": []
    }
  ],
  "nonNodeMetrics": [],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 32.9,
      "sourceWidth": 330,
      "targetWidth": 330,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 3.7,
      "sourceWidth": 37,
      "targetWidth": 37,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.031,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 36.6,
      "sourceWidth": 368,
      "targetWidth": 367,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cruise",
      "target": "revenue",
      "value": 0.025,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 3.3,
      "sourceWidth": 34,
      "targetWidth": 34,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.7,
      "sourceWidth": 78,
      "targetWidth": 78,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 32.2,
      "sourceWidth": 325,
      "targetWidth": 325,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.6,
      "sourceWidth": 26,
      "targetWidth": 26,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.2,
      "sourceWidth": 52,
      "targetWidth": 52,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.2,
      "sourceWidth": 22,
      "targetWidth": 23,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 4,
      "targetWidth": 3,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "c1x": 2291.953125,
        "c2x": 2278.9306640625
      }
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.5,
      "sourceWidth": 26,
      "targetWidth": 26,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.6,
      "sourceWidth": 26,
      "targetWidth": 26,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 446,
        "y": 415,
        "width": 72,
        "height": 330
      },
      "gm_international": {
        "x": 446,
        "y": 907,
        "width": 72,
        "height": 37
      },
      "corporate": {
        "x": 446,
        "y": 1081,
        "width": 72,
        "height": 1
      },
      "auto": {
        "x": 814,
        "y": 530,
        "width": 73,
        "height": 368
      },
      "cruise": {
        "x": 814,
        "y": 1160,
        "width": 73,
        "height": 2
      },
      "gm_financial": {
        "x": 819,
        "y": 1304,
        "width": 73,
        "height": 34
      },
      "revenue": {
        "x": 1193,
        "y": 642,
        "width": 73,
        "height": 403
      },
      "gross_profit": {
        "x": 1560,
        "y": 568,
        "width": 73,
        "height": 78
      },
      "cost_of_sales": {
        "x": 1565,
        "y": 782,
        "width": 73,
        "height": 325
      },
      "operating_profit": {
        "x": 1953,
        "y": 483,
        "width": 73,
        "height": 26
      },
      "operating_expenses": {
        "x": 1946,
        "y": 695,
        "width": 73,
        "height": 52
      },
      "other_income": {
        "x": 2191,
        "y": 506,
        "width": 73,
        "height": 1
      },
      "net_profit": {
        "x": 2314,
        "y": 406,
        "width": 73,
        "height": 24
      },
      "tax": {
        "x": 2314,
        "y": 655,
        "width": 73,
        "height": 3
      },
      "sga": {
        "x": 2314,
        "y": 850,
        "width": 73,
        "height": 26
      },
      "other": {
        "x": 2314,
        "y": 1083,
        "width": 73,
        "height": 26
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 319.05029296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "+12% Y/Y",
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
            "x": 481.8310546875,
            "top": 811.29931640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 902.19921875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "GM International",
                "size": 37.76513671875,
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
            "top": 987.1025390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "(42%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 1054.8193359375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Corporate",
                "size": 37.76513671875,
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
            "top": 380.255859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Auto",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "+12% Y/Y",
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
            "top": 1057.423828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 770.9296875,
            "top": 1135.55859375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cruise",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "gm_financial": {
        "blocks": [
          {
            "x": 855.57568359375,
            "top": 1208.484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 781.34765625,
            "top": 1294.4326171875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "GM Financial",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1229.3203125,
            "top": 492.2490234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "+11% Y/Y",
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
            "x": 1596.5537109375,
            "top": 385.46484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "19% margin",
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1600.46044921875,
            "top": 1122.5361328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1989.83203125,
            "top": 294.3076171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1982.0185546875,
            "top": 768.3251953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 37.76513671875
              },
              {
                "text": "$value",
                "size": 37.76513671875
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2226.8408203125,
            "top": 513.0849609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
      "net_profit": {
        "blocks": [
          {
            "x": 2496.40576171875,
            "top": 388.0693359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875
              },
              {
                "text": "6% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 2493.80126953125,
            "top": 599.033203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2493.80126953125,
            "top": 823.01953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2493.80126953125,
            "top": 1054.8193359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"530\" font-size=\"38\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g><text x=\"170\" y=\"1435\" font-size=\"38\" font-weight=\"700\" fill=\"#000\">Source: Quarterly results</text>",
  "rasterAnnotations": [
    {
      "id": "company-logo",
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1127.7451171875,
      "y": 246.12451171875,
      "width": 205.7548828125,
      "height": 204.45263671875,
      "clearance": true
    },
    {
      "id": "gm-north-america-brand-cluster",
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 36.462890625,
      "y": 565.1748046875,
      "width": 364.62890625,
      "height": 195.3369140625
    }
  ],
  "i18n": {
    "zh": {
      "name": "通用汽车 · 2023 财年第一季度",
      "meta": {
        "title": "通用汽车 2023 财年第一季度利润表",
        "titleSize": 105
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
            "同比 +12%"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 (42%)"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +12%"
          ]
        },
        "cruise": {
          "label": "Cruise 自动驾驶",
          "notes": [
            "同比 (4%)"
          ]
        },
        "gm_financial": {
          "label": "通用金融",
          "notes": [
            "同比 +6%"
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
            "利润率 19%",
            "同比 +1 个百分点"
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
          "label": "营业费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 (2 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sga": {
          "label": "销售及管理（SG&A）",
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
                "top": 319.05029296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "同比 +12%",
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
                "x": 481.8310546875,
                "top": 811.29931640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 902.19921875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "通用国际",
                    "size": 37.76513671875,
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
                "top": 987.1025390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "同比 (42%)",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 1054.8193359375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 37.76513671875,
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
                "top": 380.255859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "同比 +12%",
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
                "top": 1057.423828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 770.9296875,
                "top": 1140.95859375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "Cruise 自动驾驶",
                    "size": 32.55615234375,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 855.57568359375,
                "top": 1208.484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 781.34765625,
                "top": 1294.4326171875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "通用金融",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1229.3203125,
                "top": 492.2490234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "同比 +11%",
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
                "x": 1596.5537109375,
                "top": 385.46484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "利润率 19%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 1600.46044921875,
                "top": 1122.5361328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1989.83203125,
                "top": 294.3076171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "利润率 6%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1982.0185546875,
                "top": 768.3251953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2226.8408203125,
                "top": 513.0849609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
          "net_profit": {
            "blocks": [
              {
                "x": 2496.40576171875,
                "top": 388.0693359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 24.74267578125,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 599.033203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
          "sga": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 807.01953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售及管理",
                    "size": 28,
                    "weight": 800
                  },
                  {
                    "text": "SG&A",
                    "size": 26,
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
                "x": 2493.80126953125,
                "top": 1054.8193359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
      },
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"530\" font-size=\"38\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g><text x=\"170\" y=\"1435\" font-size=\"38\" font-weight=\"700\" fill=\"#000\">来源：季度业绩</text>"
    }
  }
});})();
