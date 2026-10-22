(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "semrush-q1-fy25",
  "name": "Semrush · Q1 FY25",
  "company": "Semrush",
  "meta": {
    "company": "Semrush",
    "title": "Semrush Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/semrush-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 196.61458333333331,
    "titleSize": 119.79166666666666,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "logoX": 690.1041666666666,
    "logoY": 242.1875,
    "logoWidth": 367.1875,
    "logoHeight": 160.15625,
    "logoViewBox": "0 0 282 123",
    "logoSvg": "<path fill=\"#ff6025\" d=\"M70 0H146C191 0 200 69 150 70C120 71 97 54 85 47L109 47L67 17L110 17Z\"/><circle cx=\"148\" cy=\"35\" r=\"23\" fill=\"#f2f2f2\"/><path d=\"M148 17Q166 18 167 35\" stroke=\"#ff6025\" stroke-width=\"7\" fill=\"none\"/><text x=\"141\" y=\"122\" font-family=\"Arial\" font-size=\"44\" font-weight=\"800\" text-anchor=\"middle\" fill=\"black\">SEMRUSH</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155576",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#ff6025",
        "label": "#ff6025"
      },
      "hub": {
        "node": "#ff6025",
        "label": "#ff6025"
      },
      "profit": {
        "node": "#269e27",
        "label": "#00934d"
      },
      "cost": {
        "node": "#d00000",
        "label": "#991700"
      }
    },
    "linkTint": {
      "source": "#f8b19a",
      "hub": "#f8b19a",
      "profit": "#9acb98",
      "cost": "#df8587"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "United States",
      "value": 46,
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#ff6025",
      "labelColor": "#ff6025",
      "linkTint": "#f8b19a"
    },
    {
      "id": "united_kingdom",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "United Kingdom",
      "value": 9,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#ff6025",
      "labelColor": "#ff6025",
      "linkTint": "#f8b19a"
    },
    {
      "id": "other",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Other",
      "value": 50,
      "notes": [
        "+35% Y/Y"
      ],
      "color": "#ff6025",
      "labelColor": "#ff6025",
      "linkTint": "#f8b19a"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 105,
      "notes": [
        "+22% Y/Y"
      ],
      "color": "#ff6025",
      "labelColor": "#ff6025",
      "linkTint": "#f8b19a"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 85,
      "notes": [
        "81% margin",
        "(2pp) Y/Y"
      ],
      "color": "#269e27",
      "labelColor": "#00934d",
      "linkTint": "#9acb98"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 20,
      "notes": [],
      "color": "#d00000",
      "labelColor": "#991700",
      "linkTint": "#df8587"
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating loss",
      "value": -0.074,
      "notes": [
        "(0%) margin",
        "(2pp) Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#991700",
      "linkTint": "#df8587",
      "valueText": "($74K)"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": "Operating expenses",
      "value": 85,
      "notes": [],
      "color": "#d00000",
      "labelColor": "#991700",
      "linkTint": "#df8587"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "S&M",
      "value": 41,
      "notes": [
        "39% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#991700",
      "linkTint": "#df8587"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "R&D",
      "value": 22,
      "notes": [
        "21% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#991700",
      "linkTint": "#df8587"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "value": 22,
      "notes": [
        "21% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#991700",
      "linkTint": "#df8587"
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 46,
      "sourceWidth": 134.11458333333331,
      "targetWidth": 134.11458333333331,
      "y0": 508.46354166666663,
      "y1": 677.734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f8b19a"
    },
    {
      "source": "united_kingdom",
      "target": "revenue",
      "value": 9,
      "sourceWidth": 27.34375,
      "targetWidth": 27.34375,
      "y0": 754.5572916666666,
      "y1": 758.4635416666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f8b19a"
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 50,
      "sourceWidth": 145.83333333333331,
      "targetWidth": 144.53125,
      "y0": 1005.2083333333333,
      "y1": 844.4010416666666,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f8b19a"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 85,
      "sourceWidth": 248.69791666666666,
      "targetWidth": 248.69791666666666,
      "y0": 735.0260416666666,
      "y1": 621.7447916666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acb98"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 20,
      "sourceWidth": 57.291666666666664,
      "targetWidth": 58.59375,
      "y0": 888.0208333333333,
      "y1": 1005.8593749999999,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8587"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 85,
      "sourceWidth": 248.69791666666666,
      "targetWidth": 249.77864583333334,
      "y0": 621.7447916666666,
      "y1": 732.9622395833333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8587"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.074,
      "sourceWidth": 0.22135416666666666,
      "targetWidth": 0.22135416666666666,
      "y0": 946.7252604166666,
      "y1": 857.9622395833333,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#df8587"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 41,
      "sourceWidth": 121.09375,
      "targetWidth": 121.09375,
      "y0": 668.6197916666666,
      "y1": 556.640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8587"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 22,
      "sourceWidth": 63.80208333333333,
      "targetWidth": 63.80208333333333,
      "y0": 761.0677083333333,
      "y1": 849.609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8587"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 22,
      "sourceWidth": 65.10416666666666,
      "targetWidth": 65.10416666666666,
      "y0": 825.5208333333333,
      "y1": 1111.9791666666665,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8587"
    }
  ],
  "layout": {
    "scale": 2.24,
    "nodes": {
      "united_states": {
        "x": 367.1875,
        "y": 441.40625,
        "width": 72.91666666666666,
        "height": 134.11458333333331
      },
      "united_kingdom": {
        "x": 367.1875,
        "y": 740.8854166666666,
        "width": 72.91666666666666,
        "height": 27.34375
      },
      "other": {
        "x": 367.1875,
        "y": 932.2916666666666,
        "width": 72.91666666666666,
        "height": 145.83333333333331
      },
      "revenue": {
        "x": 834.6354166666666,
        "y": 610.6770833333333,
        "width": 72.91666666666666,
        "height": 305.9895833333333
      },
      "gross_profit": {
        "x": 1302.0833333333333,
        "y": 497.3958333333333,
        "width": 72.91666666666666,
        "height": 248.69791666666666
      },
      "cost_of_revenue": {
        "x": 1302.0833333333333,
        "y": 976.5625,
        "width": 72.91666666666666,
        "height": 58.59375
      },
      "operating_loss": {
        "x": 1532.5520833333333,
        "y": 946.6145833333333,
        "width": 72.91666666666666,
        "height": 0.22135416666666666
      },
      "operating_expenses": {
        "x": 1770.8333333333333,
        "y": 608.0729166666666,
        "width": 72.91666666666666,
        "height": 250.0
      },
      "sm": {
        "x": 2235.677083333333,
        "y": 496.09375,
        "width": 72.91666666666666,
        "height": 121.09375
      },
      "rnd": {
        "x": 2235.677083333333,
        "y": 817.7083333333333,
        "width": 72.91666666666666,
        "height": 63.80208333333333
      },
      "ga": {
        "x": 2235.677083333333,
        "y": 1079.4270833333333,
        "width": 72.91666666666666,
        "height": 65.10416666666666
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 403.6458333333333,
            "top": 334.63541666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 292.96875,
            "top": 460.9375,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "United",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "States",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "united_kingdom": {
        "blocks": [
          {
            "x": 403.6458333333333,
            "top": 636.71875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 292.96875,
            "top": 705.7291666666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "United",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "Kingdom",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 403.6458333333333,
            "top": 830.7291666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+35% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 292.96875,
            "top": 985.6770833333333,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 871.09375,
            "top": 462.2395833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
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
                "text": "+22% Y/Y",
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
            "x": 1338.5416666666665,
            "top": 311.19791666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
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
                "text": "81% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1338.5416666666665,
            "top": 1052.0833333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.0625,
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
            "x": 1569.0104166666665,
            "top": 968.75,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "loss",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0%) margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1807.2916666666665,
            "top": 442.7083333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700
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
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2430.989583333333,
            "top": 475.26041666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "39% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2430.989583333333,
            "top": 778.6458333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "21% of revenue",
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
      "ga": {
        "blocks": [
          {
            "x": 2430.989583333333,
            "top": 1082.03125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "21% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
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
      "id": "arr",
      "literal": "$425M",
      "value": "425",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq"
    },
    {
      "id": "dbnr",
      "literal": "106%",
      "value": "106",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "customers",
      "literal": "118,000",
      "value": "118000",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans\" text-anchor=\"middle\"><rect x=\"101\" y=\"856\" width=\"127\" height=\"126\" rx=\"28\" fill=\"#ff6025\"/><text x=\"164.5\" y=\"896\" font-size=\"23\" font-weight=\"700\" fill=\"white\">ARR</text><text x=\"164.5\" y=\"929\" font-size=\"23\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"arr\">$425M</text><text x=\"164.5\" y=\"961\" font-size=\"19\" font-weight=\"400\" fill=\"white\">+20% Y/Y</text><rect x=\"233\" y=\"856\" width=\"127\" height=\"126\" rx=\"28\" fill=\"#ff6025\"/><text x=\"296.5\" y=\"896\" font-size=\"23\" font-weight=\"700\" fill=\"white\">DBNR</text><text x=\"296.5\" y=\"929\" font-size=\"23\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"dbnr\">106%</text><text x=\"296.5\" y=\"961\" font-size=\"19\" font-weight=\"400\" fill=\"white\">(1pp) Q/Q</text><rect x=\"366\" y=\"853\" width=\"230\" height=\"126\" rx=\"28\" fill=\"#ff6025\"/><text x=\"481.0\" y=\"893\" font-size=\"23\" font-weight=\"700\" fill=\"white\">Customers</text><text x=\"481.0\" y=\"926\" font-size=\"23\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"customers\">118,000</text><text x=\"481.0\" y=\"958\" font-size=\"19\" font-weight=\"400\" fill=\"white\">+5% Y/Y</text><text x=\"336\" y=\"1008\" font-size=\"21\" fill=\"#777777\">ARR = Annual Recurring Revenue</text><text x=\"336\" y=\"1037\" font-size=\"21\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text></g></g>",
  "i18n": {
    "zh": {
      "name": "Semrush · 2025 财年第一季度",
      "meta": {
        "title": "Semrush 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "titleSize": 111.97916666666666
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +13%"
          ]
        },
        "united_kingdom": {
          "label": "英国",
          "notes": [
            "同比 +11%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +35%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +22%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 81%",
            "同比 (2 个百分点)"
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
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场（S&M）",
          "notes": [
            "占收入 39%",
            "同比 (0 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发（R&D）",
          "notes": [
            "占收入 21%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用（G&A）",
          "notes": [
            "占收入 21%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 403.6458333333333,
                "top": 334.63541666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 292.96875,
                "top": 484.9375,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "美国",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "united_kingdom": {
            "blocks": [
              {
                "x": 403.6458333333333,
                "top": 636.71875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 292.96875,
                "top": 731.0291666666666,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "英国",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 403.6458333333333,
                "top": 830.7291666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +35%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 292.96875,
                "top": 985.6770833333333,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 871.09375,
                "top": 462.2395833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                    "text": "同比 +22%",
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
                "x": 1338.5416666666665,
                "top": 311.19791666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                    "text": "利润率 81%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1338.5416666666665,
                "top": 1052.0833333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
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
                "x": 1569.0104166666665,
                "top": 968.75,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (0%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1807.2916666666665,
                "top": 442.7083333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业费用",
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
          "sm": {
            "blocks": [
              {
                "x": 2465.989583333333,
                "top": 475.26041666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与市场（S&M）",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 39%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2430.989583333333,
                "top": 778.6458333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发（R&D）",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 21%",
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
          "ga": {
            "blocks": [
              {
                "x": 2465.989583333333,
                "top": 1082.03125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "管理费用（G&A）",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 21%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans\" text-anchor=\"middle\"><rect x=\"101\" y=\"856\" width=\"127\" height=\"126\" rx=\"28\" fill=\"#ff6025\"/><text x=\"164.5\" y=\"896\" font-size=\"23\" font-weight=\"700\" fill=\"white\">ARR</text><text x=\"164.5\" y=\"929\" font-size=\"23\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"arr\">$425M</text><text x=\"164.5\" y=\"961\" font-size=\"19\" font-weight=\"400\" fill=\"white\">同比 +20%</text><rect x=\"233\" y=\"856\" width=\"127\" height=\"126\" rx=\"28\" fill=\"#ff6025\"/><text x=\"296.5\" y=\"896\" font-size=\"23\" font-weight=\"700\" fill=\"white\">DBNR</text><text x=\"296.5\" y=\"929\" font-size=\"23\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"dbnr\">106%</text><text x=\"296.5\" y=\"961\" font-size=\"19\" font-weight=\"400\" fill=\"white\">环比 (1 个百分点)</text><rect x=\"366\" y=\"853\" width=\"230\" height=\"126\" rx=\"28\" fill=\"#ff6025\"/><text x=\"481.0\" y=\"893\" font-size=\"23\" font-weight=\"700\" fill=\"white\">客户数</text><text x=\"481.0\" y=\"926\" font-size=\"23\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"customers\">118,000</text><text x=\"481.0\" y=\"958\" font-size=\"19\" font-weight=\"400\" fill=\"white\">同比 +5%</text><text x=\"336\" y=\"1008\" font-size=\"21\" fill=\"#777777\">ARR = 年度经常性收入</text><text x=\"336\" y=\"1037\" font-size=\"21\" fill=\"#777777\">DBNR = 金额净留存率</text></g></g>"
    }
  }
});})();
