window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbnb-fy23",
  "name": "Airbnb · FY23",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb FY23 Income Statement",
    "period": "FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbnb-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#ff375b",
        "label": "#ff375b"
      },
      "hub": {
        "node": "#ff375b",
        "label": "#ff375b"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00934b"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9c1b00"
      }
    },
    "linkTint": {
      "source": "#f79dae",
      "hub": "#f79dae",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1
  },
  "nodes": [
    {
      "id": "north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "North America",
      "value": 4.6,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#ff375b",
      "labelColor": "#ff375b",
      "linkTint": "#f79dae"
    },
    {
      "id": "emea",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "EMEA",
      "value": 3.6,
      "notes": [
        "+24% Y/Y"
      ],
      "color": "#ff375b",
      "labelColor": "#ff375b",
      "linkTint": "#f79dae"
    },
    {
      "id": "latam",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "LATAM",
      "value": 0.8,
      "notes": [
        "+28% Y/Y"
      ],
      "color": "#ff375b",
      "labelColor": "#ff375b",
      "linkTint": "#f79dae"
    },
    {
      "id": "apac",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "APAC",
      "value": 0.8,
      "notes": [
        "+35% Y/Y"
      ],
      "color": "#ff375b",
      "labelColor": "#ff375b",
      "linkTint": "#f79dae"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 9.9,
      "notes": [
        "+18% Y/Y"
      ],
      "color": "#ff375b",
      "labelColor": "#ff375b",
      "linkTint": "#f79dae"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 5,
      "type": "profit",
      "label": "Gross profit",
      "value": 8.2,
      "notes": [
        "83% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00934b",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 6,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 1.7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1b00",
      "linkTint": "#e08585",
      "valueText": "($1.7B)"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.5,
      "notes": [
        "15% margin",
        "(8pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00934b",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Operating expenses",
      "value": 6.7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1b00",
      "linkTint": "#e08585",
      "valueText": "($6.7B)"
    },
    {
      "id": "tax_benefit",
      "col": 4,
      "order": 9,
      "type": "profit",
      "label": "Tax benefit",
      "value": 2.7,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#00934b",
      "linkTint": "#99cd99"
    },
    {
      "id": "other_income",
      "col": 4,
      "order": 10,
      "type": "profit",
      "label": "Other",
      "value": 0.6,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#00934b",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 11,
      "type": "profit",
      "label": "Net profit",
      "value": 4.8,
      "notes": [
        "48% margin",
        "+26pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00934b",
      "linkTint": "#99cd99"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": "S&M",
      "value": 1.8,
      "notes": [
        "18% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1b00",
      "linkTint": "#e08585",
      "valueText": "($1.8B)"
    },
    {
      "id": "product",
      "col": 5,
      "order": 13,
      "type": "cost",
      "label": "Product",
      "value": 1.7,
      "notes": [
        "17% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1b00",
      "linkTint": "#e08585",
      "valueText": "($1.7B)"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 14,
      "type": "cost",
      "label": "G&A",
      "value": 2.0,
      "notes": [
        "20% of revenue",
        "+9pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1b00",
      "linkTint": "#e08585",
      "valueText": "($2.0B)"
    },
    {
      "id": "support",
      "col": 5,
      "order": 15,
      "type": "cost",
      "label": "Support",
      "value": 1.2,
      "notes": [
        "12% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1b00",
      "linkTint": "#e08585",
      "valueText": "($1.2B)"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 4.6,
      "sourceWidth": 118.50439453125,
      "targetWidth": 118.50439453125,
      "y0": 548.896728515625,
      "y1": 791.114501953125,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 3.6,
      "sourceWidth": 91.1572265625,
      "targetWidth": 91.1572265625,
      "y0": 777.44091796875,
      "y1": 895.9453125,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "y0": 970.17333984375,
      "y1": 951.94189453125,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 22.13818359375,
      "targetWidth": 20.8359375,
      "y0": 1140.116455078125,
      "y1": 972.77783203125,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 8.2,
      "sourceWidth": 208.359375,
      "targetWidth": 208.359375,
      "y0": 836.0419921875,
      "y1": 755.302734375,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 1.7,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "y0": 961.708740234375,
      "y1": 1072.399658203125,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.5,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "y0": 670.65673828125,
      "y1": 567.779296875,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.7,
      "sourceWidth": 169.2919921875,
      "targetWidth": 169.2919921875,
      "y0": 774.83642578125,
      "y1": 876.41162109375,
      "linkTint": "#e08585"
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 2.7,
      "sourceWidth": 67.716796875,
      "targetWidth": 67.716796875,
      "y0": 397.18505859375,
      "y1": 445.3681640625,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.5,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "y0": 567.779296875,
      "y1": 498.76025390625,
      "linkTint": "#99cd99"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.6,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "y0": 594.475341796875,
      "y1": 525.456298828125,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 1.8,
      "sourceWidth": 45.57861328125,
      "targetWidth": 44.2763671875,
      "y0": 814.554931640625,
      "y1": 906.36328125,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 1.7,
      "sourceWidth": 44.2763671875,
      "targetWidth": 44.2763671875,
      "y0": 859.482421875,
      "y1": 1052.21484375,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 2.0,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "y0": 907.66552734375,
      "y1": 1194.15966796875,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 1.2,
      "sourceWidth": 27.34716796875,
      "targetWidth": 28.6494140625,
      "y0": 947.384033203125,
      "y1": 1349.126953125,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 394.58056640625,
        "y": 489.64453125,
        "width": 72.92578125,
        "height": 118.50439453125
      },
      "emea": {
        "x": 394.58056640625,
        "y": 731.8623046875,
        "width": 72.92578125,
        "height": 91.1572265625
      },
      "latam": {
        "x": 394.58056640625,
        "y": 959.75537109375,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "apac": {
        "x": 394.58056640625,
        "y": 1129.04736328125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "revenue": {
        "x": 862.0869140625,
        "y": 731.8623046875,
        "width": 72.92578125,
        "height": 251.33349609375
      },
      "gross_profit": {
        "x": 1324.38427734375,
        "y": 651.123046875,
        "width": 72.92578125,
        "height": 208.359375
      },
      "cost_of_revenue": {
        "x": 1329.59326171875,
        "y": 1050.91259765625,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "operating_profit": {
        "x": 1793.19287109375,
        "y": 548.24560546875,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "operating_expenses": {
        "x": 1795.79736328125,
        "y": 791.765625,
        "width": 72.92578125,
        "height": 169.2919921875
      },
      "tax_benefit": {
        "x": 2121.35888671875,
        "y": 363.32666015625,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "other_income": {
        "x": 2121.35888671875,
        "y": 587.31298828125,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "net_profit": {
        "x": 2263.3037109375,
        "y": 411.509765625,
        "width": 72.92578125,
        "height": 121.10888671875
      },
      "sm": {
        "x": 2263.3037109375,
        "y": 884.22509765625,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "product": {
        "x": 2263.3037109375,
        "y": 1030.07666015625,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "ga": {
        "x": 2263.3037109375,
        "y": 1168.11474609375,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "support": {
        "x": 2263.3037109375,
        "y": 1334.80224609375,
        "width": 72.92578125,
        "height": 28.6494140625
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 390.673828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 349.001953125,
            "top": 502.6669921875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "North",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "America",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 634.19384765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 349.001953125,
            "top": 754.00048828125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "EMEA",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          }
        ]
      },
      "latam": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 860.78466796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 349.001953125,
            "top": 946.64638671875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "LATAM",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 1030.07666015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+35% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 349.001953125,
            "top": 1117.3271484375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "APAC",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 898.5498046875,
            "top": 576.89501953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "+18% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1360.84716796875,
            "top": 460.9951171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "83% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1366.05615234375,
            "top": 1104.3046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "x": 1829.65576171875,
            "top": 358.11767578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "15% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(8pp) Y/Y",
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
            "x": 1832.26025390625,
            "top": 974.080078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "x": 2157.82177734375,
            "top": 272.16943359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31.25390625,
                "weight": 700
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
            "x": 2157.82177734375,
            "top": 613.35791015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700
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
            "x": 2466.4541015625,
            "top": 404.99853515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "48% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+26pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 865.99365234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M ($1.8B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "18% of revenue",
                "size": 27.34716796875,
                "weight": 400
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
      "product": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1009.24072265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product ($1.7B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "17% of revenue",
                "size": 27.34716796875,
                "weight": 400
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
      "ga": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1132.9541015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A ($2.0B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "20% of revenue",
                "size": 27.34716796875,
                "weight": 400
              },
              {
                "text": "+9pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "support": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1272.29443359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Support ($1.2B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400
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
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"923\" width=\"235\" height=\"116\" rx=\"23\" fill=\"#ff375b\"/><text x=\"136.5\" y=\"959\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"700\">Nights booked</text><text x=\"136.5\" y=\"988\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"400\" data-operating-metric=\"nights_booked\">448M</text><text x=\"136.5\" y=\"1017\" text-anchor=\"middle\" fill=\"white\" font-size=\"16\" font-weight=\"400\">+14% Y/Y</text><rect x=\"261\" y=\"923\" width=\"111\" height=\"116\" rx=\"23\" fill=\"#ff375b\"/><text x=\"316.5\" y=\"959\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"700\">GBV</text><text x=\"316.5\" y=\"988\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"400\" data-operating-metric=\"gbv\">$73.3B</text><text x=\"316.5\" y=\"1017\" text-anchor=\"middle\" fill=\"white\" font-size=\"16\" font-weight=\"400\">+16% Y/Y</text><rect x=\"379\" y=\"923\" width=\"321\" height=\"116\" rx=\"23\" fill=\"#ff375b\"/><text x=\"539.5\" y=\"959\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"700\">Long-term stays (28+ days)</text><text x=\"539.5\" y=\"988\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"400\" data-operating-metric=\"long_term_stays\">18%</text><text x=\"539.5\" y=\"1017\" text-anchor=\"middle\" fill=\"white\" font-size=\"16\" font-weight=\"400\">of nights booked</text><text x=\"326\" y=\"1064\" text-anchor=\"middle\" fill=\"#777777\" font-size=\"21\">GBV = Gross Booking Value</text><text x=\"130\" y=\"1104\" fill=\"black\" font-size=\"28\" font-weight=\"700\">Source: Quarterly results</text></g></g>",
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "label": "Nights booked",
      "value": "448000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "448M",
      "basis": "unspecified",
      "notes": [
        "+14% Y/Y"
      ],
      "quote": "Nights booked\n448M\n+14% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          25,
          1202,
          306,
          151
        ]
      }
    },
    {
      "id": "gbv",
      "label": "GBV",
      "value": "73.3",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$73.3B",
      "basis": "unspecified",
      "notes": [
        "+16% Y/Y"
      ],
      "quote": "GBV\n$73.3B\n+16% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          340,
          1202,
          145,
          151
        ]
      }
    },
    {
      "id": "long_term_stays",
      "label": "Long-term stays (28+ days)",
      "value": "18",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "18%",
      "basis": "unspecified",
      "notes": [
        "of nights booked"
      ],
      "quote": "Long-term stays (28+ days)\n18% of nights booked",
      "anchor": {
        "type": "image-box",
        "box": [
          494,
          1202,
          418,
          151
        ]
      }
    }
  ],
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 769.62744140625,
      "y": 261.75146484375,
      "width": 263.0537109375,
      "height": 263.0537109375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-north-america.png",
      "x": 87.25048828125,
      "y": 506.57373046875,
      "width": 93.76171875,
      "height": 95.06396484375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 79.43701171875,
      "y": 742.2802734375,
      "width": 84.64599609375,
      "height": 83.34375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 97.66845703125,
      "y": 938.91943359375,
      "width": 71.62353515625,
      "height": 75.5302734375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 102.87744140625,
      "y": 1095.18896484375,
      "width": 76.83251953125,
      "height": 82.04150390625
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2023 财年",
      "meta": {
        "title": "Airbnb 2023 财年利润表",
        "period": "2023 财年"
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +10%"
          ]
        },
        "emea": {
          "label": "欧洲、中东和非洲",
          "notes": [
            "同比 +24%"
          ]
        },
        "latam": {
          "label": "拉美",
          "notes": [
            "同比 +28%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +35%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 83%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 15%",
            "同比 (8 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "tax_benefit": {
          "label": "税收收益",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 48%",
            "同比 +26 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 18%",
            "同比 (0 个百分点)"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 17%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 20%",
            "同比 +9 个百分点"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 12%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 390.673828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 349.001953125,
                "top": 526.4669921875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "北美",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 634.19384765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 349.001953125,
                "top": 754.00048828125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "EMEA",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "latam": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 860.78466796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 349.001953125,
                "top": 947.74638671875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "拉美",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 1030.07666015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +35%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 349.001953125,
                "top": 1117.3271484375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "亚太",
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
                "x": 898.5498046875,
                "top": 576.89501953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "同比 +18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1360.84716796875,
                "top": 460.9951171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 83%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1366.05615234375,
                "top": 1104.3046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "x": 1829.65576171875,
                "top": 358.11767578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (8 个百分点)",
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
                "x": 1832.26025390625,
                "top": 974.080078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax_benefit": {
            "blocks": [
              {
                "x": 2157.82177734375,
                "top": 272.16943359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 31.25390625,
                    "weight": 700
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
                "x": 2157.82177734375,
                "top": 613.35791015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700
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
                "x": 2466.4541015625,
                "top": 404.99853515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 48%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +26 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 865.99365234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与市场 ($1.8B)",
                    "size": 28.6494140625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 18%",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1009.24072265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品 ($1.7B)",
                    "size": 28.6494140625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 17%",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1132.9541015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用 ($2.0B)",
                    "size": 28.6494140625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 20%",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "support": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1272.29443359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "客服支持 ($1.2B)",
                    "size": 28.6494140625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 12%",
                    "size": 26.044921875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"923\" width=\"235\" height=\"116\" rx=\"23\" fill=\"#ff375b\"/><text x=\"136.5\" y=\"959\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"700\">预订间夜数</text><text x=\"136.5\" y=\"988\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"400\" data-operating-metric=\"nights_booked\">448M</text><text x=\"136.5\" y=\"1017\" text-anchor=\"middle\" fill=\"white\" font-size=\"16\" font-weight=\"400\">同比 +14%</text><rect x=\"261\" y=\"923\" width=\"111\" height=\"116\" rx=\"23\" fill=\"#ff375b\"/><text x=\"316.5\" y=\"959\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"700\">GBV</text><text x=\"316.5\" y=\"988\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"400\" data-operating-metric=\"gbv\">$73.3B</text><text x=\"316.5\" y=\"1017\" text-anchor=\"middle\" fill=\"white\" font-size=\"16\" font-weight=\"400\">同比 +16%</text><rect x=\"379\" y=\"923\" width=\"321\" height=\"116\" rx=\"23\" fill=\"#ff375b\"/><text x=\"539.5\" y=\"959\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"700\">长期住宿（28 天以上）</text><text x=\"539.5\" y=\"988\" text-anchor=\"middle\" fill=\"white\" font-size=\"20\" font-weight=\"400\" data-operating-metric=\"long_term_stays\">18%</text><text x=\"539.5\" y=\"1017\" text-anchor=\"middle\" fill=\"white\" font-size=\"16\" font-weight=\"400\">占预订间夜数</text><text x=\"326\" y=\"1064\" text-anchor=\"middle\" fill=\"#777777\" font-size=\"21\">GBV = 总预订价值</text><text x=\"130\" y=\"1104\" fill=\"black\" font-size=\"28\" font-weight=\"700\">来源：季度业绩</text></g></g>"
    }
  }
});
