(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q3-fy25",
  "name": "Visa · Q3 FY25",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 119.806640625,
    "titleWeight": 800,
    "periodX": 2480.77880859375,
    "periodY": 156.26953125,
    "periodNoteY": 197.94140625,
    "logoWidth": 377.6513671875,
    "logoHeight": 143.2470703125,
    "logoY": 260.44921875,
    "logoViewBox": "0 0 290 110",
    "logoSvg": "<text x=\"145\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"115\" font-weight=\"900\" font-style=\"italic\" fill=\"#002080\">VISA</text>"
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
      "value": 4.3,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$4.3B",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "data_processing",
      "label": "Data processing",
      "value": 5.2,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$5.2B",
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 3.6,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.6B",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "other_rev",
      "label": "Other",
      "value": 1,
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.0B",
      "notes": [
        "+32% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "",
      "value": 14.2,
      "type": "hub",
      "col": 1,
      "order": 4,
      "valueText": "$14.2B",
      "notes": []
    },
    {
      "id": "net_revenue",
      "label": "Net revenue",
      "value": 10.2,
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$10.2B",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 4,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($4.0B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 6.2,
      "type": "profit",
      "col": 3,
      "order": 7,
      "valueText": "$6.2B",
      "notes": [
        "61% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 3.8,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($3.8B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 5.3,
      "type": "profit",
      "col": 4,
      "order": 9,
      "valueText": "$5.3B",
      "notes": [
        "52% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.1,
      "type": "cost",
      "col": 4,
      "order": 10,
      "valueText": "($1.1B)",
      "notes": []
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 1.7,
      "type": "cost",
      "col": 4,
      "order": 11,
      "valueText": "($1.7B)",
      "notes": []
    },
    {
      "id": "litigation",
      "label": "Litigation",
      "value": 0.6,
      "type": "cost",
      "col": 4,
      "order": 12,
      "valueText": "($0.6B)",
      "notes": []
    },
    {
      "id": "general_admin",
      "label": "General & admin",
      "value": 0.5,
      "type": "cost",
      "col": 4,
      "order": 13,
      "valueText": "($0.5B)",
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 14,
      "valueText": "($0.4B)",
      "notes": []
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.3,
      "type": "cost",
      "col": 4,
      "order": 15,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "network",
      "label": "Network",
      "value": 0.2,
      "type": "cost",
      "col": 4,
      "order": 16,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "professional_fees",
      "label": "Professional fees",
      "value": 0.2,
      "type": "cost",
      "col": 4,
      "order": 17,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "other_inc",
      "label": "Other",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "profit",
      "col": 3,
      "order": 9,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "revenue",
      "value": 4.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 117.2021484375,
      "targetWidth": 117.2021484375
    },
    {
      "source": "data_processing",
      "target": "revenue",
      "value": 5.2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 139.34033203125,
      "targetWidth": 139.34033203125
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 3.6,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 97.66845703125,
      "targetWidth": 97.66845703125
    },
    {
      "source": "other_rev",
      "target": "revenue",
      "value": 1,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625
    },
    {
      "source": "revenue",
      "target": "net_revenue",
      "value": 10.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 274.77392578125,
      "targetWidth": 274.77392578125
    },
    {
      "source": "revenue",
      "target": "client_incentives",
      "value": 4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 108.08642578125,
      "targetWidth": 108.08642578125
    },
    {
      "source": "net_revenue",
      "target": "operating_profit",
      "value": 6.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 166.6875,
      "targetWidth": 166.6875
    },
    {
      "source": "net_revenue",
      "target": "operating_expenses",
      "value": 3.8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 108.08642578125,
      "targetWidth": 108.08642578125
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 5.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 138.0380859375,
      "targetWidth": 138.0380859375
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375
    },
    {
      "source": "operating_expenses",
      "target": "litigation",
      "value": 0.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.4,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625
    },
    {
      "source": "operating_expenses",
      "target": "network",
      "value": 0.2,
      "sourceOrder": 5,
      "targetOrder": 0,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.2,
      "sourceOrder": 6,
      "targetOrder": 0,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125
    },
    {
      "source": "other_inc",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 3.90673828125,
      "targetWidth": 5.208984375,
      "sourceOrder": 0,
      "targetOrder": 1
    }
  ],
  "layout": {
    "scale": 27.34716796875,
    "nodes": {
      "service": {
        "x": 363.32666015625,
        "y": 326.86376953125,
        "width": 72.92578125,
        "height": 117.2021484375
      },
      "data_processing": {
        "x": 363.32666015625,
        "y": 579.49951171875,
        "width": 72.92578125,
        "height": 139.34033203125
      },
      "international": {
        "x": 363.32666015625,
        "y": 830.8330078125,
        "width": 72.92578125,
        "height": 97.66845703125
      },
      "other_rev": {
        "x": 363.32666015625,
        "y": 1035.28564453125,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "revenue": {
        "x": 829.53076171875,
        "y": 425.83447265625,
        "width": 72.92578125,
        "height": 382.8603515625
      },
      "net_revenue": {
        "x": 1297.037109375,
        "y": 513.0849609375,
        "width": 72.92578125,
        "height": 274.77392578125
      },
      "client_incentives": {
        "x": 1297.037109375,
        "y": 894.64306640625,
        "width": 72.92578125,
        "height": 108.08642578125
      },
      "operating_profit": {
        "x": 1764.54345703125,
        "y": 432.345703125,
        "width": 72.92578125,
        "height": 166.6875
      },
      "operating_expenses": {
        "x": 1764.54345703125,
        "y": 773.5341796875,
        "width": 72.92578125,
        "height": 108.08642578125
      },
      "net_profit": {
        "x": 2230.74755859375,
        "y": 337.28173828125,
        "width": 72.92578125,
        "height": 143.2470703125
      },
      "tax": {
        "x": 2230.74755859375,
        "y": 658.9365234375,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "personnel": {
        "x": 2230.74755859375,
        "y": 815.2060546875,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "litigation": {
        "x": 2230.74755859375,
        "y": 935.0126953125,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "general_admin": {
        "x": 2230.74755859375,
        "y": 1027.47216796875,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "marketing": {
        "x": 2230.74755859375,
        "y": 1113.42041015625,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "da": {
        "x": 2230.74755859375,
        "y": 1200.6708984375,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "network": {
        "x": 2230.74755859375,
        "y": 1284.0146484375,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "professional_fees": {
        "x": 2230.74755859375,
        "y": 1368.66064453125,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "other_inc": {
        "x": 2104.4296875,
        "y": 535.22314453125,
        "width": 72.92578125,
        "height": 3.90673828125
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 230.49755859375,
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
                "text": "+9% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 362.232275390625,
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
            "x": 399.78955078125,
            "top": 483.13330078125,
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
                "text": "+15% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 601.845556640625,
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
            "x": 399.78955078125,
            "top": 734.466796875,
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
                "text": "+14% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 832.343115234375,
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
            "x": 399.78955078125,
            "top": 938.91943359375,
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
                "text": "+32% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 1026.377783203125,
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
      "revenue": {
        "blocks": []
      },
      "net_revenue": {
        "blocks": [
          {
            "x": 1333.5,
            "top": 362.0244140625,
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
                "text": "+14% Y/Y",
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
            "x": 1333.5,
            "top": 1017.05419921875,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1801.00634765625,
            "top": 243.52001953125,
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
                "text": "61% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "(6pp) Y/Y",
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
            "x": 1801.00634765625,
            "top": 895.9453125,
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
            "x": 2424.7822265625,
            "top": 341.1884765625,
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
                "text": "52% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "(3pp) Y/Y",
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
            "x": 2424.7822265625,
            "top": 644.61181640625,
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
      "personnel": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 823.01953125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Personnel ($1.7B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "litigation": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 927.850341796875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Litigation ($0.6B)",
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
            "x": 2316.69580078125,
            "top": 1018.3564453125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & admin ($0.5B)",
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
            "x": 2316.69580078125,
            "top": 1103.653564453125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing ($0.4B)",
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
            "x": 2316.69580078125,
            "top": 1189.601806640625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "D&A ($0.3B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "network": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1270.9921875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Network ($0.2B)",
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
            "x": 2316.69580078125,
            "top": 1354.987060546875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional fees ($0.2B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "other_inc": {
        "blocks": [
          {
            "x": 2140.892578125,
            "top": 549.5478515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#008f51"
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
      "label": "Payment Volume",
      "value": "8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+8%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Payment Volume\n+8% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          77,
          1189,
          204,
          148
        ]
      }
    },
    {
      "id": "cross_border_volume",
      "label": "Cross-Border Volume",
      "value": "12",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+12%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Cross-Border Volume\n+12% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          290,
          1189,
          292,
          148
        ]
      }
    },
    {
      "id": "processed_transactions",
      "label": "Processed Transactions",
      "value": "10",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+10%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Processed Transactions\n+10% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          590,
          1189,
          292,
          148
        ]
      }
    }
  ],
  "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1188.95068359375\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Payment</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"payment_volume\" x=\"155.618408203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+8%</text><text x=\"211.614990234375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"290.40087890625\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Cross-Border</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"cross_border_volume\" x=\"412.81201171875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+12%</text><text x=\"468.80859375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"589.91748046875\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Processed</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Transactions</text><text data-operating-metric=\"processed_transactions\" x=\"712.32861328125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+10%</text><text x=\"768.3251953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g>",
  "i18n": {
    "zh": {
      "name": "Visa · 2025 财年第三季度",
      "meta": {
        "title": "Visa 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 6 月"
      },
      "nodes": {
        "service": {
          "label": "服务",
          "notes": [
            "同比 +9%"
          ]
        },
        "data_processing": {
          "label": "数据处理",
          "notes": [
            "同比 +15%"
          ]
        },
        "international": {
          "label": "国际交易",
          "notes": [
            "同比 +14%"
          ]
        },
        "other_rev": {
          "label": "其他",
          "notes": [
            "同比 +32%"
          ]
        },
        "revenue": {
          "label": "",
          "notes": []
        },
        "net_revenue": {
          "label": "净收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "client_incentives": {
          "label": "客户激励",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 61%",
            "同比 -6 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 52%",
            "同比 -3 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "personnel": {
          "label": "人员",
          "notes": []
        },
        "litigation": {
          "label": "诉讼",
          "notes": []
        },
        "general_admin": {
          "label": "综合及行政",
          "notes": []
        },
        "marketing": {
          "label": "市场营销",
          "notes": []
        },
        "da": {
          "label": "折旧摊销",
          "notes": []
        },
        "network": {
          "label": "网络",
          "notes": []
        },
        "professional_fees": {
          "label": "专业服务费",
          "notes": []
        },
        "other_inc": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "service": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 230.49755859375,
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
                    "text": "同比 +9%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 362.232275390625,
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
                "x": 399.78955078125,
                "top": 483.13330078125,
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
                    "text": "同比 +15%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 601.845556640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "数据",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  },
                  {
                    "text": "处理",
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
                "x": 399.78955078125,
                "top": 734.466796875,
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
                    "text": "同比 +14%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 832.343115234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国际",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  },
                  {
                    "text": "交易",
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
                "x": 399.78955078125,
                "top": 938.91943359375,
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
                    "text": "同比 +32%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 1026.377783203125,
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
          "revenue": {
            "blocks": []
          },
          "net_revenue": {
            "blocks": [
              {
                "x": 1333.5,
                "top": 362.0244140625,
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
                    "text": "同比 +14%",
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
                "x": 1333.5,
                "top": 1017.05419921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "客户",
                    "size": 37.76513671875,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "激励",
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
                "x": 1801.00634765625,
                "top": 243.52001953125,
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
                    "text": "利润率 61%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 -6 个百分点",
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
                "x": 1801.00634765625,
                "top": 895.9453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "费用",
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
                "x": 2424.7822265625,
                "top": 341.1884765625,
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
                    "text": "利润率 52%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 -3 个百分点",
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
                "x": 2424.7822265625,
                "top": 644.61181640625,
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
          "personnel": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 823.01953125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "人员 ($1.7B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "litigation": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 927.850341796875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "诉讼 ($0.6B)",
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
                "x": 2316.69580078125,
                "top": 1018.3564453125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "综合及行政 ($0.5B)",
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
                "x": 2316.69580078125,
                "top": 1103.653564453125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "市场营销 ($0.4B)",
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
                "x": 2316.69580078125,
                "top": 1189.601806640625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "折旧摊销 ($0.3B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "network": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1270.9921875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "网络 ($0.2B)",
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
                "x": 2316.69580078125,
                "top": 1354.987060546875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业服务费 ($0.2B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "other_inc": {
            "blocks": [
              {
                "x": 2140.892578125,
                "top": 549.5478515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1188.95068359375\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">支付</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"payment_volume\" x=\"155.618408203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+8%</text><text x=\"211.614990234375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g><g><rect x=\"290.40087890625\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">跨境</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"cross_border_volume\" x=\"412.81201171875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+12%</text><text x=\"468.80859375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g><g><rect x=\"589.91748046875\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">处理</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易笔数</text><text data-operating-metric=\"processed_transactions\" x=\"712.32861328125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+10%</text><text x=\"768.3251953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g>"
    }
  }
});})();
