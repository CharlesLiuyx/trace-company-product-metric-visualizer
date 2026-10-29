(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "teladoc-q3-fy22",
  "name": "Teladoc Health · Q3 FY22",
  "company": "Teladoc Health",
  "meta": {
    "company": "Teladoc Health",
    "title": "Teladoc Q3 FY22 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/teladoc-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2202,
    "logoWidth": 500,
    "logoHeight": 160,
    "logoY": 244,
    "logoViewBox": "0 0 500 160",
    "logoSvg": "\n    <text x=\"-28\" y=\"84\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"99\" font-weight=\"800\"\n      letter-spacing=\"-8\" textLength=\"445\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#351f65\">Teladoc</text>\n    <circle cx=\"298\" cy=\"55\" r=\"15\" fill=\"#10b4dd\"/>\n    <text x=\"214\" y=\"149\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"47\" font-weight=\"700\"\n      letter-spacing=\"2\" fill=\"#10b4dd\">HEALTH</text>",
    "logoX": 640
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "revenue:left",
        "revenue:right",
        "operating_expenses:left",
        "operating_expenses:right"
      ]
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#351f65",
        "label": "#351f65"
      },
      "hub": {
        "node": "#351f65",
        "label": "#351f65"
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
      "source": "#9d93b2",
      "hub": "#9d93b2",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    }
  },
  "annotationsSvg": "<g><rect x=\"29\" y=\"1183\" width=\"209\" height=\"150\" rx=\"30\" fill=\"#351f65\"/><text x=\"133.5\" y=\"1236\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">Visits</text><text data-operating-metric=\"visits\" x=\"133.5\" y=\"1276\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">4.6M</text><text x=\"133.5\" y=\"1308\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+14% Y/Y</text></g><g><rect x=\"246\" y=\"1183\" width=\"209\" height=\"150\" rx=\"30\" fill=\"#351f65\"/><text x=\"350.5\" y=\"1236\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">Utilization</text><text data-operating-metric=\"utilization\" x=\"350.5\" y=\"1276\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">22.3%</text><text x=\"350.5\" y=\"1308\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+1.3pp Y/Y</text></g><g><rect x=\"464\" y=\"1183\" width=\"379\" height=\"150\" rx=\"30\" fill=\"#351f65\"/><text x=\"653.5\" y=\"1236\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">US Paid membership</text><text data-operating-metric=\"paid_membership\" x=\"653.5\" y=\"1276\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">58M</text><text x=\"653.5\" y=\"1308\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+10% Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "visits",
      "value": "4600000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "4.6M"
    },
    {
      "id": "utilization",
      "value": "22.3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "22.3%"
    },
    {
      "id": "paid_membership",
      "value": "58000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "58M"
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "access_fee": {
        "x": 358,
        "y": 458,
        "width": 72,
        "height": 367
      },
      "visit_fee": {
        "x": 358,
        "y": 961,
        "width": 72,
        "height": 45
      },
      "other": {
        "x": 358,
        "y": 1141,
        "width": 72,
        "height": 3
      },
      "revenue": {
        "x": 840,
        "y": 577,
        "width": 71,
        "height": 415
      },
      "gross_profit": {
        "x": 1277,
        "y": 491,
        "width": 73,
        "height": 289
      },
      "cost_of_revenue": {
        "x": 1277,
        "y": 941,
        "width": 73,
        "height": 126
      },
      "operating_loss": {
        "x": 1515,
        "y": 1143,
        "width": 72,
        "height": 49
      },
      "operating_expenses": {
        "x": 1716,
        "y": 572,
        "width": 71,
        "height": 338
      },
      "sales_marketing": {
        "x": 2212,
        "y": 670,
        "width": 72,
        "height": 158
      },
      "ga": {
        "x": 2212,
        "y": 898,
        "width": 72,
        "height": 76
      },
      "technology_development": {
        "x": 2212,
        "y": 1059,
        "width": 72,
        "height": 60
      },
      "depreciation_amortization": {
        "x": 2212,
        "y": 1218,
        "width": 72,
        "height": 43
      },
      "integration_costs": {
        "x": 2212,
        "y": 1349,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "access_fee": {
        "blocks": [
          {
            "x": 397,
            "top": 365,
            "lines": [
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
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 200,
            "top": 619,
            "lines": [
              {
                "text": "Access Fee",
                "size": 39,
                "weight": 800
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "visit_fee": {
        "blocks": [
          {
            "x": 397,
            "top": 868,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 233,
            "top": 960,
            "lines": [
              {
                "text": "Visit Fee",
                "size": 39,
                "weight": 800
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 397,
            "top": 1048,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(43%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 244,
            "top": 1123,
            "lines": [
              {
                "text": "Other",
                "size": 39,
                "weight": 800
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 875,
            "top": 430,
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
                "text": "+17% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1313,
            "top": 305,
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
                "text": "70% margin",
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1313,
            "top": 1080,
            "lines": [
              {
                "text": "Cost of",
                "size": 38,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1545,
            "top": 1211,
            "lines": [
              {
                "text": "Operating loss",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(12%) margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "Unchanged",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1752,
            "top": 413,
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
                "size": 39,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2461,
            "top": 713,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2461,
            "top": 898,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "technology_development": {
        "blocks": [
          {
            "x": 2461,
            "top": 1044,
            "lines": [
              {
                "text": "Technology &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2461,
            "top": 1180,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "amortization",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "integration_costs": {
        "blocks": [
          {
            "x": 2461,
            "top": 1311,
            "lines": [
              {
                "text": "Integration costs",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "access_fee",
      "label": "Access Fee",
      "value": 540,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+20% Y/Y"
      ],
      "color": "#351f65",
      "labelColor": "#351f65"
    },
    {
      "id": "visit_fee",
      "label": "Visit Fee",
      "value": 66,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#351f65",
      "labelColor": "#351f65"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 6,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(43%) Y/Y"
      ],
      "color": "#351f65",
      "labelColor": "#351f65"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 611,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+17% Y/Y"
      ],
      "color": "#351f65",
      "labelColor": "#351f65"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 426,
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "70% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 186,
      "type": "cost",
      "col": 2,
      "order": 1,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -72,
      "type": "cost",
      "col": 3,
      "order": 0,
      "notes": [
        "(12%) margin",
        "Unchanged"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 498,
      "type": "cost",
      "col": 4,
      "order": 0,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sales_marketing",
      "label": "Sales & marketing",
      "value": 233,
      "type": "cost",
      "col": 5,
      "order": 0,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 113,
      "type": "cost",
      "col": 5,
      "order": 1,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "technology_development",
      "label": "Technology & development",
      "value": 88,
      "type": "cost",
      "col": 5,
      "order": 2,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "depreciation_amortization",
      "label": "Depreciation & amortization",
      "value": 62,
      "type": "cost",
      "col": 5,
      "order": 3,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "integration_costs",
      "label": "Integration costs",
      "value": 2,
      "type": "cost",
      "col": 5,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "access_fee",
      "target": "revenue",
      "value": 540,
      "sourceWidth": 367,
      "targetWidth": 367,
      "y0": 641.5,
      "y1": 760.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9d93b3"
    },
    {
      "source": "visit_fee",
      "target": "revenue",
      "value": 66,
      "sourceWidth": 45,
      "targetWidth": 45,
      "y0": 983.5,
      "y1": 966.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9d93b3"
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 6,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 1142.5,
      "y1": 990.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9d93b3"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 426,
      "sourceWidth": 289,
      "targetWidth": 289,
      "y0": 721.5,
      "y1": 635.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 186,
      "sourceWidth": 126,
      "targetWidth": 126,
      "y0": 929,
      "y1": 1004,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 426,
      "sourceWidth": 289,
      "targetWidth": 289,
      "y0": 635.5,
      "y1": 716.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 72,
      "sourceWidth": 49,
      "targetWidth": 49,
      "y0": 1167.5,
      "y1": 885.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 233,
      "sourceWidth": 158,
      "targetWidth": 158,
      "y0": 651,
      "y1": 749,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 113,
      "sourceWidth": 76,
      "targetWidth": 76,
      "y0": 768,
      "y1": 936,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 88,
      "sourceWidth": 60,
      "targetWidth": 60,
      "y0": 836,
      "y1": 1089,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 62,
      "sourceWidth": 42,
      "targetWidth": 43,
      "y0": 887,
      "y1": 1239.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "integration_costs",
      "value": 2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 909,
      "y1": 1350,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Teladoc Health · 2022 财年第三季度",
      "meta": {
        "title": "Teladoc 2022 财年第三季度利润表",
        "titleSize": 110,
        "titleTextLength": 1640
      },
      "annotationsSvg": "<g><rect x=\"29\" y=\"1183\" width=\"209\" height=\"150\" rx=\"30\" fill=\"#351f65\"/><text x=\"133.5\" y=\"1236\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">访问量</text><text data-operating-metric=\"visits\" x=\"133.5\" y=\"1276\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">4.6M</text><text x=\"133.5\" y=\"1308\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">同比 +14%</text></g><g><rect x=\"246\" y=\"1183\" width=\"209\" height=\"150\" rx=\"30\" fill=\"#351f65\"/><text x=\"350.5\" y=\"1236\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">使用率</text><text data-operating-metric=\"utilization\" x=\"350.5\" y=\"1276\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">22.3%</text><text x=\"350.5\" y=\"1308\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">同比 +1.3 个百分点</text></g><g><rect x=\"464\" y=\"1183\" width=\"379\" height=\"150\" rx=\"30\" fill=\"#351f65\"/><text x=\"653.5\" y=\"1236\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">美国付费会员</text><text data-operating-metric=\"paid_membership\" x=\"653.5\" y=\"1276\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">58M</text><text x=\"653.5\" y=\"1308\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">同比 +10%</text></g>",
      "nodes": {
        "access_fee": {
          "label": "接入费",
          "notes": [
            "同比 +20%"
          ]
        },
        "visit_fee": {
          "label": "就诊费",
          "notes": [
            "同比 +5%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 (43%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +17%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 70%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (12%)",
            "同比持平"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "sales_marketing": {
          "label": "销售与市场"
        },
        "ga": {
          "label": "一般及行政费用"
        },
        "technology_development": {
          "label": "技术与开发"
        },
        "depreciation_amortization": {
          "label": "折旧与摊销"
        },
        "integration_costs": {
          "label": "整合成本"
        }
      },
      "layout": {
        "labels": {
          "access_fee": {
            "blocks": [
              {
                "x": 397,
                "top": 365,
                "lines": [
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
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 200,
                "top": 619,
                "lines": [
                  {
                    "text": "接入费",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "visit_fee": {
            "blocks": [
              {
                "x": 397,
                "top": 868,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 233,
                "top": 960,
                "lines": [
                  {
                    "text": "就诊费",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 397,
                "top": 1048,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (43%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 244,
                "top": 1123,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 875,
                "top": 430,
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
                    "text": "同比 +17%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1313,
                "top": 305,
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
                    "text": "利润率 70%",
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1313,
                "top": 1080,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1545,
                "top": 1211,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (12%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比持平",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1752,
                "top": 413,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2461,
                "top": 713,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2461,
                "top": 898,
                "lines": [
                  {
                    "text": "一般及行政费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2461,
                "top": 1044,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2461,
                "top": 1180,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "integration_costs": {
            "blocks": [
              {
                "x": 2461,
                "top": 1311,
                "lines": [
                  {
                    "text": "整合成本",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          }
        }
      }
    }
  }
});})();
