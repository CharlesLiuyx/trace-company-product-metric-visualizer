(function(){var d={
  "key": "wealthfront-q2-fy27",
  "name": "Wealthfront · Q2 FY27",
  "company": "Wealthfront",
  "meta": {
    "company": "Wealthfront",
    "title": "Wealthfront Q2 FY27 Income Statement",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processing/wealthfront-q2-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#4b3fb8",
        "label": "#4f40d0"
      },
      "hub": {
        "node": "#4b3fb8",
        "label": "#4f40d0"
      },
      "profit": {
        "node": "#289f29",
        "label": "#009556"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a01800"
      }
    },
    "linkTint": {
      "source": "#aaa3d6",
      "hub": "#aaa3d6",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 29,
      "value": 29,
      "note": 21,
      "lineGap": 7
    }
  },
  "nodes": [
    {
      "id": "cash_management",
      "label": "Cash Management",
      "value": 62,
      "valueText": "$62M",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(10%) Y/Y"
      ]
    },
    {
      "id": "investment_advisory",
      "label": "Investment Advisory",
      "value": 29,
      "valueText": "$29M",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+31% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 1,
      "valueText": "$1M",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+525% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 92,
      "valueText": "$92M",
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 81,
      "valueText": "$81M",
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "88% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 11,
      "valueText": "($11M)",
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 17,
      "valueText": "$17M",
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "18% margin",
        "(25pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 64,
      "valueText": "($64M)",
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 4,
      "valueText": "$4M",
      "type": "profit",
      "col": 3,
      "order": 2,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 18,
      "valueText": "$18M",
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "19% margin",
        "(19pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 3,
      "valueText": "($3M)",
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": []
    },
    {
      "id": "product_development",
      "label": "Product development",
      "value": 34,
      "valueText": "($34M)",
      "type": "cost",
      "col": 4,
      "order": 2,
      "notes": [
        "37% of revenue",
        "+14pp Y/Y"
      ]
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 16,
      "valueText": "($16M)",
      "type": "cost",
      "col": 4,
      "order": 3,
      "notes": [
        "17% of revenue",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 11,
      "valueText": "($11M)",
      "type": "cost",
      "col": 4,
      "order": 4,
      "notes": [
        "12% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operations",
      "label": "Operations",
      "value": 4,
      "valueText": "($4M)",
      "type": "cost",
      "col": 4,
      "order": 5,
      "notes": [
        "4% of revenue",
        "+1pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "cash_management",
      "target": "revenue",
      "value": 62,
      "sourceWidth": 225.28857421875,
      "targetWidth": 225.28857421875,
      "y0": 565.825927734375,
      "y1": 765.069580078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#aaa3d6"
    },
    {
      "source": "investment_advisory",
      "target": "revenue",
      "value": 29,
      "sourceWidth": 105.48193359375,
      "targetWidth": 105.48193359375,
      "y0": 884.876220703125,
      "y1": 930.454833984375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#aaa3d6"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125,
      "y0": 1109.513671875,
      "y1": 985.149169921875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#aaa3d6"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 81,
      "sourceWidth": 294.3076171875,
      "targetWidth": 294.3076171875,
      "y0": 799.5791015625,
      "y1": 665.44775390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 11,
      "sourceWidth": 40.36962890625,
      "targetWidth": 39.0673828125,
      "y0": 966.917724609375,
      "y1": 1056.12158203125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 17,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.20556640625,
      "y0": 548.896728515625,
      "y1": 453.832763671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 64,
      "sourceWidth": 233.10205078125,
      "targetWidth": 233.10205078125,
      "y0": 696.050537109375,
      "y1": 817.159423828125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 14,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "y0": 449.27490234375,
      "y1": 308.63232421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 3,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "y0": 479.877685546875,
      "y1": 565.825927734375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 4,
      "sourceWidth": 14.32470703125,
      "targetWidth": 13.0224609375,
      "y0": 413.463134765625,
      "y1": 341.1884765625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "product_development",
      "value": 34,
      "sourceWidth": 123.71337890625,
      "targetWidth": 123.71337890625,
      "y0": 762.465087890625,
      "y1": 778.092041015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 16,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "y0": 852.320068359375,
      "y1": 968.219970703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 11,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "y0": 899.85205078125,
      "y1": 1135.55859375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "operations",
      "value": 4,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "y0": 926.548095703125,
      "y1": 1295.083740234375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "cash_management": {
        "x": 444.06591796875,
        "y": 453.181640625,
        "width": 72.92578125,
        "height": 225.28857421875
      },
      "investment_advisory": {
        "x": 444.06591796875,
        "y": 832.13525390625,
        "width": 72.92578125,
        "height": 105.48193359375
      },
      "other_revenue": {
        "x": 444.06591796875,
        "y": 1106.9091796875,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "revenue": {
        "x": 910.27001953125,
        "y": 652.42529296875,
        "width": 72.92578125,
        "height": 334.67724609375
      },
      "gross_profit": {
        "x": 1377.7763671875,
        "y": 518.2939453125,
        "width": 72.92578125,
        "height": 294.3076171875
      },
      "cost_of_revenue": {
        "x": 1377.7763671875,
        "y": 1036.587890625,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "operating_profit": {
        "x": 1845.28271484375,
        "y": 423.22998046875,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "operating_expenses": {
        "x": 1845.28271484375,
        "y": 700.6083984375,
        "width": 72.92578125,
        "height": 233.10205078125
      },
      "other_income": {
        "x": 2172.146484375,
        "y": 406.30078125,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "net_profit": {
        "x": 2312.7890625,
        "y": 282.58740234375,
        "width": 72.92578125,
        "height": 65.1123046875
      },
      "tax": {
        "x": 2312.7890625,
        "y": 561.26806640625,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "product_development": {
        "x": 2312.7890625,
        "y": 716.2353515625,
        "width": 72.92578125,
        "height": 123.71337890625
      },
      "marketing": {
        "x": 2312.7890625,
        "y": 940.2216796875,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "ga": {
        "x": 2312.7890625,
        "y": 1116.02490234375,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "operations": {
        "x": 2312.7890625,
        "y": 1287.92138671875,
        "width": 72.92578125,
        "height": 14.32470703125
      }
    },
    "labels": {
      "cash_management": {
        "blocks": [
          {
            "x": 480.52880859375,
            "top": 356.8154296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(10%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "investment_advisory": {
        "blocks": [
          {
            "x": 480.52880859375,
            "top": 735.76904296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+31% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 480.52880859375,
            "top": 1009.24072265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+525% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 200.5458984375,
            "top": 1087.37548828125,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 946.73291015625,
            "top": 500.0625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "+1% Y/Y",
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
            "x": 1414.2392578125,
            "top": 330.7705078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "88% margin",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1881.74560546875,
            "top": 235.70654296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "18% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(25pp) Y/Y",
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
            "x": 1414.2392578125,
            "top": 1092.58447265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "revenue",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1881.74560546875,
            "top": 948.03515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
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
      "other_income": {
        "blocks": [
          {
            "x": 2208.609375,
            "top": 432.345703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2415.66650390625,
            "top": 260.44921875,
            "anchor": "start",
            "lineGap": 9.11572265625,
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
                "text": "19% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(19pp) Y/Y",
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
            "x": 2509.42822265625,
            "top": 524.80517578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "product_development": {
        "blocks": [
          {
            "x": 2514.63720703125,
            "top": 716.2353515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "37% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+14pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2514.63720703125,
            "top": 918.08349609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Marketing",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "17% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
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
            "x": 2514.63720703125,
            "top": 1080.8642578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operations": {
        "blocks": [
          {
            "x": 2514.63720703125,
            "top": 1241.04052734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operations",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "4% of revenue",
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
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect data-annotation-clearance=\"cash-management-card\" x=\"52\" y=\"361\" width=\"254\" height=\"160\" rx=\"14\" fill=\"#4b3fb8\"/><rect data-annotation-clearance=\"investment-advisory-card\" x=\"57\" y=\"600\" width=\"254\" height=\"160\" rx=\"14\" fill=\"#4b3fb8\"/><g fill=\"none\" stroke=\"#fff\" stroke-width=\"2.4\"><path d=\"M72 389L108 379L111 391M72 389H116V417H72ZM73 392L104 384M105 404h4\"/></g><path fill=\"#fff\" d=\"M87 621l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 621l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 621l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M78 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M87 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M114 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M78 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M87 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M114 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M78 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M87 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M114 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M87 657l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 657l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 657l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><g class=\"sankey-interactive-annotation\" data-node=\"cash_management\" fill=\"#ffffff\" font-size=\"29\" font-weight=\"800\"><text x=\"65\" y=\"463\">Cash</text><text x=\"65\" y=\"497\">Management</text></g><g class=\"sankey-interactive-annotation\" data-node=\"investment_advisory\" fill=\"#ffffff\" font-size=\"29\" font-weight=\"800\"><text x=\"70\" y=\"706\">Investment</text><text x=\"70\" y=\"740\">Advisory</text></g><rect x=\"67\" y=\"911\" width=\"292\" height=\"127\" rx=\"29\" fill=\"#4b3fb8\"/><text x=\"213.0\" y=\"950\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">Platform Assets</text><text data-operating-metric=\"platform_assets\" x=\"213.0\" y=\"982\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">$99.0B</text><text x=\"213.0\" y=\"1014\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">+12% Y/Y</text><rect x=\"364\" y=\"911\" width=\"256\" height=\"127\" rx=\"29\" fill=\"#4b3fb8\"/><text x=\"492.0\" y=\"950\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">Funded Clients</text><text data-operating-metric=\"funded_clients\" x=\"492.0\" y=\"982\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">1.5M</text><text x=\"492.0\" y=\"1014\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">+14% Y/Y</text><text x=\"189\" y=\"242\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#666\">Q2 FY27</text><text x=\"189\" y=\"275\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777\">Ending July 2026</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "wealthfront-logo",
      "href": "data/assets/raster-annotations/wealthfront/company-logo.png",
      "x": 820.4150390625,
      "y": 256.54248046875,
      "width": 220.07958984375,
      "height": 209.66162109375
    }
  ],
  "operatingMetrics": [
    {
      "id": "platform_assets",
      "value": "99.0",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$99.0B"
    },
    {
      "id": "funded_clients",
      "value": "1500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1.5M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Wealthfront · 2027 财年第二季度",
      "meta": {
        "title": "Wealthfront 2027 财年第二季度利润表",
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "titleSize": 114.59765625
      },
      "nodes": {
        "cash_management": {
          "label": "现金管理",
          "notes": [
            "同比 (10%)"
          ]
        },
        "investment_advisory": {
          "label": "投资顾问",
          "notes": [
            "同比 +31%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +525%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 88%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "营业利润率 18%",
            "同比 (25 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "净利率 19%",
            "同比 (19 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "product_development": {
          "label": "产品开发",
          "notes": [
            "占收入 37%",
            "同比 +14 个百分点"
          ]
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 17%",
            "同比 +7 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政费用",
          "notes": [
            "占收入 12%",
            "同比 +2 个百分点"
          ]
        },
        "operations": {
          "label": "运营",
          "notes": [
            "占收入 4%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "cash_management": {
            "blocks": [
              {
                "x": 480.52880859375,
                "top": 356.8154296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (10%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "investment_advisory": {
            "blocks": [
              {
                "x": 480.52880859375,
                "top": 735.76904296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +31%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 480.52880859375,
                "top": 1009.24072265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +525%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 200.5458984375,
                "top": 1087.37548828125,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 946.73291015625,
                "top": 500.0625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "同比 +1%",
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
                "x": 1414.2392578125,
                "top": 330.7705078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "毛利率 88%",
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1881.74560546875,
                "top": 235.70654296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "营业利润率 18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (25 个百分点)",
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
                "x": 1414.2392578125,
                "top": 1092.58447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "成本",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1881.74560546875,
                "top": 948.03515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
          "other_income": {
            "blocks": [
              {
                "x": 2208.609375,
                "top": 432.345703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 2415.66650390625,
                "top": 260.44921875,
                "anchor": "start",
                "lineGap": 9.11572265625,
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
                    "text": "净利率 19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (19 个百分点)",
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
                "x": 2509.42822265625,
                "top": 524.80517578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "product_development": {
            "blocks": [
              {
                "x": 2514.63720703125,
                "top": 716.2353515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 37%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +14 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2514.63720703125,
                "top": 918.08349609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营销",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
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
                "x": 2514.63720703125,
                "top": 1080.8642578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及行政费用",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operations": {
            "blocks": [
              {
                "x": 2514.63720703125,
                "top": 1241.04052734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 4%",
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
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect data-annotation-clearance=\"cash-management-card\" x=\"52\" y=\"361\" width=\"254\" height=\"160\" rx=\"14\" fill=\"#4b3fb8\"/><rect data-annotation-clearance=\"investment-advisory-card\" x=\"57\" y=\"600\" width=\"254\" height=\"160\" rx=\"14\" fill=\"#4b3fb8\"/><g fill=\"none\" stroke=\"#fff\" stroke-width=\"2.4\"><path d=\"M72 389L108 379L111 391M72 389H116V417H72ZM73 392L104 384M105 404h4\"/></g><path fill=\"#fff\" d=\"M87 621l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 621l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 621l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M78 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M87 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M114 630l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M78 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M87 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M114 639l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M78 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M87 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M114 648l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M87 657l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M96 657l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><path fill=\"#fff\" d=\"M105 657l2.3 2.3-2.3 2.3-2.3-2.3Z\"/><g class=\"sankey-interactive-annotation\" data-node=\"cash_management\" fill=\"#ffffff\" font-size=\"29\" font-weight=\"800\"><text x=\"65\" y=\"463\">现金管理</text><text x=\"65\" y=\"497\"></text></g><g class=\"sankey-interactive-annotation\" data-node=\"investment_advisory\" fill=\"#ffffff\" font-size=\"29\" font-weight=\"800\"><text x=\"70\" y=\"706\">投资顾问</text><text x=\"70\" y=\"740\"></text></g><rect x=\"67\" y=\"911\" width=\"292\" height=\"127\" rx=\"29\" fill=\"#4b3fb8\"/><text x=\"213.0\" y=\"950\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">平台资产</text><text data-operating-metric=\"platform_assets\" x=\"213.0\" y=\"982\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">$99.0B</text><text x=\"213.0\" y=\"1014\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">同比 +12%</text><rect x=\"364\" y=\"911\" width=\"256\" height=\"127\" rx=\"29\" fill=\"#4b3fb8\"/><text x=\"492.0\" y=\"950\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">入金客户数</text><text data-operating-metric=\"funded_clients\" x=\"492.0\" y=\"982\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">1.5M</text><text x=\"492.0\" y=\"1014\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">同比 +14%</text><text x=\"189\" y=\"242\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#666\">2027 财年第二季度</text><text x=\"189\" y=\"275\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777\">截至 2026 年 7 月</text></g></g>"
    }
  }
};window.DATASETS=window.DATASETS||[];window.DATASETS.push(d);})();
