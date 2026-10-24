(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q3-fy24",
  "name": "Visa · Q3 FY24",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q3-fy24.png",
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
    "logoWidth": 386.6667,
    "logoHeight": 146.6667,
    "logoY": 279.7,
    "logoViewBox": "0 0 290 110",
    "logoSvg": "<text x=\"145\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"115\" font-weight=\"900\" font-style=\"italic\" fill=\"#002080\">VISA</text>",
    "titleTextLength": 1980,
    "logoX": 665.6
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
        "+8% Y/Y"
      ]
    },
    {
      "id": "data_processing",
      "label": "Data processing",
      "value": 4.5,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.5B",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 3.2,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.2B",
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
        "+31% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "",
      "value": 12.5,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$12.5B",
      "notes": []
    },
    {
      "id": "net_revenue",
      "label": "Net revenue",
      "value": 8.9,
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$8.9B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 3.5,
      "type": "cost",
      "col": 2,
      "order": 1,
      "valueText": "($3.5B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 5.9,
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$5.9B",
      "notes": [
        "67% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 3,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($3.0B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 4.9,
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$4.9B",
      "notes": [
        "55% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.1,
      "type": "cost",
      "col": 4,
      "order": 1,
      "valueText": "($1.1B)",
      "notes": []
    },
    {
      "id": "other_inc",
      "label": "Other",
      "value": 0.1,
      "type": "profit",
      "col": 3,
      "order": 2,
      "valueText": "$0.1B",
      "notes": []
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 1.6,
      "type": "cost",
      "col": 5,
      "order": 0,
      "valueText": "($1.6B)",
      "notes": []
    },
    {
      "id": "network",
      "label": "Network",
      "value": 0.2,
      "type": "cost",
      "col": 5,
      "order": 1,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.4,
      "type": "cost",
      "col": 5,
      "order": 2,
      "valueText": "($0.4B)",
      "notes": []
    },
    {
      "id": "professional_fees",
      "label": "Professional fees",
      "value": 0.2,
      "type": "cost",
      "col": 5,
      "order": 3,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 4,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "general_admin",
      "label": "General & admin",
      "value": 0.4,
      "type": "cost",
      "col": 5,
      "order": 5,
      "valueText": "($0.4B)",
      "notes": []
    },
    {
      "id": "litigation",
      "label": "Litigation",
      "value": 0.013,
      "type": "cost",
      "col": 5,
      "order": 6,
      "valueText": "($13M)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "revenue",
      "value": 4,
      "sourceWidth": 108.08642578125,
      "targetWidth": 108.08642578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_processing",
      "target": "revenue",
      "value": 4.5,
      "sourceWidth": 122.4111328125,
      "targetWidth": 122.4111328125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 3.2,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_rev",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "net_revenue",
      "value": 8.9,
      "sourceWidth": 243.52001953125,
      "targetWidth": 243.52001953125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "client_incentives",
      "value": 3.5,
      "sourceWidth": 95.06396484375,
      "targetWidth": 96.3662109375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "net_revenue",
      "target": "operating_profit",
      "value": 5.9,
      "sourceWidth": 161.478515625,
      "targetWidth": 161.478515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "net_revenue",
      "target": "operating_expenses",
      "value": 3,
      "sourceWidth": 82.04150390625,
      "targetWidth": 80.7392578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.9,
      "sourceWidth": 132.8291015625,
      "targetWidth": 131.52685546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.1,
      "sourceWidth": 28.6494140625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_inc",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.6,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "network",
      "value": 0.2,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.4,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.2,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.3,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.4,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "litigation",
      "value": 0.013,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 27.34716796875,
    "nodes": {
      "service": {
        "x": 363.32666015625,
        "y": 355.51318359375,
        "width": 71.62353515625,
        "height": 108.08642578125
      },
      "data_processing": {
        "x": 363.32666015625,
        "y": 606.8466796875,
        "width": 71.62353515625,
        "height": 122.4111328125
      },
      "international": {
        "x": 363.32666015625,
        "y": 864.69140625,
        "width": 71.62353515625,
        "height": 87.25048828125
      },
      "other_rev": {
        "x": 363.32666015625,
        "y": 1104.3046875,
        "width": 71.62353515625,
        "height": 20.8359375
      },
      "revenue": {
        "x": 830.8330078125,
        "y": 575.5927734375,
        "width": 71.62353515625,
        "height": 338.583984375
      },
      "net_revenue": {
        "x": 1304.8505859375,
        "y": 509.17822265625,
        "width": 71.62353515625,
        "height": 243.52001953125
      },
      "client_incentives": {
        "x": 1304.8505859375,
        "y": 908.9677734375,
        "width": 71.62353515625,
        "height": 96.3662109375
      },
      "operating_profit": {
        "x": 1759.33447265625,
        "y": 437.5546875,
        "width": 71.62353515625,
        "height": 161.478515625
      },
      "operating_expenses": {
        "x": 1759.33447265625,
        "y": 750.09375,
        "width": 71.62353515625,
        "height": 80.7392578125
      },
      "net_profit": {
        "x": 2232.0498046875,
        "y": 338.583984375,
        "width": 71.62353515625,
        "height": 132.8291015625
      },
      "tax": {
        "x": 2232.0498046875,
        "y": 671.958984375,
        "width": 71.62353515625,
        "height": 29.95166015625
      },
      "other_inc": {
        "x": 2121.35888671875,
        "y": 532.61865234375,
        "width": 71.62353515625,
        "height": 1.30224609375
      },
      "personnel": {
        "x": 2232.0498046875,
        "y": 817.810546875,
        "width": 71.62353515625,
        "height": 42.97412109375
      },
      "network": {
        "x": 2232.0498046875,
        "y": 931.10595703125,
        "width": 71.62353515625,
        "height": 5.208984375
      },
      "marketing": {
        "x": 2232.0498046875,
        "y": 1019.65869140625,
        "width": 71.62353515625,
        "height": 10.41796875
      },
      "professional_fees": {
        "x": 2232.0498046875,
        "y": 1118.62939453125,
        "width": 71.62353515625,
        "height": 3.90673828125
      },
      "da": {
        "x": 2232.0498046875,
        "y": 1204.57763671875,
        "width": 71.62353515625,
        "height": 6.51123046875
      },
      "general_admin": {
        "x": 2232.0498046875,
        "y": 1285.31689453125,
        "width": 71.62353515625,
        "height": 10.41796875
      },
      "litigation": {
        "x": 2232.0498046875,
        "y": 1362.1494140625,
        "width": 71.62353515625,
        "height": 1.30224609375
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 398.4873046875,
            "top": 266.96044921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$4.0B",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00268f"
              },
              {
                "text": "+8% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 190.1279296875,
            "top": 389.37158203125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Service",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00268f"
              }
            ]
          }
        ]
      },
      "data_processing": {
        "blocks": [
          {
            "x": 398.4873046875,
            "top": 513.0849609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$4.5B",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00268f"
              },
              {
                "text": "+9% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 190.1279296875,
            "top": 620.08486328125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Data",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00268f"
              },
              {
                "text": "processing",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00268f"
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 398.4873046875,
            "top": 772.23193359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$3.2B",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00268f"
              },
              {
                "text": "+9% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 190.1279296875,
            "top": 860.78466796875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "International",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00268f"
              },
              {
                "text": "transaction",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00268f"
              }
            ]
          }
        ]
      },
      "other_rev": {
        "blocks": [
          {
            "x": 398.4873046875,
            "top": 1010.54296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$0.8B",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00268f"
              },
              {
                "text": "+31% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 190.1279296875,
            "top": 1091.395703125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00268f"
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
            "x": 1338.708984375,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00268f"
              },
              {
                "text": "$8.9B",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00268f"
              },
              {
                "text": "+10% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "client_incentives": {
        "blocks": [
          {
            "x": 1338.708984375,
            "top": 1026.169921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Client",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "incentives",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "($3.5B)",
                "size": 37.76513671875,
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
            "x": 1794.4951171875,
            "top": 251.33349609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$5.9B",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "67% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1794.4951171875,
            "top": 851.6689453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "($3.0B)",
                "size": 37.76513671875,
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
            "top": 347.69970703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$4.9B",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "55% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2418.27099609375,
            "top": 661.541015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "($1.1B)",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_inc": {
        "blocks": [
          {
            "x": 2155.21728515625,
            "top": 553.45458984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$0.1B",
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
            "top": 824.972900390625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Personnel ($1.6B)",
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
            "top": 919.3857421875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Network ($0.2B)",
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
            "top": 1010.54296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing ($0.4B)",
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
            "top": 1106.258056640625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional fees ($0.2B)",
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
            "top": 1193.508544921875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "D&A ($0.3B)",
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
            "top": 1276.201171875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & admin ($0.4B)",
                "size": 24.74267578125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "litigation": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1348.475830078125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Litigation ($13M)",
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
      "value": "7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+7%"
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
  "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1216.2978515625\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1268.3876953125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Payment</text><text x=\"179.058837890625\" y=\"1307.455078125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"payment_volume\" x=\"153.013916015625\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+7%</text><text x=\"215.521728515625\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"290.40087890625\" y=\"1216.2978515625\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1268.3876953125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Cross-Border</text><text x=\"436.25244140625\" y=\"1307.455078125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Volume</text><text data-operating-metric=\"cross_border_volume\" x=\"410.20751953125\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+14%</text><text x=\"472.71533203125\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">Y/Y</text></g><g><rect x=\"589.91748046875\" y=\"1216.2978515625\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1268.3876953125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Processed</text><text x=\"735.76904296875\" y=\"1307.455078125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Transactions</text><text data-operating-metric=\"processed_transactions\" x=\"709.72412109375\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+10%</text><text x=\"772.23193359375\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">Y/Y</text></g><text x=\"169.2919921875\" y=\"1437.6796875\" font-size=\"39.0673828125\" font-weight=\"700\">Source: Quarterly results</text>",
  "i18n": {
    "zh": {
      "name": "Visa · 2024 财年第三季度",
      "meta": {
        "title": "Visa 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 6 月",
        "titleTextLength": 1850
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
            "同比 +9%"
          ]
        },
        "other_rev": {
          "label": "其他",
          "notes": [
            "同比 +31%"
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
            "利润率 67%",
            "同比 +5 个百分点"
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
            "同比 +4 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_inc": {
          "label": "其他",
          "notes": []
        },
        "personnel": {
          "label": "人员",
          "notes": []
        },
        "network": {
          "label": "网络",
          "notes": []
        },
        "marketing": {
          "label": "市场营销",
          "notes": []
        },
        "professional_fees": {
          "label": "专业服务费",
          "notes": []
        },
        "da": {
          "label": "折旧摊销",
          "notes": []
        },
        "general_admin": {
          "label": "综合及行政",
          "notes": []
        },
        "litigation": {
          "label": "诉讼",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "service": {
            "blocks": [
              {
                "x": 398.4873046875,
                "top": 266.96044921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$4.0B",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00268f"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 190.1279296875,
                "top": 384.813720703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00268f"
                  }
                ]
              }
            ]
          },
          "data_processing": {
            "blocks": [
              {
                "x": 398.4873046875,
                "top": 513.0849609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$4.5B",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00268f"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 190.1279296875,
                "top": 643.3095703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "数据处理",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00268f"
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 398.4873046875,
                "top": 772.23193359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$3.2B",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00268f"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 190.1279296875,
                "top": 883.573974609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国际交易",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00268f"
                  }
                ]
              }
            ]
          },
          "other_rev": {
            "blocks": [
              {
                "x": 398.4873046875,
                "top": 1010.54296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$0.8B",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00268f"
                  },
                  {
                    "text": "同比 +31%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 190.1279296875,
                "top": 1089.97998046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00268f"
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
                "x": 1338.708984375,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00268f"
                  },
                  {
                    "text": "$8.9B",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00268f"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "client_incentives": {
            "blocks": [
              {
                "x": 1338.708984375,
                "top": 1026.169921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "客户激励",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "($3.5B)",
                    "size": 37.76513671875,
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
                "x": 1794.4951171875,
                "top": 251.33349609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$5.9B",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 67%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1794.4951171875,
                "top": 851.6689453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "($3.0B)",
                    "size": 37.76513671875,
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
                "top": 347.69970703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$4.9B",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 55%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2418.27099609375,
                "top": 661.541015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "($1.1B)",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_inc": {
            "blocks": [
              {
                "x": 2155.21728515625,
                "top": 553.45458984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$0.1B",
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
                "top": 824.972900390625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "人员 ($1.6B)",
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
                "top": 919.3857421875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "网络 ($0.2B)",
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
                "top": 1010.54296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "市场营销 ($0.4B)",
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
                "top": 1106.258056640625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业服务费 ($0.2B)",
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
                "top": 1193.508544921875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "折旧摊销 ($0.3B)",
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
                "top": 1276.201171875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "综合及行政 ($0.4B)",
                    "size": 24.74267578125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "litigation": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1348.475830078125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "诉讼 ($13M)",
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
      "annotationsSvg": "<g><rect x=\"76.83251953125\" y=\"1216.2978515625\" width=\"204.45263671875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"179.058837890625\" y=\"1268.3876953125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">支付</text><text x=\"179.058837890625\" y=\"1307.455078125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"payment_volume\" x=\"153.013916015625\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+7%</text><text x=\"215.521728515625\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比</text></g><g><rect x=\"290.40087890625\" y=\"1216.2978515625\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"436.25244140625\" y=\"1268.3876953125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">跨境</text><text x=\"436.25244140625\" y=\"1307.455078125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">交易额</text><text data-operating-metric=\"cross_border_volume\" x=\"410.20751953125\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+14%</text><text x=\"472.71533203125\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比</text></g><g><rect x=\"589.91748046875\" y=\"1216.2978515625\" width=\"291.703125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#00268f\"/><text x=\"735.76904296875\" y=\"1268.3876953125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">处理</text><text x=\"735.76904296875\" y=\"1307.455078125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">交易笔数</text><text data-operating-metric=\"processed_transactions\" x=\"709.72412109375\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+10%</text><text x=\"772.23193359375\" y=\"1338.708984375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比</text></g><text x=\"169.2919921875\" y=\"1437.6796875\" font-size=\"39.0673828125\" font-weight=\"700\">来源：季度业绩</text>"
    }
  }
});})();
