(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "anthropic-h1-fy26",
  "name": "Anthropic · H1 FY26",
  "company": "Anthropic",
  "meta": {
    "company": "Anthropic",
    "title": "How ANTHROPIC Makes Money",
    "titleX": 1333.5,
    "titleY": 175.24365234375,
    "titleSize": 125.015625,
    "titleTextLength": 2070.5712890625,
    "titleWeight": 800,
    "period": "H1 FY26",
    "periodNote": "Ending June 2026",
    "periodX": 2489.89453125,
    "periodY": 278.6806640625,
    "periodNoteY": 330.7705078125,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/anthropic-h1-fy26.png",
      "width": 2667,
      "height": 1500
    }
  },
  "nodes": [
    {
      "id": "consumption",
      "label": "Consumption-based",
      "value": 13.1,
      "valueText": "$13.1B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+1,229% Y/Y"
      ]
    },
    {
      "id": "subscription",
      "label": "Subscription-based",
      "value": 3.2,
      "valueText": "$3.2B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+1,690% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 16.3,
      "valueText": "$16.3B",
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+1,300% Y/Y"
      ]
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -0.7,
      "valueText": "($0.7B)",
      "type": "cost",
      "col": 2,
      "order": 3,
      "notes": [
        "(4%) margin",
        "+179pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 17.0,
      "valueText": "($17.0B)",
      "type": "cost",
      "col": 3,
      "order": 4,
      "notes": []
    },
    {
      "id": "compute",
      "label": "Compute & infrastructure",
      "value": 8.9,
      "valueText": "($8.9B)",
      "type": "cost",
      "col": 4,
      "order": 5,
      "notes": [
        "55% of revenue",
        "(146pp) Y/Y"
      ]
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 3.2,
      "valueText": "($3.2B)",
      "type": "cost",
      "col": 4,
      "order": 6,
      "notes": [
        "19% of revenue",
        "(27pp) Y/Y"
      ]
    },
    {
      "id": "sales",
      "label": "Sales, marketing & partnerships",
      "value": 3.2,
      "valueText": "($3.2B)",
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": [
        "19% of revenue",
        "+9pp Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other operating & administrative",
      "value": 1.7,
      "valueText": "($1.7B)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": [
        "11% of revenue",
        "(16pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "consumption",
      "target": "revenue",
      "value": 13.1,
      "sourceWidth": 313.84130859375,
      "targetWidth": 313.84130859375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e1bcae"
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 3.2,
      "sourceWidth": 78.134765625,
      "targetWidth": 76.83251953125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e1bcae"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 16.3,
      "sourceWidth": 390.673828125,
      "targetWidth": 390.673828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.7,
      "sourceWidth": 15.626953125,
      "targetWidth": 16.92919921875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "compute",
      "value": 8.9,
      "sourceWidth": 214.87060546875,
      "targetWidth": 214.87060546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 3.2,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sales",
      "value": 3.2,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 1.7,
      "sourceWidth": 41.671875,
      "targetWidth": 40.36962890625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "gross_profit",
      "representation": "data-only"
    },
    {
      "id": "gross_stage_cost",
      "representation": "data-only"
    }
  ],
  "layout": {
    "scale": 23.961328124999998,
    "nodes": {
      "consumption": {
        "x": 390.673828125,
        "y": 442.763671875,
        "width": 72.92578125,
        "height": 313.84130859375
      },
      "subscription": {
        "x": 390.673828125,
        "y": 977.98681640625,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "revenue": {
        "x": 1013.1474609375,
        "y": 576.89501953125,
        "width": 72.92578125,
        "height": 390.673828125
      },
      "operating_loss": {
        "x": 1329.59326171875,
        "y": 1062.6328125,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "operating_expenses": {
        "x": 1636.92333984375,
        "y": 612.0556640625,
        "width": 72.92578125,
        "height": 407.60302734375
      },
      "compute": {
        "x": 2259.39697265625,
        "y": 343.79296875,
        "width": 72.92578125,
        "height": 214.87060546875
      },
      "personnel": {
        "x": 2259.39697265625,
        "y": 694.09716796875,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "sales": {
        "x": 2259.39697265625,
        "y": 897.24755859375,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "other": {
        "x": 2259.39697265625,
        "y": 1117.3271484375,
        "width": 72.92578125,
        "height": 40.36962890625
      }
    },
    "labels": {
      "consumption": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 351.6064453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#cc7b5d"
              }
            ]
          },
          {
            "x": 429.7412109375,
            "top": 399.6962890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+1,229% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 204.45263671875,
            "top": 535.55576171875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Consumption",
                "size": 52.08984375,
                "weight": 700,
                "color": "#cc7b5d"
              },
              {
                "text": "-based",
                "size": 52.08984375,
                "weight": 700,
                "color": "#cc7b5d"
              }
            ]
          },
          {
            "x": 204.45263671875,
            "top": 669.77587890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Token usage",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "across APIs & apps",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "80% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 885.52734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#cc7b5d"
              }
            ]
          },
          {
            "x": 429.7412109375,
            "top": 937.6171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+1,690% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 204.45263671875,
            "top": 953.244140625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Subscription",
                "size": 52.08984375,
                "weight": 700,
                "color": "#cc7b5d"
              },
              {
                "text": "-based",
                "size": 52.08984375,
                "weight": 700,
                "color": "#cc7b5d"
              }
            ]
          },
          {
            "x": 204.45263671875,
            "top": 1076.95751953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Fixed-fee Claude plans",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "20% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1048.30810546875,
            "top": 432.345703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#cc7b5d"
              }
            ]
          },
          {
            "x": 1048.30810546875,
            "top": 481.8310546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#cc7b5d"
              }
            ]
          },
          {
            "x": 1048.30810546875,
            "top": 533.9208984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+1,300% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1364.75390625,
            "top": 1099.095703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#a31900"
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 1364.75390625,
            "top": 1198.06640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 1364.75390625,
            "top": 1250.15625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "(4%) margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+179pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1673.38623046875,
            "top": 451.87939453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#a31900"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 1673.38623046875,
            "top": 550.85009765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#a31900"
              }
            ]
          }
        ]
      },
      "compute": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 358.11767578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Compute &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31900"
              },
              {
                "text": "infrastructure",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 441.46142578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 484.435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "55% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(146pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 690.1904296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Personnel",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 731.8623046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 774.83642578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "19% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(27pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "sales": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 893.3408203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales, marketing &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31900"
              },
              {
                "text": "partnerships",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 976.6845703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 1019.65869140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "19% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+9pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 1106.9091796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other operating &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31900"
              },
              {
                "text": "administrative",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 1190.2529296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31900"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 1233.22705078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "11% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(16pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      }
    }
  },
  "render": {
    "background": "#f2f2f2",
    "nodeWidth": 72.92578125,
    "nodeRadius": 0,
    "titleColor": "#155577",
    "subtitleColor": "#666666",
    "noteColor": "#737373",
    "labelYOffset": 0,
    "linkOpacity": 1,
    "palette": {
      "source": {
        "node": "#cc7b5d",
        "label": "#cc7b5d"
      },
      "hub": {
        "node": "#cc7b5d",
        "label": "#cc7b5d"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a31900"
      }
    },
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 28.6494140625,
      "lineGap": 10.41796875
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "rasterAnnotations": [
    {
      "key": "claude-logo-h1-fy26",
      "href": "data/assets/raster-annotations/anthropic/claude-logo-h1-fy26.png",
      "x": 939,
      "y": 219,
      "width": 216,
      "height": 210,
      "clearance": true
    }
  ],
  "annotationsSvg": "<g fill=\"#cc7b5d\"><rect x=\"57.298828125\" y=\"1156.39453125\" width=\"464.90185546875\" height=\"164.0830078125\" rx=\"41.671875\"/><rect x=\"535.22314453125\" y=\"1156.39453125\" width=\"330.7705078125\" height=\"164.0830078125\" rx=\"41.671875\"/></g><g fill=\"white\"><text x=\"289.0986328125\" y=\"1208.484375\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"700\" >Customers &gt;$100K TTM</text><text x=\"289.0986328125\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"400\" data-operating-metric=\"customers\">11,900+</text><text x=\"289.0986328125\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" >+1,153% Y/Y</text><text x=\"700.6083984375\" y=\"1208.484375\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"700\" >Net Revenue</text><text x=\"700.6083984375\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"700\" >Retention</text><text x=\"700.6083984375\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"400\" data-operating-metric=\"nrr\">900%</text></g><g fill=\"#737373\"><text x=\"472.71533203125\" y=\"1356.9404296875\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" >H1 FY26 Financials and latest customer metrics (September 2026)</text></g>",
  "operatingMetrics": [
    {
      "id": "customers",
      "value": "11900",
      "unit": "count",
      "currency": null,
      "comparison": "gte",
      "literal": "11,900+"
    },
    {
      "id": "nrr",
      "value": "900",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "900%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Anthropic · 2026 财年上半年",
      "meta": {
        "title": "Anthropic 如何赚钱",
        "period": "2026 财年上半年",
        "periodNote": "截至 2026 年 6 月",
        "titleTextLength": 1200
      },
      "nodes": {
        "consumption": {
          "label": [
            "按使用量",
            "付费"
          ],
          "notes": [
            "同比 +1,229%"
          ]
        },
        "subscription": {
          "label": [
            "订阅",
            "付费"
          ],
          "notes": [
            "同比 +1,690%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1,300%"
          ]
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (4%)",
            "同比 +179 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "compute": {
          "label": [
            "计算与",
            "基础设施"
          ],
          "notes": [
            "占收入 55%",
            "同比 (146 个百分点)"
          ]
        },
        "personnel": {
          "label": "人员",
          "notes": [
            "占收入 19%",
            "同比 (27 个百分点)"
          ]
        },
        "sales": {
          "label": [
            "销售、营销与",
            "合作伙伴"
          ],
          "notes": [
            "占收入 19%",
            "同比 +9 个百分点"
          ]
        },
        "other": {
          "label": [
            "其他营业与",
            "管理费用"
          ],
          "notes": [
            "占收入 11%",
            "同比 (16 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "consumption": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 351.6064453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#cc7b5d"
                  }
                ]
              },
              {
                "x": 429.7412109375,
                "top": 399.6962890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +1,229%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 204.45263671875,
                "top": 540.8557617187499,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "按使用量",
                    "size": 46.880859375,
                    "weight": 700,
                    "color": "#cc7b5d"
                  },
                  {
                    "text": "付费",
                    "size": 46.880859375,
                    "weight": 700,
                    "color": "#cc7b5d"
                  }
                ]
              },
              {
                "x": 204.45263671875,
                "top": 675.07587890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "API 与应用中的",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "Token 使用量",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "占收入 80%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 885.52734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#cc7b5d"
                  }
                ]
              },
              {
                "x": 429.7412109375,
                "top": 937.6171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +1,690%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 204.45263671875,
                "top": 958.244140625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 46.880859375,
                    "weight": 700,
                    "color": "#cc7b5d"
                  },
                  {
                    "text": "付费",
                    "size": 46.880859375,
                    "weight": 700,
                    "color": "#cc7b5d"
                  }
                ]
              },
              {
                "x": 204.45263671875,
                "top": 1076.95751953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "Claude 固定费用套餐",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "占收入 20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1048.30810546875,
                "top": 432.345703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#cc7b5d"
                  }
                ]
              },
              {
                "x": 1048.30810546875,
                "top": 481.8310546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#cc7b5d"
                  }
                ]
              },
              {
                "x": 1048.30810546875,
                "top": 533.9208984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +1,300%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1364.75390625,
                "top": 1099.095703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#a31900"
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 1364.75390625,
                "top": 1198.06640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 1364.75390625,
                "top": 1250.15625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利润率 (4%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +179 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1673.38623046875,
                "top": 451.87939453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#a31900"
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 1673.38623046875,
                "top": 550.85009765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#a31900"
                  }
                ]
              }
            ]
          },
          "compute": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 358.11767578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "计算与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31900"
                  },
                  {
                    "text": "基础设施",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 441.46142578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 484.435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "占收入 55%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (146 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 690.1904296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "人员",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 731.8623046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 774.83642578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "占收入 19%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (27 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "sales": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 893.3408203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售、营销与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31900"
                  },
                  {
                    "text": "合作伙伴",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 976.6845703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 1019.65869140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "占收入 19%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +9 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 1106.9091796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他营业与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31900"
                  },
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 1190.2529296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31900"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 1233.22705078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "占收入 11%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (16 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g fill=\"#cc7b5d\"><rect x=\"57.298828125\" y=\"1156.39453125\" width=\"464.90185546875\" height=\"164.0830078125\" rx=\"41.671875\"/><rect x=\"535.22314453125\" y=\"1156.39453125\" width=\"330.7705078125\" height=\"164.0830078125\" rx=\"41.671875\"/></g><g fill=\"white\"><text x=\"289.0986328125\" y=\"1208.484375\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"700\" >客户 TTM 收入 &gt;$100K</text><text x=\"289.0986328125\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"400\" data-operating-metric=\"customers\">11,900+</text><text x=\"289.0986328125\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" >同比 +1,153%</text><text x=\"700.6083984375\" y=\"1208.484375\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"700\" >净收入</text><text x=\"700.6083984375\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"700\" >留存率</text><text x=\"700.6083984375\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"400\" data-operating-metric=\"nrr\">900%</text></g><g fill=\"#737373\"><text x=\"472.71533203125\" y=\"1356.9404296875\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" >2026 财年上半年财务数据及最新客户指标（2026 年 9 月）</text></g>"
    }
  }
});})();
