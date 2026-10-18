window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spotify-q4-fy23",
  "name": "Spotify · Q4 FY23",
  "company": "Spotify",
  "meta": {
    "company": "Spotify",
    "title": "Spotify Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/spotify-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 199.21875,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2166.6666666666665,
    "periodX": -3000,
    "periodY": -3000,
    "logoWidth": 242.1875,
    "logoHeight": 242.1875,
    "logoY": 255.20833333333331,
    "logoViewBox": "0 0 231 231",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"231\" height=\"231\" rx=\"52\" fill=\"#0a0a0a\"/>\n    <circle cx=\"115.5\" cy=\"115.5\" r=\"90\" fill=\"#1ed760\"/>\n    \n    <path d=\"M 59.7 120.2 Q 115.5 89.6 171.3 120.2\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"12.15\" stroke-linecap=\"round\"/>\n    <path d=\"M 70.5 137.3 Q 115.5 110.3 160.5 137.3\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"10.35\" stroke-linecap=\"round\"/>\n    <path d=\"M 82.2 152.6 Q 115.5 131.9 148.8 152.6\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"8.55\" stroke-linecap=\"round\"/>",
    "hidePeriodStamp": true
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
      "value": 3170,
      "type": "source",
      "notes": [
        "+17% Y/Y",
        "29% gross margin"
      ],
      "col": 0,
      "order": 0,
      "valueText": "€3,170M"
    },
    {
      "id": "advertising",
      "label": "Ad-supported",
      "value": 501,
      "type": "source",
      "notes": [
        "+12% Y/Y",
        "12% gross margin"
      ],
      "col": 0,
      "order": 1,
      "valueText": "€501M"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3671,
      "type": "hub",
      "notes": [
        "+16% Y/Y"
      ],
      "col": 1,
      "order": 2,
      "valueText": "€3,671M"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 980,
      "type": "profit",
      "notes": [
        "27% margin",
        "+1pp Y/Y"
      ],
      "col": 2,
      "order": 3,
      "valueText": "€980M"
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 2691,
      "type": "cost",
      "notes": [],
      "col": 2,
      "order": 4,
      "valueText": "(€2,691M)"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 75,
      "type": "cost",
      "notes": [
        "(2%) margin",
        "+5pp Y/Y"
      ],
      "col": 3,
      "order": 5,
      "valueText": "(€75M)"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1055,
      "type": "cost",
      "notes": [],
      "col": 3,
      "order": 6,
      "valueText": "(€1,055M)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 468,
      "type": "cost",
      "notes": [
        "13% of revenue",
        "(0pp) Y/Y"
      ],
      "col": 4,
      "order": 7,
      "valueText": "(€468M)"
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 432,
      "type": "cost",
      "notes": [
        "12% of revenue",
        "(3pp) Y/Y"
      ],
      "col": 4,
      "order": 8,
      "valueText": "(€432M)"
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 155,
      "type": "cost",
      "notes": [
        "4% of revenue",
        "(1%) Y/Y"
      ],
      "col": 4,
      "order": 9,
      "valueText": "(€155M)"
    }
  ],
  "links": [
    {
      "source": "premium",
      "target": "revenue",
      "value": 3170,
      "y0": 730.46875,
      "y1": 845.0520833333333,
      "sourceWidth": 361.97916666666663,
      "targetWidth": 361.97916666666663,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 501,
      "y0": 1112.6302083333333,
      "y1": 1054.0364583333333,
      "sourceWidth": 55.98958333333333,
      "targetWidth": 55.98958333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 980,
      "y0": 720.0520833333333,
      "y1": 601.5625,
      "sourceWidth": 111.97916666666666,
      "targetWidth": 111.97916666666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2691,
      "y0": 929.0364583333333,
      "y1": 1003.9062499999999,
      "sourceWidth": 305.9895833333333,
      "targetWidth": 307.29166666666663,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 980,
      "y0": 601.5625,
      "y1": 718.75,
      "sourceWidth": 111.97916666666666,
      "targetWidth": 111.97916666666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 75,
      "y0": 943.359375,
      "y1": 779.296875,
      "sourceWidth": 9.114583333333332,
      "targetWidth": 9.114583333333332,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 468,
      "y0": 689.453125,
      "y1": 526.6927083333333,
      "sourceWidth": 53.385416666666664,
      "targetWidth": 53.385416666666664,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 432,
      "y0": 740.8854166666666,
      "y1": 833.3333333333333,
      "sourceWidth": 49.479166666666664,
      "targetWidth": 49.479166666666664,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 155,
      "y0": 774.7395833333333,
      "y1": 1130.859375,
      "sourceWidth": 18.229166666666664,
      "targetWidth": 16.927083333333332,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "premium": {
        "x": 365.88541666666663,
        "y": 549.4791666666666,
        "width": 72.91666666666666,
        "height": 361.97916666666663
      },
      "advertising": {
        "x": 365.88541666666663,
        "y": 1084.6354166666665,
        "width": 72.91666666666666,
        "height": 55.98958333333333
      },
      "revenue": {
        "x": 832.03125,
        "y": 664.0625,
        "width": 72.91666666666666,
        "height": 417.96875
      },
      "gross_profit": {
        "x": 1299.4791666666665,
        "y": 545.5729166666666,
        "width": 72.91666666666666,
        "height": 111.97916666666666
      },
      "cost_of_revenue": {
        "x": 1307.2916666666665,
        "y": 850.2604166666666,
        "width": 72.91666666666666,
        "height": 307.29166666666663
      },
      "operating_loss": {
        "x": 1572.9166666666665,
        "y": 938.8020833333333,
        "width": 72.91666666666666,
        "height": 9.114583333333332
      },
      "operating_expenses": {
        "x": 1769.53125,
        "y": 662.7604166666666,
        "width": 72.91666666666666,
        "height": 121.09375
      },
      "rnd": {
        "x": 2234.375,
        "y": 500.0,
        "width": 72.91666666666666,
        "height": 53.385416666666664
      },
      "sm": {
        "x": 2234.375,
        "y": 808.59375,
        "width": 72.91666666666666,
        "height": 49.479166666666664
      },
      "ga": {
        "x": 2234.375,
        "y": 1122.3958333333333,
        "width": 72.91666666666666,
        "height": 16.927083333333332
      }
    },
    "labels": {
      "premium": {
        "blocks": [
          {
            "x": 402.34375,
            "top": 447.91666666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+17% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 188.80208333333331,
            "top": 692.7083333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Premium",
                "size": 39.0625,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "29% gross margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 402.34375,
            "top": 984.375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 188.80208333333331,
            "top": 1074.21875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Ad-supported",
                "size": 39.0625,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "12% gross margin",
                "size": 27.34375,
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
            "x": 868.4895833333333,
            "top": 510.41666666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+16% Y/Y",
                "size": 27.34375,
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
            "x": 1335.9375,
            "top": 355.46875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "27% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
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
            "x": 1343.75,
            "top": 1170.5729166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "revenue",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1609.375,
            "top": 959.6354166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0625,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#a51b00"
              },
              {
                "text": "(2%) margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34375,
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
            "x": 1805.9895833333333,
            "top": 494.79166666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2463.5416666666665,
            "top": 486.97916666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a51b00"
              },
              {
                "text": "13% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34375,
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
            "x": 2463.5416666666665,
            "top": 785.15625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a51b00"
              },
              {
                "text": "12% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34375,
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
            "x": 2463.5416666666665,
            "top": 1079.4270833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a51b00"
              },
              {
                "text": "4% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34375,
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
      "id": "mau",
      "value": "602000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "602M"
    },
    {
      "id": "premium_subscribers",
      "value": "236000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "236M"
    },
    {
      "id": "ad_supported_subscribers",
      "value": "379000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "379M"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"23\" y=\"923\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">MAU</text><text x=\"103.5\" y=\"993\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\" data-operating-metric=\"mau\">602M</text><text x=\"103.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+23% Y/Y</text></g><g><rect x=\"194\" y=\"923\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">Premium Subs</text><text x=\"321.5\" y=\"993\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\" data-operating-metric=\"premium_subscribers\">236M</text><text x=\"321.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+15% Y/Y</text></g><g><rect x=\"459\" y=\"923\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">Ad-supported Subs</text><text x=\"604.5\" y=\"993\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\" data-operating-metric=\"ad_supported_subscribers\">379M</text><text x=\"604.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+28% Y/Y</text></g><text x=\"326\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">MAU = Monthly Active Users</text></g></g>",
  "i18n": {
    "zh": {
      "name": "Spotify · 2023 财年第四季度",
      "meta": {
        "title": "Spotify 2023 财年第四季度利润表",
        "period": "2023 财年第四季度"
      },
      "nodes": {
        "premium": {
          "label": "付费订阅",
          "notes": [
            "同比 +17%",
            "毛利率 29%"
          ]
        },
        "advertising": {
          "label": "广告支持",
          "notes": [
            "同比 +12%",
            "毛利率 12%"
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
            "利润率 27%",
            "同比 +1 个百分点"
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
            "利润率 (2%)",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 13%",
            "同比 (0 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 12%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 4%",
            "同比 (1%)"
          ]
        }
      },
      "layout": {
        "labels": {
          "premium": {
            "blocks": [
              {
                "x": 402.34375,
                "top": 447.91666666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 188.80208333333331,
                "top": 692.7083333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "付费订阅",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "毛利率 29%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 402.34375,
                "top": 984.375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 188.80208333333331,
                "top": 1074.21875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "广告支持",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "毛利率 12%",
                    "size": 27.34375,
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
                "x": 868.4895833333333,
                "top": 510.41666666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27.34375,
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
                "x": 1335.9375,
                "top": 355.46875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 27%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
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
                "x": 1343.75,
                "top": 1170.5729166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "成本",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1609.375,
                "top": 959.6354166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#a51b00"
                  },
                  {
                    "text": "利润率 (2%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34375,
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
                "x": 1805.9895833333333,
                "top": 494.79166666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2463.5416666666665,
                "top": 486.97916666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a51b00"
                  },
                  {
                    "text": "占收入 13%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34375,
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
                "x": 2463.5416666666665,
                "top": 785.15625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a51b00"
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34375,
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
                "x": 2463.5416666666665,
                "top": 1079.4270833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a51b00"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"23\" y=\"923\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">MAU</text><text x=\"103.5\" y=\"993\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\" data-operating-metric=\"mau\">602M</text><text x=\"103.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +23%</text></g><g><rect x=\"194\" y=\"923\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">付费订阅用户</text><text x=\"321.5\" y=\"993\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\" data-operating-metric=\"premium_subscribers\">236M</text><text x=\"321.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +15%</text></g><g><rect x=\"459\" y=\"923\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">广告支持用户</text><text x=\"604.5\" y=\"993\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\" data-operating-metric=\"ad_supported_subscribers\">379M</text><text x=\"604.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +28%</text></g><text x=\"326\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">MAU = 月活跃用户</text></g></g>"
    }
  }
});
