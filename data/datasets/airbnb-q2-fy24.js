window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbnb-q2-fy24",
  "name": "Airbnb · Q2 FY24",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbnb-q2-fy24.png",
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
      "name": 39.0673828125,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 7.8134765625
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 1.3,
      "notes": [
        "+10% Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source",
      "valueText": "$1.3B"
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 1,
      "notes": [
        "+11% Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source",
      "valueText": "$1.0B"
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 0.2,
      "notes": [
        "+13% Y/Y"
      ],
      "col": 0,
      "order": 2,
      "type": "source",
      "valueText": "$0.2B"
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 0.2,
      "notes": [
        "+10% Y/Y"
      ],
      "col": 0,
      "order": 3,
      "type": "source",
      "valueText": "$0.2B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 2.7,
      "notes": [
        "+11% Y/Y"
      ],
      "col": 1,
      "order": 4,
      "type": "hub",
      "valueText": "$2.7B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.2,
      "notes": [
        "82% margin",
        "(1pp) Y/Y"
      ],
      "col": 2,
      "order": 5,
      "type": "profit",
      "valueText": "$2.2B"
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
      "value": 0.5,
      "notes": [
        "18% margin",
        "(3pp) Y/Y"
      ],
      "col": 3,
      "order": 7,
      "type": "profit",
      "valueText": "$0.5B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.7,
      "notes": [],
      "col": 3,
      "order": 8,
      "type": "cost",
      "valueText": "($1.7B)"
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
      "value": 0.6,
      "notes": [
        "20% margin",
        "(6pp) Y/Y"
      ],
      "col": 5,
      "order": 10,
      "type": "profit",
      "valueText": "$0.6B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "notes": [],
      "col": 5,
      "order": 11,
      "type": "cost",
      "valueText": "($0.1B)"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.6,
      "notes": [
        "21% of revenue",
        "+1pp Y/Y"
      ],
      "col": 5,
      "order": 12,
      "type": "cost",
      "valueText": "($0.6B)"
    },
    {
      "id": "product",
      "label": "Product",
      "value": 0.5,
      "notes": [
        "19% of revenue",
        "+1pp Y/Y"
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
        "12% of revenue",
        "(0pp) Y/Y"
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
        "11% of revenue",
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
      "value": 1.3,
      "sourceWidth": 139.34033203125,
      "targetWidth": 139.34033203125,
      "y0": 558.012451171875,
      "y1": 748.140380859375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 1.0,
      "sourceWidth": 111.9931640625,
      "targetWidth": 111.9931640625,
      "y0": 803.48583984375,
      "y1": 873.80712890625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "y0": 991.00927734375,
      "y1": 940.2216796875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 23.4404296875,
      "targetWidth": 20.8359375,
      "y0": 1134.25634765625,
      "y1": 961.0576171875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.2,
      "sourceWidth": 239.61328125,
      "targetWidth": 239.61328125,
      "y0": 798.27685546875,
      "y1": 691.49267578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.5,
      "sourceWidth": 53.39208984375,
      "targetWidth": 54.6943359375,
      "y0": 944.779541015625,
      "y1": 1037.89013671875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.5,
      "sourceWidth": 53.39208984375,
      "targetWidth": 53.39208984375,
      "y0": 598.382080078125,
      "y1": 502.015869140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.7,
      "sourceWidth": 186.22119140625,
      "targetWidth": 187.5234375,
      "y0": 718.188720703125,
      "y1": 806.09033203125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "y0": 495.504638671875,
      "y1": 374.395751953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "y0": 522.20068359375,
      "y1": 662.84326171875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "y0": 456.437255859375,
      "y1": 404.347412109375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.6,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.20556640625,
      "y0": 742.931396484375,
      "y1": 836.693115234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.5,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "y0": 801.532470703125,
      "y1": 996.869384765625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.3,
      "sourceWidth": 36.462890625,
      "targetWidth": 36.462890625,
      "y0": 847.76220703125,
      "y1": 1149.88330078125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "y0": 882.9228515625,
      "y1": 1294.4326171875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 397.18505859375,
        "y": 488.34228515625,
        "width": 72.92578125,
        "height": 139.34033203125
      },
      "emea": {
        "x": 397.18505859375,
        "y": 747.4892578125,
        "width": 72.92578125,
        "height": 111.9931640625
      },
      "latam": {
        "x": 397.18505859375,
        "y": 980.59130859375,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "apac": {
        "x": 397.18505859375,
        "y": 1122.5361328125,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "revenue": {
        "x": 864.69140625,
        "y": 678.47021484375,
        "width": 72.92578125,
        "height": 293.00537109375
      },
      "gross_profit": {
        "x": 1326.98876953125,
        "y": 571.68603515625,
        "width": 72.92578125,
        "height": 239.61328125
      },
      "cost_of_revenue": {
        "x": 1332.19775390625,
        "y": 1010.54296875,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "operating_profit": {
        "x": 1801.00634765625,
        "y": 475.31982421875,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "operating_expenses": {
        "x": 1799.7041015625,
        "y": 712.32861328125,
        "width": 72.92578125,
        "height": 187.5234375
      },
      "other_income": {
        "x": 2142.19482421875,
        "y": 446.67041015625,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "net_profit": {
        "x": 2265.908203125,
        "y": 354.2109375,
        "width": 72.92578125,
        "height": 59.9033203125
      },
      "tax": {
        "x": 2265.908203125,
        "y": 656.33203125,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "sm": {
        "x": 2265.908203125,
        "y": 806.09033203125,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "product": {
        "x": 2265.908203125,
        "y": 968.87109375,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "support": {
        "x": 2265.908203125,
        "y": 1131.65185546875,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "ga": {
        "x": 2265.908203125,
        "y": 1277.50341796875,
        "width": 72.92578125,
        "height": 33.8583984375
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 386.76708984375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 441.46142578125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 282.58740234375,
            "top": 511.78271484375,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
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
            "top": 647.21630859375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 701.91064453125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 282.58740234375,
            "top": 780.04541015625,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
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
            "top": 875.109375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 929.8037109375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 282.58740234375,
            "top": 964.96435546875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
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
            "top": 1024.86767578125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 1079.56201171875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 282.58740234375,
            "top": 1108.21142578125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
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
            "top": 523.5029296875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
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
            "top": 578.197265625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 901.154296875,
            "top": 630.287109375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
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
      "gross_profit": {
        "blocks": [
          {
            "x": 1363.45166015625,
            "top": 382.8603515625,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1363.45166015625,
            "top": 437.5546875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1363.45166015625,
            "top": 489.64453125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "82% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1363.45166015625,
            "top": 528.7119140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1368.66064453125,
            "top": 1076.95751953125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 1368.66064453125,
            "top": 1178.53271484375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1837.46923828125,
            "top": 285.19189453125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1837.46923828125,
            "top": 339.88623046875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1837.46923828125,
            "top": 391.97607421875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "18% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1837.46923828125,
            "top": 431.04345703125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1836.1669921875,
            "top": 907.66552734375,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 1836.1669921875,
            "top": 1009.24072265625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
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
            "x": 2178.65771484375,
            "top": 474.017578125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2178.65771484375,
            "top": 516.99169921875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
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
            "top": 329.46826171875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 384.16259765625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 436.25244140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "20% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 475.31982421875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "(6pp) Y/Y",
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
            "x": 2466.4541015625,
            "top": 618.56689453125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 661.541015625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2363.57666015625,
            "top": 778.7431640625,
            "anchor": "start",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "S&M",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2458.640625,
            "top": 778.7431640625,
            "anchor": "start",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2471.6630859375,
            "top": 823.01953125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "21% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2471.6630859375,
            "top": 862.0869140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
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
      "product": {
        "blocks": [
          {
            "x": 2363.57666015625,
            "top": 935.0126953125,
            "anchor": "start",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Product",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2489.89453125,
            "top": 935.0126953125,
            "anchor": "start",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2471.6630859375,
            "top": 979.2890625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "19% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2471.6630859375,
            "top": 1018.3564453125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
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
      "support": {
        "blocks": [
          {
            "x": 2363.57666015625,
            "top": 1093.88671875,
            "anchor": "start",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Support",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2489.89453125,
            "top": 1093.88671875,
            "anchor": "start",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2471.6630859375,
            "top": 1138.1630859375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2471.6630859375,
            "top": 1177.23046875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
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
      "ga": {
        "blocks": [
          {
            "x": 2363.57666015625,
            "top": 1244.947265625,
            "anchor": "start",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "G&A",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2489.89453125,
            "top": 1244.947265625,
            "anchor": "start",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2471.6630859375,
            "top": 1289.2236328125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2471.6630859375,
            "top": 1328.291015625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+0pp Y/Y",
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
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "value": "125000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "125M"
    },
    {
      "id": "gbv",
      "value": "21.2",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$21.2B"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2024 财年第二季度",
      "meta": {
        "title": "Airbnb 2024 财年第二季度利润表",
        "period": "2024 财年第二季度"
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +10%"
          ]
        },
        "emea": {
          "label": "EMEA",
          "notes": [
            "同比 +11%"
          ]
        },
        "latam": {
          "label": "拉美",
          "notes": [
            "同比 +13%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 18%",
            "同比 (3 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 20%",
            "同比 (6 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 21%",
            "同比 +1 个百分点"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 19%",
            "同比 +1 个百分点"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 12%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 386.76708984375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 441.46142578125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 282.58740234375,
                "top": 534.441796875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
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
                "top": 647.21630859375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 701.91064453125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 282.58740234375,
                "top": 780.04541015625,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
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
                "top": 875.109375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 929.8037109375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 282.58740234375,
                "top": 964.96435546875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
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
                "top": 1024.86767578125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 1079.56201171875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 282.58740234375,
                "top": 1108.21142578125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
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
                "top": 523.5029296875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
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
                "top": 578.197265625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 901.154296875,
                "top": 630.287109375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
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
          "gross_profit": {
            "blocks": [
              {
                "x": 1363.45166015625,
                "top": 382.8603515625,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1363.45166015625,
                "top": 437.5546875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1363.45166015625,
                "top": 489.64453125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 82%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1363.45166015625,
                "top": 528.7119140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1368.66064453125,
                "top": 1076.95751953125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1368.66064453125,
                "top": 1178.53271484375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1837.46923828125,
                "top": 285.19189453125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1837.46923828125,
                "top": 339.88623046875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1837.46923828125,
                "top": 391.97607421875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1837.46923828125,
                "top": 431.04345703125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1836.1669921875,
                "top": 907.66552734375,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1836.1669921875,
                "top": 1009.24072265625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
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
                "x": 2178.65771484375,
                "top": 474.017578125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2178.65771484375,
                "top": 516.99169921875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
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
                "top": 329.46826171875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 384.16259765625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 436.25244140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 475.31982421875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 (6 个百分点)",
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
                "x": 2466.4541015625,
                "top": 618.56689453125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 661.541015625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2363.57666015625,
                "top": 778.7431640625,
                "anchor": "start",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 26.044921875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2523.7529296875,
                "top": 778.7431640625,
                "anchor": "start",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2471.6630859375,
                "top": 823.01953125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2471.6630859375,
                "top": 862.0869140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
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
          "product": {
            "blocks": [
              {
                "x": 2363.57666015625,
                "top": 935.0126953125,
                "anchor": "start",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "产品",
                    "size": 26.044921875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2523.7529296875,
                "top": 935.0126953125,
                "anchor": "start",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2471.6630859375,
                "top": 979.2890625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2471.6630859375,
                "top": 1018.3564453125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
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
          "support": {
            "blocks": [
              {
                "x": 2363.57666015625,
                "top": 1093.88671875,
                "anchor": "start",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "客服支持",
                    "size": 26.044921875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2523.7529296875,
                "top": 1093.88671875,
                "anchor": "start",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2471.6630859375,
                "top": 1138.1630859375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2471.6630859375,
                "top": 1177.23046875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
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
          "ga": {
            "blocks": [
              {
                "x": 2363.57666015625,
                "top": 1244.947265625,
                "anchor": "start",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 26.044921875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2523.7529296875,
                "top": 1244.947265625,
                "anchor": "start",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2471.6630859375,
                "top": 1289.2236328125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2471.6630859375,
                "top": 1328.291015625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +0 个百分点",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"174.5009765625\" y=\"1199.36865234375\" width=\"304.7255859375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"326.86376953125\" y=\"1251.45849609375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"326.86376953125\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">125M</text><text x=\"326.86376953125\" y=\"1321.77978515625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比 +9%</text><rect x=\"488.34228515625\" y=\"1199.36865234375\" width=\"145.8515625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"561.26806640625\" y=\"1251.45849609375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">总预订价值</text><text data-operating-metric=\"gbv\" x=\"561.26806640625\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$21.2B</text><text x=\"561.26806640625\" y=\"1321.77978515625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比 +11%</text><text x=\"423.22998046875\" y=\"1385.58984375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">GBV = 总预订价值</text></g>"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"174.5009765625\" y=\"1199.36865234375\" width=\"304.7255859375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"326.86376953125\" y=\"1251.45849609375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"326.86376953125\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">125M</text><text x=\"326.86376953125\" y=\"1321.77978515625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+9% Y/Y</text><rect x=\"488.34228515625\" y=\"1199.36865234375\" width=\"145.8515625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"561.26806640625\" y=\"1251.45849609375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">GBV</text><text data-operating-metric=\"gbv\" x=\"561.26806640625\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$21.2B</text><text x=\"561.26806640625\" y=\"1321.77978515625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+11% Y/Y</text><text x=\"423.22998046875\" y=\"1385.58984375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">GBV = Gross Booking Value</text></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 769.62744140625,
      "y": 247.4267578125,
      "width": 261.75146484375,
      "height": 261.75146484375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-north-america.png",
      "x": 87.25048828125,
      "y": 515.689453125,
      "width": 93.76171875,
      "height": 93.76171875
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 79.43701171875,
      "y": 759.20947265625,
      "width": 82.04150390625,
      "height": 82.04150390625
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 98.970703125,
      "y": 932.408203125,
      "width": 70.3212890625,
      "height": 75.5302734375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 104.1796875,
      "y": 1086.0732421875,
      "width": 76.83251953125,
      "height": 84.64599609375
    }
  ]
});
