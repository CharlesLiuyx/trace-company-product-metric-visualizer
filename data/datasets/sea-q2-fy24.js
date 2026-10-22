window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sea-q2-fy24",
  "name": "Sea · Q2 FY24",
  "company": "Sea",
  "meta": {
    "company": "Sea",
    "title": "Sea Limited Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sea-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 123.71337890625,
    "titleWeight": 800,
    "titleTextLength": 2461.2451171875,
    "hidePeriodStamp": true
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
      "note": 28.6494140625,
      "lineGap": 10.41796875
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "shopee",
      "label": "Shopee",
      "value": 2.8,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+34% Y/Y"
      ],
      "valueText": "$2.8B",
      "color": "#000084",
      "labelColor": "#ff9300"
    },
    {
      "id": "garena",
      "label": "Garena",
      "value": 0.4,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(18%) Y/Y"
      ],
      "valueText": "$0.4B",
      "color": "#000084",
      "labelColor": "#ff2600"
    },
    {
      "id": "seamoney",
      "label": "SeaMoney",
      "value": 0.5,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+21% Y/Y"
      ],
      "valueText": "$0.5B",
      "color": "#000084",
      "labelColor": "#009eff"
    },
    {
      "id": "other_services",
      "label": "Other Services",
      "value": 0.031,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [],
      "valueText": "$31M",
      "color": "#000084",
      "labelColor": "#797979"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.8,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+23% Y/Y"
      ],
      "valueText": "$3.8B",
      "color": "#000084",
      "labelColor": "#000084"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.5,
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "42% margin",
        "(5pp) Y/Y"
      ],
      "valueText": "$1.5B",
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2.2,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": [],
      "valueText": "($2.2B)",
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "other_income",
      "label": "Other income",
      "value": 0.043,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [],
      "valueText": "$43M",
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.1,
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "2% margin",
        "(7pp) Y/Y"
      ],
      "valueText": "$0.1B",
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.5,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [],
      "valueText": "($1.5B)",
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.8,
      "type": "cost",
      "col": 5,
      "order": 0,
      "notes": [
        "20% of revenue",
        "+4pp Y/Y"
      ],
      "valueText": "($0.8B)",
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [
        "8% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "($0.3B)",
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [
        "8% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "($0.3B)",
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "credit_losses",
      "label": "Provision for credit losses",
      "value": 0.2,
      "type": "cost",
      "col": 5,
      "order": 3,
      "notes": [
        "4% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "($0.2B)",
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "shopee",
      "target": "revenue",
      "value": 2.8,
      "sourceWidth": 225.28857421875,
      "targetWidth": 225.28857421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8585c0"
    },
    {
      "source": "garena",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8585c0"
    },
    {
      "source": "seamoney",
      "target": "revenue",
      "value": 0.5,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#8585c0"
    },
    {
      "source": "other_services",
      "target": "revenue",
      "value": 0.031,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#8585c0"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.5,
      "sourceWidth": 126.31787109375,
      "targetWidth": 125.015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.2,
      "sourceWidth": 177.10546875,
      "targetWidth": 177.10546875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.057,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 583.40625,
      "y1": 505.922607421875,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.5,
      "sourceWidth": 122.4111328125,
      "targetWidth": 122.4111328125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 645.9140625,
      "y1": 773.5341796875,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.043,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y0": 559.9658203125,
      "y1": 509.17822265625,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.8,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.20556640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.3,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "credit_losses",
      "value": 0.2,
      "sourceWidth": 14.32470703125,
      "targetWidth": 13.0224609375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "shopee": {
        "x": 467.50634765625,
        "y": 530.01416015625,
        "width": 71.62353515625,
        "height": 225.28857421875
      },
      "garena": {
        "x": 467.50634765625,
        "y": 873.80712890625,
        "width": 71.62353515625,
        "height": 35.16064453125
      },
      "seamoney": {
        "x": 467.50634765625,
        "y": 1031.37890625,
        "width": 71.62353515625,
        "height": 41.671875
      },
      "other_services": {
        "x": 467.50634765625,
        "y": 1192.857421875,
        "width": 71.62353515625,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 935.0126953125,
        "y": 718.83984375,
        "width": 71.62353515625,
        "height": 303.42333984375
      },
      "gross_profit": {
        "x": 1396.0078125,
        "y": 582.10400390625,
        "width": 72.92578125,
        "height": 125.015625
      },
      "cost_of_revenue": {
        "x": 1396.0078125,
        "y": 949.33740234375,
        "width": 72.92578125,
        "height": 177.10546875
      },
      "other_income": {
        "x": 1738.49853515625,
        "y": 558.66357421875,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "operating_profit": {
        "x": 1868.72314453125,
        "y": 503.96923828125,
        "width": 71.62353515625,
        "height": 6.51123046875
      },
      "operating_expenses": {
        "x": 1868.72314453125,
        "y": 712.32861328125,
        "width": 71.62353515625,
        "height": 122.4111328125
      },
      "sm": {
        "x": 2334.92724609375,
        "y": 608.14892578125,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "rnd": {
        "x": 2334.92724609375,
        "y": 829.53076171875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "ga": {
        "x": 2334.92724609375,
        "y": 1013.1474609375,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "credit_losses": {
        "x": 2334.92724609375,
        "y": 1207.18212890625,
        "width": 72.92578125,
        "height": 13.0224609375
      }
    },
    "labels": {
      "shopee": {
        "blocks": [
          {
            "x": 507.8759765625,
            "top": 433.64794921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+34% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "garena": {
        "blocks": [
          {
            "x": 507.8759765625,
            "top": 782.64990234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(18%) Y/Y",
                "size": 28.6494140625,
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
            "x": 507.8759765625,
            "top": 940.2216796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 28.6494140625,
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
            "x": 503.318115234375,
            "top": 1123.83837890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 1170.62822265625,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other Services",
                "size": 39.0673828125,
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
            "x": 971.4755859375,
            "top": 570.3837890625,
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
                "size": 28.6494140625,
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
            "x": 1432.470703125,
            "top": 343.79296875,
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
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "42% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28.6494140625,
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
            "x": 1432.470703125,
            "top": 1144.67431640625,
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
            "x": 1774.96142578125,
            "top": 576.89501953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other income",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1905.18603515625,
            "top": 265.658203125,
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
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "2% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1905.18603515625,
            "top": 855.57568359375,
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
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2528.9619140625,
            "top": 602.93994140625,
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
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "20% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "+4pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2528.9619140625,
            "top": 795.67236328125,
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
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2528.9619140625,
            "top": 991.00927734375,
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
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "credit_losses": {
        "blocks": [
          {
            "x": 2528.9619140625,
            "top": 1175.92822265625,
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
                "size": 39.0673828125,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "4% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"161\" y=\"535\" font-size=\"18\" fill=\"#797979\" >E-commerce</text><text x=\"121\" y=\"726\" font-size=\"18\" fill=\"#797979\" >Digital Entertainment</text><text x=\"83\" y=\"845\" font-size=\"18\" fill=\"#797979\" >Digital Financial Services</text><path d=\"M1575 238 H1776 Q1792 238 1792 254 V420 Q1792 436 1776 436 H1575 Q1560 436 1560 421 V413 L1533 394 L1560 375 V254 Q1560 238 1575 238Z\" fill=\"#f2f2f2\" stroke=\"#000084\" stroke-width=\"2\"/><g class=\"sankey-interactive-annotation\" data-node=\"op_shopee\"><text x=\"1696\" y=\"275\" font-size=\"23\" fill=\"#941100\" >($0.1B)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"op_garena\"><text x=\"1696\" y=\"321\" font-size=\"23\" fill=\"#008f51\" >$0.2B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"op_seamoney\"><text x=\"1696\" y=\"367\" font-size=\"23\" fill=\"#008f51\" >$0.2B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"op_other\"><text x=\"1576\" y=\"413\" font-size=\"23\" fill=\"#797979\" >Other</text><text x=\"1696\" y=\"413\" font-size=\"23\" fill=\"#941100\" >($0.2B)</text></g><g><rect x=\"24\" y=\"988\" width=\"331\" height=\"77\" rx=\"16\" fill=\"#000084\"/><text x=\"46\" y=\"1024\" font-size=\"21\" fill=\"white\" >Shopee Marketplace</text><text x=\"271\" y=\"1024\" font-size=\"21\" fill=\"white\" data-operating-metric=\"shopee_marketplace\">$2.5B</text><text x=\"189.5\" y=\"1049\" font-size=\"17\" fill=\"white\" text-anchor=\"middle\">+32% Y/Y</text></g><g><rect x=\"362\" y=\"988\" width=\"292\" height=\"77\" rx=\"16\" fill=\"#000084\"/><text x=\"384\" y=\"1024\" font-size=\"21\" fill=\"white\" >Garena Bookings</text><text x=\"570\" y=\"1024\" font-size=\"21\" fill=\"white\" data-operating-metric=\"garena_bookings\">$0.5B</text><text x=\"508\" y=\"1049\" font-size=\"17\" fill=\"white\" text-anchor=\"middle\">+21% Y/Y and +5% Q/Q</text></g><text x=\"132\" y=\"1105\" font-size=\"28\" fill=\"black\" >Source: Quarterly results</text></g>",
  "nonNodeMetrics": [
    {
      "id": "op_shopee",
      "label": "Shopee",
      "value": -0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "representation": "annotation"
    },
    {
      "id": "op_garena",
      "label": "Garena",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "profit",
      "representation": "annotation"
    },
    {
      "id": "op_seamoney",
      "label": "SeaMoney",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "profit",
      "representation": "annotation"
    },
    {
      "id": "op_other",
      "label": "Other",
      "value": -0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "representation": "annotation"
    }
  ],
  "operatingMetrics": [
    {
      "id": "shopee_marketplace",
      "label": "Shopee Marketplace",
      "value": "2.5",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$2.5B",
      "basis": "unspecified",
      "notes": [
        "+32% Y/Y"
      ],
      "quote": "Shopee Marketplace $2.5B\n+32% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          31,
          1287,
          431,
          100
        ]
      }
    },
    {
      "id": "garena_bookings",
      "label": "Garena Bookings",
      "value": "0.5",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.5B",
      "basis": "unspecified",
      "notes": [
        "+21% Y/Y and +5% Q/Q"
      ],
      "quote": "Garena Bookings $0.5B\n+21% Y/Y and +5% Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          471,
          1287,
          380,
          100
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
      "name": "Sea · 2024 财年第二季度",
      "meta": {
        "title": "Sea Limited 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月"
      },
      "nodes": {
        "shopee": {
          "label": "Shopee 电商",
          "notes": [
            "同比 +34%"
          ]
        },
        "garena": {
          "label": "Garena 游戏娱乐",
          "notes": [
            "同比 (18%)"
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
            "同比 (7 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 20%",
            "同比 +4 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 8%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 8%",
            "同比 (2 个百分点)"
          ]
        },
        "credit_losses": {
          "label": "信用损失拨备",
          "notes": [
            "占收入 4%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "nonNodeMetrics": {
        "op_shopee": {
          "label": "Shopee 电商"
        },
        "op_garena": {
          "label": "Garena 游戏娱乐"
        },
        "op_seamoney": {
          "label": "SeaMoney 金融服务"
        },
        "op_other": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "shopee": {
            "blocks": [
              {
                "x": 507.8759765625,
                "top": 433.64794921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +34%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "garena": {
            "blocks": [
              {
                "x": 507.8759765625,
                "top": 782.64990234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (18%)",
                    "size": 28.6494140625,
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
                "x": 507.8759765625,
                "top": 940.2216796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28.6494140625,
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
                "x": 503.318115234375,
                "top": 1123.83837890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 1170.62822265625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他服务",
                    "size": 39.0673828125,
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
                "x": 971.4755859375,
                "top": 570.3837890625,
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
                    "size": 28.6494140625,
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
                "x": 1432.470703125,
                "top": 343.79296875,
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
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "毛利率 42%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28.6494140625,
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
                "x": 1432.470703125,
                "top": 1144.67431640625,
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
                "x": 1774.96142578125,
                "top": 576.89501953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他收入",
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1905.18603515625,
                "top": 265.658203125,
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
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "利润率 2%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1905.18603515625,
                "top": 855.57568359375,
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
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2528.9619140625,
                "top": 602.93994140625,
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
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "占收入 20%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2528.9619140625,
                "top": 795.67236328125,
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
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2528.9619140625,
                "top": 991.00927734375,
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
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "credit_losses": {
            "blocks": [
              {
                "x": 2528.9619140625,
                "top": 1175.92822265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "信用",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "损失拨备",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"161\" y=\"535\" font-size=\"18\" fill=\"#797979\" >电商</text><text x=\"121\" y=\"726\" font-size=\"18\" fill=\"#797979\" >数字娱乐</text><text x=\"83\" y=\"845\" font-size=\"18\" fill=\"#797979\" >数字金融服务</text><path d=\"M1575 238 H1776 Q1792 238 1792 254 V420 Q1792 436 1776 436 H1575 Q1560 436 1560 421 V413 L1533 394 L1560 375 V254 Q1560 238 1575 238Z\" fill=\"#f2f2f2\" stroke=\"#000084\" stroke-width=\"2\"/><g class=\"sankey-interactive-annotation\" data-node=\"op_shopee\"><text x=\"1696\" y=\"275\" font-size=\"23\" fill=\"#941100\" >($0.1B)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"op_garena\"><text x=\"1696\" y=\"321\" font-size=\"23\" fill=\"#008f51\" >$0.2B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"op_seamoney\"><text x=\"1696\" y=\"367\" font-size=\"23\" fill=\"#008f51\" >$0.2B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"op_other\"><text x=\"1576\" y=\"413\" font-size=\"23\" fill=\"#797979\" >其他</text><text x=\"1696\" y=\"413\" font-size=\"23\" fill=\"#941100\" >($0.2B)</text></g><g><rect x=\"24\" y=\"988\" width=\"331\" height=\"77\" rx=\"16\" fill=\"#000084\"/><text x=\"46\" y=\"1024\" font-size=\"21\" fill=\"white\" >Shopee 市场</text><text x=\"271\" y=\"1024\" font-size=\"21\" fill=\"white\" data-operating-metric=\"shopee_marketplace\">$2.5B</text><text x=\"189.5\" y=\"1049\" font-size=\"17\" fill=\"white\" text-anchor=\"middle\">同比 +32%</text></g><g><rect x=\"362\" y=\"988\" width=\"292\" height=\"77\" rx=\"16\" fill=\"#000084\"/><text x=\"384\" y=\"1024\" font-size=\"21\" fill=\"white\" >Garena 预订额</text><text x=\"570\" y=\"1024\" font-size=\"21\" fill=\"white\" data-operating-metric=\"garena_bookings\">$0.5B</text><text x=\"508\" y=\"1049\" font-size=\"17\" fill=\"white\" text-anchor=\"middle\">同比 +21%，环比 +5%</text></g><text x=\"132\" y=\"1105\" font-size=\"28\" fill=\"black\" >来源：季度财报</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "company",
      "href": "data/assets/raster-annotations/sea-q2-fy24/company.png",
      "x": 693,
      "y": 332,
      "width": 422,
      "height": 169
    },
    {
      "key": "shopee",
      "href": "data/assets/raster-annotations/sea-q2-fy24/shopee.png",
      "x": 120,
      "y": 569,
      "width": 288,
      "height": 107
    },
    {
      "key": "garena",
      "href": "data/assets/raster-annotations/sea-q2-fy24/garena.png",
      "x": 108,
      "y": 839,
      "width": 289,
      "height": 85
    },
    {
      "key": "seamoney",
      "href": "data/assets/raster-annotations/sea-q2-fy24/seamoney.png",
      "x": 104,
      "y": 1004,
      "width": 316,
      "height": 73
    },
    {
      "key": "callout-shopee",
      "href": "data/assets/raster-annotations/sea-q2-fy24/shopee.png",
      "x": 2044.5263671875,
      "y": 311.23681640625,
      "width": 154.96728515625,
      "height": 55.99658203125
    },
    {
      "key": "callout-garena",
      "href": "data/assets/raster-annotations/sea-q2-fy24/garena.png",
      "x": 2044.5263671875,
      "y": 385.46484375,
      "width": 154.96728515625,
      "height": 45.57861328125
    },
    {
      "key": "callout-seamoney",
      "href": "data/assets/raster-annotations/sea-q2-fy24/seamoney.png",
      "x": 2044.5263671875,
      "y": 449.27490234375,
      "width": 156.26953125,
      "height": 39.0673828125
    }
  ]
});
