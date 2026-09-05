window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "monday-com-q2-fy26",
  "name": "Monday.com · Q2 FY26",
  "company": "Monday.com",
  "meta": {
    "company": "Monday.com",
    "title": "Monday.com Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/monday-com-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.68,
    "titleSize": 122,
    "titleWeight": 800,
    "titleTextLength": 2457
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "rd:left",
        "sm:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#959595",
      "hub": "#959595",
      "profit": "#99cd99",
      "cost": "#e08585"
    }
  },
  "nodes": [
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 365,
      "valueText": "$365M",
      "type": "hub",
      "col": 0,
      "order": 0,
      "color": "#333333",
      "labelColor": "#333333",
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 322,
      "valueText": "$322M",
      "type": "profit",
      "col": 1,
      "order": 1,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "88% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 43,
      "valueText": "($43M)",
      "type": "cost",
      "col": 1,
      "order": 2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -2,
      "valueText": "($2M)",
      "type": "cost",
      "col": 2,
      "order": 3,
      "color": "#c05959",
      "labelColor": "#941100",
      "notes": [
        "(0%) margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 324,
      "valueText": "($324M)",
      "type": "cost",
      "col": 3,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 162,
      "valueText": "($162M)",
      "type": "cost",
      "col": 4,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "45% of revenue",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "rd",
      "label": "Research & development",
      "value": 99,
      "valueText": "($99M)",
      "type": "cost",
      "col": 4,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "27% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 40,
      "valueText": "($40M)",
      "type": "cost",
      "col": 4,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "11% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 21,
      "valueText": "($21M)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "6% of revenue",
        "+6pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 322,
      "sourceWidth": 331,
      "y0": 794.5,
      "sourceOrder": 0,
      "targetWidth": 333,
      "y1": 685.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 43,
      "sourceWidth": 43,
      "y0": 982.5,
      "sourceOrder": 1,
      "targetWidth": 45,
      "y1": 1076.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 322,
      "sourceWidth": 333,
      "y0": 685.5,
      "sourceOrder": 0,
      "targetWidth": 333,
      "y1": 791.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 2,
      "sourceWidth": 2,
      "y0": 1024,
      "sourceOrder": 0,
      "targetWidth": 2,
      "y1": 959,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 162,
      "sourceWidth": 167.496,
      "y0": 708.748,
      "sourceOrder": 0,
      "targetWidth": 169,
      "y1": 446.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rd",
      "value": 99,
      "sourceWidth": 102.083,
      "y0": 843.537,
      "sourceOrder": 1,
      "targetWidth": 103,
      "y1": 742.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 40,
      "sourceWidth": 41.626,
      "y0": 915.392,
      "sourceOrder": 2,
      "targetWidth": 42,
      "y1": 981,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 21,
      "sourceWidth": 22.795,
      "y0": 947.602,
      "sourceOrder": 3,
      "targetWidth": 23,
      "y1": 1199.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "revenue": {
        "x": 415,
        "y": 629,
        "width": 71,
        "height": 375
      },
      "gross_profit": {
        "x": 1037,
        "y": 519,
        "width": 72,
        "height": 333
      },
      "cost_of_revenue": {
        "x": 1037,
        "y": 1054,
        "width": 72,
        "height": 45
      },
      "operating_loss": {
        "x": 1405,
        "y": 1023,
        "width": 71,
        "height": 2
      },
      "operating_expenses": {
        "x": 1660,
        "y": 624,
        "width": 72,
        "height": 336
      },
      "sm": {
        "x": 2283,
        "y": 362,
        "width": 71,
        "height": 169
      },
      "rd": {
        "x": 2283,
        "y": 691,
        "width": 71,
        "height": 103
      },
      "ga": {
        "x": 2283,
        "y": 960,
        "width": 71,
        "height": 42
      },
      "restructuring": {
        "x": 2283,
        "y": 1188,
        "width": 71,
        "height": 23
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 452.3333333333333,
            "top": 476.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000033,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#333333",
                "textLength": 162
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#333333",
                "textLength": 117
              },
              {
                "text": "+22% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#424242",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1079.375,
            "top": 330.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.74666666666667,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 224
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 117
              },
              {
                "text": "88% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1074.8333333333333,
            "top": 1113.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 18.784999999999968,
            "lines": [
              {
                "text": "Cost of",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 124
              },
              {
                "text": "revenue",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 143
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1443.5,
            "top": 1041.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.060000000000002,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 192
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 70
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 100
              },
              {
                "text": "(0%) margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 151
              },
              {
                "text": "+3pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1697.5,
            "top": 449.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.63500000000002,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 206
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 189
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 154
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2483.2,
            "top": 391.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 7.135000000000019,
            "lines": [
              {
                "text": "Sales &",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 106
              },
              {
                "text": "marketing",
                "size": 30.558,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "45% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 199
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "rd": {
        "blocks": [
          {
            "x": 2483.2,
            "top": 672.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 7.135000000000019,
            "lines": [
              {
                "text": "Research &",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 166
              },
              {
                "text": "development",
                "size": 30.754,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "27% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 198
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2483.2,
            "top": 917.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 9.63500000000002,
            "lines": [
              {
                "text": "General &",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 148
              },
              {
                "text": "admin",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 93
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "11% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 197
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2483.25,
            "top": 1164.1,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 6.413333333333337,
            "lines": [
              {
                "text": "Restructuring",
                "size": 30.627,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "6% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 182
              },
              {
                "text": "+6pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"46\" y=\"1146\" width=\"291\" height=\"150\" rx=\"31\" fill=\"#333333\"/><rect x=\"350\" y=\"1146\" width=\"348\" height=\"150\" rx=\"31\" fill=\"#333333\"/><text x=\"193\" y=\"1215.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">NDR 109%</text><text x=\"193\" y=\"1257.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">10+ users 113%</text><text x=\"525\" y=\"1215.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">Customers&gt; $50K+</text><text x=\"525\" y=\"1257.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">4,834 +31% Y/Y</text><text x=\"373\" y=\"1334.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">NDR = Net Dollar Retention</text><g transform=\"translate(30 630)\" data-typography-role=\"brand\">\n      <rect x=\"52\" y=\"34\" width=\"75\" height=\"166\" rx=\"37.5\" transform=\"rotate(32 89.5 117)\" fill=\"#ff285f\"/>\n      <rect x=\"180\" y=\"34\" width=\"75\" height=\"166\" rx=\"37.5\" transform=\"rotate(32 217.5 117)\" fill=\"#ffcc00\"/>\n      <circle cx=\"282\" cy=\"158\" r=\"39\" fill=\"#00c875\"/>\n      <text x=\"24\" y=\"265\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"53\" font-weight=\"800\" fill=\"#333333\"\n        textLength=\"230\" lengthAdjust=\"spacingAndGlyphs\">monday</text>\n      <text x=\"263\" y=\"265\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"28\" font-weight=\"700\" fill=\"#333333\">.com</text>\n    </g></g>",
  "i18n": {
    "preservedAnnotationText": [
      "ARR",
      "ARPAM",
      "GMV",
      "Clover GPV",
      "USDC",
      "Klarna Checkout (KCO)",
      "monday"
    ],
    "zh": {
      "name": "Monday.com · 2026 财年第二季度",
      "meta": {
        "title": "Monday.com 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleTextLength": 2200,
        "titleSize": 108
      },
      "nodes": {
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +22%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 88%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (0%)",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 45%",
            "同比 (6 个百分点)"
          ]
        },
        "rd": {
          "label": "研发",
          "notes": [
            "占收入 27%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 11%",
            "同比 (2 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 6%",
            "同比 +6 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 452.3333333333333,
                "top": 476.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000033,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#333333"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#333333",
                    "textLength": 117
                  },
                  {
                    "text": "同比 +22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#424242"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1079.375,
                "top": 330.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.74666666666667,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 117
                  },
                  {
                    "text": "利润率 88%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 1074.8333333333333,
                "top": 1113.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 18.784999999999968,
                "lines": [
                  {
                    "text": "成本：",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "收入",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 112
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1443.5,
                "top": 1041.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.060000000000002,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 100
                  },
                  {
                    "text": "利润率 (0%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1697.5,
                "top": 449.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.63500000000002,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 154
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2483.2,
                "top": 386.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 7.135000000000019,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "市场营销",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 45%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rd": {
            "blocks": [
              {
                "x": 2483.2,
                "top": 667.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 7.135000000000019,
                "lines": [
                  {
                    "text": "研发",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "开发",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
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
                "x": 2483.2,
                "top": 917.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 9.63500000000002,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2483.25,
                "top": 1159.8,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 6.413333333333337,
                "lines": [
                  {
                    "text": "重组",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"46\" y=\"1146\" width=\"291\" height=\"150\" rx=\"31\" fill=\"#333333\"/><rect x=\"350\" y=\"1146\" width=\"348\" height=\"150\" rx=\"31\" fill=\"#333333\"/><text x=\"193\" y=\"1215.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">净金额留存率 109%</text><text x=\"193\" y=\"1257.23\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#ffffff\">10 人以上客户 113%</text><text x=\"525\" y=\"1215.23\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#ffffff\">年收入超过 $50K 的客户</text><text x=\"525\" y=\"1257.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">4,834 同比 +31%</text><text x=\"373\" y=\"1334.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">NDR = 净金额留存率</text><g transform=\"translate(30 630)\" data-typography-role=\"brand\">\n      <rect x=\"52\" y=\"34\" width=\"75\" height=\"166\" rx=\"37.5\" transform=\"rotate(32 89.5 117)\" fill=\"#ff285f\"/>\n      <rect x=\"180\" y=\"34\" width=\"75\" height=\"166\" rx=\"37.5\" transform=\"rotate(32 217.5 117)\" fill=\"#ffcc00\"/>\n      <circle cx=\"282\" cy=\"158\" r=\"39\" fill=\"#00c875\"/>\n      <text x=\"24\" y=\"265\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"53\" font-weight=\"800\" fill=\"#333333\"\n       >monday</text>\n      <text x=\"263\" y=\"265\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"28\" font-weight=\"700\" fill=\"#333333\">.com</text>\n    </g></g>"
    }
  }
});
