/* Dynatrace Q1 FY27: Source-measured Sankey with typed operating cards. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "dynatrace-q1-fy27",
  "name": "Dynatrace · Q1 FY27",
  "company": "Dynatrace",
  "meta": {
    "company": "Dynatrace",
    "title": "Dynatrace Q1 FY27 Income Statement",
    "period": "Q1 FY27",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/dynatrace-q1-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2380,
    "periodX": 185,
    "periodY": 296,
    "periodNoteY": 338
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155277",
    "subtitleColor": "#5d5d5d",
    "noteColor": "#696969",
    "palette": {
      "source": {
        "node": "#6a24f6",
        "label": "#6a24f6"
      },
      "hub": {
        "node": "#6a24f6",
        "label": "#6a24f6"
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
      "source": "#b495f3",
      "hub": "#99cd99",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <rect x=\"257\" y=\"1103\" width=\"146\" height=\"163\" rx=\"35\" fill=\"#6a24f6\"/>\n      <text x=\"330\" y=\"1154\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">ARR</text>\n      <text data-operating-metric=\"arr\" x=\"330\" y=\"1197\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"500\" fill=\"#ffffff\">$2.1B</text>\n      <text x=\"330\" y=\"1239\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"500\" fill=\"#ffffff\">+17% Y/Y</text>\n\n      <rect x=\"411\" y=\"1103\" width=\"197\" height=\"163\" rx=\"35\" fill=\"#6a24f6\"/>\n      <text x=\"510\" y=\"1157\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text>\n      <text data-operating-metric=\"dbnr\" x=\"510\" y=\"1200\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"500\" fill=\"#ffffff\">110%</text>\n      <text x=\"510\" y=\"1241\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"500\" fill=\"#ffffff\">Flat Q/Q</text>\n\n      <text x=\"220\" y=\"1312\" font-size=\"29\" font-weight=\"500\" fill=\"#696969\">ARR = Annual Recurring Revenue</text>\n      <text x=\"205\" y=\"1360\" font-size=\"29\" font-weight=\"500\" fill=\"#696969\">DBNR = Dollar Based Net Retention</text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/dynatrace/company-logo.png",
      "x": 684,
      "y": 225,
      "width": 346,
      "height": 260
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "subscription": {
        "x": 357,
        "y": 537,
        "width": 71,
        "height": 295
      },
      "service": {
        "x": 357,
        "y": 1072,
        "width": 71,
        "height": 11
      },
      "revenue": {
        "x": 824,
        "y": 645,
        "width": 71,
        "height": 307
      },
      "gross_profit": {
        "x": 1291,
        "y": 541,
        "width": 71,
        "height": 249
      },
      "cost_of_revenue": {
        "x": 1291,
        "y": 1020,
        "width": 71,
        "height": 57
      },
      "operating_profit": {
        "x": 1758,
        "y": 470,
        "width": 71,
        "height": 38
      },
      "operating_expenses": {
        "x": 1758,
        "y": 715,
        "width": 71,
        "height": 210
      },
      "other_income": {
        "x": 2099,
        "y": 451,
        "width": 70,
        "height": 3
      },
      "net_profit": {
        "x": 2225,
        "y": 369,
        "width": 72,
        "height": 19
      },
      "tax": {
        "x": 2225,
        "y": 611,
        "width": 72,
        "height": 23
      },
      "sm": {
        "x": 2225,
        "y": 839,
        "width": 72,
        "height": 99
      },
      "rnd": {
        "x": 2225,
        "y": 1070,
        "width": 72,
        "height": 74
      },
      "ga": {
        "x": 2225,
        "y": 1277,
        "width": 72,
        "height": 32
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 391.5,
            "top": 448,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          },
          {
            "x": 64,
            "top": 661,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Subscription",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "service": {
        "blocks": [
          {
            "x": 395.5,
            "top": 972,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          },
          {
            "x": 116,
            "top": 1053,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Service",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 849.5,
            "top": 492,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1329,
            "top": 356,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "81% margin",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1326,
            "top": 1100,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 37,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1803,
            "top": 286,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "13% margin",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1806,
            "top": 939,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2133.5,
            "top": 470,
            "anchor": "middle",
            "lineGap": 8,
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
            "x": 2427.5,
            "top": 336,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2426.5,
            "top": 590,
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
      "sm": {
        "blocks": [
          {
            "x": 2426.5,
            "top": 839,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "33% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2426.5,
            "top": 1043,
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
              },
              {
                "text": "25% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2427.5,
            "top": 1247,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Subscription",
      "value": 530,
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#6a24f6",
      "labelColor": "#6a24f6",
      "linkTint": "#b495f3"
    },
    {
      "id": "service",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Service",
      "value": 24,
      "notes": [
        "+23% Y/Y"
      ],
      "color": "#6a24f6",
      "labelColor": "#6a24f6",
      "linkTint": "#b495f3"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 555,
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#6a24f6",
      "labelColor": "#6a24f6",
      "linkTint": "#b495f3"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 451,
      "notes": [
        "81% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 104
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 72,
      "notes": [
        "13% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 379
    },
    {
      "id": "other_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 8
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 36,
      "notes": [
        "7% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 44
    },
    {
      "id": "sm",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "S&M",
      "value": 182,
      "notes": [
        "33% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 136,
      "notes": [
        "25% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 62,
      "notes": [
        "11% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 530,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 295,
      "targetWidth": 295
    },
    {
      "source": "service",
      "target": "revenue",
      "value": 24,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 11,
      "targetWidth": 12
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 451,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 250,
      "targetWidth": 249
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 104,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 57,
      "targetWidth": 57
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 72,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 39,
      "targetWidth": 38
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 379,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 210,
      "targetWidth": 210
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 28,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 15,
      "targetWidth": 16
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 44,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 23,
      "targetWidth": 23
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 8,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 182,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 101,
      "targetWidth": 99
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 136,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 75,
      "targetWidth": 74
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 62,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 34,
      "targetWidth": 32
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "ARR",
      "DBNR"
    ],
    "zh": {
      "name": "Dynatrace · 2027 财年第一季度",
      "meta": {
        "title": "Dynatrace 2027 财年第一季度利润表",
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 6 月",
        "titleSize": 112,
        "titleTextLength": 1960
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <rect x=\"257\" y=\"1103\" width=\"146\" height=\"163\" rx=\"35\" fill=\"#6a24f6\"/>\n      <text x=\"330\" y=\"1154\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">ARR</text>\n      <text data-operating-metric=\"arr\" x=\"330\" y=\"1197\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"500\" fill=\"#ffffff\">$2.1B</text>\n      <text x=\"330\" y=\"1239\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"500\" fill=\"#ffffff\">同比 +17%</text>\n\n      <rect x=\"411\" y=\"1103\" width=\"197\" height=\"163\" rx=\"35\" fill=\"#6a24f6\"/>\n      <text x=\"510\" y=\"1157\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text>\n      <text data-operating-metric=\"dbnr\" x=\"510\" y=\"1200\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"500\" fill=\"#ffffff\">110%</text>\n      <text x=\"510\" y=\"1241\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"500\" fill=\"#ffffff\">环比持平</text>\n\n      <text x=\"220\" y=\"1312\" font-size=\"29\" font-weight=\"500\" fill=\"#696969\">ARR = 年度经常性收入</text>\n      <text x=\"205\" y=\"1360\" font-size=\"29\" font-weight=\"500\" fill=\"#696969\">DBNR = 美元净留存率</text>\n    </g>",
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +16%"
          ]
        },
        "service": {
          "label": "服务",
          "notes": [
            "同比 +23%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +16%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 81%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 13%",
            "同比 (0 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "other_income": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 (4 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 33%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 391.5,
                "top": 448,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              },
              {
                "x": 64,
                "top": 661,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "service": {
            "blocks": [
              {
                "x": 395.5,
                "top": 972,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              },
              {
                "x": 116,
                "top": 1053,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "服务",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 849.5,
                "top": 492,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1329,
                "top": 356,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 81%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1326,
                "top": 1100,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1803,
                "top": 286,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 13%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1806,
                "top": 939,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2133.5,
                "top": 470,
                "anchor": "middle",
                "lineGap": 8,
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
                "x": 2427.5,
                "top": 336,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2426.5,
                "top": 590,
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
          "sm": {
            "blocks": [
              {
                "x": 2426.5,
                "top": 839,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 33%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2426.5,
                "top": 1043,
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
                  },
                  {
                    "text": "占收入 25%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2427.5,
                "top": 1247,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "arr",
      "value": "2.1",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$2.1B"
    },
    {
      "id": "dbnr",
      "value": "110",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "110%"
    }
  ]
});
