window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "alibaba-q1-fy27",
  "name": "Alibaba · Q1 FY27",
  "company": "Alibaba",
  "meta": {
    "company": "Alibaba",
    "title": "Alibaba Q1 FY27 Income Statement",
    "period": "Q1 FY27",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/alibaba-q1-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199,
    "titleSize": 125,
    "titleWeight": 800,
    "periodX": 2469.05859375,
    "periodY": 302.12109375,
    "periodNoteY": 343.79296875
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155479",
    "subtitleColor": "#606060",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#ff5a00",
        "label": "#ff5a00"
      },
      "hub": {
        "node": "#ff5a00",
        "label": "#ff5a00"
      },
      "profit": {
        "node": "#279d27",
        "label": "#009653"
      },
      "cost": {
        "node": "#d00000",
        "label": "#a21700"
      }
    },
    "linkTint": {
      "source": "#f9af86",
      "profit": "#99ce97",
      "cost": "#df8686"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 39,
      "note": 26,
      "lineGap": 9
    },
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "gross_revenue:left",
        "gross_revenue:right",
        "revenue:left",
        "revenue:right",
        "gross_profit:left",
        "gross_profit:right",
        "operating_profit:left",
        "operating_profit:right",
        "operating_expenses:left",
        "operating_expenses:right",
        "net_profit:left"
      ]
    }
  },
  "nodes": [
    {
      "id": "china_ecommerce",
      "label": "China E-commerce",
      "value": 16.3,
      "valueText": "$16.3B",
      "type": "source",
      "col": 0,
      "notes": [
        "(8%) Y/Y"
      ]
    },
    {
      "id": "china_quick_commerce",
      "label": "China Quick Commerce",
      "value": 7.9,
      "valueText": "$7.9B",
      "type": "source",
      "col": 0,
      "notes": [
        "+45% Y/Y"
      ]
    },
    {
      "id": "international_commerce",
      "label": "International Commerce",
      "value": 6.1,
      "valueText": "$6.1B",
      "type": "source",
      "col": 0,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "cloud",
      "label": "Cloud",
      "value": 7.1,
      "valueText": "$7.1B",
      "type": "source",
      "col": 0,
      "notes": [
        "+45% Y/Y",
        "12% adjusted margin"
      ]
    },
    {
      "id": "ai_apps_others",
      "label": "AI Apps & Others",
      "value": 4.9,
      "valueText": "$4.9B",
      "type": "source",
      "col": 0,
      "notes": [
        "+3% Y/Y",
        "(53%) adjusted margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 39.6,
      "valueText": "$39.6B",
      "type": "hub",
      "col": 0,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "intersegment_eliminations",
      "label": "Inter-segment Eliminations",
      "value": -2.7,
      "valueText": "($2.7B)",
      "type": "cost",
      "col": 0,
      "notes": []
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 15.2,
      "valueText": "$15.2B",
      "type": "profit",
      "col": 0,
      "notes": [
        "38% margin",
        "(7pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 24.5,
      "valueText": "($24.5B)",
      "type": "cost",
      "col": 0,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 2.2,
      "valueText": "$2.2B",
      "type": "profit",
      "col": 0,
      "notes": [
        "6% margin",
        "(8pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 13.0,
      "valueText": "($13.0B)",
      "type": "cost",
      "col": 0,
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 1.2,
      "valueText": "$1.2B",
      "type": "profit",
      "col": 0,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1.5,
      "valueText": "$1.5B",
      "type": "profit",
      "col": 0,
      "notes": [
        "4% margin",
        "(13pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.9,
      "valueText": "($1.9B)",
      "type": "cost",
      "col": 0,
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 7.0,
      "valueText": "($7.0B)",
      "type": "cost",
      "col": 0,
      "notes": [
        "18% of revenue"
      ]
    },
    {
      "id": "product_development",
      "label": "Product development",
      "value": 3.3,
      "valueText": "($3.3B)",
      "type": "cost",
      "col": 0,
      "notes": [
        "8% of revenue"
      ]
    },
    {
      "id": "ga",
      "label": "General & Administrative",
      "value": 1.9,
      "valueText": "($1.9B)",
      "type": "cost",
      "col": 0,
      "notes": [
        "5% of revenue"
      ]
    },
    {
      "id": "amortization_impairment",
      "label": "Amortization & impairment",
      "value": 0.8,
      "valueText": "($0.8B)",
      "type": "cost",
      "col": 0,
      "notes": [
        "2% of revenue"
      ]
    },
    {
      "id": "gross_revenue",
      "label": "",
      "value": 42.3,
      "type": "source",
      "col": 1
    }
  ],
  "links": [
    {
      "source": "china_ecommerce",
      "target": "gross_revenue",
      "value": 16.3,
      "sourceWidth": 126.31787109375,
      "targetWidth": 126.31787109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "china_quick_commerce",
      "target": "gross_revenue",
      "value": 7.9,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.20556640625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international_commerce",
      "target": "gross_revenue",
      "value": 6.1,
      "sourceWidth": 48.18310546875,
      "targetWidth": 48.18310546875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "cloud",
      "target": "gross_revenue",
      "value": 7.1,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "ai_apps_others",
      "target": "gross_revenue",
      "value": 4.9,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 39.6,
      "sourceWidth": 307.330078125,
      "targetWidth": 306.02783203125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "intersegment_eliminations",
      "value": 2.7,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 15.2,
      "sourceWidth": 117.2021484375,
      "targetWidth": 117.2021484375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 24.5,
      "sourceWidth": 188.82568359375,
      "targetWidth": 188.82568359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.2,
      "sourceWidth": 16.92919921875,
      "targetWidth": 18.2314453125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 13,
      "sourceWidth": 100.27294921875,
      "targetWidth": 100.27294921875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.9,
      "sourceWidth": 15.626953125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 1.2,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 7.0,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "product_development",
      "value": 3.3,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 1.9,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization_impairment",
      "value": 0.8,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "china_ecommerce": {
        "x": 451.879,
        "y": 421.928,
        "width": 70.321,
        "height": 126.318
      },
      "china_quick_commerce": {
        "x": 451.879,
        "y": 674.563,
        "width": 70.321,
        "height": 61.206
      },
      "international_commerce": {
        "x": 451.879,
        "y": 867.296,
        "width": 70.321,
        "height": 48.183
      },
      "cloud": {
        "x": 451.879,
        "y": 1061.331,
        "width": 70.321,
        "height": 54.694
      },
      "ai_apps_others": {
        "x": 451.879,
        "y": 1252.761,
        "width": 70.321,
        "height": 37.765
      },
      "gross_revenue": {
        "x": 811.299,
        "y": 679.772,
        "width": 70.321,
        "height": 328.166
      },
      "revenue": {
        "x": 1169.417,
        "y": 739.676,
        "width": 70.321,
        "height": 306.028
      },
      "intersegment_eliminations": {
        "x": 1169.417,
        "y": 1136.861,
        "width": 70.321,
        "height": 20.836
      },
      "gross_profit": {
        "x": 1528.837,
        "y": 627.683,
        "width": 70.321,
        "height": 117.202
      },
      "cost_of_revenue": {
        "x": 1528.837,
        "y": 932.408,
        "width": 70.321,
        "height": 188.826
      },
      "operating_profit": {
        "x": 1886.955,
        "y": 545.641,
        "width": 70.321,
        "height": 18.231
      },
      "operating_expenses": {
        "x": 1886.955,
        "y": 735.769,
        "width": 70.321,
        "height": 100.273
      },
      "other_income": {
        "x": 2139.59,
        "y": 507.876,
        "width": 70.321,
        "height": 9.116
      },
      "net_profit": {
        "x": 2246.375,
        "y": 455.786,
        "width": 70.321,
        "height": 11.72
      },
      "tax": {
        "x": 2246.375,
        "y": 640.705,
        "width": 70.321,
        "height": 14.325
      },
      "sm": {
        "x": 2246.375,
        "y": 778.743,
        "width": 70.321,
        "height": 54.694
      },
      "product_development": {
        "x": 2246.375,
        "y": 964.964,
        "width": 70.321,
        "height": 26.045
      },
      "ga": {
        "x": 2246.375,
        "y": 1123.838,
        "width": 70.321,
        "height": 14.325
      },
      "amortization_impairment": {
        "x": 2246.375,
        "y": 1280.108,
        "width": 70.321,
        "height": 5.209
      }
    },
    "labels": {
      "china_ecommerce": {
        "blocks": [
          {
            "x": 487.0400390625,
            "top": 325.5615234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 424.5322265625,
            "top": 440.1591796875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "China",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "E-commerce",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "china_quick_commerce": {
        "blocks": [
          {
            "x": 487.0400390625,
            "top": 580.8017578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+45% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 424.5322265625,
            "top": 653.7275390625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "China Quick",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Commerce",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "international_commerce": {
        "blocks": [
          {
            "x": 487.0400390625,
            "top": 773.5341796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 424.5322265625,
            "top": 842.55322265625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "International",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Commerce",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "cloud": {
        "blocks": [
          {
            "x": 487.0400390625,
            "top": 968.87109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+45% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 424.5322265625,
            "top": 1060.0283203125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cloud",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "12% adjusted margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ai_apps_others": {
        "blocks": [
          {
            "x": 487.0400390625,
            "top": 1160.30126953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 424.5322265625,
            "top": 1204.57763671875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "AI Apps",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Others",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "(53%) adjusted margin",
                "size": 26.044921875,
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
            "x": 1204.57763671875,
            "top": 588.615234375,
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
                "text": "+9% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "intersegment_eliminations": {
        "blocks": [
          {
            "x": 1204.57763671875,
            "top": 1175.92822265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Inter-segment",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "Eliminations",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1563.99755859375,
            "top": 437.5546875,
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
                "text": "38% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 26.044921875,
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
            "x": 1563.99755859375,
            "top": 1139.46533203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 35.16064453125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 35.16064453125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1922.115234375,
            "top": 359.419921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "6% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(8pp) Y/Y",
                "size": 26.044921875,
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
            "x": 1922.115234375,
            "top": 852.97119140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2174.7509765625,
            "top": 530.01416015625,
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
            "x": 2320.6025390625,
            "top": 408.9052734375,
            "anchor": "start",
            "lineGap": 9.11572265625,
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
                "text": "4% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(13pp) Y/Y",
                "size": 26.044921875,
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
            "x": 2336.2294921875,
            "top": 609.451171875,
            "anchor": "start",
            "lineGap": 9.11572265625,
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
      "sm": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 768.3251953125,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "marketing ($7.0B)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "18% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "product_development": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 935.0126953125,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development ($3.3B)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "8% of revenue",
                "size": 26.044921875,
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
            "x": 2324.50927734375,
            "top": 1089.97998046875,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "Administrative ($1.9B)",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "5% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "amortization_impairment": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 1242.3427734375,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Amortization",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "& impairment ($0.8B)",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "2% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_revenue": {
        "blocks": []
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/alibaba-q1-fy27/company-logo.png",
      "x": 676,
      "y": 313,
      "width": 677,
      "height": 100
    },
    {
      "key": "china-brands",
      "href": "data/assets/raster-annotations/alibaba-q1-fy27/china-brands.png",
      "x": 7,
      "y": 482,
      "width": 138,
      "height": 186
    },
    {
      "key": "international-brands",
      "href": "data/assets/raster-annotations/alibaba-q1-fy27/international-brands.png",
      "x": 4,
      "y": 815,
      "width": 156,
      "height": 121
    },
    {
      "key": "cloud-logo",
      "href": "data/assets/raster-annotations/alibaba-q1-fy27/cloud-logo.png",
      "x": 5,
      "y": 1061,
      "width": 146,
      "height": 33
    },
    {
      "key": "ai-apps-brands",
      "href": "data/assets/raster-annotations/alibaba-q1-fy27/ai-apps-brands.png",
      "x": 8,
      "y": 1208,
      "width": 191,
      "height": 89
    },
    {
      "key": "amap-logo",
      "href": "data/assets/raster-annotations/alibaba-q1-fy27/amap-logo.png",
      "x": 30,
      "y": 1296,
      "width": 48,
      "height": 48
    }
  ],
  "i18n": {
    "zh": {
      "name": "Alibaba · 2027 财年第一季度",
      "meta": {
        "title": "Alibaba 2027 财年第一季度利润表",
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 6 月"
      },
      "nodes": {
        "china_ecommerce": {
          "label": "中国电子商务",
          "notes": [
            "同比 (8%)"
          ]
        },
        "china_quick_commerce": {
          "label": "中国即时零售",
          "notes": [
            "同比 +45%"
          ]
        },
        "international_commerce": {
          "label": "国际商业",
          "notes": [
            "同比 +1%"
          ]
        },
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +45%",
            "调整后利润率 12%"
          ]
        },
        "ai_apps_others": {
          "label": "AI 应用及其他",
          "notes": [
            "同比 +3%",
            "调整后利润率 (53%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "intersegment_eliminations": {
          "label": "分部间抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 38%",
            "同比 (7 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 6%",
            "同比 (8 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other_income": {
          "label": "其他收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 (13 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 18%"
          ]
        },
        "product_development": {
          "label": "产品开发",
          "notes": [
            "占收入 8%"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 5%"
          ]
        },
        "amortization_impairment": {
          "label": "摊销与减值",
          "notes": [
            "占收入 2%"
          ]
        }
      },
      "layout": {
        "labels": {
          "china_ecommerce": {
            "blocks": [
              {
                "x": 487.0400390625,
                "top": 325.5615234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 424.5322265625,
                "top": 461.5591796875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "中国电子商务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "china_quick_commerce": {
            "blocks": [
              {
                "x": 487.0400390625,
                "top": 580.8017578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +45%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 424.5322265625,
                "top": 681.6275390625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "中国即时零售",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "international_commerce": {
            "blocks": [
              {
                "x": 487.0400390625,
                "top": 773.5341796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 424.5322265625,
                "top": 867.85322265625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "国际商业",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "cloud": {
            "blocks": [
              {
                "x": 487.0400390625,
                "top": 968.87109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +45%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 424.5322265625,
                "top": 1060.0283203125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "云",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 12%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ai_apps_others": {
            "blocks": [
              {
                "x": 487.0400390625,
                "top": 1160.30126953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 424.5322265625,
                "top": 1204.57763671875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "AI 应用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "及其他",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 (53%)",
                    "size": 26.044921875,
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
                "x": 1204.57763671875,
                "top": 588.615234375,
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
                    "text": "同比 +9%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "intersegment_eliminations": {
            "blocks": [
              {
                "x": 1204.57763671875,
                "top": 1175.92822265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "分部间抵销",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1563.99755859375,
                "top": 437.5546875,
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
                    "text": "利润率 38%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 26.044921875,
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
                "x": 1563.99755859375,
                "top": 1139.46533203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35.16064453125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 35.16064453125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1922.115234375,
                "top": 359.419921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "利润率 6%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (8 个百分点)",
                    "size": 26.044921875,
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
                "x": 1922.115234375,
                "top": 852.97119140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2174.7509765625,
                "top": 530.01416015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他收益",
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
                "x": 2320.6025390625,
                "top": 408.9052734375,
                "anchor": "start",
                "lineGap": 9.11572265625,
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
                    "text": "利润率 4%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (13 个百分点)",
                    "size": 26.044921875,
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
                "x": 2336.2294921875,
                "top": 609.451171875,
                "anchor": "start",
                "lineGap": 9.11572265625,
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
          "sm": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 768.3251953125,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "($7.0B)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 18%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "product_development": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 935.0126953125,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品开发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "($3.3B)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 8%",
                    "size": 26.044921875,
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
                "x": 2324.50927734375,
                "top": 1089.97998046875,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "($1.9B)",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 5%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "amortization_impairment": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 1242.3427734375,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "摊销与减值",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "($0.8B)",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 2%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_revenue": {
            "blocks": []
          }
        }
      }
    }
  }
});
