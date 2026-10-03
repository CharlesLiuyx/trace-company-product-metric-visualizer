(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "docusign-q2-fy27",
  "name": "DocuSign · Q2 FY27",
  "company": "DocuSign",
  "meta": {
    "company": "DocuSign",
    "title": "DocuSign Q2 FY27 Income Statement",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/docusign-q2-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333,
    "titleY": 199.2188,
    "titleSize": 119.7917,
    "titleWeight": 800,
    "periodX": 194.0104,
    "periodY": 338.5417,
    "periodNoteY": 380.2083,
    "logoX": 401.0417,
    "logoY": 263.0208,
    "logoWidth": 924.4792,
    "logoHeight": 152.3438,
    "logoViewBox": "0 0 923 152",
    "logoSvg": "\n        <path d=\"M34 1 H77 A43 43 0 0 1 77 87 H34 Z\" fill=\"#ff5252\"/>\n        <rect x=\"1\" y=\"35\" width=\"85\" height=\"86\" rx=\"16\" fill=\"#4c00ff\"/>\n        <path d=\"M35 35 H68 L117 53 V87 H35 Z\" fill=\"#000000\"/>\n        <text x=\"149\" y=\"120\" font-family=\"Montserrat,Arial,sans-serif\"\n          font-size=\"145\" font-weight=\"700\" textLength=\"599\" lengthAdjust=\"spacingAndGlyphs\"\n          fill=\"#000000\">docusign</text>\n        <text x=\"728\" y=\"30\" font-family=\"Montserrat,Arial,sans-serif\"\n          font-size=\"20\" font-weight=\"600\" fill=\"#000000\">™</text>\n      "
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#269f26",
        "label": "#00945b"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51a00"
      }
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 22,
      "lineGap": 9.1146
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Subscription",
      "value": 854,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Professional",
        "Services"
      ],
      "value": 22,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+34% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 876,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 698,
      "color": "#269f26",
      "labelColor": "#00945b",
      "notes": [
        "80% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 178,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 5,
      "type": "profit",
      "label": "Operating profit",
      "value": 118,
      "color": "#269f26",
      "labelColor": "#00945b",
      "notes": [
        "13% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 580,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": []
    },
    {
      "id": "interest",
      "col": 4,
      "order": 7,
      "type": "profit",
      "label": "Interest",
      "value": 7,
      "color": "#269f26",
      "labelColor": "#00945b",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 8,
      "type": "profit",
      "label": "Net profit",
      "value": 78,
      "color": "#269f26",
      "labelColor": "#00945b",
      "notes": [
        "9% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "Tax",
      "value": 47,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": []
    },
    {
      "id": "sm",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "S&M",
      "value": 314,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": [
        "36% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "R&D",
      "value": 164,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": [
        "19% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": "G&A",
      "value": 103,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": [
        "12% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 854,
      "sourceWidth": 319.0104,
      "targetWidth": 320.3125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 22,
      "sourceWidth": 7.8125,
      "targetWidth": 7.8125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 698,
      "sourceWidth": 261.7188,
      "targetWidth": 261.7188,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 178,
      "sourceWidth": 66.4062,
      "targetWidth": 66.4062,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 118,
      "sourceWidth": 44.2708,
      "targetWidth": 44.2708,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 580,
      "sourceWidth": 217.4479,
      "targetWidth": 216.1458,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 71,
      "sourceWidth": 26.0417,
      "targetWidth": 27.3438,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 47,
      "sourceWidth": 18.2292,
      "targetWidth": 18.2292,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 7,
      "sourceWidth": 2.6042,
      "targetWidth": 2.6042,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cc99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 314,
      "sourceWidth": 117.1875,
      "targetWidth": 117.1875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 164,
      "sourceWidth": 61.1979,
      "targetWidth": 61.1979,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 103,
      "sourceWidth": 37.7604,
      "targetWidth": 37.7604,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "layout": {
    "nodes": {
      "subscription": {
        "x": 363.2812,
        "y": 513.0208,
        "width": 72.9167,
        "height": 319.0104
      },
      "professional_services": {
        "x": 363.2812,
        "y": 1054.6875,
        "width": 72.9167,
        "height": 7.8125
      },
      "revenue": {
        "x": 829.4271,
        "y": 618.4896,
        "width": 72.9167,
        "height": 328.125
      },
      "gross_profit": {
        "x": 1296.875,
        "y": 514.3229,
        "width": 72.9167,
        "height": 261.7188
      },
      "cost_of_revenue": {
        "x": 1296.875,
        "y": 990.8854,
        "width": 72.9167,
        "height": 66.4062
      },
      "operating_profit": {
        "x": 1764.3229,
        "y": 436.1979,
        "width": 72.9167,
        "height": 44.2708
      },
      "operating_expenses": {
        "x": 1764.3229,
        "y": 670.5729,
        "width": 72.9167,
        "height": 216.1458
      },
      "interest": {
        "x": 2106.7708,
        "y": 428.3854,
        "width": 72.9167,
        "height": 2.6042
      },
      "net_profit": {
        "x": 2230.4688,
        "y": 333.3333,
        "width": 72.9167,
        "height": 29.9479
      },
      "tax": {
        "x": 2230.4688,
        "y": 566.4062,
        "width": 72.9167,
        "height": 18.2292
      },
      "sm": {
        "x": 2230.4688,
        "y": 772.1354,
        "width": 72.9167,
        "height": 117.1875
      },
      "rnd": {
        "x": 2230.4688,
        "y": 1016.9271,
        "width": 72.9167,
        "height": 61.1979
      },
      "ga": {
        "x": 2230.4688,
        "y": 1213.5417,
        "width": 72.9167,
        "height": 37.7604
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 865.8854,
            "top": 470.0521,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 28.6458,
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
            "x": 1333.3333,
            "top": 326.8229,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "80% margin",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28.6458,
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
            "x": 1333.3333,
            "top": 1071.6146,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.8542,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 33.8542,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 33.8542,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1800.7812,
            "top": 247.3958,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "13% margin",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28.6458,
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
            "x": 1800.7812,
            "top": 898.4375,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2143.2292,
            "top": 445.3125,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Interest",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2460.9375,
            "top": 294.2708,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "9% margin",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2460.9375,
            "top": 535.1562,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Tax",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2460.9375,
            "top": 764.3229,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "S&M",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              },
              {
                "text": "36% of revenue",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28.6458,
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
            "x": 2460.9375,
            "top": 972.6562,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "R&D",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              },
              {
                "text": "19% of revenue",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.6458,
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
            "x": 2460.9375,
            "top": 1180.9896,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "G&A",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 399.7396,
            "top": 415.3646,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 196.6146,
            "top": 648.9292,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 399.7396,
            "top": 955.7292,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+34% Y/Y",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 196.6146,
            "top": 1013.5125,
            "anchor": "middle",
            "lineGap": 3.9062,
            "lines": [
              {
                "text": "Professional",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "Services",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "customers",
      "label": "Customers",
      "value": "1900000",
      "literal": "1.9M",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+10% Y/Y"
      ],
      "quote": "Customers 1.9M (+10% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          169,
          1208,
          413,
          40
        ]
      }
    },
    {
      "id": "enterprise",
      "label": "Enterprise",
      "value": "289000",
      "literal": "289K",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+7% Y/Y"
      ],
      "quote": "Enterprise 289K (+7% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          184,
          1255,
          393,
          38
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"140.6250\" y=\"1175.7812\" width=\"464.8438\" height=\"148.4375\" rx=\"27.3438\" fill=\"#000000\"/><text x=\"335.9375\" y=\"1243.4896\" text-anchor=\"end\" font-size=\"29.9479\" font-weight=\"700\" fill=\"#ffffff\">Customers</text><text data-operating-metric=\"customers\" x=\"346.3542\" y=\"1243.4896\" font-size=\"29.9479\" fill=\"#ffffff\">1.9M</text><text x=\"423.1771\" y=\"1243.4896\" font-size=\"26.0417\" fill=\"#ffffff\">(+10% Y/Y)</text><text x=\"335.9375\" y=\"1286.4583\" text-anchor=\"end\" font-size=\"29.9479\" font-weight=\"700\" fill=\"#ffffff\">Enterprise</text><text data-operating-metric=\"enterprise\" x=\"346.3542\" y=\"1286.4583\" font-size=\"29.9479\" fill=\"#ffffff\">289K</text><text x=\"423.1771\" y=\"1286.4583\" font-size=\"26.0417\" fill=\"#ffffff\">(+7% Y/Y)</text></g>",
  "i18n": {
    "zh": {
      "name": "DocuSign · 2027 财年第二季度",
      "meta": {
        "title": "DocuSign 2027 财年第二季度利润表",
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "titleSize": 101.5625
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +9%"
          ]
        },
        "professional_services": {
          "label": [
            "专业",
            "服务"
          ],
          "notes": [
            "同比 +34%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 80%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 13%",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 9%",
            "同比 +1 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "S&M（销售与市场）",
          "notes": [
            "占收入 36%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "R&D（研发）",
          "notes": [
            "占收入 19%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "G&A（管理）",
          "notes": [
            "占收入 12%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 865.8854,
                "top": 470.0521,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28.6458,
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
                "x": 1333.3333,
                "top": 326.8229,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 80%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28.6458,
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
                "x": 1333.3333,
                "top": 1071.6146,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.8542,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 33.8542,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 33.8542,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1800.7812,
                "top": 247.3958,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 13%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28.6458,
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
                "x": 1800.7812,
                "top": 898.4375,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2143.2292,
                "top": 445.3125,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "利息",
                    "size": 29.9479,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2460.9375,
                "top": 294.2708,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 9%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2460.9375,
                "top": 535.1562,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.9479,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2460.9375,
                "top": 764.3229,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "S&M（销售与市场）",
                    "size": 28.6458,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  },
                  {
                    "text": "占收入 36%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28.6458,
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
                "x": 2460.9375,
                "top": 972.6562,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "R&D（研发）",
                    "size": 28.6458,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  },
                  {
                    "text": "占收入 19%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.6458,
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
                "x": 2460.9375,
                "top": 1180.9896,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "G&A（管理）",
                    "size": 28.6458,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 399.7396,
                "top": 415.3646,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 196.6146,
                "top": 648.9292,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 399.7396,
                "top": 955.7292,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +34%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 196.6146,
                "top": 1013.5125,
                "anchor": "middle",
                "lineGap": 3.9062,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "服务",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"140.6250\" y=\"1175.7812\" width=\"464.8438\" height=\"148.4375\" rx=\"27.3438\" fill=\"#000000\"/><text x=\"292.9688\" y=\"1243.4896\" text-anchor=\"end\" font-size=\"29.9479\" font-weight=\"700\" fill=\"#ffffff\">客户</text><text data-operating-metric=\"customers\" x=\"300.7812\" y=\"1243.4896\" font-size=\"29.9479\" fill=\"#ffffff\">1.9M</text><text x=\"380.2083\" y=\"1243.4896\" font-size=\"26.0417\" fill=\"#ffffff\">(同比 +10%)</text><text x=\"292.9688\" y=\"1286.4583\" text-anchor=\"end\" font-size=\"29.9479\" font-weight=\"700\" fill=\"#ffffff\">企业客户</text><text data-operating-metric=\"enterprise\" x=\"300.7812\" y=\"1286.4583\" font-size=\"29.9479\" fill=\"#ffffff\">289K</text><text x=\"380.2083\" y=\"1286.4583\" font-size=\"26.0417\" fill=\"#ffffff\">(同比 +7%)</text></g>"
    }
  }
});})();
