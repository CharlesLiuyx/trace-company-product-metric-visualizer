(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbus-fy23",
  "name": "Airbus · FY23",
  "company": "Airbus",
  "meta": {
    "company": "Airbus",
    "title": "Airbus FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbus-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 130.224609375,
    "titleWeight": 800,
    "titleTextLength": 1933.83544921875,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#00357a",
        "label": "#00357a"
      },
      "hub": {
        "node": "#00357a",
        "label": "#00357a"
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
      "source": "#859dbc",
      "hub": "#859dbc",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 29,
      "note": 21,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g font-family=\"Montserrat,Arial,sans-serif\"><rect x=\"71.62353515625\" y=\"1217.60009765625\" width=\"449.27490234375\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00357a\"/><text x=\"295.60986328125\" y=\"1269.68994140625\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"800\" fill=\"white\">Deliveries</text><text data-operating-metric=\"deliveries\" x=\"122.4111328125\" y=\"1311.36181640625\" text-anchor=\"start\" font-size=\"31.25390625\" fill=\"white\">735</text><text x=\"188.82568359375\" y=\"1311.36181640625\" text-anchor=\"start\" font-size=\"31.25390625\" fill=\"white\">commercial airplanes</text><text x=\"295.60986328125\" y=\"1351.7314453125\" text-anchor=\"middle\" font-size=\"29.95166015625\" fill=\"white\">+12% Y/Y</text><rect x=\"530.01416015625\" y=\"1217.60009765625\" width=\"240.91552734375\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00357a\"/><text x=\"650.471923828125\" y=\"1269.68994140625\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"800\" fill=\"white\">Backlog</text><text data-operating-metric=\"backlog\" x=\"650.471923828125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"white\">€554B</text><text x=\"650.471923828125\" y=\"1351.7314453125\" text-anchor=\"middle\" font-size=\"29.95166015625\" fill=\"white\">+23% Y/Y</text><text x=\"296.912109375\" y=\"1436.37744140625\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">Source: 10-K</text></g>",
  "rasterAnnotations": [
    {
      "key": "airbus-a380-tile",
      "href": "data/assets/raster-annotations/airbus/commercial-aircraft-a380.png",
      "x": 6.51123046875,
      "y": 360.72216796875,
      "width": 399.78955078125,
      "height": 139.34033203125
    },
    {
      "key": "airbus-h160-tile",
      "href": "data/assets/raster-annotations/airbus/helicopters-h160.png",
      "x": 31.25390625,
      "y": 718.83984375,
      "width": 358.11767578125,
      "height": 131.52685546875
    },
    {
      "key": "airbus-satellite-tile",
      "href": "data/assets/raster-annotations/airbus/defense-space-satellite.png",
      "x": 182.314453125,
      "y": 1005.333984375,
      "width": 166.6875,
      "height": 97.66845703125
    },
    {
      "key": "airbus-wordmark",
      "href": "data/assets/raster-annotations/airbus/company-wordmark.png",
      "x": 717.53759765625,
      "y": 287.79638671875,
      "width": 549.5478515625,
      "height": 122.4111328125
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "airbus_segment": {
        "x": 432.345703125,
        "y": 394.58056640625,
        "width": 72.92578125,
        "height": 278.6806640625
      },
      "helicopters": {
        "x": 432.345703125,
        "y": 867.2958984375,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "defense_space": {
        "x": 432.345703125,
        "y": 1104.3046875,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "revenue_gross": {
        "x": 806.09033203125,
        "y": 536.525390625,
        "width": 72.92578125,
        "height": 386.76708984375
      },
      "revenue": {
        "x": 1179.8349609375,
        "y": 596.4287109375,
        "width": 72.92578125,
        "height": 380.255859375
      },
      "inter_segment": {
        "x": 1179.8349609375,
        "y": 1145.9765625,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "gross_profit": {
        "x": 1550.97509765625,
        "y": 522.20068359375,
        "width": 72.92578125,
        "height": 57.298828125
      },
      "cost_of_sales": {
        "x": 1553.57958984375,
        "y": 725.35107421875,
        "width": 72.92578125,
        "height": 322.95703125
      },
      "operating_profit": {
        "x": 1927.32421875,
        "y": 438.85693359375,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "operating_expenses": {
        "x": 1927.32421875,
        "y": 613.35791015625,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "other_income": {
        "x": 2186.47119140625,
        "y": 432.345703125,
        "width": 72.92578125,
        "height": 1.953369140625
      },
      "interest": {
        "x": 2186.47119140625,
        "y": 337.28173828125,
        "width": 72.92578125,
        "height": 1.953369140625
      },
      "net_profit": {
        "x": 2301.06884765625,
        "y": 360.72216796875,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "tax": {
        "x": 2301.06884765625,
        "y": 589.91748046875,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "rnd": {
        "x": 2301.06884765625,
        "y": 718.83984375,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "administrative": {
        "x": 2301.06884765625,
        "y": 933.71044921875,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "selling": {
        "x": 2301.06884765625,
        "y": 1147.27880859375,
        "width": 72.92578125,
        "height": 3.90673828125
      }
    },
    "labels": {
      "revenue_gross": {
        "blocks": []
      },
      "airbus_segment": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 303.42333984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 511.78271484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Airbus",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 562.5703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "10% segment margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "helicopters": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 774.83642578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 865.99365234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Helicopters",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 916.78125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "10% segment margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "defense_space": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 1013.1474609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 1114.72265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Defense & Space",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 1165.51025390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "2% segment margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1216.2978515625,
            "top": 451.87939453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "inter_segment": {
        "blocks": [
          {
            "x": 1216.2978515625,
            "top": 1172.021484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Inter-segment",
                "size": 36.462890625,
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
      "gross_profit": {
        "blocks": [
          {
            "x": 1587.43798828125,
            "top": 334.67724609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "15% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1588.740234375,
            "top": 1067.841796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "sales",
                "size": 36.462890625,
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
            "x": 1963.787109375,
            "top": 256.54248046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "7% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 1963.787109375,
            "top": 675.86572265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
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
      "interest": {
        "blocks": [
          {
            "x": 2224.236328125,
            "top": 247.93798828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Interest",
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
      "other_income": {
        "blocks": [
          {
            "x": 2224.236328125,
            "top": 451.87939453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2504.21923828125,
            "top": 334.67724609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "6% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 2504.21923828125,
            "top": 559.9658203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
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
      "rnd": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 696.70166015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "5% of revenue",
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
      "administrative": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 901.154296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Administrative",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "3% of revenue",
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
      "selling": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 1125.140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Selling",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "1% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "airbus_segment",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Airbus",
      "value": 47.8,
      "color": "#00357a",
      "labelColor": "#00357a",
      "linkTint": "#859dbc"
    },
    {
      "id": "helicopters",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Helicopters",
      "value": 7.3,
      "color": "#00357a",
      "labelColor": "#00357a",
      "linkTint": "#859dbc"
    },
    {
      "id": "defense_space",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Defense & Space",
      "value": 11.5,
      "color": "#00357a",
      "labelColor": "#00357a",
      "linkTint": "#859dbc"
    },
    {
      "id": "revenue_gross",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 66.6,
      "color": "#00357a",
      "labelColor": "#00357a",
      "linkTint": "#859dbc"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 65.4,
      "color": "#00357a",
      "labelColor": "#00357a",
      "linkTint": "#859dbc"
    },
    {
      "id": "inter_segment",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Inter-segment",
      "value": -1.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 10,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "€10.0B"
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 55.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 4.3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 5.8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_income",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "interest",
      "col": 5,
      "order": 1,
      "type": "profit",
      "label": "Interest",
      "value": 0.2,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 2,
      "type": "profit",
      "label": "Net profit",
      "value": 3.6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Tax",
      "value": 1.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "R&D",
      "value": 3.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "administrative",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "Administrative",
      "value": 1.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "selling",
      "col": 5,
      "order": 6,
      "type": "cost",
      "label": "Selling",
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "airbus_segment",
      "target": "revenue_gross",
      "value": 47.8,
      "sourceWidth": 278.6806640625,
      "targetWidth": 278.6806640625,
      "y0": 533.9208984375,
      "y1": 675.86572265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#859dbc"
    },
    {
      "source": "helicopters",
      "target": "revenue_gross",
      "value": 7.3,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "y0": 888.782958984375,
      "y1": 836.693115234375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#859dbc"
    },
    {
      "source": "defense_space",
      "target": "revenue_gross",
      "value": 11.5,
      "sourceWidth": 67.716796875,
      "targetWidth": 65.1123046875,
      "y0": 1138.1630859375,
      "y1": 890.736328125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#859dbc"
    },
    {
      "source": "revenue_gross",
      "target": "revenue",
      "value": 65.4,
      "sourceWidth": 380.255859375,
      "targetWidth": 380.255859375,
      "y0": 726.6533203125,
      "y1": 786.556640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#859dbc"
    },
    {
      "source": "revenue_gross",
      "target": "inter_segment",
      "value": 1.1,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "y0": 920.036865234375,
      "y1": 1149.232177734375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 10,
      "sourceWidth": 58.60107421875,
      "targetWidth": 57.298828125,
      "y0": 625.729248046875,
      "y1": 550.85009765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 55.4,
      "sourceWidth": 321.65478515625,
      "targetWidth": 322.95703125,
      "y0": 815.857177734375,
      "y1": 886.82958984375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 4.3,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "y0": 534.572021484375,
      "y1": 451.228271484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.8,
      "sourceWidth": 32.55615234375,
      "targetWidth": 33.8583984375,
      "y0": 563.221435546875,
      "y1": 630.287109375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.6,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "y0": 447.97265625,
      "y1": 371.791259765625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.1,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "y0": 460.343994140625,
      "y1": 593.173095703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 1.953369140625,
      "targetWidth": 1.953369140625,
      "y0": 338.2584228515625,
      "y1": 361.6988525390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "curve": {
        "c1x": 2272.41943359375,
        "c1y": 338.2584228515625,
        "c2x": 2272.41943359375,
        "c2y": 361.6988525390625
      }
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 1.953369140625,
      "targetWidth": 1.953369140625,
      "y0": 433.3223876953125,
      "y1": 381.8836669921875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#99cd99",
      "curve": {
        "c1x": 2272.41943359375,
        "c1y": 433.3223876953125,
        "c2x": 2272.41943359375,
        "c2y": 381.8836669921875
      }
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.3,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "y0": 622.4736328125,
      "y1": 727.95556640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "administrative",
      "value": 1.7,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "y0": 636.147216796875,
      "y1": 938.268310546875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "selling",
      "value": 0.9,
      "sourceWidth": 6.51123046875,
      "targetWidth": 3.90673828125,
      "y0": 643.960693359375,
      "y1": 1149.232177734375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "空中客车 · 2023 财年",
      "meta": {
        "title": "空中客车 2023 财年利润表",
        "titleTextLength": 1739.80078125
      },
      "nodes": {
        "airbus_segment": {
          "label": "空中客车"
        },
        "helicopters": {
          "label": "直升机"
        },
        "defense_space": {
          "label": "防务与航天"
        },
        "revenue_gross": {
          "label": ""
        },
        "revenue": {
          "label": "收入"
        },
        "inter_segment": {
          "label": "分部间抵销"
        },
        "gross_profit": {
          "label": "毛利润"
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润"
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "other_income": {
          "label": "其他"
        },
        "interest": {
          "label": "利息"
        },
        "net_profit": {
          "label": "净利润"
        },
        "tax": {
          "label": "税费"
        },
        "rnd": {
          "label": "研发"
        },
        "administrative": {
          "label": "行政"
        },
        "selling": {
          "label": "销售"
        }
      },
      "layout": {
        "labels": {
          "revenue_gross": {
            "blocks": []
          },
          "airbus_segment": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 303.42333984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 511.78271484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "空中客车",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 562.5703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "helicopters": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 774.83642578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 865.99365234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "直升机",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 916.78125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "defense_space": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 1013.1474609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 1114.72265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "防务与航天",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 1165.51025390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1216.2978515625,
                "top": 451.87939453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "inter_segment": {
            "blocks": [
              {
                "x": 1216.2978515625,
                "top": 1172.021484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部间抵销",
                    "size": 36.462890625,
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
          "gross_profit": {
            "blocks": [
              {
                "x": 1587.43798828125,
                "top": 334.67724609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1588.740234375,
                "top": 1067.841796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
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
                "x": 1963.787109375,
                "top": 256.54248046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 1963.787109375,
                "top": 675.86572265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
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
          "interest": {
            "blocks": [
              {
                "x": 2224.236328125,
                "top": 247.93798828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利息",
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
          "other_income": {
            "blocks": [
              {
                "x": 2224.236328125,
                "top": 451.87939453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 2504.21923828125,
                "top": 334.67724609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 2504.21923828125,
                "top": 559.9658203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
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
          "rnd": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 696.70166015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "administrative": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 901.154296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "行政",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 3%",
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
          "selling": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 1125.140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Montserrat,Arial,sans-serif\"><rect x=\"71.62353515625\" y=\"1217.60009765625\" width=\"449.27490234375\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00357a\"/><text x=\"295.60986328125\" y=\"1269.68994140625\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"800\" fill=\"white\">交付</text><text data-operating-metric=\"deliveries\" x=\"122.4111328125\" y=\"1311.36181640625\" text-anchor=\"start\" font-size=\"31.25390625\" fill=\"white\">735</text><text x=\"188.82568359375\" y=\"1311.36181640625\" text-anchor=\"start\" font-size=\"31.25390625\" fill=\"white\">架商用飞机</text><text x=\"295.60986328125\" y=\"1351.7314453125\" text-anchor=\"middle\" font-size=\"29.95166015625\" fill=\"white\">同比 +12%</text><rect x=\"530.01416015625\" y=\"1217.60009765625\" width=\"240.91552734375\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00357a\"/><text x=\"650.471923828125\" y=\"1269.68994140625\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"800\" fill=\"white\">积压订单</text><text data-operating-metric=\"backlog\" x=\"650.471923828125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"white\">€554B</text><text x=\"650.471923828125\" y=\"1351.7314453125\" text-anchor=\"middle\" font-size=\"29.95166015625\" fill=\"white\">同比 +23%</text><text x=\"296.912109375\" y=\"1436.37744140625\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">来源：10-K</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "deliveries",
      "value": "735",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "735"
    },
    {
      "id": "backlog",
      "value": "554",
      "unit": "B",
      "currency": "EUR",
      "comparison": "eq",
      "literal": "€554B"
    }
  ]
});})();
