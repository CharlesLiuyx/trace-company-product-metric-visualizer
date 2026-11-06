(function(){ window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "visa-q4-fy26",
  "name": "Visa · Q4 FY26",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q4 FY26 Income Statement",
    "period": "Q4 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q4-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 1985.92529296875,
    "periodX": 2483.38330078125,
    "periodY": 156.26953125,
    "periodNoteY": 197.94140625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#002690",
        "label": "#002590"
      },
      "hub": {
        "node": "#002690",
        "label": "#002590"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      }
    },
    "linkTint": {
      "source": "#8596c5",
      "hub": "#8596c5",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 36,
      "value": 38,
      "note": 27,
      "lineGap": 13
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "service",
      "label": "Service",
      "value": 5.3,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$5.3B",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "data_processing",
      "label": "Data processing",
      "value": 6.2,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$6.2B",
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 4.1,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$4.1B",
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "other_rev",
      "label": "Other",
      "value": 1.6,
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.6B",
      "notes": [
        "+40% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Net revenue",
      "value": 12.1,
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$12.1B",
      "notes": [
        "+13% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 5.1,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($5.1B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 7.3,
      "type": "profit",
      "col": 3,
      "order": 7,
      "valueText": "$7.3B",
      "notes": [
        "60% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.9,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($4.9B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 6.0,
      "type": "profit",
      "col": 4,
      "order": 9,
      "valueText": "$6.0B",
      "notes": [
        "49% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.4,
      "type": "cost",
      "col": 4,
      "order": 10,
      "valueText": "($1.4B)"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.1,
      "type": "profit",
      "col": 3,
      "order": 11,
      "valueText": "$0.1B"
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 1.9,
      "type": "cost",
      "col": 4,
      "order": 12,
      "valueText": "($1.9B)"
    },
    {
      "id": "general_admin",
      "label": "General & admin",
      "value": 0.8,
      "type": "cost",
      "col": 4,
      "order": 13,
      "valueText": "($0.8B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.7,
      "type": "cost",
      "col": 4,
      "order": 14,
      "valueText": "($0.7B)"
    },
    {
      "id": "provisions",
      "label": "Provisions",
      "value": 0.5,
      "type": "cost",
      "col": 4,
      "order": 15,
      "valueText": "($0.5B)"
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 16,
      "valueText": "($0.4B)"
    },
    {
      "id": "network",
      "label": "Network",
      "value": 0.3,
      "type": "cost",
      "col": 4,
      "order": 17,
      "valueText": "($0.3B)"
    },
    {
      "id": "professional_fees",
      "label": "Professional fees",
      "value": 0.3,
      "type": "cost",
      "col": 4,
      "order": 18,
      "valueText": "($0.3B)"
    },
    {
      "id": "gross_revenue",
      "label": "",
      "value": 17.2,
      "type": "hub",
      "col": 1,
      "order": 4,
      "valueText": ""
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "gross_revenue",
      "value": 5.3,
      "sourceWidth": 126.31787109375,
      "targetWidth": 126.31787109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_processing",
      "target": "gross_revenue",
      "value": 6.2,
      "sourceWidth": 149.75830078125,
      "targetWidth": 149.75830078125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "gross_revenue",
      "value": 4.1,
      "sourceWidth": 97.66845703125,
      "targetWidth": 97.66845703125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_rev",
      "target": "gross_revenue",
      "value": 1.6,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 12.1,
      "sourceWidth": 290.40087890625,
      "targetWidth": 290.40087890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8596c5"
    },
    {
      "source": "gross_revenue",
      "target": "client_incentives",
      "value": 5.1,
      "sourceWidth": 122.4111328125,
      "targetWidth": 123.71337890625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 7.3,
      "sourceWidth": 174.5009765625,
      "targetWidth": 174.5009765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 4.9,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 6,
      "sourceWidth": 141.94482421875,
      "targetWidth": 141.94482421875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.4,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.9,
      "sourceWidth": 45.57861328125,
      "targetWidth": 45.57861328125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.8,
      "sourceWidth": 19.53369140625,
      "targetWidth": 20.8359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.7,
      "sourceWidth": 15.626953125,
      "targetWidth": 16.92919921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "provisions",
      "value": 0.5,
      "sourceWidth": 10.41796875,
      "targetWidth": 11.72021484375,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.4,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "network",
      "value": 0.3,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.3,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "cost_of_revenue",
      "representation": "data-only"
    },
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "layout": {
    "scale": 23.961328124999998,
    "nodes": {
      "service": {
        "x": 367.2333984375,
        "y": 350.30419921875,
        "width": 72.92578125,
        "height": 126.31787109375
      },
      "data_processing": {
        "x": 367.2333984375,
        "y": 588.615234375,
        "width": 72.92578125,
        "height": 149.75830078125
      },
      "international": {
        "x": 367.2333984375,
        "y": 860.78466796875,
        "width": 72.92578125,
        "height": 97.66845703125
      },
      "other_rev": {
        "x": 367.2333984375,
        "y": 1092.58447265625,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "gross_revenue": {
        "x": 834.73974609375,
        "y": 497.4580078125,
        "width": 72.92578125,
        "height": 412.81201171875
      },
      "revenue": {
        "x": 1302.24609375,
        "y": 595.12646484375,
        "width": 72.92578125,
        "height": 290.40087890625
      },
      "client_incentives": {
        "x": 1302.24609375,
        "y": 998.82275390625,
        "width": 72.92578125,
        "height": 123.71337890625
      },
      "operating_profit": {
        "x": 1769.75244140625,
        "y": 502.6669921875,
        "width": 72.92578125,
        "height": 174.5009765625
      },
      "operating_expenses": {
        "x": 1769.75244140625,
        "y": 832.13525390625,
        "width": 72.92578125,
        "height": 115.89990234375
      },
      "net_profit": {
        "x": 2235.95654296875,
        "y": 337.28173828125,
        "width": 72.92578125,
        "height": 144.54931640625
      },
      "tax": {
        "x": 2235.95654296875,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "other_income": {
        "x": 2056.24658203125,
        "y": 308.63232421875,
        "width": 74.22802734375,
        "height": 2.6044921875
      },
      "personnel": {
        "x": 2235.95654296875,
        "y": 711.0263671875,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "general_admin": {
        "x": 2235.95654296875,
        "y": 836.0419921875,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "marketing": {
        "x": 2235.95654296875,
        "y": 951.94189453125,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "provisions": {
        "x": 2235.95654296875,
        "y": 1050.91259765625,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "da": {
        "x": 2235.95654296875,
        "y": 1156.39453125,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "network": {
        "x": 2235.95654296875,
        "y": 1244.947265625,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "professional_fees": {
        "x": 2235.95654296875,
        "y": 1350.42919921875,
        "width": 72.92578125,
        "height": 7.8134765625
      }
    },
    "labels": {
      "gross_revenue": {
        "blocks": []
      },
      "service": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 252.6357421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$5.3B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#002590"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 308.63232421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 390.2828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Service",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#002590"
              }
            ]
          }
        ]
      },
      "data_processing": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 490.94677734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$6.2B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#002590"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 546.943359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+16% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 616.178125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Data",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#002590"
              },
              {
                "text": "processing",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#002590"
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 764.41845703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$4.1B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#002590"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 820.4150390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 862.28017578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "International",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#002590"
              },
              {
                "text": "transaction",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#002590"
              }
            ]
          }
        ]
      },
      "other_rev": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 994.916015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$1.6B",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#002590"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 1050.91259765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+40% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 1087.37548828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#002590"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1338.708984375,
            "top": 445.3681640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#002590"
              }
            ]
          },
          {
            "x": 1338.708984375,
            "top": 494.853515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#002590"
              }
            ]
          },
          {
            "x": 1338.708984375,
            "top": 550.85009765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "client_incentives": {
        "blocks": [
          {
            "x": 1338.708984375,
            "top": 1135.55859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Client",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "incentives",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1338.708984375,
            "top": 1224.111328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
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
            "x": 1806.21533203125,
            "top": 315.1435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1806.21533203125,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1806.21533203125,
            "top": 420.62548828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "60% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1806.21533203125,
            "top": 962.35986328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1806.21533203125,
            "top": 1050.91259765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
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
            "x": 2418.27099609375,
            "top": 315.1435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2418.27099609375,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2418.27099609375,
            "top": 420.62548828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "49% margin",
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
      "tax": {
        "blocks": [
          {
            "x": 2414.3642578125,
            "top": 520.8984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 28.6494140625,
                "weight": 700,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2414.3642578125,
            "top": 559.9658203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2091.4072265625,
            "top": 217.47509765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2091.4072265625,
            "top": 257.8447265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 720.14208984375,
            "anchor": "start",
            "lineGap": 0.0,
            "lines": [
              {
                "text": "Personnel ($1.9B)",
                "size": 24.74267578125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 830.8330078125,
            "anchor": "start",
            "lineGap": 0.0,
            "lines": [
              {
                "text": "General & admin ($0.8B)",
                "size": 24.74267578125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 946.73291015625,
            "anchor": "start",
            "lineGap": 0.0,
            "lines": [
              {
                "text": "Marketing ($0.7B)",
                "size": 24.74267578125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "provisions": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1044.4013671875,
            "anchor": "start",
            "lineGap": 0.0,
            "lines": [
              {
                "text": "Provisions ($0.5B)",
                "size": 24.74267578125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1148.5810546875,
            "anchor": "start",
            "lineGap": 0.0,
            "lines": [
              {
                "text": "D&A ($0.4B)",
                "size": 24.74267578125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "network": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1237.1337890625,
            "anchor": "start",
            "lineGap": 0.0,
            "lines": [
              {
                "text": "Network ($0.3B)",
                "size": 24.74267578125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1341.3134765625,
            "anchor": "start",
            "lineGap": 0.0,
            "lines": [
              {
                "text": "Professional fees ($0.3B)",
                "size": 24.74267578125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "payment_volume",
      "value": "9",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+9%"
    },
    {
      "id": "cross_border_volume",
      "value": "14",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+14%"
    },
    {
      "id": "processed_transactions",
      "value": "10",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+10%"
    }
  ],
  "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1187.6484375\" width=\"204.45263671875\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#002590\"/><text x=\"179.058837890625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Payment</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"payment_volume\" x=\"153.013916015625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+9%</text><text x=\"211.614990234375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"290.40087890625\" y=\"1187.6484375\" width=\"291.703125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#002590\"/><text x=\"436.25244140625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Cross-Border</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"cross_border_volume\" x=\"410.20751953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+14%</text><text x=\"468.80859375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"589.91748046875\" y=\"1187.6484375\" width=\"291.703125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#002590\"/><text x=\"735.76904296875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Processed</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Transactions</text><text data-operating-metric=\"processed_transactions\" x=\"709.72412109375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+10%</text><text x=\"768.3251953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "visa-logo-q4-fy26",
      "href": "data/assets/raster-annotations/visa/logo-q4-fy26.png",
      "x": 664,
      "y": 238,
      "width": 374,
      "height": 129,
      "clearance": true
    }
  ],
  "i18n": {
    "zh": {
      "name": "Visa · 2026 财年第四季度",
      "meta": {
        "title": "Visa 2026 财年第四季度利润表",
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 1692.919921875
      },
      "nodes": {
        "service": {
          "label": "服务",
          "notes": [
            "同比 +14%"
          ]
        },
        "data_processing": {
          "label": "数据处理",
          "notes": [
            "同比 +16%"
          ]
        },
        "international": {
          "label": "国际交易",
          "notes": [
            "同比 +8%"
          ]
        },
        "other_rev": {
          "label": "其他",
          "notes": [
            "同比 +40%"
          ]
        },
        "revenue": {
          "label": "净收入",
          "notes": [
            "同比 +13%"
          ]
        },
        "client_incentives": {
          "label": "客户激励"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 60%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 49%",
            "同比 +2 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_income": {
          "label": "其他"
        },
        "personnel": {
          "label": "人员"
        },
        "general_admin": {
          "label": "综合及行政"
        },
        "marketing": {
          "label": "市场营销"
        },
        "provisions": {
          "label": "拨备"
        },
        "da": {
          "label": "折旧摊销"
        },
        "network": {
          "label": "网络"
        },
        "professional_fees": {
          "label": "专业服务费"
        }
      },
      "layout": {
        "labels": {
          "gross_revenue": {
            "blocks": []
          },
          "service": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 252.6357421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$5.3B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#002590"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 308.63232421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 390.28056640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#002590"
                  }
                ]
              }
            ]
          },
          "data_processing": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 490.94677734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$6.2B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#002590"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 546.943359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 640.31181640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "数据处理",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#002590"
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 764.41845703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$4.1B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#002590"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 820.4150390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 886.436328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国际交易",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#002590"
                  }
                ]
              }
            ]
          },
          "other_rev": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 994.916015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$1.6B",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#002590"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 1050.91259765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +40%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 1088.935595703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#002590"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1338.708984375,
                "top": 445.3681640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#002590"
                  }
                ]
              },
              {
                "x": 1338.708984375,
                "top": 494.853515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#002590"
                  }
                ]
              },
              {
                "x": 1338.708984375,
                "top": 550.85009765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "client_incentives": {
            "blocks": [
              {
                "x": 1338.708984375,
                "top": 1135.55859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "客户激励",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1338.708984375,
                "top": 1179.8349609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
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
                "x": 1806.21533203125,
                "top": 315.1435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1806.21533203125,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1806.21533203125,
                "top": 420.62548828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利润率 60%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1806.21533203125,
                "top": 962.35986328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1806.21533203125,
                "top": 1006.63623046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
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
                "x": 2418.27099609375,
                "top": 315.1435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2418.27099609375,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2418.27099609375,
                "top": 420.62548828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利润率 49%",
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
          "tax": {
            "blocks": [
              {
                "x": 2414.3642578125,
                "top": 520.8984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 28.6494140625,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2414.3642578125,
                "top": 559.9658203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2091.4072265625,
                "top": 217.47509765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2091.4072265625,
                "top": 257.8447265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 720.14208984375,
                "anchor": "start",
                "lineGap": 0.0,
                "lines": [
                  {
                    "text": "人员 ($1.9B)",
                    "size": 24.74267578125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 830.8330078125,
                "anchor": "start",
                "lineGap": 0.0,
                "lines": [
                  {
                    "text": "综合及行政 ($0.8B)",
                    "size": 24.74267578125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 946.73291015625,
                "anchor": "start",
                "lineGap": 0.0,
                "lines": [
                  {
                    "text": "市场营销 ($0.7B)",
                    "size": 24.74267578125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "provisions": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1044.4013671875,
                "anchor": "start",
                "lineGap": 0.0,
                "lines": [
                  {
                    "text": "拨备 ($0.5B)",
                    "size": 24.74267578125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1148.5810546875,
                "anchor": "start",
                "lineGap": 0.0,
                "lines": [
                  {
                    "text": "折旧摊销 ($0.4B)",
                    "size": 24.74267578125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "network": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1237.1337890625,
                "anchor": "start",
                "lineGap": 0.0,
                "lines": [
                  {
                    "text": "网络 ($0.3B)",
                    "size": 24.74267578125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1341.3134765625,
                "anchor": "start",
                "lineGap": 0.0,
                "lines": [
                  {
                    "text": "专业服务费 ($0.3B)",
                    "size": 24.74267578125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1187.6484375\" width=\"204.45263671875\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#002590\"/><text x=\"179.058837890625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">支付</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"payment_volume\" x=\"153.013916015625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+9%</text><text x=\"211.614990234375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比</text></g><g><rect x=\"290.40087890625\" y=\"1187.6484375\" width=\"291.703125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#002590\"/><text x=\"436.25244140625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">跨境</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"cross_border_volume\" x=\"410.20751953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+14%</text><text x=\"468.80859375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比</text></g><g><rect x=\"589.91748046875\" y=\"1187.6484375\" width=\"291.703125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#002590\"/><text x=\"735.76904296875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">处理</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">交易笔数</text><text data-operating-metric=\"processed_transactions\" x=\"709.72412109375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+10%</text><text x=\"768.3251953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比</text></g>"
    }
  }
});})();
