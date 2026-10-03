window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "carnival-q3-fy26",
  "name": "Carnival · Q3 FY26",
  "company": "Carnival",
  "meta": {
    "company": "Carnival",
    "title": "Carnival Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Aug. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/carnival-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "periodX": 2461.2451171875,
    "periodY": 294.3076171875,
    "periodNoteY": 337.28173828125,
    "periodSize": 39.0673828125,
    "periodNoteSize": 28.6494140625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#005da8",
        "label": "#005da8"
      },
      "hub": {
        "node": "#005da8",
        "label": "#005da8"
      },
      "profit": {
        "node": "#25a532",
        "label": "#009651"
      },
      "cost": {
        "node": "#d90000",
        "label": "#a7190b"
      }
    },
    "linkTint": {
      "source": "#8bb5d1",
      "hub": "#8bb5d1",
      "profit": "#9bce9b",
      "cost": "#e18383"
    },
    "linkOpacity": 1,
    "type": {
      "name": 36.462890625,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"translate(18 -12) scale(0.77)\"><g data-typography-role=\"brand\" transform=\"translate(560 237)\">\n      <g transform=\"translate(228 0)\">\n        <path d=\"M0 0 L16 90\" stroke=\"#171717\" stroke-width=\"5\"/>\n        <path d=\"M16 18 C43 5 78 7 104 17 L114 80 C83 70 50 70 26 80 Z\" fill=\"#e8414d\"/>\n        <ellipse cx=\"64\" cy=\"46\" rx=\"18\" ry=\"26\" fill=\"#005da8\" stroke=\"#ffffff\" stroke-width=\"5\"/>\n      </g>\n      <text x=\"0\" y=\"178\" font-family=\"Georgia,Times New Roman,serif\" font-size=\"92\" letter-spacing=\"18\" fill=\"#050505\">CARNIVAL</text>\n      <text x=\"18\" y=\"214\" font-family=\"Georgia,Times New Roman,serif\" font-size=\"31\" letter-spacing=\"6\" fill=\"#050505\">CORPORATION &amp; PLC.</text>\n    </g>\n      \n    </g><g><rect x=\"67\" y=\"919\" width=\"496\" height=\"86\" rx=\"30\" fill=\"#005da8\"/><rect x=\"576\" y=\"919\" width=\"322\" height=\"86\" rx=\"30\" fill=\"#005da8\"/>\n<text x=\"105\" y=\"954\" fill=\"white\" font-size=\"23\" font-weight=\"700\">Net yields per ALBD</text><text data-operating-metric=\"net_yields_albd\" x=\"353\" y=\"954\" fill=\"white\" font-size=\"23\">$255</text><text x=\"412\" y=\"954\" fill=\"white\" font-size=\"23\">(+2% Y/Y)</text>\n<text x=\"105\" y=\"987\" fill=\"white\" font-size=\"23\" font-weight=\"700\">Cruise costs per ALBD</text><text data-operating-metric=\"cruise_costs_albd\" x=\"365\" y=\"987\" fill=\"white\" font-size=\"23\">$215</text><text x=\"424\" y=\"987\" fill=\"white\" font-size=\"23\">(+4% Y/Y)</text>\n<text x=\"737\" y=\"954\" text-anchor=\"middle\" fill=\"white\" font-size=\"24\" font-weight=\"700\">Customer deposits</text><text data-operating-metric=\"customer_deposits\" x=\"653\" y=\"987\" fill=\"white\" font-size=\"23\">$7.1B</text><text x=\"721\" y=\"987\" fill=\"white\" font-size=\"23\">(+4% Y/Y)</text>\n<text x=\"320\" y=\"1035\" text-anchor=\"middle\" fill=\"#777777\" font-size=\"21\">ALBD = Available Lower Berth Day</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "carnival-onboard-ship",
      "href": "data/assets/raster-annotations/carnival/onboard-ship.png",
      "x": 131.52685546875,
      "y": 942.826171875,
      "width": 182.314453125,
      "height": 74.22802734375
    },
    {
      "key": "carnival-brand-cluster",
      "href": "data/assets/raster-annotations/carnival/brand-cluster.png",
      "x": 78.134765625,
      "y": 790.46337890625,
      "width": 260.44921875,
      "height": 84.64599609375
    },
    {
      "key": "carnival-passenger-ticket",
      "href": "data/assets/raster-annotations/carnival/passenger-ticket.png",
      "x": 131.52685546875,
      "y": 539.1298828125,
      "width": 157.57177734375,
      "height": 106.7841796875
    }
  ],
  "layout": {
    "nodes": {
      "passenger_ticket": {
        "x": 390.673828125,
        "y": 540.43212890625,
        "width": 72.92578125,
        "height": 234.404296875
      },
      "onboard_other_revenue": {
        "x": 390.673828125,
        "y": 966.2666015625,
        "width": 72.92578125,
        "height": 122.4111328125
      },
      "revenue": {
        "x": 858.18017578125,
        "y": 622.4736328125,
        "width": 71.62353515625,
        "height": 358.11767578125
      },
      "operating_profit": {
        "x": 1325.6865234375,
        "y": 524.80517578125,
        "width": 71.62353515625,
        "height": 93.76171875
      },
      "operating_expenses": {
        "x": 1325.6865234375,
        "y": 781.34765625,
        "width": 71.62353515625,
        "height": 263.0537109375
      },
      "net_profit": {
        "x": 1791.890625,
        "y": 424.5322265625,
        "width": 72.92578125,
        "height": 82.04150390625
      },
      "interest_other": {
        "x": 1791.890625,
        "y": 703.212890625,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "cruise_tour": {
        "x": 1791.890625,
        "y": 828.228515625,
        "width": 72.92578125,
        "height": 195.3369140625
      },
      "selling_admin": {
        "x": 1791.890625,
        "y": 1165.51025390625,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "depreciation_amortization": {
        "x": 1791.890625,
        "y": 1347.82470703125,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "commissions_transportation": {
        "x": 2259.39697265625,
        "y": 497.4580078125,
        "width": 72.92578125,
        "height": 41.671875
      },
      "onboard_other_cost": {
        "x": 2259.39697265625,
        "y": 665.44775390625,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "payroll_related": {
        "x": 2259.39697265625,
        "y": 820.4150390625,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "fuel": {
        "x": 2259.39697265625,
        "y": 976.6845703125,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "food": {
        "x": 2259.39697265625,
        "y": 1129.04736328125,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "other_operating": {
        "x": 2259.39697265625,
        "y": 1252.7607421875,
        "width": 72.92578125,
        "height": 45.57861328125
      }
    },
    "labels": {
      "passenger_ticket": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 438.85693359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "x": 217.47509765625,
            "top": 634.3185546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Passenger ticket",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "onboard_other_revenue": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 867.2958984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 210.9638671875,
            "top": 1004.26767578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Onboard & other",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 893.3408203125,
            "top": 470.11083984375,
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
                "text": "+3% Y/Y",
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
            "x": 1360.84716796875,
            "top": 277.37841796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#009651"
              },
              {
                "text": "profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#009651"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009651"
              },
              {
                "text": "26% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1360.84716796875,
            "top": 1056.12158203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 35.16064453125,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "expenses",
                "size": 35.16064453125,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 233.10205078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#009651"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009651"
              },
              {
                "text": "23% margin",
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
      "interest_other": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 563.87255859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Interest",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "& other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "cruise_tour": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 731.8623046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cruise & tour",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "selling_admin": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 1070.4462890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Selling & admin",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 1211.0888671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "amortization",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "commissions_transportation": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 454.48388671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Commissions &",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "transportation",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "onboard_other_cost": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 619.869140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Onboard",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "& other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "payroll_related": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 770.9296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Payroll",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "& related",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "fuel": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 944.12841796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Fuel",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "food": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1095.18896484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Food",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1214.99560546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "operating",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a7190b"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a7190b"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "passenger_ticket",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Passenger ticket",
      "value": 5.5,
      "color": "#005da8",
      "labelColor": "#005da8",
      "linkTint": "#8bb5d1",
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "onboard_other_revenue",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Onboard & other",
      "value": 2.9,
      "color": "#005da8",
      "labelColor": "#005da8",
      "linkTint": "#8bb5d1",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 8.4,
      "color": "#005da8",
      "labelColor": "#005da8",
      "linkTint": "#8bb5d1",
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.2,
      "color": "#25a532",
      "labelColor": "#009651",
      "linkTint": "#9bce9b",
      "notes": [
        "26% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 6.2,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.9,
      "color": "#25a532",
      "labelColor": "#009651",
      "linkTint": "#9bce9b",
      "notes": [
        "23% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "interest_other",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Interest",
        "& other"
      ],
      "value": 0.3,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "cruise_tour",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": "Cruise & tour",
      "value": 4.6,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "selling_admin",
      "col": 3,
      "order": 3,
      "type": "cost",
      "label": "Selling & admin",
      "value": 0.8,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "depreciation_amortization",
      "col": 3,
      "order": 4,
      "type": "cost",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "value": 0.8,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "commissions_transportation",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": [
        "Commissions &",
        "transportation"
      ],
      "value": 1,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "onboard_other_cost",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Onboard",
        "& other"
      ],
      "value": 0.9,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "payroll_related",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": [
        "Payroll",
        "& related"
      ],
      "value": 0.6,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "fuel",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Fuel",
      "value": 0.6,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "food",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "Food",
      "value": 0.4,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    },
    {
      "id": "other_operating",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": [
        "Other",
        "operating"
      ],
      "value": 1.1,
      "color": "#d90000",
      "labelColor": "#a7190b",
      "linkTint": "#e18383"
    }
  ],
  "links": [
    {
      "source": "passenger_ticket",
      "target": "revenue",
      "value": 5.5,
      "width": 234.404296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 234.404296875,
      "targetWidth": 234.404296875
    },
    {
      "source": "onboard_other_revenue",
      "target": "revenue",
      "value": 2.9,
      "width": 122.4111328125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 122.4111328125,
      "targetWidth": 123.71337890625
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 2.2,
      "width": 95.06396484375,
      "sourceWidth": 95.06396484375,
      "targetWidth": 93.76171875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9b"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 6.2,
      "width": 263.0537109375,
      "sourceWidth": 263.0537109375,
      "targetWidth": 263.0537109375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18383"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.9,
      "width": 80.7392578125,
      "sourceWidth": 80.7392578125,
      "targetWidth": 82.04150390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9b"
    },
    {
      "source": "operating_profit",
      "target": "interest_other",
      "value": 0.3,
      "width": 13.0224609375,
      "sourceWidth": 13.0224609375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18383"
    },
    {
      "source": "operating_expenses",
      "target": "cruise_tour",
      "value": 4.6,
      "width": 195.3369140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 195.3369140625,
      "targetWidth": 195.3369140625
    },
    {
      "source": "operating_expenses",
      "target": "selling_admin",
      "value": 0.8,
      "width": 35.16064453125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.8,
      "width": 32.55615234375,
      "sourceWidth": 32.55615234375,
      "targetWidth": 31.25390625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "cruise_tour",
      "target": "commissions_transportation",
      "value": 1,
      "width": 41.671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875
    },
    {
      "source": "cruise_tour",
      "target": "onboard_other_cost",
      "value": 0.9,
      "width": 39.0673828125,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "cruise_tour",
      "target": "payroll_related",
      "value": 0.6,
      "width": 27.34716796875,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "cruise_tour",
      "target": "fuel",
      "value": 0.6,
      "width": 26.044921875,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "cruise_tour",
      "target": "food",
      "value": 0.4,
      "width": 16.92919921875,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "cruise_tour",
      "target": "other_operating",
      "value": 1.1,
      "width": 44.2763671875,
      "sourceWidth": 44.2763671875,
      "targetWidth": 45.57861328125,
      "sourceOrder": 5,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "ALBD",
      "CORPORATION & PLC."
    ],
    "zh": {
      "name": "嘉年华 · 2026 财年第三季度",
      "meta": {
        "title": "嘉年华 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 8 月",
        "titleSize": 110.69091796875
      },
      "nodes": {
        "passenger_ticket": {
          "label": "乘客票务",
          "notes": [
            "同比 +2%"
          ]
        },
        "onboard_other_revenue": {
          "label": "船上及其他",
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 26%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 23%",
            "同比 +0 个百分点"
          ]
        },
        "interest_other": {
          "label": [
            "利息",
            "及其他"
          ]
        },
        "cruise_tour": {
          "label": "邮轮与旅游"
        },
        "selling_admin": {
          "label": "销售与行政"
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ]
        },
        "commissions_transportation": {
          "label": [
            "佣金与",
            "运输"
          ]
        },
        "onboard_other_cost": {
          "label": [
            "船上",
            "及其他"
          ]
        },
        "payroll_related": {
          "label": [
            "薪酬及",
            "相关费用"
          ]
        },
        "fuel": {
          "label": "燃油"
        },
        "food": {
          "label": "餐饮"
        },
        "other_operating": {
          "label": [
            "其他",
            "运营"
          ]
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"translate(18 -12) scale(0.77)\"><g data-typography-role=\"brand\" transform=\"translate(560 237)\">\n      <g transform=\"translate(228 0)\">\n        <path d=\"M0 0 L16 90\" stroke=\"#171717\" stroke-width=\"5\"/>\n        <path d=\"M16 18 C43 5 78 7 104 17 L114 80 C83 70 50 70 26 80 Z\" fill=\"#e8414d\"/>\n        <ellipse cx=\"64\" cy=\"46\" rx=\"18\" ry=\"26\" fill=\"#005da8\" stroke=\"#ffffff\" stroke-width=\"5\"/>\n      </g>\n      <text x=\"0\" y=\"178\" font-family=\"Georgia,Times New Roman,serif\" font-size=\"92\" letter-spacing=\"18\" fill=\"#050505\">CARNIVAL</text>\n      <text x=\"18\" y=\"214\" font-family=\"Georgia,Times New Roman,serif\" font-size=\"31\" letter-spacing=\"6\" fill=\"#050505\">CORPORATION &amp; PLC.</text>\n    </g>\n      \n    </g><g><rect x=\"67\" y=\"919\" width=\"496\" height=\"86\" rx=\"30\" fill=\"#005da8\"/><rect x=\"576\" y=\"919\" width=\"322\" height=\"86\" rx=\"30\" fill=\"#005da8\"/>\n<text x=\"105\" y=\"954\" fill=\"white\" font-size=\"23\" font-weight=\"700\">每个 ALBD 净收益</text><text data-operating-metric=\"net_yields_albd\" x=\"342\" y=\"954\" fill=\"white\" font-size=\"23\">$255</text><text x=\"412\" y=\"954\" fill=\"white\" font-size=\"23\">(同比 +2%)</text>\n<text x=\"105\" y=\"987\" fill=\"white\" font-size=\"23\" font-weight=\"700\">每个 ALBD 邮轮成本</text><text data-operating-metric=\"cruise_costs_albd\" x=\"365\" y=\"987\" fill=\"white\" font-size=\"23\">$215</text><text x=\"424\" y=\"987\" fill=\"white\" font-size=\"23\">(同比 +4%)</text>\n<text x=\"737\" y=\"954\" text-anchor=\"middle\" fill=\"white\" font-size=\"24\" font-weight=\"700\">客户预付款</text><text data-operating-metric=\"customer_deposits\" x=\"653\" y=\"987\" fill=\"white\" font-size=\"23\">$7.1B</text><text x=\"721\" y=\"987\" fill=\"white\" font-size=\"23\">(同比 +4%)</text>\n<text x=\"320\" y=\"1035\" text-anchor=\"middle\" fill=\"#777777\" font-size=\"21\">ALBD = 可售低铺位天数</text></g></g>",
      "layout": {
        "labels": {
          "passenger_ticket": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 438.85693359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "x": 217.47509765625,
                "top": 634.3185546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "乘客票务",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "onboard_other_revenue": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 867.2958984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 210.9638671875,
                "top": 1004.26767578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "船上及其他",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 893.3408203125,
                "top": 470.11083984375,
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
                    "text": "同比 +3%",
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
                "x": 1360.84716796875,
                "top": 277.37841796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#009651"
                  },
                  {
                    "text": "利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#009651"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#009651"
                  },
                  {
                    "text": "利润率 26%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1360.84716796875,
                "top": 1056.12158203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 35.16064453125,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "费用",
                    "size": 35.16064453125,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 233.10205078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#009651"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#009651"
                  },
                  {
                    "text": "利润率 23%",
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
          "interest_other": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 563.87255859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "及其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "cruise_tour": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 731.8623046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "邮轮与旅游",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "selling_admin": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 1070.4462890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与行政",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 1211.0888671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "摊销",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "commissions_transportation": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 454.48388671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "佣金与",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "运输",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "onboard_other_cost": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 619.869140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "船上",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "及其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "payroll_related": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 770.9296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "及相关费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "fuel": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 944.12841796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "燃油",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "food": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1095.18896484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "餐饮",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1214.99560546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "运营",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a7190b"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a7190b"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "net_yields_albd",
      "value": "0.255",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$255"
    },
    {
      "id": "cruise_costs_albd",
      "value": "0.215",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$215"
    },
    {
      "id": "customer_deposits",
      "value": "7.1",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$7.1B"
    }
  ]
});
