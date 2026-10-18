(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q2-fy24",
  "name": "GM · Q2 FY24",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q2 FY24 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/gm-q2-fy24.png",
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
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "GM North America",
      "value": 40.7,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "GM International",
      "value": 3.3,
      "notes": [
        "(17%) Y/Y"
      ]
    },
    {
      "id": "auto",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Auto",
      "value": 44.1,
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
      "value": 3.9,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 0,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 48,
      "notes": [
        "+7% Y/Y"
      ],
      "valueText": "$48.0B"
    },
    {
      "id": "gross_profit",
      "col": 0,
      "order": 6,
      "type": "profit",
      "label": "Gross profit",
      "value": 9.4,
      "notes": [
        "19% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 0,
      "order": 7,
      "type": "cost",
      "label": "Cost of sales",
      "value": 38.6
    },
    {
      "id": "operating_profit",
      "col": 0,
      "order": 8,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.9,
      "notes": [
        "8% margin",
        "+2pp Y/Y"
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
      "value": 5.5
    },
    {
      "id": "net_profit",
      "col": 0,
      "order": 11,
      "type": "profit",
      "label": "Net profit",
      "value": 2.9,
      "notes": [
        "6% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 0,
      "order": 12,
      "type": "cost",
      "label": "Tax",
      "value": 0.8
    },
    {
      "id": "interest",
      "col": 0,
      "order": 10,
      "type": "cost",
      "label": "Interest",
      "value": 0.2
    },
    {
      "id": "other",
      "col": 0,
      "order": 13,
      "type": "cost",
      "label": "Other",
      "value": 3.1
    },
    {
      "id": "sga",
      "col": 0,
      "order": 14,
      "type": "cost",
      "label": "SG&A",
      "value": 2.4
    },
    {
      "id": "cruise",
      "label": "Cruise",
      "value": 0.025,
      "valueText": "$25M",
      "type": "source",
      "notes": [
        "(4%) Y/Y"
      ],
      "col": 1,
      "order": 1
    }
  ],
  "nonNodeMetrics": [],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 40.7,
      "sourceWidth": 387,
      "targetWidth": 387,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 3.3,
      "sourceWidth": 31,
      "targetWidth": 32,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 44.1,
      "sourceWidth": 419,
      "targetWidth": 418,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "target": "revenue",
      "value": 0.025,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 0,
      "targetOrder": 1,
      "source": "cruise",
      "y0": 1163,
      "y1": 1068.5,
      "linkTint": "#89cfe8",
      "curve": {
        "x0": 889,
        "x1": 1188,
        "c1x": 1038,
        "c1y": 1163,
        "c2x": 1062,
        "c2y": 1068.5
      }
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 3.9,
      "sourceWidth": 37,
      "targetWidth": 36,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.4,
      "sourceWidth": 89,
      "targetWidth": 88,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 38.6,
      "sourceWidth": 368,
      "targetWidth": 367,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.9,
      "sourceWidth": 36,
      "targetWidth": 36,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.5,
      "sourceWidth": 52,
      "targetWidth": 52,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.9,
      "sourceWidth": 27,
      "targetWidth": 27,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.8,
      "sourceWidth": 7,
      "targetWidth": 6,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 3.1,
      "sourceWidth": 30,
      "targetWidth": 30,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.4,
      "sourceWidth": 22,
      "targetWidth": 22,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 440,
        "y": 487,
        "width": 72,
        "height": 387
      },
      "gm_international": {
        "x": 440,
        "y": 1032,
        "width": 72,
        "height": 31
      },
      "auto": {
        "x": 816,
        "y": 564,
        "width": 72,
        "height": 419
      },
      "gm_financial": {
        "x": 814,
        "y": 1335,
        "width": 72,
        "height": 37
      },
      "revenue": {
        "x": 1188,
        "y": 649,
        "width": 72,
        "height": 457
      },
      "gross_profit": {
        "x": 1559,
        "y": 569,
        "width": 72,
        "height": 88
      },
      "cost_of_sales": {
        "x": 1564,
        "y": 801,
        "width": 72,
        "height": 367
      },
      "operating_profit": {
        "x": 1935,
        "y": 490,
        "width": 72,
        "height": 36
      },
      "operating_expenses": {
        "x": 1935,
        "y": 697,
        "width": 72,
        "height": 52
      },
      "net_profit": {
        "x": 2306,
        "y": 407,
        "width": 72,
        "height": 27
      },
      "tax": {
        "x": 2308,
        "y": 600,
        "width": 72,
        "height": 6
      },
      "interest": {
        "x": 2308,
        "y": 698,
        "width": 72,
        "height": 2
      },
      "other": {
        "x": 2308,
        "y": 857,
        "width": 72,
        "height": 30
      },
      "sga": {
        "x": 2308,
        "y": 1146,
        "width": 72,
        "height": 22
      },
      "cruise": {
        "x": 817,
        "y": 1161.5,
        "width": 72,
        "height": 3
      }
    },
    "routes": {},
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 476,
            "top": 390,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+9% Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gm_international": {
        "blocks": [
          {
            "x": 476,
            "top": 935,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "(17%) Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397,
            "top": 1020,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "GM International",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "auto": {
        "blocks": [
          {
            "x": 850,
            "top": 414,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Auto",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+7% Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gm_financial": {
        "blocks": [
          {
            "x": 850,
            "top": 1235,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+12% Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 786,
            "top": 1326,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "GM Financial",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1223,
            "top": 497,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+7% Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1594,
            "top": 378,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "19% margin",
                "size": 27,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1600,
            "top": 1182,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 35,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1971,
            "top": 304,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "8% margin",
                "size": 27,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1971,
            "top": 766,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 35,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 35
              },
              {
                "text": "$value",
                "size": 35
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2492,
            "top": 360,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "6% margin",
                "size": 27,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2492,
            "top": 563,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2492,
            "top": 658,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2492,
            "top": 829,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2492,
            "top": 1121,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              }
            ]
          }
        ]
      },
      "cruise": {
        "blocks": [
          {
            "x": 853,
            "top": 1061,
            "anchor": "middle",
            "lineGap": 14,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "(4%) Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 785,
            "top": 1139.5,
            "anchor": "end",
            "lines": [
              {
                "text": "Cruise",
                "size": 39,
                "weight": 800
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
      "x": 1110,
      "y": 246,
      "width": 226,
      "height": 210
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 20,
      "y": 615,
      "width": 388,
      "height": 202
    }
  ],
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"585\" text-anchor=\"start\" font-size=\"39\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g>",
  "i18n": {
    "zh": {
      "name": "GM · 2024 财年第二季度",
      "meta": {
        "title": "GM 2024 财年第二季度利润表",
        "titleSize": 113
      },
      "nodes": {
        "gm_north_america": {
          "label": "通用北美",
          "notes": [
            "同比 +9%"
          ]
        },
        "gm_international": {
          "label": "通用国际",
          "notes": [
            "同比 (17%)"
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
            "同比 +12%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +7%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 19%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 8%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 +0 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "interest": {
          "label": "利息"
        },
        "other": {
          "label": "其他"
        },
        "sga": {
          "label": "销售及管理（SG&A）"
        },
        "cruise": {
          "label": "Cruise 自动驾驶",
          "notes": [
            "同比 (4%)"
          ]
        }
      },
      "nonNodeMetrics": {},
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 476,
                "top": 390,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gm_international": {
            "blocks": [
              {
                "x": 476,
                "top": 935,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 (17%)",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397,
                "top": 1020,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "通用国际",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "auto": {
            "blocks": [
              {
                "x": 850,
                "top": 414,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 850,
                "top": 1235,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 786,
                "top": 1326,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "通用金融",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1223,
                "top": 497,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1594,
                "top": 378,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 19%",
                    "size": 27,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1600,
                "top": 1182,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1971,
                "top": 304,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 8%",
                    "size": 27,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1971,
                "top": 766,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 35
                  },
                  {
                    "text": "$value",
                    "size": 35
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2492,
                "top": 360,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2492,
                "top": 563,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2492,
                "top": 658,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2492,
                "top": 829,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2492,
                "top": 1121,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售及管理（SG&A）",
                    "size": 22,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  }
                ]
              }
            ]
          },
          "cruise": {
            "blocks": [
              {
                "x": 853,
                "top": 1061,
                "anchor": "middle",
                "lineGap": 14,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 785,
                "top": 1139.5,
                "anchor": "end",
                "lines": [
                  {
                    "text": "Cruise 自动驾驶",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"585\" text-anchor=\"start\" font-size=\"39\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g>"
    }
  }
});})();
