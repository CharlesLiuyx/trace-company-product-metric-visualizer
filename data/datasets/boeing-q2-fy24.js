(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "boeing-q2-fy24",
  "name": "Boeing · Q2 FY24",
  "company": "Boeing",
  "meta": {
    "company": "Boeing",
    "title": "Boeing Q2 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/boeing-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800
  },
  "render": {
    "width": 2667.0,
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
      "value": 6,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(32%) Y/Y",
        "(9%) segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8",
      "valueText": "$6.0B"
    },
    {
      "id": "defense",
      "label": [
        "Defense, Space",
        "& Security"
      ],
      "value": 6,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(2%) Y/Y",
        "(17%) segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8",
      "valueText": "$6.0B"
    },
    {
      "id": "global_services",
      "label": "Global Services",
      "value": 4.9,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+3% Y/Y",
        "16% segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "seg_hub",
      "label": "",
      "value": 16.9,
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
      "value": 16.9,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "(15%) Y/Y"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "unallocated",
      "label": "Unallocated",
      "value": -0.047,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": [],
      "color": "#e08585",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($47M)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.2,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "7% margin",
        "(3pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#96c896"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 15.6,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -1.1,
      "type": "cost",
      "col": 4,
      "order": 0,
      "notes": [
        "(6%) margin",
        "(6pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 2.3,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "label": "G&A & Other",
      "value": 1.4,
      "type": "cost",
      "col": 6,
      "order": 1,
      "notes": [
        "8% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1,
      "type": "cost",
      "col": 6,
      "order": 2,
      "notes": [
        "6% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.0B)"
    }
  ],
  "links": [
    {
      "source": "commercial_airplanes",
      "target": "seg_hub",
      "value": 6,
      "sourceWidth": 110.69091796875,
      "targetWidth": 110.69091796875,
      "y0": 452.530517578125,
      "y1": 633.542724609375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "defense",
      "target": "seg_hub",
      "value": 6,
      "sourceWidth": 110.69091796875,
      "targetWidth": 110.69091796875,
      "y0": 780.696533203125,
      "y1": 744.233642578125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "global_services",
      "target": "seg_hub",
      "value": 4.9,
      "sourceWidth": 88.552734375,
      "targetWidth": 88.552734375,
      "y0": 1079.56201171875,
      "y1": 843.85546875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "seg_hub",
      "target": "revenue",
      "value": 16.9,
      "sourceWidth": 308.63232421875,
      "targetWidth": 308.63232421875,
      "y0": 732.513427734375,
      "y1": 798.927978515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "seg_hub",
      "target": "unallocated",
      "value": 0.047,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "y0": 887.480712890625,
      "y1": 1094.537841796875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.2,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "y0": 655.680908203125,
      "y1": 587.964111328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#96c896"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 15.6,
      "sourceWidth": 286.494140625,
      "targetWidth": 286.494140625,
      "y0": 809.9970703125,
      "y1": 905.06103515625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.2,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "y0": 587.964111328125,
      "y1": 658.285400390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 1.1,
      "sourceWidth": 19.53369140625,
      "targetWidth": 20.8359375,
      "y0": 775.487548828125,
      "y1": 679.7724609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 1.4,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "y0": 659.587646484375,
      "y1": 531.967529296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1,
      "sourceWidth": 18.2314453125,
      "targetWidth": 16.92919921875,
      "y0": 681.07470703125,
      "y1": 835.390869140625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "commercial_airplanes": {
        "x": 431.04345703125,
        "y": 397.18505859375,
        "width": 72.92578125,
        "height": 110.69091796875
      },
      "defense": {
        "x": 431.04345703125,
        "y": 725.35107421875,
        "width": 72.92578125,
        "height": 110.69091796875
      },
      "global_services": {
        "x": 431.04345703125,
        "y": 1035.28564453125,
        "width": 72.92578125,
        "height": 88.552734375
      },
      "seg_hub": {
        "x": 804.7880859375,
        "y": 578.197265625,
        "width": 72.92578125,
        "height": 309.9345703125
      },
      "revenue": {
        "x": 1178.53271484375,
        "y": 644.61181640625,
        "width": 72.92578125,
        "height": 308.63232421875
      },
      "unallocated": {
        "x": 1178.53271484375,
        "y": 1093.88671875,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "gross_profit": {
        "x": 1549.6728515625,
        "y": 576.89501953125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "cost_of_sales": {
        "x": 1552.27734375,
        "y": 761.81396484375,
        "width": 72.92578125,
        "height": 286.494140625
      },
      "operating_loss": {
        "x": 1780.17041015625,
        "y": 765.720703125,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "operating_expenses": {
        "x": 1926.02197265625,
        "y": 647.21630859375,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "ga": {
        "x": 2299.7666015625,
        "y": 519.59619140625,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "rnd": {
        "x": 2299.7666015625,
        "y": 826.92626953125,
        "width": 72.92578125,
        "height": 16.92919921875
      }
    },
    "labels": {
      "commercial_airplanes": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 299.5166015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(32%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 399.78955078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Airplanes",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 266.96044921875,
            "top": 510.48046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "(9%) segment margin",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "defense": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 626.38037109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
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
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Defense, Space",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Security",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 266.96044921875,
            "top": 830.8330078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "(17%) segment margin",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "global_services": {
        "blocks": [
          {
            "x": 466.2041015625,
            "top": 935.0126953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
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
          },
          {
            "x": 266.96044921875,
            "top": 1031.37890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 266.96044921875,
            "top": 1089.97998046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "16% segment margin",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1214.99560546875,
            "top": 494.853515625,
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
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(15%) Y/Y",
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
            "top": 1108.21142578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Unallocated",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "top": 388.0693359375,
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
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "7% margin",
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
            "top": 1065.2373046875,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1962.48486328125,
            "top": 481.8310546875,
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
                "weight": 400
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1816.63330078125,
            "top": 794.3701171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(6%) margin",
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
      "ga": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 483.13330078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A & Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "8% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 777.44091796875,
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
                "text": "6% of revenue",
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
      "seg_hub": {
        "blocks": []
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "deliveries",
      "label": "Deliveries",
      "literal": "92",
      "value": "92",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "quote": "Deliveries\n92 commercial airplanes\n(32%) Y/Y",
      "basis": "unspecified",
      "notes": [
        "(32%) Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          73,
          1219,
          447,
          159
        ]
      }
    },
    {
      "id": "backlog",
      "label": "Backlog",
      "literal": "$516B",
      "value": "516",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "quote": "Backlog\n$516B\n+10% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+10% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          531,
          1219,
          240,
          159
        ]
      }
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(1)\"><g transform=\"scale(0.768)\">\n    <g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"936\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"975\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Deliveries</text><text x=\"88\" y=\"1006\" text-anchor=\"start\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">92</text><text x=\"132\" y=\"1006\" text-anchor=\"start\" font-size=\"24\" fill=\"white\">commercial airplanes</text><text x=\"227.5\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">(32%) Y/Y</text></g><g><rect x=\"408\" y=\"936\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"975\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Backlog</text><text x=\"500.0\" y=\"1006\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"backlog\">$516B</text><text x=\"500.0\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">+10% Y/Y</text></g></g></g>",
  "rasterAnnotations": [
    {
      "key": "boeing-q4-737-tile",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-commercial-airplanes-737.png",
      "x": 104.1927099609375,
      "y": 302.15885888671875,
      "width": 280.01790802001955,
      "height": 92.47103009033204
    },
    {
      "key": "boeing-q4-starliner-tile",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-defense-starliner.png",
      "x": 203.1757844238281,
      "y": 606.922535522461,
      "width": 122.42643420410157,
      "height": 115.91438983154298
    }
  ],
  "i18n": {
    "zh": {
      "name": "波音 · 2024 财年第二季度",
      "meta": {
        "title": "波音 2024 财年第二季度利润表",
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
            "同比 (32%)",
            "分部利润率 (9%)"
          ]
        },
        "defense": {
          "label": [
            "国防、太空",
            "与安全"
          ],
          "notes": [
            "同比 (2%)",
            "分部利润率 (17%)"
          ]
        },
        "global_services": {
          "label": "全球服务",
          "notes": [
            "同比 +3%",
            "分部利润率 16%"
          ]
        },
        "seg_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (15%)"
          ]
        },
        "unallocated": {
          "label": "未分配项",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 7%",
            "同比 (3 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (6%)",
            "同比 (6 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "ga": {
          "label": "管理费用及其他",
          "notes": [
            "占收入 8%",
            "同比 +2 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 6%",
            "同比 +2 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "commercial_airplanes": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 299.5166015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (32%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 399.78955078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "商用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "飞机",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 266.96044921875,
                "top": 510.48046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 (9%)",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "defense": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 626.38037109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
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
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国防、太空",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "与安全",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 266.96044921875,
                "top": 830.8330078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 (17%)",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "global_services": {
            "blocks": [
              {
                "x": 466.2041015625,
                "top": 935.0126953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
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
              },
              {
                "x": 266.96044921875,
                "top": 1031.37890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 266.96044921875,
                "top": 1089.97998046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 16%",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1214.99560546875,
                "top": 494.853515625,
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
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (15%)",
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
                "top": 1108.21142578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "未分配项",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "top": 388.0693359375,
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
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
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
                "top": 1065.2373046875,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1962.48486328125,
                "top": 481.8310546875,
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
                    "weight": 400
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1816.63330078125,
                "top": 794.3701171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (6%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
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
          "ga": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 483.13330078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "管理费用及其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 777.44091796875,
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
                    "text": "占收入 6%",
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
          "seg_hub": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(1)\"><g transform=\"scale(0.768)\">\n    <g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"936\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"975\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">交付</text><text x=\"88\" y=\"1006\" text-anchor=\"start\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">92</text><text x=\"132\" y=\"1006\" text-anchor=\"start\" font-size=\"24\" fill=\"white\">架商用飞机</text><text x=\"227.5\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">同比 (32%)</text></g><g><rect x=\"408\" y=\"936\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"975\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">订单储备</text><text x=\"500.0\" y=\"1006\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"backlog\">$516B</text><text x=\"500.0\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">同比 +10%</text></g></g></g>"
    }
  }
});})();
