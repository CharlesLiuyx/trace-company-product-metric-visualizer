window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "zoom-q2-fy24",
  "name": "Zoom · Q2 FY24",
  "company": "Zoom",
  "meta": {
    "company": "Zoom",
    "title": "Zoom Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/zoom-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 122.411,
    "titleWeight": 800,
    "titleTextLength": 2083.594
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#99c4f7",
      "hub": "#99c4f7",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "enterprise",
      "label": "Enterprise",
      "value": 660,
      "valueText": "$660M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#2d8cff",
      "labelColor": "#1464dd",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "online",
      "label": "Online",
      "value": 479,
      "valueText": "$479M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#2d8cff",
      "labelColor": "#1464dd",
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1139,
      "valueText": "$1,139M",
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#2d8cff",
      "labelColor": "#1464dd",
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 872,
      "valueText": "$872M",
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "77% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 267,
      "valueText": "($267M)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 178,
      "valueText": "$178M",
      "type": "profit",
      "col": 3,
      "order": 5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "16% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 695,
      "valueText": "($695M)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "investments",
      "label": "Investment gains",
      "value": 31,
      "valueText": "$31M",
      "type": "profit",
      "col": 4,
      "order": 7,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other income",
      "value": 41,
      "valueText": "$41M",
      "type": "profit",
      "col": 4,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 182,
      "valueText": "$182M",
      "type": "profit",
      "col": 5,
      "order": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "16% margin",
        "+12pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 68,
      "valueText": "($68M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 373,
      "valueText": "($373M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "33% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rd",
      "label": "R&D",
      "value": 192,
      "valueText": "($192M)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "17% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 129,
      "valueText": "($129M)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "11% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "enterprise",
      "target": "revenue",
      "value": 660,
      "sourceWidth": 204.453,
      "targetWidth": 204.453,
      "y0": 655.681,
      "y1": 754.652,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99c4f7"
    },
    {
      "source": "online",
      "target": "revenue",
      "value": 479,
      "sourceWidth": 148.456,
      "targetWidth": 147.154,
      "y0": 1015.752,
      "y1": 930.455,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99c4f7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 872,
      "sourceWidth": 269.565,
      "targetWidth": 268.263,
      "y0": 787.208,
      "y1": 709.724,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 267,
      "sourceWidth": 82.042,
      "targetWidth": 82.042,
      "y0": 963.011,
      "y1": 1035.937,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 178,
      "sourceWidth": 54.694,
      "targetWidth": 54.694,
      "y0": 602.94,
      "y1": 519.596,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 695,
      "sourceWidth": 213.568,
      "targetWidth": 214.871,
      "y0": 737.071,
      "y1": 828.88,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 110,
      "sourceWidth": 33.858,
      "targetWidth": 33.858,
      "y0": 509.178,
      "y1": 433.648,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 68,
      "sourceWidth": 20.836,
      "targetWidth": 22.138,
      "y0": 536.525,
      "y1": 709.073,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "investments",
      "target": "net_profit",
      "value": 31,
      "sourceWidth": 13.022,
      "targetWidth": 13.022,
      "y0": 371.14,
      "y1": 410.208,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 41,
      "sourceWidth": 10.418,
      "targetWidth": 10.418,
      "y0": 509.178,
      "y1": 455.786,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 373,
      "sourceWidth": 115.9,
      "targetWidth": 114.598,
      "y0": 779.394,
      "y1": 888.132,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rd",
      "value": 192,
      "sourceWidth": 59.903,
      "targetWidth": 58.601,
      "y0": 867.296,
      "y1": 1067.191,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 129,
      "sourceWidth": 39.067,
      "targetWidth": 40.37,
      "y0": 916.781,
      "y1": 1222.158,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "enterprise": {
        "x": 333.375,
        "y": 553.455,
        "width": 72.926,
        "height": 204.453
      },
      "online": {
        "x": 333.375,
        "y": 941.524,
        "width": 72.926,
        "height": 148.456
      },
      "revenue": {
        "x": 803.486,
        "y": 652.425,
        "width": 72.926,
        "height": 351.606
      },
      "gross_profit": {
        "x": 1268.388,
        "y": 575.593,
        "width": 72.926,
        "height": 268.263
      },
      "cost_of_revenue": {
        "x": 1270.992,
        "y": 994.916,
        "width": 72.926,
        "height": 82.042
      },
      "operating_profit": {
        "x": 1735.894,
        "y": 492.249,
        "width": 72.926,
        "height": 54.694
      },
      "operating_expenses": {
        "x": 1735.894,
        "y": 721.444,
        "width": 72.926,
        "height": 214.871
      },
      "investments": {
        "x": 2008.063,
        "y": 364.629,
        "width": 72.926,
        "height": 13.022
      },
      "other": {
        "x": 2062.758,
        "y": 503.969,
        "width": 72.926,
        "height": 10.418
      },
      "net_profit": {
        "x": 2202.098,
        "y": 403.696,
        "width": 72.926,
        "height": 57.299
      },
      "tax": {
        "x": 2202.098,
        "y": 698.004,
        "width": 72.926,
        "height": 22.138
      },
      "sm": {
        "x": 2202.098,
        "y": 830.833,
        "width": 72.926,
        "height": 114.598
      },
      "rd": {
        "x": 2202.098,
        "y": 1037.89,
        "width": 72.926,
        "height": 58.601
      },
      "ga": {
        "x": 2202.098,
        "y": 1201.973,
        "width": 72.926,
        "height": 40.37
      }
    },
    "labels": {
      "enterprise": {
        "blocks": [
          {
            "x": 372.442,
            "top": 460.995,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "color": "#1464dd",
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 213.568,
            "top": 634.194,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Enterprise",
                "size": 39.067,
                "color": "#1464dd",
                "weight": 800
              }
            ]
          }
        ]
      },
      "online": {
        "blocks": [
          {
            "x": 372.442,
            "top": 846.46,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "color": "#1464dd",
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 213.568,
            "top": 989.707,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Online",
                "size": 39.067,
                "color": "#1464dd",
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 839.949,
            "top": 505.271,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "color": "#1464dd",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "color": "#1464dd",
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1304.851,
            "top": 390.674,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "77% margin",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1304.851,
            "top": 1095.189,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.067,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1771.055,
            "top": 306.028,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "16% margin",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1771.055,
            "top": 954.546,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.067,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "investments": {
        "blocks": [
          {
            "x": 2044.526,
            "top": 235.707,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Investment",
                "size": 31.254,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "gains",
                "size": 31.254,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "color": "#008f51",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2099.221,
            "top": 528.712,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "income",
                "size": 31.254,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "color": "#008f51",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2415.667,
            "top": 367.233,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "16% margin",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+12pp Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2415.667,
            "top": 661.541,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Tax",
                "size": 31.254,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2415.667,
            "top": 832.135,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "S&M",
                "size": 31.254,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "33% of revenue",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "rd": {
        "blocks": [
          {
            "x": 2415.667,
            "top": 1026.17,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "17% of revenue",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2415.667,
            "top": 1198.066,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "G&A",
                "size": 31.254,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.347,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "rpo",
      "value": "3.5",
      "unit": "B",
      "currency": "USD",
      "literal": "$3.5B",
      "comparison": "eq"
    },
    {
      "id": "dbne",
      "value": "109",
      "unit": "%",
      "currency": null,
      "literal": "109%",
      "comparison": "eq"
    },
    {
      "id": "enterprise_customers",
      "value": "218000",
      "unit": "count",
      "currency": null,
      "literal": "218K",
      "comparison": "eq"
    },
    {
      "id": "large_customers",
      "value": "3672",
      "unit": "count",
      "currency": null,
      "literal": "3,672",
      "comparison": "eq"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Zoom · 2024 财年第二季度",
      "meta": {
        "title": "Zoom 2024 财年第二季度利润表",
        "period": "2024 财年第二季度"
      },
      "nodes": {
        "enterprise": {
          "label": "企业",
          "notes": [
            "同比 +10%"
          ]
        },
        "online": {
          "label": "在线",
          "notes": [
            "同比 (4%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 77%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 16%",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "investments": {
          "label": "投资收益",
          "notes": []
        },
        "other": {
          "label": "其他收入",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 16%",
            "同比 +12 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 33%",
            "同比 (2 个百分点)"
          ]
        },
        "rd": {
          "label": "研发",
          "notes": [
            "占收入 17%",
            "同比 +3 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "enterprise": {
            "blocks": [
              {
                "x": 372.442,
                "top": 460.995,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "color": "#1464dd",
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 213.568,
                "top": 634.194,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "企业",
                    "size": 39.067,
                    "color": "#1464dd",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "online": {
            "blocks": [
              {
                "x": 372.442,
                "top": 846.46,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "color": "#1464dd",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 213.568,
                "top": 989.707,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "在线",
                    "size": 39.067,
                    "color": "#1464dd",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 839.949,
                "top": 505.271,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "color": "#1464dd",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "color": "#1464dd",
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1304.851,
                "top": 390.674,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 77%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1304.851,
                "top": 1095.189,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 39.067,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "",
                    "size": 39.067,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1771.055,
                "top": 306.028,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 16%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1771.055,
                "top": 954.546,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 39.067,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "",
                    "size": 39.067,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "investments": {
            "blocks": [
              {
                "x": 2044.526,
                "top": 235.707,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "投资收益",
                    "size": 31.254,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "",
                    "size": 31.254,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "color": "#008f51",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2099.221,
                "top": 528.712,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 31.254,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "",
                    "size": 31.254,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "color": "#008f51",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2415.667,
                "top": 367.233,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 16%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +12 个百分点",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2415.667,
                "top": 661.541,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.254,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2415.667,
                "top": 832.135,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.254,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 33%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rd": {
            "blocks": [
              {
                "x": 2415.667,
                "top": 1026.17,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 17%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2415.667,
                "top": 1198.066,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.254,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.347,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"52.09\" y=\"1136.861\" width=\"143.247\" height=\"166.688\" rx=\"36.463\" fill=\"#2d8bff\"/><rect x=\"201.848\" y=\"1136.861\" width=\"141.945\" height=\"166.688\" rx=\"36.463\" fill=\"#2d8bff\"/><rect x=\"351.606\" y=\"1136.861\" width=\"644.612\" height=\"166.688\" rx=\"36.463\" fill=\"#2d8bff\"/><text x=\"123.713\" y=\"1191.555\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">RPO</text><text x=\"123.713\" y=\"1233.227\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"rpo\">$3.5B</text><text x=\"123.713\" y=\"1274.899\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">同比 +9%</text><text x=\"273.472\" y=\"1191.555\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">DBNE</text><text x=\"273.472\" y=\"1233.227\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"dbne\">109%</text><text x=\"273.472\" y=\"1274.899\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">近12个月</text><text x=\"599.033\" y=\"1211.089\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#ffffff\">企业客户同比 +7%，至</text><text x=\"929.804\" y=\"1211.089\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"enterprise_customers\">218K</text><text x=\"599.033\" y=\"1256.667\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">年收入超过 $100K 的客户同比 +18%，至</text><text x=\"908.968\" y=\"1256.667\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"large_customers\">3,672</text><text x=\"214.871\" y=\"311.237\" text-anchor=\"middle\" font-size=\"36.463\" font-weight=\"800\" fill=\"#666666\">2024 财年第二季度</text><text x=\"214.871\" y=\"354.211\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#777777\">截至 2023 年 7 月</text><text x=\"429.741\" y=\"1342.616\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#777777\">RPO = 剩余履约义务</text><text x=\"442.764\" y=\"1385.59\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#777777\">DBNE = 金额净扩张率</text><text x=\"429.741\" y=\"1438.982\" text-anchor=\"middle\" font-size=\"39.067\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"52.09\" y=\"1136.861\" width=\"143.247\" height=\"166.688\" rx=\"36.463\" fill=\"#2d8bff\"/><rect x=\"201.848\" y=\"1136.861\" width=\"141.945\" height=\"166.688\" rx=\"36.463\" fill=\"#2d8bff\"/><rect x=\"351.606\" y=\"1136.861\" width=\"644.612\" height=\"166.688\" rx=\"36.463\" fill=\"#2d8bff\"/><text x=\"123.713\" y=\"1191.555\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">RPO</text><text x=\"123.713\" y=\"1233.227\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"rpo\">$3.5B</text><text x=\"123.713\" y=\"1274.899\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">+9% Y/Y</text><text x=\"273.472\" y=\"1191.555\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">DBNE</text><text x=\"273.472\" y=\"1233.227\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"dbne\">109%</text><text x=\"273.472\" y=\"1274.899\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">TTM</text><text x=\"599.033\" y=\"1211.089\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#ffffff\">Enterprise Customers +7% Y/Y to</text><text x=\"929.804\" y=\"1211.089\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"enterprise_customers\">218K</text><text x=\"599.033\" y=\"1256.667\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">Customers &gt; $100K +18% Y/Y to</text><text x=\"908.968\" y=\"1256.667\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"large_customers\">3,672</text><text x=\"214.871\" y=\"311.237\" text-anchor=\"middle\" font-size=\"36.463\" font-weight=\"800\" fill=\"#666666\">Q2 FY24</text><text x=\"214.871\" y=\"354.211\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#777777\">Ending July 2023</text><text x=\"429.741\" y=\"1342.616\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#777777\">RPO = Remaining Performance Obligation</text><text x=\"442.764\" y=\"1385.59\" text-anchor=\"middle\" font-size=\"28.649\" font-weight=\"400\" fill=\"#777777\">DBNE = Dollar Based Net Expansion</text><text x=\"429.741\" y=\"1438.982\" text-anchor=\"middle\" font-size=\"39.067\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/zoom/company-logo-zoom-q2-fy27.png",
      "x": 614.66,
      "y": 286.494,
      "width": 460.995,
      "height": 114.598
    }
  ]
});
