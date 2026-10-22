window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "semrush-q4-fy22",
  "name": "Semrush · Q4 FY22",
  "company": "Semrush",
  "meta": {
    "company": "Semrush",
    "title": "Semrush Q4 FY22 Income Statement",
    "period": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/semrush-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.639,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2285.442,
    "logoSvg": "<path fill=\"#ff6429\" d=\"M65 0 H120 C174 0 174 70 119 70 C96 70 75 61 58 48 H81 L38 18 H85 L65 3 Z\"/><circle cx=\"119\" cy=\"35\" r=\"24\" fill=\"#f2f2f2\"/><path d=\"M119 16 Q136 16 138 34\" fill=\"none\" stroke=\"#ff6429\" stroke-width=\"6\" stroke-linecap=\"round\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" font-size=\"43\" font-weight=\"800\" font-family=\"Arial,sans-serif\">SEMRUSH</text>",
    "logoViewBox": "0 0 230 130",
    "logoWidth": 371.14,
    "logoHeight": 169.292,
    "logoY": 242.218
  },
  "render": {
    "width": 2667.0,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#ff6429",
        "label": "#ff6429"
      },
      "hub": {
        "node": "#ff6429",
        "label": "#ff6429"
      },
      "profit": {
        "node": "#25a427",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d60000",
        "label": "#941000"
      }
    },
    "linkTint": {
      "source": "#f8ae95",
      "hub": "#f8ae95",
      "profit": "#98cb96",
      "cost": "#df8082"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 7
    }
  },
  "annotationsSvg": "<g><rect x=\"131.527\" y=\"1152.488\" width=\"165.385\" height=\"165.385\" rx=\"36.463\" fill=\"#ff6429\"/><text x=\"214.219\" y=\"1207.182\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">ARR</text><text data-operating-metric=\"arr\" x=\"214.219\" y=\"1250.156\" text-anchor=\"middle\" font-size=\"31.254\" fill=\"white\">$275M</text><text x=\"214.219\" y=\"1289.224\" text-anchor=\"middle\" font-size=\"27.347\" fill=\"white\">+28% Y/Y</text></g><g><rect x=\"303.423\" y=\"1152.488\" width=\"165.385\" height=\"165.385\" rx=\"36.463\" fill=\"#ff6429\"/><text x=\"386.116\" y=\"1207.182\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"386.116\" y=\"1250.156\" text-anchor=\"middle\" font-size=\"31.254\" fill=\"white\">118%</text><text x=\"386.116\" y=\"1289.224\" text-anchor=\"middle\" font-size=\"27.347\" fill=\"white\">(4pp) Q/Q</text></g><g><rect x=\"475.32\" y=\"1152.488\" width=\"300.819\" height=\"165.385\" rx=\"36.463\" fill=\"#ff6429\"/><text x=\"625.729\" y=\"1207.182\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"625.729\" y=\"1250.156\" text-anchor=\"middle\" font-size=\"31.254\" fill=\"white\">95,000</text><text x=\"625.729\" y=\"1289.224\" text-anchor=\"middle\" font-size=\"27.347\" fill=\"white\">+16% Y/Y</text></g><text x=\"221.382\" y=\"1351.731\" font-size=\"27.347\" fill=\"#777777\">ARR = Annual Recurring Revenue</text><text x=\"200.546\" y=\"1390.799\" font-size=\"27.347\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text><text x=\"169.292\" y=\"1438.982\" font-size=\"39.067\" font-weight=\"700\">Source: Quarterly results</text>",
  "operatingMetrics": [
    {
      "id": "arr",
      "value": "275",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$275M"
    },
    {
      "id": "dbnr",
      "value": "118",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "118%"
    },
    {
      "id": "customers",
      "value": "95000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "95,000"
    }
  ],
  "nodes": [
    {
      "id": "united_states",
      "label": "United States",
      "value": 34,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+37% Y/Y"
      ]
    },
    {
      "id": "united_kingdom",
      "label": "United Kingdom",
      "value": 7,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 28,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 69,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+28% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 57,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "83% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 12,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -15,
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": [
        "(22%) margin",
        "(15pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 72,
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 40,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "48% of revenue",
        "+10pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 17,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "25% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 13,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "19% of revenue",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "exit_costs",
      "label": "Exit costs",
      "value": 2,
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [
        "Non-recurring"
      ]
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 34,
      "width": 122.411,
      "y0": 494.854,
      "y1": 642.007,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "united_kingdom",
      "target": "revenue",
      "value": 7,
      "width": 24.743,
      "y0": 750.745,
      "y1": 715.584,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 28,
      "width": 102.877,
      "y0": 981.242,
      "y1": 779.394,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 57,
      "width": 205.755,
      "y0": 683.679,
      "y1": 617.265,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cb96"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 12,
      "width": 44.276,
      "y0": 808.695,
      "y1": 893.341,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 57,
      "width": 205.755,
      "y0": 617.265,
      "y1": 721.444,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 15,
      "width": 55.997,
      "y0": 1051.564,
      "y1": 852.32,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 40,
      "width": 143.247,
      "y0": 690.19,
      "y1": 488.342,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 17,
      "width": 63.81,
      "y0": 793.719,
      "y1": 772.883,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 13,
      "width": 48.183,
      "y0": 849.716,
      "y1": 1004.683,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "exit_costs",
      "value": 2,
      "width": 6.511,
      "y0": 877.063,
      "y1": 1222.158,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "united_states": {
        "x": 367.233,
        "y": 433.648,
        "width": 72.926,
        "height": 122.411
      },
      "united_kingdom": {
        "x": 367.233,
        "y": 738.374,
        "width": 72.926,
        "height": 24.743
      },
      "other": {
        "x": 367.233,
        "y": 929.804,
        "width": 72.926,
        "height": 102.877
      },
      "revenue": {
        "x": 834.74,
        "y": 580.802,
        "width": 72.926,
        "height": 250.031
      },
      "gross_profit": {
        "x": 1321.78,
        "y": 514.387,
        "width": 72.926,
        "height": 205.755
      },
      "cost_of_revenue": {
        "x": 1321.78,
        "y": 871.203,
        "width": 72.926,
        "height": 44.276
      },
      "operating_loss": {
        "x": 1569.207,
        "y": 1023.565,
        "width": 72.926,
        "height": 55.997
      },
      "operating_expenses": {
        "x": 1773.659,
        "y": 618.567,
        "width": 72.926,
        "height": 261.751
      },
      "sm": {
        "x": 2235.957,
        "y": 416.719,
        "width": 72.926,
        "height": 143.247
      },
      "ga": {
        "x": 2235.957,
        "y": 740.978,
        "width": 72.926,
        "height": 63.81
      },
      "rnd": {
        "x": 2235.957,
        "y": 980.591,
        "width": 72.926,
        "height": 48.183
      },
      "exit_costs": {
        "x": 2235.957,
        "y": 1218.902,
        "width": 72.926,
        "height": 6.511
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 403.696,
            "top": 338.584,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+37% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 227.893,
            "top": 447.779,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "United",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "States",
                "size": 39.067,
                "weight": 700
              }
            ]
          }
        ]
      },
      "united_kingdom": {
        "blocks": [
          {
            "x": 403.696,
            "top": 640.705,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 227.893,
            "top": 700.608,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "United",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "Kingdom",
                "size": 39.067,
                "weight": 700
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 403.696,
            "top": 833.438,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 227.893,
            "top": 959.755,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 39.067,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 871.203,
            "top": 433.648,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1358.243,
            "top": 326.864,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "83% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1358.243,
            "top": 929.804,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1605.669,
            "top": 1092.584,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(22%) margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(15pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1810.122,
            "top": 454.484,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2426.084,
            "top": 423.23,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "S&M",
                "size": 32.556,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400
              },
              {
                "text": "48% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+10pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2426.084,
            "top": 735.769,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "G&A",
                "size": 32.556,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2426.084,
            "top": 968.871,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "R&D",
                "size": 32.556,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400
              },
              {
                "text": "19% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "exit_costs": {
        "blocks": [
          {
            "x": 2426.084,
            "top": 1187.648,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Exit costs",
                "size": 32.556,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400
              },
              {
                "text": "Non-recurring",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "Semrush · 2022 财年第四季度",
      "meta": {
        "title": "Semrush 2022 财年第四季度利润表",
        "period": "",
        "titleSize": 110.691,
        "titleTextLength": 2083.594
      },
      "annotationsSvg": "<g><rect x=\"131.527\" y=\"1152.488\" width=\"165.385\" height=\"165.385\" rx=\"36.463\" fill=\"#ff6429\"/><text x=\"214.219\" y=\"1207.182\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">ARR</text><text data-operating-metric=\"arr\" x=\"214.219\" y=\"1250.156\" text-anchor=\"middle\" font-size=\"31.254\" fill=\"white\">$275M</text><text x=\"214.219\" y=\"1289.224\" text-anchor=\"middle\" font-size=\"27.347\" fill=\"white\">同比 +28%</text></g><g><rect x=\"303.423\" y=\"1152.488\" width=\"165.385\" height=\"165.385\" rx=\"36.463\" fill=\"#ff6429\"/><text x=\"386.116\" y=\"1207.182\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"386.116\" y=\"1250.156\" text-anchor=\"middle\" font-size=\"31.254\" fill=\"white\">118%</text><text x=\"386.116\" y=\"1289.224\" text-anchor=\"middle\" font-size=\"27.347\" fill=\"white\">环比 (4 个百分点)</text></g><g><rect x=\"475.32\" y=\"1152.488\" width=\"300.819\" height=\"165.385\" rx=\"36.463\" fill=\"#ff6429\"/><text x=\"625.729\" y=\"1207.182\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">客户数</text><text data-operating-metric=\"customers\" x=\"625.729\" y=\"1250.156\" text-anchor=\"middle\" font-size=\"31.254\" fill=\"white\">95,000</text><text x=\"625.729\" y=\"1289.224\" text-anchor=\"middle\" font-size=\"27.347\" fill=\"white\">同比 +16%</text></g><text x=\"221.382\" y=\"1351.731\" font-size=\"27.347\" fill=\"#777777\">ARR = 年度经常性收入</text><text x=\"200.546\" y=\"1390.799\" font-size=\"27.347\" fill=\"#777777\">DBNR = 美元口径净留存率</text><text x=\"169.292\" y=\"1438.982\" font-size=\"39.067\" font-weight=\"700\">来源：季度业绩</text>",
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +37%"
          ]
        },
        "united_kingdom": {
          "label": "英国",
          "notes": [
            "同比 +24%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +19%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +28%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 83%",
            "同比 +4 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (22%)",
            "同比 (15 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 48%",
            "同比 +10 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 25%",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 19%",
            "同比 +7 个百分点"
          ]
        },
        "exit_costs": {
          "label": "退出成本",
          "notes": [
            "非经常性"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 403.696,
                "top": 338.584,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +37%",
                    "size": 27.347,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 227.893,
                "top": 471.413,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "美国",
                    "size": 39.067,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "united_kingdom": {
            "blocks": [
              {
                "x": 403.696,
                "top": 640.705,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.347,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 227.893,
                "top": 727.305,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "英国",
                    "size": 39.067,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 403.696,
                "top": 833.438,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.347,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 227.893,
                "top": 957.802,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.067,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 871.203,
                "top": 433.648,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27.347,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1358.243,
                "top": 326.864,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 83%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1358.243,
                "top": 929.804,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1605.669,
                "top": 1092.584,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (22%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (15 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1810.122,
                "top": 454.484,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2426.084,
                "top": 423.23,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32.556,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400
                  },
                  {
                    "text": "占收入 48%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +10 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2426.084,
                "top": 735.769,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32.556,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2426.084,
                "top": 968.871,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32.556,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400
                  },
                  {
                    "text": "占收入 19%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "exit_costs": {
            "blocks": [
              {
                "x": 2426.084,
                "top": 1187.648,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "退出成本",
                    "size": 32.556,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400
                  },
                  {
                    "text": "非经常性",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
