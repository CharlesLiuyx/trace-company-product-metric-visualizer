window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "uipath-q3-fy25",
  "name": "UiPath · Q3 FY25",
  "company": "UiPath",
  "meta": {
    "company": "UiPath",
    "title": "UiPath Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/uipath-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2148.7060546875,
    "periodX": 2461.2451171875,
    "periodY": 300.81884765625,
    "periodNoteY": 345.09521484375,
    "logoWidth": 460.9951171875,
    "logoHeight": 171.896484375,
    "logoY": 248.72900390625,
    "logoViewBox": "0 0 354 132",
    "logoSvg": "<g fill=\"#ff4810\" font-family=\"Arial,sans-serif\" font-weight=\"700\"><rect x=\"0\" y=\"0\" width=\"132\" height=\"132\"/><rect x=\"14\" y=\"14\" width=\"104\" height=\"104\" fill=\"#f2f2f2\"/><text x=\"17\" y=\"102\" font-size=\"95\">Ui</text><text x=\"139\" y=\"102\" font-size=\"95\">Path</text></g>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#ff4810",
        "label": "#ff4810"
      },
      "hub": {
        "node": "#ff4810",
        "label": "#ff4810"
      },
      "profit": {
        "node": "#28a229",
        "label": "#00934d"
      },
      "cost": {
        "node": "#cf0000",
        "label": "#941800"
      }
    },
    "linkTint": {
      "source": "#f7a48e",
      "hub": "#f7a48e",
      "profit": "#9bce99",
      "cost": "#df8588"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 8
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 207,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "79% gross margin",
        "+24% Y/Y"
      ]
    },
    {
      "id": "licenses",
      "label": "Licenses",
      "value": 137,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "98% gross margin",
        "(7%) Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 11,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(70%) gross margin",
        "+2% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 355,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 290,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "82% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 64,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 43,
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": [
        "(12%) margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 334,
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 187,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "53% of revenue",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 97,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "27% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 50,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "14% of revenue",
        "(3pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 207,
      "width": 156.26953125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "licenses",
      "target": "revenue",
      "value": 137,
      "width": 104.1796875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 11,
      "width": 7.8134765625,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 290,
      "width": 220.07958984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 64,
      "width": 48.18310546875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 290,
      "width": 220.07958984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 43,
      "width": 32.55615234375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 187,
      "width": 141.94482421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 97,
      "width": 72.92578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 50,
      "width": 37.76513671875,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "subscription": {
        "x": 394.58056640625,
        "y": 437.5546875,
        "width": 72.92578125,
        "height": 156.26953125
      },
      "licenses": {
        "x": 394.58056640625,
        "y": 764.41845703125,
        "width": 72.92578125,
        "height": 104.1796875
      },
      "professional_services": {
        "x": 394.58056640625,
        "y": 1045.70361328125,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "revenue": {
        "x": 862.0869140625,
        "y": 613.35791015625,
        "width": 72.92578125,
        "height": 268.2626953125
      },
      "gross_profit": {
        "x": 1325.6865234375,
        "y": 440.1591796875,
        "width": 72.92578125,
        "height": 220.07958984375
      },
      "cost_of_revenue": {
        "x": 1333.5,
        "y": 998.82275390625,
        "width": 72.92578125,
        "height": 48.18310546875
      },
      "operating_loss": {
        "x": 1556.18408203125,
        "y": 1000.125,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "operating_expenses": {
        "x": 1790.58837890625,
        "y": 612.0556640625,
        "width": 72.92578125,
        "height": 252.6357421875
      },
      "sm": {
        "x": 2263.3037109375,
        "y": 450.5771484375,
        "width": 72.92578125,
        "height": 141.94482421875
      },
      "rnd": {
        "x": 2263.3037109375,
        "y": 754.00048828125,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "ga": {
        "x": 2263.3037109375,
        "y": 1009.24072265625,
        "width": 72.92578125,
        "height": 37.76513671875
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 235.70654296875,
            "top": 484.435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "79% gross margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 431.04345703125,
            "top": 345.09521484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
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
      "licenses": {
        "blocks": [
          {
            "x": 235.70654296875,
            "top": 782.64990234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Licenses",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "98% gross margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 431.04345703125,
            "top": 668.05224609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 235.70654296875,
            "top": 979.2890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "services",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "(70%) gross margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 431.04345703125,
            "top": 949.33740234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
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
            "x": 898.5498046875,
            "top": 464.90185546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
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
            "x": 1362.1494140625,
            "top": 252.6357421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "82% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
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
            "x": 1369.962890625,
            "top": 1065.2373046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 700
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
            "x": 1592.64697265625,
            "top": 1045.70361328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(12%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
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
            "x": 1827.05126953125,
            "top": 446.67041015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 700
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
            "x": 2454.73388671875,
            "top": 455.7861328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "53% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
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
            "x": 2454.73388671875,
            "top": 746.18701171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "27% of revenue",
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
      "ga": {
        "blocks": [
          {
            "x": 2454.73388671875,
            "top": 991.00927734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
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
      "id": "arr",
      "label": "ARR",
      "value": "1.61",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.61B",
      "basis": "unspecified",
      "notes": [
        "+17% Y/Y"
      ],
      "quote": "ARR\n$1.61B\n+17% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          86,
          1126,
          146,
          158
        ]
      }
    },
    {
      "id": "dbnr",
      "label": "DBNR",
      "value": "113",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "113%",
      "basis": "unspecified",
      "notes": [
        "(2pp) Q/Q"
      ],
      "quote": "DBNR\n113%\n(2pp) Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          241,
          1126,
          167,
          158
        ]
      }
    },
    {
      "id": "customers_1m",
      "label": "Customers > $1M",
      "value": "302",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "302",
      "basis": "unspecified",
      "notes": [
        "+14% Y/Y"
      ],
      "quote": "Customers > $1M\n302\n+14% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          414,
          1128,
          507,
          78
        ]
      }
    },
    {
      "id": "customers_100k",
      "label": "Customers > $100K",
      "value": "2235",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2,235",
      "basis": "unspecified",
      "notes": [
        "+13% Y/Y"
      ],
      "quote": "Customers > $100K\n2,235\n+13% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          414,
          1206,
          507,
          78
        ]
      }
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><g fill=\"#ff4810\"><rect x=\"66\" y=\"866\" width=\"112\" height=\"121\" rx=\"27\"/><rect x=\"185\" y=\"866\" width=\"128\" height=\"121\" rx=\"27\"/><rect x=\"318\" y=\"866\" width=\"389\" height=\"121\" rx=\"27\"/></g><text x=\"122\" y=\"901\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">ARR</text><text data-operating-metric=\"arr\" x=\"122\" y=\"934\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">$1.61B</text><text x=\"122\" y=\"966\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+17% Y/Y</text><text x=\"249\" y=\"902\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"249\" y=\"936\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">113%</text><text x=\"249\" y=\"969\" text-anchor=\"middle\" font-size=\"19\" fill=\"white\">(2pp) Q/Q</text><text x=\"512\" y=\"900\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">Customers &gt; $1M</text><text data-operating-metric=\"customers_1m\" x=\"432\" y=\"932\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">302</text><text x=\"589\" y=\"932\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+14% Y/Y</text><text x=\"512\" y=\"957\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">Customers &gt; $100K</text><text data-operating-metric=\"customers_100k\" x=\"432\" y=\"981\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">2,235</text><text x=\"589\" y=\"981\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+13% Y/Y</text><text x=\"340\" y=\"1016\" text-anchor=\"middle\" font-size=\"20\" fill=\"#777777\">ARR = Annual Recurring Revenue</text><text x=\"340\" y=\"1045\" text-anchor=\"middle\" font-size=\"20\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text></g></g>",
  "i18n": {
    "zh": {
      "name": "UiPath · 2025 财年第三季度",
      "meta": {
        "title": "UiPath 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 10 月",
        "titleSize": 111.9931640625,
        "titleTextLength": 1888.2568359375
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "毛利率 79%",
            "同比 +24%"
          ]
        },
        "licenses": {
          "label": "许可证",
          "notes": [
            "毛利率 98%",
            "同比 (7%)"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "毛利率 (70%)",
            "同比 +2%"
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
            "利润率 82%",
            "同比 (3 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (12%)",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 53%",
            "同比 (6 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 27%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 14%",
            "同比 (3 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 235.70654296875,
                "top": 484.435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "毛利率 79%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 431.04345703125,
                "top": 345.09521484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
          "licenses": {
            "blocks": [
              {
                "x": 235.70654296875,
                "top": 782.64990234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "许可证",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "毛利率 98%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 431.04345703125,
                "top": 668.05224609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 235.70654296875,
                "top": 979.2890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "毛利率 (70%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 431.04345703125,
                "top": 949.33740234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
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
                "x": 898.5498046875,
                "top": 464.90185546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
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
                "x": 1362.1494140625,
                "top": 252.6357421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 82%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
                "x": 1369.962890625,
                "top": 1065.2373046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 700
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
                "x": 1592.64697265625,
                "top": 1045.70361328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (12%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
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
                "x": 1827.05126953125,
                "top": 446.67041015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 700
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
                "x": 2454.73388671875,
                "top": 455.7861328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 53%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
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
                "x": 2454.73388671875,
                "top": 746.18701171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 27%",
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
          "ga": {
            "blocks": [
              {
                "x": 2454.73388671875,
                "top": 991.00927734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><g fill=\"#ff4810\"><rect x=\"66\" y=\"866\" width=\"112\" height=\"121\" rx=\"27\"/><rect x=\"185\" y=\"866\" width=\"128\" height=\"121\" rx=\"27\"/><rect x=\"318\" y=\"866\" width=\"389\" height=\"121\" rx=\"27\"/></g><text x=\"122\" y=\"901\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">ARR</text><text data-operating-metric=\"arr\" x=\"122\" y=\"934\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">$1.61B</text><text x=\"122\" y=\"966\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +17%</text><text x=\"249\" y=\"902\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"249\" y=\"936\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">113%</text><text x=\"249\" y=\"969\" text-anchor=\"middle\" font-size=\"19\" fill=\"white\">环比 (2 个百分点)</text><text x=\"512\" y=\"900\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">客户 &gt; $1M</text><text data-operating-metric=\"customers_1m\" x=\"432\" y=\"932\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">302</text><text x=\"589\" y=\"932\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +14%</text><text x=\"512\" y=\"957\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">客户 &gt; $100K</text><text data-operating-metric=\"customers_100k\" x=\"432\" y=\"981\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">2,235</text><text x=\"589\" y=\"981\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +13%</text><text x=\"340\" y=\"1016\" text-anchor=\"middle\" font-size=\"20\" fill=\"#777777\">ARR = 年度经常性收入</text><text x=\"340\" y=\"1045\" text-anchor=\"middle\" font-size=\"20\" fill=\"#777777\">DBNR = 美元净留存率</text></g></g>"
    }
  }
});
