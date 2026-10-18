window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "nintendo-q3-fy24",
  "name": "Nintendo · Q3 FY24",
  "company": "Nintendo",
  "meta": {
    "company": "Nintendo",
    "title": "Nintendo Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/nintendo-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199,
    "titleSize": 126,
    "titleWeight": 800,
    "periodX": 1338,
    "periodY": 1303,
    "periodNoteY": 1348
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
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
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
      "name": 39,
      "value": 39,
      "note": 28,
      "lineGap": 10
    }
  },
  "layout": {
    "scale": 0.58,
    "nodes": {
      "switch": {
        "x": 366,
        "y": 466,
        "width": 73,
        "height": 342
      },
      "other_consoles": {
        "x": 366,
        "y": 962,
        "width": 73,
        "height": 7
      },
      "mobile_ip": {
        "x": 366,
        "y": 1109,
        "width": 73,
        "height": 12
      },
      "playing_cards": {
        "x": 366,
        "y": 1256,
        "width": 73,
        "height": 2
      },
      "revenue": {
        "x": 833,
        "y": 621,
        "width": 73,
        "height": 362
      },
      "gross_profit": {
        "x": 1295,
        "y": 517,
        "width": 73,
        "height": 178
      },
      "cost_of_sales": {
        "x": 1297,
        "y": 905,
        "width": 73,
        "height": 184
      },
      "operating_profit": {
        "x": 1767,
        "y": 417,
        "width": 73,
        "height": 107
      },
      "operating_expenses": {
        "x": 1765,
        "y": 730,
        "width": 73,
        "height": 71
      },
      "net_profit": {
        "x": 2234,
        "y": 322,
        "width": 73,
        "height": 79
      },
      "tax": {
        "x": 2234,
        "y": 642,
        "width": 73,
        "height": 28
      },
      "other_sga": {
        "x": 2234,
        "y": 852,
        "width": 73,
        "height": 29
      },
      "rnd": {
        "x": 2234,
        "y": 1041,
        "width": 73,
        "height": 20
      },
      "advertising": {
        "x": 2234,
        "y": 1212,
        "width": 73,
        "height": 24
      },
      "other_income": {
        "x": 2095,
        "y": 458,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "switch": {
        "blocks": [
          {
            "x": 402.39404296875,
            "top": 367.2333984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
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
      "other_consoles": {
        "blocks": [
          {
            "x": 402.39404296875,
            "top": 865.99365234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
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
            "x": 328.166015625,
            "top": 940.2216796875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other consoles",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#000000"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "mobile_ip": {
        "blocks": [
          {
            "x": 402.39404296875,
            "top": 1009.24072265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+31% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 322.95703125,
            "top": 1066.53955078125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Mobile &",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "IP related",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#000000"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "playing_cards": {
        "blocks": [
          {
            "x": 402.39404296875,
            "top": 1158.9990234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+86% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 328.166015625,
            "top": 1235.83154296875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Playing cards",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#000000"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 869.900390625,
            "top": 468.80859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(6%) Y/Y",
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
            "x": 1333.5,
            "top": 325.5615234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "49% margin",
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1333.5,
            "top": 1100.39794921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1802.30859375,
            "top": 226.5908203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "30% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1802.30859375,
            "top": 813.90380859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 304.7255859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "22% margin",
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
      "tax": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 623.77587890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_sga": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 837.34423828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other SG&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 1027.47216796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 1218.90234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Advertising",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2131,
            "top": 476,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "switch",
      "label": "Nintendo Switch",
      "value": 588,
      "type": "source",
      "valueText": "¥588B",
      "notes": [
        "(8%) Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "other_consoles",
      "label": "Other consoles",
      "value": 11,
      "type": "source",
      "valueText": "¥11B",
      "notes": [
        "+75% Y/Y"
      ],
      "col": 0,
      "order": 1
    },
    {
      "id": "mobile_ip",
      "label": "Mobile & IP related",
      "value": 20,
      "type": "source",
      "valueText": "¥20B",
      "notes": [
        "+31% Y/Y"
      ],
      "col": 0,
      "order": 2
    },
    {
      "id": "playing_cards",
      "label": "Playing cards",
      "value": 4,
      "type": "source",
      "valueText": "¥4B",
      "notes": [
        "+86% Y/Y"
      ],
      "col": 0,
      "order": 3
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 623,
      "type": "hub",
      "valueText": "¥623B",
      "notes": [
        "(6%) Y/Y"
      ],
      "col": 0,
      "order": 4
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 306,
      "type": "profit",
      "valueText": "¥306B",
      "notes": [
        "49% margin",
        "+3pp Y/Y"
      ],
      "col": 0,
      "order": 5
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 317,
      "type": "cost",
      "valueText": "(¥317B)",
      "notes": [],
      "col": 0,
      "order": 6
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 185,
      "type": "profit",
      "valueText": "¥185B",
      "notes": [
        "30% margin",
        "+1pp Y/Y"
      ],
      "col": 0,
      "order": 7
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 122,
      "type": "cost",
      "valueText": "(¥122B)",
      "notes": [],
      "col": 0,
      "order": 8
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 137,
      "type": "profit",
      "valueText": "¥137B",
      "notes": [
        "22% margin",
        "+4pp Y/Y"
      ],
      "col": 0,
      "order": 10
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 50,
      "type": "cost",
      "valueText": "(¥50B)",
      "notes": [],
      "col": 0,
      "order": 11
    },
    {
      "id": "other_sga",
      "label": "Other SG&A",
      "value": 49,
      "type": "cost",
      "valueText": "(¥49B)",
      "notes": [],
      "col": 0,
      "order": 12
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 33,
      "type": "cost",
      "valueText": "(¥33B)",
      "notes": [],
      "col": 0,
      "order": 13
    },
    {
      "id": "advertising",
      "label": "Advertising",
      "value": 39,
      "type": "cost",
      "valueText": "(¥39B)",
      "notes": [],
      "col": 0,
      "order": 14
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 3,
      "type": "profit",
      "valueText": "¥3B",
      "notes": [],
      "col": 0,
      "order": 9.5,
      "color": "#45aa45"
    }
  ],
  "links": [
    {
      "source": "switch",
      "target": "revenue",
      "value": 588,
      "sourceWidth": 342,
      "targetWidth": 342,
      "y0": 637,
      "y1": 792,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_consoles",
      "target": "revenue",
      "value": 11,
      "sourceWidth": 7,
      "targetWidth": 7,
      "y0": 965.5,
      "y1": 966.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "mobile_ip",
      "target": "revenue",
      "value": 20,
      "sourceWidth": 12,
      "targetWidth": 11,
      "y0": 1115,
      "y1": 975.5,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "playing_cards",
      "target": "revenue",
      "value": 4,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 1257,
      "y1": 982,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 306,
      "sourceWidth": 178,
      "targetWidth": 178,
      "y0": 710,
      "y1": 606,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 317,
      "sourceWidth": 184,
      "targetWidth": 184,
      "y0": 891,
      "y1": 997,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 185,
      "sourceWidth": 107,
      "targetWidth": 107,
      "y0": 570.5,
      "y1": 470.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 122,
      "sourceWidth": 71,
      "targetWidth": 71,
      "y0": 659.5,
      "y1": 765.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 137,
      "sourceWidth": 79,
      "targetWidth": 77,
      "y0": 456.5,
      "y1": 360.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 50,
      "sourceWidth": 28,
      "targetWidth": 28,
      "y0": 510,
      "y1": 656,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_sga",
      "value": 49,
      "sourceWidth": 29,
      "targetWidth": 29,
      "y0": 744.5,
      "y1": 866.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 33,
      "sourceWidth": 20,
      "targetWidth": 20,
      "y0": 769,
      "y1": 1051,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 39,
      "sourceWidth": 22,
      "targetWidth": 24,
      "y0": 790,
      "y1": 1224,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 3,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 459,
      "y1": 400,
      "sourceOrder": 0,
      "targetOrder": 1
    }
  ],
  "operatingMetrics": [
    {
      "id": "sell_in",
      "label": "Sell-In",
      "value": "7000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "7M",
      "basis": "unspecified",
      "notes": [
        "(16%) Y/Y"
      ],
      "quote": "Sell-In\n7M units\n(16%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          105,
          690,
          202,
          140
        ]
      }
    },
    {
      "id": "digital_sales",
      "label": "Digital sales",
      "value": "129",
      "unit": "B",
      "currency": "JPY",
      "comparison": "eq",
      "literal": "¥129B",
      "basis": "unspecified",
      "notes": [
        "+5% Y/Y"
      ],
      "quote": "Digital sales\n¥129B\n+5% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          727,
          1050,
          272,
          147
        ]
      }
    }
  ],
  "annotationsSvg": "<text x=\"184.9189453125\" y=\"276.076171875\" font-size=\"39.0673828125\" fill=\"#175578\" font-weight=\"700\" >in yen</text><rect x=\"104.1796875\" y=\"690.1904296875\" width=\"201.84814453125\" height=\"140.642578125\" rx=\"27.34716796875\" fill=\"#e60012\"/><text x=\"164.0830078125\" y=\"733.16455078125\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"700\" >Sell-In</text><text x=\"148.4560546875\" y=\"773.5341796875\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"700\" data-operating-metric=\"sell_in\">7M</text><text x=\"192.732421875\" y=\"773.5341796875\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"400\" > units</text><text x=\"144.54931640625\" y=\"811.29931640625\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"400\" >(16%) Y/Y</text><path d=\"M727.95556640625 1172.021484375 V1076.95751953125 Q727.95556640625 1052.21484375 752.6982421875 1052.21484375 H839.94873046875 L869.900390625 1019.65869140625 L898.5498046875 1052.21484375 H972.77783203125 Q998.82275390625 1052.21484375 998.82275390625 1076.95751953125 V1173.32373046875 Q998.82275390625 1198.06640625 974.080078125 1198.06640625 H752.6982421875 Q727.95556640625 1198.06640625 727.95556640625 1172.021484375Z\" fill=\"none\" stroke=\"#888888\" stroke-width=\"2\"/><text x=\"768.3251953125\" y=\"1099.095703125\" font-size=\"31.25390625\" fill=\"#000000\" font-weight=\"700\" >Digital sales</text><text x=\"813.90380859375\" y=\"1142.06982421875\" font-size=\"29.95166015625\" fill=\"#000000\" font-weight=\"400\" data-operating-metric=\"digital_sales\">¥129B</text><text x=\"804.7880859375\" y=\"1179.8349609375\" font-size=\"27.34716796875\" fill=\"#777777\" font-weight=\"400\" >+5% Y/Y</text>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/nintendo/company-logo.png",
      "x": 566.47705078125,
      "y": 276.076171875,
      "width": 595.12646484375,
      "height": 153.6650390625
    },
    {
      "key": "switch-console-icon",
      "href": "data/assets/raster-annotations/nintendo/switch-console-icon.png",
      "x": 135.43359375,
      "y": 474.017578125,
      "width": 132.8291015625,
      "height": 134.13134765625
    },
    {
      "key": "switch-wordmark",
      "href": "data/assets/raster-annotations/nintendo/switch-wordmark.png",
      "x": 104.1796875,
      "y": 615.96240234375,
      "width": 201.84814453125,
      "height": 62.5078125
    },
    {
      "key": "mobile-store-icons",
      "href": "data/assets/raster-annotations/nintendo/mobile-store-icons-fy25.png",
      "x": 58.60107421875,
      "y": 1022.26318359375,
      "width": 88.552734375,
      "height": 187.5234375
    },
    {
      "key": "mario",
      "href": "data/assets/raster-annotations/nintendo/mario-fy25.png",
      "x": 1681.19970703125,
      "y": 1009.24072265625,
      "width": 192.732421875,
      "height": 401.091796875
    }
  ],
  "i18n": {
    "zh": {
      "name": "任天堂 · 2024 财年第三季度",
      "meta": {
        "title": "任天堂 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2023 年 12 月"
      },
      "nodes": {
        "switch": {
          "label": "任天堂 Switch",
          "notes": [
            "同比 (8%)"
          ]
        },
        "other_consoles": {
          "label": "其他游戏机",
          "notes": [
            "同比 +75%"
          ]
        },
        "mobile_ip": {
          "label": "移动与 IP 相关",
          "notes": [
            "同比 +31%"
          ]
        },
        "playing_cards": {
          "label": "扑克牌",
          "notes": [
            "同比 +86%"
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
            "利润率 49%",
            "同比 +3pp"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 30%",
            "同比 +1pp"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 22%",
            "同比 +4pp"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_sga": {
          "label": "其他 SG&A",
          "notes": []
        },
        "rnd": {
          "label": "研发（R&D）",
          "notes": []
        },
        "advertising": {
          "label": "广告",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "switch": {
            "blocks": [
              {
                "x": 402.39404296875,
                "top": 367.2333984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
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
          "other_consoles": {
            "blocks": [
              {
                "x": 402.39404296875,
                "top": 865.99365234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
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
                "x": 328.166015625,
                "top": 940.2216796875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他游戏机",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#000000"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "mobile_ip": {
            "blocks": [
              {
                "x": 402.39404296875,
                "top": 1009.24072265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +31%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 322.95703125,
                "top": 1066.53955078125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "移动与",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "IP 相关",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#000000"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "playing_cards": {
            "blocks": [
              {
                "x": 402.39404296875,
                "top": 1158.9990234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +86%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 1235.83154296875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "扑克牌",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#000000"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 869.900390625,
                "top": 468.80859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (6%)",
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
                "x": 1333.5,
                "top": 325.5615234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 49%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3pp",
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
                "x": 1333.5,
                "top": 1100.39794921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1802.30859375,
                "top": 226.5908203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 30%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1pp",
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
                "x": 1802.30859375,
                "top": 813.90380859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 304.7255859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4pp",
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
                "top": 623.77587890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_sga": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 837.34423828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他 SG&A",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 1027.47216796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发（R&D）",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 1218.90234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "广告",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2131,
                "top": 476,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"184.9189453125\" y=\"276.076171875\" font-size=\"39.0673828125\" fill=\"#175578\" font-weight=\"700\" >单位：日元</text><rect x=\"104.1796875\" y=\"690.1904296875\" width=\"201.84814453125\" height=\"140.642578125\" rx=\"27.34716796875\" fill=\"#e60012\"/><text x=\"164.0830078125\" y=\"733.16455078125\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"700\" >出货销量</text><text x=\"148.4560546875\" y=\"773.5341796875\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"700\" data-operating-metric=\"sell_in\">7M</text><text x=\"192.732421875\" y=\"773.5341796875\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"400\" > 台</text><text x=\"144.54931640625\" y=\"811.29931640625\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"400\" >同比 (16%)</text><path d=\"M727.95556640625 1172.021484375 V1076.95751953125 Q727.95556640625 1052.21484375 752.6982421875 1052.21484375 H839.94873046875 L869.900390625 1019.65869140625 L898.5498046875 1052.21484375 H972.77783203125 Q998.82275390625 1052.21484375 998.82275390625 1076.95751953125 V1173.32373046875 Q998.82275390625 1198.06640625 974.080078125 1198.06640625 H752.6982421875 Q727.95556640625 1198.06640625 727.95556640625 1172.021484375Z\" fill=\"none\" stroke=\"#888888\" stroke-width=\"2\"/><text x=\"768.3251953125\" y=\"1099.095703125\" font-size=\"31.25390625\" fill=\"#000000\" font-weight=\"700\" >数字销售额</text><text x=\"813.90380859375\" y=\"1142.06982421875\" font-size=\"29.95166015625\" fill=\"#000000\" font-weight=\"400\" data-operating-metric=\"digital_sales\">¥129B</text><text x=\"804.7880859375\" y=\"1179.8349609375\" font-size=\"27.34716796875\" fill=\"#777777\" font-weight=\"400\" >同比 +5%</text>"
    }
  }
});
