window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbus-q3-fy26",
  "name": "Airbus · Q3 FY26",
  "company": "Airbus",
  "meta": {
    "company": "Airbus",
    "title": "Airbus Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbus-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 130,
    "titleWeight": 800,
    "titleTextLength": 2130,
    "hidePeriodStamp": true,
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
      "name": 44,
      "value": 42,
      "note": 30,
      "lineGap": 9
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g><rect x=\"73\" y=\"1177\" width=\"447\" height=\"159\" rx=\"30\" fill=\"#00357a\"/><rect x=\"531\" y=\"1177\" width=\"241\" height=\"159\" rx=\"30\" fill=\"#00357a\"/><text x=\"296.5\" y=\"1229\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">Deliveries</text><text data-operating-metric=\"deliveries\" x=\"296.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">196</text><text x=\"296.5\" y=\"1300\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">commercial airplanes</text><text x=\"296.5\" y=\"1329\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">(2%) Y/Y</text><text x=\"651.5\" y=\"1229\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">Backlog</text><text data-operating-metric=\"backlog\" x=\"651.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">9,310</text><text x=\"651.5\" y=\"1300\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">aircrafts</text><text x=\"651.5\" y=\"1329\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">+7% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "airbus-a380-q2-fy26-tile",
      "href": "data/assets/raster-annotations/airbus/commercial-aircraft-a380-q2-fy26.png",
      "x": 13.0224609375,
      "y": 420.62548828125,
      "width": 388.0693359375,
      "height": 126.31787109375
    },
    {
      "key": "airbus-h160-tile",
      "href": "data/assets/raster-annotations/airbus/helicopters-h160.png",
      "x": 35.16064453125,
      "y": 711.0263671875,
      "width": 346.3974609375,
      "height": 114.59765625
    },
    {
      "key": "airbus-satellite-tile",
      "href": "data/assets/raster-annotations/airbus/defense-space-satellite.png",
      "x": 190.1279296875,
      "y": 931.10595703125,
      "width": 157.57177734375,
      "height": 92.45947265625
    },
    {
      "key": "airbus-wordmark",
      "href": "data/assets/raster-annotations/airbus/company-wordmark.png",
      "x": 721.4443359375,
      "y": 296.912109375,
      "width": 539.1298828125,
      "height": 104.1796875
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "airbus_segment": {
        "x": 431,
        "y": 455.00000000000006,
        "width": 71,
        "height": 218
      },
      "helicopters": {
        "x": 431,
        "y": 848,
        "width": 71,
        "height": 32
      },
      "defense_space": {
        "x": 431,
        "y": 1027,
        "width": 71,
        "height": 50
      },
      "revenue_gross": {
        "x": 805,
        "y": 564,
        "width": 70,
        "height": 304
      },
      "revenue": {
        "x": 1178,
        "y": 636,
        "width": 71,
        "height": 297
      },
      "inter_segment": {
        "x": 1178,
        "y": 1042,
        "width": 71,
        "height": 4
      },
      "gross_profit": {
        "x": 1552,
        "y": 565,
        "width": 71,
        "height": 52
      },
      "cost_of_sales": {
        "x": 1552,
        "y": 786,
        "width": 71,
        "height": 245
      },
      "operating_profit": {
        "x": 1926,
        "y": 468.00000000000006,
        "width": 71,
        "height": 29
      },
      "operating_expenses": {
        "x": 1923.9999999999998,
        "y": 673.0000000000001,
        "width": 71,
        "height": 24.000000000000004
      },
      "other_income": {
        "x": 1712.9999999999998,
        "y": 763,
        "width": 71,
        "height": 2
      },
      "net_profit": {
        "x": 2299,
        "y": 343.00000000000006,
        "width": 71,
        "height": 21
      },
      "tax": {
        "x": 2299,
        "y": 576,
        "width": 71,
        "height": 6.000000000000001
      },
      "other_expense": {
        "x": 2299,
        "y": 681.9999999999999,
        "width": 71,
        "height": 1
      },
      "rnd": {
        "x": 2299,
        "y": 802,
        "width": 71,
        "height": 13
      },
      "administrative": {
        "x": 2299,
        "y": 989.9999999999999,
        "width": 71,
        "height": 5
      },
      "selling": {
        "x": 2299,
        "y": 1171,
        "width": 71,
        "height": 1
      }
    },
    "labels": {
      "revenue_gross": {
        "blocks": []
      },
      "airbus_segment": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 356.8154296875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 559.9658203125,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Airbus",
                "size": 40,
                "weight": 800
              },
              {
                "text": "9% segment margin",
                "size": 28,
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
            "x": 467.50634765625,
            "top": 750.09375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 838.646484375,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Helicopters",
                "size": 40,
                "weight": 800
              },
              {
                "text": "7% segment margin",
                "size": 28,
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
            "x": 467.50634765625,
            "top": 931.10595703125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 255.240234375,
            "top": 1030.07666015625,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Defense & Space",
                "size": 38,
                "weight": 800
              },
              {
                "text": "(16%) segment margin",
                "size": 28,
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
            "x": 1213.693359375,
            "top": 483.13330078125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 28,
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
            "x": 1213.693359375,
            "top": 1063.93505859375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Inter-segment",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
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
            "top": 375.046875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "18% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
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
            "x": 1587.43798828125,
            "top": 1048.30810546875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1961.1826171875,
            "top": 277.37841796875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "10% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
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
            "x": 1961.1826171875,
            "top": 716.2353515625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1747.6142578125,
            "top": 780.04541015625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2505.521484375,
            "top": 286.494140625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "8% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
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
            "x": 2505.521484375,
            "top": 535.22314453125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2505.521484375,
            "top": 642.00732421875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2505.521484375,
            "top": 760.51171875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "5% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
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
            "x": 2505.521484375,
            "top": 942.826171875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Administrative",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "2% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
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
            "x": 2505.521484375,
            "top": 1123.83837890625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Selling",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "1% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
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
      "value": 12.9,
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
      "value": 2,
      "color": "#00357a",
      "labelColor": "#00357a",
      "linkTint": "#859dbc",
      "valueText": "€2.0B"
    },
    {
      "id": "defense_space",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Defense & Space",
      "value": 3,
      "color": "#00357a",
      "labelColor": "#00357a",
      "linkTint": "#859dbc",
      "valueText": "€3.0B"
    },
    {
      "id": "revenue_gross",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 17.9,
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
      "value": 17.5,
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
      "value": -0.3,
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
      "value": 3.1,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 14.3,
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
      "value": 1.8,
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
      "value": 1.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_income",
      "col": 4,
      "order": 2,
      "type": "profit",
      "label": "Other",
      "value": 0.2,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.031,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "(€31M)"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "administrative",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "Administrative",
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "selling",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "Selling",
      "value": 0.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "airbus_segment",
      "target": "revenue_gross",
      "value": 12.9,
      "sourceWidth": 218,
      "targetWidth": 218,
      "y0": 564,
      "y1": 673.0000000000001,
      "targetOrder": 0,
      "linkTint": "#859dbc"
    },
    {
      "source": "helicopters",
      "target": "revenue_gross",
      "value": 2,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 864,
      "y1": 798.0000000000001,
      "targetOrder": 1,
      "linkTint": "#859dbc"
    },
    {
      "source": "defense_space",
      "target": "revenue_gross",
      "value": 3,
      "sourceWidth": 50,
      "targetWidth": 54,
      "y0": 1052,
      "y1": 841.0000000000001,
      "targetOrder": 2,
      "linkTint": "#859dbc"
    },
    {
      "source": "revenue_gross",
      "target": "revenue",
      "value": 17.5,
      "sourceWidth": 298,
      "targetWidth": 297,
      "y0": 713,
      "y1": 784.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#859dbc"
    },
    {
      "source": "revenue_gross",
      "target": "inter_segment",
      "value": 0.3,
      "sourceWidth": 6.000000000000001,
      "targetWidth": 4,
      "y0": 864.9999999999999,
      "y1": 1044,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.1,
      "sourceWidth": 54,
      "targetWidth": 52,
      "y0": 663,
      "y1": 591,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 14.3,
      "sourceWidth": 243,
      "targetWidth": 245,
      "y0": 811.5,
      "y1": 908.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.8,
      "sourceWidth": 31.000000000000004,
      "targetWidth": 29,
      "y0": 580.5,
      "y1": 482.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.3,
      "sourceWidth": 21,
      "targetWidth": 22,
      "y0": 606.5,
      "y1": 683.9999999999999,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "operating_expenses",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 764,
      "y1": 696,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.3,
      "sourceWidth": 21,
      "targetWidth": 21,
      "y0": 478.5,
      "y1": 353.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 7,
      "targetWidth": 6.000000000000001,
      "y0": 492.5,
      "y1": 579,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.031,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 496.5,
      "y1": 682.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.9,
      "sourceWidth": 13,
      "targetWidth": 13,
      "y0": 679.5000000000001,
      "y1": 808.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "administrative",
      "value": 0.4,
      "sourceWidth": 7,
      "targetWidth": 5,
      "y0": 689.5,
      "y1": 992.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "selling",
      "value": 0.2,
      "sourceWidth": 4,
      "targetWidth": 1,
      "y0": 694.9999999999999,
      "y1": 1171.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbus · 2026 财年第三季度",
      "meta": {
        "title": "Airbus 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 1900
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
        "net_profit": {
          "label": "净利润"
        },
        "tax": {
          "label": "税费"
        },
        "other_expense": {
          "label": "其他"
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
                "x": 467.50634765625,
                "top": 356.8154296875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 559.9658203125,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "空中客车",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 9%",
                    "size": 28,
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
                "x": 467.50634765625,
                "top": 750.09375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 838.646484375,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "直升机",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 7%",
                    "size": 28,
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
                "x": 467.50634765625,
                "top": 931.10595703125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 255.240234375,
                "top": 1030.07666015625,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "防务与航天",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 (16%)",
                    "size": 28,
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
                "x": 1213.693359375,
                "top": 483.13330078125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 28,
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
                "x": 1213.693359375,
                "top": 1063.93505859375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "分部间抵销",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
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
                "top": 375.046875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 18%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
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
                "x": 1587.43798828125,
                "top": 1048.30810546875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1961.1826171875,
                "top": 277.37841796875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
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
                "x": 1961.1826171875,
                "top": 716.2353515625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1747.6142578125,
                "top": 780.04541015625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2505.521484375,
                "top": 286.494140625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "利润率 8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
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
                "x": 2505.521484375,
                "top": 535.22314453125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2505.521484375,
                "top": 642.00732421875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2505.521484375,
                "top": 760.51171875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 5%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
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
                "x": 2505.521484375,
                "top": 942.826171875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "行政",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
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
                "x": 2505.521484375,
                "top": 1123.83837890625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"73\" y=\"1177\" width=\"447\" height=\"159\" rx=\"30\" fill=\"#00357a\"/><rect x=\"531\" y=\"1177\" width=\"241\" height=\"159\" rx=\"30\" fill=\"#00357a\"/><text x=\"296.5\" y=\"1229\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">交付量</text><text data-operating-metric=\"deliveries\" x=\"296.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">196</text><text x=\"296.5\" y=\"1300\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">架商用飞机</text><text x=\"296.5\" y=\"1329\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">同比 (2%)</text><text x=\"651.5\" y=\"1229\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">积压订单</text><text data-operating-metric=\"backlog\" x=\"651.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">9,310</text><text x=\"651.5\" y=\"1300\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">架飞机</text><text x=\"651.5\" y=\"1329\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">同比 +7%</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "deliveries",
      "value": "196",
      "literal": "196",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "backlog",
      "value": "9310",
      "literal": "9,310",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    }
  ]
});
