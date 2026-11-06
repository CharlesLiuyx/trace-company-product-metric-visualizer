(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "tsmc-q3-fy26",
  "name": "TSMC · Q3 FY26",
  "company": "TSMC",
  "meta": {
    "company": "TSMC",
    "title": "TSMC Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/tsmc-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 201,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2060,
    "hidePeriodStamp": true,
    "logoWidth": 310,
    "logoHeight": 244,
    "logoY": 218,
    "logoViewBox": "0 0 320 250",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).tsmcLogo || '',
    "logoX": 795
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#ee4b2b",
        "label": "#ee4b2b"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008e00"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#efa698",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 28,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "layout": {
    "scale": 7.66,
    "nodes": {
      "hpc": {
        "x": 450,
        "y": 387,
        "width": 73,
        "height": 244
      },
      "smartphones": {
        "x": 450,
        "y": 751,
        "width": 73,
        "height": 75
      },
      "iot": {
        "x": 450,
        "y": 930,
        "width": 73,
        "height": 14
      },
      "automotive": {
        "x": 450,
        "y": 1056,
        "width": 73,
        "height": 14
      },
      "dce": {
        "x": 450,
        "y": 1183.5,
        "width": 73,
        "height": 3.5
      },
      "others": {
        "x": 450,
        "y": 1304,
        "width": 73,
        "height": 7
      },
      "revenue": {
        "x": 917,
        "y": 619,
        "width": 73,
        "height": 358
      },
      "gross_profit": {
        "x": 1384,
        "y": 542,
        "width": 73,
        "height": 237
      },
      "cost_of_revenue": {
        "x": 1384,
        "y": 953,
        "width": 73,
        "height": 120
      },
      "operating_profit": {
        "x": 1852,
        "y": 478,
        "width": 73,
        "height": 211
      },
      "operating_expenses": {
        "x": 1852,
        "y": 834,
        "width": 73,
        "height": 28
      },
      "other": {
        "x": 2207,
        "y": 607,
        "width": 73,
        "height": 8
      },
      "net_profit": {
        "x": 2318,
        "y": 389,
        "width": 73,
        "height": 184
      },
      "tax": {
        "x": 2318,
        "y": 739,
        "width": 73,
        "height": 36
      },
      "rnd": {
        "x": 2318,
        "y": 960,
        "width": 73,
        "height": 22
      },
      "sga": {
        "x": 2318,
        "y": 1222,
        "width": 73,
        "height": 6
      }
    },
    "labels": {
      "hpc": {
        "blocks": [
          {
            "x": 427,
            "top": 445,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "High Performance",
                "size": 40,
                "weight": 800,
                "color": "#ee4b2b"
              },
              {
                "text": "Computing",
                "size": 40,
                "weight": 800,
                "color": "#ee4b2b"
              },
              {
                "text": "68% of revenue +11pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "smartphones": {
        "blocks": [
          {
            "x": 427,
            "top": 752,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Smartphones",
                "size": 40,
                "weight": 800,
                "color": "#000080"
              },
              {
                "text": "21% of revenue (9pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "iot": {
        "blocks": [
          {
            "x": 427,
            "top": 895,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Internet of Things",
                "size": 38,
                "weight": 800,
                "color": "#edc949"
              },
              {
                "text": "4% of revenue (1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "automotive": {
        "blocks": [
          {
            "x": 427,
            "top": 1025,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Automotive",
                "size": 38,
                "weight": 800,
                "color": "#ffa500"
              },
              {
                "text": "4% of revenue (1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "dce": {
        "blocks": [
          {
            "x": 420,
            "top": 1125,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Digital Consumer",
                "size": 37,
                "weight": 800,
                "color": "#0096ff"
              },
              {
                "text": "Electronics",
                "size": 37,
                "weight": 800,
                "color": "#0096ff"
              },
              {
                "text": "1% of revenue Flat Y/Y",
                "size": 30,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "others": {
        "blocks": [
          {
            "x": 422,
            "top": 1271,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Others",
                "size": 38,
                "weight": 800,
                "color": "#57d014"
              },
              {
                "text": "2% of revenue Flat Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 953,
            "top": 480,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+41% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1420,
            "top": 361,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "66% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+7pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1420,
            "top": 1095,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1888,
            "top": 296,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "59% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+8pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1888,
            "top": 878,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 35,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 35,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2243,
            "top": 628,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2408,
            "top": 401,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "51% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2499,
            "top": 725,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2499,
            "top": 940,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2499,
            "top": 1192,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "hpc",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "High Performance",
        "Computing"
      ],
      "value": 31.756,
      "color": "#ee4b2b",
      "labelColor": "#ee4b2b",
      "linkTint": "#efa698"
    },
    {
      "id": "smartphones",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Smartphones",
      "value": 9.807,
      "color": "#000080",
      "labelColor": "#000080",
      "linkTint": "#8585bf"
    },
    {
      "id": "iot",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Internet of Things",
      "value": 1.868,
      "color": "#edc949",
      "labelColor": "#edc949",
      "linkTint": "#efdfa6"
    },
    {
      "id": "automotive",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Automotive",
      "value": 1.868,
      "color": "#ffa500",
      "labelColor": "#ffa500",
      "linkTint": "#f7ce85"
    },
    {
      "id": "dce",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": [
        "Digital Consumer",
        "Electronics"
      ],
      "value": 0.467,
      "color": "#0096ff",
      "labelColor": "#0096ff",
      "linkTint": "#85c9f7"
    },
    {
      "id": "others",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "Others",
      "value": 0.934,
      "color": "#57d014",
      "labelColor": "#57d014",
      "linkTint": "#abe28e"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 46.7,
      "notes": [
        "+41% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 31,
      "notes": [
        "66% margin",
        "+7pp Y/Y"
      ],
      "valueText": "$31.0B"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 15.7
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 27.4,
      "notes": [
        "59% margin",
        "+8pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 3.6
    },
    {
      "id": "other",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 1.1
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 23.9,
      "notes": [
        "51% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 6,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 4.6
    },
    {
      "id": "rnd",
      "col": 6,
      "order": 2,
      "type": "cost",
      "label": "R&D",
      "value": 2.8
    },
    {
      "id": "sga",
      "col": 6,
      "order": 3,
      "type": "cost",
      "label": "SG&A",
      "value": 0.8
    }
  ],
  "links": [
    {
      "source": "hpc",
      "target": "revenue",
      "value": 31.756,
      "sourceWidth": 244,
      "targetWidth": 244,
      "targetOrder": 0,
      "linkTint": {
        "left": "#efa698",
        "right": "#efa698"
      }
    },
    {
      "source": "smartphones",
      "target": "revenue",
      "value": 9.807,
      "sourceWidth": 75,
      "targetWidth": 75,
      "targetOrder": 1,
      "linkTint": {
        "left": "#8585bf",
        "right": "#8585bf"
      }
    },
    {
      "source": "iot",
      "target": "revenue",
      "value": 1.868,
      "sourceWidth": 14,
      "targetWidth": 14,
      "targetOrder": 2,
      "linkTint": {
        "left": "#efdfa6",
        "right": "#efdfa6"
      }
    },
    {
      "source": "automotive",
      "target": "revenue",
      "value": 1.868,
      "sourceWidth": 14,
      "targetWidth": 14,
      "targetOrder": 3,
      "linkTint": {
        "left": "#f7ce85",
        "right": "#f7ce85"
      }
    },
    {
      "source": "dce",
      "target": "revenue",
      "value": 0.467,
      "sourceWidth": 3.5,
      "targetWidth": 4,
      "targetOrder": 4,
      "linkTint": {
        "left": "#85c9f7",
        "right": "#85c9f7"
      }
    },
    {
      "source": "others",
      "target": "revenue",
      "value": 0.934,
      "sourceWidth": 7,
      "targetWidth": 7,
      "targetOrder": 5,
      "linkTint": {
        "left": "#abe28e",
        "right": "#abe28e"
      }
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 31,
      "sourceWidth": 238,
      "targetWidth": 237,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 15.7,
      "sourceWidth": 120,
      "targetWidth": 120,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 27.4,
      "sourceWidth": 209,
      "targetWidth": 211,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.6,
      "sourceWidth": 28,
      "targetWidth": 28,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 22.8,
      "sourceWidth": 175,
      "targetWidth": 176,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 4.6,
      "sourceWidth": 36,
      "targetWidth": 36,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 1.1,
      "sourceWidth": 8,
      "targetWidth": 8,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.8,
      "sourceWidth": 21,
      "targetWidth": 22,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.8,
      "sourceWidth": 7,
      "targetWidth": 6,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "TSMC · 2026 财年第三季度",
      "meta": {
        "title": "TSMC 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 1900
      },
      "nodes": {
        "hpc": {
          "label": "高性能计算"
        },
        "smartphones": {
          "label": "智能手机"
        },
        "iot": {
          "label": "物联网"
        },
        "automotive": {
          "label": "汽车"
        },
        "dce": {
          "label": "数字消费电子"
        },
        "others": {
          "label": "其他"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +41%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 66%",
            "同比 +7 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 59%",
            "同比 +8 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 51%",
            "同比 +5 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "rnd": {
          "label": "研发"
        },
        "sga": {
          "label": "销售、一般及行政"
        }
      },
      "layout": {
        "labels": {
          "hpc": {
            "blocks": [
              {
                "x": 427,
                "top": 445,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "高性能",
                    "size": 40,
                    "weight": 800,
                    "color": "#ee4b2b"
                  },
                  {
                    "text": "计算",
                    "size": 40,
                    "weight": 800,
                    "color": "#ee4b2b"
                  },
                  {
                    "text": "收入占比 68%，同比 +11 个百分点",
                    "size": 22,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "smartphones": {
            "blocks": [
              {
                "x": 427,
                "top": 752,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "智能手机",
                    "size": 40,
                    "weight": 800,
                    "color": "#000080"
                  },
                  {
                    "text": "收入占比 21%，同比（9 个百分点）",
                    "size": 22,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "iot": {
            "blocks": [
              {
                "x": 427,
                "top": 895,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "物联网",
                    "size": 38,
                    "weight": 800,
                    "color": "#edc949"
                  },
                  {
                    "text": "收入占比 4%，同比（1 个百分点）",
                    "size": 22,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "automotive": {
            "blocks": [
              {
                "x": 427,
                "top": 1025,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "汽车",
                    "size": 38,
                    "weight": 800,
                    "color": "#ffa500"
                  },
                  {
                    "text": "收入占比 4%，同比（1 个百分点）",
                    "size": 22,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "dce": {
            "blocks": [
              {
                "x": 420,
                "top": 1125,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "数字消费",
                    "size": 37,
                    "weight": 800,
                    "color": "#0096ff"
                  },
                  {
                    "text": "电子",
                    "size": 37,
                    "weight": 800,
                    "color": "#0096ff"
                  },
                  {
                    "text": "收入占比 1%，同比持平",
                    "size": 22,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "others": {
            "blocks": [
              {
                "x": 422,
                "top": 1271,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 38,
                    "weight": 800,
                    "color": "#57d014"
                  },
                  {
                    "text": "收入占比 2%，同比持平",
                    "size": 22,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 953,
                "top": 480,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +41%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1420,
                "top": 361,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 66%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1420,
                "top": 1095,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1888,
                "top": 296,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 59%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1888,
                "top": 878,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2243,
                "top": 628,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2408,
                "top": 401,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 51%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2499,
                "top": 725,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2499,
                "top": 940,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2499,
                "top": 1192,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
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
