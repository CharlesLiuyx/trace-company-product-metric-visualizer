(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q4-fy22",
  "name": "Visa · Q4 FY22",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "Ending Sept. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "periodX": 2226.8408203125,
    "periodY": 256.54248046875,
    "periodNoteY": 299.5166015625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155377",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#207bb4",
        "label": "#005b91"
      },
      "hub": {
        "node": "#207bb4",
        "label": "#005b91"
      },
      "profit": {
        "node": "#28a028",
        "label": "#009650"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a61900"
      }
    },
    "linkTint": {
      "source": "#92bad1",
      "hub": "#92bad1",
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
      "value": 3.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$3.5B",
      "notes": [
        "+11% Y/Y"
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
      "value": 2.9,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.9B",
      "notes": [
        "+52% Y/Y"
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
        "+13% Y/Y"
      ]
    },
    {
      "id": "gross_revenue",
      "label": "Gross revenue",
      "value": 10.6,
      "type": "hub",
      "col": 1,
      "order": 4,
      "valueText": "$10.6B",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Net revenue",
      "value": 7.8,
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$7.8B",
      "notes": [
        "+19% Y/Y"
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
      "value": 7.6,
      "type": "profit",
      "col": 3,
      "order": 7,
      "valueText": "$7.6B",
      "notes": [
        "97% margin",
        "+1pp Y/Y"
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
      "value": 5.1,
      "type": "profit",
      "col": 4,
      "order": 9,
      "valueText": "$5.1B",
      "notes": [
        "66% margin",
        "Unchanged"
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
      "value": 3.9,
      "type": "profit",
      "col": 5,
      "order": 11,
      "valueText": "$3.9B",
      "notes": [
        "51% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.9,
      "type": "cost",
      "col": 5,
      "order": 12,
      "valueText": "($0.9B)",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.2,
      "type": "cost",
      "col": 5,
      "order": 13,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 1.4,
      "type": "cost",
      "col": 5,
      "order": 14,
      "valueText": "($1.4B)",
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.4,
      "type": "cost",
      "col": 5,
      "order": 15,
      "valueText": "($0.4B)",
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
      "label": "Depreciation & amortization",
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
      "value": 0.2,
      "type": "cost",
      "col": 5,
      "order": 18,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "litigation",
      "label": "Litigation provision",
      "value": 0.003,
      "type": "cost",
      "col": 5,
      "order": 19,
      "valueText": "($3M)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "gross_revenue",
      "value": 3.5,
      "sourceWidth": 157.57177734375,
      "targetWidth": 157.57177734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_processing",
      "target": "gross_revenue",
      "value": 3.8,
      "sourceWidth": 171.896484375,
      "targetWidth": 171.896484375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "gross_revenue",
      "value": 2.9,
      "sourceWidth": 131.52685546875,
      "targetWidth": 131.52685546875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_rev",
      "target": "gross_revenue",
      "value": 0.6,
      "sourceWidth": 26.044921875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 7.8,
      "sourceWidth": 354.2109375,
      "targetWidth": 354.2109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "client_incentives",
      "value": 2.9,
      "sourceWidth": 130.224609375,
      "targetWidth": 130.224609375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.6,
      "sourceWidth": 346.3974609375,
      "targetWidth": 346.3974609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "network",
      "value": 0.2,
      "sourceWidth": 7.8134765625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 5.1,
      "sourceWidth": 231.7998046875,
      "targetWidth": 231.7998046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.5,
      "sourceWidth": 114.59765625,
      "targetWidth": 113.29541015625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.9,
      "sourceWidth": 179.7099609375,
      "targetWidth": 179.7099609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.9,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.2,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.4,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.20556640625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.4,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.3,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.2,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.2,
      "sourceWidth": 5.208984375,
      "targetWidth": 6.51123046875,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "litigation",
      "value": 0.003,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.5626953125,
      "sourceOrder": 5,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 45.57861328125,
    "nodes": {
      "service": {
        "x": 377.6513671875,
        "y": 425.83447265625,
        "width": 72.92578125,
        "height": 157.57177734375
      },
      "data_processing": {
        "x": 377.6513671875,
        "y": 714.93310546875,
        "width": 72.92578125,
        "height": 171.896484375
      },
      "international": {
        "x": 377.6513671875,
        "y": 1010.54296875,
        "width": 72.92578125,
        "height": 131.52685546875
      },
      "other_rev": {
        "x": 377.6513671875,
        "y": 1274.89892578125,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "gross_revenue": {
        "x": 751.39599609375,
        "y": 591.2197265625,
        "width": 72.92578125,
        "height": 484.435546875
      },
      "revenue": {
        "x": 1119.931640625,
        "y": 541.734375,
        "width": 72.92578125,
        "height": 354.2109375
      },
      "client_incentives": {
        "x": 1119.931640625,
        "y": 1005.333984375,
        "width": 72.92578125,
        "height": 130.224609375
      },
      "gross_profit": {
        "x": 1475.44482421875,
        "y": 503.96923828125,
        "width": 72.92578125,
        "height": 346.3974609375
      },
      "network": {
        "x": 1475.44482421875,
        "y": 951.94189453125,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "operating_profit": {
        "x": 1853.09619140625,
        "y": 466.2041015625,
        "width": 72.92578125,
        "height": 231.7998046875
      },
      "operating_expenses": {
        "x": 1847.88720703125,
        "y": 809.9970703125,
        "width": 72.92578125,
        "height": 113.29541015625
      },
      "net_profit": {
        "x": 2232.0498046875,
        "y": 427.13671875,
        "width": 72.92578125,
        "height": 179.7099609375
      },
      "tax": {
        "x": 2232.0498046875,
        "y": 694.09716796875,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "other": {
        "x": 2232.0498046875,
        "y": 816.50830078125,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "personnel": {
        "x": 2232.0498046875,
        "y": 899.85205078125,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "marketing": {
        "x": 2232.0498046875,
        "y": 1037.89013671875,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "general_admin": {
        "x": 2232.0498046875,
        "y": 1114.72265625,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "da": {
        "x": 2232.0498046875,
        "y": 1200.6708984375,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "professional_fees": {
        "x": 2232.0498046875,
        "y": 1299.6416015625,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "litigation": {
        "x": 2232.0498046875,
        "y": 1380.380859375,
        "width": 72.92578125,
        "height": 1.5626953125
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 414.1142578125,
            "top": 326.86376953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 227.89306640625,
            "top": 481.33779296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Service",
                "size": 37.76513671875,
                "color": "#005b91",
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
            "x": 414.1142578125,
            "top": 615.96240234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#005b91",
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
            "x": 227.89306640625,
            "top": 753.5072265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Data",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 700
              },
              {
                "text": "processing",
                "size": 37.76513671875,
                "color": "#005b91",
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
            "x": 414.1142578125,
            "top": 911.572265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 400
              },
              {
                "text": "+52% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 227.89306640625,
            "top": 1028.932275390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "International",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 700
              },
              {
                "text": "transaction",
                "size": 37.76513671875,
                "color": "#005b91",
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
            "x": 414.1142578125,
            "top": 1175.92822265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 227.89306640625,
            "top": 1264.638818359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "color": "#005b91",
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
            "x": 787.85888671875,
            "top": 475.31982421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross revenue",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1156.39453125,
            "top": 391.97607421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net revenue",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#005b91",
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
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
            "x": 1156.39453125,
            "top": 1145.9765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Client",
                "size": 35.16064453125,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "incentives",
                "size": 35.16064453125,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1511.90771484375,
            "top": 312.5390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross Profit",
                "size": 37.76513671875,
                "color": "#009650",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#009650",
                "weight": 400
              },
              {
                "text": "97% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
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
            "top": 971.4755859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Network &",
                "size": 35.16064453125,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "processing",
                "size": 35.16064453125,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1889.55908203125,
            "top": 277.37841796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "color": "#009650",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#009650",
                "weight": 400
              },
              {
                "text": "66% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "Unchanged",
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
            "x": 1884.35009765625,
            "top": 933.71044921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 35.16064453125,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 35.16064453125,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "color": "#a61900",
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
            "top": 429.7412109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "color": "#009650",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "color": "#009650",
                "weight": 400
              },
              {
                "text": "51% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 2396.1328125,
            "top": 678.47021484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 27.34716796875,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2396.1328125,
            "top": 800.88134765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 27.34716796875,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2419.5732421875,
            "top": 901.154296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Personnel",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2419.5732421875,
            "top": 1039.1923828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2419.5732421875,
            "top": 1116.02490234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & admin",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2419.5732421875,
            "top": 1201.97314453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "amortization",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2419.5732421875,
            "top": 1300.94384765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional fees",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 22.13818359375,
                "color": "#a61900",
                "weight": 400
              }
            ]
          }
        ]
      },
      "litigation": {
        "blocks": [
          {
            "x": 2323.20703125,
            "top": 1363.45166015625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Litigation provision $value",
                "size": 20.8359375,
                "color": "#a61900",
                "weight": 700
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<text x=\"170\" y=\"1436\" font-size=\"39\" font-weight=\"700\">Source: Quarterly results</text><g data-typography-role=\"brand\" transform=\"translate(572 260) scale(1.30224609375)\"><text x=\"145\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"115\" font-weight=\"900\" font-style=\"italic\" fill=\"#002080\">VISA</text></g>",
  "i18n": {
    "zh": {
      "name": "Visa · 2022 财年第四季度",
      "meta": {
        "title": "Visa 2022 财年第四季度利润表",
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 9 月",
        "titleSize": 110.69091796875
      },
      "nodes": {
        "service": {
          "label": "服务",
          "notes": [
            "同比 +11%"
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
            "同比 +52%"
          ]
        },
        "other_rev": {
          "label": "其他",
          "notes": [
            "同比 +13%"
          ]
        },
        "gross_revenue": {
          "label": "总收入",
          "notes": []
        },
        "revenue": {
          "label": "净收入",
          "notes": [
            "同比 +19%"
          ]
        },
        "client_incentives": {
          "label": "客户激励",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 97%",
            "同比 +1 个百分点"
          ]
        },
        "network": {
          "label": "网络及处理",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 66%",
            "同比持平"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 51%",
            "同比 -4 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他费用",
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
        },
        "litigation": {
          "label": "诉讼拨备",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "service": {
            "blocks": [
              {
                "x": 414.1142578125,
                "top": 326.86376953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 227.89306640625,
                "top": 481.33779296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 37.76513671875,
                    "color": "#005b91",
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
                "x": 414.1142578125,
                "top": 615.96240234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#005b91",
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
                "x": 227.89306640625,
                "top": 753.5072265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "数据",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 700
                  },
                  {
                    "text": "处理",
                    "size": 37.76513671875,
                    "color": "#005b91",
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
                "x": 414.1142578125,
                "top": 911.572265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 400
                  },
                  {
                    "text": "同比 +52%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 227.89306640625,
                "top": 1028.932275390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国际",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 700
                  },
                  {
                    "text": "交易",
                    "size": 37.76513671875,
                    "color": "#005b91",
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
                "x": 414.1142578125,
                "top": 1175.92822265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 227.89306640625,
                "top": 1264.638818359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "color": "#005b91",
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
                "x": 787.85888671875,
                "top": 475.31982421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "总收入",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1156.39453125,
                "top": 391.97607421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#005b91",
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
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
                "x": 1156.39453125,
                "top": 1145.9765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "客户",
                    "size": 35.16064453125,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "激励",
                    "size": 35.16064453125,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1511.90771484375,
                "top": 312.5390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "color": "#009650",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#009650",
                    "weight": 400
                  },
                  {
                    "text": "利润率 97%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "top": 971.4755859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "网络及",
                    "size": 35.16064453125,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "处理",
                    "size": 35.16064453125,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1889.55908203125,
                "top": 277.37841796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "color": "#009650",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#009650",
                    "weight": 400
                  },
                  {
                    "text": "利润率 66%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比持平",
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
                "x": 1884.35009765625,
                "top": 933.71044921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 35.16064453125,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 35.16064453125,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "color": "#a61900",
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
                "top": 429.7412109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "color": "#009650",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "color": "#009650",
                    "weight": 400
                  },
                  {
                    "text": "利润率 51%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 -4 个百分点",
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
                "x": 2396.1328125,
                "top": 678.47021484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 27.34716796875,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2396.1328125,
                "top": 800.88134765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他费用",
                    "size": 27.34716796875,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2419.5732421875,
                "top": 901.154296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "人员",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2419.5732421875,
                "top": 1039.1923828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "市场营销",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2419.5732421875,
                "top": 1116.02490234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "综合及行政",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2419.5732421875,
                "top": 1201.97314453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "折旧及",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "摊销",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2419.5732421875,
                "top": 1300.94384765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业服务费",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 22.13818359375,
                    "color": "#a61900",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "litigation": {
            "blocks": [
              {
                "x": 2323.20703125,
                "top": 1363.45166015625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "诉讼拨备 $value",
                    "size": 20.8359375,
                    "color": "#a61900",
                    "weight": 700
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"170\" y=\"1436\" font-size=\"39\" font-weight=\"700\">来源：季度业绩</text><g data-typography-role=\"brand\" transform=\"translate(572 260) scale(1.30224609375)\"><text x=\"145\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"115\" font-weight=\"900\" font-style=\"italic\" fill=\"#002080\">VISA</text></g>"
    }
  }
});})();
