(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "fedex-q4-fy24",
  "name": "FedEx · Q4 FY24",
  "company": "FedEx",
  "meta": {
    "company": "FedEx",
    "title": "FedEx Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Ending May 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/fedex-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "periodX": 1314,
    "periodY": 1328,
    "periodNoteY": 1372
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#4d168e",
        "label": "#4d168e"
      },
      "hub": {
        "node": "#4d168e",
        "label": "#4d168e"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#d40000",
        "label": "#9d1808"
      }
    },
    "linkTint": {
      "source": "#a58dca",
      "hub": "#a58dca",
      "profit": "#9dce9b",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 34,
      "value": 38,
      "note": 28,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "express",
      "label": "FedEx Express",
      "value": 10.4,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+0% Y/Y",
        "2% operating margin"
      ]
    },
    {
      "id": "ground",
      "label": "FedEx Ground",
      "value": 8.7,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+2% Y/Y",
        "13% operating margin"
      ]
    },
    {
      "id": "freight",
      "label": "FedEx Freight",
      "value": 2.1,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+2% Y/Y",
        "22% operating margin"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 0.1,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(22%) Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 0.8,
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 22.1,
      "type": "hub",
      "col": 1,
      "order": 5,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.6,
      "type": "profit",
      "col": 2,
      "order": 6,
      "notes": [
        "7% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 20.6,
      "type": "cost",
      "col": 2,
      "order": 7,
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.5,
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1.5,
      "type": "profit",
      "col": 3,
      "order": 9,
      "notes": [
        "7% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 10,
      "notes": []
    },
    {
      "id": "salaries_benefits",
      "label": "Salaries & benefits",
      "value": 7.7,
      "type": "cost",
      "col": 3,
      "order": 11,
      "notes": []
    },
    {
      "id": "purchased_transportation",
      "label": "Purchased transportation",
      "value": 5.1,
      "type": "cost",
      "col": 3,
      "order": 12,
      "notes": []
    },
    {
      "id": "rentals",
      "label": "Rentals",
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 13,
      "notes": []
    },
    {
      "id": "depreciation_amortization",
      "label": "Depreciation & Amortization",
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 14,
      "notes": []
    },
    {
      "id": "fuel",
      "label": "Fuel",
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 15,
      "notes": []
    },
    {
      "id": "maintenance",
      "label": "Maintenance",
      "value": 0.8,
      "type": "cost",
      "col": 3,
      "order": 16,
      "notes": []
    },
    {
      "id": "business_realignment",
      "label": "Business realignment",
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "order": 17,
      "notes": []
    },
    {
      "id": "other_operating",
      "label": "Other",
      "value": 3.2,
      "type": "cost",
      "col": 3,
      "order": 18,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "express",
      "target": "revenue",
      "value": 10.4,
      "sourceWidth": 126,
      "targetWidth": 126,
      "width": 126,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "ground",
      "target": "revenue",
      "value": 8.7,
      "sourceWidth": 104,
      "targetWidth": 103,
      "width": 104,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "freight",
      "target": "revenue",
      "value": 2.1,
      "sourceWidth": 29,
      "targetWidth": 28,
      "width": 29,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 1,
      "targetWidth": 1,
      "width": 1,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 10,
      "targetWidth": 10,
      "width": 10,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.6,
      "sourceWidth": 19,
      "targetWidth": 19,
      "width": 19,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 20.6,
      "sourceWidth": 249,
      "targetWidth": 250,
      "width": 249,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1,
      "sourceWidth": 12,
      "targetWidth": 14,
      "width": 12,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 7,
      "targetWidth": 7,
      "width": 7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.5,
      "sourceWidth": 5,
      "targetWidth": 5,
      "width": 5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "salaries_benefits",
      "value": 7.7,
      "sourceWidth": 93,
      "targetWidth": 93,
      "width": 93,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 5.1,
      "sourceWidth": 63,
      "targetWidth": 63,
      "width": 63,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rentals",
      "value": 1.1,
      "sourceWidth": 13,
      "targetWidth": 13,
      "width": 13,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 1.1,
      "sourceWidth": 13,
      "targetWidth": 14,
      "width": 13,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 1.1,
      "sourceWidth": 13,
      "targetWidth": 14,
      "width": 13,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.8,
      "sourceWidth": 10,
      "targetWidth": 11,
      "width": 10,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "business_realignment",
      "value": 0.4,
      "sourceWidth": 5,
      "targetWidth": 5,
      "width": 5,
      "sourceOrder": 6,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 3.2,
      "sourceWidth": 40,
      "targetWidth": 40,
      "width": 40,
      "sourceOrder": 7,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "express": {
        "x": 350,
        "y": 401,
        "width": 72,
        "height": 126
      },
      "ground": {
        "x": 350,
        "y": 670,
        "width": 72,
        "height": 104
      },
      "freight": {
        "x": 350,
        "y": 916,
        "width": 72,
        "height": 29
      },
      "services": {
        "x": 350,
        "y": 1129,
        "width": 72,
        "height": 1
      },
      "other_revenue": {
        "x": 350,
        "y": 1266,
        "width": 72,
        "height": 10
      },
      "revenue": {
        "x": 973,
        "y": 624,
        "width": 72,
        "height": 268
      },
      "operating_profit": {
        "x": 1609,
        "y": 487,
        "width": 72,
        "height": 19
      },
      "operating_expenses": {
        "x": 1606,
        "y": 781,
        "width": 72,
        "height": 250
      },
      "other_income": {
        "x": 2049,
        "y": 433,
        "width": 72,
        "height": 5
      },
      "net_profit": {
        "x": 2219,
        "y": 358,
        "width": 72,
        "height": 19
      },
      "tax": {
        "x": 2219,
        "y": 538,
        "width": 72,
        "height": 7
      },
      "salaries_benefits": {
        "x": 2219,
        "y": 605,
        "width": 72,
        "height": 93
      },
      "purchased_transportation": {
        "x": 2219,
        "y": 734,
        "width": 72,
        "height": 63
      },
      "rentals": {
        "x": 2219,
        "y": 859,
        "width": 72,
        "height": 13
      },
      "depreciation_amortization": {
        "x": 2219,
        "y": 937,
        "width": 72,
        "height": 14
      },
      "fuel": {
        "x": 2219,
        "y": 1025,
        "width": 72,
        "height": 14
      },
      "maintenance": {
        "x": 2219,
        "y": 1110,
        "width": 72,
        "height": 11
      },
      "business_realignment": {
        "x": 2219,
        "y": 1204,
        "width": 72,
        "height": 5
      },
      "other_operating": {
        "x": 2219,
        "y": 1286,
        "width": 72,
        "height": 40
      }
    },
    "labels": {
      "express": {
        "blocks": [
          {
            "x": 390.673828125,
            "top": 300.81884765625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 178.40771484375,
            "top": 514.38720703125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "2% operating margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ground": {
        "blocks": [
          {
            "x": 390.673828125,
            "top": 571.68603515625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 178.40771484375,
            "top": 764.00048828125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "13% operating margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "freight": {
        "blocks": [
          {
            "x": 390.673828125,
            "top": 811.29931640625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 178.40771484375,
            "top": 975.38232421875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "22% operating margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 386,
            "top": 1027.47216796875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "(22%) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 1106.89794921875,
            "anchor": "end",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Services",
                "size": 36.462890625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 386,
            "top": 1164.2080078125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 296.912109375,
            "top": 1248.8427734375,
            "anchor": "end",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Other",
                "size": 36.462890625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1009.24072265625,
            "top": 466.2041015625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1640.830078125,
            "top": 293.00537109375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "7% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
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
            "x": 1640.830078125,
            "top": 1039.1923828125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
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
                "size": 35.16064453125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2087.50048828125,
            "top": 447.46142578125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
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
            "x": 2443.013671875,
            "top": 302.12109375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "7% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
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
            "x": 2444.31591796875,
            "top": 520.8984375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Tax ($0.6B)",
                "size": 29.95166015625,
                "weight": 600
              }
            ]
          }
        ]
      },
      "salaries_benefits": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 605.54443359375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Salaries & benefits",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "purchased_transportation": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 699.30615234375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Purchased",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "transportation",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rentals": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 838.646484375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Rentals ($1.1B)",
                "size": 29.95166015625,
                "weight": 600
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2469.05859375,
            "top": 903.7587890625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "Amortization ($1.1B)",
                "size": 29.95166015625,
                "weight": 600
              }
            ]
          }
        ]
      },
      "fuel": {
        "blocks": [
          {
            "x": 2459.94287109375,
            "top": 1009.24072265625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Fuel ($1.1B)",
                "size": 29.95166015625,
                "weight": 600
              }
            ]
          }
        ]
      },
      "maintenance": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1093.88671875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Maintenance ($0.8B)",
                "size": 29.95166015625,
                "weight": 600
              }
            ]
          }
        ]
      },
      "business_realignment": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 1165.51025390625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Business",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "realignment ($0.4B)",
                "size": 29.95166015625,
                "weight": 600
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 1284.0146484375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Other ($3.2B)",
                "size": 29.95166015625,
                "weight": 600
              }
            ]
          }
        ]
      }
    }
  },
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
  "annotationsSvg": "<g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-5.5\"><text x=\"747\" y=\"408\" font-size=\"157\" fill=\"#4d148c\">Fed</text><text x=\"1017\" y=\"408\" font-size=\"157\" fill=\"#ff6600\">Ex</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-2.8000000000000003\"><text x=\"74\" y=\"474\" font-size=\"80\" fill=\"#4d148c\">Fed</text><text x=\"211.6\" y=\"474\" font-size=\"80\" fill=\"#ff6600\">Ex</text><text x=\"246\" y=\"499.6\" font-size=\"25.6\" letter-spacing=\"0\" font-family=\"Georgia,serif\" font-weight=\"400\" fill=\"#4d148c\">Express</text></g><g transform=\"translate(-8 0)\" data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-2.8000000000000003\"><text x=\"80\" y=\"721\" font-size=\"80\" fill=\"#4d148c\">Fed</text><text x=\"217.6\" y=\"721\" font-size=\"80\" fill=\"#72b15f\">Ex</text><text x=\"252\" y=\"746.6\" font-size=\"25.6\" letter-spacing=\"0\" font-family=\"Georgia,serif\" font-weight=\"400\" fill=\"#4d148c\">Ground</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-2.8000000000000003\"><text x=\"80\" y=\"929\" font-size=\"80\" fill=\"#4d148c\">Fed</text><text x=\"217.6\" y=\"929\" font-size=\"80\" fill=\"#cc1744\">Ex</text><text x=\"252\" y=\"954.6\" font-size=\"25.6\" letter-spacing=\"0\" font-family=\"Georgia,serif\" font-weight=\"400\" fill=\"#4d148c\">Freight</text></g>",
  "i18n": {
    "zh": {
      "name": "联邦快递 · 2024 财年第四季度",
      "meta": {
        "title": "联邦快递 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 5 月"
      },
      "nodes": {
        "express": {
          "label": "FedEx Express",
          "notes": [
            "同比 +0%",
            "营业利润率 2%"
          ]
        },
        "ground": {
          "label": "FedEx 地面运输",
          "notes": [
            "同比 +2%",
            "营业利润率 13%"
          ]
        },
        "freight": {
          "label": "FedEx Freight",
          "notes": [
            "同比 +2%",
            "营业利润率 22%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 (22%)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (6%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 (0pp)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "salaries_benefits": {
          "label": "薪酬与福利",
          "notes": []
        },
        "purchased_transportation": {
          "label": "外购运输",
          "notes": []
        },
        "rentals": {
          "label": "租赁费用",
          "notes": []
        },
        "depreciation_amortization": {
          "label": "折旧与摊销",
          "notes": []
        },
        "fuel": {
          "label": "燃油",
          "notes": []
        },
        "maintenance": {
          "label": "维修",
          "notes": []
        },
        "business_realignment": {
          "label": "业务重组",
          "notes": []
        },
        "other_operating": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "express": {
            "blocks": [
              {
                "x": 390.673828125,
                "top": 300.81884765625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 178.40771484375,
                "top": 514.38720703125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "营业利润率 2%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ground": {
            "blocks": [
              {
                "x": 390.673828125,
                "top": 571.68603515625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 178.40771484375,
                "top": 764.00048828125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "营业利润率 13%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "freight": {
            "blocks": [
              {
                "x": 390.673828125,
                "top": 811.29931640625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 178.40771484375,
                "top": 975.38232421875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "营业利润率 22%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 386,
                "top": 1027.47216796875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (22%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 1106.89794921875,
                "anchor": "end",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 36.462890625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 386,
                "top": 1164.2080078125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 296.912109375,
                "top": 1248.8427734375,
                "anchor": "end",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36.462890625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1009.24072265625,
                "top": 466.2041015625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1640.830078125,
                "top": 293.00537109375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
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
                "x": 1640.830078125,
                "top": 1039.1923828125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
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
          "other_income": {
            "blocks": [
              {
                "x": 2087.50048828125,
                "top": 447.46142578125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "其他",
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
                "x": 2443.013671875,
                "top": 302.12109375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0pp)",
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
                "x": 2444.31591796875,
                "top": 520.8984375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "税费 ($0.6B)",
                    "size": 29.95166015625,
                    "weight": 600
                  }
                ]
              }
            ]
          },
          "salaries_benefits": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 605.54443359375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "purchased_transportation": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 699.30615234375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "外购",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "运输",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rentals": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 838.646484375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "租赁费用 ($1.1B)",
                    "size": 29.95166015625,
                    "weight": 600
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2469.05859375,
                "top": 903.7587890625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "摊销 ($1.1B)",
                    "size": 29.95166015625,
                    "weight": 600
                  }
                ]
              }
            ]
          },
          "fuel": {
            "blocks": [
              {
                "x": 2459.94287109375,
                "top": 1009.24072265625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "燃油 ($1.1B)",
                    "size": 29.95166015625,
                    "weight": 600
                  }
                ]
              }
            ]
          },
          "maintenance": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1093.88671875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "维修 ($0.8B)",
                    "size": 29.95166015625,
                    "weight": 600
                  }
                ]
              }
            ]
          },
          "business_realignment": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 1165.51025390625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "业务",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "重组 ($0.4B)",
                    "size": 29.95166015625,
                    "weight": 600
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 1284.0146484375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "其他 ($3.2B)",
                    "size": 29.95166015625,
                    "weight": 600
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-5.5\"><text x=\"747\" y=\"408\" font-size=\"157\" fill=\"#4d148c\">Fed</text><text x=\"1017\" y=\"408\" font-size=\"157\" fill=\"#ff6600\">Ex</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-2.8000000000000003\"><text x=\"74\" y=\"474\" font-size=\"80\" fill=\"#4d148c\">Fed</text><text x=\"211.6\" y=\"474\" font-size=\"80\" fill=\"#ff6600\">Ex</text><text x=\"246\" y=\"499.6\" font-size=\"25.6\" letter-spacing=\"0\" font-family=\"Georgia,serif\" font-weight=\"400\" fill=\"#4d148c\">Express</text></g><g transform=\"translate(-8 0)\" data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-2.8000000000000003\"><text x=\"80\" y=\"721\" font-size=\"80\" fill=\"#4d148c\">Fed</text><text x=\"217.6\" y=\"721\" font-size=\"80\" fill=\"#72b15f\">Ex</text><text x=\"252\" y=\"746.6\" font-size=\"25.6\" letter-spacing=\"0\" font-family=\"Georgia,serif\" font-weight=\"400\" fill=\"#4d148c\">Ground</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-2.8000000000000003\"><text x=\"80\" y=\"929\" font-size=\"80\" fill=\"#4d148c\">Fed</text><text x=\"217.6\" y=\"929\" font-size=\"80\" fill=\"#cc1744\">Ex</text><text x=\"252\" y=\"954.6\" font-size=\"25.6\" letter-spacing=\"0\" font-family=\"Georgia,serif\" font-weight=\"400\" fill=\"#4d148c\">Freight</text></g>"
    },
    "preservedAnnotationText": [
      "Fed",
      "Ex",
      "Express",
      "Ground",
      "Freight"
    ]
  }
});})();
