/* AppLovin Q2 FY26: Source-measured fixed Sankey View Adapter. */
window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "applovin-q2-fy26",
  "name": "AppLovin · Q2 FY26",
  "company": "AppLovin",
  "meta": {
    "company": "AppLovin",
    "title": "AppLovin Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/applovin-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "logoSvg": "<g fill=\"none\" stroke=\"#059bc5\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 115 L78 17 L139 115\"/><path d=\"M17 115 C48 89 107 89 139 115\"/><circle cx=\"17\" cy=\"115\" r=\"14\" fill=\"#f2f2f2\"/><circle cx=\"78\" cy=\"17\" r=\"14\" fill=\"#f2f2f2\"/><circle cx=\"139\" cy=\"115\" r=\"14\" fill=\"#f2f2f2\"/></g><text x=\"195\" y=\"107\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"108\" textLength=\"548\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#059bc5\"><tspan font-weight=\"800\">APP</tspan><tspan dx=\"14\" font-weight=\"400\">LOVIN</tspan></text>",
    "logoViewBox": "0 0 743 134",
    "logoWidth": 743,
    "logoHeight": 134,
    "logoY": 285,
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2320,
    "logoX": 470,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#6f7073",
    "noteColor": "#6f7073",
    "palette": {
      "source": {
        "node": "#059bc5",
        "label": "#059bc5"
      },
      "hub": {
        "node": "#059bc5",
        "label": "#059bc5"
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
      "source": "#87cadd",
      "hub": "#87cadd",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "layout": {
    "scale": 0.19074844074844075,
    "nodes": {
      "united_states": {
        "x": 393,
        "y": 540,
        "width": 71,
        "height": 189
      },
      "rest_of_world": {
        "x": 393,
        "y": 948,
        "width": 71,
        "height": 178
      },
      "revenue": {
        "x": 860,
        "y": 647,
        "width": 71,
        "height": 367
      },
      "gross_profit": {
        "x": 1327,
        "y": 538,
        "width": 71,
        "height": 324
      },
      "cost_of_revenue": {
        "x": 1327,
        "y": 1081,
        "width": 71,
        "height": 42
      },
      "operating_profit": {
        "x": 1794,
        "y": 429,
        "width": 71,
        "height": 286
      },
      "operating_expenses": {
        "x": 1794,
        "y": 941,
        "width": 71,
        "height": 37
      },
      "net_profit": {
        "x": 2261,
        "y": 343,
        "width": 72,
        "height": 242
      },
      "tax": {
        "x": 2261,
        "y": 805,
        "width": 72,
        "height": 44
      },
      "other": {
        "x": 2138,
        "y": 650,
        "width": 73,
        "height": 3
      },
      "rnd": {
        "x": 2261,
        "y": 936,
        "width": 72,
        "height": 17
      },
      "sm": {
        "x": 2261,
        "y": 1126,
        "width": 72,
        "height": 11
      },
      "ga": {
        "x": 2261,
        "y": 1280,
        "width": 72,
        "height": 5
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 428.5,
            "top": 443,
            "anchor": "middle",
            "lineGap": 14,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+50% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 223.5,
            "top": 586,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "United",
                "size": 40,
                "weight": 800
              },
              {
                "text": "States",
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
            "x": 433.5,
            "top": 850,
            "anchor": "middle",
            "lineGap": 14,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+56% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 224,
            "top": 988.5,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Rest of the",
                "size": 40,
                "weight": 800
              },
              {
                "text": "world",
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
            "x": 898,
            "top": 496,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+53% Y/Y",
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
            "x": 1368,
            "top": 350,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "88% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1363.5,
            "top": 1141,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Cost of",
                "size": 34,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 34,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1835,
            "top": 243,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "78% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 1832,
            "top": 994,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 34,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2449.5,
            "top": 376,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "66% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2448.5,
            "top": 785,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2178.5,
            "top": 669,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2448.5,
            "top": 904,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "5% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 2448.5,
            "top": 1076,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "3% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
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
            "x": 2448.5,
            "top": 1238,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "2% of revenue",
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
      }
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "United States",
      "value": 989,
      "notes": [
        "+50% Y/Y"
      ]
    },
    {
      "id": "rest_of_world",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Rest of the world",
      "value": 934,
      "notes": [
        "+56% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1924,
      "notes": [
        "+53% Y/Y"
      ],
      "valueText": "$1,924M"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 1698,
      "notes": [
        "88% margin",
        "+1pp Y/Y"
      ],
      "valueText": "$1,698M"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 226,
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 1494,
      "notes": [
        "78% margin",
        "+2pp Y/Y"
      ],
      "valueText": "$1,494M"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 204,
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1267,
      "notes": [
        "66% margin",
        "+5pp Y/Y"
      ],
      "valueText": "$1,267M"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 239,
      "notes": []
    },
    {
      "id": "other",
      "col": 4,
      "order": 2,
      "type": "profit",
      "label": "Other",
      "value": 11,
      "notes": []
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 100,
      "notes": [
        "5% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "S&M",
      "value": 63,
      "notes": [
        "3% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "G&A",
      "value": 40,
      "notes": [
        "2% of revenue",
        "(2pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 989,
      "sourceWidth": 189,
      "targetWidth": 189,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#87cadd",
      "y0": 634.5,
      "y1": 741.5,
      "curve": {
        "c1x": 638.24,
        "c2x": 685.76
      }
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 934,
      "sourceWidth": 178,
      "targetWidth": 178,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#87cadd",
      "y0": 1037,
      "y1": 925,
      "curve": {
        "c1x": 638.24,
        "c2x": 685.76
      }
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1698,
      "sourceWidth": 324,
      "targetWidth": 324,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 809,
      "y1": 700,
      "curve": {
        "c1x": 1073.56,
        "c2x": 1184.44
      }
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 226,
      "sourceWidth": 43,
      "targetWidth": 42,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 992.5,
      "y1": 1102
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1494,
      "sourceWidth": 286,
      "targetWidth": 286,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 681,
      "y1": 572,
      "curve": {
        "c1x": 1548.48,
        "c2x": 1635.6
      }
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 204,
      "sourceWidth": 38,
      "targetWidth": 37,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 843,
      "y1": 959.5
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1267,
      "sourceWidth": 240,
      "targetWidth": 240,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 549,
      "y1": 463,
      "curve": {
        "c1x": 2039.24,
        "c2x": 2086.76
      }
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 239,
      "sourceWidth": 46,
      "targetWidth": 44,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 692,
      "y1": 827
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 11,
      "sourceWidth": 3,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99",
      "y1": 584,
      "y0": 651.5
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 100,
      "sourceWidth": 20,
      "targetWidth": 17,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 951,
      "y1": 944.5
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 63,
      "sourceWidth": 11,
      "targetWidth": 11,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 966.5,
      "y1": 1131.5
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 40,
      "sourceWidth": 6,
      "targetWidth": 5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 975,
      "y1": 1282.5
    }
  ],
  "i18n": {
    "zh": {
      "name": "AppLovin · 2026 财年第二季度",
      "meta": {
        "title": "AppLovin 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "titleSize": 112,
        "titleTextLength": 1900
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +50%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +56%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +53%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 88%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 78%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 66%",
            "同比 +5 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 5%",
            "同比 +2 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 3%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 2%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 428.5,
                "top": 443,
                "anchor": "middle",
                "lineGap": 14,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +50%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 223.5,
                "top": 610,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "美国",
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
                "x": 433.5,
                "top": 850,
                "anchor": "middle",
                "lineGap": 14,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +56%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 224,
                "top": 988.5,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "世界其他",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "地区",
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
                "x": 898,
                "top": 496,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +53%",
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
                "x": 1368,
                "top": 350,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 88%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1363.5,
                "top": 1141,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1835,
                "top": 243,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 78%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 1832,
                "top": 994,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "运营",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2449.5,
                "top": 376,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 66%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2448.5,
                "top": 785,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2178.5,
                "top": 669,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2448.5,
                "top": 904,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 2448.5,
                "top": 1076,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
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
                "x": 2448.5,
                "top": 1238,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 2%",
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
          }
        }
      }
    }
  }
}
);
