window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spotify-q2-fy23",
  "name": "Spotify · Q2 FY23",
  "company": "Spotify",
  "meta": {
    "company": "Spotify",
    "title": "Spotify Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processing/spotify-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 199.21875,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2161.458333333333,
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
      "value": 2773,
      "valueText": "€2,773M",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+11% Y/Y",
        "28% gross margin"
      ]
    },
    {
      "id": "advertising",
      "label": "Ad-supported",
      "value": 404,
      "valueText": "€404M",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+12% Y/Y",
        "(6%) gross margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3177,
      "valueText": "€3,177M",
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 766,
      "valueText": "€766M",
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "24% margin",
        "(0.5pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2411,
      "valueText": "(€2,411M)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating loss",
      "value": -247,
      "valueText": "(€247M)",
      "type": "cost",
      "col": 3,
      "order": 5,
      "notes": [
        "(8%) margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1013,
      "valueText": "(€1,013M)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 453,
      "valueText": "(€453M)",
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": [
        "14% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 399,
      "valueText": "(€399M)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": [
        "13% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 161,
      "valueText": "(€161M)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [
        "5% of revenue",
        "(1%) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "premium",
      "target": "revenue",
      "value": 2773,
      "y0": 725.9114583333333,
      "y1": 839.1927083333333,
      "sourceWidth": 334.63541666666663,
      "targetWidth": 334.63541666666663,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 404,
      "y0": 1123.046875,
      "y1": 1030.5989583333333,
      "sourceWidth": 48.17708333333333,
      "targetWidth": 48.17708333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 766,
      "y0": 718.0989583333333,
      "y1": 583.984375,
      "sourceWidth": 92.44791666666666,
      "targetWidth": 92.44791666666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2411,
      "y0": 909.5052083333333,
      "y1": 992.1875,
      "sourceWidth": 290.3645833333333,
      "targetWidth": 291.66666666666663,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 766,
      "y0": 583.984375,
      "y1": 697.265625,
      "sourceWidth": 92.44791666666666,
      "targetWidth": 92.44791666666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "operating_expenses",
      "value": 247,
      "y0": 932.9427083333333,
      "y1": 758.4635416666666,
      "sourceWidth": 29.947916666666664,
      "targetWidth": 29.947916666666664,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 453,
      "y0": 679.0364583333333,
      "y1": 751.953125,
      "sourceWidth": 55.98958333333333,
      "targetWidth": 55.98958333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 399,
      "y0": 731.1197916666666,
      "y1": 1017.5781249999999,
      "sourceWidth": 48.17708333333333,
      "targetWidth": 48.17708333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 161,
      "y0": 764.3229166666666,
      "y1": 1279.296875,
      "sourceWidth": 18.229166666666664,
      "targetWidth": 19.53125,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "551000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "551M"
    },
    {
      "id": "premium_subs",
      "value": "220000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "220M"
    },
    {
      "id": "ad_supported_subs",
      "value": "343000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "343M"
    }
  ],
  "layout": {
    "nodes": {
      "premium": {
        "x": 365.88541666666663,
        "y": 558.59375,
        "width": 72.91666666666666,
        "height": 334.63541666666663
      },
      "advertising": {
        "x": 365.88541666666663,
        "y": 1098.9583333333333,
        "width": 72.91666666666666,
        "height": 48.17708333333333
      },
      "revenue": {
        "x": 833.3333333333333,
        "y": 671.875,
        "width": 72.91666666666666,
        "height": 382.8125
      },
      "gross_profit": {
        "x": 1299.4791666666665,
        "y": 537.7604166666666,
        "width": 72.91666666666666,
        "height": 92.44791666666666
      },
      "cost_of_revenue": {
        "x": 1299.4791666666665,
        "y": 846.3541666666666,
        "width": 72.91666666666666,
        "height": 291.66666666666663
      },
      "operating_profit": {
        "x": 1587.2395833333333,
        "y": 917.96875,
        "width": 72.91666666666666,
        "height": 29.947916666666664
      },
      "operating_expenses": {
        "x": 1769.53125,
        "y": 651.0416666666666,
        "width": 72.91666666666666,
        "height": 122.39583333333333
      },
      "rnd": {
        "x": 2234.375,
        "y": 723.9583333333333,
        "width": 72.91666666666666,
        "height": 55.98958333333333
      },
      "sm": {
        "x": 2234.375,
        "y": 993.4895833333333,
        "width": 72.91666666666666,
        "height": 48.17708333333333
      },
      "ga": {
        "x": 2234.375,
        "y": 1269.53125,
        "width": 72.91666666666666,
        "height": 19.53125
      }
    },
    "labels": {
      "premium": {
        "blocks": [
          {
            "x": 402.34375,
            "top": 458.3333333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          },
          {
            "x": 188.80208333333331,
            "top": 677.0833333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Premium",
                "size": 39.0625,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "28% gross margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 402.34375,
            "top": 998.6979166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "color": "#818181"
              }
            ]
          },
          {
            "x": 188.80208333333331,
            "top": 1063.8020833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Ad-supported",
                "size": 39.0625,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "(6%) gross margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 869.7916666666666,
            "top": 519.53125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+11% Y/Y",
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
            "x": 1335.9375,
            "top": 343.75,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "24% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(0.5pp) Y/Y",
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
            "x": 1335.9375,
            "top": 1153.6458333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1627.6041666666665,
            "top": 959.6354166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "(8%) margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1805.9895833333333,
            "top": 485.6770833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2467.4479166666665,
            "top": 694.0104166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "14% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+3pp Y/Y",
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
            "top": 963.5416666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "13% of revenue",
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
      "ga": {
        "blocks": [
          {
            "x": 2467.4479166666665,
            "top": 1214.84375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "5% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(1%) Y/Y",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"29.947916666666664\" y=\"1201.8229166666665\" width=\"209.63541666666666\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#000000\"/><text x=\"134.765625\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"27.34375\" font-weight=\"700\" fill=\"#ffffff\">MAU</text><text x=\"134.765625\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"27.34375\" fill=\"#ffffff\" data-operating-metric=\"mau\">551M</text><text x=\"134.765625\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">+27% Y/Y</text></g><g><rect x=\"252.60416666666666\" y=\"1201.8229166666665\" width=\"332.03125\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#000000\"/><text x=\"418.61979166666663\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"27.34375\" font-weight=\"700\" fill=\"#ffffff\">Premium Subs</text><text x=\"418.61979166666663\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"27.34375\" fill=\"#ffffff\" data-operating-metric=\"premium_subs\">220M</text><text x=\"418.61979166666663\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">+17% Y/Y</text></g><g><rect x=\"597.65625\" y=\"1201.8229166666665\" width=\"378.90625\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#000000\"/><text x=\"787.109375\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"27.34375\" font-weight=\"700\" fill=\"#ffffff\">Ad-supported Subs</text><text x=\"787.109375\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"27.34375\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_subs\">343M</text><text x=\"787.109375\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">+34% Y/Y</text></g><text x=\"424.47916666666663\" y=\"1389.3229166666665\" text-anchor=\"middle\" font-size=\"28.645833333333332\" fill=\"#818181\">MAU = Monthly Active Users</text></g>",
  "i18n": {
    "preservedAnnotationText": [
      "MAU"
    ],
    "zh": {
      "name": "Spotify · 2023 财年第二季度",
      "meta": {
        "title": "Spotify 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "",
        "titleTextLength": 1888.0208333333333
      },
      "nodes": {
        "premium": {
          "label": "付费订阅",
          "notes": [
            "同比 +11%",
            "毛利率 28%"
          ]
        },
        "advertising": {
          "label": "广告支持",
          "notes": [
            "同比 +12%",
            "毛利率 (6%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 24%",
            "同比 (0.5 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业亏损",
          "notes": [
            "利润率 (8%)",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 14%",
            "同比 +3 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场营销",
          "notes": [
            "占收入 13%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 5%",
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
                "top": 458.3333333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              },
              {
                "x": 188.80208333333331,
                "top": 677.0833333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "付费订阅",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "毛利率 28%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 402.34375,
                "top": 998.6979166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "color": "#818181"
                  }
                ]
              },
              {
                "x": 188.80208333333331,
                "top": 1063.8020833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "广告支持",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "毛利率 (6%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 869.7916666666666,
                "top": 519.53125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +11%",
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
                "x": 1335.9375,
                "top": 343.75,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 24%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (0.5 个百分点)",
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
                "x": 1335.9375,
                "top": 1153.6458333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1627.6041666666665,
                "top": 959.6354166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "利润率 (8%)",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1805.9895833333333,
                "top": 485.6770833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2467.4479166666665,
                "top": 694.0104166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "top": 963.5416666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售与市场营销",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 13%",
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
          "ga": {
            "blocks": [
              {
                "x": 2467.4479166666665,
                "top": 1214.84375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (1%)",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"29.947916666666664\" y=\"1201.8229166666665\" width=\"209.63541666666666\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#000000\"/><text x=\"134.765625\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"27.34375\" font-weight=\"700\" fill=\"#ffffff\">MAU</text><text x=\"134.765625\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"27.34375\" fill=\"#ffffff\" data-operating-metric=\"mau\">551M</text><text x=\"134.765625\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">同比 +27%</text></g><g><rect x=\"252.60416666666666\" y=\"1201.8229166666665\" width=\"332.03125\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#000000\"/><text x=\"418.61979166666663\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"27.34375\" font-weight=\"700\" fill=\"#ffffff\">付费订阅</text><text x=\"418.61979166666663\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"27.34375\" fill=\"#ffffff\" data-operating-metric=\"premium_subs\">220M</text><text x=\"418.61979166666663\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">同比 +17%</text></g><g><rect x=\"597.65625\" y=\"1201.8229166666665\" width=\"378.90625\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#000000\"/><text x=\"787.109375\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"27.34375\" font-weight=\"700\" fill=\"#ffffff\">广告支持订阅</text><text x=\"787.109375\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"27.34375\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_subs\">343M</text><text x=\"787.109375\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">同比 +34%</text></g><text x=\"424.47916666666663\" y=\"1389.3229166666665\" text-anchor=\"middle\" font-size=\"28.645833333333332\" fill=\"#818181\">MAU = 月活跃用户</text></g>"
    }
  }
});
