(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "ford-q2-fy24",
  "name": "Ford · Q2 FY24",
  "company": "Ford",
  "meta": {
    "company": "Ford",
    "title": "Ford Q2 FY24 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/ford-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199,
    "titleSize": 122,
    "titleWeight": 800
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "hub": {
        "node": "#00095b",
        "label": "#00095b"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51800"
      }
    }
  },
  "annotationsSvg": "<g><text x=\"225.28857421875\" y=\"635.49609375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\" font-weight=\"400\">Internal combustion</text><text x=\"225.28857421875\" y=\"910.27001953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\" font-weight=\"400\">Electric Vehicles</text><text x=\"225.28857421875\" y=\"1112.1181640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\" font-weight=\"400\">Commercial division</text><text x=\"429.7412109375\" y=\"1438.98193359375\" text-anchor=\"middle\" font-size=\"37.76513671875\" fill=\"#111111\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "id": "ford-company-logo",
      "src": "data/assets/raster-annotations/ford/q1-fy25/company-logo.png",
      "x": 787.85888671875,
      "y": 237.0087890625,
      "width": 533.9208984375,
      "height": 194.03466796875
    },
    {
      "id": "ford-blue",
      "src": "data/assets/raster-annotations/ford/q1-fy25/blue.png",
      "x": 85.9482421875,
      "y": 480.52880859375,
      "width": 274.77392578125,
      "height": 123.71337890625
    },
    {
      "id": "ford-model-e",
      "src": "data/assets/raster-annotations/ford/q1-fy25/model-e.png",
      "x": 82.04150390625,
      "y": 752.6982421875,
      "width": 274.77392578125,
      "height": 123.71337890625
    },
    {
      "id": "ford-pro",
      "src": "data/assets/raster-annotations/ford/q1-fy25/pro.png",
      "x": 79.43701171875,
      "y": 954.54638671875,
      "width": 274.77392578125,
      "height": 123.71337890625
    },
    {
      "id": "ford-credit",
      "src": "data/assets/raster-annotations/ford/q1-fy25/credit.png",
      "x": 76.83251953125,
      "y": 1153.7900390625,
      "width": 279.98291015625,
      "height": 126.31787109375
    }
  ],
  "layout": {
    "nodes": {
      "ford_blue": {
        "x": 449,
        "y": 435,
        "width": 72,
        "height": 236
      },
      "model_e": {
        "x": 449,
        "y": 820,
        "width": 72,
        "height": 8
      },
      "ford_pro": {
        "x": 449,
        "y": 967,
        "width": 72,
        "height": 106
      },
      "ford_credit": {
        "x": 449,
        "y": 1208,
        "width": 72,
        "height": 20
      },
      "segment_hub": {
        "x": 823,
        "y": 556,
        "width": 72,
        "height": 367
      },
      "revenue": {
        "x": 1194,
        "y": 640,
        "width": 72,
        "height": 296
      },
      "eliminations": {
        "x": 1196,
        "y": 1075,
        "width": 72,
        "height": 72
      },
      "gross_profit": {
        "x": 1568,
        "y": 550,
        "width": 72,
        "height": 46
      },
      "cost_of_sales": {
        "x": 1573,
        "y": 776,
        "width": 72,
        "height": 251
      },
      "operating_profit": {
        "x": 1945,
        "y": 474,
        "width": 72,
        "height": 12
      },
      "operating_expenses": {
        "x": 1947,
        "y": 673,
        "width": 72,
        "height": 34
      },
      "other": {
        "x": 2207,
        "y": 430,
        "width": 72,
        "height": 3
      },
      "net_profit": {
        "x": 2317,
        "y": 368,
        "width": 72,
        "height": 13
      },
      "tax": {
        "x": 2317,
        "y": 589,
        "width": 72,
        "height": 4
      },
      "sga": {
        "x": 2317,
        "y": 820,
        "width": 72,
        "height": 17
      },
      "ford_credit_expenses": {
        "x": 2317,
        "y": 1053,
        "width": 72,
        "height": 17
      }
    },
    "labels": {
      "segment_hub": {
        "blocks": []
      },
      "ford_blue": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 338.583984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "model_e": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 721.4443359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(37%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ford_pro": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 869.900390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
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
      "ford_credit": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 1112.1181640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
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
            "x": 1224.111328125,
            "top": 487.0400390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1230.62255859375,
            "top": 1161.603515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1603.06494140625,
            "top": 362.0244140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "15% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1605.66943359375,
            "top": 1040.49462890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1981,
            "top": 285.19189453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "4% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1976.8095703125,
            "top": 722.74658203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2243.77001953125,
            "top": 447.97265625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 315.1435546875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "4% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 2504.21923828125,
            "top": 558.66357421875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 799.5791015625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ford_credit_expenses": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 1005.333984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Ford Credit",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "ford_blue",
      "label": "Ford Blue",
      "type": "source",
      "col": 0,
      "order": 0,
      "value": 38,
      "notes": [
        "+8% Y/Y"
      ],
      "color": "#066fef",
      "labelColor": "#066fef",
      "linkTint": "#88b7f0"
    },
    {
      "id": "model_e",
      "label": "Ford Model e",
      "type": "source",
      "col": 0,
      "order": 1,
      "value": 1.3,
      "notes": [
        "(37%) Y/Y"
      ],
      "color": "#00095b",
      "labelColor": "#00095b",
      "linkTint": "#8589ae"
    },
    {
      "id": "ford_pro",
      "label": "Ford Pro",
      "type": "source",
      "col": 0,
      "order": 2,
      "value": 17,
      "notes": [
        "+9% Y/Y"
      ],
      "color": "#00142e",
      "labelColor": "#00142e",
      "linkTint": "#858e9a"
    },
    {
      "id": "ford_credit",
      "label": "Ford Credit",
      "type": "source",
      "col": 0,
      "order": 3,
      "value": 3,
      "notes": [
        "+19% Y/Y"
      ],
      "color": "#1700f3",
      "labelColor": "#1700f3",
      "linkTint": "#8f85f2"
    },
    {
      "id": "segment_hub",
      "label": "",
      "type": "hub",
      "col": 1,
      "order": 4,
      "value": 59.3,
      "color": "#00095b",
      "labelColor": "#00095b",
      "linkTint": "#8589ae"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "type": "hub",
      "col": 2,
      "order": 5,
      "value": 47.8,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#00095b",
      "labelColor": "#00095b",
      "linkTint": "#8589ae"
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "type": "cost",
      "col": 2,
      "order": 6,
      "value": -11.4,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e08585"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "type": "profit",
      "col": 3,
      "order": 7,
      "value": 7.3,
      "notes": [
        "15% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "type": "cost",
      "col": 3,
      "order": 8,
      "value": 40.5,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "type": "profit",
      "col": 4,
      "order": 9,
      "value": 1.9,
      "notes": [
        "4% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "Expenses"
      ],
      "type": "cost",
      "col": 4,
      "order": 10,
      "value": 5.4,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e08585"
    },
    {
      "id": "other",
      "label": "Other",
      "type": "profit",
      "col": 5,
      "order": 11,
      "value": 0.6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "type": "profit",
      "col": 6,
      "order": 12,
      "value": 1.8,
      "notes": [
        "4% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "label": "Tax",
      "type": "cost",
      "col": 6,
      "order": 13,
      "value": 0.6,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e08585"
    },
    {
      "id": "ford_credit_expenses",
      "label": [
        "Ford Credit",
        "expenses"
      ],
      "type": "cost",
      "col": 6,
      "order": 15,
      "value": 2.8,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e08585"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "type": "cost",
      "col": 6,
      "order": 16,
      "value": 2.7,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "ford_blue",
      "target": "segment_hub",
      "value": 38,
      "sourceWidth": 236,
      "targetWidth": 236,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "model_e",
      "target": "segment_hub",
      "value": 1.3,
      "sourceWidth": 8,
      "targetWidth": 8,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "ford_pro",
      "target": "segment_hub",
      "value": 17,
      "sourceWidth": 106,
      "targetWidth": 105,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "ford_credit",
      "target": "segment_hub",
      "value": 3,
      "sourceWidth": 20,
      "targetWidth": 18,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 47.8,
      "sourceWidth": 296,
      "targetWidth": 296,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_hub",
      "target": "eliminations",
      "value": 11.4,
      "sourceWidth": 71,
      "targetWidth": 72,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.3,
      "sourceWidth": 46,
      "targetWidth": 46,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 40.5,
      "sourceWidth": 250,
      "targetWidth": 251,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.9,
      "sourceWidth": 12,
      "targetWidth": 12,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.4,
      "sourceWidth": 34,
      "targetWidth": 34,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.3,
      "sourceWidth": 9,
      "targetWidth": 9,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 3,
      "targetWidth": 4,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.6,
      "sourceWidth": 3,
      "targetWidth": 4,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.7,
      "sourceWidth": 17,
      "targetWidth": 17,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ford_credit_expenses",
      "value": 2.8,
      "sourceWidth": 17,
      "targetWidth": 17,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "福特 · 2024 财年第二季度",
      "meta": {
        "title": "福特 2024 财年第二季度利润表",
        "titleSize": 110
      },
      "annotationsSvg": "<g><text x=\"225.28857421875\" y=\"635.49609375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\" font-weight=\"400\">内燃机业务</text><text x=\"225.28857421875\" y=\"910.27001953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\" font-weight=\"400\">电动汽车</text><text x=\"225.28857421875\" y=\"1112.1181640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\" font-weight=\"400\">商用车业务</text><text x=\"429.7412109375\" y=\"1438.98193359375\" text-anchor=\"middle\" font-size=\"37.76513671875\" fill=\"#111111\" font-weight=\"700\">来源：季度业绩</text></g>",
      "nodes": {
        "ford_blue": {
          "label": "Ford Blue 燃油车业务",
          "notes": [
            "同比 +8%"
          ]
        },
        "model_e": {
          "label": "Ford Model e 电动车业务",
          "notes": [
            "同比 (37%)"
          ]
        },
        "ford_pro": {
          "label": "Ford Pro 商用车业务",
          "notes": [
            "同比 +9%"
          ]
        },
        "ford_credit": {
          "label": "福特信贷",
          "notes": [
            "同比 +19%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "eliminations": {
          "label": "抵销项"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 15%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 4%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 (1 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "ford_credit_expenses": {
          "label": [
            "福特信贷",
            "费用"
          ]
        },
        "sga": {
          "label": "销售、一般及管理费用"
        }
      },
      "layout": {
        "labels": {
          "segment_hub": {
            "blocks": []
          },
          "ford_blue": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 338.583984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "model_e": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 721.4443359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (37%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ford_pro": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 869.900390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
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
          "ford_credit": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 1112.1181640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
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
                "x": 1224.111328125,
                "top": 487.0400390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1230.62255859375,
                "top": 1161.603515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "抵销项",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1603.06494140625,
                "top": 362.0244140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1605.66943359375,
                "top": 1040.49462890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1981,
                "top": 285.19189453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 4%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1976.8095703125,
                "top": 722.74658203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2243.77001953125,
                "top": 447.97265625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 315.1435546875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 2504.21923828125,
                "top": 558.66357421875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 781.34765625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售及管理费用",
                    "size": 25,
                    "weight": 800
                  },
                  {
                    "text": "SG&A",
                    "size": 25,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ford_credit_expenses": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 1005.333984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "福特信贷",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
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
