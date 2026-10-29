window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "elastic-q3-fy24",
  "name": "Elastic · Q3 FY24",
  "company": "Elastic",
  "meta": {
    "company": "Elastic",
    "title": "Elastic Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/elastic-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199,
    "titleSize": 123,
    "titleWeight": 700,
    "titleTextLength": 2130,
    "periodX": 2305,
    "periodY": 273,
    "periodNoteY": 315,
    "logoWidth": 530,
    "logoHeight": 175,
    "logoY": 237,
    "logoViewBox": "0 0 650 210",
    "logoSvg": "\n    <g transform=\"translate(6 10) scale(0.87)\" stroke=\"#ffffff\" stroke-width=\"7\" stroke-linejoin=\"round\">\n      <path d=\"M88 0C112 -10 149 3 161 29C172 53 158 83 130 104L85 139L40 114L32 65C27 32 50 9 88 0Z\" fill=\"#fcca00\"/>\n      <path d=\"M22 24C40 15 62 24 68 45L61 80L22 108C1 95 -6 73 5 52C8 44 14 33 22 24Z\" fill=\"#ef4b93\"/>\n      <path d=\"M1 82C16 64 43 62 61 80L52 124L11 156C-9 145 -15 117 1 82Z\" fill=\"#20a8df\"/>\n      <path d=\"M53 117L102 137L112 189C92 210 49 209 27 184C4 158 11 127 53 117Z\" fill=\"#2db9ad\"/>\n      <path d=\"M116 105L150 73C173 74 192 91 193 115C193 140 173 158 150 161L108 138Z\" fill=\"#0078a8\"/>\n      <path d=\"M112 184L118 145L150 161C158 184 145 205 120 207C113 205 109 199 112 184Z\" fill=\"#a6d854\"/>\n    </g>\n    <text x=\"197\" y=\"136\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"120\" font-weight=\"400\" fill=\"#000000\"\n      textLength=\"315\" lengthAdjust=\"spacingAndGlyphs\">elastic</text>\n  ",
    "logoX": 815
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#0779a1",
        "label": "#0779a1"
      },
      "hub": {
        "node": "#0779a1",
        "label": "#0779a1"
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
      "source": "#88bbcd",
      "hub": "#88bbcd",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 8
    }
  },
  "layout": {
    "scale": 1,
    "nodes": {
      "cloud": {
        "x": 364,
        "y": 477,
        "width": 71,
        "height": 146
      },
      "other_subscription": {
        "x": 364,
        "y": 809,
        "width": 71,
        "height": 169
      },
      "subscription": {
        "x": 732,
        "y": 576,
        "width": 71,
        "height": 316
      },
      "service": {
        "x": 728,
        "y": 1133,
        "width": 71,
        "height": 20
      },
      "revenue": {
        "x": 1111,
        "y": 667,
        "width": 71,
        "height": 337
      },
      "gross_profit": {
        "x": 1487,
        "y": 576,
        "width": 71,
        "height": 250
      },
      "cost_of_revenue": {
        "x": 1490,
        "y": 1026,
        "width": 71,
        "height": 87
      },
      "operating_loss": {
        "x": 1730,
        "y": 980,
        "width": 71,
        "height": 27
      },
      "operating_expenses": {
        "x": 1871,
        "y": 669,
        "width": 71,
        "height": 278
      },
      "sm": {
        "x": 2232,
        "y": 510,
        "width": 71,
        "height": 145
      },
      "rnd": {
        "x": 2232,
        "y": 820,
        "width": 71,
        "height": 89
      },
      "ga": {
        "x": 2232,
        "y": 1079,
        "width": 71,
        "height": 43
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 763,
            "top": 425,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Subscription",
                "size": 39,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "service": {
        "blocks": [
          {
            "x": 763,
            "top": 981,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Service",
                "size": 39,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
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
            "x": 1146,
            "top": 517,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 29,
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
            "x": 1529,
            "top": 387,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "74% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
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
            "x": 1529,
            "top": 1128,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 39,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1763,
            "top": 1020,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 700
              },
              {
                "text": "loss",
                "size": 39,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(8%) margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+17pp Y/Y",
                "size": 29,
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
            "x": 1908,
            "top": 501,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2423,
            "top": 514,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Sales &",
                "size": 31,
                "weight": 700
              },
              {
                "text": "marketing",
                "size": 39,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "43% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2423,
            "top": 801,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Research &",
                "size": 31,
                "weight": 700
              },
              {
                "text": "development",
                "size": 39,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "27% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2423,
            "top": 1052,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "General &",
                "size": 31,
                "weight": 700
              },
              {
                "text": "admin",
                "size": 39,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "12% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cloud": {
        "blocks": [
          {
            "x": 400,
            "top": 379,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 700
              },
              {
                "text": "+29% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 228,
            "top": 514,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cloud",
                "size": 39,
                "weight": 700
              },
              {
                "text": "44% of revenue",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+3pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_subscription": {
        "blocks": [
          {
            "x": 400,
            "top": 711,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 700
              },
              {
                "text": "+14% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 228,
            "top": 847,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 39,
                "weight": 700
              },
              {
                "text": "subscription",
                "size": 39,
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
      "id": "cloud",
      "label": "Cloud",
      "value": 143,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+29% Y/Y",
        "44% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "other_subscription",
      "label": "Other subscription",
      "value": 165,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 308,
      "type": "source",
      "col": 1,
      "order": 0,
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "service",
      "label": "Service",
      "value": 20,
      "type": "source",
      "col": 1,
      "order": 0,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 328,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 243,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "74% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 85,
      "type": "cost",
      "col": 3,
      "order": 0,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": [
        "Operating",
        "loss"
      ],
      "value": 26,
      "type": "cost",
      "col": 4,
      "order": 0,
      "notes": [
        "(8%) margin",
        "+17pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 270,
      "type": "cost",
      "col": 5,
      "order": 0,
      "notes": []
    },
    {
      "id": "sm",
      "label": [
        "Sales &",
        "marketing"
      ],
      "value": 142,
      "type": "cost",
      "col": 6,
      "order": 0,
      "notes": [
        "43% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": [
        "Research &",
        "development"
      ],
      "value": 87,
      "type": "cost",
      "col": 6,
      "order": 0,
      "notes": [
        "27% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": [
        "General &",
        "admin"
      ],
      "value": 41,
      "type": "cost",
      "col": 6,
      "order": 0,
      "notes": [
        "12% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "cloud",
      "target": "subscription",
      "value": 143,
      "width": 146,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 146,
      "targetWidth": 146
    },
    {
      "source": "other_subscription",
      "target": "subscription",
      "value": 165,
      "width": 169,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 169,
      "targetWidth": 170
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 308,
      "width": 315,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 316,
      "targetWidth": 316
    },
    {
      "source": "service",
      "target": "revenue",
      "value": 20,
      "width": 21,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 20,
      "targetWidth": 21
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 243,
      "width": 251,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "targetWidth": 250
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 85,
      "width": 87,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 87,
      "sourceWidth": 86
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 243,
      "width": 251,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 250
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 26,
      "width": 26,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 27
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 142,
      "width": 146,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 145
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 87,
      "width": 89,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 89
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 41,
      "width": 42,
      "sourceOrder": 2,
      "targetOrder": 0,
      "targetWidth": 43
    }
  ],
  "i18n": {
    "zh": {
      "name": "Elastic · 2024 财年第三季度",
      "meta": {
        "title": "Elastic 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 1 月",
        "titleSize": 112,
        "titleTextLength": 2030
      },
      "nodes": {
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +29%",
            "占收入 44%",
            "同比 +3 个百分点"
          ]
        },
        "other_subscription": {
          "label": "其他订阅",
          "notes": [
            "同比 +14%"
          ]
        },
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +20%"
          ]
        },
        "service": {
          "label": "服务",
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +19%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 74%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (8%)",
            "同比 +17 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 43%",
            "同比 (3 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 27%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 763,
                "top": 425,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "service": {
            "blocks": [
              {
                "x": 763,
                "top": 981,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
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
                "x": 1146,
                "top": 517,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 29,
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
                "x": 1529,
                "top": 387,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 74%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
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
                "x": 1529,
                "top": 1128,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1763,
                "top": 1020,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (8%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +17 个百分点",
                    "size": 29,
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
                "x": 1908,
                "top": 501,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2423,
                "top": 514,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "占收入 43%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2423,
                "top": 801,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "占收入 27%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2423,
                "top": 1052,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cloud": {
            "blocks": [
              {
                "x": 400,
                "top": 379,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "同比 +29%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 228,
                "top": 514,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "云",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "占收入 44%",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_subscription": {
            "blocks": [
              {
                "x": 400,
                "top": 711,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "同比 +14%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 228,
                "top": 847,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39,
                    "weight": 700
                  },
                  {
                    "text": "订阅",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"108\" y=\"1178\" width=\"177\" height=\"163\" rx=\"40\" fill=\"#0779a1\"/><rect x=\"297\" y=\"1178\" width=\"465\" height=\"163\" rx=\"40\" fill=\"#0779a1\"/><text x=\"196\" y=\"1230\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"700\" fill=\"white\">DBNE</text><text data-operating-metric=\"dbne\" x=\"196\" y=\"1273\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">109%</text><text x=\"196\" y=\"1315\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">环比 (1 个百分点)</text><text x=\"330\" y=\"1252\" font-size=\"30\" fill=\"white\">客户</text><text data-operating-metric=\"customers\" x=\"500\" y=\"1252\" font-size=\"30\" fill=\"white\">20,800</text><text x=\"604\" y=\"1252\" font-size=\"29\" fill=\"white\">同比 +5%</text><text x=\"355\" y=\"1295\" font-size=\"29\" fill=\"white\">超过 $100K</text><text data-operating-metric=\"large_customers\" x=\"483\" y=\"1295\" font-size=\"30\" fill=\"white\">1,270</text><text x=\"585\" y=\"1295\" font-size=\"29\" fill=\"white\">同比 +14%</text><text x=\"202\" y=\"1385\" font-size=\"28\" fill=\"#666666\">DBNR = 基于美元的净扩张率</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "dbne",
      "value": "109",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "109%"
    },
    {
      "id": "customers",
      "value": "20800",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "20,800"
    },
    {
      "id": "large_customers",
      "value": "1270",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,270"
    }
  ],
  "annotationsSvg": "<g><rect x=\"108\" y=\"1178\" width=\"177\" height=\"163\" rx=\"40\" fill=\"#0779a1\"/><rect x=\"297\" y=\"1178\" width=\"465\" height=\"163\" rx=\"40\" fill=\"#0779a1\"/><text x=\"196\" y=\"1230\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"700\" fill=\"white\">DBNE</text><text data-operating-metric=\"dbne\" x=\"196\" y=\"1273\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">109%</text><text x=\"196\" y=\"1315\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">(1pp) Q/Q</text><text x=\"330\" y=\"1252\" font-size=\"30\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"500\" y=\"1252\" font-size=\"30\" fill=\"white\">20,800</text><text x=\"604\" y=\"1252\" font-size=\"29\" fill=\"white\">+5% Y/Y</text><text x=\"355\" y=\"1295\" font-size=\"29\" fill=\"white\">&gt; $100K</text><text data-operating-metric=\"large_customers\" x=\"483\" y=\"1295\" font-size=\"30\" fill=\"white\">1,270</text><text x=\"585\" y=\"1295\" font-size=\"29\" fill=\"white\">+14% Y/Y</text><text x=\"202\" y=\"1385\" font-size=\"28\" fill=\"#666666\">DBNR = Dollar Based Net Expansion</text></g>"
});
