(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "boeing-q2-fy25",
  "name": "Boeing · Q2 FY25",
  "company": "Boeing",
  "meta": {
    "company": "Boeing",
    "title": "Boeing Q2 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/boeing-q2-fy25.png",
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
      "value": 10.9,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+81% Y/Y",
        "(5%) segment margin"
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
      "value": 6.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+10% Y/Y",
        "2% segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "global_services",
      "label": "Global Services",
      "value": 5.3,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+8% Y/Y",
        "20% segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "seg_hub",
      "label": "",
      "value": 22.8,
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
      "value": 22.7,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+35% Y/Y"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "unallocated",
      "label": "Unallocated",
      "value": -0.023,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": [],
      "color": "#e08585",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($23M)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.4,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "11% margin",
        "+16pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#96c896"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 20.3,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
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
      "value": 2.7,
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
      "label": "G&A",
      "value": 1.8,
      "type": "cost",
      "col": 6,
      "order": 1,
      "notes": [
        "8% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.9,
      "type": "cost",
      "col": 6,
      "order": 2,
      "notes": [
        "4% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -0.2,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [
        "(1%) margin",
        "+6pp Y/Y"
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
      "value": 10.9,
      "sourceWidth": 156.26953125,
      "targetWidth": 156.26953125,
      "y0": 464.90185546875,
      "y1": 614.66015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "defense",
      "target": "seg_hub",
      "value": 6.6,
      "sourceWidth": 93.76171875,
      "targetWidth": 93.76171875,
      "y0": 799.5791015625,
      "y1": 739.67578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "global_services",
      "target": "seg_hub",
      "value": 5.3,
      "sourceWidth": 75.5302734375,
      "targetWidth": 76.83251953125,
      "y0": 1073.05078125,
      "y1": 824.972900390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "seg_hub",
      "target": "revenue",
      "value": 22.7,
      "sourceWidth": 325.5615234375,
      "targetWidth": 325.5615234375,
      "y0": 699.30615234375,
      "y1": 799.5791015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "seg_hub",
      "target": "unallocated",
      "value": 0.023,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "y0": 862.738037109375,
      "y1": 1123.187255859375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.4,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "y0": 654.378662109375,
      "y1": 551.501220703125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#96c896"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 20.3,
      "sourceWidth": 290.40087890625,
      "targetWidth": 290.40087890625,
      "y0": 817.159423828125,
      "y1": 921.339111328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.4,
      "sourceWidth": 35.16064453125,
      "targetWidth": 34.76513671875,
      "y0": 551.501220703125,
      "y1": 645.065185546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 1.8,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "y0": 640.053955078125,
      "y1": 542.385498046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.9,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "y0": 658.9365234375,
      "y1": 824.32177734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.2,
      "width": 3,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y0": 735.76904296875,
      "y1": 663.94775390625,
      "curve": {
        "x0": 1884.35009765625,
        "x1": 1926.02197265625,
        "c1x": 1905.18603515625,
        "c1y": 735.76904296875,
        "c2x": 1903.8837890625,
        "c2y": 663.94775390625
      },
      "linkTint": {
        "left": "#e08585",
        "right": "#e08585"
      }
    }
  ],
  "layout": {
    "nodes": {
      "commercial_airplanes": {
        "x": 431.04345703125,
        "y": 386.76708984375,
        "width": 72.92578125,
        "height": 156.26953125
      },
      "defense": {
        "x": 431.04345703125,
        "y": 752.6982421875,
        "width": 72.92578125,
        "height": 93.76171875
      },
      "global_services": {
        "x": 431.04345703125,
        "y": 1035.28564453125,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "seg_hub": {
        "x": 804.7880859375,
        "y": 536.525390625,
        "width": 72.92578125,
        "height": 326.86376953125
      },
      "revenue": {
        "x": 1178.53271484375,
        "y": 636.79833984375,
        "width": 72.92578125,
        "height": 325.5615234375
      },
      "unallocated": {
        "x": 1178.53271484375,
        "y": 1122.5361328125,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "gross_profit": {
        "x": 1552.27734375,
        "y": 533.9208984375,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "cost_of_sales": {
        "x": 1552.27734375,
        "y": 776.138671875,
        "width": 72.92578125,
        "height": 290.40087890625
      },
      "operating_expenses": {
        "x": 1926.02197265625,
        "y": 627.6826171875,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "ga": {
        "x": 2299.7666015625,
        "y": 530.01416015625,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "rnd": {
        "x": 2299.7666015625,
        "y": 817.810546875,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "operating_loss": {
        "x": 1812.7265625,
        "y": 734.26904296875,
        "width": 71.62353515625,
        "height": 3
      }
    },
    "labels": {
      "commercial_airplanes": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 290.40087890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+81% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 265.658203125,
            "top": 402.39404296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.0673828125,
                "weight": 700
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
            "x": 265.658203125,
            "top": 506.57373046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "(5%) segment margin",
                "size": 27.34716796875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "defense": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 656.33203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 265.658203125,
            "top": 724.048828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Defense, Space",
                "size": 39.0673828125,
                "weight": 700
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
            "x": 265.658203125,
            "top": 828.228515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "2% segment margin",
                "size": 27.34716796875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "global_services": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 938.91943359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 269.56494140625,
            "top": 1028.7744140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Global Services",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 269.56494140625,
            "top": 1080.8642578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "20% segment margin",
                "size": 27.34716796875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1214.99560546875,
            "top": 488.34228515625,
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
                "text": "+35% Y/Y",
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
            "x": 1588.740234375,
            "top": 347.69970703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "11% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+16pp Y/Y",
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
            "top": 1084.77099609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 33.8583984375,
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
      "unallocated": {
        "blocks": [
          {
            "x": 1214.99560546875,
            "top": 1144.67431640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Unallocated",
                "size": 33.8583984375,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1962.48486328125,
            "top": 464.90185546875,
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
      "ga": {
        "blocks": [
          {
            "x": 2496.40576171875,
            "top": 479.2265625,
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
                "text": "(0pp) Y/Y",
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
            "x": 2496.40576171875,
            "top": 765.720703125,
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
                "text": "(2pp) Y/Y",
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
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1847.88720703125,
            "top": 751.39599609375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1847.88720703125,
            "top": 803.48583984375,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1847.88720703125,
            "top": 858.18017578125,
            "anchor": "middle",
            "lines": [
              {
                "text": "(1%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1847.88720703125,
            "top": 898.5498046875,
            "anchor": "middle",
            "lines": [
              {
                "text": "+6pp Y/Y",
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
      "id": "deliveries",
      "label": "Deliveries",
      "literal": "150",
      "value": "150",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "quote": "Deliveries\n150 commercial airplanes\n+63% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+63% Y/Y"
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
      "literal": "$619B",
      "value": "619",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "quote": "Backlog\n$619B\n+19% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+19% Y/Y"
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
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(0.768)\">\n    <g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"904\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Deliveries</text><text x=\"88\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">150</text><text x=\"132\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\">commercial airplanes</text><text x=\"227.5\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">+63% Y/Y</text></g><g><rect x=\"408\" y=\"904\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Backlog</text><text x=\"500.0\" y=\"974\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"backlog\">$619B</text><text x=\"500.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">+19% Y/Y</text></g></g>",
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
      "name": "波音 · 2025 财年第二季度",
      "meta": {
        "title": "波音 2025 财年第二季度利润表",
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
            "同比 +81%",
            "分部利润率 (5%)"
          ]
        },
        "defense": {
          "label": [
            "国防、太空",
            "与安全"
          ],
          "notes": [
            "同比 +10%",
            "分部利润率 2%"
          ]
        },
        "global_services": {
          "label": "全球服务",
          "notes": [
            "同比 +8%",
            "分部利润率 20%"
          ]
        },
        "seg_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +35%"
          ]
        },
        "unallocated": {
          "label": "未分配项",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 11%",
            "同比 +16 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 8%",
            "同比 (0 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 4%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (1%)",
            "同比 +6 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "commercial_airplanes": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 290.40087890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +81%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 265.658203125,
                "top": 402.39404296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "商用",
                    "size": 39.0673828125,
                    "weight": 700
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
                "x": 265.658203125,
                "top": 506.57373046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 (5%)",
                    "size": 27.34716796875,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "defense": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 656.33203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 265.658203125,
                "top": 724.048828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国防、太空",
                    "size": 39.0673828125,
                    "weight": 700
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
                "x": 265.658203125,
                "top": 828.228515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 2%",
                    "size": 27.34716796875,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "global_services": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 938.91943359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 269.56494140625,
                "top": 1028.7744140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "全球服务",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 269.56494140625,
                "top": 1080.8642578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 20%",
                    "size": 27.34716796875,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1214.99560546875,
                "top": 488.34228515625,
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
                    "text": "同比 +35%",
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
                "x": 1588.740234375,
                "top": 347.69970703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "利润率 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +16 个百分点",
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
                "top": 1084.77099609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 33.8583984375,
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
          "unallocated": {
            "blocks": [
              {
                "x": 1214.99560546875,
                "top": 1144.67431640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "未分配项",
                    "size": 33.8583984375,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1962.48486328125,
                "top": 464.90185546875,
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
          "ga": {
            "blocks": [
              {
                "x": 2496.40576171875,
                "top": 479.2265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 700
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
                    "text": "同比 (0 个百分点)",
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
                "x": 2496.40576171875,
                "top": 765.720703125,
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
                    "text": "同比 (2 个百分点)",
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
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1847.88720703125,
                "top": 751.39599609375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1847.88720703125,
                "top": 803.48583984375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1847.88720703125,
                "top": 858.18017578125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 (1%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1847.88720703125,
                "top": 898.5498046875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +6 个百分点",
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(0.768)\">\n    <g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"904\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">交付</text><text x=\"88\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">150</text><text x=\"132\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\">架商用飞机</text><text x=\"227.5\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">同比 +63%</text></g><g><rect x=\"408\" y=\"904\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">订单储备</text><text x=\"500.0\" y=\"974\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"backlog\">$619B</text><text x=\"500.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">同比 +19%</text></g></g>"
    }
  }
});})();
