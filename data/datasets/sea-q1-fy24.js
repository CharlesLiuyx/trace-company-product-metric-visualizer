(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sea-q1-fy24",
  "company": "Sea",
  "name": "Sea · Q1 FY24",
  "meta": {
    "company": "Sea",
    "title": "Sea Limited Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sea-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2467.75634765625,
    "hidePeriodStamp": true,
    "logoSvg": "\n    <defs>\n      <clipPath id=\"sea-q3-fy25-logo-clip\"><circle cx=\"95\" cy=\"95\" r=\"88\"/></clipPath>\n    </defs>\n    <g clip-path=\"url(#sea-q3-fy25-logo-clip)\">\n      <rect x=\"0\" y=\"0\" width=\"190\" height=\"190\" fill=\"#0a0089\"/>\n      <path d=\"M-20 42 C38 5 92 6 136 36 C166 56 196 56 222 43 L222 -20 L-20 -20 Z\" fill=\"#ff2b25\"/>\n      <path d=\"M-20 72 C44 40 89 40 138 66 C166 80 196 78 222 62 L222 23 C184 43 155 45 121 26 C78 2 31 9 -20 42 Z\" fill=\"#ff5a18\"/>\n      <path d=\"M-20 100 C38 76 81 80 129 94 C163 104 190 102 222 88 L222 61 C189 76 165 78 137 66 C87 43 42 39 -20 72 Z\" fill=\"#11cfe3\"/>\n      <path d=\"M-20 135 C42 105 88 112 137 125 C169 133 196 130 222 116 L222 86 C191 101 163 104 129 94 C81 80 39 76 -20 100 Z\" fill=\"#428ee9\"/>\n      <path d=\"M-20 210 L222 210 L222 116 C194 132 166 136 137 125 C87 113 41 106 -20 135 Z\" fill=\"#08008f\"/>\n      <path d=\"M132 64 C158 57 178 57 203 50 L222 44 L222 76 C186 91 162 94 132 83 Z\" fill=\"#00b889\"/>\n    </g>\n    <text x=\"242\" y=\"108\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"118\" font-weight=\"800\" fill=\"#000084\">sea</text>\n    <text x=\"260\" y=\"151\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"21\" font-weight=\"600\" fill=\"#000084\">connecting the dots</text>",
    "logoViewBox": "0 0 540 190",
    "logoWidth": 442.763671875,
    "logoHeight": 169.2919921875,
    "logoY": 304.7255859375
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
        "node": "#000084",
        "label": "#000084"
      },
      "hub": {
        "node": "#000084",
        "label": "#000084"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#8585c0",
      "hub": "#8585c0",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "shopee",
      "label": "Shopee",
      "value": 2.7,
      "valueText": "$2.7B",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#000084",
      "notes": [
        "+33% Y/Y"
      ]
    },
    {
      "id": "garena",
      "label": "Garena",
      "value": 0.5,
      "valueText": "$0.5B",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#000084",
      "notes": [
        "(15%) Y/Y"
      ]
    },
    {
      "id": "seamoney",
      "label": "SeaMoney",
      "value": 0.5,
      "valueText": "$0.5B",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#000084",
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "other_services",
      "label": "Other Services",
      "value": 0.029,
      "valueText": "$29M",
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#000084",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.7,
      "valueText": "$3.7B",
      "type": "hub",
      "col": 1,
      "order": 4,
      "color": "#000084",
      "notes": [
        "+23% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.6,
      "valueText": "$1.6B",
      "type": "profit",
      "col": 2,
      "order": 5,
      "color": "#2ca02c",
      "notes": [
        "42% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2.2,
      "valueText": "($2.2B)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "color": "#cc0000",
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other income",
      "value": 0.044,
      "valueText": "$44M",
      "type": "profit",
      "col": 3,
      "order": 7,
      "color": "#2ca02c",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.1,
      "valueText": "$0.1B",
      "type": "profit",
      "col": 4,
      "order": 8,
      "color": "#2ca02c",
      "notes": [
        "2% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.5,
      "valueText": "($1.5B)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "color": "#cc0000",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.8,
      "valueText": "($0.8B)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "notes": [
        "21% of revenue",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "notes": [
        "8% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "notes": [
        "8% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "credit_losses",
      "label": "Provision for credit losses",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "notes": [
        "4% of revenue",
        "(2pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "shopee",
      "target": "revenue",
      "value": 2.7,
      "width": 238.31103515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8585c0",
      "sourceWidth": 238.31103515625,
      "targetWidth": 240.91552734375
    },
    {
      "source": "garena",
      "target": "revenue",
      "value": 0.5,
      "width": 39.0673828125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8585c0"
    },
    {
      "source": "seamoney",
      "target": "revenue",
      "value": 0.5,
      "width": 42.97412109375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#8585c0"
    },
    {
      "source": "other_services",
      "target": "revenue",
      "value": 0.029,
      "width": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#8585c0"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.6,
      "width": 135.43359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "targetWidth": 134.13134765625
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.2,
      "width": 190.1279296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 188.82568359375
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.056,
      "width": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.044,
      "width": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.5,
      "width": 132.8291015625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.8,
      "width": 66.41455078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.3,
      "width": 26.044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "width": 24.74267578125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "credit_losses",
      "value": 0.2,
      "width": 14.32470703125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "shopee": {
        "x": 467.50634765625,
        "y": 466.2041015625,
        "width": 71.62353515625,
        "height": 238.31103515625
      },
      "garena": {
        "x": 467.50634765625,
        "y": 850.36669921875,
        "width": 71.62353515625,
        "height": 39.0673828125
      },
      "seamoney": {
        "x": 467.50634765625,
        "y": 1027.47216796875,
        "width": 71.62353515625,
        "height": 42.97412109375
      },
      "other_services": {
        "x": 467.50634765625,
        "y": 1203.275390625,
        "width": 71.62353515625,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 932.408203125,
        "y": 681.07470703125,
        "width": 71.62353515625,
        "height": 325.5615234375
      },
      "gross_profit": {
        "x": 1393.4033203125,
        "y": 566.47705078125,
        "width": 74.22802734375,
        "height": 134.13134765625
      },
      "cost_of_revenue": {
        "x": 1396.0078125,
        "y": 897.24755859375,
        "width": 72.92578125,
        "height": 188.82568359375
      },
      "other_income": {
        "x": 1733.28955078125,
        "y": 541.734375,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "operating_profit": {
        "x": 1862.2119140625,
        "y": 487.0400390625,
        "width": 78.134765625,
        "height": 5.208984375
      },
      "operating_expenses": {
        "x": 1858.30517578125,
        "y": 712.32861328125,
        "width": 72.92578125,
        "height": 132.8291015625
      },
      "sm": {
        "x": 2334.92724609375,
        "y": 615.96240234375,
        "width": 72.92578125,
        "height": 66.41455078125
      },
      "rnd": {
        "x": 2334.92724609375,
        "y": 842.55322265625,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "ga": {
        "x": 2334.92724609375,
        "y": 1027.47216796875,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "credit_losses": {
        "x": 2334.92724609375,
        "y": 1220.20458984375,
        "width": 72.92578125,
        "height": 14.32470703125
      }
    },
    "labels": {
      "shopee": {
        "blocks": [
          {
            "x": 502.6669921875,
            "top": 375.046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#ff9300"
              },
              {
                "text": "+33% Y/Y",
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
            "x": 502.6669921875,
            "top": 756.60498046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#ff2600"
              },
              {
                "text": "(15%) Y/Y",
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
            "x": 502.6669921875,
            "top": 933.71044921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#00a7ff"
              },
              {
                "text": "+21% Y/Y",
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
            "x": 502.6669921875,
            "top": 1148.5810546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#797979"
              }
            ]
          },
          {
            "x": 260.44921875,
            "top": 1182.1529296875,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other Services",
                "size": 36.462890625,
                "weight": 700,
                "color": "#767676"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 968.87109375,
            "top": 535.22314453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
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
            "x": 1429.8662109375,
            "top": 326.86376953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "42% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "(5pp) Y/Y",
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
            "x": 1429.8662109375,
            "top": 1104.3046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1768.4501953125,
            "top": 559.9658203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "income",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "top": 250.03125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "2% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1896.0703125,
            "top": 864.69140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "top": 617.2646484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "21% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "+7pp Y/Y",
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
            "top": 815.2060546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "(2pp) Y/Y",
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
            "top": 1005.333984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "(3pp) Y/Y",
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
            "top": 1190.2529296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Provision for",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "credit losses",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "4% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#767676"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g data-typography-role=\"brand\"><text x=\"90\" y=\"458\" font-size=\"48\" fill=\"#ff5200\">Shopee</text><text x=\"90\" y=\"679\" font-size=\"45\" fill=\"#cc0000\">Garena</text><text x=\"83\" y=\"818\" font-size=\"39\" font-weight=\"800\" fill=\"#000084\">SeaMoney</text></g><text x=\"160\" y=\"490\" font-size=\"18\" fill=\"#767676\">E-commerce</text><text x=\"90\" y=\"710\" font-size=\"18\" fill=\"#767676\">Digital Entertainment</text><text x=\"106\" y=\"851\" font-size=\"18\" fill=\"#767676\">Digital Financial Services</text><path d=\"M1575 221 H1776 Q1792 221 1792 237 V403 Q1792 419 1776 419 H1575 Q1560 419 1560 403 V395 L1533 376 L1560 357 V237 Q1560 221 1575 221 Z\" fill=\"#f2f2f2\" stroke=\"#000084\" stroke-width=\"2\"/><g class=\"sankey-interactive-annotation\" data-node=\"shopee_op\"><text x=\"1597\" y=\"257\" font-size=\"22\" fill=\"#767676\">Shopee</text><text x=\"1705\" y=\"257\" font-size=\"22\" fill=\"#941100\">($0.1B)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"garena_op\"><text x=\"1597\" y=\"304\" font-size=\"22\" fill=\"#767676\">Garena</text><text x=\"1705\" y=\"304\" font-size=\"22\" fill=\"#008f51\">$0.2B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"seamoney_op\"><text x=\"1597\" y=\"351\" font-size=\"22\" fill=\"#767676\">SeaMoney</text><text x=\"1705\" y=\"351\" font-size=\"22\" fill=\"#008f51\">$0.1B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_op\"><text x=\"1597\" y=\"398\" font-size=\"22\" fill=\"#767676\">Other</text><text x=\"1705\" y=\"398\" font-size=\"22\" fill=\"#941100\">($0.2B)</text></g><rect x=\"24\" y=\"989\" width=\"330\" height=\"75\" rx=\"16\" fill=\"#000084\"/><text x=\"44\" y=\"1024\" font-size=\"21\" fill=\"white\">Shopee Marketplace</text><text data-operating-metric=\"shopee-marketplace\" x=\"274\" y=\"1024\" font-size=\"21\" fill=\"white\">$2.4B</text><text x=\"189.0\" y=\"1050\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+33% Y/Y</text><rect x=\"362\" y=\"989\" width=\"292\" height=\"75\" rx=\"16\" fill=\"#000084\"/><text x=\"382\" y=\"1024\" font-size=\"21\" fill=\"white\">Garena Bookings</text><text data-operating-metric=\"garena-bookings\" x=\"574\" y=\"1024\" font-size=\"21\" fill=\"white\">$0.5B</text><text x=\"508.0\" y=\"1050\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+11% Y/Y and +12% Q/Q</text><text x=\"130\" y=\"1104\" font-size=\"28\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "nonNodeMetrics": [
    {
      "id": "shopee_op",
      "label": "Shopee operating profit",
      "value": -0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "representation": "annotation"
    },
    {
      "id": "garena_op",
      "label": "Garena operating profit",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "profit",
      "representation": "annotation"
    },
    {
      "id": "seamoney_op",
      "label": "SeaMoney operating profit",
      "value": 0.1,
      "valueText": "$0.1B",
      "type": "profit",
      "representation": "annotation"
    },
    {
      "id": "other_op",
      "label": "Other operating profit",
      "value": -0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "representation": "annotation"
    }
  ],
  "operatingMetrics": [
    {
      "id": "shopee-marketplace",
      "label": "Shopee Marketplace",
      "value": "2.4",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$2.4B",
      "basis": "unspecified",
      "notes": [
        "+33% Y/Y"
      ],
      "quote": "Shopee Marketplace $2.4B +33% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          31,
          1288,
          430,
          98
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
      "basis": "unspecified",
      "notes": [
        "+11% Y/Y and +12% Q/Q"
      ],
      "quote": "Garena Bookings $0.5B +11% Y/Y and +12% Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          471,
          1288,
          380,
          98
        ]
      }
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "Shopee",
      "Garena",
      "SeaMoney"
    ],
    "zh": {
      "name": "Sea · 2024 财年第一季度",
      "meta": {
        "title": "Sea Limited 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "titleSize": 111.9931640625,
        "titleTextLength": 2278.9306640625
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g data-typography-role=\"brand\"><text x=\"90\" y=\"458\" font-size=\"48\" fill=\"#ff5200\">Shopee</text><text x=\"90\" y=\"679\" font-size=\"45\" fill=\"#cc0000\">Garena</text><text x=\"83\" y=\"818\" font-size=\"39\" font-weight=\"800\" fill=\"#000084\">SeaMoney</text></g><text x=\"160\" y=\"490\" font-size=\"18\" fill=\"#767676\">电商</text><text x=\"90\" y=\"710\" font-size=\"18\" fill=\"#767676\">数字娱乐</text><text x=\"106\" y=\"851\" font-size=\"18\" fill=\"#767676\">数字金融服务</text><path d=\"M1575 221 H1776 Q1792 221 1792 237 V403 Q1792 419 1776 419 H1575 Q1560 419 1560 403 V395 L1533 376 L1560 357 V237 Q1560 221 1575 221 Z\" fill=\"#f2f2f2\" stroke=\"#000084\" stroke-width=\"2\"/><g class=\"sankey-interactive-annotation\" data-node=\"shopee_op\"><text x=\"1597\" y=\"257\" font-size=\"22\" fill=\"#767676\">Shopee</text><text x=\"1705\" y=\"257\" font-size=\"22\" fill=\"#941100\">($0.1B)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"garena_op\"><text x=\"1597\" y=\"304\" font-size=\"22\" fill=\"#767676\">Garena</text><text x=\"1705\" y=\"304\" font-size=\"22\" fill=\"#008f51\">$0.2B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"seamoney_op\"><text x=\"1597\" y=\"351\" font-size=\"22\" fill=\"#767676\">SeaMoney</text><text x=\"1705\" y=\"351\" font-size=\"22\" fill=\"#008f51\">$0.1B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_op\"><text x=\"1597\" y=\"398\" font-size=\"22\" fill=\"#767676\">其他</text><text x=\"1705\" y=\"398\" font-size=\"22\" fill=\"#941100\">($0.2B)</text></g><rect x=\"24\" y=\"989\" width=\"330\" height=\"75\" rx=\"16\" fill=\"#000084\"/><text x=\"44\" y=\"1024\" font-size=\"21\" fill=\"white\">Shopee 市场</text><text data-operating-metric=\"shopee-marketplace\" x=\"274\" y=\"1024\" font-size=\"21\" fill=\"white\">$2.4B</text><text x=\"189.0\" y=\"1050\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +33%</text><rect x=\"362\" y=\"989\" width=\"292\" height=\"75\" rx=\"16\" fill=\"#000084\"/><text x=\"382\" y=\"1024\" font-size=\"21\" fill=\"white\">Garena 预订额</text><text data-operating-metric=\"garena-bookings\" x=\"574\" y=\"1024\" font-size=\"21\" fill=\"white\">$0.5B</text><text x=\"508.0\" y=\"1050\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +11%，环比 +12%</text><text x=\"130\" y=\"1104\" font-size=\"28\" font-weight=\"700\">来源：季度业绩</text></g>",
      "nodes": {
        "shopee": {
          "label": "Shopee 电商",
          "notes": [
            "同比 +33%"
          ]
        },
        "garena": {
          "label": "Garena 游戏娱乐",
          "notes": [
            "同比 (15%)"
          ]
        },
        "seamoney": {
          "label": "SeaMoney 金融服务",
          "notes": [
            "同比 +21%"
          ]
        },
        "other_services": {
          "label": "其他服务",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +23%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 42%",
            "同比 (5 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "other_income": {
          "label": "其他收入",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 21%",
            "同比 +7 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 8%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 8%",
            "同比 (3 个百分点)"
          ]
        },
        "credit_losses": {
          "label": "信用损失拨备",
          "notes": [
            "占收入 4%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "nonNodeMetrics": {
        "shopee_op": {
          "label": "Shopee 营业利润"
        },
        "garena_op": {
          "label": "Garena 营业利润"
        },
        "seamoney_op": {
          "label": "SeaMoney 营业利润"
        },
        "other_op": {
          "label": "其他 营业利润"
        }
      },
      "layout": {
        "labels": {
          "shopee": {
            "blocks": [
              {
                "x": 502.6669921875,
                "top": 375.046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#ff9300"
                  },
                  {
                    "text": "同比 +33%",
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
                "x": 502.6669921875,
                "top": 756.60498046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#ff2600"
                  },
                  {
                    "text": "同比 (15%)",
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
                "x": 502.6669921875,
                "top": 933.71044921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#00a7ff"
                  },
                  {
                    "text": "同比 +21%",
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
                "x": 502.6669921875,
                "top": 1148.5810546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              },
              {
                "x": 260.44921875,
                "top": 1182.1529296875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他服务",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#767676"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 968.87109375,
                "top": 535.22314453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
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
                "x": 1429.8662109375,
                "top": 326.86376953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 42%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 (5 个百分点)",
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
                "x": 1429.8662109375,
                "top": 1104.3046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1768.4501953125,
                "top": 559.9658203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "收入",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "top": 250.03125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1896.0703125,
                "top": 864.69140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "top": 617.2646484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 +7 个百分点",
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
                "top": 815.2060546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "top": 1005.333984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
                "top": 1190.2529296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "拨备",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#767676"
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
