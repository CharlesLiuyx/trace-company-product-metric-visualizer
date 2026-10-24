(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q2-fy23",
  "name": "Visa · Q2 FY23",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 119.806640625,
    "titleWeight": 800,
    "periodX": 2226.8408203125,
    "periodY": 257.8447265625,
    "periodNoteY": 300.81884765625,
    "logoWidth": 377.6513671875,
    "logoHeight": 143.2470703125,
    "logoY": 266.96044921875,
    "logoViewBox": "0 0 290 110",
    "logoSvg": "<text x=\"145\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"115\" font-weight=\"900\" font-style=\"italic\" fill=\"#002080\">VISA</text>",
    "logoX": 557.361328125
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155377",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#00268f",
        "label": "#00268f"
      },
      "hub": {
        "node": "#00268f",
        "label": "#00268f"
      },
      "profit": {
        "node": "#28a028",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#8596c5",
      "hub": "#8596c5",
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
      "id": "service",
      "label": "Service",
      "value": 3.8,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$3.8B",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "data_processing",
      "label": "Data processing",
      "value": 3.8,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$3.8B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 2.7,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.7B",
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "other_rev",
      "label": "Other",
      "value": 0.6,
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$0.6B",
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "gross_revenue",
      "label": "Gross revenue",
      "value": 10.9,
      "type": "hub",
      "col": 1,
      "order": 4,
      "valueText": "$10.9B",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Net revenue",
      "value": 8,
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$8.0B",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 2.9,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($2.9B)",
      "notes": []
    },
    {
      "id": "gross_profit",
      "label": "Gross Profit",
      "value": 7.8,
      "type": "profit",
      "col": 3,
      "order": 7,
      "valueText": "$7.8B",
      "notes": [
        "98% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "network",
      "label": "Network & processing",
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 5.3,
      "type": "profit",
      "col": 4,
      "order": 9,
      "valueText": "$5.3B",
      "notes": [
        "67% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 2.5,
      "type": "cost",
      "col": 4,
      "order": 10,
      "valueText": "($2.5B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 4.3,
      "type": "profit",
      "col": 5,
      "order": 11,
      "valueText": "$4.3B",
      "notes": [
        "53% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1,
      "type": "cost",
      "col": 5,
      "order": 12,
      "valueText": "($1.0B)",
      "notes": []
    },
    {
      "id": "other_ded",
      "label": "Other",
      "value": 0.1,
      "type": "cost",
      "col": 5,
      "order": 13,
      "valueText": "($0.1B)",
      "notes": []
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 1.5,
      "type": "cost",
      "col": 5,
      "order": 14,
      "valueText": "($1.5B)",
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 15,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "general_admin",
      "label": "General & admin",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 16,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.2,
      "type": "cost",
      "col": 5,
      "order": 17,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "professional_fees",
      "label": "Professional fees",
      "value": 0.1,
      "type": "cost",
      "col": 5,
      "order": 18,
      "valueText": "($0.1B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "gross_revenue",
      "value": 3.8,
      "sourceWidth": 151.060546875,
      "targetWidth": 151.060546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_processing",
      "target": "gross_revenue",
      "value": 3.8,
      "sourceWidth": 152.36279296875,
      "targetWidth": 152.36279296875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "gross_revenue",
      "value": 2.7,
      "sourceWidth": 109.388671875,
      "targetWidth": 109.388671875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_rev",
      "target": "gross_revenue",
      "value": 0.6,
      "sourceWidth": 22.13818359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 8,
      "sourceWidth": 317.748046875,
      "targetWidth": 317.748046875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "client_incentives",
      "value": 2.9,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.8,
      "sourceWidth": 311.23681640625,
      "targetWidth": 311.23681640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "network",
      "value": 0.2,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 5.3,
      "sourceWidth": 213.568359375,
      "targetWidth": 213.568359375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.5,
      "sourceWidth": 98.970703125,
      "targetWidth": 98.970703125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.3,
      "sourceWidth": 169.2919921875,
      "targetWidth": 169.2919921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_ded",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.5,
      "sourceWidth": 59.9033203125,
      "targetWidth": 59.9033203125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.3,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.2,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 4,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 39.718505859375,
    "nodes": {
      "service": {
        "x": 349.001953125,
        "y": 463.599609375,
        "width": 72.92578125,
        "height": 151.060546875
      },
      "data_processing": {
        "x": 349.001953125,
        "y": 767.02294921875,
        "width": 72.92578125,
        "height": 152.36279296875
      },
      "international": {
        "x": 349.001953125,
        "y": 1063.93505859375,
        "width": 72.92578125,
        "height": 109.388671875
      },
      "other_rev": {
        "x": 349.001953125,
        "y": 1316.57080078125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "gross_revenue": {
        "x": 722.74658203125,
        "y": 606.8466796875,
        "width": 72.92578125,
        "height": 433.64794921875
      },
      "revenue": {
        "x": 1097.79345703125,
        "y": 570.3837890625,
        "width": 72.92578125,
        "height": 317.748046875
      },
      "client_incentives": {
        "x": 1096.4912109375,
        "y": 993.61376953125,
        "width": 72.92578125,
        "height": 115.89990234375
      },
      "gross_profit": {
        "x": 1472.84033203125,
        "y": 527.40966796875,
        "width": 72.92578125,
        "height": 312.5390625
      },
      "network": {
        "x": 1475.44482421875,
        "y": 963.662109375,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "operating_profit": {
        "x": 1851.7939453125,
        "y": 474.017578125,
        "width": 72.92578125,
        "height": 213.568359375
      },
      "operating_expenses": {
        "x": 1851.7939453125,
        "y": 846.4599609375,
        "width": 72.92578125,
        "height": 98.970703125
      },
      "net_profit": {
        "x": 2217.72509765625,
        "y": 420.62548828125,
        "width": 72.92578125,
        "height": 169.2919921875
      },
      "tax": {
        "x": 2217.72509765625,
        "y": 720.14208984375,
        "width": 72.92578125,
        "height": 41.671875
      },
      "other_ded": {
        "x": 2217.72509765625,
        "y": 842.55322265625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "personnel": {
        "x": 2217.72509765625,
        "y": 918.08349609375,
        "width": 72.92578125,
        "height": 59.9033203125
      },
      "marketing": {
        "x": 2217.72509765625,
        "y": 1050.91259765625,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "general_admin": {
        "x": 2217.72509765625,
        "y": 1139.46533203125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "da": {
        "x": 2217.72509765625,
        "y": 1238.43603515625,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "professional_fees": {
        "x": 2217.72509765625,
        "y": 1328.291015625,
        "width": 72.92578125,
        "height": 5.208984375
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 385.46484375,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 195.3369140625,
            "top": 515.689453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Service",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "data_processing": {
        "blocks": [
          {
            "x": 385.46484375,
            "top": 668.05224609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 195.3369140625,
            "top": 795.021240234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Data",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "processing",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 385.46484375,
            "top": 964.96435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 195.3369140625,
            "top": 1070.4462890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "International",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "transaction",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "other_rev": {
        "blocks": [
          {
            "x": 385.46484375,
            "top": 1217.60009765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 195.3369140625,
            "top": 1304.199462890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "gross_revenue": {
        "blocks": [
          {
            "x": 759.20947265625,
            "top": 490.94677734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross revenue",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1134.25634765625,
            "top": 421.927734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net revenue",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "client_incentives": {
        "blocks": [
          {
            "x": 1132.9541015625,
            "top": 1122.5361328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Client",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "incentives",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1509.30322265625,
            "top": 339.88623046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross Profit",
                "size": 37.76513671875,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "98% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "network": {
        "blocks": [
          {
            "x": 1511.90771484375,
            "top": 981.8935546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Network &",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "processing",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1888.2568359375,
            "top": 286.494140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "67% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1888.2568359375,
            "top": 957.15087890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2406.55078125,
            "top": 425.83447265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "53% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "+3pp Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2379.20361328125,
            "top": 705.8173828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 27.34716796875,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_ded": {
        "blocks": [
          {
            "x": 2379.20361328125,
            "top": 807.392578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 27.34716796875,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2302.37109375,
            "top": 931.10595703125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Personnel ($1.5B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2302.37109375,
            "top": 1039.843505859375,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing ($0.3B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2302.37109375,
            "top": 1128.396240234375,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & admin ($0.3B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2302.37109375,
            "top": 1226.064697265625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "D&A ($0.2B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2302.37109375,
            "top": 1313.96630859375,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional fees ($0.1B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "Visa · 2023 财年第二季度",
      "meta": {
        "title": "Visa 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 3 月"
      },
      "nodes": {
        "service": {
          "label": "服务",
          "notes": [
            "同比 +7%"
          ]
        },
        "data_processing": {
          "label": "数据处理",
          "notes": [
            "同比 +10%"
          ]
        },
        "international": {
          "label": "国际交易",
          "notes": [
            "同比 +24%"
          ]
        },
        "other_rev": {
          "label": "其他",
          "notes": [
            "同比 +16%"
          ]
        },
        "gross_revenue": {
          "label": "总收入",
          "notes": []
        },
        "revenue": {
          "label": "净收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "client_incentives": {
          "label": "客户激励",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 98%",
            "同比 +0 个百分点"
          ]
        },
        "network": {
          "label": "网络与处理",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 67%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 53%",
            "同比 +3 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_ded": {
          "label": "其他",
          "notes": []
        },
        "personnel": {
          "label": "人员",
          "notes": []
        },
        "marketing": {
          "label": "市场营销",
          "notes": []
        },
        "general_admin": {
          "label": "综合及行政",
          "notes": []
        },
        "da": {
          "label": "折旧摊销",
          "notes": []
        },
        "professional_fees": {
          "label": "专业服务费",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "service": {
            "blocks": [
              {
                "x": 385.46484375,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 195.3369140625,
                "top": 515.689453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "data_processing": {
            "blocks": [
              {
                "x": 385.46484375,
                "top": 668.05224609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 195.3369140625,
                "top": 819.763916015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "数据处理",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 385.46484375,
                "top": 964.96435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 195.3369140625,
                "top": 1095.18896484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国际交易",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "other_rev": {
            "blocks": [
              {
                "x": 385.46484375,
                "top": 1217.60009765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 195.3369140625,
                "top": 1304.199462890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "gross_revenue": {
            "blocks": [
              {
                "x": 759.20947265625,
                "top": 490.94677734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "总收入",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1134.25634765625,
                "top": 421.927734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "client_incentives": {
            "blocks": [
              {
                "x": 1132.9541015625,
                "top": 1122.5361328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "客户激励",
                    "size": 37.76513671875,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1509.30322265625,
                "top": 339.88623046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 98%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "network": {
            "blocks": [
              {
                "x": 1511.90771484375,
                "top": 981.8935546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "网络与处理",
                    "size": 37.76513671875,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1888.2568359375,
                "top": 286.494140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 67%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1888.2568359375,
                "top": 957.15087890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 37.76513671875,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2406.55078125,
                "top": 425.83447265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 53%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2379.20361328125,
                "top": 705.8173828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 27.34716796875,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_ded": {
            "blocks": [
              {
                "x": 2379.20361328125,
                "top": 807.392578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 27.34716796875,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2302.37109375,
                "top": 931.10595703125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "人员 ($1.5B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2302.37109375,
                "top": 1039.843505859375,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "市场营销 ($0.3B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2302.37109375,
                "top": 1128.396240234375,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "综合及行政 ($0.3B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2302.37109375,
                "top": 1226.064697265625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "折旧摊销 ($0.2B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2302.37109375,
                "top": 1313.96630859375,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业服务费 ($0.1B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
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
