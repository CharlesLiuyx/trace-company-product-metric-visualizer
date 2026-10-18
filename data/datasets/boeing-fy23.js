(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "boeing-fy23",
  "name": "Boeing · FY23",
  "company": "Boeing",
  "meta": {
    "company": "Boeing",
    "title": "Boeing FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/boeing-fy23.png",
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
      "value": 33.9,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+30% Y/Y",
        "(5%) segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8",
      "valueText": "$33.9B"
    },
    {
      "id": "defense",
      "label": [
        "Defense, Space",
        "& Security"
      ],
      "value": 24.9,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+8% Y/Y",
        "(7%) segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8",
      "valueText": "$24.9B"
    },
    {
      "id": "global_services",
      "label": [
        "Global Services"
      ],
      "value": 19.1,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+9% Y/Y",
        "17% segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8",
      "valueText": "$19.1B"
    },
    {
      "id": "seg_hub",
      "label": "",
      "value": 77.9,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8",
      "valueText": "$77.9B"
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 77.8,
      "type": "hub",
      "col": 2,
      "order": 4,
      "notes": [
        "+17% Y/Y"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8",
      "valueText": "$77.8B"
    },
    {
      "id": "unallocated",
      "label": [
        "Unallocated"
      ],
      "value": -0.2,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.2B)"
    },
    {
      "id": "gross_profit",
      "label": [
        "Gross profit"
      ],
      "value": 7.7,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "10% margin",
        "+5pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#96c896",
      "valueText": "$7.7B"
    },
    {
      "id": "cost_of_sales",
      "label": [
        "Cost of",
        "sales"
      ],
      "value": 70,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($70.0B)"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 8.5,
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($8.5B)"
    },
    {
      "id": "operating_loss",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -0.8,
      "type": "cost",
      "col": 2,
      "order": 9,
      "notes": [
        "(1%) margin",
        "+4pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.8B)"
    },
    {
      "id": "ga",
      "label": [
        "G&A"
      ],
      "value": 5.1,
      "type": "cost",
      "col": 6,
      "order": 10,
      "notes": [
        "7% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($5.1B)"
    },
    {
      "id": "rnd",
      "label": [
        "R&D"
      ],
      "value": 3.4,
      "type": "cost",
      "col": 6,
      "order": 11,
      "notes": [
        "4% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($3.4B)"
    }
  ],
  "links": [
    {
      "source": "commercial_airplanes",
      "target": "seg_hub",
      "value": 33.9,
      "width": 138.0380859375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "defense",
      "target": "seg_hub",
      "value": 24.9,
      "width": 101.5751953125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "global_services",
      "target": "seg_hub",
      "value": 19.1,
      "width": 78.134765625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "targetWidth": 79.43701171875
    },
    {
      "source": "seg_hub",
      "target": "revenue",
      "value": 77.8,
      "width": 317.748046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 319.05029296875
    },
    {
      "source": "seg_hub",
      "target": "unallocated",
      "value": 0.2,
      "width": 1.30224609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 879.667236328125,
      "y1": 1132.302978515625,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.7,
      "width": 31.25390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#96c896"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 70,
      "width": 287.79638671875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 7.7,
      "width": 31.25390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.8,
      "width": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y0": 766.371826171875,
      "y1": 675.86572265625,
      "linkTint": "#e08585",
      "targetWidth": 2.6044921875
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 5.1,
      "width": 20.8359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.4,
      "width": 13.0224609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 14.32470703125,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "commercial_airplanes": {
        "x": 431.04345703125,
        "y": 399.78955078125,
        "width": 72.92578125,
        "height": 138.0380859375
      },
      "defense": {
        "x": 431.04345703125,
        "y": 742.2802734375,
        "width": 72.92578125,
        "height": 101.5751953125
      },
      "global_services": {
        "x": 431.04345703125,
        "y": 1035.28564453125,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "seg_hub": {
        "x": 802.18359375,
        "y": 561.26806640625,
        "width": 72.92578125,
        "height": 319.05029296875
      },
      "revenue": {
        "x": 1178.53271484375,
        "y": 642.00732421875,
        "width": 72.92578125,
        "height": 319.05029296875
      },
      "unallocated": {
        "x": 1183.74169921875,
        "y": 1131.65185546875,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "gross_profit": {
        "x": 1547.068359375,
        "y": 557.361328125,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "cost_of_sales": {
        "x": 1549.6728515625,
        "y": 746.18701171875,
        "width": 72.92578125,
        "height": 287.79638671875
      },
      "operating_expenses": {
        "x": 1920.81298828125,
        "y": 643.3095703125,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "operating_loss": {
        "x": 1777.56591796875,
        "y": 765.720703125,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "ga": {
        "x": 2299.7666015625,
        "y": 490.94677734375,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "rnd": {
        "x": 2299.7666015625,
        "y": 851.6689453125,
        "width": 72.92578125,
        "height": 14.32470703125
      }
    },
    "labels": {
      "commercial_airplanes": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 302.12109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+30% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 420.62548828125,
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
                "weight": 700
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 524.80517578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "(5%) segment margin",
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
            "top": 644.61181640625,
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
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 743.67578125,
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
                "weight": 700
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 843.85546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
      "global_services": {
        "blocks": [
          {
            "x": 467.50634765625,
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
                "text": "+9% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 1054.8193359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Global Services",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 266.96044921875,
            "top": 1106.9091796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "17% segment margin",
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
            "x": 1214.99560546875,
            "top": 490.94677734375,
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
                "text": "+17% Y/Y",
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
            "x": 1220.20458984375,
            "top": 1152.48779296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Unallocated",
                "size": 39.0673828125,
                "weight": 700
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
      "gross_profit": {
        "blocks": [
          {
            "x": 1583.53125,
            "top": 367.2333984375,
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
                "text": "10% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
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
            "x": 1583.53125,
            "top": 1049.6103515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "sales",
                "size": 39.0673828125,
                "weight": 700
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1957.27587890625,
            "top": 475.31982421875,
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
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1814.02880859375,
            "top": 783.9521484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(1%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
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
            "x": 2493.80126953125,
            "top": 467.50634765625,
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
                "text": "7% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 820.4150390625,
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
                "text": "+0pp Y/Y",
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
      "literal": "528",
      "value": "528",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "quote": "Deliveries\n528 commercial airplanes\n+10% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+10% Y/Y"
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
      "literal": "$520B",
      "value": "520",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "quote": "Backlog\n$520B\n+29% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+29% Y/Y"
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
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"translate(16,15) scale(0.74)\"><g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"936\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"975\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Deliveries</text><text x=\"86\" y=\"1006\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">528</text><text x=\"136\" y=\"1006\" font-size=\"24\" fill=\"white\">commercial airplanes</text><text x=\"227.5\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+10% Y/Y</text></g><g><rect x=\"408\" y=\"936\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"975\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Backlog</text><text x=\"500.0\" y=\"1006\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\" data-operating-metric=\"backlog\">$520B</text><text x=\"500.0\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+29% Y/Y</text></g><text x=\"132\" y=\"1104\" font-size=\"30\" font-weight=\"700\">Source: 10-K</text></g>",
  "rasterAnnotations": [
    {
      "key": "boeing-q4-737-tile",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-commercial-airplanes-737.png",
      "x": 108.08642578125,
      "y": 319.05029296875,
      "width": 274.77392578125,
      "height": 91.1572265625
    },
    {
      "key": "boeing-q4-starliner-tile",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-defense-starliner.png",
      "x": 204.45263671875,
      "y": 623.77587890625,
      "width": 122.4111328125,
      "height": 115.89990234375
    }
  ],
  "i18n": {
    "zh": {
      "name": "波音 · 2023 财年",
      "meta": {
        "title": "波音 2023 财年利润表",
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
            "同比 +30%",
            "分部利润率 (5%)"
          ]
        },
        "defense": {
          "label": [
            "国防、太空",
            "与安全"
          ],
          "notes": [
            "同比 +8%",
            "分部利润率 (7%)"
          ]
        },
        "global_services": {
          "label": [
            "全球服务"
          ],
          "notes": [
            "同比 +9%",
            "分部利润率 17%"
          ]
        },
        "seg_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 +17%"
          ]
        },
        "unallocated": {
          "label": [
            "未分配项"
          ],
          "notes": []
        },
        "gross_profit": {
          "label": [
            "毛利润"
          ],
          "notes": [
            "利润率 10%",
            "同比 +5 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": [
            "销售",
            "成本"
          ],
          "notes": []
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (1%)",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": [
            "管理费用 G&A"
          ],
          "notes": [
            "占收入 7%",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": [
            "研发 R&D"
          ],
          "notes": [
            "占收入 4%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "commercial_airplanes": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 302.12109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +30%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 420.62548828125,
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
                    "weight": 700
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 524.80517578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 (5%)",
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
                "top": 644.61181640625,
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
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 743.67578125,
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
                    "weight": 700
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 843.85546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
          "global_services": {
            "blocks": [
              {
                "x": 467.50634765625,
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
                    "text": "同比 +9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 1054.8193359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "全球服务",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 266.96044921875,
                "top": 1106.9091796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "分部利润率 17%",
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
                "x": 1214.99560546875,
                "top": 490.94677734375,
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
                    "text": "同比 +17%",
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
                "x": 1220.20458984375,
                "top": 1152.48779296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "未分配项",
                    "size": 39.0673828125,
                    "weight": 700
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
          "gross_profit": {
            "blocks": [
              {
                "x": 1583.53125,
                "top": 367.2333984375,
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
                    "text": "利润率 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
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
                "x": 1583.53125,
                "top": 1049.6103515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售",
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
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1957.27587890625,
                "top": 475.31982421875,
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
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1814.02880859375,
                "top": 783.9521484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (1%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
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
                "x": 2493.80126953125,
                "top": 467.50634765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "管理费用 G&A",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 7%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 820.4150390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发 R&D",
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
                    "text": "同比 +0 个百分点",
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"translate(16,15) scale(0.74)\"><g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"936\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"975\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">交付</text><text x=\"86\" y=\"1006\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">528</text><text x=\"131\" y=\"1006\" font-size=\"24\" fill=\"white\">架商用飞机</text><text x=\"227.5\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +10%</text></g><g><rect x=\"408\" y=\"936\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"975\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">订单储备</text><text x=\"500.0\" y=\"1006\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\" data-operating-metric=\"backlog\">$520B</text><text x=\"500.0\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +29%</text></g><text x=\"132\" y=\"1104\" font-size=\"30\" font-weight=\"700\">来源：10-K</text></g>"
    }
  }
});})();
