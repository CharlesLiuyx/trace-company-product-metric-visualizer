(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q2-fy25",
  "name": "Visa · Q2 FY25",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/visa-q2-fy25.png",
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
      "value": 4.4,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$4.4B",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "data_processing",
      "label": "Data processing",
      "value": 4.7,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.7B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 3.3,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.3B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "other_rev",
      "label": "Other",
      "value": 0.9,
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$0.9B",
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "",
      "value": 13.3,
      "type": "hub",
      "col": 1,
      "order": 4,
      "valueText": "$13.3B",
      "notes": []
    },
    {
      "id": "net_revenue",
      "label": "Net revenue",
      "value": 9.6,
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$9.6B",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 3.7,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($3.7B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 5.4,
      "type": "profit",
      "col": 3,
      "order": 7,
      "valueText": "$5.4B",
      "notes": [
        "57% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.2,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($4.2B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 4.6,
      "type": "profit",
      "col": 4,
      "order": 9,
      "valueText": "$4.6B",
      "notes": [
        "48% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.9,
      "type": "cost",
      "col": 4,
      "order": 10,
      "valueText": "($0.9B)",
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
      "value": 1.0,
      "type": "cost",
      "col": 4,
      "order": 12,
      "valueText": "($1.0B)",
      "notes": []
    },
    {
      "id": "general_admin",
      "label": "General & admin",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 13,
      "valueText": "($0.4B)",
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
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "revenue",
      "value": 4.4,
      "sourceWidth": 128.92236328125,
      "targetWidth": 128.92236328125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_processing",
      "target": "revenue",
      "value": 4.7,
      "sourceWidth": 136.73583984375,
      "targetWidth": 136.73583984375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 3.3,
      "sourceWidth": 95.06396484375,
      "targetWidth": 95.06396484375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_rev",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 27.34716796875,
      "targetWidth": 26.044921875,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "net_revenue",
      "value": 9.6,
      "sourceWidth": 278.6806640625,
      "targetWidth": 278.6806640625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "client_incentives",
      "value": 3.7,
      "sourceWidth": 108.08642578125,
      "targetWidth": 108.08642578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "net_revenue",
      "target": "operating_profit",
      "value": 5.4,
      "sourceWidth": 158.8740234375,
      "targetWidth": 158.8740234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "net_revenue",
      "target": "operating_expenses",
      "value": 4.2,
      "sourceWidth": 119.806640625,
      "targetWidth": 121.10888671875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.6,
      "sourceWidth": 134.13134765625,
      "targetWidth": 134.13134765625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.9,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.7,
      "sourceWidth": 48.18310546875,
      "targetWidth": 48.18310546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "litigation",
      "value": 1.0,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.4,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.4,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.3,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "network",
      "value": 0.2,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.2,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 29.040087890625,
    "nodes": {
      "service": {
        "x": 364.62890625,
        "y": 343.79296875,
        "width": 72.92578125,
        "height": 128.92236328125
      },
      "data_processing": {
        "x": 364.62890625,
        "y": 604.2421875,
        "width": 72.92578125,
        "height": 136.73583984375
      },
      "international": {
        "x": 364.62890625,
        "y": 873.80712890625,
        "width": 72.92578125,
        "height": 95.06396484375
      },
      "other_rev": {
        "x": 364.62890625,
        "y": 1095.18896484375,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "revenue": {
        "x": 829.53076171875,
        "y": 451.87939453125,
        "width": 72.92578125,
        "height": 386.76708984375
      },
      "net_revenue": {
        "x": 1299.6416015625,
        "y": 513.0849609375,
        "width": 72.92578125,
        "height": 278.6806640625
      },
      "client_incentives": {
        "x": 1299.6416015625,
        "y": 907.66552734375,
        "width": 72.92578125,
        "height": 108.08642578125
      },
      "operating_profit": {
        "x": 1767.14794921875,
        "y": 449.27490234375,
        "width": 72.92578125,
        "height": 158.8740234375
      },
      "operating_expenses": {
        "x": 1768.4501953125,
        "y": 768.3251953125,
        "width": 72.92578125,
        "height": 121.10888671875
      },
      "net_profit": {
        "x": 2233.35205078125,
        "y": 345.09521484375,
        "width": 72.92578125,
        "height": 134.13134765625
      },
      "tax": {
        "x": 2233.35205078125,
        "y": 686.28369140625,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "personnel": {
        "x": 2233.35205078125,
        "y": 820.4150390625,
        "width": 72.92578125,
        "height": 48.18310546875
      },
      "litigation": {
        "x": 2233.35205078125,
        "y": 941.52392578125,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "general_admin": {
        "x": 2233.35205078125,
        "y": 1039.1923828125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "marketing": {
        "x": 2233.35205078125,
        "y": 1122.5361328125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "da": {
        "x": 2233.35205078125,
        "y": 1203.275390625,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "network": {
        "x": 2233.35205078125,
        "y": 1285.31689453125,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "professional_fees": {
        "x": 2233.35205078125,
        "y": 1366.05615234375,
        "width": 72.92578125,
        "height": 3.90673828125
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 401.091796875,
            "top": 247.4267578125,
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
            "x": 192.732421875,
            "top": 384.813720703125,
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
            "x": 401.091796875,
            "top": 507.8759765625,
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
            "x": 192.732421875,
            "top": 625.729248046875,
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
            "x": 401.091796875,
            "top": 777.44091796875,
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
            "x": 192.732421875,
            "top": 874.458251953125,
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
            "x": 401.091796875,
            "top": 998.82275390625,
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
            "x": 192.732421875,
            "top": 1085.422119140625,
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
            "x": 1336.1044921875,
            "top": 364.62890625,
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
                "text": "+9% Y/Y",
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
            "x": 1336.1044921875,
            "top": 1026.169921875,
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
            "x": 1803.61083984375,
            "top": 261.75146484375,
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
                "text": "57% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1804.9130859375,
            "top": 899.85205078125,
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
            "x": 2426.08447265625,
            "top": 347.69970703125,
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
                "text": "48% margin",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "(5pp) Y/Y",
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
            "x": 2426.08447265625,
            "top": 660.23876953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
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
      "personnel": {
        "blocks": [
          {
            "x": 2317.998046875,
            "top": 827.577392578125,
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
            "x": 2317.998046875,
            "top": 938.91943359375,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Litigation ($1.0B)",
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
            "x": 2317.998046875,
            "top": 1028.123291015625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & admin ($0.4B)",
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
            "x": 2317.998046875,
            "top": 1111.467041015625,
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
            "x": 2317.998046875,
            "top": 1190.904052734375,
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
            "x": 2317.998046875,
            "top": 1271.643310546875,
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
            "x": 2317.998046875,
            "top": 1351.080322265625,
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
      "value": "13",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+13%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Cross-Border Volume\n+13% Y/Y",
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
      "value": "9",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+9%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Processed Transactions\n+9% Y/Y",
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
  "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1188.95068359375\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Payment</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"payment_volume\" x=\"155.618408203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+8%</text><text x=\"211.614990234375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"290.40087890625\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Cross-Border</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"cross_border_volume\" x=\"412.81201171875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+13%</text><text x=\"468.80859375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"589.91748046875\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Processed</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Transactions</text><text data-operating-metric=\"processed_transactions\" x=\"712.32861328125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+9%</text><text x=\"768.3251953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g>",
  "i18n": {
    "zh": {
      "name": "Visa · 2025 财年第二季度",
      "meta": {
        "title": "Visa 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 3 月"
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
            "同比 +10%"
          ]
        },
        "international": {
          "label": "国际交易",
          "notes": [
            "同比 +10%"
          ]
        },
        "other_rev": {
          "label": "其他",
          "notes": [
            "同比 +24%"
          ]
        },
        "revenue": {
          "label": "",
          "notes": []
        },
        "net_revenue": {
          "label": "净收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "client_incentives": {
          "label": "客户激励",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 57%",
            "同比 -4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 48%",
            "同比 -5 个百分点"
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
        }
      },
      "layout": {
        "labels": {
          "service": {
            "blocks": [
              {
                "x": 401.091796875,
                "top": 247.4267578125,
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
                "x": 192.732421875,
                "top": 384.813720703125,
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
                "x": 401.091796875,
                "top": 507.8759765625,
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
                "x": 192.732421875,
                "top": 625.729248046875,
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
                "x": 401.091796875,
                "top": 777.44091796875,
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
                "x": 192.732421875,
                "top": 874.458251953125,
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
                "x": 401.091796875,
                "top": 998.82275390625,
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
                "x": 192.732421875,
                "top": 1085.422119140625,
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
                "x": 1336.1044921875,
                "top": 364.62890625,
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
                    "text": "同比 +9%",
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
                "x": 1336.1044921875,
                "top": 1026.169921875,
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
                "x": 1803.61083984375,
                "top": 261.75146484375,
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
                    "text": "利润率 57%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1804.9130859375,
                "top": 899.85205078125,
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
                "x": 2426.08447265625,
                "top": 347.69970703125,
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
                    "text": "利润率 48%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 -5 个百分点",
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
                "x": 2426.08447265625,
                "top": 660.23876953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
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
          "personnel": {
            "blocks": [
              {
                "x": 2317.998046875,
                "top": 827.577392578125,
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
                "x": 2317.998046875,
                "top": 938.91943359375,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "诉讼 ($1.0B)",
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
                "x": 2317.998046875,
                "top": 1028.123291015625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "综合及行政 ($0.4B)",
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
                "x": 2317.998046875,
                "top": 1111.467041015625,
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
                "x": 2317.998046875,
                "top": 1190.904052734375,
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
                "x": 2317.998046875,
                "top": 1271.643310546875,
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
                "x": 2317.998046875,
                "top": 1351.080322265625,
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
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1188.95068359375\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">支付</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"payment_volume\" x=\"155.618408203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+8%</text><text x=\"211.614990234375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g><g><rect x=\"290.40087890625\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">跨境</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"cross_border_volume\" x=\"412.81201171875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+13%</text><text x=\"468.80859375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g><g><rect x=\"589.91748046875\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">处理</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易笔数</text><text data-operating-metric=\"processed_transactions\" x=\"712.32861328125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+9%</text><text x=\"768.3251953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g>"
    }
  }
});})();
