window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "datadog-q3-fy23",
  "name": "Datadog · Q3 FY23",
  "company": "Datadog",
  "meta": {
    "company": "Datadog",
    "title": "Datadog Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Quarter ended Sep. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/datadog-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.2,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2252.9,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#632ca6",
        "label": "#632ca6"
      },
      "hub": {
        "node": "#632ca6",
        "label": "#632ca6"
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
      "source": "#b299cf",
      "hub": "#99cd99",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 22,
      "lineGap": 9.1
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"123.7\" y=\"1178.5\" width=\"184.9\" height=\"168\" rx=\"44.3\" fill=\"#632ca6\"/><rect x=\"320.4\" y=\"1178.5\" width=\"433.6\" height=\"168\" rx=\"44.3\" fill=\"#632ca6\"/><text x=\"216.2\" y=\"1254.1\" text-anchor=\"middle\" font-size=\"31.3\" font-weight=\"800\" fill=\"white\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"216.2\" y=\"1297\" text-anchor=\"middle\" font-size=\"31.3\" fill=\"white\">&lt; 120%</text><text x=\"336\" y=\"1254.1\" font-size=\"30\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"507.9\" y=\"1254.1\" font-size=\"30\" fill=\"white\">26,800</text><text x=\"608.1\" y=\"1254.1\" font-size=\"28.6\" fill=\"white\">+21% Y/Y</text><text x=\"356.8\" y=\"1295.7\" font-size=\"30\" fill=\"white\">&gt; $100K</text><text data-operating-metric=\"large_customers\" x=\"490.9\" y=\"1295.7\" font-size=\"30\" fill=\"white\">3,130</text><text x=\"582.1\" y=\"1295.7\" font-size=\"28.6\" fill=\"white\">+20% Y/Y</text><text x=\"209.7\" y=\"1384.3\" font-size=\"28.6\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/datadog/company-wordmark.png",
      "x": 539.1,
      "y": 293,
      "width": 599,
      "height": 149.8
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "north_america": {
        "x": 380.3,
        "y": 569.1,
        "width": 71.6,
        "height": 199.2
      },
      "international": {
        "x": 380.3,
        "y": 1010.5,
        "width": 71.6,
        "height": 85.9
      },
      "revenue": {
        "x": 847.8,
        "y": 681.1,
        "width": 71.6,
        "height": 285.2
      },
      "gross_profit": {
        "x": 1310.1,
        "y": 579.5,
        "width": 71.6,
        "height": 230.5
      },
      "cost_of_revenue": {
        "x": 1314,
        "y": 997.5,
        "width": 71.6,
        "height": 53.4
      },
      "operating_loss": {
        "x": 1560.1,
        "y": 1027.5,
        "width": 71.6,
        "height": 2.6
      },
      "operating_expenses": {
        "x": 1778.9,
        "y": 685,
        "width": 71.6,
        "height": 233.1
      },
      "rnd": {
        "x": 2249,
        "y": 492.2,
        "width": 71.6,
        "height": 125
      },
      "sm": {
        "x": 2249,
        "y": 810,
        "width": 71.6,
        "height": 80.7
      },
      "ga": {
        "x": 2249,
        "y": 1092.6,
        "width": 71.6,
        "height": 26
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 884.2,
            "top": 530,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "+25% Y/Y",
                "size": 28.6,
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
            "x": 1350.4,
            "top": 389.4,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "81% margin",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.6,
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
            "x": 1350.4,
            "top": 1063.9,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1597.9,
            "top": 1047,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Operating",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "(1%) margin",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 28.6,
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
            "x": 1814,
            "top": 530,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Operating",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2440.4,
            "top": 502.7,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "R&D",
                "size": 31.3,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.3,
                "weight": 400
              },
              {
                "text": "44% of revenue",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2440.4,
            "top": 803.5,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "S&M",
                "size": 31.3,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.3,
                "weight": 400
              },
              {
                "text": "29% of revenue",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.6,
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
            "x": 2440.4,
            "top": 1063.9,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "G&A",
                "size": 31.3,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.3,
                "weight": 400
              },
              {
                "text": "9% of revenue",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "north_america": {
        "blocks": [
          {
            "x": 415.4,
            "top": 468.8,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 216.2,
            "top": 621.2,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "North",
                "size": 39.1,
                "weight": 800
              },
              {
                "text": "America",
                "size": 39.1,
                "weight": 800
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 415.4,
            "top": 911.6,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "+34% Y/Y",
                "size": 28.6,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 216.2,
            "top": 1032.7,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "International",
                "size": 39.1,
                "weight": 800
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "North America",
      "value": 381,
      "notes": [
        "+22% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#632ca6",
      "linkTint": "#b299cf"
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 166,
      "notes": [
        "+34% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#632ca6",
      "linkTint": "#b299cf"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 548,
      "notes": [
        "+25% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#632ca6",
      "linkTint": "#b299cf"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 444,
      "notes": [
        "81% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 103,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating loss",
      "value": -4,
      "notes": [
        "(1%) margin",
        "+6pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": "Operating expenses",
      "value": 448,
      "notes": []
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "R&D",
      "value": 240,
      "notes": [
        "44% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "S&M",
      "value": 157,
      "notes": [
        "29% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "value": 51,
      "notes": [
        "9% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 381,
      "sourceWidth": 199.2,
      "targetWidth": 199.2,
      "y0": 668.7,
      "y1": 780.7,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 166,
      "sourceWidth": 85.9,
      "targetWidth": 85.9,
      "y0": 1053.5,
      "y1": 923.3,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 444,
      "sourceWidth": 230.5,
      "targetWidth": 230.5,
      "y0": 796.3,
      "y1": 694.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 103,
      "sourceWidth": 54.7,
      "targetWidth": 53.4,
      "y0": 938.9,
      "y1": 1024.2,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 444,
      "sourceWidth": 230.5,
      "targetWidth": 230.5,
      "y0": 694.7,
      "y1": 800.2,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 4,
      "sourceWidth": 2.6,
      "targetWidth": 2.6,
      "y0": 1028.8,
      "y1": 916.8,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "x0": 1631.7,
        "x1": 1778.9,
        "c1x": 1690.3,
        "c1y": 1028.8,
        "c2x": 1720.3,
        "c2y": 916.8
      }
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 240,
      "sourceWidth": 125,
      "targetWidth": 125,
      "y0": 747.5,
      "y1": 554.8,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 157,
      "sourceWidth": 82,
      "targetWidth": 80.7,
      "y0": 851,
      "y1": 850.4,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 51,
      "sourceWidth": 26,
      "targetWidth": 26,
      "y0": 905.1,
      "y1": 1105.6,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "DBNR"
    ],
    "zh": {
      "name": "Datadog · 2023 财年第三季度",
      "meta": {
        "title": "Datadog 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月 30 日的季度",
        "titleSize": 112,
        "titleTextLength": 1953.4
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"123.7\" y=\"1178.5\" width=\"184.9\" height=\"168\" rx=\"44.3\" fill=\"#632ca6\"/><rect x=\"320.4\" y=\"1178.5\" width=\"433.6\" height=\"168\" rx=\"44.3\" fill=\"#632ca6\"/><text x=\"216.2\" y=\"1254.1\" text-anchor=\"middle\" font-size=\"31.3\" font-weight=\"800\" fill=\"white\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"216.2\" y=\"1297\" text-anchor=\"middle\" font-size=\"31.3\" fill=\"white\">&lt; 120%</text><text x=\"336\" y=\"1254.1\" font-size=\"30\" fill=\"white\">客户数</text><text data-operating-metric=\"customers\" x=\"507.9\" y=\"1254.1\" font-size=\"30\" fill=\"white\">26,800</text><text x=\"608.1\" y=\"1254.1\" font-size=\"28.6\" fill=\"white\">同比 +21%</text><text x=\"356.8\" y=\"1295.7\" font-size=\"30\" fill=\"white\">&gt; $100K 客户</text><text data-operating-metric=\"large_customers\" x=\"490.9\" y=\"1295.7\" font-size=\"30\" fill=\"white\">3,130</text><text x=\"582.1\" y=\"1295.7\" font-size=\"28.6\" fill=\"white\">同比 +20%</text><text x=\"209.7\" y=\"1384.3\" font-size=\"28.6\" fill=\"#777777\">DBNR = 美元净留存率</text></g>",
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +22%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +34%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +25%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 81%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (1%)",
            "同比 +6 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 44%",
            "同比 (3 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 29%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 884.2,
                "top": 530,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.1,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
                    "size": 28.6,
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
                "x": 1350.4,
                "top": 389.4,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.1,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "利润率 81%",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.6,
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
                "x": 1350.4,
                "top": 1063.9,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.1,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.1,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1597.9,
                "top": 1047,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.1,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 39.1,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (1%)",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28.6,
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
                "x": 1814,
                "top": 530,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.1,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.1,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2440.4,
                "top": 502.7,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.3,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.3,
                    "weight": 400
                  },
                  {
                    "text": "占收入 44%",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2440.4,
                "top": 803.5,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.3,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.3,
                    "weight": 400
                  },
                  {
                    "text": "占收入 29%",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.6,
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
                "x": 2440.4,
                "top": 1063.9,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.3,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.3,
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "north_america": {
            "blocks": [
              {
                "x": 415.4,
                "top": 468.8,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 216.2,
                "top": 645.1,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.1,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 415.4,
                "top": 911.6,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 +34%",
                    "size": 28.6,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 216.2,
                "top": 1032.7,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.1,
                    "weight": 800
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
      "id": "dbnr",
      "label": "DBNR",
      "value": "120",
      "unit": "%",
      "currency": null,
      "comparison": "lt",
      "literal": "< 120%",
      "basis": "unspecified",
      "notes": [],
      "quote": "DBNR\n< 120%",
      "anchor": {
        "type": "image-box",
        "box": [
          124,
          1179,
          185,
          168
        ]
      }
    },
    {
      "id": "customers",
      "label": "Customers",
      "value": "26800",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "26,800",
      "basis": "unspecified",
      "notes": [
        "+21% Y/Y"
      ],
      "quote": "Customers 26,800 +21% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          320,
          1179,
          434,
          168
        ]
      }
    },
    {
      "id": "large_customers",
      "label": "> $100K",
      "value": "3130",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "3,130",
      "basis": "unspecified",
      "notes": [
        "+20% Y/Y"
      ],
      "quote": "> $100K 3,130 +20% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          320,
          1179,
          434,
          168
        ]
      }
    }
  ]
});
