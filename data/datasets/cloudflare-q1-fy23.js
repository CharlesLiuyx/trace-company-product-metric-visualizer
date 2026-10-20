window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "cloudflare-q1-fy23",
  "name": "Cloudflare · Q1 FY23",
  "company": "Cloudflare",
  "meta": {
    "company": "Cloudflare",
    "title": "Cloudflare Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Q1 FY23 · Source chart",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/cloudflare-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 127.6201171875,
    "titleWeight": 800,
    "titleTextLength": 2376.59912109375,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 559.9658203125,
    "logoHeight": 203.150390625,
    "logoY": 240.91552734375,
    "logoViewBox": "0 0 670 205",
    "logoSvg": "\n    <g transform=\"translate(300 0) scale(0.91)\">\n      <path d=\"M43 88C44 58 70 39 100 43C111 15 138 0 171 0C209 0 238 23 244 59C268 59 286 77 286 104C286 127 269 143 246 143H42C19 143 1 126 1 104C1 81 18 65 40 64C40 72 41 80 43 88Z\" fill=\"#f58220\"/>\n      <path d=\"M225 58C252 58 273 80 273 107C273 119 269 130 262 138H187C172 138 168 118 184 113L202 108C215 105 218 88 205 81C211 67 218 61 225 58Z\" fill=\"#fbb040\"/>\n      <path d=\"M74 92H206C214 92 214 82 205 82H83C75 82 70 92 74 92Z\" fill=\"#ffffff\"/>\n    </g>\n    <text x=\"20\" y=\"186\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"63\" font-weight=\"800\" letter-spacing=\"9\" fill=\"#3b3b3d\"\n      textLength=\"550\" lengthAdjust=\"spacingAndGlyphs\">CLOUDFLARE</text>\n    <text x=\"570\" y=\"137\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#3b3b3d\">R</text>\n  ",
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#707070",
    "noteColor": "#707070",
    "palette": {
      "source": {
        "node": "#ff7f18",
        "label": "#ff7f18"
      },
      "hub": {
        "node": "#ff7f18",
        "label": "#ff7f18"
      },
      "profit": {
        "node": "#27a327",
        "label": "#00964a"
      },
      "cost": {
        "node": "#d70000",
        "label": "#971100"
      }
    },
    "linkTint": {
      "source": "#f3bf8e",
      "hub": "#f3bf8e",
      "profit": "#9ccd9c",
      "cost": "#e38284"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 7
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "label": "United States",
      "value": 153,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+37% Y/Y"
      ]
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 78,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+40% Y/Y"
      ]
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 39,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+31% Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 20,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+31% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 290,
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "+37% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 220,
      "type": "profit",
      "col": 2,
      "order": 5,
      "notes": [
        "76% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 70,
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -47,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [
        "(16%) margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 267,
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 137,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "47% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 82,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "28% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 48,
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [
        "17% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 153,
      "width": 145.8515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 145.8515625,
      "targetWidth": 143.2470703125
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 78,
      "width": 74.22802734375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 39,
      "width": 37.76513671875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 20,
      "width": 19.53369140625,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 220,
      "width": 208.359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ccd9c"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 70,
      "width": 66.41455078125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 220,
      "width": 208.359375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 47,
      "width": 44.2763671875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 137,
      "width": 130.224609375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 82,
      "width": 78.134765625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 48,
      "width": 45.57861328125,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "united_states": {
        "x": 398.4873046875,
        "y": 423.22998046875,
        "width": 72.92578125,
        "height": 145.8515625
      },
      "emea": {
        "x": 398.4873046875,
        "y": 705.8173828125,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "apac": {
        "x": 398.4873046875,
        "y": 931.10595703125,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "other": {
        "x": 398.4873046875,
        "y": 1142.06982421875,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "revenue": {
        "x": 865.99365234375,
        "y": 653.7275390625,
        "width": 72.92578125,
        "height": 274.77392578125
      },
      "gross_profit": {
        "x": 1317.873046875,
        "y": 586.0107421875,
        "width": 72.92578125,
        "height": 208.359375
      },
      "cost_of_revenue": {
        "x": 1323.08203125,
        "y": 937.6171875,
        "width": 72.92578125,
        "height": 66.41455078125
      },
      "operating_loss": {
        "x": 1567.904296875,
        "y": 1110.81591796875,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "operating_expenses": {
        "x": 1782.77490234375,
        "y": 717.53759765625,
        "width": 72.92578125,
        "height": 253.93798828125
      },
      "sm": {
        "x": 2267.21044921875,
        "y": 549.5478515625,
        "width": 72.92578125,
        "height": 130.224609375
      },
      "rnd": {
        "x": 2267.21044921875,
        "y": 850.36669921875,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "ga": {
        "x": 2267.21044921875,
        "y": 1134.25634765625,
        "width": 72.92578125,
        "height": 45.57861328125
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 444.06591796875,
            "top": 329.46826171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+37% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 338.583984375,
            "top": 449.014453125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "United",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "States",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 444.06591796875,
            "top": 610.75341796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+40% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 338.583984375,
            "top": 719.2956298828125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "EMEA",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 444.06591796875,
            "top": 836.0419921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+31% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 338.583984375,
            "top": 926.3527587890625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "APAC",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 444.06591796875,
            "top": 1041.796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+31% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 338.583984375,
            "top": 1128.2009033203126,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 903.7587890625,
            "top": 506.57373046875,
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
                "text": "+37% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1356.9404296875,
            "top": 399.78955078125,
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
                "text": "76% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1359.544921875,
            "top": 1022.26318359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1610.87841796875,
            "top": 1169.4169921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(16%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1819.23779296875,
            "top": 552.15234375,
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
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2463.849609375,
            "top": 546.943359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "47% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2463.849609375,
            "top": 823.01953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "28% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2463.849609375,
            "top": 1099.095703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "17% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "dbnr",
      "label": "DBNR",
      "value": "117",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "117%",
      "basis": "unspecified",
      "notes": [
        "(10pp) Y/Y"
      ],
      "quote": "DBNR\n117%\n(10pp) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          69,
          1184,
          163,
          164
        ]
      }
    },
    {
      "id": "customers",
      "label": "Customers",
      "value": "168000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "168K",
      "basis": "unspecified",
      "notes": [
        "+13% Y/Y"
      ],
      "quote": "Customers 168K +13% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          279,
          1201,
          475,
          44
        ]
      }
    },
    {
      "id": "large_customers",
      "label": "> $100K",
      "value": "2156",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2,156",
      "basis": "unspecified",
      "notes": [
        "+40% Y/Y"
      ],
      "quote": "> $100K 2,156 +40% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          333,
          1245,
          418,
          44
        ]
      }
    },
    {
      "id": "direct_customers",
      "label": "Direct customers",
      "value": "86",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "86%",
      "basis": "unspecified",
      "notes": [
        "of revenue"
      ],
      "quote": "Direct customers 86% of revenue",
      "anchor": {
        "type": "image-box",
        "box": [
          271,
          1288,
          507,
          44
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Cloudflare · 2023 财年第一季度",
      "meta": {
        "title": "Cloudflare 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "2023 财年第一季度 · 来源图",
        "titleSize": 111.9931640625,
        "titleTextLength": 2252.8857421875
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +37%"
          ]
        },
        "emea": {
          "label": "欧洲、中东和非洲",
          "notes": [
            "同比 +40%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +31%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +31%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +37%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 76%",
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
            "利润率 (16%)",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 47%",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 28%",
            "同比 (4 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 17%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 444.06591796875,
                "top": 329.46826171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +37%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 338.583984375,
                "top": 472.5199951171875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "美国",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 444.06591796875,
                "top": 610.75341796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +40%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 338.583984375,
                "top": 695.790087890625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "欧洲、中东",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "和非洲",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 444.06591796875,
                "top": 836.0419921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +31%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 338.583984375,
                "top": 926.3527587890625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "亚太",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 444.06591796875,
                "top": 1041.796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +31%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 338.583984375,
                "top": 1128.2009033203126,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 903.7587890625,
                "top": 506.57373046875,
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
                    "text": "同比 +37%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1356.9404296875,
                "top": 399.78955078125,
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
                    "text": "利润率 76%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1359.544921875,
                "top": 1022.26318359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1610.87841796875,
                "top": 1169.4169921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (16%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1819.23779296875,
                "top": 552.15234375,
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
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2463.849609375,
                "top": 546.943359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 47%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2463.849609375,
                "top": 823.01953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
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
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2463.849609375,
                "top": 1099.095703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"53\" y=\"909\" width=\"125\" height=\"126\" rx=\"30\" fill=\"#ff7f18\"/><rect x=\"182\" y=\"909\" width=\"437\" height=\"126\" rx=\"24\" fill=\"#ff7f18\"/><g fill=\"#fff\" text-anchor=\"middle\" font-size=\"23\"><text x=\"116\" y=\"950\" font-weight=\"800\">DBNR</text><text x=\"116\" y=\"981\" data-operating-metric=\"dbnr\">117%</text><text x=\"116\" y=\"1012\" font-size=\"15\">同比 (10 个百分点)</text><text x=\"297\" y=\"948\">客户 </text><text x=\"422\" y=\"948\" data-operating-metric=\"customers\">168K</text><text x=\"528\" y=\"948\">同比 +13%</text><text x=\"323\" y=\"980\">超过 $100K</text><text x=\"398\" y=\"980\" data-operating-metric=\"large_customers\">2,156</text><text x=\"517\" y=\"980\">同比 +40%</text><text x=\"311\" y=\"1012\">直销客户</text><text x=\"440\" y=\"1012\" data-operating-metric=\"direct_customers\">86%</text><text x=\"532\" y=\"1012\">占收入</text></g><text x=\"155\" y=\"1066\" font-size=\"21\" fill=\"#707070\">DBNR = 美元净留存率</text><text x=\"132\" y=\"1104\" font-size=\"30\" font-weight=\"700\">来源：季度业绩</text></g></g>"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"53\" y=\"909\" width=\"125\" height=\"126\" rx=\"30\" fill=\"#ff7f18\"/><rect x=\"182\" y=\"909\" width=\"437\" height=\"126\" rx=\"24\" fill=\"#ff7f18\"/><g fill=\"#fff\" text-anchor=\"middle\" font-size=\"23\"><text x=\"116\" y=\"950\" font-weight=\"800\">DBNR</text><text x=\"116\" y=\"981\" data-operating-metric=\"dbnr\">117%</text><text x=\"116\" y=\"1012\" font-size=\"15\">(10pp) Y/Y</text><text x=\"297\" y=\"948\">Customers </text><text x=\"422\" y=\"948\" data-operating-metric=\"customers\">168K</text><text x=\"528\" y=\"948\">+13% Y/Y</text><text x=\"323\" y=\"980\">&gt; $100K</text><text x=\"398\" y=\"980\" data-operating-metric=\"large_customers\">2,156</text><text x=\"517\" y=\"980\">+40% Y/Y</text><text x=\"311\" y=\"1012\">Direct customers</text><text x=\"440\" y=\"1012\" data-operating-metric=\"direct_customers\">86%</text><text x=\"532\" y=\"1012\">of revenue</text></g><text x=\"155\" y=\"1066\" font-size=\"21\" fill=\"#707070\">DBNR = Dollar Based Net Retention</text><text x=\"132\" y=\"1104\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g></g>"
});
