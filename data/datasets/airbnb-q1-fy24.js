window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbnb-q1-fy24",
  "name": "Airbnb · Q1 FY24",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/airbnb-q1-fy24.png",
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
    "titleColor": "#155077",
    "noteColor": "#777777",
    "labelWeight": 700,
    "valueWeight": 400,
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
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 9.11572265625
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 1,
      "notes": [
        "+10% Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source",
      "valueText": "$1.0B"
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 0.5,
      "notes": [
        "+24% Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source",
      "valueText": "$0.5B"
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 0.3,
      "notes": [
        "+31% Y/Y"
      ],
      "col": 0,
      "order": 2,
      "type": "source",
      "valueText": "$0.3B"
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 0.3,
      "notes": [
        "+27% Y/Y"
      ],
      "col": 0,
      "order": 3,
      "type": "source",
      "valueText": "$0.3B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 2.1,
      "notes": [
        "+18% Y/Y"
      ],
      "col": 1,
      "order": 4,
      "type": "hub",
      "valueText": "$2.1B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.7,
      "notes": [
        "78% margin",
        "+1pp Y/Y"
      ],
      "col": 2,
      "order": 5,
      "type": "profit",
      "valueText": "$1.7B"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.5,
      "notes": [],
      "col": 2,
      "order": 6,
      "type": "cost",
      "valueText": "($0.5B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.1,
      "notes": [
        "5% margin",
        "+5pp Y/Y"
      ],
      "col": 3,
      "order": 7,
      "type": "profit",
      "valueText": "$0.1B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.6,
      "notes": [],
      "col": 3,
      "order": 8,
      "type": "cost",
      "valueText": "($1.6B)"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.2,
      "notes": [],
      "col": 4,
      "order": 9,
      "type": "profit",
      "valueText": "$0.2B"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.3,
      "notes": [
        "12% margin",
        "+6pp Y/Y"
      ],
      "col": 5,
      "order": 10,
      "type": "profit",
      "valueText": "$0.3B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.029,
      "notes": [],
      "col": 5,
      "order": 11,
      "type": "cost",
      "valueText": "($29M)",
      "decimals": 3
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.5,
      "notes": [
        "24% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 12,
      "type": "cost",
      "valueText": "($0.5B)"
    },
    {
      "id": "product",
      "label": "Product",
      "value": 0.5,
      "notes": [
        "22% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 13,
      "type": "cost",
      "valueText": "($0.5B)"
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.3,
      "notes": [
        "13% of revenue",
        "(2pp) Y/Y"
      ],
      "col": 5,
      "order": 14,
      "type": "cost",
      "valueText": "($0.3B)"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "notes": [
        "13% of revenue",
        "+0pp Y/Y"
      ],
      "col": 5,
      "order": 15,
      "type": "cost",
      "valueText": "($0.3B)"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 1,
      "sourceWidth": 149.75830078125,
      "targetWidth": 149.75830078125,
      "y0": 556.710205078125,
      "y1": 765.069580078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 0.5,
      "sourceWidth": 83.34375,
      "targetWidth": 83.34375,
      "y0": 795.67236328125,
      "y1": 881.62060546875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 45.57861328125,
      "targetWidth": 45.57861328125,
      "y0": 974.731201171875,
      "y1": 946.081787109375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 36.462890625,
      "targetWidth": 36.462890625,
      "y0": 1135.55859375,
      "y1": 987.1025390625,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.7,
      "sourceWidth": 244.822265625,
      "targetWidth": 244.822265625,
      "y0": 812.6015625,
      "y1": 703.212890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.5,
      "sourceWidth": 70.3212890625,
      "targetWidth": 70.3212890625,
      "y0": 970.17333984375,
      "y1": 1101.7001953125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "y0": 587.964111328125,
      "y1": 505.922607421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.6,
      "sourceWidth": 230.49755859375,
      "targetWidth": 229.1953125,
      "y0": 710.375244140625,
      "y1": 838.646484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.071,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "y0": 503.96923828125,
      "y1": 418.02099609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.029,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "y0": 511.131591796875,
      "y1": 647.867431640625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "y0": 492.900146484375,
      "y1": 436.903564453125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.5,
      "sourceWidth": 74.22802734375,
      "targetWidth": 74.22802734375,
      "y0": 761.162841796875,
      "y1": 852.320068359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.5,
      "sourceWidth": 71.62353515625,
      "targetWidth": 70.3212890625,
      "y0": 834.088623046875,
      "y1": 998.82275390625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
      "y0": 890.736328125,
      "y1": 1140.767578125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.3,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
      "y0": 932.408203125,
      "y1": 1268.3876953125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 397.18505859375,
        "y": 481.8310546875,
        "width": 72.92578125,
        "height": 149.75830078125
      },
      "emea": {
        "x": 397.18505859375,
        "y": 754.00048828125,
        "width": 72.92578125,
        "height": 83.34375
      },
      "latam": {
        "x": 397.18505859375,
        "y": 951.94189453125,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "apac": {
        "x": 397.18505859375,
        "y": 1117.3271484375,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "revenue": {
        "x": 864.69140625,
        "y": 690.1904296875,
        "width": 72.92578125,
        "height": 315.1435546875
      },
      "gross_profit": {
        "x": 1334.80224609375,
        "y": 580.8017578125,
        "width": 72.92578125,
        "height": 244.822265625
      },
      "cost_of_revenue": {
        "x": 1337.40673828125,
        "y": 1066.53955078125,
        "width": 72.92578125,
        "height": 70.3212890625
      },
      "operating_profit": {
        "x": 1797.099609375,
        "y": 498.76025390625,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "operating_expenses": {
        "x": 1799.7041015625,
        "y": 724.048828125,
        "width": 72.92578125,
        "height": 229.1953125
      },
      "other_income": {
        "x": 2156.51953125,
        "y": 479.2265625,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "net_profit": {
        "x": 2265.908203125,
        "y": 412.81201171875,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "tax": {
        "x": 2265.908203125,
        "y": 645.9140625,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "sm": {
        "x": 2265.908203125,
        "y": 815.2060546875,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "product": {
        "x": 2265.908203125,
        "y": 963.662109375,
        "width": 72.92578125,
        "height": 70.3212890625
      },
      "ga": {
        "x": 2265.908203125,
        "y": 1119.931640625,
        "width": 72.92578125,
        "height": 41.671875
      },
      "support": {
        "x": 2265.908203125,
        "y": 1247.5517578125,
        "width": 72.92578125,
        "height": 41.671875
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 384.16259765625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 436.25244140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 279.98291015625,
            "top": 511.78271484375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "North",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "America",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 655.02978515625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 707.11962890625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+24% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 279.98291015625,
            "top": 771.580810546875,
            "anchor": "middle",
            "semanticRole": "name",
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
            "x": 433.64794921875,
            "top": 852.97119140625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 905.06103515625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+31% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 279.98291015625,
            "top": 950.6396484375,
            "anchor": "middle",
            "semanticRole": "name",
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
            "x": 433.64794921875,
            "top": 1018.3564453125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 1070.4462890625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+27% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 279.98291015625,
            "top": 1111.467041015625,
            "anchor": "middle",
            "semanticRole": "name",
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
            "x": 901.154296875,
            "top": 540.43212890625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 901.154296875,
            "top": 591.2197265625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 901.154296875,
            "top": 642.00732421875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+18% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1371.26513671875,
            "top": 390.673828125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1371.26513671875,
            "top": 441.46142578125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 1371.26513671875,
            "top": 492.2490234375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "78% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 1371.26513671875,
            "top": 530.01416015625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1373.86962890625,
            "top": 1147.27880859375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Cost",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "of",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1373.86962890625,
            "top": 1299.6416015625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
            "x": 1833.5625,
            "top": 307.330078125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1833.5625,
            "top": 358.11767578125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 1833.5625,
            "top": 408.9052734375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "5% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 1833.5625,
            "top": 446.67041015625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1836.1669921875,
            "top": 964.96435546875,
            "anchor": "middle",
            "semanticRole": "name",
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
              }
            ]
          },
          {
            "x": 1836.1669921875,
            "top": 1066.53955078125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
            "x": 2192.982421875,
            "top": 518.2939453125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 2192.982421875,
            "top": 569.08154296875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 371.14013671875,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 421.927734375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 472.71533203125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "12% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 510.48046875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+6pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2467.75634765625,
            "top": 605.54443359375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Tax",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 656.33203125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
            "x": 2474.267578125,
            "top": 803.48583984375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "S&M ($0.5B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 846.4599609375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "24% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 884.22509765625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 951.94189453125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Product ($0.5B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 994.916015625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "22% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 1032.68115234375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "support": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1235.83154296875,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Support ($0.3B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 1278.8056640625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "13% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 1316.57080078125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1108.21142578125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "G&A ($0.3B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 1151.185546875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "13% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 1188.95068359375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "label": "Nights booked",
      "value": "133000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "133M",
      "basis": "unspecified",
      "notes": [
        "+9.5% Y/Y"
      ],
      "quote": "Nights booked\n133M\n+9.5% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          19,
          923,
          235,
          115
        ]
      }
    },
    {
      "id": "gbv",
      "label": "GBV",
      "value": "22.9",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$22.9B",
      "basis": "unspecified",
      "notes": [
        "+12% Y/Y"
      ],
      "quote": "GBV\n$22.9B\n+12% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          261,
          923,
          112,
          115
        ]
      }
    },
    {
      "id": "long_term_stays",
      "label": "Long-term stays (28+ days)",
      "value": "17",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "17%",
      "basis": "unspecified",
      "notes": [
        "of nights booked"
      ],
      "quote": "Long-term stays (28+ days)\n17% of nights booked",
      "anchor": {
        "type": "image-box",
        "box": [
          379,
          923,
          321,
          117
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2024 财年第一季度",
      "meta": {
        "title": "Airbnb 2024 财年第一季度利润表",
        "period": "2024 财年第一季度"
      },
      "nodes": {
        "north_america": {
          "label": "北美"
        },
        "emea": {
          "label": "EMEA"
        },
        "latam": {
          "label": "拉美"
        },
        "apac": {
          "label": "亚太"
        },
        "revenue": {
          "label": "收入"
        },
        "gross_profit": {
          "label": "毛利润"
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润"
        },
        "operating_expenses": {
          "label": "营业费用"
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
        "sm": {
          "label": "销售与市场"
        },
        "product": {
          "label": "产品"
        },
        "support": {
          "label": "客服支持"
        },
        "ga": {
          "label": "管理费用"
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 384.16259765625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 436.25244140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 279.98291015625,
                "top": 532.61865234375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 655.02978515625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 707.11962890625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +24%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 279.98291015625,
                "top": 771.580810546875,
                "anchor": "middle",
                "semanticRole": "name",
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
                "x": 433.64794921875,
                "top": 852.97119140625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 905.06103515625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +31%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 279.98291015625,
                "top": 950.6396484375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "拉美",
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
                "x": 433.64794921875,
                "top": 1018.3564453125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 1070.4462890625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +27%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 279.98291015625,
                "top": 1111.467041015625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "亚太",
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
                "x": 901.154296875,
                "top": 540.43212890625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 901.154296875,
                "top": 591.2197265625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 901.154296875,
                "top": 642.00732421875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1371.26513671875,
                "top": 390.673828125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1371.26513671875,
                "top": 441.46142578125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1371.26513671875,
                "top": 492.2490234375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 78%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 1371.26513671875,
                "top": 530.01416015625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1373.86962890625,
                "top": 1147.27880859375,
                "anchor": "middle",
                "semanticRole": "name",
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
                  }
                ]
              },
              {
                "x": 1373.86962890625,
                "top": 1299.6416015625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
                "x": 1833.5625,
                "top": 307.330078125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1833.5625,
                "top": 358.11767578125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1833.5625,
                "top": 408.9052734375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 1833.5625,
                "top": 446.67041015625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34716796875,
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
                "x": 1836.1669921875,
                "top": 964.96435546875,
                "anchor": "middle",
                "semanticRole": "name",
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
                  }
                ]
              },
              {
                "x": 1836.1669921875,
                "top": 1066.53955078125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
                "x": 2192.982421875,
                "top": 518.2939453125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2192.982421875,
                "top": 569.08154296875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 371.14013671875,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 421.927734375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 472.71533203125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 510.48046875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34716796875,
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
                "x": 2467.75634765625,
                "top": 605.54443359375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "税费",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 656.33203125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
                "x": 2474.267578125,
                "top": 803.48583984375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "销售与市场 ($0.5B)",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 846.4599609375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 24%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 884.22509765625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 951.94189453125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "产品 ($0.5B)",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 994.916015625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 1032.68115234375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "support": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1235.83154296875,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "客服支持 ($0.3B)",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 1278.8056640625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 1316.57080078125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1108.21142578125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "管理费用 ($0.3B)",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 1151.185546875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 1188.95068359375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"923\" width=\"235\" height=\"115\" rx=\"22\" fill=\"#ff375b\"/><text x=\"136.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"136.5\" y=\"992\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">133M</text><text x=\"136.5\" y=\"1018\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +9.5%</text><rect x=\"261\" y=\"923\" width=\"112\" height=\"115\" rx=\"22\" fill=\"#ff375b\"/><text x=\"317\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">GBV</text><text data-operating-metric=\"gbv\" x=\"317\" y=\"992\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">$22.9B</text><text x=\"317\" y=\"1018\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +12%</text><rect x=\"379\" y=\"923\" width=\"321\" height=\"117\" rx=\"22\" fill=\"#ff375b\"/><text x=\"539.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">长期住宿（28天以上）</text><text data-operating-metric=\"long_term_stays\" x=\"539.5\" y=\"992\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">17%</text><text x=\"539.5\" y=\"1022\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">占预订间夜数</text><text x=\"326\" y=\"1065\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777\">GBV = 总预订价值</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\">来源：季度业绩</text></g></g>"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"923\" width=\"235\" height=\"115\" rx=\"22\" fill=\"#ff375b\"/><text x=\"136.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"136.5\" y=\"992\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">133M</text><text x=\"136.5\" y=\"1018\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+9.5% Y/Y</text><rect x=\"261\" y=\"923\" width=\"112\" height=\"115\" rx=\"22\" fill=\"#ff375b\"/><text x=\"317\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">GBV</text><text data-operating-metric=\"gbv\" x=\"317\" y=\"992\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">$22.9B</text><text x=\"317\" y=\"1018\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+12% Y/Y</text><rect x=\"379\" y=\"923\" width=\"321\" height=\"117\" rx=\"22\" fill=\"#ff375b\"/><text x=\"539.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">Long-term stays (28+ days)</text><text data-operating-metric=\"long_term_stays\" x=\"539.5\" y=\"992\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">17%</text><text x=\"539.5\" y=\"1022\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">of nights booked</text><text x=\"326\" y=\"1065\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777\">GBV = Gross Booking Value</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 769.62744140625,
      "y": 247.4267578125,
      "width": 263.0537109375,
      "height": 263.0537109375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-north-america.png",
      "x": 85.9482421875,
      "y": 514.38720703125,
      "width": 97.66845703125,
      "height": 97.66845703125
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 76.83251953125,
      "y": 755.302734375,
      "width": 91.1572265625,
      "height": 91.1572265625
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 95.06396484375,
      "y": 929.8037109375,
      "width": 78.134765625,
      "height": 79.43701171875
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 101.5751953125,
      "y": 1082.16650390625,
      "width": 82.04150390625,
      "height": 88.552734375
    }
  ]
});