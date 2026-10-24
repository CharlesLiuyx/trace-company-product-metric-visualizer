(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q4-fy24",
  "name": "Visa · Q4 FY24",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "periodX": 2480.77880859375,
    "periodY": 154.96728515625,
    "periodNoteY": 199.24365234375,
    "logoWidth": 377.6513671875,
    "logoHeight": 143.2470703125,
    "logoY": 221.3818359375,
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
      "value": 4.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.6B",
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 3.5,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.5B",
      "notes": [
        "+9% Y/Y"
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
        "+30% Y/Y"
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
        "+12% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 3.6,
      "type": "cost",
      "col": 2,
      "order": 6,
      "valueText": "($3.6B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 6.3,
      "type": "profit",
      "col": 3,
      "order": 7,
      "valueText": "$6.3B",
      "notes": [
        "66% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 3.3,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($3.3B)",
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
        "55% margin",
        "+1pp Y/Y"
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
      "value": 1.6,
      "type": "cost",
      "col": 4,
      "order": 11,
      "valueText": "($1.6B)",
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
      "value": 0.6,
      "type": "cost",
      "col": 4,
      "order": 14,
      "valueText": "($0.6B)",
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
      "id": "other_income",
      "label": "Other",
      "type": "profit",
      "col": 3,
      "order": 0,
      "value": 0.023,
      "valueText": "$23M",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "revenue",
      "value": 4.2,
      "sourceWidth": 122.4111328125,
      "targetWidth": 122.4111328125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_processing",
      "target": "revenue",
      "value": 4.6,
      "sourceWidth": 132.8291015625,
      "targetWidth": 132.8291015625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 3.5,
      "sourceWidth": 100.27294921875,
      "targetWidth": 100.27294921875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_rev",
      "target": "revenue",
      "value": 1,
      "sourceWidth": 28.6494140625,
      "targetWidth": 24.74267578125,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "net_revenue",
      "value": 9.6,
      "sourceWidth": 276.076171875,
      "targetWidth": 276.076171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "client_incentives",
      "value": 3.6,
      "sourceWidth": 104.1796875,
      "targetWidth": 105.48193359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "net_revenue",
      "target": "operating_profit",
      "value": 6.3,
      "sourceWidth": 182.314453125,
      "targetWidth": 182.314453125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "net_revenue",
      "target": "operating_expenses",
      "value": 3.3,
      "sourceWidth": 93.76171875,
      "targetWidth": 93.76171875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 5.3,
      "sourceWidth": 152.36279296875,
      "targetWidth": 151.060546875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.1,
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.6,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "sourceOrder": 0,
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
      "value": 0.6,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.3,
      "sourceWidth": 5.860107421875,
      "targetWidth": 5.860107421875,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "network",
      "value": 0.2,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.2,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.023,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 28.779638671875002,
    "nodes": {
      "service": {
        "x": 367.2333984375,
        "y": 322.95703125,
        "width": 72.92578125,
        "height": 122.4111328125
      },
      "data_processing": {
        "x": 367.2333984375,
        "y": 587.31298828125,
        "width": 72.92578125,
        "height": 132.8291015625
      },
      "international": {
        "x": 367.2333984375,
        "y": 855.57568359375,
        "width": 72.92578125,
        "height": 100.27294921875
      },
      "other_rev": {
        "x": 367.2333984375,
        "y": 1091.2822265625,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "revenue": {
        "x": 829.53076171875,
        "y": 450.5771484375,
        "width": 72.92578125,
        "height": 380.255859375
      },
      "net_revenue": {
        "x": 1299.6416015625,
        "y": 532.61865234375,
        "width": 72.92578125,
        "height": 276.076171875
      },
      "client_incentives": {
        "x": 1299.6416015625,
        "y": 921.990234375,
        "width": 72.92578125,
        "height": 105.48193359375
      },
      "operating_profit": {
        "x": 1764.54345703125,
        "y": 434.9501953125,
        "width": 72.92578125,
        "height": 182.314453125
      },
      "operating_expenses": {
        "x": 1767.14794921875,
        "y": 820.4150390625,
        "width": 72.92578125,
        "height": 93.76171875
      },
      "net_profit": {
        "x": 2235.95654296875,
        "y": 342.49072265625,
        "width": 72.92578125,
        "height": 152.36279296875
      },
      "tax": {
        "x": 2235.95654296875,
        "y": 661.541015625,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "personnel": {
        "x": 2235.95654296875,
        "y": 828.228515625,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "marketing": {
        "x": 2235.95654296875,
        "y": 961.0576171875,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "general_admin": {
        "x": 2235.95654296875,
        "y": 1065.2373046875,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "da": {
        "x": 2235.95654296875,
        "y": 1164.2080078125,
        "width": 72.92578125,
        "height": 5.860107421875
      },
      "network": {
        "x": 2235.95654296875,
        "y": 1265.783203125,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "professional_fees": {
        "x": 2235.95654296875,
        "y": 1363.45166015625,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "other_income": {
        "x": 2094.01171875,
        "y": 308.63232421875,
        "width": 72.92578125,
        "height": 1.30224609375
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 227.89306640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 188.82568359375,
            "top": 360.72216796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Service",
                "size": 39.0673828125,
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
            "top": 492.2490234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 188.82568359375,
            "top": 606.8466796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Data",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "processing",
                "size": 39.0673828125,
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
            "top": 760.51171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 188.82568359375,
            "top": 858.831298828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "International",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "transaction",
                "size": 39.0673828125,
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
            "top": 996.21826171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+30% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 188.82568359375,
            "top": 1082.16650390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
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
            "top": 385.46484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net revenue",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34716796875,
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
            "top": 1037.89013671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Client",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "incentives",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "top": 247.4267578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "66% margin",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
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
            "top": 924.5947265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "x": 2418.27099609375,
            "top": 343.79296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "55% margin",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
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
            "top": 642.00732421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
      "other_income": {
        "blocks": [
          {
            "x": 2130.474609375,
            "top": 218.77734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2320.6025390625,
            "top": 834.73974609375,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Personnel $value",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 600
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2320.6025390625,
            "top": 951.94189453125,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Marketing $value",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 600
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2320.6025390625,
            "top": 1054.168212890625,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General & admin $value",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 600
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2320.6025390625,
            "top": 1150.2088623046875,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "D&A $value",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 600
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "network": {
        "blocks": [
          {
            "x": 2320.6025390625,
            "top": 1252.7607421875,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Network $value",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 600
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2320.6025390625,
            "top": 1349.126953125,
            "anchor": "start",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Professional fees $value",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 600
              }
            ],
            "semanticRole": "centered-side-label"
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
  "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1188.95068359375\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Payment</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"payment_volume\" x=\"159.525146484375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+8%</text><text x=\"215.521728515625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"290.40087890625\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Cross-Border</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"cross_border_volume\" x=\"416.71875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+13%</text><text x=\"472.71533203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"589.91748046875\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Processed</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Transactions</text><text data-operating-metric=\"processed_transactions\" x=\"716.2353515625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+10%</text><text x=\"772.23193359375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">Y/Y</text></g>",
  "i18n": {
    "zh": {
      "name": "Visa · 2024 财年第四季度",
      "meta": {
        "title": "Visa 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 9 月"
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
            "同比 +8%"
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
            "同比 +30%"
          ]
        },
        "revenue": {
          "label": "",
          "notes": []
        },
        "net_revenue": {
          "label": "净收入",
          "notes": [
            "同比 +12%"
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
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 55%",
            "同比 +1 个百分点"
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
                "x": 403.6962890625,
                "top": 227.89306640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 188.82568359375,
                "top": 360.72216796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
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
                "top": 492.2490234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 188.82568359375,
                "top": 606.8466796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "数据",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 700
                  },
                  {
                    "text": "处理",
                    "size": 39.0673828125,
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
                "top": 760.51171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 188.82568359375,
                "top": 858.831298828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 700
                  },
                  {
                    "text": "交易",
                    "size": 39.0673828125,
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
                "top": 996.21826171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +30%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 188.82568359375,
                "top": 1082.16650390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
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
                "top": 385.46484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34716796875,
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
                "top": 1037.89013671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "客户",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "激励",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "top": 247.4267578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 66%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
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
                "top": 924.5947265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "x": 2418.27099609375,
                "top": 343.79296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 55%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
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
                "top": 642.00732421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
          "other_income": {
            "blocks": [
              {
                "x": 2130.474609375,
                "top": 218.77734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2320.6025390625,
                "top": 834.73974609375,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "人员 $value",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 600
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2320.6025390625,
                "top": 951.94189453125,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "市场营销 $value",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 600
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2320.6025390625,
                "top": 1054.168212890625,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "综合及行政 $value",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 600
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2320.6025390625,
                "top": 1150.2088623046875,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧摊销 $value",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 600
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "network": {
            "blocks": [
              {
                "x": 2320.6025390625,
                "top": 1252.7607421875,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "网络 $value",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 600
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2320.6025390625,
                "top": 1349.126953125,
                "anchor": "start",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "专业服务费 $value",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 600
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1188.95068359375\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">支付</text><text x=\"179.058837890625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"payment_volume\" x=\"159.525146484375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+8%</text><text x=\"215.521728515625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g><g><rect x=\"290.40087890625\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">跨境</text><text x=\"436.25244140625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"cross_border_volume\" x=\"416.71875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+13%</text><text x=\"472.71533203125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g><g><rect x=\"589.91748046875\" y=\"1188.95068359375\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">处理</text><text x=\"735.76904296875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">交易笔数</text><text data-operating-metric=\"processed_transactions\" x=\"716.2353515625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">+10%</text><text x=\"772.23193359375\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"white\">同比</text></g>"
    }
  }
});})();