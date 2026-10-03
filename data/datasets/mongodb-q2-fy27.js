(function(){ window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "mongodb-q2-fy27",
  "name": "MongoDB · Q2 FY27",
  "company": "MongoDB",
  "meta": {
    "company": "MongoDB",
    "title": "MongoDB Q2 FY27 Income Statement",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processing/mongodb-q2-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2331.0205078125,
    "periodX": 247.4267578125,
    "periodY": 308.63232421875,
    "periodNoteY": 351.6064453125,
    "logoX": 642.00732421875,
    "logoY": 259.14697265625,
    "logoWidth": 596.4287109375,
    "logoHeight": 140.642578125,
    "logoViewBox": "0 0 460 110",
    "logoSvg": "<g fill=\"#06232e\"><path d=\"M25 0 C7 24 0 40 0 55 C0 80 16 94 23 97 L25 108 L27 97 C42 87 50 72 50 55 C50 33 34 12 25 0Z\"/><path d=\"M25 35 L23 93 L25 105 L27 93Z\" fill=\"#f2f2f2\"/><text x=\"70\" y=\"94\" font-family=\"Georgia,serif\" font-size=\"82\">MongoDB</text><text x=\"447\" y=\"94\" font-family=\"Arial,sans-serif\" font-size=\"13\">®</text></g>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#707070",
    "noteColor": "#707070",
    "palette": {
      "source": {
        "node": "#06232e",
        "label": "#06232e"
      },
      "hub": {
        "node": "#06232e",
        "label": "#06232e"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00964a"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#981100"
      }
    },
    "linkTint": {
      "source": "#88959a",
      "hub": "#88959a",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 28.6494140625,
      "lineGap": 9.11572265625
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "atlas",
      "value": 566,
      "label": "Atlas",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+29% Y/Y",
        "73% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#06232e",
      "valueText": "$566M"
    },
    {
      "id": "enterprise",
      "value": 181,
      "label": "Enterprise Advanced and other",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+36% Y/Y"
      ],
      "color": "#06232e",
      "valueText": "$181M"
    },
    {
      "id": "subscription",
      "value": 747,
      "label": "Subscription",
      "type": "source",
      "col": 1,
      "order": 0,
      "notes": [
        "+31% Y/Y"
      ],
      "color": "#06232e",
      "valueText": "$747M"
    },
    {
      "id": "services",
      "value": 25,
      "label": "Services",
      "type": "source",
      "col": 1,
      "order": 1,
      "notes": [
        "+29% Y/Y"
      ],
      "color": "#06232e",
      "valueText": "$25M"
    },
    {
      "id": "revenue",
      "value": 772,
      "label": "Revenue",
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+30% Y/Y"
      ],
      "color": "#06232e",
      "valueText": "$772M"
    },
    {
      "id": "gross_profit",
      "value": 570,
      "label": "Gross profit",
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "74% margin",
        "+3pp Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$570M"
    },
    {
      "id": "cost_of_revenue",
      "value": 202,
      "label": "Cost of revenue",
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($202M)"
    },
    {
      "id": "operating_profit",
      "value": 28,
      "label": "Operating profit",
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "4% margin",
        "+15pp Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$28M"
    },
    {
      "id": "operating_expenses",
      "value": 541,
      "label": "Operating expenses",
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($541M)"
    },
    {
      "id": "other_income",
      "value": 18,
      "label": "Other",
      "type": "profit",
      "col": 5,
      "order": 0,
      "notes": [],
      "color": "#2ca02c",
      "valueText": "$18M"
    },
    {
      "id": "net_profit",
      "value": 41,
      "label": "Net profit",
      "type": "profit",
      "col": 6,
      "order": 0,
      "notes": [
        "5% margin",
        "+13pp Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$41M"
    },
    {
      "id": "other_expenses",
      "value": 5,
      "label": "Other",
      "type": "cost",
      "col": 6,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($5M)"
    },
    {
      "id": "sm",
      "value": 253,
      "label": "Sales & marketing",
      "type": "cost",
      "col": 6,
      "order": 2,
      "notes": [
        "33% of revenue",
        "(8pp) Y/Y"
      ],
      "color": "#cc0000",
      "valueText": "($253M)"
    },
    {
      "id": "rnd",
      "value": 214,
      "label": "Research & development",
      "type": "cost",
      "col": 6,
      "order": 3,
      "notes": [
        "28% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#cc0000",
      "valueText": "($214M)"
    },
    {
      "id": "ga",
      "value": 74,
      "label": "General & admin",
      "type": "cost",
      "col": 6,
      "order": 4,
      "notes": [
        "10% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "valueText": "($74M)"
    }
  ],
  "links": [
    {
      "source": "atlas",
      "target": "subscription",
      "value": 566,
      "sourceWidth": 279.98291015625,
      "targetWidth": 279.98291015625,
      "y0": 642.658447265625,
      "y1": 742.931396484375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "enterprise",
      "target": "subscription",
      "value": 181,
      "sourceWidth": 91.1572265625,
      "targetWidth": 91.1572265625,
      "y0": 998.82275390625,
      "y1": 928.50146484375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 747,
      "sourceWidth": 371.14013671875,
      "targetWidth": 369.837890625,
      "y0": 788.510009765625,
      "y1": 869.900390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 25,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "y0": 1173.32373046875,
      "y1": 1061.33056640625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 570,
      "sourceWidth": 282.58740234375,
      "targetWidth": 282.58740234375,
      "y0": 826.275146484375,
      "y1": 744.233642578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 202,
      "sourceWidth": 100.27294921875,
      "targetWidth": 100.27294921875,
      "y0": 1017.705322265625,
      "y1": 1128.396240234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 28,
      "sourceWidth": 14.32470703125,
      "targetWidth": 13.0224609375,
      "y0": 610.102294921875,
      "y1": 540.43212890625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 541,
      "sourceWidth": 268.2626953125,
      "targetWidth": 268.2626953125,
      "y0": 751.39599609375,
      "y1": 829.53076171875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 23,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 535.22314453125,
      "y1": 463.599609375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expenses",
      "value": 5,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "y0": 541.734375,
      "y1": 622.4736328125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 18,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "y0": 511.131591796875,
      "y1": 469.459716796875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 253,
      "sourceWidth": 125.015625,
      "targetWidth": 125.015625,
      "y0": 757.9072265625,
      "y1": 807.392578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 214,
      "sourceWidth": 105.48193359375,
      "targetWidth": 105.48193359375,
      "y0": 873.156005859375,
      "y1": 1016.403076171875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 74,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "y0": 944.779541015625,
      "y1": 1213.042236328125,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.494853515625,
    "nodes": {
      "atlas": {
        "x": 398.4873046875,
        "y": 502.6669921875,
        "width": 72.92578125,
        "height": 279.98291015625
      },
      "enterprise": {
        "x": 398.4873046875,
        "y": 953.244140625,
        "width": 72.92578125,
        "height": 91.1572265625
      },
      "subscription": {
        "x": 772.23193359375,
        "y": 602.93994140625,
        "width": 72.92578125,
        "height": 371.14013671875
      },
      "services": {
        "x": 772.23193359375,
        "y": 1166.8125,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "revenue": {
        "x": 1145.9765625,
        "y": 684.9814453125,
        "width": 72.92578125,
        "height": 382.8603515625
      },
      "gross_profit": {
        "x": 1519.72119140625,
        "y": 602.93994140625,
        "width": 72.92578125,
        "height": 282.58740234375
      },
      "cost_of_revenue": {
        "x": 1519.72119140625,
        "y": 1078.259765625,
        "width": 72.92578125,
        "height": 100.27294921875
      },
      "operating_profit": {
        "x": 1893.4658203125,
        "y": 533.9208984375,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "operating_expenses": {
        "x": 1893.4658203125,
        "y": 695.3994140625,
        "width": 72.92578125,
        "height": 268.2626953125
      },
      "other_income": {
        "x": 2159.1240234375,
        "y": 506.57373046875,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "net_profit": {
        "x": 2267.21044921875,
        "y": 462.29736328125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "other_expenses": {
        "x": 2267.21044921875,
        "y": 617.2646484375,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "sm": {
        "x": 2267.21044921875,
        "y": 744.884765625,
        "width": 72.92578125,
        "height": 125.015625
      },
      "rnd": {
        "x": 2267.21044921875,
        "y": 963.662109375,
        "width": 72.92578125,
        "height": 105.48193359375
      },
      "ga": {
        "x": 2267.21044921875,
        "y": 1194.15966796875,
        "width": 72.92578125,
        "height": 37.76513671875
      }
    },
    "labels": {
      "atlas": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 403.6962890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+29% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 246.12451171875,
            "top": 565.1748046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Atlas",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "73% of revenue",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "enterprise": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 855.57568359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+36% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 246.12451171875,
            "top": 928.50146484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Enterprise",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Advanced",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "and other",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 808.69482421875,
            "top": 1073.05078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+29% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 645.9140625,
            "top": 1149.88330078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 808.69482421875,
            "top": 453.181640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+31% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1182.439453125,
            "top": 533.9208984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+30% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1556.18408203125,
            "top": 415.41650390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "74% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1929.9287109375,
            "top": 345.09521484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "4% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+15pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1556.18408203125,
            "top": 1191.55517578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 35.16064453125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 35.16064453125,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1929.9287109375,
            "top": 976.6845703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2195.5869140625,
            "top": 524.8984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
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
            "x": 2454.73388671875,
            "top": 394.58056640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "5% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+13pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2454.73388671875,
            "top": 589.91748046875,
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
      "sm": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 739.67578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "33% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(8pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 948.03515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "28% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 1148.5810546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "10% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "customers",
      "label": "Customers",
      "value": "70600",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "70,600",
      "basis": "unspecified",
      "notes": [
        "+18% Y/Y"
      ],
      "quote": "Customers 70,600 +18% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          38,
          1220,
          529,
          125
        ]
      }
    },
    {
      "id": "large-customers",
      "label": "> $100K",
      "value": "2999",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2,999",
      "basis": "unspecified",
      "notes": [
        "+17% Y/Y"
      ],
      "quote": "> $100K 2,999 +17% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          38,
          1220,
          529,
          125
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"37.76514\" y=\"1220.20459\" width=\"528.71191\" height=\"125.01562\" rx=\"36.46289\" fill=\"#06232e\"/><text x=\"100.27295\" y=\"1272.29443\" font-size=\"29.95166\" font-weight=\"800\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"270.86719\" y=\"1272.29443\" font-size=\"29.95166\" fill=\"white\">70,600</text><text x=\"375.04688\" y=\"1272.29443\" font-size=\"29.95166\" fill=\"white\">+18% Y/Y</text><text x=\"130.22461\" y=\"1313.96631\" font-size=\"29.95166\" fill=\"white\">&gt; $100K</text><text data-operating-metric=\"large-customers\" x=\"294.30762\" y=\"1313.96631\" font-size=\"29.95166\" fill=\"white\">2,999</text><text x=\"381.55811\" y=\"1313.96631\" font-size=\"29.95166\" fill=\"white\">+17% Y/Y</text></g>",
  "i18n": {
    "zh": {
      "name": "MongoDB · 2027 财年第二季度",
      "meta": {
        "title": "MongoDB 2027 财年第二季度利润表",
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "titleSize": 111.9931640625,
        "titleTextLength": 2148.7060546875
      },
      "nodes": {
        "atlas": {
          "label": "Atlas",
          "notes": [
            "同比 +29%",
            "占收入 73%",
            "同比 (1 个百分点)"
          ]
        },
        "enterprise": {
          "label": "企业高级版及其他",
          "notes": [
            "同比 +36%"
          ]
        },
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +31%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +29%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +30%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 74%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 4%",
            "同比 +15 个百分点"
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
            "利润率 5%",
            "同比 +13 个百分点"
          ]
        },
        "other_expenses": {
          "label": "其他",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 33%",
            "同比 (8 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 28%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 10%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "atlas": {
            "blocks": [
              {
                "x": 434.9501953125,
                "top": 403.6962890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +29%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 246.12451171875,
                "top": 565.1748046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "Atlas",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "占收入 73%",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "enterprise": {
            "blocks": [
              {
                "x": 434.9501953125,
                "top": 855.57568359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +36%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 246.12451171875,
                "top": 928.50146484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "企业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "高级版",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "及其他",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 808.69482421875,
                "top": 1073.05078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +29%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 645.9140625,
                "top": 1149.88330078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 808.69482421875,
                "top": 453.181640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +31%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1182.439453125,
                "top": 533.9208984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +30%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1556.18408203125,
                "top": 415.41650390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 74%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1929.9287109375,
                "top": 345.09521484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 4%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +15 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1556.18408203125,
                "top": 1191.55517578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35.16064453125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 35.16064453125,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1929.9287109375,
                "top": 976.6845703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 2195.5869140625,
                "top": 524.8984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55615234375,
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
                "x": 2460.73388671875,
                "top": 394.58056640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 5%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +13 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2454.73388671875,
                "top": 589.91748046875,
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
          "sm": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 739.67578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 33%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (8 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 948.03515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 1148.5810546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "行政",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"37.76514\" y=\"1220.20459\" width=\"528.71191\" height=\"125.01562\" rx=\"36.46289\" fill=\"#06232e\"/><text x=\"100.27295\" y=\"1272.29443\" font-size=\"29.95166\" font-weight=\"800\" fill=\"white\">客户</text><text data-operating-metric=\"customers\" x=\"270.86719\" y=\"1272.29443\" font-size=\"29.95166\" fill=\"white\">70,600</text><text x=\"375.04688\" y=\"1272.29443\" font-size=\"29.95166\" fill=\"white\">同比 +18%</text><text x=\"130.22461\" y=\"1313.96631\" font-size=\"29.95166\" fill=\"white\">&gt; $100K 客户</text><text data-operating-metric=\"large-customers\" x=\"294.30762\" y=\"1313.96631\" font-size=\"29.95166\" fill=\"white\">2,999</text><text x=\"381.55811\" y=\"1313.96631\" font-size=\"29.95166\" fill=\"white\">同比 +17%</text></g>"
    }
  }
}); })();
