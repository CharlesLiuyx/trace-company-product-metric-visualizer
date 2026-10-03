(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q1-fy25",
  "name": "GM · Q1 FY25",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q1 FY25 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/gm-q1-fy25.png",
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
      "value": 37.4,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "GM International",
      "value": 2.4,
      "notes": [
        "(21%) Y/Y"
      ]
    },
    {
      "id": "corporate",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Corporate",
      "value": 0.046,
      "notes": [
        "+44% Y/Y"
      ],
      "valueText": "$46M"
    },
    {
      "id": "auto",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Auto",
      "value": 39.9,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "gm_financial",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "GM Financial",
      "value": 4.2,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 0,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 44.0,
      "notes": [
        "+2% Y/Y"
      ],
      "valueText": "$44.0B"
    },
    {
      "id": "gross_profit",
      "col": 0,
      "order": 6,
      "type": "profit",
      "label": "Gross profit",
      "value": 8.8,
      "notes": [
        "20% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 0,
      "order": 7,
      "type": "cost",
      "label": "Cost of sales",
      "value": 35.2
    },
    {
      "id": "operating_profit",
      "col": 0,
      "order": 8,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.4,
      "notes": [
        "8% margin",
        "(1pp) Y/Y"
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
      "id": "interest",
      "col": 0,
      "order": 10,
      "type": "profit",
      "label": "Interest",
      "value": 0.2
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
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 0,
      "order": 12,
      "type": "cost",
      "label": "Tax",
      "value": 0.7
    },
    {
      "id": "other",
      "col": 0,
      "order": 13,
      "type": "cost",
      "label": "Other",
      "value": 3.5
    },
    {
      "id": "sga",
      "col": 0,
      "order": 14,
      "type": "cost",
      "label": "SG&A",
      "value": 2.0,
      "valueText": "($2.0B)"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "cruise",
      "representation": "flow",
      "label": "Cruise",
      "value": 0.001,
      "type": "source",
      "valueText": "$1M",
      "notes": [
        "(96%) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 37.4,
      "sourceWidth": 357,
      "targetWidth": 357,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 2.4,
      "sourceWidth": 23,
      "targetWidth": 23,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.046,
      "sourceWidth": 1,
      "targetWidth": 0.1,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 39.9,
      "sourceWidth": 380,
      "targetWidth": 379,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "sourceRoute": "cruise",
      "target": "revenue",
      "value": 0.001,
      "width": 1,
      "targetOrder": 1
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 4.2,
      "sourceWidth": 39,
      "targetWidth": 40,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 8.8,
      "sourceWidth": 85,
      "targetWidth": 85,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 35.2,
      "sourceWidth": 335,
      "targetWidth": 336,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.4,
      "sourceWidth": 33,
      "targetWidth": 33,
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
      "value": 2.7,
      "sourceWidth": 27,
      "targetWidth": 27,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 6,
      "targetWidth": 6,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "c1x": 2287,
        "c2x": 2290
      }
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 3.5,
      "sourceWidth": 34,
      "targetWidth": 34,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2,
      "sourceWidth": 18,
      "targetWidth": 19,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 437,
        "y": 488,
        "width": 72,
        "height": 357
      },
      "gm_international": {
        "x": 437,
        "y": 984,
        "width": 72,
        "height": 23
      },
      "corporate": {
        "x": 437,
        "y": 1138,
        "width": 72,
        "height": 1
      },
      "auto": {
        "x": 811,
        "y": 564,
        "width": 72,
        "height": 380
      },
      "gm_financial": {
        "x": 811,
        "y": 1257,
        "width": 72,
        "height": 39
      },
      "revenue": {
        "x": 1187,
        "y": 649,
        "width": 72,
        "height": 420
      },
      "gross_profit": {
        "x": 1558,
        "y": 560,
        "width": 72,
        "height": 85
      },
      "cost_of_sales": {
        "x": 1558,
        "y": 841,
        "width": 72,
        "height": 336
      },
      "operating_profit": {
        "x": 1950,
        "y": 457,
        "width": 72,
        "height": 33
      },
      "operating_expenses": {
        "x": 1952,
        "y": 675,
        "width": 72,
        "height": 52
      },
      "interest": {
        "x": 2194,
        "y": 456,
        "width": 70,
        "height": 1
      },
      "net_profit": {
        "x": 2305,
        "y": 382,
        "width": 72,
        "height": 28
      },
      "tax": {
        "x": 2305,
        "y": 610,
        "width": 72,
        "height": 6
      },
      "other": {
        "x": 2305,
        "y": 800,
        "width": 72,
        "height": 34
      },
      "sga": {
        "x": 2305,
        "y": 1073,
        "width": 72,
        "height": 19
      }
    },
    "routes": {
      "cruise": {
        "x": 883,
        "y": 1114,
        "width": 0,
        "height": 1
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 472.72,
            "top": 393.28,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "+4% Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gm_international": {
        "blocks": [
          {
            "x": 474.02,
            "top": 890.74,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "(21%) Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.19,
            "top": 971.97,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "GM International",
                "size": 39.07,
                "weight": 800
              }
            ]
          }
        ]
      },
      "corporate": {
        "blocks": [
          {
            "x": 473,
            "top": 1041.8,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "+44% Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334.68,
            "top": 1113.42,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Corporate",
                "size": 39.07,
                "weight": 800
              }
            ]
          }
        ]
      },
      "auto": {
        "blocks": [
          {
            "x": 846.46,
            "top": 414.11,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Auto",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "+2% Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gm_financial": {
        "blocks": [
          {
            "x": 846.46,
            "top": 1160.3,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "+9% Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 770.93,
            "top": 1252.76,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "GM Financial",
                "size": 39.07,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1221.51,
            "top": 500.06,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "+2% Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1596.55,
            "top": 373.74,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "20% margin",
                "size": 27.35,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1596.55,
            "top": 1192.86,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 35.16,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35.16
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1987.23,
            "top": 270.87,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "8% margin",
                "size": 27.35,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1987.23,
            "top": 746.19,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 35.16,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 35.16,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.86
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2229.45,
            "top": 474.02,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 2492.5,
            "top": 312.54,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07
              },
              {
                "text": "6% margin",
                "size": 27.35,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.35,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2492.5,
            "top": 578.2,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 2492.5,
            "top": 781.35,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 2492.5,
            "top": 1045.7,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
      },
      "cruise": {
        "blocks": [
          {
            "x": 843.85546875,
            "top": 1019.65869140625,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "(96%) Y/Y",
                "size": 27,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 770.9296875,
            "top": 1089.97998046875,
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
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"585\" text-anchor=\"start\" font-size=\"39\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g>",
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1096,
      "y": 235,
      "width": 252,
      "height": 250
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 9,
      "y": 588,
      "width": 432,
      "height": 241
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2025 财年第一季度",
      "meta": {
        "title": "GM 2025 财年第一季度利润表",
        "titleSize": 113
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
            "同比 (21%)"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 +44%"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +2%"
          ]
        },
        "gm_financial": {
          "label": "通用金融",
          "notes": [
            "同比 +9%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +2%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 20%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 8%",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "interest": {
          "label": "利息"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 (0 个百分点)"
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
                "x": 472.72,
                "top": 393.28,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gm_international": {
            "blocks": [
              {
                "x": 474.02,
                "top": 890.74,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "同比 (21%)",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.19,
                "top": 971.9699999999999,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用国际",
                    "size": 39.07,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "corporate": {
            "blocks": [
              {
                "x": 473,
                "top": 1041.8,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "同比 +44%",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334.68,
                "top": 1113.42,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 39.07,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "auto": {
            "blocks": [
              {
                "x": 846.46,
                "top": 414.11,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 846.46,
                "top": 1160.3,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 770.93,
                "top": 1252.76,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用金融",
                    "size": 39.07,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1221.51,
                "top": 500.06,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1596.55,
                "top": 373.74,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "利润率 20%",
                    "size": 27.35,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1596.55,
                "top": 1192.86,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 35.16,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35.16
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1987.23,
                "top": 270.87,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "利润率 8%",
                    "size": 27.35,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1987.23,
                "top": 746.19,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营",
                    "size": 35.16,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 35.16,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.86
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2229.45,
                "top": 474.02,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 2492.5,
                "top": 312.54,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.35,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.35,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2492.5,
                "top": 578.2,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 2492.5,
                "top": 781.35,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 2492.5,
                "top": 1045.7,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售及管理（SG&A）",
                    "size": 22,
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
          "cruise": {
            "blocks": [
              {
                "x": 843.85546875,
                "top": 1019.65869140625,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 (96%)",
                    "size": 27,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 770.9296875,
                "top": 1089.97998046875,
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
