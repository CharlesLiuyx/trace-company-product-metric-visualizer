(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "veeva-q1-fy25",
  "name": "Veeva Systems · Q1 FY25",
  "company": "Veeva Systems",
  "meta": {
    "company": "Veeva Systems",
    "title": "Veeva Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/veeva-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2109.638671875,
    "periodX": 2435.2001953125,
    "periodY": 269.56494140625,
    "periodNoteY": 312.5390625
  },
  "nodes": [
    {
      "id": "commercial",
      "label": [
        "Commercial",
        "solutions"
      ],
      "value": 261,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "rnd_solutions",
      "label": [
        "R&D",
        "solutions"
      ],
      "value": 273,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+56% Y/Y"
      ]
    },
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 534,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+29% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 116,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 650,
      "type": "hub",
      "col": 0,
      "order": 4,
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 476,
      "type": "profit",
      "col": 0,
      "order": 5,
      "notes": [
        "73% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 174,
      "type": "cost",
      "col": 0,
      "order": 6,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 155,
      "type": "profit",
      "col": 0,
      "order": 7,
      "notes": [
        "24% margin",
        "+12pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 321,
      "type": "cost",
      "col": 0,
      "order": 8,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 52,
      "type": "profit",
      "col": 0,
      "order": 9,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 162,
      "type": "profit",
      "col": 0,
      "order": 10,
      "notes": [
        "25% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 45,
      "type": "cost",
      "col": 0,
      "order": 11,
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 163,
      "type": "cost",
      "col": 0,
      "order": 12,
      "notes": [
        "25% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 97,
      "type": "cost",
      "col": 0,
      "order": 13,
      "notes": [
        "15% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 61,
      "type": "cost",
      "col": 0,
      "order": 14,
      "notes": [
        "9% of revenue",
        "(2pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "commercial",
      "target": "subscription",
      "value": 261,
      "width": 136.73583984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "rnd_solutions",
      "target": "subscription",
      "value": 273,
      "width": 143.2470703125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 534,
      "width": 279.98291015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 116,
      "width": 61.20556640625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 476,
      "width": 250.03125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 174,
      "width": 91.1572265625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 155,
      "width": 82.04150390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 321,
      "width": 167.98974609375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 110,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 58.60107421875,
      "targetWidth": 57.298828125
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 45,
      "width": 23.4404296875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 52,
      "width": 27.34716796875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 163,
      "width": 85.9482421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 97,
      "width": 50.78759765625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 61,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625
    }
  ],
  "layout": {
    "scale": 0.5248051757812501,
    "nodes": {
      "commercial": {
        "x": 376.34912109375,
        "y": 528.7119140625,
        "width": 72.92578125,
        "height": 136.73583984375
      },
      "rnd_solutions": {
        "x": 376.34912109375,
        "y": 877.7138671875,
        "width": 72.92578125,
        "height": 143.2470703125
      },
      "subscription": {
        "x": 750.09375,
        "y": 639.40283203125,
        "width": 72.92578125,
        "height": 281.28515625
      },
      "services": {
        "x": 746.18701171875,
        "y": 1136.86083984375,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "revenue": {
        "x": 1123.83837890625,
        "y": 717.53759765625,
        "width": 72.92578125,
        "height": 341.1884765625
      },
      "gross_profit": {
        "x": 1494.978515625,
        "y": 638.1005859375,
        "width": 72.92578125,
        "height": 250.03125
      },
      "cost_of_revenue": {
        "x": 1500.1875,
        "y": 1105.60693359375,
        "width": 72.92578125,
        "height": 91.1572265625
      },
      "operating_profit": {
        "x": 1868.72314453125,
        "y": 572.98828125,
        "width": 72.92578125,
        "height": 82.04150390625
      },
      "operating_expenses": {
        "x": 1871.32763671875,
        "y": 824.32177734375,
        "width": 72.92578125,
        "height": 167.98974609375
      },
      "other": {
        "x": 2109.638671875,
        "y": 593.82421875,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "net_profit": {
        "x": 2245.072265625,
        "y": 481.8310546875,
        "width": 72.92578125,
        "height": 84.64599609375
      },
      "tax": {
        "x": 2245.072265625,
        "y": 752.6982421875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "rnd": {
        "x": 2245.072265625,
        "y": 872.5048828125,
        "width": 72.92578125,
        "height": 85.9482421875
      },
      "sm": {
        "x": 2245.072265625,
        "y": 1065.2373046875,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "ga": {
        "x": 2245.072265625,
        "y": 1230.62255859375,
        "width": 72.92578125,
        "height": 32.55615234375
      }
    },
    "labels": {
      "commercial": {
        "blocks": [
          {
            "x": 414.1142578125,
            "top": 434.9501953125,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
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
          },
          {
            "x": 208.359375,
            "top": 523.5029296875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "solutions",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "rnd_solutions": {
        "blocks": [
          {
            "x": 414.1142578125,
            "top": 778.7431640625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+56% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 892.03857421875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "R&D",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "solutions",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 781.34765625,
            "top": 494.76025390625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+29% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 781.34765625,
            "top": 990.916015625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
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
            "x": 1158.9990234375,
            "top": 574.29052734375,
            "anchor": "middle",
            "lineGap": 13.0224609375,
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
                "text": "+24% Y/Y",
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
            "x": 1534.0458984375,
            "top": 454.48388671875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
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
                "text": "73% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1536.650390625,
            "top": 1217.60009765625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Cost of",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1907.79052734375,
            "top": 389.37158203125,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "24% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+12pp Y/Y",
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
            "x": 1907.79052734375,
            "top": 1011.84521484375,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2146.1015625,
            "top": 632.8916015625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 480.52880859375,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "25% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2435.2001953125,
            "top": 724.048828125,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 873.80712890625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "R&D",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "25% of revenue",
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
      "sm": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 1050.91259765625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "S&M",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "15% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 2435.2001953125,
            "top": 1229.3203125,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "G&A",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "9% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
  "rasterAnnotations": [
    {
      "key": "logo-q1-fy25",
      "href": "data/assets/raster-annotations/veeva/logo-q1-fy25.png",
      "x": 846.4599609375,
      "y": 279.98291015625,
      "width": 559.9658203125,
      "height": 135.43359375,
      "clearance": true
    },
    {
      "key": "crm-q1-fy25",
      "href": "data/assets/raster-annotations/veeva/crm-q1-fy25.png",
      "x": 71.62353515625,
      "y": 619.869140625,
      "width": 261.75146484375,
      "height": 46.880859375
    },
    {
      "key": "vault-q1-fy25",
      "href": "data/assets/raster-annotations/veeva/vault-q1-fy25.png",
      "x": 63.81005859375,
      "y": 989.70703125,
      "width": 278.6806640625,
      "height": 52.08984375
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#59595b",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#f89a21",
        "label": "#898b8d"
      },
      "hub": {
        "node": "#f89a21",
        "label": "#898b8d"
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
      "source": "#f4ca94",
      "hub": "#f4ca94",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1
  },
  "i18n": {
    "zh": {
      "name": "Veeva Systems · 2025 财年第一季度",
      "meta": {
        "title": "Veeva 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "titleTextLength": 1953.369140625
      },
      "nodes": {
        "commercial": {
          "label": [
            "商业化",
            "解决方案"
          ],
          "notes": [
            "同比 +9%"
          ]
        },
        "rnd_solutions": {
          "label": [
            "研发",
            "解决方案"
          ],
          "notes": [
            "同比 +56%"
          ]
        },
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +29%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +4%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +24%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 73%",
            "同比 +5 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 24%",
            "同比 +12 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 25%",
            "同比 (0 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比 (3 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 15%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "commercial": {
            "blocks": [
              {
                "x": 414.1142578125,
                "top": 434.9501953125,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
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
              },
              {
                "x": 208.359375,
                "top": 523.5029296875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "商业化",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "rnd_solutions": {
            "blocks": [
              {
                "x": 414.1142578125,
                "top": 778.7431640625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +56%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 892.03857421875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "研发",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 781.34765625,
                "top": 494.76025390625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +29%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 781.34765625,
                "top": 990.916015625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
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
                "x": 1158.9990234375,
                "top": 574.29052734375,
                "anchor": "middle",
                "lineGap": 13.0224609375,
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
                    "text": "同比 +24%",
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
                "x": 1534.0458984375,
                "top": 454.48388671875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
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
                    "text": "利润率 73%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1536.650390625,
                "top": 1217.60009765625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "收入",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1907.79052734375,
                "top": 389.37158203125,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 24%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +12 个百分点",
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
                "x": 1907.79052734375,
                "top": 1011.84521484375,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "运营",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2146.1015625,
                "top": 632.8916015625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 480.52880859375,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 25%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2435.2001953125,
                "top": 724.048828125,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 873.80712890625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
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
          "sm": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 1050.91259765625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 2435.2001953125,
                "top": 1229.3203125,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
