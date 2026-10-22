window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sea-q3-fy23",
  "name": "Sea · Q3 FY23",
  "company": "Sea",
  "meta": {
    "company": "Sea",
    "title": "Sea Limited Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sea-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2461.2451171875,
    "hidePeriodStamp": true,
    "logoSvg": "\n    <defs>\n      <clipPath id=\"sea-q3-fy23-logo-clip\"><circle cx=\"95\" cy=\"95\" r=\"88\"/></clipPath>\n    </defs>\n    <g clip-path=\"url(#sea-q3-fy23-logo-clip)\">\n      <rect x=\"0\" y=\"0\" width=\"190\" height=\"190\" fill=\"#0a0089\"/>\n      <path d=\"M-20 42 C38 5 92 6 136 36 C166 56 196 56 222 43 L222 -20 L-20 -20 Z\" fill=\"#ff2b25\"/>\n      <path d=\"M-20 72 C44 40 89 40 138 66 C166 80 196 78 222 62 L222 23 C184 43 155 45 121 26 C78 2 31 9 -20 42 Z\" fill=\"#ff5a18\"/>\n      <path d=\"M-20 100 C38 76 81 80 129 94 C163 104 190 102 222 88 L222 61 C189 76 165 78 137 66 C87 43 42 39 -20 72 Z\" fill=\"#11cfe3\"/>\n      <path d=\"M-20 135 C42 105 88 112 137 125 C169 133 196 130 222 116 L222 86 C191 101 163 104 129 94 C81 80 39 76 -20 100 Z\" fill=\"#428ee9\"/>\n      <path d=\"M-20 210 L222 210 L222 116 C194 132 166 136 137 125 C87 113 41 106 -20 135 Z\" fill=\"#08008f\"/>\n      <path d=\"M132 64 C158 57 178 57 203 50 L222 44 L222 76 C186 91 162 94 132 83 Z\" fill=\"#00b889\"/>\n    </g>\n    <text x=\"242\" y=\"108\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"118\" font-weight=\"800\" fill=\"#000084\">sea</text>\n    <text x=\"260\" y=\"151\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"21\" font-weight=\"600\" fill=\"#000084\">connecting the dots</text>",
    "logoViewBox": "0 0 540 190",
    "logoWidth": 455.7861328125,
    "logoHeight": 169.2919921875,
    "logoX": 690.1904296875,
    "logoY": 302.12109375
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
      "name": 36.462890625,
      "value": 36.462890625,
      "note": 26.044921875,
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
      "value": 2.2,
      "valueText": "$2.2B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+16% Y/Y",
        "E-commerce",
        "(16%) adjusted margin",
        "+10pp Y/Y"
      ]
    },
    {
      "id": "garena",
      "label": "Garena",
      "value": 0.6,
      "valueText": "$0.6B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(34%) Y/Y",
        "Digital Entertainment",
        "40% adjusted margin",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "seamoney",
      "label": "SeaMoney",
      "value": 0.4,
      "valueText": "$0.4B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+37% Y/Y",
        "Digital Financial Services",
        "37% adjusted margin",
        "+58pp Y/Y"
      ]
    },
    {
      "id": "other_services",
      "label": "Other Services",
      "value": 0.04,
      "valueText": "$40M",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.3,
      "valueText": "$3.3B",
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.4,
      "valueText": "$1.4B",
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "44% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 1.9,
      "valueText": "($1.9B)",
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other income",
      "value": 0.047,
      "valueText": "$47M",
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [
        "(4%) margin",
        "+12pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.6,
      "valueText": "($1.6B)",
      "type": "cost",
      "col": 4,
      "order": 0,
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.9,
      "valueText": "($0.9B)",
      "type": "cost",
      "col": 5,
      "order": 0,
      "notes": [
        "28% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [
        "8% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [
        "8% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "credit_losses",
      "label": "Provision for credit losses",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 5,
      "order": 3,
      "notes": [
        "4% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "shopee",
      "target": "revenue",
      "value": 2.2,
      "sourceWidth": 177.10546875,
      "targetWidth": 177.10546875,
      "y0": 566.47705078125,
      "y1": 763.1162109375
    },
    {
      "source": "garena",
      "target": "revenue",
      "value": 0.6,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "y0": 838.646484375,
      "y1": 875.109375
    },
    {
      "source": "seamoney",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "y0": 1034.634521484375,
      "y1": 916.130126953125
    },
    {
      "source": "other_services",
      "target": "revenue",
      "value": 0.04,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 1228.01806640625,
      "y1": 935.0126953125
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.4,
      "sourceWidth": 114.59765625,
      "targetWidth": 114.59765625,
      "y0": 731.8623046875,
      "y1": 503.96923828125
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 1.9,
      "sourceWidth": 147.15380859375,
      "targetWidth": 147.15380859375,
      "y0": 862.738037109375,
      "y1": 1081.515380859375
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.4,
      "sourceWidth": 114.59765625,
      "targetWidth": 117.2021484375,
      "y0": 503.96923828125,
      "y1": 734.466796875
    },
    {
      "source": "other",
      "target": "operating_expenses",
      "value": 0.047,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 449.27490234375,
      "y1": 677.16796875
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.1,
      "sourceWidth": 9.11572265625,
      "targetWidth": 10.41796875,
      "y0": 844.506591796875,
      "y1": 798.27685546875
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.9,
      "sourceWidth": 72.92578125,
      "targetWidth": 72.92578125,
      "y0": 712.32861328125,
      "y1": 433.64794921875
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.3,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "y0": 759.860595703125,
      "y1": 681.725830078125
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "y0": 781.998779296875,
      "y1": 917.432373046875
    },
    {
      "source": "operating_expenses",
      "target": "credit_losses",
      "value": 0.1,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "y0": 798.27685546875,
      "y1": 1158.9990234375
    }
  ],
  "layout": {
    "nodes": {
      "shopee": {
        "x": 460.9951171875,
        "y": 477.92431640625,
        "width": 72.92578125,
        "height": 177.10546875
      },
      "garena": {
        "x": 460.9951171875,
        "y": 815.2060546875,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "seamoney": {
        "x": 460.9951171875,
        "y": 1017.05419921875,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "other_services": {
        "x": 460.9951171875,
        "y": 1226.7158203125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 928.50146484375,
        "y": 674.5634765625,
        "width": 72.92578125,
        "height": 261.75146484375
      },
      "gross_profit": {
        "x": 1392.10107421875,
        "y": 446.67041015625,
        "width": 72.92578125,
        "height": 114.59765625
      },
      "cost_of_revenue": {
        "x": 1394.70556640625,
        "y": 1007.9384765625,
        "width": 72.92578125,
        "height": 147.15380859375
      },
      "other": {
        "x": 1630.412109375,
        "y": 447.97265625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "operating_loss": {
        "x": 1630.412109375,
        "y": 839.94873046875,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "operating_expenses": {
        "x": 1857.0029296875,
        "y": 675.86572265625,
        "width": 72.92578125,
        "height": 127.6201171875
      },
      "sm": {
        "x": 2329.71826171875,
        "y": 397.18505859375,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "rnd": {
        "x": 2329.71826171875,
        "y": 670.65673828125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "ga": {
        "x": 2329.71826171875,
        "y": 906.36328125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "credit_losses": {
        "x": 2329.71826171875,
        "y": 1153.7900390625,
        "width": 72.92578125,
        "height": 10.41796875
      }
    },
    "labels": {
      "shopee": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 371.46484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "+16% Y/Y",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "garena": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 707.4443359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "(34%) Y/Y",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "seamoney": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 920.68798828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "+37% Y/Y",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_services": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 1173.32373046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 260.44921875,
            "top": 1205.58662109375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other Services",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 964.96435546875,
            "top": 528.7119140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1428.56396484375,
            "top": 261.75146484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "44% margin",
                "size": 26.044921875,
                "weight": 400
              },
              {
                "text": "+5pp Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1431.16845703125,
            "top": 1170.71923828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 1666.875,
            "top": 319.05029296875,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1478.7919921875,
            "top": 772.23193359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating loss",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "(4%) margin",
                "size": 26.044921875,
                "weight": 400
              },
              {
                "text": "+12pp Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1893.4658203125,
            "top": 523.5029296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2514.63720703125,
            "top": 399.78955078125,
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
                "text": "28% of revenue",
                "size": 26.044921875,
                "weight": 400
              },
              {
                "text": "+2pp Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2514.63720703125,
            "top": 645.9140625,
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
                "size": 26.044921875,
                "weight": 400
              },
              {
                "text": "(5pp) Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2514.63720703125,
            "top": 880.318359375,
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
                "size": 26.044921875,
                "weight": 400
              },
              {
                "text": "(5pp) Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "credit_losses": {
        "blocks": [
          {
            "x": 2514.63720703125,
            "top": 1122.5361328125,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 26.044921875,
                "weight": 400
              },
              {
                "text": "4% of revenue",
                "size": 26.044921875,
                "weight": 400
              },
              {
                "text": "(0pp) Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "shopee-marketplace",
      "value": "1.9",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.9B"
    },
    {
      "id": "garena-bookings",
      "value": "0.4",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.4B"
    },
    {
      "id": "shopee-operating-loss",
      "value": "-0.4",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "($0.4B)"
    },
    {
      "id": "garena-operating-profit",
      "value": "0.3",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.3B"
    },
    {
      "id": "seamoney-operating-profit",
      "value": "0.2",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.2B"
    },
    {
      "id": "other-operating-loss",
      "value": "-0.2",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "($0.2B)"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g data-typography-role=\"brand\"><text x=\"200\" y=\"435\" font-size=\"44\" fill=\"#ff5200\" font-weight=\"700\" text-anchor=\"middle\">Shopee</text></g><text x=\"200\" y=\"466\" font-size=\"18\" fill=\"#ff5200\" font-weight=\"400\" text-anchor=\"middle\">E-commerce</text><text x=\"200\" y=\"489\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">(16%) adjusted margin</text><text x=\"200\" y=\"512\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">+10pp Y/Y</text><g data-typography-role=\"brand\"><text x=\"200\" y=\"659\" font-size=\"44\" fill=\"#cc0000\" font-weight=\"700\" text-anchor=\"middle\">Garena</text></g><text x=\"200\" y=\"690\" font-size=\"18\" fill=\"#cc0000\" font-weight=\"400\" text-anchor=\"middle\">Digital Entertainment</text><text x=\"200\" y=\"713\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">40% adjusted margin</text><text x=\"200\" y=\"736\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">+7pp Y/Y</text><g data-typography-role=\"brand\"><text x=\"200\" y=\"806\" font-size=\"44\" fill=\"#428eff\" font-weight=\"700\" text-anchor=\"middle\">SeaMoney</text></g><text x=\"200\" y=\"837\" font-size=\"18\" fill=\"#428eff\" font-weight=\"400\" text-anchor=\"middle\">Digital Financial Services</text><text x=\"200\" y=\"860\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">37% adjusted margin</text><text x=\"200\" y=\"883\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">+58pp Y/Y</text><path d=\"M1255 693 L1283 664 L1302 693 H1452 Q1468 693 1468 710 V874 Q1468 892 1452 892 H1251 Q1235 892 1235 875 V711 Q1235 693 1255 693Z\" fill=\"#f2f2f2\" stroke=\"#000084\" stroke-width=\"2\"/><rect x=\"24\" y=\"989\" width=\"330\" height=\"76\" rx=\"16\" fill=\"#000084\"/><text x=\"151\" y=\"1024\" font-size=\"20\" fill=\"white\" font-weight=\"700\" text-anchor=\"middle\">Shopee Marketplace</text><text x=\"309\" y=\"1024\" font-size=\"16\" fill=\"white\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"shopee-marketplace\">$1.9B</text><text x=\"189\" y=\"1049\" font-size=\"16\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">+18% Y/Y</text><rect x=\"362\" y=\"989\" width=\"292\" height=\"76\" rx=\"16\" fill=\"#000084\"/><text x=\"470\" y=\"1024\" font-size=\"20\" fill=\"white\" font-weight=\"700\" text-anchor=\"middle\">Garena Bookings</text><text x=\"609\" y=\"1024\" font-size=\"16\" fill=\"white\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"garena-bookings\">$0.4B</text><text x=\"508\" y=\"1049\" font-size=\"16\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">(33%) Y/Y and +1% Q/Q</text><text x=\"1250\" y=\"739\" font-size=\"24\" fill=\"#000084\" font-weight=\"500\" >Shopee</text><text x=\"1380\" y=\"739\" font-size=\"23\" fill=\"#941100\" font-weight=\"400\" data-operating-metric=\"shopee-operating-loss\">($0.4B)</text><text x=\"1250\" y=\"782\" font-size=\"24\" fill=\"#000084\" font-weight=\"500\" >Garena</text><text x=\"1380\" y=\"782\" font-size=\"23\" fill=\"#008f51\" font-weight=\"400\" data-operating-metric=\"garena-operating-profit\">$0.3B</text><text x=\"1250\" y=\"825\" font-size=\"24\" fill=\"#000084\" font-weight=\"500\" >SeaMoney</text><text x=\"1380\" y=\"825\" font-size=\"23\" fill=\"#008f51\" font-weight=\"400\" data-operating-metric=\"seamoney-operating-profit\">$0.2B</text><text x=\"1250\" y=\"868\" font-size=\"24\" fill=\"#767676\" font-weight=\"500\" >Other</text><text x=\"1380\" y=\"868\" font-size=\"23\" fill=\"#941100\" font-weight=\"400\" data-operating-metric=\"other-operating-loss\">($0.2B)</text><text x=\"130\" y=\"1110\" font-size=\"26\" fill=\"black\" font-weight=\"700\" >Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Sea · 2023 财年第三季度",
      "meta": {
        "title": "Sea Limited 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月"
      },
      "nodes": {
        "shopee": {
          "label": "Shopee 电商",
          "notes": [
            "同比 +16%",
            "电商",
            "调整后利润率 (16%)",
            "同比 +10 个百分点"
          ]
        },
        "garena": {
          "label": "Garena 游戏娱乐",
          "notes": [
            "同比 (34%)",
            "数字娱乐",
            "调整后利润率 40%",
            "同比 +7 个百分点"
          ]
        },
        "seamoney": {
          "label": "SeaMoney 金融服务",
          "notes": [
            "同比 +37%",
            "数字金融服务",
            "调整后利润率 37%",
            "同比 +58 个百分点"
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
          "label": "毛利润",
          "notes": [
            "毛利率 44%",
            "同比 +5 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "other": {
          "label": "其他收入",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (4%)",
            "同比 +12 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 28%",
            "同比 +2 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 8%",
            "同比 (5 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 8%",
            "同比 (5 个百分点)"
          ]
        },
        "credit_losses": {
          "label": "信用损失拨备",
          "notes": [
            "占收入 4%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "shopee": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 371.46484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "同比 +16%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "garena": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 707.4443359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "同比 (34%)",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "seamoney": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 920.68798828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "同比 +37%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_services": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 1173.32373046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 260.44921875,
                "top": 1205.58662109375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他服务",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 964.96435546875,
                "top": 528.7119140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1428.56396484375,
                "top": 261.75146484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 44%",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1431.16845703125,
                "top": 1170.71923828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 1666.875,
                "top": 319.05029296875,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1478.7919921875,
                "top": 772.23193359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12 个百分点",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1893.4658203125,
                "top": 523.5029296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2514.63720703125,
                "top": 399.78955078125,
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
                    "text": "占收入 28%",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2514.63720703125,
                "top": 645.9140625,
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
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2514.63720703125,
                "top": 880.318359375,
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
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "credit_losses": {
            "blocks": [
              {
                "x": 2514.63720703125,
                "top": 1122.5361328125,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "占收入 4%",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g data-typography-role=\"brand\"><text x=\"200\" y=\"435\" font-size=\"44\" fill=\"#ff5200\" font-weight=\"700\" text-anchor=\"middle\">Shopee</text></g><text x=\"200\" y=\"466\" font-size=\"18\" fill=\"#ff5200\" font-weight=\"400\" text-anchor=\"middle\">电商</text><text x=\"200\" y=\"489\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">调整后利润率 (16%)</text><text x=\"200\" y=\"512\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">同比 +10 个百分点</text><g data-typography-role=\"brand\"><text x=\"200\" y=\"659\" font-size=\"44\" fill=\"#cc0000\" font-weight=\"700\" text-anchor=\"middle\">Garena</text></g><text x=\"200\" y=\"690\" font-size=\"18\" fill=\"#cc0000\" font-weight=\"400\" text-anchor=\"middle\">数字娱乐</text><text x=\"200\" y=\"713\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">调整后利润率 40%</text><text x=\"200\" y=\"736\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">同比 +7 个百分点</text><g data-typography-role=\"brand\"><text x=\"200\" y=\"806\" font-size=\"44\" fill=\"#428eff\" font-weight=\"700\" text-anchor=\"middle\">SeaMoney</text></g><text x=\"200\" y=\"837\" font-size=\"18\" fill=\"#428eff\" font-weight=\"400\" text-anchor=\"middle\">数字金融服务</text><text x=\"200\" y=\"860\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">调整后利润率 37%</text><text x=\"200\" y=\"883\" font-size=\"17\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">同比 +58 个百分点</text><path d=\"M1255 693 L1283 664 L1302 693 H1452 Q1468 693 1468 710 V874 Q1468 892 1452 892 H1251 Q1235 892 1235 875 V711 Q1235 693 1255 693Z\" fill=\"#f2f2f2\" stroke=\"#000084\" stroke-width=\"2\"/><rect x=\"24\" y=\"989\" width=\"330\" height=\"76\" rx=\"16\" fill=\"#000084\"/><text x=\"151\" y=\"1024\" font-size=\"20\" fill=\"white\" font-weight=\"700\" text-anchor=\"middle\">Shopee 市场</text><text x=\"309\" y=\"1024\" font-size=\"16\" fill=\"white\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"shopee-marketplace\">$1.9B</text><text x=\"189\" y=\"1049\" font-size=\"16\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">同比 +18%</text><rect x=\"362\" y=\"989\" width=\"292\" height=\"76\" rx=\"16\" fill=\"#000084\"/><text x=\"470\" y=\"1024\" font-size=\"20\" fill=\"white\" font-weight=\"700\" text-anchor=\"middle\">Garena 预订额</text><text x=\"609\" y=\"1024\" font-size=\"16\" fill=\"white\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"garena-bookings\">$0.4B</text><text x=\"508\" y=\"1049\" font-size=\"16\" fill=\"#767676\" font-weight=\"400\" text-anchor=\"middle\">同比 (33%)，环比 +1%</text><text x=\"1250\" y=\"739\" font-size=\"24\" fill=\"#000084\" font-weight=\"500\" >Shopee</text><text x=\"1380\" y=\"739\" font-size=\"23\" fill=\"#941100\" font-weight=\"400\" data-operating-metric=\"shopee-operating-loss\">($0.4B)</text><text x=\"1250\" y=\"782\" font-size=\"24\" fill=\"#000084\" font-weight=\"500\" >Garena</text><text x=\"1380\" y=\"782\" font-size=\"23\" fill=\"#008f51\" font-weight=\"400\" data-operating-metric=\"garena-operating-profit\">$0.3B</text><text x=\"1250\" y=\"825\" font-size=\"24\" fill=\"#000084\" font-weight=\"500\" >SeaMoney</text><text x=\"1380\" y=\"825\" font-size=\"23\" fill=\"#008f51\" font-weight=\"400\" data-operating-metric=\"seamoney-operating-profit\">$0.2B</text><text x=\"1250\" y=\"868\" font-size=\"24\" fill=\"#767676\" font-weight=\"500\" >其他</text><text x=\"1380\" y=\"868\" font-size=\"23\" fill=\"#941100\" font-weight=\"400\" data-operating-metric=\"other-operating-loss\">($0.2B)</text><text x=\"130\" y=\"1110\" font-size=\"26\" fill=\"black\" font-weight=\"700\" >来源：季度业绩</text></g>"
    }
  }
});
