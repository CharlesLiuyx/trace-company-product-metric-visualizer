window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "nintendo-q3-fy23",
  "name": "Nintendo · Q3 FY23",
  "company": "Nintendo",
  "meta": {
    "company": "Nintendo",
    "title": "Nintendo Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Dec. 2022",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/nintendo-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 119.806640625,
    "titleWeight": 800,
    "periodX": 2389.62158203125,
    "periodY": 255.240234375,
    "periodNoteY": 299.5166015625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#175578",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#808080",
        "label": "#606060"
      },
      "hub": {
        "node": "#808080",
        "label": "#606060"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00944f"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a61900"
      }
    },
    "linkTint": {
      "source": "#bfbfbf",
      "hub": "#bfbfbf",
      "profit": "#99cc99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 7
    }
  },
  "nodes": [
    {
      "id": "switch",
      "label": "Nintendo Switch",
      "value": 614,
      "type": "source",
      "valueText": "¥614B",
      "notes": [
        "(8%) Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "other_consoles",
      "label": "Other consoles",
      "value": 6,
      "type": "source",
      "valueText": "¥6B",
      "notes": [
        "(48%) Y/Y"
      ],
      "col": 1,
      "order": 1
    },
    {
      "id": "mobile_ip",
      "label": "Mobile & IP related",
      "value": 15,
      "type": "source",
      "valueText": "¥15B",
      "notes": [
        "+7% Y/Y"
      ],
      "col": 2,
      "order": 2
    },
    {
      "id": "playing_cards",
      "label": "Playing cards",
      "value": 2,
      "type": "source",
      "valueText": "¥2B",
      "notes": [
        "+144% Y/Y"
      ],
      "col": 3,
      "order": 3
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 638,
      "type": "hub",
      "valueText": "¥638B",
      "notes": [
        "(8%) Y/Y"
      ],
      "col": 4,
      "order": 4
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 306,
      "type": "profit",
      "valueText": "¥306B",
      "notes": [
        "48% margin",
        "(4pp) Y/Y"
      ],
      "col": 5,
      "order": 5
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 332,
      "type": "cost",
      "valueText": "(¥332B)",
      "notes": [],
      "col": 6,
      "order": 6
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 190,
      "type": "profit",
      "valueText": "¥190B",
      "notes": [
        "30% margin",
        "(6pp) Y/Y"
      ],
      "col": 7,
      "order": 7
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 116,
      "type": "cost",
      "valueText": "(¥116B)",
      "notes": [],
      "col": 8,
      "order": 8
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 116,
      "type": "profit",
      "valueText": "¥116B",
      "notes": [
        "18% margin",
        "(10pp) Y/Y"
      ],
      "col": 9,
      "order": 9
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 44,
      "type": "cost",
      "valueText": "(¥44B)",
      "notes": [],
      "col": 10,
      "order": 10
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 30,
      "type": "cost",
      "valueText": "(¥30B)",
      "notes": [],
      "col": 11,
      "order": 11
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 27,
      "type": "cost",
      "valueText": "(¥27B)",
      "notes": [],
      "col": 12,
      "order": 12
    },
    {
      "id": "advertising",
      "label": "Advertising",
      "value": 37,
      "type": "cost",
      "valueText": "(¥37B)",
      "notes": [],
      "col": 13,
      "order": 13
    },
    {
      "id": "other_sga",
      "label": "Other SG&A",
      "value": 52,
      "type": "cost",
      "valueText": "(¥52B)",
      "notes": [],
      "col": 14,
      "order": 14
    }
  ],
  "layout": {
    "scale": 0.527,
    "nodes": {
      "switch": {
        "x": 368.53564453125,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 421.927734375
      },
      "other_consoles": {
        "x": 368.53564453125,
        "y": 1079.56201171875,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "mobile_ip": {
        "x": 371.14013671875,
        "y": 1225.41357421875,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "playing_cards": {
        "x": 368.53564453125,
        "y": 1358.24267578125,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "revenue": {
        "x": 828.228515625,
        "y": 618.56689453125,
        "width": 72.92578125,
        "height": 437.5546875
      },
      "gross_profit": {
        "x": 1295.73486328125,
        "y": 550.85009765625,
        "width": 72.92578125,
        "height": 209.66162109375
      },
      "cost_of_sales": {
        "x": 1298.33935546875,
        "y": 902.45654296875,
        "width": 72.92578125,
        "height": 227.89306640625
      },
      "operating_profit": {
        "x": 1780.17041015625,
        "y": 470.11083984375,
        "width": 72.92578125,
        "height": 130.224609375
      },
      "operating_expenses": {
        "x": 1780.17041015625,
        "y": 782.64990234375,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "net_profit": {
        "x": 2237.2587890625,
        "y": 358.11767578125,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "tax": {
        "x": 2237.2587890625,
        "y": 596.4287109375,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "other_expense": {
        "x": 2237.2587890625,
        "y": 734.466796875,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "rnd": {
        "x": 2237.2587890625,
        "y": 890.736328125,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "advertising": {
        "x": 2237.2587890625,
        "y": 1086.0732421875,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "other_sga": {
        "x": 2237.2587890625,
        "y": 1285.31689453125,
        "width": 72.92578125,
        "height": 35.16064453125
      }
    },
    "labels": {
      "switch": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 440.1591796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#606060"
              },
              {
                "text": "(8%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#606060"
              }
            ]
          }
        ]
      },
      "other_consoles": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 984.498046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#606060"
              },
              {
                "text": "(48%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#606060"
              }
            ]
          },
          {
            "x": 338.583984375,
            "top": 1057.423828125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other consoles",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#606060"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "mobile_ip": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 1127.7451171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#606060"
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#606060"
              }
            ]
          },
          {
            "x": 351.6064453125,
            "top": 1212.39111328125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Mobile & IP related",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#606060"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "playing_cards": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 1263.1787109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#606060"
              },
              {
                "text": "+144% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#606060"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 1329.59326171875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Playing cards",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#606060"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 864.69140625,
            "top": 468.80859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#606060"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#606060"
              },
              {
                "text": "(8%) Y/Y",
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
            "x": 1332.19775390625,
            "top": 359.419921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "48% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1816.63330078125,
            "top": 277.37841796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "30% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1334.80224609375,
            "top": 1143.3720703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "sales",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1816.63330078125,
            "top": 875.109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 343.79296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "18% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(10pp) Y/Y",
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
            "x": 2422.177734375,
            "top": 570.3837890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 700.6083984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 880.318359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 1076.95751953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Advertising",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "other_sga": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 1272.29443359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other SG&A",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      }
    }
  },
  "links": [
    {
      "source": "switch",
      "target": "revenue",
      "value": 614,
      "sourceWidth": 421.927734375,
      "targetWidth": 421.927734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_consoles",
      "target": "revenue",
      "value": 6,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "mobile_ip",
      "target": "revenue",
      "value": 15,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "playing_cards",
      "target": "revenue",
      "value": 2,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 306,
      "sourceWidth": 209.66162109375,
      "targetWidth": 209.66162109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 332,
      "sourceWidth": 227.89306640625,
      "targetWidth": 227.89306640625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 190,
      "sourceWidth": 130.224609375,
      "targetWidth": 130.224609375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 116,
      "sourceWidth": 79.43701171875,
      "targetWidth": 79.43701171875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 116,
      "sourceWidth": 79.43701171875,
      "targetWidth": 79.43701171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 44,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 30,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 27,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 37,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_sga",
      "value": 52,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "switch-units",
      "label": "Switch Sell-In",
      "value": "8200000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "8.2M",
      "basis": "unspecified",
      "notes": [
        "(23%) Y/Y"
      ],
      "quote": "Switch Sell-In 8.2M units (23%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          38,
          747,
          303,
          150
        ]
      }
    },
    {
      "id": "digital-sales",
      "label": "Digital sales",
      "value": "122",
      "unit": "B",
      "currency": "JPY",
      "comparison": "eq",
      "literal": "¥122B",
      "basis": "unspecified",
      "notes": [
        "+10% Y/Y"
      ],
      "quote": "Digital sales ¥122B +10% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          686,
          1125,
          341,
          90
        ]
      }
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"146\" y=\"212\" font-size=\"30\" font-weight=\"700\" fill=\"#175578\">in yen</text><rect x=\"29\" y=\"574\" width=\"233\" height=\"115\" rx=\"22\" fill=\"#e60012\"/><text x=\"145\" y=\"614\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">Switch Sell-In</text><text data-operating-metric=\"switch-units\" x=\"92\" y=\"645\" font-size=\"22\" fill=\"white\">8.2M</text><text x=\"152\" y=\"645\" font-size=\"22\" fill=\"white\"> units</text><text x=\"145\" y=\"671\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">(23%) Y/Y</text><path d=\"M 640 864 L 663 817 L 685 864\" fill=\"none\" stroke=\"#888\" stroke-width=\"2\"/><rect x=\"527\" y=\"864\" width=\"262\" height=\"206\" rx=\"17\" fill=\"none\" stroke=\"#888\" stroke-width=\"2\"/><text x=\"658\" y=\"891\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"#606060\">Digital sales</text><text data-operating-metric=\"digital-sales\" x=\"572\" y=\"924\" font-size=\"23\" fill=\"#777\">¥122B</text><text x=\"648\" y=\"924\" font-size=\"23\" fill=\"#777\"> +10% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/nintendo/company-logo.png",
      "x": 571.68603515625,
      "y": 281.28515625,
      "width": 586.0107421875,
      "height": 144.54931640625
    },
    {
      "key": "switch-logo",
      "href": "data/assets/raster-annotations/nintendo/switch-console-icon.png",
      "x": 118.50439453125,
      "y": 591.2197265625,
      "width": 144.54931640625,
      "height": 144.54931640625
    },
    {
      "key": "mobile-stores",
      "href": "data/assets/raster-annotations/nintendo/mobile-stores-q3-fy23.png",
      "x": 106.7841796875,
      "y": 1123.83837890625,
      "width": 182.314453125,
      "height": 84.64599609375
    },
    {
      "key": "game-covers",
      "href": "data/assets/raster-annotations/nintendo/game-covers-q3-fy23.png",
      "x": 699.30615234375,
      "y": 1220.20458984375,
      "width": 313.84130859375,
      "height": 164.0830078125
    }
  ],
  "i18n": {
    "zh": {
      "meta": {
        "title": "任天堂 2023 财年第三季度利润表",
        "periodNote": "截至 2022 年 12 月"
      },
      "nodes": {
        "switch": {
          "label": "任天堂 Switch"
        },
        "other_consoles": {
          "label": "其他主机"
        },
        "mobile_ip": {
          "label": "移动业务与 IP 相关收入"
        },
        "playing_cards": {
          "label": "纸牌"
        },
        "revenue": {
          "label": "收入"
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
          "label": "运营费用"
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
        "advertising": {
          "label": "广告"
        },
        "other_sga": {
          "label": "其他 SG&A"
        }
      },
      "layout": {
        "labels": {
          "switch": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 440.1591796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#606060"
                  }
                ]
              }
            ]
          },
          "other_consoles": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 984.498046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 (48%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#606060"
                  }
                ]
              },
              {
                "x": 338.583984375,
                "top": 1057.423828125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他主机",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#606060"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "mobile_ip": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 1127.7451171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#606060"
                  }
                ]
              },
              {
                "x": 351.6064453125,
                "top": 1212.39111328125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "移动业务与 IP 相关收入",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#606060"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "playing_cards": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 1263.1787109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 +144%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#606060"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 1329.59326171875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "纸牌",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#606060"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 864.69140625,
                "top": 468.80859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#606060"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 (8%)",
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
                "x": 1332.19775390625,
                "top": 359.419921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "48% 利润率",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4pp)",
                    "size": 27.34716796875,
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
                "x": 1816.63330078125,
                "top": 277.37841796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "30% 利润率",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6pp)",
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
                "x": 1334.80224609375,
                "top": 1143.3720703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1816.63330078125,
                "top": 875.109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 343.79296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "18% 利润率",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (10pp)",
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
                "x": 2422.177734375,
                "top": 570.3837890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 700.6083984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 880.318359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 1076.95751953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "广告",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "other_sga": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 1272.29443359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他 SG&A",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"146\" y=\"212\" font-size=\"30\" font-weight=\"700\" fill=\"#175578\">单位：日元</text><rect x=\"29\" y=\"574\" width=\"233\" height=\"115\" rx=\"22\" fill=\"#e60012\"/><text x=\"145\" y=\"614\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">Switch 销量</text><text data-operating-metric=\"switch-units\" x=\"92\" y=\"645\" font-size=\"22\" fill=\"white\">8.2M</text><text x=\"152\" y=\"645\" font-size=\"22\" fill=\"white\"> 台</text><text x=\"145\" y=\"671\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">同比 (23%)</text><path d=\"M 640 864 L 663 817 L 685 864\" fill=\"none\" stroke=\"#888\" stroke-width=\"2\"/><rect x=\"527\" y=\"864\" width=\"262\" height=\"206\" rx=\"17\" fill=\"none\" stroke=\"#888\" stroke-width=\"2\"/><text x=\"658\" y=\"891\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"#606060\">数字销售额</text><text data-operating-metric=\"digital-sales\" x=\"572\" y=\"924\" font-size=\"23\" fill=\"#777\">¥122B</text><text x=\"648\" y=\"924\" font-size=\"23\" fill=\"#777\"> 同比 +10%</text></g>"
    }
  }
});
