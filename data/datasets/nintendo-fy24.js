window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "nintendo-fy24",
  "name": "Nintendo · FY24",
  "company": "Nintendo",
  "meta": {
    "company": "Nintendo",
    "title": "Nintendo FY24 Income Statement",
    "period": "FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/nintendo-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 125.016,
    "titleWeight": 800,
    "periodX": 1328.291,
    "periodY": 1313.966,
    "periodNoteY": 1355.638
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
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
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
      "source": "#888888",
      "hub": "#888888",
      "profit": "#99cc99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 37.765,
      "value": 37.765,
      "note": 27.347,
      "lineGap": 10.418
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"243.520\" y=\"276.076\" text-anchor=\"middle\" font-size=\"37.765\" font-weight=\"700\" fill=\"#175578\">in yen</text><text x=\"230.498\" y=\"554.757\" text-anchor=\"middle\" font-size=\"32.556\" font-weight=\"700\" fill=\"#000\">Software</text><text x=\"188.826\" y=\"596.429\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\" data-operating-metric=\"digital_share\">50%</text><text x=\"265.658\" y=\"596.429\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\">Digital</text><text x=\"230.498\" y=\"635.496\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\">+2pp Y/Y</text><text x=\"230.498\" y=\"918.083\" text-anchor=\"middle\" font-size=\"32.556\" font-weight=\"700\" fill=\"#000\">Hardware</text><text x=\"192.732\" y=\"958.453\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\" data-operating-metric=\"hardware_units\">15.7M</text><text x=\"274.774\" y=\"958.453\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\">units</text><text x=\"230.498\" y=\"996.218\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\">(13%) Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/nintendo/company-logo.png",
      "x": 839.949,
      "y": 251.333,
      "width": 587.313,
      "height": 147.154
    },
    {
      "key": "switch-wordmark",
      "href": "data/assets/raster-annotations/nintendo/switch-wordmark-9m-fy26.png",
      "x": 640.705,
      "y": 416.719,
      "width": 223.986,
      "height": 69.019
    },
    {
      "key": "switch-console-icon",
      "href": "data/assets/raster-annotations/nintendo/switch-console-icon.png",
      "x": 156.27,
      "y": 681.075,
      "width": 143.247,
      "height": 143.247
    },
    {
      "key": "mobile-store-icons",
      "href": "data/assets/raster-annotations/nintendo/mobile-store-icons-fy25.png",
      "x": 407.603,
      "y": 1078.26,
      "width": 85.948,
      "height": 181.012
    },
    {
      "key": "mario",
      "href": "data/assets/raster-annotations/nintendo/mario-fy25.png",
      "x": 1685.106,
      "y": 1015.752,
      "width": 184.919,
      "height": 390.674
    }
  ],
  "operatingMetrics": [
    {
      "id": "hardware_units",
      "label": "Hardware units",
      "value": "15700000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "15.7M",
      "basis": "unspecified",
      "notes": [
        "(13%) Y/Y"
      ],
      "quote": "Hardware units\n15.7M units\n(13%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          143,
          888,
          177,
          111
        ]
      }
    },
    {
      "id": "digital_share",
      "label": "Digital share",
      "value": "50",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "50%",
      "basis": "unspecified",
      "notes": [
        "+2pp Y/Y"
      ],
      "quote": "Digital share\n50%\n+2pp Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          154,
          526,
          156,
          116
        ]
      }
    }
  ],
  "layout": {
    "nodes": {
      "software": {
        "x": 364.629,
        "y": 496.156,
        "width": 71.624,
        "height": 182.314
      },
      "hardware": {
        "x": 364.629,
        "y": 865.994,
        "width": 71.624,
        "height": 140.643
      },
      "dedicated_video_game_platform": {
        "x": 713.631,
        "y": 596.429,
        "width": 70.321,
        "height": 322.957
      },
      "mobile_ip": {
        "x": 711.026,
        "y": 1160.301,
        "width": 70.321,
        "height": 18.231
      },
      "other_revenue": {
        "x": 712.329,
        "y": 1362.149,
        "width": 71.624,
        "height": 2.604
      },
      "revenue": {
        "x": 1109.514,
        "y": 716.235,
        "width": 71.624,
        "height": 346.397
      },
      "gross_profit": {
        "x": 1487.165,
        "y": 591.22,
        "width": 72.926,
        "height": 197.941
      },
      "cost_of_sales": {
        "x": 1485.863,
        "y": 1020.961,
        "width": 71.624,
        "height": 148.456
      },
      "operating_profit": {
        "x": 1857.003,
        "y": 498.76,
        "width": 71.624,
        "height": 109.389
      },
      "operating_expenses": {
        "x": 1864.816,
        "y": 780.045,
        "width": 71.624,
        "height": 87.25
      },
      "other_income": {
        "x": 2120.057,
        "y": 337.282,
        "width": 71.624,
        "height": 32.556
      },
      "net_profit": {
        "x": 2233.352,
        "y": 365.931,
        "width": 71.624,
        "height": 101.575
      },
      "tax": {
        "x": 2233.352,
        "y": 647.216,
        "width": 71.624,
        "height": 39.067
      },
      "other_sga": {
        "x": 2233.352,
        "y": 825.624,
        "width": 71.624,
        "height": 37.765
      },
      "rnd": {
        "x": 2233.352,
        "y": 1026.17,
        "width": 71.624,
        "height": 28.649
      },
      "advertising": {
        "x": 2233.352,
        "y": 1226.716,
        "width": 71.624,
        "height": 20.836
      }
    },
    "labels": {
      "software": {
        "blocks": [
          {
            "x": 401.092,
            "top": 395.883,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+5% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "hardware": {
        "blocks": [
          {
            "x": 401.092,
            "top": 764.418,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "dedicated_video_game_platform": {
        "blocks": [
          {
            "x": 748.792,
            "top": 497.458,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+1% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "mobile_ip": {
        "blocks": [
          {
            "x": 746.187,
            "top": 1061.331,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+82% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 591.22,
            "top": 1128.8339999999998,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Mobile &",
                "size": 32.556,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "IP related",
                "size": 32.556,
                "weight": 400,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 746.187,
            "top": 1270.992,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+100% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 546.943,
            "top": 1343.4019999999998,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Playing cards",
                "size": 32.556,
                "weight": 700,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1143.372,
            "top": 562.57,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.765,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(6%) Y/Y",
                "size": 27.347,
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
            "x": 1523.628,
            "top": 397.185,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.765,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "57% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
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
            "x": 1893.466,
            "top": 307.33,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.765,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "32% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2424.782,
            "top": 364.629,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.765,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "29% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
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
            "x": 1521.023,
            "top": 1185.044,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 35.161,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 35.161,
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
            "x": 1899.977,
            "top": 884.225,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating",
                "size": 35.161,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "expenses",
                "size": 35.161,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 35.161,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2155.217,
            "top": 248.729,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#00944f"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2424.782,
            "top": 626.38,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Tax",
                "size": 31.254,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.254,
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
            "x": 2424.782,
            "top": 807.393,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Other SG&A",
                "size": 31.254,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "11% of revenue",
                "size": 27.347,
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
            "x": 2424.782,
            "top": 1000.125,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "8% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 2424.782,
            "top": 1191.555,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Advertising",
                "size": 31.254,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "6% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "software",
      "label": "Software",
      "value": 884,
      "type": "source",
      "valueText": "¥884B",
      "notes": [
        "+5% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "hardware",
      "label": "Hardware",
      "value": 684,
      "type": "source",
      "valueText": "¥684B",
      "notes": [
        "(3%) Y/Y"
      ],
      "col": 0,
      "order": 1
    },
    {
      "id": "dedicated_video_game_platform",
      "label": "Nintendo Switch",
      "value": 1568,
      "type": "hub",
      "valueText": "¥1,568B",
      "notes": [
        "+1% Y/Y"
      ],
      "col": 0,
      "order": 2
    },
    {
      "id": "mobile_ip",
      "label": "Mobile & IP related",
      "value": 93,
      "type": "source",
      "valueText": "¥93B",
      "notes": [
        "+82% Y/Y"
      ],
      "col": 0,
      "order": 3
    },
    {
      "id": "other_revenue",
      "label": "Playing cards",
      "value": 11,
      "type": "source",
      "valueText": "¥11B",
      "notes": [
        "+100% Y/Y"
      ],
      "col": 0,
      "order": 4
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1672,
      "type": "hub",
      "valueText": "¥1,672B",
      "notes": [
        "(6%) Y/Y"
      ],
      "col": 0,
      "order": 5
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 954,
      "type": "profit",
      "valueText": "¥954B",
      "notes": [
        "57% margin",
        "+2pp Y/Y"
      ],
      "col": 0,
      "order": 6
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 718,
      "type": "cost",
      "valueText": "(¥718B)",
      "notes": [],
      "col": 0,
      "order": 7
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 529,
      "type": "profit",
      "valueText": "¥529B",
      "notes": [
        "32% margin",
        "+0pp Y/Y"
      ],
      "col": 0,
      "order": 8
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 425,
      "type": "cost",
      "valueText": "(¥425B)",
      "notes": [],
      "col": 0,
      "order": 9
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 152,
      "type": "profit",
      "valueText": "¥152B",
      "notes": [],
      "col": 0,
      "order": 10
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 491,
      "type": "profit",
      "valueText": "¥491B",
      "notes": [
        "29% margin",
        "+2pp Y/Y"
      ],
      "col": 0,
      "order": 11
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 190,
      "type": "cost",
      "valueText": "(¥190B)",
      "notes": [],
      "col": 0,
      "order": 12
    },
    {
      "id": "other_sga",
      "label": "Other SG&A",
      "value": 183,
      "type": "cost",
      "valueText": "(¥183B)",
      "notes": [
        "11% of revenue"
      ],
      "col": 0,
      "order": 13
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 138,
      "type": "cost",
      "valueText": "(¥138B)",
      "notes": [
        "8% of revenue"
      ],
      "col": 0,
      "order": 14
    },
    {
      "id": "advertising",
      "label": "Advertising",
      "value": 104,
      "type": "cost",
      "valueText": "(¥104B)",
      "notes": [
        "6% of revenue"
      ],
      "col": 0,
      "order": 15
    }
  ],
  "links": [
    {
      "source": "software",
      "target": "dedicated_video_game_platform",
      "value": 884,
      "sourceWidth": 182.314,
      "targetWidth": 182.314,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "hardware",
      "target": "dedicated_video_game_platform",
      "value": 684,
      "sourceWidth": 140.643,
      "targetWidth": 140.643,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "dedicated_video_game_platform",
      "target": "revenue",
      "value": 1568,
      "sourceWidth": 322.957,
      "targetWidth": 322.957,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "mobile_ip",
      "target": "revenue",
      "value": 93,
      "sourceWidth": 18.231,
      "targetWidth": 20.836,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 11,
      "sourceWidth": 2.604,
      "targetWidth": 2.604,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 954,
      "sourceWidth": 197.941,
      "targetWidth": 197.941,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 718,
      "sourceWidth": 148.456,
      "targetWidth": 148.456,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 529,
      "sourceWidth": 109.389,
      "targetWidth": 109.389,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 425,
      "sourceWidth": 88.553,
      "targetWidth": 87.25,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 339,
      "sourceWidth": 70.321,
      "targetWidth": 70.321,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 190,
      "sourceWidth": 39.067,
      "targetWidth": 39.067,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 152,
      "sourceWidth": 32.556,
      "targetWidth": 31.254,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_sga",
      "value": 183,
      "sourceWidth": 37.765,
      "targetWidth": 37.765,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 138,
      "sourceWidth": 28.649,
      "targetWidth": 28.649,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 104,
      "sourceWidth": 20.836,
      "targetWidth": 20.836,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "任天堂 · 2024 财年",
      "meta": {
        "title": "任天堂 2024 财年利润表",
        "titleSize": 104.18,
        "period": "2024 财年",
        "periodNote": "截至 2024 年 3 月"
      },
      "nodes": {
        "software": {
          "label": "软件",
          "notes": [
            "同比 +5%"
          ]
        },
        "hardware": {
          "label": "硬件",
          "notes": [
            "同比 (3%)"
          ]
        },
        "dedicated_video_game_platform": {
          "label": "任天堂 Switch",
          "notes": [
            "同比 +1%"
          ]
        },
        "mobile_ip": {
          "label": "移动与 IP 相关",
          "notes": [
            "同比 +82%"
          ]
        },
        "other_revenue": {
          "label": "扑克牌",
          "notes": [
            "同比 +100%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (6%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 57%",
            "同比 +2pp"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 32%",
            "同比 +0pp"
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
            "利润率 29%",
            "同比 +2pp"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_sga": {
          "label": "其他 SG&A",
          "notes": [
            "占收入 11%"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 8%"
          ]
        },
        "advertising": {
          "label": "广告",
          "notes": [
            "占收入 6%"
          ]
        }
      },
      "layout": {
        "labels": {
          "software": {
            "blocks": [
              {
                "x": 401.092,
                "top": 395.883,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "hardware": {
            "blocks": [
              {
                "x": 401.092,
                "top": 764.418,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "dedicated_video_game_platform": {
            "blocks": [
              {
                "x": 748.792,
                "top": 497.458,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "mobile_ip": {
            "blocks": [
              {
                "x": 746.187,
                "top": 1061.331,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +82%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 591.22,
                "top": 1128.8339999999998,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "移动与",
                    "size": 32.556,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "IP 相关",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 746.187,
                "top": 1270.992,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +100%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 546.943,
                "top": 1343.4019999999998,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "扑克牌",
                    "size": 32.556,
                    "weight": 700,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1143.372,
                "top": 562.57,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 27.347,
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
                "x": 1523.628,
                "top": 397.185,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "利润率 57%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2pp",
                    "size": 27.347,
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
                "x": 1893.466,
                "top": 307.33,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "利润率 32%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0pp",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2424.782,
                "top": 364.629,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "利润率 29%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2pp",
                    "size": 27.347,
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
                "x": 1521.023,
                "top": 1185.044,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 35.161,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 35.161,
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
                "x": 1899.977,
                "top": 884.225,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "营业",
                    "size": 35.161,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "费用",
                    "size": 35.161,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 35.161,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2155.217,
                "top": 248.729,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#00944f"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2424.782,
                "top": 626.38,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
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
                "x": 2424.782,
                "top": 807.393,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "其他 SG&A",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.347,
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
                "x": 2424.782,
                "top": 1000.125,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 2424.782,
                "top": 1191.555,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "广告",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 6%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"243.520\" y=\"276.076\" text-anchor=\"middle\" font-size=\"37.765\" font-weight=\"700\" fill=\"#175578\">单位：日元</text><text x=\"230.498\" y=\"554.757\" text-anchor=\"middle\" font-size=\"32.556\" font-weight=\"700\" fill=\"#000\">软件</text><text x=\"188.826\" y=\"596.429\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\" data-operating-metric=\"digital_share\">50%</text><text x=\"265.658\" y=\"596.429\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\">数字版</text><text x=\"230.498\" y=\"635.496\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\">同比 +2pp</text><text x=\"230.498\" y=\"918.083\" text-anchor=\"middle\" font-size=\"32.556\" font-weight=\"700\" fill=\"#000\">硬件</text><text x=\"192.732\" y=\"958.453\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\" data-operating-metric=\"hardware_units\">15.7M</text><text x=\"274.774\" y=\"958.453\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\">台</text><text x=\"230.498\" y=\"996.218\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777\">同比 (13%)</text></g>"
    }
  }
});
