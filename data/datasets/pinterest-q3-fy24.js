window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pinterest-q3-fy24",
  "name": "Pinterest · Q3 FY24",
  "company": "Pinterest",
  "meta": {
    "company": "Pinterest",
    "title": "Pinterest Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/pinterest-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2304.9755859375,
    "hidePeriodStamp": true,
    "logoWidth": 213.568359375,
    "logoHeight": 213.568359375,
    "logoY": 226.5908203125,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).pinterestLogo || ''
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#154f79",
    "noteColor": "#737373",
    "palette": {
      "source": {
        "node": "#1b3077",
        "label": "#1b3077"
      },
      "hub": {
        "node": "#1b3077",
        "label": "#1b3077"
      },
      "profit": {
        "node": "#269e29",
        "label": "#009446"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#929cba",
      "hub": "#929cba",
      "profit": "#99cc99",
      "cost": "#e08585"
    },
    "linkOpacity": 1
  },
  "layout": {
    "scale": 0.34803904510022277,
    "nodes": {
      "operating_loss": {
        "x": 1638.2255859375,
        "y": 954.54638671875,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "us_canada": {
        "x": 432.345703125,
        "y": 459.69287109375,
        "width": 72.92578125,
        "height": 250.03125
      },
      "europe": {
        "x": 432.345703125,
        "y": 847.76220703125,
        "width": 72.92578125,
        "height": 48.18310546875
      },
      "rest_of_world": {
        "x": 432.345703125,
        "y": 1049.6103515625,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "revenue": {
        "x": 898.5498046875,
        "y": 596.4287109375,
        "width": 72.92578125,
        "height": 312.5390625
      },
      "gross_profit": {
        "x": 1360.84716796875,
        "y": 459.69287109375,
        "width": 72.92578125,
        "height": 247.4267578125
      },
      "cost_of_revenue": {
        "x": 1359.544921875,
        "y": 997.5205078125,
        "width": 72.92578125,
        "height": 65.1123046875
      },
      "operating_expenses": {
        "x": 1843.98046875,
        "y": 599.033203125,
        "width": 72.92578125,
        "height": 250.03125
      },
      "rnd": {
        "x": 2299.7666015625,
        "y": 397.18505859375,
        "width": 72.92578125,
        "height": 114.59765625
      },
      "sm": {
        "x": 2299.7666015625,
        "y": 716.2353515625,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "ga": {
        "x": 2299.7666015625,
        "y": 1027.47216796875,
        "width": 72.92578125,
        "height": 49.4853515625
      }
    },
    "labels": {
      "us_canada": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 365.93115234375,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          },
          {
            "x": 390.673828125,
            "top": 537.0462890625,
            "lines": [
              {
                "text": "US &",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "Canada",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "anchor": "end",
            "lineGap": 9.11572265625,
            "semanticRole": "name"
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 463.599609375,
            "top": 755.302734375,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          },
          {
            "x": 390.673828125,
            "top": 848.28310546875,
            "lines": [
              {
                "text": "Europe",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "anchor": "end",
            "lineGap": 9.11572265625,
            "semanticRole": "name"
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 957.15087890625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+35% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          },
          {
            "x": 390.673828125,
            "top": 1007.9384765625,
            "lines": [
              {
                "text": "Rest of",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "the world",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "anchor": "end",
            "lineGap": 9.11572265625,
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 935.0126953125,
            "top": 449.27490234375,
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
                "text": "+18% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1397.31005859375,
            "top": 274.77392578125,
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
                "text": "79% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1397.31005859375,
            "top": 1080.8642578125,
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
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1880.443359375,
            "top": 441.46142578125,
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
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1674.6884765625,
            "top": 974.080078125,
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
                "text": "(1%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2509.42822265625,
            "top": 408.9052734375,
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
                "text": "36% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2509.42822265625,
            "top": 725.35107421875,
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
                "text": "28% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2509.42822265625,
            "top": 1015.751953125,
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
                "text": "16% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "us_canada",
      "label": "US & Canada",
      "value": 719,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 137,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "rest_of_world",
      "label": "Rest of the world",
      "value": 42,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+35% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 898,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+18% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 711,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "79% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 187,
      "type": "cost",
      "col": 3,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 717,
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 6,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [
        "(1%) margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 327,
      "type": "cost",
      "col": 3,
      "order": 8,
      "notes": [
        "36% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 249,
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": [
        "28% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 141,
      "type": "cost",
      "col": 3,
      "order": 10,
      "notes": [
        "16% of revenue",
        "+2pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "us_canada",
      "target": "revenue",
      "value": 719,
      "y0": 584.70849609375,
      "y1": 721.4443359375,
      "sourceWidth": 250.03125,
      "targetWidth": 250.03125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 137,
      "y0": 871.853759765625,
      "y1": 871.20263671875,
      "sourceWidth": 48.18310546875,
      "targetWidth": 49.4853515625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 42,
      "y0": 1057.423828125,
      "y1": 902.45654296875,
      "sourceWidth": 15.626953125,
      "targetWidth": 13.0224609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 711,
      "y0": 720.14208984375,
      "y1": 583.40625,
      "sourceWidth": 247.4267578125,
      "targetWidth": 247.4267578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 187,
      "y0": 876.41162109375,
      "y1": 1030.07666015625,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 711,
      "y0": 583.40625,
      "y1": 722.74658203125,
      "sourceWidth": 247.4267578125,
      "targetWidth": 247.4267578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 327,
      "y0": 656.33203125,
      "y1": 454.48388671875,
      "sourceWidth": 114.59765625,
      "targetWidth": 114.59765625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 249,
      "y0": 757.256103515625,
      "y1": 759.860595703125,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 141,
      "y0": 824.972900390625,
      "y1": 1052.21484375,
      "sourceWidth": 48.18310546875,
      "targetWidth": 49.4853515625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 6,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 955.8486328125,
      "y1": 847.76220703125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "x0": 1711.1513671875,
        "x1": 1843.98046875,
        "c1x": 1784.0771484375,
        "c1y": 955.8486328125,
        "c2x": 1764.54345703125,
        "c2y": 847.76220703125
      }
    }
  ],
  "nonNodeMetrics": [],
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "537000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "537M"
    },
    {
      "id": "mau_us_canada",
      "value": "99000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "99M"
    },
    {
      "id": "mau_europe",
      "value": "139000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "139M"
    },
    {
      "id": "mau_rest_of_world",
      "value": "300000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "300M"
    },
    {
      "id": "arpu",
      "value": "0.00170",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.70"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Arial,sans-serif\"><rect x=\"26\" y=\"174\" width=\"144\" height=\"129\" rx=\"24\" fill=\"#cf0009\"/><path d=\"M98 317L124 353H72Z\" fill=\"#cf0009\"/><rect x=\"45\" y=\"353\" width=\"103\" height=\"546\" rx=\"12\" fill=\"#cf0009\"/><rect x=\"246\" y=\"866\" width=\"162\" height=\"116\" rx=\"24\" fill=\"#cf0009\"/><text data-operating-metric=\"mau\" x=\"98\" y=\"253\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">537M</text><text x=\"98\" y=\"284\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">+11% Y/Y</text><text data-operating-metric=\"mau_us_canada\" x=\"98\" y=\"444\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">99M</text><text x=\"98\" y=\"475\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">+3% Y/Y</text><text data-operating-metric=\"mau_europe\" x=\"98\" y=\"676\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">139M</text><text x=\"98\" y=\"707\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">+8% Y/Y</text><text data-operating-metric=\"mau_rest_of_world\" x=\"98\" y=\"805\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">300M</text><text x=\"98\" y=\"836\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">+16% Y/Y</text><text data-operating-metric=\"arpu\" x=\"327\" y=\"937\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">$1.70</text><text x=\"327\" y=\"968\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">+5% Y/Y</text><text x=\"98\" y=\"217\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"#fff\">MAU</text><text x=\"327\" y=\"906\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"#fff\">ARPU</text><text x=\"330\" y=\"1010\" text-anchor=\"middle\" font-size=\"21\" fill=\"#737373\">MAU = Monthly Active Users</text><text x=\"330\" y=\"1040\" text-anchor=\"middle\" font-size=\"21\" fill=\"#737373\">ARPU = Average Revenue Per User</text></g></g>",
  "i18n": {
    "zh": {
      "name": "Pinterest · 2024 财年第三季度",
      "meta": {
        "title": "Pinterest 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "titleSize": 114.59765625,
        "titleTextLength": 2057.548828125
      },
      "nodes": {
        "us_canada": {
          "label": "美国和加拿大",
          "notes": [
            "同比 +16%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +20%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +35%"
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
            "利润率 79%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (1%)",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 36%",
            "同比 (2 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 28%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 16%",
            "同比 +2 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "us_canada": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 365.93115234375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              },
              {
                "x": 390.673828125,
                "top": 544.3388671875,
                "lines": [
                  {
                    "text": "美国和",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "加拿大",
                    "size": 33.8583984375,
                    "weight": 700
                  }
                ],
                "anchor": "end",
                "lineGap": 9.11572265625,
                "semanticRole": "name"
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 463.599609375,
                "top": 755.302734375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              },
              {
                "x": 390.673828125,
                "top": 848.28310546875,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 33.8583984375,
                    "weight": 700
                  }
                ],
                "anchor": "end",
                "lineGap": 9.11572265625,
                "semanticRole": "name"
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 957.15087890625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +35%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              },
              {
                "x": 390.673828125,
                "top": 1017.05419921875,
                "lines": [
                  {
                    "text": "世界",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "其他地区",
                    "size": 33.8583984375,
                    "weight": 700
                  }
                ],
                "anchor": "end",
                "lineGap": 9.11572265625,
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 935.0126953125,
                "top": 449.27490234375,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1397.31005859375,
                "top": 274.77392578125,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 79%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1397.31005859375,
                "top": 1080.8642578125,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1880.443359375,
                "top": 441.46142578125,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1674.6884765625,
                "top": 974.080078125,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "亏损",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (1%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2509.42822265625,
                "top": 408.9052734375,
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
                    "text": "占收入 36%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2509.42822265625,
                "top": 725.35107421875,
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
                    "text": "占收入 28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2509.42822265625,
                "top": 1015.751953125,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Arial,sans-serif\"><rect x=\"26\" y=\"174\" width=\"144\" height=\"129\" rx=\"24\" fill=\"#cf0009\"/><path d=\"M98 317L124 353H72Z\" fill=\"#cf0009\"/><rect x=\"45\" y=\"353\" width=\"103\" height=\"546\" rx=\"12\" fill=\"#cf0009\"/><rect x=\"246\" y=\"866\" width=\"162\" height=\"116\" rx=\"24\" fill=\"#cf0009\"/><text data-operating-metric=\"mau\" x=\"98\" y=\"253\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">537M</text><text x=\"98\" y=\"284\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">同比 +11%</text><text data-operating-metric=\"mau_us_canada\" x=\"98\" y=\"444\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">99M</text><text x=\"98\" y=\"475\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">同比 +3%</text><text data-operating-metric=\"mau_europe\" x=\"98\" y=\"676\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">139M</text><text x=\"98\" y=\"707\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">同比 +8%</text><text data-operating-metric=\"mau_rest_of_world\" x=\"98\" y=\"805\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">300M</text><text x=\"98\" y=\"836\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">同比 +16%</text><text data-operating-metric=\"arpu\" x=\"327\" y=\"937\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">$1.70</text><text x=\"327\" y=\"968\" text-anchor=\"middle\" font-size=\"20\" fill=\"#fff\">同比 +5%</text><text x=\"98\" y=\"217\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"#fff\">月活跃用户</text><text x=\"327\" y=\"906\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"#fff\">每用户平均收入</text><text x=\"330\" y=\"1010\" text-anchor=\"middle\" font-size=\"21\" fill=\"#737373\">MAU = 月活跃用户</text><text x=\"330\" y=\"1040\" text-anchor=\"middle\" font-size=\"21\" fill=\"#737373\">ARPU = 每用户平均收入</text></g></g>"
    }
  }
});
