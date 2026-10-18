window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spotify-q4-fy22",
  "name": "Spotify · Q4 FY22",
  "company": "Spotify",
  "meta": {
    "company": "Spotify",
    "title": "Spotify Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/spotify-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 199.21875,
    "titleSize": 122.39583333333333,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "logoWidth": 242.1875,
    "logoHeight": 242.1875,
    "logoX": 734.375,
    "logoY": 255.20833333333331,
    "logoViewBox": "0 0 186 186",
    "logoSvg": "<rect width=\"186\" height=\"186\" rx=\"32\" fill=\"#191414\"/><circle cx=\"93\" cy=\"93\" r=\"74\" fill=\"#1ed760\"/><path d=\"M49 69 Q93 56 140 79 M55 92 Q93 81 130 100 M59 114 Q93 105 121 123\" fill=\"none\" stroke=\"#191414\" stroke-width=\"12\" stroke-linecap=\"round\"/>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#818181",
    "noteColor": "#818181",
    "palette": {
      "source": {
        "node": "#0a0a0a",
        "label": "#0a0a0a"
      },
      "hub": {
        "node": "#0a0a0a",
        "label": "#0a0a0a"
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
      "source": "#858585",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "premium",
      "label": "Premium",
      "value": 2.7,
      "valueText": "€2.7B",
      "notes": [
        "+18% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "advertising",
      "label": "Ad-supported",
      "value": 0.4,
      "valueText": "€0.4B",
      "notes": [
        "+14% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.2,
      "valueText": "€3.2B",
      "notes": [
        "+18% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 2
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 0.8,
      "valueText": "€0.8B",
      "notes": [
        "25% margin",
        "(1pp) Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 3
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 2.4,
      "valueText": "(€2.4B)",
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 4
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -0.2,
      "valueText": "(€0.2B)",
      "notes": [
        "(7%) margin",
        "(7pp) Y/Y"
      ],
      "type": "cost",
      "col": 2,
      "order": 5
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.0,
      "valueText": "(€1.0B)",
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 6
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 0.5,
      "valueText": "(€0.5B)",
      "notes": [
        "14% of revenue",
        "+2pp Y/Y"
      ],
      "type": "cost",
      "col": 2,
      "order": 7
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [
        "9% of revenue",
        "+4pp Y/Y"
      ],
      "type": "cost",
      "col": 2,
      "order": 8
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 0.2,
      "valueText": "(€0.2B)",
      "notes": [
        "5% of revenue",
        "Unchanged"
      ],
      "type": "cost",
      "col": 2,
      "order": 9
    },
    {
      "id": "premium_cost",
      "label": "Premium",
      "value": 1.9,
      "valueText": "(€1.9B)",
      "notes": [
        "29% gross margin"
      ],
      "type": "cost",
      "col": 2,
      "order": 10
    },
    {
      "id": "advertising_cost",
      "label": "Ad-supported",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [
        "5% gross margin"
      ],
      "type": "cost",
      "col": 2,
      "order": 11
    }
  ],
  "links": [
    {
      "source": "premium",
      "target": "revenue",
      "value": 2.7,
      "sourceWidth": 252.60416666666666,
      "targetWidth": 252.60416666666666,
      "y0": 710.9375,
      "y1": 799.4791666666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 41.666666666666664,
      "targetWidth": 41.666666666666664,
      "y0": 1045.5729166666665,
      "y1": 946.6145833333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 0.8,
      "sourceWidth": 74.21875,
      "targetWidth": 74.21875,
      "y0": 710.2864583333333,
      "y1": 542.3177083333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.4,
      "sourceWidth": 220.05208333333331,
      "targetWidth": 218.75,
      "y0": 857.421875,
      "y1": 1028.6458333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.8,
      "sourceWidth": 74.21875,
      "targetWidth": 74.21875,
      "y0": 542.3177083333333,
      "y1": 632.1614583333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.2,
      "sourceWidth": 20.833333333333332,
      "targetWidth": 22.135416666666664,
      "y0": 753.90625,
      "y1": 680.3385416666666,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.5,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "y0": 614.5833333333333,
      "y1": 720.0520833333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.4,
      "sourceWidth": 41.666666666666664,
      "targetWidth": 41.666666666666664,
      "y0": 654.9479166666666,
      "y1": 958.3333333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 15.625,
      "targetWidth": 15.625,
      "y0": 683.59375,
      "y1": 1191.40625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "premium_cost",
      "value": 1.9,
      "sourceWidth": 179.6875,
      "targetWidth": 179.6875,
      "y0": 1009.1145833333333,
      "y1": 1076.8229166666665,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "advertising_cost",
      "value": 0.4,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "y0": 1118.4895833333333,
      "y1": 1260.4166666666665,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "489000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "489M"
    },
    {
      "id": "premium_subscribers",
      "value": "205000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "205M"
    },
    {
      "id": "ad_supported_subscribers",
      "value": "295000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "295M"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g><rect x=\"23\" y=\"923\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">MAU</text><text x=\"103.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"mau\">489M</text><text x=\"103.5\" y=\"1022\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">+20% Y/Y</text></g><g><rect x=\"194\" y=\"923\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">Premium Subs</text><text x=\"321.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"premium_subscribers\">205M</text><text x=\"321.5\" y=\"1022\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">+14% Y/Y</text></g><g><rect x=\"459\" y=\"923\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">Ad-supported Subs</text><text x=\"604.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_subscribers\">295M</text><text x=\"604.5\" y=\"1022\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">+25% Y/Y</text></g><text x=\"337\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" fill=\"#818181\">MAU = Monthly Average Users</text></g>",
  "layout": {
    "nodes": {
      "premium": {
        "x": 365.88541666666663,
        "y": 584.6354166666666,
        "width": 72.91666666666666,
        "height": 252.60416666666666
      },
      "advertising": {
        "x": 365.88541666666663,
        "y": 1024.7395833333333,
        "width": 72.91666666666666,
        "height": 41.666666666666664
      },
      "revenue": {
        "x": 828.125,
        "y": 673.1770833333333,
        "width": 72.91666666666666,
        "height": 294.2708333333333
      },
      "gross_profit": {
        "x": 1304.6875,
        "y": 505.2083333333333,
        "width": 72.91666666666666,
        "height": 74.21875
      },
      "cost_of_revenue": {
        "x": 1302.0833333333333,
        "y": 919.2708333333333,
        "width": 72.91666666666666,
        "height": 218.75
      },
      "operating_loss": {
        "x": 1567.7083333333333,
        "y": 743.4895833333333,
        "width": 72.91666666666666,
        "height": 20.833333333333332
      },
      "operating_expenses": {
        "x": 1799.4791666666665,
        "y": 595.0520833333333,
        "width": 72.91666666666666,
        "height": 96.35416666666666
      },
      "sm": {
        "x": 2234.375,
        "y": 700.5208333333333,
        "width": 72.91666666666666,
        "height": 39.0625
      },
      "rnd": {
        "x": 2234.375,
        "y": 937.5,
        "width": 72.91666666666666,
        "height": 41.666666666666664
      },
      "ga": {
        "x": 2234.375,
        "y": 1183.59375,
        "width": 72.91666666666666,
        "height": 15.625
      },
      "premium_cost": {
        "x": 1649.7395833333333,
        "y": 986.9791666666666,
        "width": 72.91666666666666,
        "height": 179.6875
      },
      "advertising_cost": {
        "x": 1649.7395833333333,
        "y": 1240.8854166666665,
        "width": 72.91666666666666,
        "height": 39.0625
      }
    },
    "labels": {
      "premium": {
        "blocks": [
          {
            "x": 402.34375,
            "top": 483.07291666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 184.89583333333331,
            "top": 687.5,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Premium",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 402.34375,
            "top": 923.1770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 184.89583333333331,
            "top": 1022.1354166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Ad-supported",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 864.5833333333333,
            "top": 514.3229166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1341.1458333333333,
            "top": 296.875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "25% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1338.5416666666665,
            "top": 1148.4375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1399.7395833333333,
            "top": 688.8020833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(7%) margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1835.9375,
            "top": 436.19791666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2467.4479166666665,
            "top": 669.2708333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2467.4479166666665,
            "top": 906.25,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "9% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2467.4479166666665,
            "top": 1152.34375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "5% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "Unchanged",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "premium_cost": {
        "blocks": [
          {
            "x": 1868.4895833333333,
            "top": 1010.4166666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Premium",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "29% gross margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "advertising_cost": {
        "blocks": [
          {
            "x": 1868.4895833333333,
            "top": 1264.3229166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Ad-supported",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "5% gross margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "Spotify · 2022 财年第四季度",
      "meta": {
        "title": "Spotify 2022 财年第四季度利润表",
        "period": "2022 财年第四季度"
      },
      "nodes": {
        "premium": {
          "label": "付费订阅",
          "notes": [
            "同比 +18%"
          ]
        },
        "advertising": {
          "label": "广告支持",
          "notes": [
            "同比 +14%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 25%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (7%)",
            "同比 (7 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "sm": {
          "label": "销售与市场营销",
          "notes": [
            "占收入 14%",
            "同比 +2 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 9%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 5%",
            "保持不变"
          ]
        },
        "premium_cost": {
          "label": "付费订阅",
          "notes": [
            "毛利率 29%"
          ]
        },
        "advertising_cost": {
          "label": "广告支持",
          "notes": [
            "毛利率 5%"
          ]
        }
      },
      "layout": {
        "labels": {
          "premium": {
            "blocks": [
              {
                "x": 402.34375,
                "top": 483.07291666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 184.89583333333331,
                "top": 687.5,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "付费订阅",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 402.34375,
                "top": 923.1770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 184.89583333333331,
                "top": 1022.1354166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "广告支持",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 864.5833333333333,
                "top": 514.3229166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1341.1458333333333,
                "top": 296.875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 25%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1338.5416666666665,
                "top": 1148.4375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1399.7395833333333,
                "top": 688.8020833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (7%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1835.9375,
                "top": 436.19791666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2467.4479166666665,
                "top": 669.2708333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与市场营销",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2467.4479166666665,
                "top": 906.25,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2467.4479166666665,
                "top": 1152.34375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "保持不变",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "premium_cost": {
            "blocks": [
              {
                "x": 1868.4895833333333,
                "top": 1010.4166666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "付费订阅",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 29%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "advertising_cost": {
            "blocks": [
              {
                "x": 1868.4895833333333,
                "top": 1264.3229166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "广告支持",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 5%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g><rect x=\"23\" y=\"923\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">MAU</text><text x=\"103.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"mau\">489M</text><text x=\"103.5\" y=\"1022\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">同比 +20%</text></g><g><rect x=\"194\" y=\"923\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">付费订阅</text><text x=\"321.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"premium_subscribers\">205M</text><text x=\"321.5\" y=\"1022\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">同比 +14%</text></g><g><rect x=\"459\" y=\"923\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">广告支持用户</text><text x=\"604.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_subscribers\">295M</text><text x=\"604.5\" y=\"1022\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">同比 +25%</text></g><text x=\"337\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" fill=\"#818181\">MAU = 月均用户</text></g>"
    }
  }
});
