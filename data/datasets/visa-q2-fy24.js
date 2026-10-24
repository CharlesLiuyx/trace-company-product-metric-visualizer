(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q2-fy24",
  "name": "Visa · Q2 FY24",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 119.806640625,
    "titleWeight": 800,
    "periodX": 2483.38330078125,
    "periodY": 156.26953125,
    "periodNoteY": 197.94140625,
    "logoWidth": 414.5086018142008,
    "logoHeight": 157.22740068814514,
    "logoY": 277.7348393024711,
    "logoViewBox": "0 0 290 110",
    "logoSvg": "<text x=\"145\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"115\" font-weight=\"900\" font-style=\"italic\" fill=\"#002080\">VISA</text>",
    "logoX": 645.9484868626838
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
      "value": 4,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$4.0B",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "data_processing",
      "label": "Data processing",
      "value": 4.3,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.3B",
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 3,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.0B",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "other_rev",
      "label": "Other",
      "value": 0.8,
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$0.8B",
      "notes": [
        "+37% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "",
      "value": 12.1,
      "type": "hub",
      "col": 1,
      "order": 4,
      "valueText": "$12.1B",
      "notes": []
    },
    {
      "id": "net_revenue",
      "label": "Net revenue",
      "value": 8.8,
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$8.8B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 3.3,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($3.3B)",
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
        "61% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 3.4,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($3.4B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 4.7,
      "type": "profit",
      "col": 4,
      "order": 9,
      "valueText": "$4.7B",
      "notes": [
        "53% margin",
        "(1pp) Y/Y"
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
      "value": 1.6,
      "type": "cost",
      "col": 4,
      "order": 11,
      "valueText": "($1.6B)",
      "notes": []
    },
    {
      "id": "litigation",
      "label": "Litigation",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 12,
      "valueText": "($0.4B)",
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
      "value": 0.3,
      "type": "cost",
      "col": 4,
      "order": 14,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.2,
      "type": "cost",
      "col": 4,
      "order": 15,
      "valueText": "($0.2B)",
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
      "id": "other_income",
      "label": "Other",
      "type": "profit",
      "col": 3,
      "order": 10,
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "revenue",
      "value": 4,
      "sourceWidth": 117.2021484375,
      "targetWidth": 115.89990234375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_processing",
      "target": "revenue",
      "value": 4.3,
      "sourceWidth": 123.71337890625,
      "targetWidth": 123.71337890625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 3,
      "sourceWidth": 85.9482421875,
      "targetWidth": 85.9482421875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_rev",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "net_revenue",
      "value": 8.8,
      "sourceWidth": 252.6357421875,
      "targetWidth": 253.93798828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "client_incentives",
      "value": 3.3,
      "sourceWidth": 95.06396484375,
      "targetWidth": 93.76171875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "net_revenue",
      "target": "operating_profit",
      "value": 5.4,
      "sourceWidth": 154.96728515625,
      "targetWidth": 154.96728515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "net_revenue",
      "target": "operating_expenses",
      "value": 3.4,
      "sourceWidth": 98.970703125,
      "targetWidth": 98.970703125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.5,
      "sourceWidth": 130.224609375,
      "targetWidth": 130.224609375,
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
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.6,
      "sourceWidth": 45.57861328125,
      "targetWidth": 45.57861328125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.5,
      "sourceWidth": 14.32470703125,
      "targetWidth": 13.0224609375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceWidth": 10.41796875,
      "targetWidth": 9.11572265625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.2,
      "sourceWidth": 7.8134765625,
      "targetWidth": 6.51123046875,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "network",
      "value": 0.2,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.2,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "litigation",
      "value": 0.4,
      "sourceWidth": 10.41796875,
      "targetWidth": 13.0224609375,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 28.6494140625,
    "nodes": {
      "service": {
        "x": 363.32666015625,
        "y": 408.9052734375,
        "width": 72.92578125,
        "height": 117.2021484375
      },
      "data_processing": {
        "x": 363.32666015625,
        "y": 671.958984375,
        "width": 72.92578125,
        "height": 123.71337890625
      },
      "international": {
        "x": 363.32666015625,
        "y": 938.91943359375,
        "width": 72.92578125,
        "height": 85.9482421875
      },
      "other_rev": {
        "x": 363.32666015625,
        "y": 1177.23046875,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "revenue": {
        "x": 826.92626953125,
        "y": 595.12646484375,
        "width": 72.92578125,
        "height": 347.69970703125
      },
      "net_revenue": {
        "x": 1291.828125,
        "y": 520.8984375,
        "width": 72.92578125,
        "height": 253.93798828125
      },
      "client_incentives": {
        "x": 1294.4326171875,
        "y": 935.0126953125,
        "width": 72.92578125,
        "height": 93.76171875
      },
      "operating_profit": {
        "x": 1767.14794921875,
        "y": 437.5546875,
        "width": 72.92578125,
        "height": 154.96728515625
      },
      "operating_expenses": {
        "x": 1767.14794921875,
        "y": 764.41845703125,
        "width": 72.92578125,
        "height": 98.970703125
      },
      "net_profit": {
        "x": 2230.74755859375,
        "y": 368.53564453125,
        "width": 72.92578125,
        "height": 135.43359375
      },
      "tax": {
        "x": 2230.74755859375,
        "y": 688.88818359375,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "personnel": {
        "x": 2230.74755859375,
        "y": 871.20263671875,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "general_admin": {
        "x": 2230.74755859375,
        "y": 989.70703125,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "marketing": {
        "x": 2230.74755859375,
        "y": 1080.8642578125,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "da": {
        "x": 2230.74755859375,
        "y": 1158.9990234375,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "network": {
        "x": 2230.74755859375,
        "y": 1233.22705078125,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "professional_fees": {
        "x": 2230.74755859375,
        "y": 1291.828125,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "litigation": {
        "x": 2230.74755859375,
        "y": 1350.42919921875,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "other_income": {
        "x": 2108.33642578125,
        "y": 552.15234375,
        "width": 72.92578125,
        "height": 5.208984375
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 315.1435546875,
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
            "x": 192.732421875,
            "top": 444.27490234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "semanticRole": "centered-side-label",
            "lines": [
              {
                "text": "Service",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              }
            ]
          }
        ]
      },
      "data_processing": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 584.70849609375,
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
                "text": "+12% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 192.732421875,
            "top": 686.40615234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "semanticRole": "centered-side-label",
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
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 850.36669921875,
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
            "top": 937.6171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "semanticRole": "centered-side-label",
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
            ]
          }
        ]
      },
      "other_rev": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 1084.77099609375,
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
                "text": "+37% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 192.732421875,
            "top": 1165.0259765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "semanticRole": "centered-side-label",
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "color": "#00268f",
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": []
      },
      "net_revenue": {
        "blocks": [
          {
            "x": 1328.291015625,
            "top": 376.34912109375,
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
                "text": "+10% Y/Y",
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
            "x": 1328.291015625,
            "top": 1050.91259765625,
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
            "top": 257.8447265625,
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
            "x": 1803.61083984375,
            "top": 884.22509765625,
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
            "x": 2419.5732421875,
            "top": 376.34912109375,
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
                "text": "(1pp) Y/Y",
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
            "x": 2414.3642578125,
            "top": 675.86572265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 28.6494140625,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 28.6494140625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2147.40380859375,
            "top": 572.98828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 28.6494140625,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 28.6494140625,
                "color": "#008f51",
                "weight": 400
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2315.3935546875,
            "top": 880.969482421875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Personnel ($1.6B)",
                "size": 24.74267578125,
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
            "x": 2315.3935546875,
            "top": 983.19580078125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & admin ($0.5B)",
                "size": 24.74267578125,
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
            "x": 2315.3935546875,
            "top": 1072.399658203125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing ($0.3B)",
                "size": 24.74267578125,
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
            "x": 2315.3935546875,
            "top": 1149.232177734375,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "D&A ($0.2B)",
                "size": 24.74267578125,
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
            "x": 2315.3935546875,
            "top": 1222.157958984375,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Network ($0.2B)",
                "size": 24.74267578125,
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
            "x": 2315.3935546875,
            "top": 1280.759033203125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional fees ($0.2B)",
                "size": 24.74267578125,
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
            "x": 2315.3935546875,
            "top": 1343.91796875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Litigation ($0.4B)",
                "size": 24.74267578125,
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
      "name": "Visa · 2024 财年第二季度",
      "meta": {
        "title": "Visa 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 3 月"
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
            "同比 +12%"
          ]
        },
        "international": {
          "label": "国际交易",
          "notes": [
            "同比 +9%"
          ]
        },
        "other_rev": {
          "label": "其他",
          "notes": [
            "同比 +37%"
          ]
        },
        "revenue": {
          "label": "",
          "notes": []
        },
        "net_revenue": {
          "label": "净收入",
          "notes": [
            "同比 +10%"
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
            "利润率 53%",
            "同比 -1 个百分点"
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
        "other_income": {
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
                "top": 315.1435546875,
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
                "x": 192.732421875,
                "top": 444.27490234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "semanticRole": "centered-side-label",
                "lines": [
                  {
                    "text": "服务",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "data_processing": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 584.70849609375,
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
                    "text": "同比 +12%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 192.732421875,
                "top": 686.40615234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "semanticRole": "centered-side-label",
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
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 850.36669921875,
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
                "top": 937.6171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "semanticRole": "centered-side-label",
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
                ]
              }
            ]
          },
          "other_rev": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 1084.77099609375,
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
                    "text": "同比 +37%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 192.732421875,
                "top": 1165.0259765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "semanticRole": "centered-side-label",
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "color": "#00268f",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": []
          },
          "net_revenue": {
            "blocks": [
              {
                "x": 1328.291015625,
                "top": 376.34912109375,
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
                    "text": "同比 +10%",
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
                "x": 1328.291015625,
                "top": 1050.91259765625,
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
                "top": 257.8447265625,
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
                "x": 1803.61083984375,
                "top": 884.22509765625,
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
                "x": 2419.5732421875,
                "top": 376.34912109375,
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
                    "text": "同比 -1 个百分点",
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
                "x": 2414.3642578125,
                "top": 675.86572265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 28.6494140625,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 28.6494140625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2147.40380859375,
                "top": 572.98828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 28.6494140625,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 28.6494140625,
                    "color": "#008f51",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2315.3935546875,
                "top": 880.969482421875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "人员 ($1.6B)",
                    "size": 24.74267578125,
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
                "x": 2315.3935546875,
                "top": 983.19580078125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "综合及行政 ($0.5B)",
                    "size": 24.74267578125,
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
                "x": 2315.3935546875,
                "top": 1072.399658203125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "市场营销 ($0.3B)",
                    "size": 24.74267578125,
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
                "x": 2315.3935546875,
                "top": 1149.232177734375,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "折旧摊销 ($0.2B)",
                    "size": 24.74267578125,
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
                "x": 2315.3935546875,
                "top": 1222.157958984375,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "网络 ($0.2B)",
                    "size": 24.74267578125,
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
                "x": 2315.3935546875,
                "top": 1280.759033203125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业服务费 ($0.2B)",
                    "size": 24.74267578125,
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
                "x": 2315.3935546875,
                "top": 1343.91796875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "诉讼 ($0.4B)",
                    "size": 24.74267578125,
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
