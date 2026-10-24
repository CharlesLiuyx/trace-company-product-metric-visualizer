(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q1-fy25",
  "name": "Visa · Q1 FY25",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q1-fy25.png",
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
    "logoY": 234.404296875,
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
      "value": 4.2,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$4.2B",
      "notes": [
        "+8% Y/Y"
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
        "+9% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 3.4,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.4B",
      "notes": [
        "+14% Y/Y"
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
        "+32% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "",
      "value": 13.2,
      "type": "hub",
      "col": 1,
      "order": 4,
      "valueText": "$13.2B",
      "notes": []
    },
    {
      "id": "net_revenue",
      "label": "Net revenue",
      "value": 9.5,
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$9.5B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 3.8,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($3.8B)",
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
        "66% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 3.1,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($3.1B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 5.1,
      "type": "profit",
      "col": 4,
      "order": 9,
      "valueText": "$5.1B",
      "notes": [
        "54% margin",
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
      "value": 1.8,
      "type": "cost",
      "col": 4,
      "order": 11,
      "valueText": "($1.8B)",
      "notes": []
    },
    {
      "id": "litigation",
      "label": "Litigation",
      "value": 0.044,
      "type": "cost",
      "col": 4,
      "order": 12,
      "valueText": "($44M)",
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
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 17,
      "valueText": "($0.1B)",
      "notes": []
    },
    {
      "id": "other_ded",
      "label": "Other",
      "type": "cost",
      "col": 4,
      "order": 11,
      "value": 0.034,
      "valueText": "($34M)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "revenue",
      "value": 4.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 125.015625,
      "targetWidth": 125.015625
    },
    {
      "source": "data_processing",
      "target": "revenue",
      "value": 4.7,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 140.642578125,
      "targetWidth": 140.642578125
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 3.4,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 101.5751953125,
      "targetWidth": 101.5751953125
    },
    {
      "source": "other_rev",
      "target": "revenue",
      "value": 0.9,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 27.34716796875,
      "targetWidth": 26.044921875
    },
    {
      "source": "revenue",
      "target": "net_revenue",
      "value": 9.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 281.28515625,
      "targetWidth": 281.28515625
    },
    {
      "source": "revenue",
      "target": "client_incentives",
      "value": 3.8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 111.9931640625,
      "targetWidth": 111.9931640625
    },
    {
      "source": "net_revenue",
      "target": "operating_profit",
      "value": 6.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 183.61669921875,
      "targetWidth": 183.61669921875,
      "linkTint": "#99cd99"
    },
    {
      "source": "net_revenue",
      "target": "operating_expenses",
      "value": 3.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 96.3662109375,
      "targetWidth": 96.3662109375
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 5.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 149.75830078125,
      "targetWidth": 151.060546875
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375
    },
    {
      "source": "operating_profit",
      "target": "other_ded",
      "value": 0.034,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 53.39208984375,
      "targetWidth": 54.6943359375
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.3,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625
    },
    {
      "source": "operating_expenses",
      "target": "network",
      "value": 0.2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.1,
      "sourceOrder": 5,
      "targetOrder": 0,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125
    },
    {
      "source": "operating_expenses",
      "target": "litigation",
      "value": 0.044,
      "sourceOrder": 6,
      "targetOrder": 0,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375
    }
  ],
  "layout": {
    "scale": 29.560986328125,
    "nodes": {
      "service": {
        "x": 368.53564453125,
        "y": 324.25927734375,
        "width": 72.92578125,
        "height": 125.015625
      },
      "data_processing": {
        "x": 368.53564453125,
        "y": 584.70849609375,
        "width": 72.92578125,
        "height": 140.642578125
      },
      "international": {
        "x": 368.53564453125,
        "y": 871.20263671875,
        "width": 72.92578125,
        "height": 101.5751953125
      },
      "other_rev": {
        "x": 368.53564453125,
        "y": 1112.1181640625,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "revenue": {
        "x": 842.55322265625,
        "y": 453.181640625,
        "width": 72.92578125,
        "height": 393.2783203125
      },
      "net_revenue": {
        "x": 1303.54833984375,
        "y": 541.734375,
        "width": 72.92578125,
        "height": 281.28515625
      },
      "client_incentives": {
        "x": 1303.54833984375,
        "y": 931.10595703125,
        "width": 72.92578125,
        "height": 111.9931640625
      },
      "operating_profit": {
        "x": 1769.75244140625,
        "y": 440.1591796875,
        "width": 72.92578125,
        "height": 183.61669921875
      },
      "operating_expenses": {
        "x": 1767.14794921875,
        "y": 817.810546875,
        "width": 72.92578125,
        "height": 96.3662109375
      },
      "net_profit": {
        "x": 2237.2587890625,
        "y": 313.84130859375,
        "width": 72.92578125,
        "height": 151.060546875
      },
      "tax": {
        "x": 2237.2587890625,
        "y": 653.7275390625,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "other_ded": {
        "x": 2237.2587890625,
        "y": 775.487548828125,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "personnel": {
        "x": 2237.2587890625,
        "y": 884.22509765625,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "general_admin": {
        "x": 2237.2587890625,
        "y": 1000.125,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "marketing": {
        "x": 2237.2587890625,
        "y": 1079.56201171875,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "da": {
        "x": 2237.2587890625,
        "y": 1152.48779296875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "network": {
        "x": 2237.2587890625,
        "y": 1225.41357421875,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "professional_fees": {
        "x": 2237.2587890625,
        "y": 1295.73486328125,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "litigation": {
        "x": 2237.2587890625,
        "y": 1363.45166015625,
        "width": 72.92578125,
        "height": 1.30224609375
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 403.6962890625,
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
                "text": "+8% Y/Y",
                "size": 26.044921875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 192.732421875,
            "top": 367.2333984375,
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
            "x": 403.6962890625,
            "top": 490.94677734375,
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
            "top": 610.75341796875,
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
            "x": 403.6962890625,
            "top": 774.83642578125,
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
            "x": 192.732421875,
            "top": 872.5048828125,
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
            "x": 403.6962890625,
            "top": 1014.44970703125,
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
            "x": 192.732421875,
            "top": 1102.48671875,
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
            "x": 1340.01123046875,
            "top": 394.58056640625,
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
            "x": 1340.01123046875,
            "top": 1058.72607421875,
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
            "x": 1806.21533203125,
            "top": 252.6357421875,
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
                "text": "66% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1803.61083984375,
            "top": 929.8037109375,
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
            "x": 2422.177734375,
            "top": 315.1435546875,
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
                "text": "54% margin",
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
            "x": 2422.177734375,
            "top": 622.4736328125,
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
            "x": 2422.177734375,
            "top": 726.6533203125,
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
            "x": 2319.30029296875,
            "top": 889.43408203125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Personnel ($1.8B)",
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
            "x": 2319.30029296875,
            "top": 989.70703125,
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
            "x": 2319.30029296875,
            "top": 1069.14404296875,
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
            "x": 2319.30029296875,
            "top": 1142.06982421875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "D&A ($0.3B)",
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
            "x": 2319.30029296875,
            "top": 1214.99560546875,
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
            "x": 2319.30029296875,
            "top": 1285.31689453125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional fees ($0.1B)",
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
            "x": 2319.30029296875,
            "top": 1353.03369140625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Litigation ($44M)",
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
  "operatingMetrics": [
    {
      "id": "payment_volume",
      "label": "Payment Volume",
      "value": "9",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+9%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Payment Volume\n+9% Y/Y",
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
      "value": "16",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+16%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Cross-Border Volume\n+16% Y/Y",
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
      "value": "11",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+11%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Processed Transactions\n+11% Y/Y",
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
  "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1188.95068359375\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Payment</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"payment_volume\" x=\"155.618408203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+9%</text><text x=\"211.614990234375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"290.40087890625\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Cross-Border</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"cross_border_volume\" x=\"412.81201171875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+16%</text><text x=\"468.80859375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"589.91748046875\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Processed</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Transactions</text><text data-operating-metric=\"processed_transactions\" x=\"712.32861328125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+11%</text><text x=\"768.3251953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g>",
  "i18n": {
    "zh": {
      "name": "Visa · 2025 财年第一季度",
      "meta": {
        "title": "Visa 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 12 月"
      },
      "nodes": {
        "service": {
          "label": "服务",
          "notes": [
            "同比 +8%"
          ]
        },
        "data_processing": {
          "label": "数据处理",
          "notes": [
            "同比 +9%"
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
            "利润率 66%",
            "同比 -3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 54%",
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
        "other_ded": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "service": {
            "blocks": [
              {
                "x": 403.6962890625,
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
                    "text": "同比 +8%",
                    "size": 26.044921875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 192.732421875,
                "top": 367.2333984375,
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
                "x": 403.6962890625,
                "top": 490.94677734375,
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
                "top": 631.75341796875,
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
                "x": 403.6962890625,
                "top": 774.83642578125,
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
                "x": 192.732421875,
                "top": 898.7048828125,
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
                "x": 403.6962890625,
                "top": 1014.44970703125,
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
                "x": 192.732421875,
                "top": 1102.48671875,
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
                "x": 1340.01123046875,
                "top": 394.58056640625,
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
                "x": 1340.01123046875,
                "top": 1058.72607421875,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1806.21533203125,
                "top": 252.6357421875,
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
                    "text": "利润率 66%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1803.61083984375,
                "top": 929.8037109375,
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
                "x": 2422.177734375,
                "top": 315.1435546875,
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
                    "text": "利润率 54%",
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
                "x": 2422.177734375,
                "top": 622.4736328125,
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
                "x": 2422.177734375,
                "top": 726.6533203125,
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
                "x": 2319.30029296875,
                "top": 889.43408203125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "人员 ($1.8B)",
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
                "x": 2319.30029296875,
                "top": 989.70703125,
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
                "x": 2319.30029296875,
                "top": 1069.14404296875,
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
                "x": 2319.30029296875,
                "top": 1142.06982421875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "折旧摊销 ($0.3B)",
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
                "x": 2319.30029296875,
                "top": 1214.99560546875,
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
                "x": 2319.30029296875,
                "top": 1285.31689453125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业服务费 ($0.1B)",
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
                "x": 2319.30029296875,
                "top": 1353.03369140625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "诉讼 ($44M)",
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
      "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1188.95068359375\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">支付</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"payment_volume\" x=\"155.618408203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+9%</text><text x=\"211.614990234375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g><g><rect x=\"290.40087890625\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">跨境</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"cross_border_volume\" x=\"412.81201171875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+16%</text><text x=\"468.80859375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g><g><rect x=\"589.91748046875\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">处理</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易笔数</text><text data-operating-metric=\"processed_transactions\" x=\"712.32861328125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+11%</text><text x=\"768.3251953125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g>"
    }
  }
});})();
