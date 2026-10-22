(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sea-q3-fy22",
  "name": "Sea · Q3 FY22",
  "company": "Sea",
  "meta": {
    "company": "Sea",
    "title": "Sea Limited Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sea-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2461.2451171875,
    "hidePeriodStamp": true,
    "logoSvg": "\n    <defs>\n      <clipPath id=\"sea-q3-fy25-logo-clip\"><circle cx=\"95\" cy=\"95\" r=\"88\"/></clipPath>\n    </defs>\n    <g clip-path=\"url(#sea-q3-fy25-logo-clip)\">\n      <rect x=\"0\" y=\"0\" width=\"190\" height=\"190\" fill=\"#0a0089\"/>\n      <path d=\"M-20 42 C38 5 92 6 136 36 C166 56 196 56 222 43 L222 -20 L-20 -20 Z\" fill=\"#ff2b25\"/>\n      <path d=\"M-20 72 C44 40 89 40 138 66 C166 80 196 78 222 62 L222 23 C184 43 155 45 121 26 C78 2 31 9 -20 42 Z\" fill=\"#ff5a18\"/>\n      <path d=\"M-20 100 C38 76 81 80 129 94 C163 104 190 102 222 88 L222 61 C189 76 165 78 137 66 C87 43 42 39 -20 72 Z\" fill=\"#11cfe3\"/>\n      <path d=\"M-20 135 C42 105 88 112 137 125 C169 133 196 130 222 116 L222 86 C191 101 163 104 129 94 C81 80 39 76 -20 100 Z\" fill=\"#428ee9\"/>\n      <path d=\"M-20 210 L222 210 L222 116 C194 132 166 136 137 125 C87 113 41 106 -20 135 Z\" fill=\"#08008f\"/>\n      <path d=\"M132 64 C158 57 178 57 203 50 L222 44 L222 76 C186 91 162 94 132 83 Z\" fill=\"#00b889\"/>\n    </g>\n    <text x=\"242\" y=\"108\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"118\" font-weight=\"800\" fill=\"#000084\">sea</text>\n    <text x=\"260\" y=\"151\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"21\" font-weight=\"600\" fill=\"#000084\">connecting the dots</text>",
    "logoViewBox": "0 0 540 190",
    "logoWidth": 455.7861328125,
    "logoHeight": 162.78076171875,
    "logoX": 716.2353515625,
    "logoY": 285.19189453125
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#797979",
    "linkOpacity": 1,
    "type": {
      "name": 37.76513671875,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    },
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
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "garena",
      "label": "Garena",
      "value": 0.9,
      "valueText": "$0.9B",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#000084",
      "labelColor": "#ff2600",
      "notes": [
        "(19%) Y/Y"
      ]
    },
    {
      "id": "shopee",
      "label": "Shopee",
      "value": 1.9,
      "valueText": "$1.9B",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#000084",
      "labelColor": "#ff9300",
      "notes": [
        "+32% Y/Y"
      ]
    },
    {
      "id": "seamoney",
      "label": "SeaMoney",
      "value": 0.3,
      "valueText": "$0.3B",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#000084",
      "labelColor": "#009dff",
      "notes": [
        "+147% Y/Y"
      ]
    },
    {
      "id": "other_services",
      "label": "Other Services",
      "value": 0.016,
      "valueText": "$16M",
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#000084",
      "labelColor": "#797979",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.2,
      "valueText": "$3.2B",
      "type": "hub",
      "col": 1,
      "order": 4,
      "color": "#000084",
      "labelColor": "#000084",
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.2,
      "valueText": "$1.2B",
      "type": "profit",
      "col": 2,
      "order": 5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "39% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 1.9,
      "valueText": "($1.9B)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 0.5,
      "valueText": "($0.5B)",
      "type": "cost",
      "col": 3,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "(16%) margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "other_income",
      "label": "Other income",
      "value": 0.066,
      "valueText": "$66M",
      "type": "profit",
      "col": 3,
      "order": 7,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.7,
      "valueText": "($1.7B)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 0.8,
      "valueText": "($0.8B)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 0.6,
      "valueText": "($0.6B)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 0.4,
      "valueText": "($0.4B)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "garena",
      "target": "revenue",
      "value": 0.9,
      "width": 66.41455078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8585c0",
      "targetWidth": 65.1123046875
    },
    {
      "source": "shopee",
      "target": "revenue",
      "value": 1.9,
      "width": 143.2470703125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8585c0"
    },
    {
      "source": "seamoney",
      "target": "revenue",
      "value": 0.3,
      "width": 24.74267578125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#8585c0",
      "targetWidth": 23.4404296875
    },
    {
      "source": "other_services",
      "target": "revenue",
      "value": 0.016,
      "width": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#8585c0"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.2,
      "width": 91.1572265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 1.9,
      "width": 143.2470703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 141.94482421875
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.2,
      "width": 91.1572265625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585",
      "targetWidth": 92.45947265625
    },
    {
      "source": "other_income",
      "target": "operating_expenses",
      "value": 0.066,
      "width": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.5,
      "width": 36.462890625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#e08585",
      "targetWidth": 36.462890625
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.8,
      "width": 61.20556640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.6,
      "width": 40.36962890625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.4,
      "width": 31.25390625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "garena": {
        "x": 457.08837890625,
        "y": 474.017578125,
        "width": 72.92578125,
        "height": 66.41455078125
      },
      "shopee": {
        "x": 457.08837890625,
        "y": 707.11962890625,
        "width": 72.92578125,
        "height": 143.2470703125
      },
      "seamoney": {
        "x": 457.08837890625,
        "y": 1000.125,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "other_services": {
        "x": 457.08837890625,
        "y": 1178.53271484375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 924.5947265625,
        "y": 662.84326171875,
        "width": 72.92578125,
        "height": 234.404296875
      },
      "gross_profit": {
        "x": 1382.9853515625,
        "y": 467.50634765625,
        "width": 71.62353515625,
        "height": 91.1572265625
      },
      "cost_of_revenue": {
        "x": 1382.9853515625,
        "y": 1069.14404296875,
        "width": 71.62353515625,
        "height": 141.94482421875
      },
      "other_income": {
        "x": 1731.9873046875,
        "y": 544.3388671875,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "operating_loss": {
        "x": 1685.1064453125,
        "y": 836.0419921875,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "operating_expenses": {
        "x": 1919.5107421875,
        "y": 664.1455078125,
        "width": 72.92578125,
        "height": 132.8291015625
      },
      "sm": {
        "x": 2327.11376953125,
        "y": 778.7431640625,
        "width": 71.62353515625,
        "height": 61.20556640625
      },
      "ga": {
        "x": 2327.11376953125,
        "y": 1006.63623046875,
        "width": 71.62353515625,
        "height": 40.36962890625
      },
      "rnd": {
        "x": 2327.11376953125,
        "y": 1216.2978515625,
        "width": 71.62353515625,
        "height": 31.25390625
      }
    },
    "labels": {
      "garena": {
        "blocks": [
          {
            "x": 494.853515625,
            "top": 376.34912109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#ff2600"
              },
              {
                "text": "(19%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "shopee": {
        "blocks": [
          {
            "x": 494.853515625,
            "top": 609.451171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#ff9300"
              },
              {
                "text": "+32% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "seamoney": {
        "blocks": [
          {
            "x": 494.853515625,
            "top": 901.154296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#009dff"
              },
              {
                "text": "+147% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "other_services": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 1122.5361328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          },
          {
            "x": 247.4267578125,
            "top": 1156.57880859375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other Services",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 961.0576171875,
            "top": 514.38720703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#000084"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#000084"
              },
              {
                "text": "+17% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1418.14599609375,
            "top": 278.6806640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "39% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1418.14599609375,
            "top": 1225.41357421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1536.650390625,
            "top": 787.85888671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating loss",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "(16%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1768.4501953125,
            "top": 410.20751953125,
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
                "text": "income",
                "size": 31.25390625,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1955.9736328125,
            "top": 509.17822265625,
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
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 768.3251953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "marketing",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 981.8935546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "admin",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 1187.6484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
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
      "id": "shopee_gmv",
      "value": "19",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$19B"
    },
    {
      "id": "garena_bookings",
      "value": "0.6",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.6B"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "garena_op",
      "label": "Garena operating profit",
      "value": 0.5,
      "type": "profit",
      "representation": "annotation",
      "valueText": "$0.5B"
    },
    {
      "id": "shopee_op",
      "label": "Shopee operating loss",
      "value": -0.6,
      "type": "cost",
      "representation": "annotation",
      "valueText": "($0.6B)"
    },
    {
      "id": "seamoney_op",
      "label": "SeaMoney operating loss",
      "value": -0.1,
      "type": "cost",
      "representation": "annotation",
      "valueText": "($0.1B)"
    },
    {
      "id": "other_op",
      "label": "Other operating loss",
      "value": -0.3,
      "type": "cost",
      "representation": "annotation",
      "valueText": "($0.3B)"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><g data-typography-role=\"brand\">\n    <g transform=\"translate(68 349) scale(0.43)\" fill=\"#cc0000\">\n      <path d=\"M86 8 C61 20 40 24 13 24 C42 39 76 37 104 26 C94 39 81 49 64 55 C38 64 21 80 13 101 C30 86 50 80 72 82 C53 92 45 108 50 128 C61 114 74 105 91 102 C82 118 86 135 103 147 C102 124 115 108 137 97 C113 94 99 84 95 67 C116 63 136 53 153 36 C130 39 112 34 99 21 C96 16 91 11 86 8 Z\"/>\n      <circle cx=\"78\" cy=\"105\" r=\"20\" fill=\"#ffffff\"/>\n      <circle cx=\"81\" cy=\"105\" r=\"10\" fill=\"#cc0000\"/>\n    </g><text x=\"145\" y=\"398\" font-size=\"43\" fill=\"#cc0000\" >Garena</text></g><text x=\"120\" y=\"431\" font-size=\"18\" fill=\"#797979\" >Digital Entertainment</text><g data-typography-role=\"brand\">\n    <g transform=\"translate(72 539) scale(0.72)\">\n      <path d=\"M7 23 H75 L69 93 Q68 105 56 105 H26 Q14 105 13 93 Z\" fill=\"#ff5200\"/>\n      <path d=\"M26 24 V17 C26 4 56 4 56 17 V24\" fill=\"none\" stroke=\"#ff5200\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <text x=\"41\" y=\"78\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"60\" fill=\"#ffffff\">S</text>\n    </g><text x=\"145\" y=\"604\" font-size=\"43\" fill=\"#ff5200\" >Shopee</text></g><text x=\"120\" y=\"637\" font-size=\"18\" fill=\"#797979\" >E-commerce</text><g data-typography-role=\"brand\"><g transform=\"translate(70 738)\"><circle cx=\"23\" cy=\"23\" r=\"23\" fill=\"#000084\"/><rect x=\"19\" y=\"18\" width=\"9\" height=\"9\" fill=\"#ffffff\"/><path d=\"M0 43 Q21 31 43 43 M0 48 Q21 36 43 48\" fill=\"none\" stroke=\"#428ee9\" stroke-width=\"3\"/></g><text x=\"126\" y=\"778\" font-size=\"35\" fill=\"#004eeb\" >SeaMoney</text></g><text x=\"110\" y=\"811\" font-size=\"18\" fill=\"#797979\" >Digital Financial Services</text><path d=\"M1279 708 H1300 L1324 680 L1343 708 H1481 Q1497 708 1497 724 V890 Q1497 906 1481 906 H1280 Q1264 906 1264 890 V724 Q1264 708 1279 708Z\" fill=\"#f2f2f2\" stroke=\"#000084\" stroke-width=\"2\"/><g class=\"sankey-interactive-annotation\" data-node=\"garena_op\"><text x=\"1280\" y=\"746\" font-size=\"23\" fill=\"#000084\" >Garena</text><text x=\"1401\" y=\"746\" font-size=\"23\" fill=\"#008f51\" >$0.5B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"shopee_op\"><text x=\"1280\" y=\"793\" font-size=\"23\" fill=\"#000084\" >Shopee</text><text x=\"1401\" y=\"793\" font-size=\"23\" fill=\"#941100\" >($0.6B)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"seamoney_op\"><text x=\"1280\" y=\"839\" font-size=\"23\" fill=\"#000084\" >SeaMoney</text><text x=\"1401\" y=\"839\" font-size=\"23\" fill=\"#941100\" >($0.1B)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_op\"><text x=\"1280\" y=\"883\" font-size=\"23\" fill=\"#797979\" >Other</text><text x=\"1401\" y=\"883\" font-size=\"23\" fill=\"#941100\" >($0.3B)</text></g><rect x=\"24\" y=\"960\" width=\"290\" height=\"77\" rx=\"16\" fill=\"#000084\"/><text x=\"42\" y=\"997\" font-size=\"21\" fill=\"#ffffff\" font-weight=\"700\">Shopee GMV</text><text x=\"214\" y=\"997\" font-size=\"21\" fill=\"#ffffff\" data-operating-metric=\"shopee_gmv\">$19B</text><text x=\"129\" y=\"1021\" font-size=\"18\" fill=\"#ffffff\" >+14% Y/Y</text><rect x=\"322\" y=\"960\" width=\"292\" height=\"77\" rx=\"16\" fill=\"#000084\"/><text x=\"340\" y=\"997\" font-size=\"21\" fill=\"#ffffff\" font-weight=\"700\">Garena Bookings</text><text x=\"512\" y=\"997\" font-size=\"21\" fill=\"#ffffff\" data-operating-metric=\"garena_bookings\">$0.6B</text><text x=\"427\" y=\"1021\" font-size=\"18\" fill=\"#ffffff\" >(46%) Y/Y</text><text x=\"160\" y=\"1061\" font-size=\"21\" fill=\"#797979\" >GMV = Gross Merchandise Volume</text><text x=\"130\" y=\"1103\" font-size=\"29\" fill=\"#000000\" font-weight=\"700\">Source: Quarterly results</text></g></g>",
  "i18n": {
    "preservedAnnotationText": [
      "Garena",
      "Shopee",
      "SeaMoney"
    ],
    "zh": {
      "name": "Sea · 2022 财年第三季度",
      "meta": {
        "title": "Sea Limited 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月"
      },
      "nodes": {
        "garena": {
          "label": "Garena 游戏娱乐",
          "notes": [
            "同比 (19%)"
          ]
        },
        "shopee": {
          "label": "Shopee 电商",
          "notes": [
            "同比 +32%"
          ]
        },
        "seamoney": {
          "label": "SeaMoney 金融服务",
          "notes": [
            "同比 +147%"
          ]
        },
        "other_services": {
          "label": "其他服务",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +17%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 39%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (16%)",
            "同比 +1 个百分点"
          ]
        },
        "other_income": {
          "label": "其他收入",
          "notes": []
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": []
        },
        "ga": {
          "label": "一般及行政",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        }
      },
      "nonNodeMetrics": {
        "garena_op": {
          "label": "Garena 营业利润"
        },
        "shopee_op": {
          "label": "Shopee 营业亏损"
        },
        "seamoney_op": {
          "label": "SeaMoney 营业亏损"
        },
        "other_op": {
          "label": "其他营业亏损"
        }
      },
      "layout": {
        "labels": {
          "garena": {
            "blocks": [
              {
                "x": 494.853515625,
                "top": 376.34912109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#ff2600"
                  },
                  {
                    "text": "同比 (19%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "shopee": {
            "blocks": [
              {
                "x": 494.853515625,
                "top": 609.451171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#ff9300"
                  },
                  {
                    "text": "同比 +32%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "seamoney": {
            "blocks": [
              {
                "x": 494.853515625,
                "top": 901.154296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#009dff"
                  },
                  {
                    "text": "同比 +147%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "other_services": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 1122.5361328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              },
              {
                "x": 247.4267578125,
                "top": 1156.57880859375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他服务",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 961.0576171875,
                "top": 514.38720703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#000084"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#000084"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1418.14599609375,
                "top": 278.6806640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "毛利率 39%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1418.14599609375,
                "top": 1225.41357421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1536.650390625,
                "top": 787.85888671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "利润率 (16%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1768.4501953125,
                "top": 410.20751953125,
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
                    "text": "收入",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1955.9736328125,
                "top": 509.17822265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 768.3251953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "营销",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 981.8935546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "行政",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 1187.6484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "开发",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><g data-typography-role=\"brand\">\n    <g transform=\"translate(68 349) scale(0.43)\" fill=\"#cc0000\">\n      <path d=\"M86 8 C61 20 40 24 13 24 C42 39 76 37 104 26 C94 39 81 49 64 55 C38 64 21 80 13 101 C30 86 50 80 72 82 C53 92 45 108 50 128 C61 114 74 105 91 102 C82 118 86 135 103 147 C102 124 115 108 137 97 C113 94 99 84 95 67 C116 63 136 53 153 36 C130 39 112 34 99 21 C96 16 91 11 86 8 Z\"/>\n      <circle cx=\"78\" cy=\"105\" r=\"20\" fill=\"#ffffff\"/>\n      <circle cx=\"81\" cy=\"105\" r=\"10\" fill=\"#cc0000\"/>\n    </g><text x=\"145\" y=\"398\" font-size=\"43\" fill=\"#cc0000\" >Garena</text></g><text x=\"120\" y=\"431\" font-size=\"18\" fill=\"#797979\" >数字娱乐</text><g data-typography-role=\"brand\">\n    <g transform=\"translate(72 539) scale(0.72)\">\n      <path d=\"M7 23 H75 L69 93 Q68 105 56 105 H26 Q14 105 13 93 Z\" fill=\"#ff5200\"/>\n      <path d=\"M26 24 V17 C26 4 56 4 56 17 V24\" fill=\"none\" stroke=\"#ff5200\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <text x=\"41\" y=\"78\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"60\" fill=\"#ffffff\">S</text>\n    </g><text x=\"145\" y=\"604\" font-size=\"43\" fill=\"#ff5200\" >Shopee</text></g><text x=\"120\" y=\"637\" font-size=\"18\" fill=\"#797979\" >电商</text><g data-typography-role=\"brand\"><g transform=\"translate(70 738)\"><circle cx=\"23\" cy=\"23\" r=\"23\" fill=\"#000084\"/><rect x=\"19\" y=\"18\" width=\"9\" height=\"9\" fill=\"#ffffff\"/><path d=\"M0 43 Q21 31 43 43 M0 48 Q21 36 43 48\" fill=\"none\" stroke=\"#428ee9\" stroke-width=\"3\"/></g><text x=\"126\" y=\"778\" font-size=\"35\" fill=\"#004eeb\" >SeaMoney</text></g><text x=\"110\" y=\"811\" font-size=\"18\" fill=\"#797979\" >数字金融服务</text><path d=\"M1279 708 H1300 L1324 680 L1343 708 H1481 Q1497 708 1497 724 V890 Q1497 906 1481 906 H1280 Q1264 906 1264 890 V724 Q1264 708 1279 708Z\" fill=\"#f2f2f2\" stroke=\"#000084\" stroke-width=\"2\"/><g class=\"sankey-interactive-annotation\" data-node=\"garena_op\"><text x=\"1280\" y=\"746\" font-size=\"23\" fill=\"#000084\" >Garena</text><text x=\"1401\" y=\"746\" font-size=\"23\" fill=\"#008f51\" >$0.5B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"shopee_op\"><text x=\"1280\" y=\"793\" font-size=\"23\" fill=\"#000084\" >Shopee</text><text x=\"1401\" y=\"793\" font-size=\"23\" fill=\"#941100\" >($0.6B)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"seamoney_op\"><text x=\"1280\" y=\"839\" font-size=\"23\" fill=\"#000084\" >SeaMoney</text><text x=\"1401\" y=\"839\" font-size=\"23\" fill=\"#941100\" >($0.1B)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_op\"><text x=\"1280\" y=\"883\" font-size=\"23\" fill=\"#797979\" >其他</text><text x=\"1401\" y=\"883\" font-size=\"23\" fill=\"#941100\" >($0.3B)</text></g><rect x=\"24\" y=\"960\" width=\"290\" height=\"77\" rx=\"16\" fill=\"#000084\"/><text x=\"42\" y=\"997\" font-size=\"21\" fill=\"#ffffff\" font-weight=\"700\">Shopee 交易总额</text><text x=\"214\" y=\"997\" font-size=\"21\" fill=\"#ffffff\" data-operating-metric=\"shopee_gmv\">$19B</text><text x=\"129\" y=\"1021\" font-size=\"18\" fill=\"#ffffff\" >同比 +14%</text><rect x=\"322\" y=\"960\" width=\"292\" height=\"77\" rx=\"16\" fill=\"#000084\"/><text x=\"340\" y=\"997\" font-size=\"21\" fill=\"#ffffff\" font-weight=\"700\">Garena 预订额</text><text x=\"512\" y=\"997\" font-size=\"21\" fill=\"#ffffff\" data-operating-metric=\"garena_bookings\">$0.6B</text><text x=\"427\" y=\"1021\" font-size=\"18\" fill=\"#ffffff\" >同比 (46%)</text><text x=\"160\" y=\"1061\" font-size=\"21\" fill=\"#797979\" >GMV = 商品交易总额</text><text x=\"130\" y=\"1103\" font-size=\"29\" fill=\"#000000\" font-weight=\"700\">来源：季度业绩</text></g></g>"
    }
  }
});})();
