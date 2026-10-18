window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spotify-q3-fy22",
  "name": "Spotify · Q3 FY22",
  "company": "Spotify",
  "meta": {
    "company": "Spotify",
    "title": "Spotify Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/spotify-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 199.21875,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2161.458333333333,
    "periodX": -3000,
    "periodY": -3000,
    "logoWidth": 242.1875,
    "logoHeight": 242.1875,
    "logoY": 248.69791666666666,
    "logoViewBox": "0 0 231 231",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"231\" height=\"231\" rx=\"52\" fill=\"#0a0a0a\"/>\n    <circle cx=\"115.5\" cy=\"115.5\" r=\"90\" fill=\"#1ed760\"/>\n    \n    <path d=\"M 59.7 120.2 Q 115.5 89.6 171.3 120.2\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"12.15\" stroke-linecap=\"round\"/>\n    <path d=\"M 70.5 137.3 Q 115.5 110.3 160.5 137.3\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"10.35\" stroke-linecap=\"round\"/>\n    <path d=\"M 82.2 152.6 Q 115.5 131.9 148.8 152.6\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"8.55\" stroke-linecap=\"round\"/>",
    "hidePeriodStamp": true,
    "logoX": 746.09375
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
        "+22% Y/Y"
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
        "+19% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3,
      "valueText": "€3.0B",
      "notes": [
        "+21% Y/Y"
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
        "(2pp) Y/Y"
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
      "value": 2.3,
      "valueText": "(€2.3B)",
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 4
    },
    {
      "id": "operating_profit",
      "label": "Operating loss",
      "value": 0.2,
      "valueText": "(€0.2B)",
      "notes": [
        "(8%) margin",
        "(11pp) Y/Y"
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
      "value": 1,
      "valueText": "(€1.0B)",
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 6
    },
    {
      "id": "premium_cost",
      "label": "Premium",
      "value": 1.9,
      "valueText": "(€1.9B)",
      "notes": [
        "28% gross margin"
      ],
      "type": "cost",
      "col": 2,
      "order": 7
    },
    {
      "id": "advertising_cost",
      "label": "Ad-supported",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [
        "2% gross margin"
      ],
      "type": "cost",
      "col": 2,
      "order": 8
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [
        "14% of revenue",
        "+3pp Y/Y"
      ],
      "type": "cost",
      "col": 2,
      "order": 9
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [
        "13% of revenue",
        "+4pp Y/Y"
      ],
      "type": "cost",
      "col": 2,
      "order": 10
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 0.2,
      "valueText": "(€0.2B)",
      "notes": [
        "5% of revenue",
        "+1pp Y/Y"
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
      "sourceWidth": 272.13541666666663,
      "targetWidth": 272.13541666666663,
      "y0": 733.7239583333333,
      "y1": 794.921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "y0": 1057.2916666666665,
      "y1": 950.5208333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 0.8,
      "sourceWidth": 78.125,
      "targetWidth": 78.125,
      "y0": 697.9166666666666,
      "y1": 587.2395833333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.3,
      "sourceWidth": 233.07291666666666,
      "targetWidth": 234.375,
      "y0": 853.515625,
      "y1": 1079.4270833333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.8,
      "sourceWidth": 78.125,
      "targetWidth": 78.125,
      "y0": 587.2395833333333,
      "y1": 691.40625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "operating_expenses",
      "value": 0.2,
      "sourceWidth": 23.4375,
      "targetWidth": 22.135416666666664,
      "y0": 821.6145833333333,
      "y1": 741.5364583333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "cost_of_revenue",
      "target": "premium_cost",
      "value": 1.9,
      "sourceWidth": 195.3125,
      "targetWidth": 195.3125,
      "y0": 1059.8958333333333,
      "y1": 1127.6041666666665,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "advertising_cost",
      "value": 0.4,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "y0": 1177.0833333333333,
      "y1": 1298.1770833333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.4,
      "sourceWidth": 44.27083333333333,
      "targetWidth": 45.572916666666664,
      "y0": 674.4791666666666,
      "y1": 750.6510416666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.4,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "y0": 716.1458333333333,
      "y1": 973.9583333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 16.927083333333332,
      "targetWidth": 16.927083333333332,
      "y0": 744.140625,
      "y1": 1173.828125,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "premium": {
        "x": 369.79166666666663,
        "y": 597.65625,
        "width": 72.91666666666666,
        "height": 272.13541666666663
      },
      "advertising": {
        "x": 369.79166666666663,
        "y": 1037.7604166666665,
        "width": 72.91666666666666,
        "height": 39.0625
      },
      "revenue": {
        "x": 833.3333333333333,
        "y": 658.8541666666666,
        "width": 72.91666666666666,
        "height": 311.19791666666663
      },
      "gross_profit": {
        "x": 1342.4479166666665,
        "y": 548.1770833333333,
        "width": 72.91666666666666,
        "height": 78.125
      },
      "cost_of_revenue": {
        "x": 1339.84375,
        "y": 962.2395833333333,
        "width": 72.91666666666666,
        "height": 234.375
      },
      "operating_profit": {
        "x": 1544.2708333333333,
        "y": 809.8958333333333,
        "width": 72.91666666666666,
        "height": 23.4375
      },
      "operating_expenses": {
        "x": 1792.96875,
        "y": 652.34375,
        "width": 72.91666666666666,
        "height": 100.26041666666666
      },
      "premium_cost": {
        "x": 1708.3333333333333,
        "y": 1029.9479166666665,
        "width": 72.91666666666666,
        "height": 195.3125
      },
      "advertising_cost": {
        "x": 1705.7291666666665,
        "y": 1278.6458333333333,
        "width": 72.91666666666666,
        "height": 39.0625
      },
      "sm": {
        "x": 2223.958333333333,
        "y": 727.8645833333333,
        "width": 72.91666666666666,
        "height": 45.572916666666664
      },
      "rnd": {
        "x": 2223.958333333333,
        "y": 954.4270833333333,
        "width": 72.91666666666666,
        "height": 39.0625
      },
      "ga": {
        "x": 2223.958333333333,
        "y": 1165.3645833333333,
        "width": 72.91666666666666,
        "height": 16.927083333333332
      }
    },
    "labels": {
      "premium": {
        "blocks": [
          {
            "x": 406.25,
            "top": 494.79166666666663,
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
                "text": "+22% Y/Y",
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
            "x": 406.25,
            "top": 933.59375,
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
                "text": "+19% Y/Y",
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
            "x": 868.4895833333333,
            "top": 509.1145833333333,
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
                "text": "+21% Y/Y",
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
            "x": 1378.90625,
            "top": 356.7708333333333,
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
                "text": "25% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1376.3020833333333,
            "top": 1204.4270833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 800,
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
            "x": 1381.5104166666665,
            "top": 746.09375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0625,
                "weight": 800,
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
                "text": "(11pp) Y/Y",
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
            "x": 1829.4270833333333,
            "top": 485.6770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 800,
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
      "premium_cost": {
        "blocks": [
          {
            "x": 1901.0416666666665,
            "top": 1067.7083333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Premium",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
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
      "advertising_cost": {
        "blocks": [
          {
            "x": 1901.0416666666665,
            "top": 1248.6979166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Ad-supported",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "2% gross margin",
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
            "x": 2460.9375,
            "top": 700.5208333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25,
                "weight": 800,
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
      "rnd": {
        "blocks": [
          {
            "x": 2460.9375,
            "top": 921.875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 800,
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
            "x": 2460.9375,
            "top": 1135.4166666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25,
                "weight": 800,
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
                "text": "+1pp Y/Y",
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
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "456000000",
      "literal": "456M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "premium_subs",
      "value": "195000000",
      "literal": "195M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "ad_supported_subs",
      "value": "273000000",
      "literal": "273M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Spotify · 2022 财年第三季度",
      "meta": {
        "title": "Spotify 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "titleTextLength": 1927.0833333333333
      },
      "nodes": {
        "premium": {
          "label": "付费订阅",
          "notes": [
            "同比 +22%"
          ]
        },
        "advertising": {
          "label": "广告支持",
          "notes": [
            "同比 +19%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 25%",
            "同比 (2 个百分点)"
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
            "同比 (11 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "premium_cost": {
          "label": "付费订阅",
          "notes": [
            "毛利率 28%"
          ]
        },
        "advertising_cost": {
          "label": "广告支持",
          "notes": [
            "毛利率 2%"
          ]
        },
        "sm": {
          "label": "销售与市场营销",
          "notes": [
            "占收入 14%",
            "同比 +3 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 13%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 5%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "premium": {
            "blocks": [
              {
                "x": 406.25,
                "top": 494.79166666666663,
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
                    "text": "同比 +22%",
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
                "x": 406.25,
                "top": 933.59375,
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
                    "text": "同比 +19%",
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
                "x": 868.4895833333333,
                "top": 509.1145833333333,
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
                    "text": "同比 +21%",
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
                "x": 1378.90625,
                "top": 356.7708333333333,
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
                    "text": "利润率 25%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1376.3020833333333,
                "top": 1204.4270833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 800,
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
                "x": 1381.5104166666665,
                "top": 746.09375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 800,
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
                    "text": "同比 (11 个百分点)",
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
                "x": 1829.4270833333333,
                "top": 485.6770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 800,
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
          "premium_cost": {
            "blocks": [
              {
                "x": 1901.0416666666665,
                "top": 1067.7083333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "付费订阅",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
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
          "advertising_cost": {
            "blocks": [
              {
                "x": 1901.0416666666665,
                "top": 1248.6979166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "广告支持",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "毛利率 2%",
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
                "x": 2460.9375,
                "top": 700.5208333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与市场营销",
                    "size": 31.25,
                    "weight": 800,
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
          "rnd": {
            "blocks": [
              {
                "x": 2460.9375,
                "top": 921.875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 800,
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
                "x": 2460.9375,
                "top": 1135.4166666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25,
                    "weight": 800,
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
                    "text": "同比 +1 个百分点",
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
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"136\" y=\"571\" text-anchor=\"middle\" font-size=\"30\" fill=\"#000\" font-weight=\"800\">付费订阅</text><text x=\"137\" y=\"824\" text-anchor=\"middle\" font-size=\"30\" fill=\"#000\" font-weight=\"800\">广告支持</text><g><rect x=\"23\" y=\"923\" width=\"162\" height=\"115\" rx=\"24\" fill=\"#000\"/><text x=\"104\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\" font-weight=\"800\">月活跃用户</text><text x=\"104\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\" data-operating-metric=\"mau\">456M</text><text x=\"104\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"#fff\" font-weight=\"400\">同比 +20%</text></g><g><rect x=\"194\" y=\"923\" width=\"255\" height=\"115\" rx=\"24\" fill=\"#000\"/><text x=\"321.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\" font-weight=\"800\">付费订阅用户</text><text x=\"321.5\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\" data-operating-metric=\"premium_subs\">195M</text><text x=\"321.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"#fff\" font-weight=\"400\">同比 +13%</text></g><g><rect x=\"459\" y=\"923\" width=\"292\" height=\"115\" rx=\"24\" fill=\"#000\"/><text x=\"605\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\" font-weight=\"800\">广告支持订阅用户</text><text x=\"605\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\" data-operating-metric=\"ad_supported_subs\">273M</text><text x=\"605\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"#fff\" font-weight=\"400\">同比 +24%</text></g><text x=\"337\" y=\"1068\" text-anchor=\"middle\" font-size=\"22\" fill=\"#818181\" font-weight=\"400\">MAU = 月活跃用户</text><text x=\"330\" y=\"1105\" text-anchor=\"middle\" font-size=\"30\" fill=\"#000\" font-weight=\"800\">来源：季度业绩</text></g></g>"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"136\" y=\"571\" text-anchor=\"middle\" font-size=\"30\" fill=\"#000\" font-weight=\"800\">Premium</text><text x=\"137\" y=\"824\" text-anchor=\"middle\" font-size=\"30\" fill=\"#000\" font-weight=\"800\">Ad-supported</text><g><rect x=\"23\" y=\"923\" width=\"162\" height=\"115\" rx=\"24\" fill=\"#000\"/><text x=\"104\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\" font-weight=\"800\">MAU</text><text x=\"104\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\" data-operating-metric=\"mau\">456M</text><text x=\"104\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"#fff\" font-weight=\"400\">+20% Y/Y</text></g><g><rect x=\"194\" y=\"923\" width=\"255\" height=\"115\" rx=\"24\" fill=\"#000\"/><text x=\"321.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\" font-weight=\"800\">Premium Subs</text><text x=\"321.5\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\" data-operating-metric=\"premium_subs\">195M</text><text x=\"321.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"#fff\" font-weight=\"400\">+13% Y/Y</text></g><g><rect x=\"459\" y=\"923\" width=\"292\" height=\"115\" rx=\"24\" fill=\"#000\"/><text x=\"605\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\" font-weight=\"800\">Ad-supported Subs</text><text x=\"605\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\" data-operating-metric=\"ad_supported_subs\">273M</text><text x=\"605\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"#fff\" font-weight=\"400\">+24% Y/Y</text></g><text x=\"337\" y=\"1068\" text-anchor=\"middle\" font-size=\"22\" fill=\"#818181\" font-weight=\"400\">MAU = Monthly Average Users</text><text x=\"330\" y=\"1105\" text-anchor=\"middle\" font-size=\"30\" fill=\"#000\" font-weight=\"800\">Source: Quarterly results</text></g></g>"
});
