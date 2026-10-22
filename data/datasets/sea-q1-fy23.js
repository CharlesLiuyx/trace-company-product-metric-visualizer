(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sea-q1-fy23",
  "name": "Sea · Q1 FY23",
  "company": "Sea",
  "meta": {
    "company": "Sea",
    "title": "Sea Limited Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sea-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2461.2451171875,
    "hidePeriodStamp": true,
    "logoSvg": "\n    <defs>\n      <clipPath id=\"sea-q1-fy23-logo-clip\"><circle cx=\"95\" cy=\"95\" r=\"88\"/></clipPath>\n    </defs>\n    <g clip-path=\"url(#sea-q1-fy23-logo-clip)\">\n      <rect x=\"0\" y=\"0\" width=\"190\" height=\"190\" fill=\"#0a0089\"/>\n      <path d=\"M-20 42 C38 5 92 6 136 36 C166 56 196 56 222 43 L222 -20 L-20 -20 Z\" fill=\"#ff2b25\"/>\n      <path d=\"M-20 72 C44 40 89 40 138 66 C166 80 196 78 222 62 L222 23 C184 43 155 45 121 26 C78 2 31 9 -20 42 Z\" fill=\"#ff5a18\"/>\n      <path d=\"M-20 100 C38 76 81 80 129 94 C163 104 190 102 222 88 L222 61 C189 76 165 78 137 66 C87 43 42 39 -20 72 Z\" fill=\"#11cfe3\"/>\n      <path d=\"M-20 135 C42 105 88 112 137 125 C169 133 196 130 222 116 L222 86 C191 101 163 104 129 94 C81 80 39 76 -20 100 Z\" fill=\"#428ee9\"/>\n      <path d=\"M-20 210 L222 210 L222 116 C194 132 166 136 137 125 C87 113 41 106 -20 135 Z\" fill=\"#08008f\"/>\n      <path d=\"M132 64 C158 57 178 57 203 50 L222 44 L222 76 C186 91 162 94 132 83 Z\" fill=\"#00b889\"/>\n    </g>\n    <text x=\"242\" y=\"108\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"118\" font-weight=\"800\" fill=\"#07008e\">sea</text>\n    <text x=\"260\" y=\"151\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"21\" font-weight=\"600\" fill=\"#07008e\">connecting the dots</text>",
    "logoViewBox": "0 0 540 190",
    "logoWidth": 442.763671875,
    "logoHeight": 166.6875,
    "logoY": 325.5615234375
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#767676",
    "noteColor": "#767676",
    "palette": {
      "source": {
        "node": "#07008e",
        "label": "#07008e"
      },
      "hub": {
        "node": "#07008e",
        "label": "#07008e"
      },
      "profit": {
        "node": "#29a32a",
        "label": "#008f51"
      },
      "cost": {
        "node": "#d70000",
        "label": "#8f1200"
      }
    },
    "linkTint": {
      "source": "#8785c4",
      "hub": "#8785c4",
      "profit": "#99cd99",
      "cost": "#df8184"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "type": {
      "name": 37.76513671875,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "nodes": [
    {
      "id": "shopee",
      "label": "Shopee",
      "value": 2.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#07008e",
      "labelColor": "#ff9000",
      "notes": [
        "+36% Y/Y"
      ]
    },
    {
      "id": "garena",
      "label": "Garena",
      "value": 0.5,
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#07008e",
      "labelColor": "#ff3300",
      "notes": [
        "(52%) Y/Y"
      ]
    },
    {
      "id": "seamoney",
      "label": "SeaMoney",
      "value": 0.4,
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#07008e",
      "labelColor": "#00a6ff",
      "notes": [
        "+75% Y/Y"
      ]
    },
    {
      "id": "other_services",
      "label": "Other Services",
      "value": 0.022,
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#07008e",
      "labelColor": "#767676",
      "notes": [],
      "valueText": "$22M"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3,
      "type": "hub",
      "col": 1,
      "order": 0,
      "color": "#07008e",
      "labelColor": "#07008e",
      "notes": [
        "+5% Y/Y"
      ],
      "valueText": "$3.0B"
    },
    {
      "id": "gross_profit",
      "label": [
        "Gross",
        "profit"
      ],
      "value": 1.4,
      "type": "profit",
      "col": 2,
      "order": 0,
      "color": "#29a32a",
      "labelColor": "#008f51",
      "notes": [
        "47% margin",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 1.6,
      "type": "cost",
      "col": 2,
      "order": 1,
      "color": "#d70000",
      "labelColor": "#9c1800",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": [
        "Operating",
        "profit"
      ],
      "value": 0.1,
      "type": "profit",
      "col": 4,
      "order": 0,
      "color": "#29a32a",
      "labelColor": "#008f51",
      "notes": [
        "4% margin",
        "+21pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.3,
      "type": "cost",
      "col": 4,
      "order": 1,
      "color": "#d70000",
      "labelColor": "#9c1800",
      "notes": []
    },
    {
      "id": "other_income",
      "label": [
        "Other",
        "income"
      ],
      "value": 0.1,
      "type": "profit",
      "col": 3,
      "order": 0,
      "color": "#29a32a",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.4,
      "type": "cost",
      "col": 5,
      "order": 0,
      "color": "#d70000",
      "labelColor": "#9c1800",
      "notes": [
        "13% of revenue",
        "(22pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 1,
      "color": "#d70000",
      "labelColor": "#9c1800",
      "notes": [
        "11% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 2,
      "color": "#d70000",
      "labelColor": "#9c1800",
      "notes": [
        "11% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "credit_losses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 0.2,
      "type": "cost",
      "col": 5,
      "order": 3,
      "color": "#d70000",
      "labelColor": "#9c1800",
      "notes": []
    },
    {
      "id": "impairment",
      "label": "Impairment",
      "value": 0.1,
      "type": "cost",
      "col": 5,
      "order": 4,
      "color": "#d70000",
      "labelColor": "#9c1800",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "shopee",
      "target": "revenue",
      "value": 2.1,
      "sourceWidth": 169.2919921875,
      "targetWidth": 169.2919921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "garena",
      "target": "revenue",
      "value": 0.5,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "seamoney",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_services",
      "target": "revenue",
      "value": 0.022,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.4,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 1.6,
      "sourceWidth": 132.8291015625,
      "targetWidth": 132.8291015625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.3,
      "sourceWidth": 105.48193359375,
      "targetWidth": 105.48193359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_expenses",
      "value": 0.1,
      "sourceWidth": 3.90673828125,
      "targetWidth": 5.208984375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.4,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.3,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "credit_losses",
      "value": 0.2,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "impairment",
      "value": 0.1,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 4,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "shopee": {
        "x": 458.390625,
        "y": 472.71533203125,
        "width": 72.92578125,
        "height": 169.2919921875
      },
      "garena": {
        "x": 458.390625,
        "y": 789.1611328125,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "seamoney": {
        "x": 458.390625,
        "y": 998.82275390625,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "other_services": {
        "x": 458.390625,
        "y": 1212.39111328125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 923.29248046875,
        "y": 696.70166015625,
        "width": 72.92578125,
        "height": 248.72900390625
      },
      "gross_profit": {
        "x": 1382.9853515625,
        "y": 610.75341796875,
        "width": 72.92578125,
        "height": 115.89990234375
      },
      "cost_of_revenue": {
        "x": 1390.798828125,
        "y": 875.109375,
        "width": 72.92578125,
        "height": 132.8291015625
      },
      "operating_profit": {
        "x": 1860.90966796875,
        "y": 493.55126953125,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "operating_expenses": {
        "x": 1855.70068359375,
        "y": 731.8623046875,
        "width": 72.92578125,
        "height": 110.69091796875
      },
      "other_income": {
        "x": 1648.6435546875,
        "y": 890.736328125,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "sm": {
        "x": 2327.11376953125,
        "y": 582.10400390625,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "ga": {
        "x": 2327.11376953125,
        "y": 763.1162109375,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "rnd": {
        "x": 2327.11376953125,
        "y": 932.408203125,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "credit_losses": {
        "x": 2327.11376953125,
        "y": 1105.60693359375,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "impairment": {
        "x": 2327.11376953125,
        "y": 1274.89892578125,
        "width": 72.92578125,
        "height": 9.11572265625
      }
    },
    "labels": {
      "shopee": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 380.255859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+36% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "garena": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 692.794921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(52%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "seamoney": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 906.36328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+75% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "other_services": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 1145.9765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 260.44921875,
            "top": 1190.4439453125,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other Services",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 959.75537109375,
            "top": 548.24560546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1419.4482421875,
            "top": 367.2333984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "47% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1427.26171875,
            "top": 1019.65869140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1897.37255859375,
            "top": 253.93798828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "4% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "+21pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1888.2568359375,
            "top": 855.57568359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1682.501953125,
            "top": 910.27001953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "income",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 559.9658203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "13% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "(22pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 739.67578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 915.47900390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "credit_losses": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 1088.677734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Provision for",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "credit losses",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "impairment": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 1251.45849609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Impairment",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "garena_op",
      "label": "Garena operating profit",
      "value": 0.3,
      "type": "profit",
      "representation": "annotation"
    },
    {
      "id": "shopee_op",
      "label": "Shopee operating profit",
      "value": 0.1,
      "type": "profit",
      "representation": "annotation"
    },
    {
      "id": "seamoney_op",
      "label": "SeaMoney operating profit",
      "value": 0.1,
      "type": "profit",
      "representation": "annotation"
    },
    {
      "id": "other_op",
      "label": "Other",
      "value": -0.4,
      "type": "cost",
      "representation": "annotation"
    }
  ],
  "operatingMetrics": [
    {
      "id": "shopee-marketplace",
      "label": "Shopee Marketplace",
      "value": "1.8",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.8B",
      "quote": "Shopee Marketplace $1.8B +46% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+46% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          31,
          1287,
          430,
          99
        ]
      }
    },
    {
      "id": "garena-bookings",
      "label": "Garena Bookings",
      "value": "0.5",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.5B",
      "quote": "Garena Bookings $0.5B (44%) Y/Y and (15%) Q/Q",
      "basis": "unspecified",
      "notes": [
        "(44%) Y/Y and (15%) Q/Q"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          471,
          1287,
          380,
          99
        ]
      }
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "Shopee",
      "Garena",
      "seaMoney",
      "S"
    ],
    "zh": {
      "name": "Sea · 2023 财年第一季度",
      "meta": {
        "title": "Sea Limited 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "titleSize": 110.69091796875,
        "titleTextLength": 2200.7958984375
      },
      "nodes": {
        "shopee": {
          "label": "Shopee 电商",
          "notes": [
            "同比 +36%"
          ]
        },
        "garena": {
          "label": "Garena 游戏娱乐",
          "notes": [
            "同比 (52%)"
          ]
        },
        "seamoney": {
          "label": "SeaMoney 金融服务",
          "notes": [
            "同比 +75%"
          ]
        },
        "other_services": {
          "label": "其他服务",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "gross_profit": {
          "label": [
            "毛",
            "利润"
          ],
          "notes": [
            "毛利率 47%",
            "同比 +6 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": [
            "营业",
            "利润"
          ],
          "notes": [
            "利润率 4%",
            "同比 +21 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "other_income": {
          "label": [
            "其他",
            "收入"
          ],
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 13%",
            "同比 (22 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 11%",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 11%",
            "同比 (1 个百分点)"
          ]
        },
        "credit_losses": {
          "label": [
            "信用",
            "损失拨备"
          ],
          "notes": []
        },
        "impairment": {
          "label": "减值",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "shopee": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 380.255859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +36%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "garena": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 692.794921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (52%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "seamoney": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 906.36328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +75%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "other_services": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 1145.9765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 260.44921875,
                "top": 1190.4439453125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他服务",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 959.75537109375,
                "top": 548.24560546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1419.4482421875,
                "top": 367.2333984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 47%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1427.26171875,
                "top": 1019.65869140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1897.37255859375,
                "top": 253.93798828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 +21 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1888.2568359375,
                "top": 855.57568359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1682.501953125,
                "top": 910.27001953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "收入",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 559.9658203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "占收入 13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 (22 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 739.67578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 915.47900390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "credit_losses": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 1088.677734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "信用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "损失拨备",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "impairment": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 1251.45849609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "减值",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Montserrat,Arial,sans-serif\"><text data-typography-role=\"brand\" x=\"158\" y=\"420\" font-size=\"42\" font-weight=\"700\" fill=\"#ff5a00\">Shopee</text><text x=\"200\" y=\"452\" text-anchor=\"middle\" font-size=\"18\" fill=\"#767676\">电商</text><text data-typography-role=\"brand\" x=\"158\" y=\"627\" font-size=\"46\" font-weight=\"700\" fill=\"#d80000\">Garena</text><text x=\"200\" y=\"659\" text-anchor=\"middle\" font-size=\"18\" fill=\"#767676\">数字娱乐</text><text data-typography-role=\"brand\" x=\"138\" y=\"775\" font-size=\"32\" font-weight=\"700\" fill=\"#428ee9\">seaMoney</text><text x=\"200\" y=\"807\" text-anchor=\"middle\" font-size=\"18\" fill=\"#767676\">数字金融服务</text><path d=\"M1560 229 H1762 Q1777 229 1777 245 V412 Q1777 427 1762 427 H1560 Q1545 427 1545 412 V403 L1518 385 L1545 366 V245 Q1545 229 1560 229 Z\" fill=\"#f2f2f2\" stroke=\"#07008e\" stroke-width=\"2\"/><g class=\"sankey-interactive-annotation\" data-node=\"garena_op\"><text x=\"1555\" y=\"266\" font-size=\"23\" fill=\"#07008e\">Garena</text><text x=\"1755\" y=\"266\" text-anchor=\"end\" font-size=\"23\" fill=\"#008f51\">$0.3B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"shopee_op\"><text x=\"1555\" y=\"312\" font-size=\"23\" fill=\"#07008e\">Shopee</text><text x=\"1755\" y=\"312\" text-anchor=\"end\" font-size=\"23\" fill=\"#008f51\">$0.1B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"seamoney_op\"><text x=\"1555\" y=\"358\" font-size=\"23\" fill=\"#07008e\">SeaMoney</text><text x=\"1755\" y=\"358\" text-anchor=\"end\" font-size=\"23\" fill=\"#008f51\">$0.1B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_op\"><text x=\"1555\" y=\"404\" font-size=\"23\" fill=\"#767676\">其他</text><text x=\"1755\" y=\"404\" text-anchor=\"end\" font-size=\"23\" fill=\"#9c1800\">($0.4B)</text></g><rect x=\"24\" y=\"988\" width=\"330\" height=\"76\" rx=\"16\" fill=\"#07008e\"/><text x=\"42\" y=\"1023\" font-size=\"20\" font-weight=\"700\" fill=\"white\">Shopee 市场</text><text data-operating-metric=\"shopee-marketplace\" x=\"338\" y=\"1023\" text-anchor=\"end\" font-size=\"20\" fill=\"white\">$1.8B</text><text x=\"189\" y=\"1048\" text-anchor=\"middle\" font-size=\"16\" fill=\"white\">同比 +46%</text><rect x=\"362\" y=\"988\" width=\"292\" height=\"76\" rx=\"16\" fill=\"#07008e\"/><text x=\"380\" y=\"1023\" font-size=\"20\" font-weight=\"700\" fill=\"white\">Garena 预订额</text><text data-operating-metric=\"garena-bookings\" x=\"638\" y=\"1023\" text-anchor=\"end\" font-size=\"20\" fill=\"white\">$0.5B</text><text x=\"508\" y=\"1048\" text-anchor=\"middle\" font-size=\"16\" fill=\"white\">同比 (44%)，环比 (15%)</text><text x=\"130\" y=\"1125\" font-size=\"26\" font-weight=\"700\">来源：季度业绩</text>\n    <g transform=\"translate(88 357) scale(0.72)\">\n      <path d=\"M7 23 H75 L69 93 Q68 105 56 105 H26 Q14 105 13 93 Z\" fill=\"#ff5a00\"/>\n      <path d=\"M26 24 V17 C26 4 56 4 56 17 V24\" fill=\"none\" stroke=\"#ff5a00\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <text x=\"41\" y=\"78\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"60\" fill=\"#ffffff\">S</text>\n    </g>\n    <g transform=\"translate(75 568) scale(0.48)\" fill=\"#d80000\">\n      <path d=\"M86 8 C61 20 40 24 13 24 C42 39 76 37 104 26 C94 39 81 49 64 55 C38 64 21 80 13 101 C30 86 50 80 72 82 C53 92 45 108 50 128 C61 114 74 105 91 102 C82 118 86 135 103 147 C102 124 115 108 137 97 C113 94 99 84 95 67 C116 63 136 53 153 36 C130 39 112 34 99 21 C96 16 91 11 86 8 Z\"/>\n      <circle cx=\"78\" cy=\"105\" r=\"20\" fill=\"#ffffff\"/>\n      <circle cx=\"81\" cy=\"105\" r=\"10\" fill=\"#d80000\"/>\n    </g><g fill=\"#07008e\"><circle cx=\"105\" cy=\"751\" r=\"22\"/><rect x=\"101\" y=\"746\" width=\"9\" height=\"9\" fill=\"white\"/><path d=\"M82 774 Q105 762 128 774 M82 780 Q105 768 128 780\" fill=\"none\" stroke=\"#428ee9\" stroke-width=\"3\"/></g></g></g>"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Montserrat,Arial,sans-serif\"><text data-typography-role=\"brand\" x=\"158\" y=\"420\" font-size=\"42\" font-weight=\"700\" fill=\"#ff5a00\">Shopee</text><text x=\"200\" y=\"452\" text-anchor=\"middle\" font-size=\"18\" fill=\"#767676\">E-commerce</text><text data-typography-role=\"brand\" x=\"158\" y=\"627\" font-size=\"46\" font-weight=\"700\" fill=\"#d80000\">Garena</text><text x=\"200\" y=\"659\" text-anchor=\"middle\" font-size=\"18\" fill=\"#767676\">Digital Entertainment</text><text data-typography-role=\"brand\" x=\"138\" y=\"775\" font-size=\"32\" font-weight=\"700\" fill=\"#428ee9\">seaMoney</text><text x=\"200\" y=\"807\" text-anchor=\"middle\" font-size=\"18\" fill=\"#767676\">Digital Financial Services</text><path d=\"M1560 229 H1762 Q1777 229 1777 245 V412 Q1777 427 1762 427 H1560 Q1545 427 1545 412 V403 L1518 385 L1545 366 V245 Q1545 229 1560 229 Z\" fill=\"#f2f2f2\" stroke=\"#07008e\" stroke-width=\"2\"/><g class=\"sankey-interactive-annotation\" data-node=\"garena_op\"><text x=\"1555\" y=\"266\" font-size=\"23\" fill=\"#07008e\">Garena</text><text x=\"1755\" y=\"266\" text-anchor=\"end\" font-size=\"23\" fill=\"#008f51\">$0.3B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"shopee_op\"><text x=\"1555\" y=\"312\" font-size=\"23\" fill=\"#07008e\">Shopee</text><text x=\"1755\" y=\"312\" text-anchor=\"end\" font-size=\"23\" fill=\"#008f51\">$0.1B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"seamoney_op\"><text x=\"1555\" y=\"358\" font-size=\"23\" fill=\"#07008e\">SeaMoney</text><text x=\"1755\" y=\"358\" text-anchor=\"end\" font-size=\"23\" fill=\"#008f51\">$0.1B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_op\"><text x=\"1555\" y=\"404\" font-size=\"23\" fill=\"#767676\">Other</text><text x=\"1755\" y=\"404\" text-anchor=\"end\" font-size=\"23\" fill=\"#9c1800\">($0.4B)</text></g><rect x=\"24\" y=\"988\" width=\"330\" height=\"76\" rx=\"16\" fill=\"#07008e\"/><text x=\"42\" y=\"1023\" font-size=\"20\" font-weight=\"700\" fill=\"white\">Shopee Marketplace</text><text data-operating-metric=\"shopee-marketplace\" x=\"338\" y=\"1023\" text-anchor=\"end\" font-size=\"20\" fill=\"white\">$1.8B</text><text x=\"189\" y=\"1048\" text-anchor=\"middle\" font-size=\"16\" fill=\"white\">+46% Y/Y</text><rect x=\"362\" y=\"988\" width=\"292\" height=\"76\" rx=\"16\" fill=\"#07008e\"/><text x=\"380\" y=\"1023\" font-size=\"20\" font-weight=\"700\" fill=\"white\">Garena Bookings</text><text data-operating-metric=\"garena-bookings\" x=\"638\" y=\"1023\" text-anchor=\"end\" font-size=\"20\" fill=\"white\">$0.5B</text><text x=\"508\" y=\"1048\" text-anchor=\"middle\" font-size=\"16\" fill=\"white\">(44%) Y/Y and (15%) Q/Q</text><text x=\"130\" y=\"1125\" font-size=\"26\" font-weight=\"700\">Source: Quarterly results</text>\n    <g transform=\"translate(88 357) scale(0.72)\">\n      <path d=\"M7 23 H75 L69 93 Q68 105 56 105 H26 Q14 105 13 93 Z\" fill=\"#ff5a00\"/>\n      <path d=\"M26 24 V17 C26 4 56 4 56 17 V24\" fill=\"none\" stroke=\"#ff5a00\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <text x=\"41\" y=\"78\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"60\" fill=\"#ffffff\">S</text>\n    </g>\n    <g transform=\"translate(75 568) scale(0.48)\" fill=\"#d80000\">\n      <path d=\"M86 8 C61 20 40 24 13 24 C42 39 76 37 104 26 C94 39 81 49 64 55 C38 64 21 80 13 101 C30 86 50 80 72 82 C53 92 45 108 50 128 C61 114 74 105 91 102 C82 118 86 135 103 147 C102 124 115 108 137 97 C113 94 99 84 95 67 C116 63 136 53 153 36 C130 39 112 34 99 21 C96 16 91 11 86 8 Z\"/>\n      <circle cx=\"78\" cy=\"105\" r=\"20\" fill=\"#ffffff\"/>\n      <circle cx=\"81\" cy=\"105\" r=\"10\" fill=\"#d80000\"/>\n    </g><g fill=\"#07008e\"><circle cx=\"105\" cy=\"751\" r=\"22\"/><rect x=\"101\" y=\"746\" width=\"9\" height=\"9\" fill=\"white\"/><path d=\"M82 774 Q105 762 128 774 M82 780 Q105 768 128 780\" fill=\"none\" stroke=\"#428ee9\" stroke-width=\"3\"/></g></g></g>"
});})();
