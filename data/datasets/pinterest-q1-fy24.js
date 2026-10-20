window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pinterest-q1-fy24",
  "name": "Pinterest · Q1 FY24",
  "company": "Pinterest",
  "meta": {
    "company": "Pinterest",
    "title": "Pinterest Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/pinterest-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2300,
    "hidePeriodStamp": true,
    "logoWidth": 212,
    "logoHeight": 212,
    "logoY": 237,
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
    "titleColor": "#155578",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 10
    }
  },
  "layout": {
    "scale": 0.45675675675675675,
    "nodes": {
      "us_canada": {
        "x": 413,
        "y": 473,
        "width": 72,
        "height": 270
      },
      "europe": {
        "x": 413,
        "y": 895,
        "width": 72,
        "height": 53
      },
      "rest_of_world": {
        "x": 413,
        "y": 1089,
        "width": 72,
        "height": 13
      },
      "revenue": {
        "x": 881,
        "y": 623,
        "width": 71,
        "height": 338
      },
      "gross_profit": {
        "x": 1348,
        "y": 532,
        "width": 71,
        "height": 255
      },
      "cost_of_revenue": {
        "x": 1348,
        "y": 972,
        "width": 71,
        "height": 82
      },
      "operating_loss": {
        "x": 1613,
        "y": 980,
        "width": 72,
        "height": 24
      },
      "operating_expenses": {
        "x": 1818,
        "y": 620,
        "width": 71,
        "height": 279
      },
      "rnd": {
        "x": 2282,
        "y": 467,
        "width": 72,
        "height": 127
      },
      "sm": {
        "x": 2282,
        "y": 747,
        "width": 72,
        "height": 103
      },
      "ga": {
        "x": 2282,
        "y": 1016,
        "width": 72,
        "height": 48
      }
    },
    "labels": {
      "us_canada": {
        "blocks": [
          {
            "x": 449.27,
            "top": 377.65,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 367.23,
            "top": 556.06,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "US &",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Canada",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 449.27,
            "top": 800.88,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 367.23,
            "top": 896.9499999999999,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Europe",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 449.27,
            "top": 994.92,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+25% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 389.37,
            "top": 1046.0,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Rest of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "the world",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 916.78,
            "top": 476.62,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "+23% Y/Y",
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
            "x": 1389.5,
            "top": 349.0,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "76% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
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
            "x": 1380.38,
            "top": 1071.75,
            "anchor": "middle",
            "lineGap": 10,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1854.4,
            "top": 458.39,
            "anchor": "middle",
            "lineGap": 10,
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1648.64,
            "top": 1024.87,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(7%) margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+33pp Y/Y",
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
            "x": 2492.5,
            "top": 468.81,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              },
              {
                "text": "38% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28,
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
            "x": 2492.5,
            "top": 768.33,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              },
              {
                "text": "31% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
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
            "x": 2492.5,
            "top": 989.71,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(20pp) Y/Y",
                "size": 28,
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
      "id": "us_canada",
      "label": "US & Canada",
      "value": 592,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+22% Y/Y"
      ],
      "color": "#1b3077",
      "labelColor": "#1b3077",
      "linkTint": "#929dbb"
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 118,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+27% Y/Y"
      ],
      "color": "#1b3077",
      "labelColor": "#1b3077",
      "linkTint": "#929dbb"
    },
    {
      "id": "rest_of_world",
      "label": "Rest of the world",
      "value": 30,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+25% Y/Y"
      ],
      "color": "#1b3077",
      "labelColor": "#1b3077",
      "linkTint": "#929dbb"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 740,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+23% Y/Y"
      ],
      "color": "#1b3077",
      "labelColor": "#1b3077",
      "linkTint": "#929dbb"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 559,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "76% margin",
        "+4pp Y/Y"
      ],
      "color": "#299e28",
      "labelColor": "#009653",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 181,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9e1600",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 613,
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9e1600",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -54,
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": [
        "(7%) margin",
        "+33pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9e1600",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 280,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "38% of revenue",
        "(6pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9e1600",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 226,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "31% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9e1600",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 107,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "14% of revenue",
        "(20pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9e1600",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "us_canada",
      "target": "revenue",
      "value": 592,
      "width": 270,
      "sourceWidth": 270,
      "targetWidth": 270,
      "y0": 608,
      "y1": 758,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#929dbb"
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 118,
      "width": 53,
      "sourceWidth": 53,
      "targetWidth": 55,
      "y0": 921.5,
      "y1": 920.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#929dbb"
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 30,
      "width": 13,
      "sourceWidth": 13,
      "targetWidth": 13,
      "y0": 1095.5,
      "y1": 954.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#929dbb"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 559,
      "width": 255,
      "sourceWidth": 255,
      "targetWidth": 255,
      "y0": 750.5,
      "y1": 659.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 181,
      "width": 83,
      "sourceWidth": 83,
      "targetWidth": 82,
      "y0": 919.5,
      "y1": 1013,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 559,
      "width": 255,
      "sourceWidth": 255,
      "targetWidth": 255,
      "y0": 659.5,
      "y1": 747.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 54,
      "width": 24,
      "sourceWidth": 24,
      "targetWidth": 24,
      "y0": 992,
      "y1": 887,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 280,
      "width": 128,
      "sourceWidth": 128,
      "targetWidth": 127,
      "y0": 684,
      "y1": 530.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 226,
      "width": 104,
      "sourceWidth": 104,
      "targetWidth": 103,
      "y0": 800,
      "y1": 798.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 107,
      "width": 47,
      "sourceWidth": 47,
      "targetWidth": 48,
      "y0": 875.5,
      "y1": 1040,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "518000000",
      "literal": "518M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "mau_us_canada",
      "value": "98000000",
      "literal": "98M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "mau_europe",
      "value": "140000000",
      "literal": "140M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "mau_rest_of_world",
      "value": "279000000",
      "literal": "279M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "arpu",
      "value": "0.00146",
      "literal": "$1.46",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq"
    }
  ],
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"33.8583984375\" y=\"226.5908203125\" width=\"187.5234375\" height=\"167.98974609375\" rx=\"31.25390625\" fill=\"#cf0009\"/><text x=\"127.62\" y=\"283.89\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\">MAU</text><text x=\"127.62\" y=\"330.77\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau\">518M</text><text x=\"127.62\" y=\"369.84\" text-anchor=\"middle\" font-size=\"26.04\" font-weight=\"400\" fill=\"white\">+12% Y/Y</text><path d=\"M 127.6201171875 414.1142578125 L 158.8740234375 460.9951171875 H 96.3662109375 Z\" fill=\"#cf0009\"/><rect x=\"58.60107421875\" y=\"459.69287109375\" width=\"134.13134765625\" height=\"711.0263671875\" rx=\"15.626953125\" fill=\"#cf0009\"/><text x=\"126.32\" y=\"589.92\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_us_canada\">98M</text><text x=\"126.32\" y=\"630.29\" text-anchor=\"middle\" font-size=\"26.04\" font-weight=\"400\" fill=\"white\">+3% Y/Y</text><text x=\"126.32\" y=\"910.27\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_europe\">140M</text><text x=\"126.32\" y=\"950.64\" text-anchor=\"middle\" font-size=\"26.04\" font-weight=\"400\" fill=\"white\">+10% Y/Y</text><text x=\"126.32\" y=\"1073.05\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_rest_of_world\">279M</text><text x=\"126.32\" y=\"1113.42\" text-anchor=\"middle\" font-size=\"26.04\" font-weight=\"400\" fill=\"white\">+16% Y/Y</text><rect x=\"321.65478515625\" y=\"1166.8125\" width=\"208.359375\" height=\"151.060546875\" rx=\"29.95166015625\" fill=\"#cf0009\"/><text x=\"425.83\" y=\"1220.20\" text-anchor=\"middle\" font-size=\"28.65\" font-weight=\"800\" fill=\"white\">ARPU</text><text x=\"425.83\" y=\"1260.57\" text-anchor=\"middle\" font-size=\"28.65\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"arpu\">$1.46</text><text x=\"425.83\" y=\"1293.13\" text-anchor=\"middle\" font-size=\"22.14\" font-weight=\"400\" fill=\"white\">+10% Y/Y</text><text x=\"425.83\" y=\"1354.34\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"400\" fill=\"#777777\">MAU = Monthly Active Users</text><text x=\"425.83\" y=\"1393.40\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"400\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"431.04\" y=\"1437.68\" text-anchor=\"middle\" font-size=\"36.46\" font-weight=\"800\" fill=\"black\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Pinterest · 2024 财年第一季度",
      "meta": {
        "title": "Pinterest 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "titleSize": 112,
        "titleTextLength": 1660
      },
      "nodes": {
        "us_canada": {
          "label": "美国和加拿大",
          "notes": [
            "同比 +22%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +27%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +25%"
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
            "利润率 76%",
            "同比 +4 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (7%)",
            "同比 +33 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 38%",
            "同比 (6 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 31%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 14%",
            "同比 (20 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "us_canada": {
            "blocks": [
              {
                "x": 449.27,
                "top": 377.65,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 367.23,
                "top": 556.06,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "美国和",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "加拿大",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 449.27,
                "top": 800.88,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 367.23,
                "top": 896.9499999999999,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 449.27,
                "top": 994.92,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 389.37,
                "top": 1046.0,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "世界",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "其他地区",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 916.78,
                "top": 476.62,
                "anchor": "middle",
                "lineGap": 10,
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
                    "text": "同比 +23%",
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
                "x": 1389.5,
                "top": 349.0,
                "anchor": "middle",
                "lineGap": 10,
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
                    "text": "利润率 76%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
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
                "x": 1380.38,
                "top": 1071.75,
                "anchor": "middle",
                "lineGap": 10,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1854.4,
                "top": 458.39,
                "anchor": "middle",
                "lineGap": 10,
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1648.64,
                "top": 1024.87,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (7%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +33 个百分点",
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
                "x": 2492.5,
                "top": 468.81,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "占收入 38%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 28,
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
                "x": 2492.5,
                "top": 768.33,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "占收入 31%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
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
                "x": 2492.5,
                "top": 989.71,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (20 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"33.8583984375\" y=\"226.5908203125\" width=\"187.5234375\" height=\"167.98974609375\" rx=\"31.25390625\" fill=\"#cf0009\"/><text x=\"127.62\" y=\"283.89\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\">月活用户</text><text x=\"127.62\" y=\"330.77\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau\">518M</text><text x=\"127.62\" y=\"369.84\" text-anchor=\"middle\" font-size=\"26.04\" font-weight=\"400\" fill=\"white\">同比 +12%</text><path d=\"M 127.6201171875 414.1142578125 L 158.8740234375 460.9951171875 H 96.3662109375 Z\" fill=\"#cf0009\"/><rect x=\"58.60107421875\" y=\"459.69287109375\" width=\"134.13134765625\" height=\"711.0263671875\" rx=\"15.626953125\" fill=\"#cf0009\"/><text x=\"126.32\" y=\"589.92\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_us_canada\">98M</text><text x=\"126.32\" y=\"630.29\" text-anchor=\"middle\" font-size=\"26.04\" font-weight=\"400\" fill=\"white\">同比 +3%</text><text x=\"126.32\" y=\"910.27\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_europe\">140M</text><text x=\"126.32\" y=\"950.64\" text-anchor=\"middle\" font-size=\"26.04\" font-weight=\"400\" fill=\"white\">同比 +10%</text><text x=\"126.32\" y=\"1073.05\" text-anchor=\"middle\" font-size=\"33.86\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_rest_of_world\">279M</text><text x=\"126.32\" y=\"1113.42\" text-anchor=\"middle\" font-size=\"26.04\" font-weight=\"400\" fill=\"white\">同比 +16%</text><rect x=\"321.65478515625\" y=\"1166.8125\" width=\"208.359375\" height=\"151.060546875\" rx=\"29.95166015625\" fill=\"#cf0009\"/><text x=\"425.83\" y=\"1220.20\" text-anchor=\"middle\" font-size=\"28.65\" font-weight=\"800\" fill=\"white\">每用户收入</text><text x=\"425.83\" y=\"1260.57\" text-anchor=\"middle\" font-size=\"28.65\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"arpu\">$1.46</text><text x=\"425.83\" y=\"1293.13\" text-anchor=\"middle\" font-size=\"22.14\" font-weight=\"400\" fill=\"white\">同比 +10%</text><text x=\"425.83\" y=\"1354.34\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"400\" fill=\"#777777\">MAU = 月活跃用户</text><text x=\"425.83\" y=\"1393.40\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"400\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"431.04\" y=\"1437.68\" text-anchor=\"middle\" font-size=\"36.46\" font-weight=\"800\" fill=\"black\">来源：季度业绩</text></g>"
    }
  }
});
