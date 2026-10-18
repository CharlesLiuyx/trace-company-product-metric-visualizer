window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spotify-q3-fy24",
  "name": "Spotify · Q3 FY24",
  "company": "Spotify",
  "meta": {
    "company": "Spotify",
    "title": "Spotify Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/spotify-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 199.21875,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2167.96875,
    "periodX": -3000,
    "periodY": -3000,
    "logoWidth": 242.2177734375,
    "logoHeight": 242.2177734375,
    "logoY": 240.91552734375,
    "logoViewBox": "0 0 231 231",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"231\" height=\"231\" rx=\"52\" fill=\"#0a0a0a\"/>\n    <circle cx=\"115.5\" cy=\"115.5\" r=\"90\" fill=\"#1ed760\"/>\n    \n    <path d=\"M 59.7 120.2 Q 115.5 89.6 171.3 120.2\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"12.15\" stroke-linecap=\"round\"/>\n    <path d=\"M 70.5 137.3 Q 115.5 110.3 160.5 137.3\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"10.35\" stroke-linecap=\"round\"/>\n    <path d=\"M 82.2 152.6 Q 115.5 131.9 148.8 152.6\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"8.55\" stroke-linecap=\"round\"/>",
    "hidePeriodStamp": true,
    "logoX": 759.20947265625
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
      "label": "Spotify Premium",
      "value": 3516,
      "valueText": "€3,516M",
      "notes": [
        "+21% Y/Y",
        "34% gross margin",
        "+4pp Y/Y",
        "Operator-directed source correction dated 2026-10-15: Premium = Revenue €3,988M − Advertising €472M = €3,516M. Original image displays €3,316M."
      ],
      "col": 0,
      "order": 0,
      "type": "source"
    },
    {
      "id": "advertising",
      "label": "Spotify Advertising",
      "value": 472,
      "valueText": "€472M",
      "notes": [
        "+6% Y/Y",
        "13% gross margin",
        "+5pp Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3988,
      "valueText": "€3,988M",
      "notes": [
        "+19% Y/Y"
      ],
      "col": 1,
      "order": 2,
      "type": "hub"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1240,
      "valueText": "€1,240M",
      "notes": [
        "31% margin",
        "+5pp Y/Y"
      ],
      "col": 2,
      "order": 3,
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 2748,
      "valueText": "(€2,748M)",
      "notes": [],
      "col": 2,
      "order": 4,
      "type": "cost"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 454,
      "valueText": "€454M",
      "notes": [
        "11% margin",
        "+10pp Y/Y"
      ],
      "col": 3,
      "order": 5,
      "type": "profit"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 786,
      "valueText": "(€786M)",
      "notes": [],
      "col": 3,
      "order": 6,
      "type": "cost"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 300,
      "valueText": "€300M",
      "notes": [
        "8% margin",
        "+6pp Y/Y"
      ],
      "col": 4,
      "order": 7,
      "type": "profit"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 98,
      "valueText": "($98M)",
      "notes": [],
      "col": 4,
      "order": 8,
      "type": "cost"
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 56,
      "valueText": "($56M)",
      "notes": [],
      "col": 4,
      "order": 9,
      "type": "cost"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 342,
      "valueText": "(€342M)",
      "notes": [
        "9% of revenue",
        "(2pp) Y/Y"
      ],
      "col": 4,
      "order": 10,
      "type": "cost"
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 332,
      "valueText": "(€332M)",
      "notes": [
        "8% of revenue",
        "(2pp) Y/Y"
      ],
      "col": 4,
      "order": 11,
      "type": "cost"
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 112,
      "valueText": "(€112M)",
      "notes": [
        "3% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 4,
      "order": 12,
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "premium",
      "target": "revenue",
      "value": 3516,
      "sourceWidth": 338.583984375,
      "targetWidth": 338.583984375,
      "y0": 684.9814453125,
      "y1": 838.646484375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 472,
      "sourceWidth": 45.57861328125,
      "targetWidth": 45.57861328125,
      "y0": 1119.280517578125,
      "y1": 1030.727783203125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1240,
      "sourceWidth": 119.806640625,
      "targetWidth": 119.806640625,
      "y0": 729.2578125,
      "y1": 571.68603515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2748,
      "sourceWidth": 264.35595703125,
      "targetWidth": 264.35595703125,
      "y0": 921.339111328125,
      "y1": 1008.589599609375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 454,
      "sourceWidth": 44.2763671875,
      "targetWidth": 44.2763671875,
      "y0": 533.9208984375,
      "y1": 437.5546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 786,
      "sourceWidth": 75.5302734375,
      "targetWidth": 74.22802734375,
      "y0": 593.82421875,
      "y1": 719.490966796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 300,
      "sourceWidth": 29.257510898437502,
      "targetWidth": 28.6494140625,
      "y0": 430.0452593554687,
      "y1": 338.583984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 98,
      "sourceWidth": 9.557453646972656,
      "targetWidth": 9.11572265625,
      "y0": 449.45274162817384,
      "y1": 573.639404296875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 56,
      "sourceWidth": 5.461402642089843,
      "targetWidth": 5.208984375,
      "y0": 456.96216977270507,
      "y1": 694.09716796875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 342,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "y0": 698.655029296875,
      "y1": 853.622314453125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 332,
      "sourceWidth": 31.25390625,
      "targetWidth": 32.55615234375,
      "y0": 730.56005859375,
      "y1": 1030.727783203125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 112,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "y0": 751.39599609375,
      "y1": 1217.60009765625,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "premium": {
        "x": 386.76708984375,
        "y": 515.689453125,
        "width": 72.92578125,
        "height": 338.583984375
      },
      "advertising": {
        "x": 386.76708984375,
        "y": 1096.4912109375,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "revenue": {
        "x": 854.2734375,
        "y": 669.3544921875,
        "width": 72.92578125,
        "height": 384.16259765625
      },
      "gross_profit": {
        "x": 1321.77978515625,
        "y": 511.78271484375,
        "width": 72.92578125,
        "height": 119.806640625
      },
      "cost_of_revenue": {
        "x": 1321.77978515625,
        "y": 876.41162109375,
        "width": 72.92578125,
        "height": 264.35595703125
      },
      "operating_profit": {
        "x": 1795.79736328125,
        "y": 415.41650390625,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "operating_expenses": {
        "x": 1785.37939453125,
        "y": 682.376953125,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "net_profit": {
        "x": 2255.490234375,
        "y": 324.25927734375,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "tax": {
        "x": 2255.490234375,
        "y": 569.08154296875,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "interest": {
        "x": 2255.490234375,
        "y": 691.49267578125,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "rnd": {
        "x": 2255.490234375,
        "y": 837.34423828125,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "sm": {
        "x": 2255.490234375,
        "y": 1014.44970703125,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "ga": {
        "x": 2255.490234375,
        "y": 1212.39111328125,
        "width": 72.92578125,
        "height": 10.41796875
      }
    },
    "labels": {
      "premium": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 416.71875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0a0a0a"
              },
              {
                "text": "+21% Y/Y",
                "size": 27.34716796875,
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
            "x": 423.22998046875,
            "top": 996.21826171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0a0a0a"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
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
            "x": 889.43408203125,
            "top": 514.38720703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#0a0a0a"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0a0a0a"
              },
              {
                "text": "+19% Y/Y",
                "size": 27.34716796875,
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
            "x": 1356.9404296875,
            "top": 325.5615234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "31% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1356.9404296875,
            "top": 1151.185546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "x": 1832.26025390625,
            "top": 229.1953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "11% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+10pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1821.84228515625,
            "top": 770.9296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 289.0986328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "8% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 523.5029296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 653.7275390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Interest",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2466.4541015625,
            "top": 809.9970703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "9% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2476.8720703125,
            "top": 983.19580078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2466.4541015625,
            "top": 1172.021484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "3% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "preservedAnnotationText": [
      "Premium",
      "Advertising",
      "MAU"
    ],
    "zh": {
      "name": "Spotify · 2024 财年第三季度",
      "meta": {
        "title": "Spotify 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "",
        "titleTextLength": 1888.0208333333333
      },
      "nodes": {
        "premium": {
          "label": "Spotify Premium",
          "notes": [
            "同比 +21%",
            "毛利率 34%",
            "同比 +4 个百分点",
            "按操作员 2026-10-15 来源更正：Premium 为 €3,516M，原图显示 €3,316M。"
          ]
        },
        "advertising": {
          "label": "Spotify Advertising",
          "notes": [
            "同比 +6%",
            "毛利率 13%",
            "同比 +5 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +19%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 31%",
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
            "利润率 11%",
            "同比 +10 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 8%",
            "同比 +6 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 9%",
            "同比 (2 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场营销",
          "notes": [
            "占收入 8%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 3%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "premium": {
            "blocks": [
              {
                "x": 423.22998046875,
                "top": 416.71875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#0a0a0a"
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27.34716796875,
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
                "x": 423.22998046875,
                "top": 996.21826171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#0a0a0a"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
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
                "x": 889.43408203125,
                "top": 514.38720703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#0a0a0a"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#0a0a0a"
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.34716796875,
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
                "x": 1356.9404296875,
                "top": 325.5615234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 31%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34716796875,
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
                "x": 1356.9404296875,
                "top": 1151.185546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "x": 1832.26025390625,
                "top": 229.1953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +10 个百分点",
                    "size": 27.34716796875,
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
                "x": 1821.84228515625,
                "top": 770.9296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 289.0986328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 523.5029296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 653.7275390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2466.4541015625,
                "top": 809.9970703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2476.8720703125,
                "top": 983.19580078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与市场营销",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2466.4541015625,
                "top": 1172.021484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\" font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\"><circle cx=\"74\" cy=\"535\" r=\"35\" fill=\"#0a0a0a\"/><path d=\"M 53 530.1 Q 74 520.3 95 530.8 M 56.5 539.2 Q 74 530.8 91.5 539.9 M 60 547.6 Q 74 539.2 88 547.95\" fill=\"none\" stroke=\"#1ed760\" stroke-width=\"4.9\" stroke-linecap=\"round\"/><text x=\"118\" y=\"533\" text-anchor=\"start\" font-size=\"35\" font-weight=\"800\" fill=\"#0a0a0a\" >Spotify</text><text x=\"118\" y=\"566\" text-anchor=\"start\" font-size=\"35\" font-weight=\"800\" fill=\"#0a0a0a\" >Premium</text></g><text x=\"160\" y=\"598\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\" >毛利率 34%</text><text x=\"160\" y=\"626\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\" >同比 +4 个百分点</text><g data-typography-role=\"brand\"><circle cx=\"39\" cy=\"799\" r=\"20\" fill=\"#0a0a0a\"/><path d=\"M 27 796.2 Q 39 790.6 51 796.6 M 29 801.4 Q 39 796.6 49 801.8 M 31 806.2 Q 39 801.4 47 806.4\" fill=\"none\" stroke=\"#1ed760\" stroke-width=\"2.8000000000000003\" stroke-linecap=\"round\"/><text x=\"64\" y=\"809\" text-anchor=\"start\" font-size=\"25\" font-weight=\"800\" fill=\"#0a0a0a\" >Spotify</text><text x=\"146\" y=\"809\" text-anchor=\"start\" font-size=\"25\" font-weight=\"400\" fill=\"#0a0a0a\"  textLength=\"126\" lengthAdjust=\"spacingAndGlyphs\">Advertising</text></g><text x=\"160\" y=\"838\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\" >毛利率 13%</text><text x=\"160\" y=\"866\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\" >同比 +5 个百分点</text><g><rect x=\"23\" y=\"893\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\" >MAU</text><text x=\"103.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"mau\">640M</text><text x=\"103.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >同比 +11%</text></g><g><rect x=\"194\" y=\"893\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\" >付费订阅</text><text x=\"321.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"premium_subscribers\">252M</text><text x=\"321.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >同比 +12%</text></g><g><rect x=\"459\" y=\"893\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\" >广告支持订阅</text><text x=\"604.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_subs\">402M</text><text x=\"604.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >同比 +11%</text></g><text x=\"231\" y=\"1044\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#818181\" >MAU = 月活跃用户</text><text x=\"1120\" y=\"1080\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"400\" fill=\"#818181\" >Premium 已按操作员更正为 €3,516M；原图为 €3,316M。</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "640000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "640M"
    },
    {
      "id": "premium_subscribers",
      "value": "252000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "252M"
    },
    {
      "id": "ad_supported_subs",
      "value": "402000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "402M"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\" font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\"><circle cx=\"74\" cy=\"535\" r=\"35\" fill=\"#0a0a0a\"/><path d=\"M 53 530.1 Q 74 520.3 95 530.8 M 56.5 539.2 Q 74 530.8 91.5 539.9 M 60 547.6 Q 74 539.2 88 547.95\" fill=\"none\" stroke=\"#1ed760\" stroke-width=\"4.9\" stroke-linecap=\"round\"/><text x=\"118\" y=\"533\" text-anchor=\"start\" font-size=\"35\" font-weight=\"800\" fill=\"#0a0a0a\" >Spotify</text><text x=\"118\" y=\"566\" text-anchor=\"start\" font-size=\"35\" font-weight=\"800\" fill=\"#0a0a0a\" >Premium</text></g><text x=\"160\" y=\"598\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\" >34% gross margin</text><text x=\"160\" y=\"626\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\" >+4pp Y/Y</text><g data-typography-role=\"brand\"><circle cx=\"39\" cy=\"799\" r=\"20\" fill=\"#0a0a0a\"/><path d=\"M 27 796.2 Q 39 790.6 51 796.6 M 29 801.4 Q 39 796.6 49 801.8 M 31 806.2 Q 39 801.4 47 806.4\" fill=\"none\" stroke=\"#1ed760\" stroke-width=\"2.8000000000000003\" stroke-linecap=\"round\"/><text x=\"64\" y=\"809\" text-anchor=\"start\" font-size=\"25\" font-weight=\"800\" fill=\"#0a0a0a\" >Spotify</text><text x=\"146\" y=\"809\" text-anchor=\"start\" font-size=\"25\" font-weight=\"400\" fill=\"#0a0a0a\"  textLength=\"126\" lengthAdjust=\"spacingAndGlyphs\">Advertising</text></g><text x=\"160\" y=\"838\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\" >13% gross margin</text><text x=\"160\" y=\"866\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\" >+5pp Y/Y</text><g><rect x=\"23\" y=\"893\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\" >MAU</text><text x=\"103.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"mau\">640M</text><text x=\"103.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >+11% Y/Y</text></g><g><rect x=\"194\" y=\"893\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\" >Premium Subs</text><text x=\"321.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"premium_subscribers\">252M</text><text x=\"321.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >+12% Y/Y</text></g><g><rect x=\"459\" y=\"893\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\" >Ad-supported Subs</text><text x=\"604.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_subs\">402M</text><text x=\"604.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >+11% Y/Y</text></g><text x=\"231\" y=\"1044\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#818181\" >MAU = Monthly Active Users</text><text x=\"1120\" y=\"1080\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"400\" fill=\"#818181\" >Premium corrected by operator to €3,516M; source displays €3,316M.</text></g>"
});
