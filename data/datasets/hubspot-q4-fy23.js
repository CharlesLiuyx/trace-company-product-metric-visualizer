window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "hubspot-q4-fy23",
  "name": "HubSpot · Q4 FY23",
  "company": "HubSpot",
  "meta": {
    "company": "HubSpot",
    "title": "HubSpot Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hubspot-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2265.908203125,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "titleColor": "#155277",
    "subtitleColor": "#707070",
    "noteColor": "#707070",
    "palette": {
      "source": {
        "node": "#33495f",
        "label": "#33495f"
      },
      "hub": {
        "node": "#33495f",
        "label": "#33495f"
      },
      "profit": {
        "node": "#2aa22a",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d40000",
        "label": "#8f1200"
      }
    },
    "linkTint": {
      "source": "#9aa5ab",
      "hub": "#9bcd9b",
      "profit": "#9bcd9b",
      "cost": "#e38284"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 570,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+24% Y/Y",
        "87% gross margin"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 12,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+2% Y/Y",
        "(18%) gross margin"
      ],
      "color": "#ff7759",
      "labelColor": "#ff7759"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 582,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 493,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "85% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 89,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 24,
      "type": "cost",
      "col": 3,
      "order": 5,
      "notes": [
        "(4%) margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 518,
      "type": "cost",
      "col": 4,
      "order": 6,
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 281,
      "type": "cost",
      "col": 5,
      "order": 7,
      "notes": [
        "48% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 163,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "28% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 70,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "12% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 4,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "1% of revenue"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 570,
      "sourceWidth": 273.4716796875,
      "targetWidth": 272.16943359375,
      "y0": 657.63427734375,
      "y1": 823.670654296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ba5ae"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 12,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "y0": 1058.72607421875,
      "y1": 962.35986328125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#ffb7a7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 493,
      "sourceWidth": 235.70654296875,
      "targetWidth": 235.70654296875,
      "y0": 805.439208984375,
      "y1": 634.844970703125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 89,
      "sourceWidth": 41.671875,
      "targetWidth": 42.97412109375,
      "y0": 944.12841796875,
      "y1": 1069.795166015625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 493,
      "sourceWidth": 235.70654296875,
      "targetWidth": 235.70654296875,
      "y0": 634.844970703125,
      "y1": 801.532470703125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 24,
      "sourceWidth": 10.41796875,
      "targetWidth": 11.72021484375,
      "y0": 1061.33056640625,
      "y1": 925.245849609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 281,
      "sourceWidth": 134.13134765625,
      "targetWidth": 134.13134765625,
      "y0": 750.744873046875,
      "y1": 572.337158203125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 163,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "y0": 856.8779296875,
      "y1": 856.8779296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 70,
      "sourceWidth": 32.55615234375,
      "targetWidth": 33.8583984375,
      "y0": 912.223388671875,
      "y1": 1089.97998046875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 4,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 929.8037109375,
      "y1": 1285.31689453125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 0.367,
    "nodes": {
      "subscription": {
        "x": 385.46484375,
        "y": 520.8984375,
        "width": 72.92578125,
        "height": 273.4716796875
      },
      "professional_services": {
        "x": 385.46484375,
        "y": 1056.12158203125,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "revenue": {
        "x": 852.97119140625,
        "y": 687.5859375,
        "width": 72.92578125,
        "height": 277.37841796875
      },
      "gross_profit": {
        "x": 1315.2685546875,
        "y": 516.99169921875,
        "width": 72.92578125,
        "height": 235.70654296875
      },
      "cost_of_revenue": {
        "x": 1324.38427734375,
        "y": 1048.30810546875,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "operating_loss": {
        "x": 1530.13916015625,
        "y": 1056.12158203125,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "operating_expenses": {
        "x": 1799.7041015625,
        "y": 683.67919921875,
        "width": 72.92578125,
        "height": 247.4267578125
      },
      "sm": {
        "x": 2254.18798828125,
        "y": 505.271484375,
        "width": 72.92578125,
        "height": 134.13134765625
      },
      "rnd": {
        "x": 2254.18798828125,
        "y": 817.810546875,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "ga": {
        "x": 2254.18798828125,
        "y": 1073.05078125,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "restructuring": {
        "x": 2254.18798828125,
        "y": 1284.0146484375,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 424.5322265625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "+24% Y/Y",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 333.375,
            "top": 630.287109375,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Subscription",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "87% gross margin",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 955.8486328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "+2% Y/Y",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 333.375,
            "top": 987.1025390625,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Professional",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "services",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(18%) gross margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 890.736328125,
            "top": 536.525390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 27.34716796875,
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
            "x": 1351.7314453125,
            "top": 329.46826171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "85% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1359.544921875,
            "top": 1101.7001953125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1566.60205078125,
            "top": 1080.8642578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1836.1669921875,
            "top": 518.2939453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
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
            "x": 2445.6181640625,
            "top": 516.99169921875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "48% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2445.6181640625,
            "top": 786.556640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "28% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2445.6181640625,
            "top": 1039.1923828125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2445.6181640625,
            "top": 1263.1787109375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "1% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
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
      "value": "205000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "205K",
      "basis": "unspecified",
      "notes": [
        "+23% Y/Y"
      ],
      "quote": "Customers 205K +23% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          234,
          1240,
          404,
          39
        ]
      }
    },
    {
      "id": "average_revenue",
      "label": "Average Revenue",
      "value": "11.365",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$11,365",
      "basis": "unspecified",
      "notes": [
        "+1% Y/Y"
      ],
      "quote": "Average Revenue $11,365 +1% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          176,
          1285,
          514,
          39
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"147.15380859375\" y=\"1228.01806640625\" width=\"570.3837890625\" height=\"110.69091796875\" rx=\"36.462890625\" fill=\"#33475b\"/><text x=\"239.61328125\" y=\"1273.5966796875\" font-size=\"29.95166015625\" fill=\"#ffffff\">Customers</text><text data-operating-metric=\"customers\" x=\"410.20751953125\" y=\"1273.5966796875\" font-size=\"29.95166015625\" fill=\"#ffffff\">205K</text><text x=\"492.2490234375\" y=\"1273.5966796875\" font-size=\"29.95166015625\" fill=\"#ffffff\">+23% Y/Y</text><text x=\"177.10546875\" y=\"1315.2685546875\" font-size=\"29.95166015625\" fill=\"#ffffff\">Average Revenue</text><text data-operating-metric=\"average_revenue\" x=\"449.27490234375\" y=\"1315.2685546875\" font-size=\"29.95166015625\" fill=\"#ffffff\">$11,365</text><text x=\"567.779296875\" y=\"1315.2685546875\" font-size=\"29.95166015625\" fill=\"#ffffff\">+1% Y/Y</text><text x=\"170.59423828125\" y=\"1437.6796875\" font-size=\"37.76513671875\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/hubspot/company-wordmark.png",
      "x": 592.52197265625,
      "y": 253.93798828125,
      "width": 584.70849609375,
      "height": 158.8740234375
    }
  ],
  "i18n": {
    "zh": {
      "name": "HubSpot · 2023 财年第四季度",
      "meta": {
        "title": "HubSpot 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "titleTextLength": 2213.818359375
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +24%",
            "毛利率 87%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +2%",
            "毛利率 (18%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +24%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 85%",
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
            "利润率 (4%)",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 48%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 28%",
            "同比 +3 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 12%",
            "同比 +1 个百分点"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 1%"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 424.5322265625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "同比 +24%",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 333.375,
                "top": 630.287109375,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 87%",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 955.8486328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "同比 +2%",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 333.375,
                "top": 987.1025390625,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 (18%)",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 890.736328125,
                "top": 536.525390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.34716796875,
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
                "x": 1351.7314453125,
                "top": 329.46826171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 85%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
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
                "x": 1359.544921875,
                "top": 1101.7001953125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1566.60205078125,
                "top": 1080.8642578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
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
                "x": 1836.1669921875,
                "top": 518.2939453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2445.6181640625,
                "top": 516.99169921875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 48%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2445.6181640625,
                "top": 786.556640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34716796875,
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
                "x": 2445.6181640625,
                "top": 1039.1923828125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "行政",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2445.6181640625,
                "top": 1263.1787109375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"147.15380859375\" y=\"1228.01806640625\" width=\"570.3837890625\" height=\"110.69091796875\" rx=\"36.462890625\" fill=\"#33475b\"/><text x=\"239.61328125\" y=\"1273.5966796875\" font-size=\"29.95166015625\" fill=\"#ffffff\">客户数</text><text data-operating-metric=\"customers\" x=\"410.20751953125\" y=\"1273.5966796875\" font-size=\"29.95166015625\" fill=\"#ffffff\">205K</text><text x=\"492.2490234375\" y=\"1273.5966796875\" font-size=\"29.95166015625\" fill=\"#ffffff\">同比 +23%</text><text x=\"177.10546875\" y=\"1315.2685546875\" font-size=\"29.95166015625\" fill=\"#ffffff\">平均收入</text><text data-operating-metric=\"average_revenue\" x=\"449.27490234375\" y=\"1315.2685546875\" font-size=\"29.95166015625\" fill=\"#ffffff\">$11,365</text><text x=\"567.779296875\" y=\"1315.2685546875\" font-size=\"29.95166015625\" fill=\"#ffffff\">同比 +1%</text><text x=\"170.59423828125\" y=\"1437.6796875\" font-size=\"37.76513671875\" font-weight=\"800\">来源：季度业绩</text></g>"
    }
  }
});
