(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "lyft-q1-fy23",
  "name": "Lyft · Q1 FY23",
  "company": "Lyft",
  "meta": {
    "company": "Lyft",
    "title": "Lyft Q1 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/lyft-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 1960,
    "logoX": 754,
    "logoY": 249,
    "logoWidth": 205,
    "logoHeight": 205,
    "logoViewBox": "0 0 205 205",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"205\" height=\"205\" rx=\"43\" fill=\"#ff00bf\"/>\n    <text x=\"102.5\" y=\"134\" text-anchor=\"middle\" font-family=\"Arial Rounded MT Bold,Arial,sans-serif\" font-size=\"94\" font-weight=\"900\" fill=\"#fff\" textLength=\"158\" lengthAdjust=\"spacingAndGlyphs\">lyft</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "linkTint": {
      "source": "#ee87d7",
      "hub": "#ee87d7",
      "profit": "#9ccc9a",
      "cost": "#df8082"
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g>\n    <g transform=\"translate(31 558)\">\n      <ellipse cx=\"138\" cy=\"112\" rx=\"138\" ry=\"20\" fill=\"#d8d8d8\" opacity=\".42\"/>\n      <path d=\"M21 82C45 39 106 20 175 26c38 4 70 25 91 60l16 19-8 12h-22c-3-22-18-36-39-36-20 0-35 14-39 36H89c-4-21-20-35-41-35-20 0-35 14-39 35H0v-16c0-9 8-16 21-19Z\" fill=\"#f8f8f8\"/>\n      <path d=\"M54 50c29-20 92-24 130-11 19 6 35 21 46 43H61c-6-13-9-24-7-32Z\" fill=\"#74129b\"/>\n      <circle cx=\"49\" cy=\"118\" r=\"23\" fill=\"#20212f\"/><circle cx=\"213\" cy=\"118\" r=\"24\" fill=\"#20212f\"/><circle cx=\"49\" cy=\"118\" r=\"13\" fill=\"#c7c7c7\"/><circle cx=\"213\" cy=\"118\" r=\"13\" fill=\"#c7c7c7\"/>\n    </g>\n    <g transform=\"translate(91 869)\">\n      <g transform=\"rotate(-2)\"><rect width=\"76\" height=\"154\" rx=\"12\" fill=\"#1a1a1a\"/><rect x=\"7\" y=\"9\" width=\"62\" height=\"136\" rx=\"7\" fill=\"#f8f8f8\"/><rect x=\"17\" y=\"31\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#fff\"/><rect x=\"17\" y=\"45\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#fff\"/><rect x=\"18\" y=\"78\" width=\"40\" height=\"12\" rx=\"6\" fill=\"#8c35ee\"/></g>\n      <g transform=\"translate(87) rotate(4)\"><rect width=\"86\" height=\"163\" rx=\"12\" fill=\"#1b1b1b\"/><rect x=\"8\" y=\"9\" width=\"70\" height=\"145\" rx=\"7\" fill=\"#ecf4ee\"/><path d=\"M12 34C34 20 51 53 73 42M10 74c19-16 36 15 63-3\" fill=\"none\" stroke=\"#80b77c\" stroke-width=\"7\"/><rect x=\"17\" y=\"129\" width=\"50\" height=\"9\" rx=\"4\" fill=\"#fff\"/></g>\n    </g><text x=\"90\" y=\"731\" font-size=\"40\" font-weight=\"800\">Rideshare</text><text x=\"110\" y=\"1090\" font-size=\"40\" font-weight=\"800\">Rentals</text><g><rect x=\"31\" y=\"1202\" width=\"309\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"185.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Active Riders</text><text data-operating-metric=\"active_riders\" x=\"185.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">19.6M</text><text x=\"185.5\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+10% Y/Y</text></g><g><rect x=\"361\" y=\"1202\" width=\"466\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"594.0\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Revenue per Active Rider</text><text data-operating-metric=\"revenue_per_active_rider\" x=\"594.0\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$51.17</text><text x=\"594.0\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+4% Y/Y</text></g></g>",
  "operatingMetrics": [
    {
      "id": "active_riders",
      "value": "19600000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "19.6M"
    },
    {
      "id": "revenue_per_active_rider",
      "value": "0.05117",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$51.17"
    }
  ],
  "layout": {
    "scale": 0.348,
    "nodes": {
      "rideshare": {
        "x": 350,
        "y": 489,
        "width": 72,
        "height": 332
      },
      "rentals": {
        "x": 350,
        "y": 1071,
        "width": 72,
        "height": 16
      },
      "revenue": {
        "x": 818,
        "y": 627,
        "width": 71,
        "height": 349
      },
      "gross_profit": {
        "x": 1275,
        "y": 524,
        "width": 71,
        "height": 155
      },
      "cost_of_revenue": {
        "x": 1274,
        "y": 876,
        "width": 72,
        "height": 190
      },
      "operating_loss": {
        "x": 1530,
        "y": 969,
        "width": 72,
        "height": 74
      },
      "operating_expenses": {
        "x": 1742,
        "y": 624,
        "width": 71,
        "height": 232
      },
      "ga": {
        "x": 2219,
        "y": 370,
        "width": 72,
        "height": 88
      },
      "rnd": {
        "x": 2219,
        "y": 639,
        "width": 72,
        "height": 67
      },
      "sm": {
        "x": 2219,
        "y": 904,
        "width": 72,
        "height": 33
      },
      "operations_support": {
        "x": 2219,
        "y": 1126,
        "width": 72,
        "height": 39
      }
    },
    "labels": {
      "rideshare": {
        "blocks": [
          {
            "x": 386,
            "top": 398,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rentals": {
        "blocks": [
          {
            "x": 386,
            "top": 982,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(17%) Y/Y",
                "size": 29,
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
            "x": 853,
            "top": 481,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "+14% Y/Y",
                "size": 29,
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
            "x": 1310,
            "top": 339,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "45% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 29,
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
            "x": 1309,
            "top": 1083,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1570,
            "top": 1067,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "(22%) margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 29,
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
            "x": 1777,
            "top": 464,
            "anchor": "middle",
            "lineGap": 9,
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
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2435,
            "top": 356,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "General & admin",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "26% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 29,
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
            "x": 2435,
            "top": 620,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "20% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
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
            "x": 2435,
            "top": 875,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operations_support": {
        "blocks": [
          {
            "x": 2435,
            "top": 1102,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operations",
                "size": 32,
                "weight": 800
              },
              {
                "text": "& support",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "10% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "rideshare",
      "label": "Rideshare",
      "value": 953,
      "valueText": "$953M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#ff00bf",
      "labelColor": "#000000",
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "rentals",
      "label": "Rentals",
      "value": 48,
      "valueText": "$48M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#ff00bf",
      "labelColor": "#000000",
      "notes": [
        "(17%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1001,
      "valueText": "$1,001M",
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#ff00bf",
      "labelColor": "#000000",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 452,
      "valueText": "$452M",
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#27a22a",
      "labelColor": "#008f47",
      "notes": [
        "45% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 549,
      "valueText": "($549M)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#d50000",
      "labelColor": "#991500",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -217,
      "valueText": "($217M)",
      "type": "cost",
      "col": 3,
      "order": 5,
      "color": "#d50000",
      "labelColor": "#991500",
      "notes": [
        "(22%) margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 668,
      "valueText": "($668M)",
      "type": "cost",
      "col": 4,
      "order": 6,
      "color": "#d50000",
      "labelColor": "#991500",
      "notes": []
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 257,
      "valueText": "($257M)",
      "type": "cost",
      "col": 5,
      "order": 7,
      "color": "#d50000",
      "labelColor": "#991500",
      "notes": [
        "26% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 197,
      "valueText": "($197M)",
      "type": "cost",
      "col": 5,
      "order": 8,
      "color": "#d50000",
      "labelColor": "#991500",
      "notes": [
        "20% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 116,
      "valueText": "($116M)",
      "type": "cost",
      "col": 5,
      "order": 9,
      "color": "#d50000",
      "labelColor": "#991500",
      "notes": [
        "12% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "operations_support",
      "label": [
        "Operations",
        "& support"
      ],
      "value": 99,
      "valueText": "($99M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#d50000",
      "labelColor": "#991500",
      "notes": [
        "10% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "rideshare",
      "target": "revenue",
      "value": 953,
      "width": 332,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#ee87d7"
    },
    {
      "source": "rentals",
      "target": "revenue",
      "value": 48,
      "width": 16,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#ee87d7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 452,
      "width": 157,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ccc9a",
      "targetWidth": 155
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 549,
      "width": 192,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8082",
      "targetWidth": 190
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 452,
      "width": 155,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8082"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 217,
      "width": 74,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#df8082",
      "targetWidth": 77
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 257,
      "width": 88,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8082",
      "sourceWidth": 89
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 197,
      "width": 67,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8082",
      "sourceWidth": 68
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 116,
      "width": 33,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8082",
      "sourceWidth": 34
    },
    {
      "source": "operating_expenses",
      "target": "operations_support",
      "value": 99,
      "width": 39,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8082",
      "sourceWidth": 41
    }
  ],
  "i18n": {
    "zh": {
      "name": "Lyft · 2023 财年第一季度",
      "meta": {
        "title": "Lyft 2023 财年第一季度利润表",
        "titleSize": 112,
        "titleTextLength": 1680
      },
      "annotationsSvg": "<g>\n    <g transform=\"translate(31 558)\">\n      <ellipse cx=\"138\" cy=\"112\" rx=\"138\" ry=\"20\" fill=\"#d8d8d8\" opacity=\".42\"/>\n      <path d=\"M21 82C45 39 106 20 175 26c38 4 70 25 91 60l16 19-8 12h-22c-3-22-18-36-39-36-20 0-35 14-39 36H89c-4-21-20-35-41-35-20 0-35 14-39 35H0v-16c0-9 8-16 21-19Z\" fill=\"#f8f8f8\"/>\n      <path d=\"M54 50c29-20 92-24 130-11 19 6 35 21 46 43H61c-6-13-9-24-7-32Z\" fill=\"#74129b\"/>\n      <circle cx=\"49\" cy=\"118\" r=\"23\" fill=\"#20212f\"/><circle cx=\"213\" cy=\"118\" r=\"24\" fill=\"#20212f\"/><circle cx=\"49\" cy=\"118\" r=\"13\" fill=\"#c7c7c7\"/><circle cx=\"213\" cy=\"118\" r=\"13\" fill=\"#c7c7c7\"/>\n    </g>\n    <g transform=\"translate(91 869)\">\n      <g transform=\"rotate(-2)\"><rect width=\"76\" height=\"154\" rx=\"12\" fill=\"#1a1a1a\"/><rect x=\"7\" y=\"9\" width=\"62\" height=\"136\" rx=\"7\" fill=\"#f8f8f8\"/><rect x=\"17\" y=\"31\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#fff\"/><rect x=\"17\" y=\"45\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#fff\"/><rect x=\"18\" y=\"78\" width=\"40\" height=\"12\" rx=\"6\" fill=\"#8c35ee\"/></g>\n      <g transform=\"translate(87) rotate(4)\"><rect width=\"86\" height=\"163\" rx=\"12\" fill=\"#1b1b1b\"/><rect x=\"8\" y=\"9\" width=\"70\" height=\"145\" rx=\"7\" fill=\"#ecf4ee\"/><path d=\"M12 34C34 20 51 53 73 42M10 74c19-16 36 15 63-3\" fill=\"none\" stroke=\"#80b77c\" stroke-width=\"7\"/><rect x=\"17\" y=\"129\" width=\"50\" height=\"9\" rx=\"4\" fill=\"#fff\"/></g>\n    </g><text x=\"90\" y=\"731\" font-size=\"40\" font-weight=\"800\">网约车</text><text x=\"110\" y=\"1090\" font-size=\"40\" font-weight=\"800\">租赁</text><g><rect x=\"31\" y=\"1202\" width=\"309\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"185.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">活跃乘客</text><text data-operating-metric=\"active_riders\" x=\"185.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">19.6M</text><text x=\"185.5\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +10%</text></g><g><rect x=\"361\" y=\"1202\" width=\"466\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"594.0\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">每位活跃乘客收入</text><text data-operating-metric=\"revenue_per_active_rider\" x=\"594.0\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$51.17</text><text x=\"594.0\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +4%</text></g></g>",
      "nodes": {
        "rideshare": {
          "label": "网约车",
          "notes": [
            "同比 +16%"
          ]
        },
        "rentals": {
          "label": "租赁",
          "notes": [
            "同比 (17%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 45%",
            "同比 (5 个百分点)"
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
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 26%",
            "同比 +1 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 20%",
            "同比 (2 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 12%",
            "同比 (3 个百分点)"
          ]
        },
        "operations_support": {
          "label": "运营与支持",
          "notes": [
            "占收入 10%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "rideshare": {
            "blocks": [
              {
                "x": 386,
                "top": 398,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rentals": {
            "blocks": [
              {
                "x": 386,
                "top": 982,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (17%)",
                    "size": 29,
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
                "x": 853,
                "top": 481,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "同比 +14%",
                    "size": 29,
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
                "x": 1310,
                "top": 339,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "利润率 45%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 29,
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
                "x": 1309,
                "top": 1083,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1570,
                "top": 1067,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "利润率 (22%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
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
                "x": 1777,
                "top": 464,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
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
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2435,
                "top": 356,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 26%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
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
                "x": 2435,
                "top": 620,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 20%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
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
                "x": 2435,
                "top": 875,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operations_support": {
            "blocks": [
              {
                "x": 2435,
                "top": 1102,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "与支持",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
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
});})();
