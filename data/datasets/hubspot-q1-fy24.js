window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "hubspot-q1-fy24",
  "name": "HubSpot · Q1 FY24",
  "company": "HubSpot",
  "meta": {
    "company": "HubSpot",
    "title": "HubSpot Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hubspot-q1-fy24.png",
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
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#33475b",
        "label": "#33475b"
      },
      "hub": {
        "node": "#33475b",
        "label": "#33475b"
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
      "source": "#9ca5ae",
      "hub": "#99cd99",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 22,
      "lineGap": 7
    }
  },
  "annotationsSvg": "<g><rect x=\"147.15380859375\" y=\"1228.01806640625\" width=\"569.08154296875\" height=\"110.69091796875\" rx=\"32.55615234375\" fill=\"#33475b\"/><text x=\"240.91552734375\" y=\"1273.5966796875\" font-size=\"31.25390625\" font-weight=\"700\" fill=\"#ffffff\">Customers</text><text data-operating-metric=\"customers\" x=\"412.81201171875\" y=\"1273.5966796875\" font-size=\"31.25390625\" fill=\"#ffffff\">217K</text><text x=\"488.34228515625\" y=\"1273.5966796875\" font-size=\"31.25390625\" fill=\"#ffffff\">+22% Y/Y</text><text x=\"178.40771484375\" y=\"1315.2685546875\" font-size=\"31.25390625\" font-weight=\"700\" fill=\"#ffffff\">Average Revenue</text><text data-operating-metric=\"average_revenue\" x=\"442.763671875\" y=\"1315.2685546875\" font-size=\"31.25390625\" fill=\"#ffffff\">$11,447</text><text x=\"572.98828125\" y=\"1315.2685546875\" font-size=\"31.25390625\" fill=\"#ffffff\">+1% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/hubspot/company-wordmark.png",
      "x": 586.0107421875,
      "y": 243.52001953125,
      "width": 605.54443359375,
      "height": 175.80322265625
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "subscription": {
        "x": 385.46484375,
        "y": 548.24560546875,
        "width": 72.92578125,
        "height": 328.166015625
      },
      "professional_services": {
        "x": 385.46484375,
        "y": 1113.42041015625,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "revenue": {
        "x": 852.97119140625,
        "y": 684.9814453125,
        "width": 72.92578125,
        "height": 334.67724609375
      },
      "gross_profit": {
        "x": 1320.4775390625,
        "y": 549.5478515625,
        "width": 72.92578125,
        "height": 285.19189453125
      },
      "cost_of_revenue": {
        "x": 1321.77978515625,
        "y": 1078.259765625,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "operating_loss": {
        "x": 1565.2998046875,
        "y": 1035.28564453125,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "operating_expenses": {
        "x": 1784.0771484375,
        "y": 686.28369140625,
        "width": 72.92578125,
        "height": 296.912109375
      },
      "sm": {
        "x": 2254.18798828125,
        "y": 548.24560546875,
        "width": 72.92578125,
        "height": 162.78076171875
      },
      "rnd": {
        "x": 2254.18798828125,
        "y": 856.8779296875,
        "width": 72.92578125,
        "height": 95.06396484375
      },
      "ga": {
        "x": 2254.18798828125,
        "y": 1106.9091796875,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "restructuring": {
        "x": 2254.18798828125,
        "y": 1288,
        "width": 72.92578125,
        "height": 1
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 454.48388671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 334.67724609375,
            "top": 631.58935546875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "87% gross margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 1015.751953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 334.67724609375,
            "top": 988.40478515625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Professional",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "services",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(5%) gross margin",
                "size": 28.6494140625,
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
            "x": 889.43408203125,
            "top": 539.1298828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 28.6494140625,
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
            "x": 1356.9404296875,
            "top": 363.32666015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "85% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28.6494140625,
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
            "x": 1358.24267578125,
            "top": 1145.9765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1601.7626953125,
            "top": 1067.841796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(4%) margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28.6494140625,
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
            "x": 1820.5400390625,
            "top": 523.5029296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "top": 554.7568359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "49% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.6494140625,
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
            "x": 2445.6181640625,
            "top": 791.765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "28% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.6494140625,
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
            "x": 2445.6181640625,
            "top": 1018.3564453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28.6494140625,
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
            "x": 2445.6181640625,
            "top": 1237.1337890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#666666"
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
      "value": 604.0,
      "notes": [
        "+23% Y/Y",
        "87% gross margin"
      ],
      "color": "#33475b",
      "labelColor": "#33475b",
      "linkTint": "#9ca5ae"
    },
    {
      "id": "professional_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Professional services",
      "value": 14.0,
      "notes": [
        "+15% Y/Y",
        "(5%) gross margin"
      ],
      "color": "#ff7a59",
      "labelColor": "#ff7a59",
      "linkTint": "#f7bcad"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 617.0,
      "notes": [
        "+23% Y/Y"
      ],
      "color": "#33475b",
      "labelColor": "#33475b",
      "linkTint": "#99cd99"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 522.0,
      "notes": [
        "85% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 95.0,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating loss",
      "value": 23,
      "notes": [
        "(4%) margin",
        "+5pp Y/Y"
      ],
      "valueText": "($23M)"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 546.0,
      "notes": []
    },
    {
      "id": "sm",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 300.0,
      "notes": [
        "49% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Research & development",
      "value": 176.0,
      "notes": [
        "28% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "General & admin",
      "value": 69.0,
      "notes": [
        "11% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "Restructuring",
      "value": 1.0,
      "notes": [
        "1% of revenue",
        "(6pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 604,
      "sourceWidth": 328.166015625,
      "targetWidth": 326.86376953125,
      "y0": 712.32861328125,
      "y1": 848.413330078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ca5ae"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 14,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "y0": 1117.3271484375,
      "y1": 1015.751953125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f7bcad"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 522,
      "sourceWidth": 283.8896484375,
      "targetWidth": 285.19189453125,
      "y0": 826.92626953125,
      "y1": 692.143798828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 95,
      "sourceWidth": 50.78759765625,
      "targetWidth": 52.08984375,
      "y0": 994.264892578125,
      "y1": 1104.3046875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 522,
      "sourceWidth": 285.19189453125,
      "targetWidth": 283.8896484375,
      "y0": 692.143798828125,
      "y1": 828.228515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 23,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "y0": 1041.796875,
      "y1": 976.6845703125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 300,
      "sourceWidth": 162.78076171875,
      "targetWidth": 162.78076171875,
      "y0": 767.674072265625,
      "y1": 629.635986328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 176,
      "sourceWidth": 95.06396484375,
      "targetWidth": 95.06396484375,
      "y0": 896.596435546875,
      "y1": 904.409912109375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 69,
      "sourceWidth": 37.76513671875,
      "targetWidth": 36.462890625,
      "y0": 963.010986328125,
      "y1": 1125.140625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1,
      "y0": 982.544677734375,
      "y1": 1288.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "HubSpot · 2024 财年第一季度",
      "meta": {
        "title": "HubSpot 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "titleSize": 114.59765625,
        "titleTextLength": 2148.7060546875
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +23%",
            "毛利率 87%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +15%",
            "毛利率 (5%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +23%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 85%",
            "同比 +1 个百分点"
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
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 49%",
            "同比 (1 个百分点)"
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
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 (0 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 1%",
            "同比 (6 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 454.48388671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 334.67724609375,
                "top": 631.58935546875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 87%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 1015.751953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 334.67724609375,
                "top": 988.40478515625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 (5%)",
                    "size": 28.6494140625,
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
                "x": 889.43408203125,
                "top": 539.1298828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28.6494140625,
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
                "x": 1356.9404296875,
                "top": 363.32666015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 85%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28.6494140625,
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
                "x": 1358.24267578125,
                "top": 1145.9765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1601.7626953125,
                "top": 1067.841796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28.6494140625,
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
                "x": 1820.5400390625,
                "top": 523.5029296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "top": 554.7568359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 49%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.6494140625,
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
                "x": 2445.6181640625,
                "top": 791.765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 28%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.6494140625,
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
                "x": 2445.6181640625,
                "top": 1018.3564453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "管理",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28.6494140625,
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
                "x": 2445.6181640625,
                "top": 1237.1337890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"147.15380859375\" y=\"1228.01806640625\" width=\"569.08154296875\" height=\"110.69091796875\" rx=\"32.55615234375\" fill=\"#33475b\"/><text x=\"240.91552734375\" y=\"1273.5966796875\" font-size=\"31.25390625\" font-weight=\"700\" fill=\"#ffffff\">客户数</text><text data-operating-metric=\"customers\" x=\"412.81201171875\" y=\"1273.5966796875\" font-size=\"31.25390625\" fill=\"#ffffff\">217K</text><text x=\"488.34228515625\" y=\"1273.5966796875\" font-size=\"31.25390625\" fill=\"#ffffff\">同比 +22%</text><text x=\"178.40771484375\" y=\"1315.2685546875\" font-size=\"31.25390625\" font-weight=\"700\" fill=\"#ffffff\">平均收入</text><text data-operating-metric=\"average_revenue\" x=\"442.763671875\" y=\"1315.2685546875\" font-size=\"31.25390625\" fill=\"#ffffff\">$11,447</text><text x=\"572.98828125\" y=\"1315.2685546875\" font-size=\"31.25390625\" fill=\"#ffffff\">同比 +1%</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "customers",
      "label": "Customers",
      "value": "217000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "217K",
      "basis": "unspecified",
      "notes": [
        "+22% Y/Y"
      ],
      "quote": "Customers 217K +22% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          236,
          1241,
          396,
          42
        ]
      }
    },
    {
      "id": "average_revenue",
      "label": "Average Revenue",
      "value": "11.447",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$11,447",
      "basis": "unspecified",
      "notes": [
        "+1% Y/Y"
      ],
      "quote": "Average Revenue $11,447 +1% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          173,
          1284,
          521,
          40
        ]
      }
    }
  ]
});
