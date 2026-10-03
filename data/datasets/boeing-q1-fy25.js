(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "boeing-q1-fy25",
  "name": "Boeing · Q1 FY25",
  "company": "Boeing",
  "meta": {
    "company": "Boeing",
    "title": "Boeing Q1 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/boeing-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "commercial_airplanes",
      "label": [
        "Commercial",
        "Airplanes"
      ],
      "value": 8.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+75% Y/Y",
        "(7%) segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "defense",
      "label": [
        "Defense, Space",
        "& Security"
      ],
      "value": 6.3,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(9%) Y/Y",
        "3% segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "global_services",
      "label": "Global Services",
      "value": 5.1,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+0% Y/Y",
        "19% segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "seg_hub",
      "label": "",
      "value": 19.5,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 19.5,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+18% Y/Y"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "unallocated",
      "label": "Unallocated",
      "value": -0.012,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": [],
      "color": "#e08585",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($12M)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.4,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "12% margin",
        "+20pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#96c896"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 17.1,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.4,
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "2% margin",
        "+3pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#96c896"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 2.0,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_loss",
      "label": "Net loss",
      "value": -0.031,
      "type": "cost",
      "col": 5,
      "order": 0,
      "notes": [
        "(0%) margin",
        "+2pp Y/Y"
      ],
      "color": "#e08585",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($31M)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.4,
      "type": "cost",
      "col": 6,
      "order": 0,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 1.1,
      "type": "cost",
      "col": 6,
      "order": 1,
      "notes": [
        "6% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.8,
      "type": "cost",
      "col": 6,
      "order": 2,
      "notes": [
        "4% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "commercial_airplanes",
      "target": "seg_hub",
      "value": 8.1,
      "width": 138.0380859375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "defense",
      "target": "seg_hub",
      "value": 6.3,
      "width": 105.48193359375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "global_services",
      "target": "seg_hub",
      "value": 5.1,
      "width": 84.64599609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "seg_hub",
      "target": "revenue",
      "value": 19.5,
      "width": 329.46826171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "seg_hub",
      "target": "unallocated",
      "value": 0.012,
      "width": 0.651123046875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 876.0860595703125,
      "y1": 1125.4661865234375,
      "curve": {
        "c1x": 1041.796875,
        "c1y": 876.0860595703125,
        "c2x": 1040.49462890625,
        "c2y": 1125.4661865234375
      },
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.4,
      "width": 40.36962890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#96c896"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 17.1,
      "width": 289.0986328125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 287.79638671875,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.4,
      "width": 7.8134765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#96c896"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.0,
      "width": 32.55615234375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.4,
      "width": 7.8134765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "net_loss",
      "target": "other",
      "value": 0.031,
      "width": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y0": 451.228271484375,
      "y1": 378.302490234375,
      "curve": {
        "c1x": 2286.744140625,
        "c1y": 451.228271484375,
        "c2x": 2259.39697265625,
        "c2y": 378.302490234375
      },
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 1.1,
      "width": 18.2314453125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.8,
      "width": 14.32470703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 13.0224609375,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "commercial_airplanes": {
        "x": 431.04345703125,
        "y": 424.5322265625,
        "width": 72.92578125,
        "height": 138.0380859375
      },
      "defense": {
        "x": 431.04345703125,
        "y": 748.79150390625,
        "width": 72.92578125,
        "height": 105.48193359375
      },
      "global_services": {
        "x": 431.04345703125,
        "y": 1036.587890625,
        "width": 72.92578125,
        "height": 84.64599609375
      },
      "seg_hub": {
        "x": 804.7880859375,
        "y": 546.943359375,
        "width": 72.92578125,
        "height": 329.46826171875
      },
      "revenue": {
        "x": 1178.53271484375,
        "y": 632.8916015625,
        "width": 72.92578125,
        "height": 329.46826171875
      },
      "unallocated": {
        "x": 1178.53271484375,
        "y": 1125.140625,
        "width": 72.92578125,
        "height": 0.651123046875
      },
      "gross_profit": {
        "x": 1549.6728515625,
        "y": 514.38720703125,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "cost_of_sales": {
        "x": 1554.8818359375,
        "y": 793.06787109375,
        "width": 72.92578125,
        "height": 287.79638671875
      },
      "operating_profit": {
        "x": 1928.62646484375,
        "y": 419.3232421875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "operating_expenses": {
        "x": 1936.43994140625,
        "y": 621.17138671875,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "net_loss": {
        "x": 2186.47119140625,
        "y": 450.5771484375,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "other": {
        "x": 2299.7666015625,
        "y": 371.14013671875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "ga": {
        "x": 2299.7666015625,
        "y": 769.62744140625,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "rnd": {
        "x": 2299.7666015625,
        "y": 1013.1474609375,
        "width": 72.92578125,
        "height": 13.0224609375
      }
    },
    "labels": {
      "commercial_airplanes": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 325.5615234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+75% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 263.0537109375,
            "top": 398.4873046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Airplanes",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 263.0537109375,
            "top": 507.8759765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(7%) segment margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "defense": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 648.5185546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 721.4443359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Defense, Space",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Security",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 266.96044921875,
            "top": 828.228515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "3% segment margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "global_services": {
        "blocks": [
          {
            "x": 464.90185546875,
            "top": 935.0126953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 269.56494140625,
            "top": 1030.07666015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Global Services",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 269.56494140625,
            "top": 1086.0732421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "19% segment margin",
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
            "x": 1213.693359375,
            "top": 480.52880859375,
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
                "text": "+18% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "unallocated": {
        "blocks": [
          {
            "x": 1214.99560546875,
            "top": 1139.46533203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Unallocated",
                "size": 33.8583984375,
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
      "gross_profit": {
        "blocks": [
          {
            "x": 1586.1357421875,
            "top": 324.25927734375,
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
                "text": "12% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+20pp Y/Y",
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
            "x": 1591.3447265625,
            "top": 1093.88671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 33.8583984375,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1965.08935546875,
            "top": 229.1953125,
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
                "text": "2% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 1972.90283203125,
            "top": 666.75,
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
      "net_loss": {
        "blocks": [
          {
            "x": 2222.93408203125,
            "top": 466.2041015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(0%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 334.67724609375,
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
      "ga": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 700.6083984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "6% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 938.91943359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "4% of revenue",
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
      "seg_hub": {
        "blocks": []
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "deliveries",
      "label": "Deliveries",
      "literal": "130",
      "value": "130",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "quote": "Deliveries\n130 commercial airplanes\n+57% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+57% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          73,
          1177,
          447,
          159
        ]
      }
    },
    {
      "id": "backlog",
      "label": "Backlog",
      "literal": "$545B",
      "value": "545",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "quote": "Backlog\n$545B\n+5% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+5% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          531,
          1177,
          240,
          159
        ]
      }
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(0.768)\">\n    <g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"904\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Deliveries</text><text x=\"88\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">130</text><text x=\"132\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\">commercial airplanes</text><text x=\"227.5\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">+57% Y/Y</text></g><g><rect x=\"408\" y=\"904\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Backlog</text><text x=\"500.0\" y=\"974\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"backlog\">$545B</text><text x=\"500.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">+5% Y/Y</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "boeing-q4-737-tile",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-commercial-airplanes-737.png",
      "x": 104.1796875,
      "y": 302.12109375,
      "width": 279.98291015625,
      "height": 92.45947265625
    },
    {
      "key": "boeing-q4-starliner-tile",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-defense-starliner.png",
      "x": 203.150390625,
      "y": 606.8466796875,
      "width": 122.4111328125,
      "height": 115.89990234375
    }
  ],
  "i18n": {
    "zh": {
      "name": "波音 · 2025 财年第一季度",
      "meta": {
        "title": "波音 2025 财年第一季度利润表",
        "period": "",
        "periodNote": ""
      },
      "nodes": {
        "commercial_airplanes": {
          "label": [
            "商用",
            "飞机"
          ],
          "notes": [
            "同比 +75%",
            "分部利润率 (7%)"
          ]
        },
        "defense": {
          "label": [
            "国防、太空",
            "与安全"
          ],
          "notes": [
            "同比 (9%)",
            "分部利润率 3%"
          ]
        },
        "global_services": {
          "label": "全球服务",
          "notes": [
            "同比 +0%",
            "分部利润率 19%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "unallocated": {
          "label": "未分配项",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 12%",
            "同比 +20 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "net_loss": {
          "label": "净亏损",
          "notes": [
            "利润率 (0%)",
            "同比 +2 个百分点"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "ga": {
          "label": "管理费用 G&A",
          "notes": [
            "占收入 6%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发 R&D",
          "notes": [
            "占收入 4%",
            "同比 (1 个百分点)"
          ]
        },
        "seg_hub": {
          "label": "",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "commercial_airplanes": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 325.5615234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +75%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 263.0537109375,
                "top": 398.4873046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "商用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "飞机",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 263.0537109375,
                "top": 507.8759765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "分部利润率 (7%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "defense": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 648.5185546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 721.4443359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "国防、太空",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "与安全",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 266.96044921875,
                "top": 828.228515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "分部利润率 3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "global_services": {
            "blocks": [
              {
                "x": 464.90185546875,
                "top": 935.0126953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 269.56494140625,
                "top": 1030.07666015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "全球服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 269.56494140625,
                "top": 1086.0732421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "分部利润率 19%",
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
                "x": 1213.693359375,
                "top": 480.52880859375,
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
                    "text": "同比 +18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "unallocated": {
            "blocks": [
              {
                "x": 1214.99560546875,
                "top": 1139.46533203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "未分配项",
                    "size": 33.8583984375,
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
          "gross_profit": {
            "blocks": [
              {
                "x": 1586.1357421875,
                "top": 324.25927734375,
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
                    "text": "利润率 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +20 个百分点",
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
                "x": 1591.3447265625,
                "top": 1093.88671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 33.8583984375,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1965.08935546875,
                "top": 229.1953125,
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
                    "text": "利润率 2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1972.90283203125,
                "top": 666.75,
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
          "net_loss": {
            "blocks": [
              {
                "x": 2222.93408203125,
                "top": 466.2041015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (0%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 334.67724609375,
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
          "ga": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 700.6083984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用 G&A",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 6%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 938.91943359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发 R&D",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 4%",
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
          "seg_hub": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(0.768)\">\n    <g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"904\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">交付</text><text x=\"140\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">130</text><text x=\"185\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\">架商用飞机</text><text x=\"227.5\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">同比 +57%</text></g><g><rect x=\"408\" y=\"904\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">订单储备</text><text x=\"500.0\" y=\"974\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"backlog\">$545B</text><text x=\"500.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">同比 +5%</text></g></g>"
    }
  }
});})();
