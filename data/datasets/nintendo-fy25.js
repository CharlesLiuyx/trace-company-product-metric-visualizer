window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "nintendo-fy25",
  "name": "Nintendo · FY25",
  "company": "Nintendo",
  "meta": {
    "company": "Nintendo",
    "title": "Nintendo FY25 Income Statement",
    "period": "FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/nintendo-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199,
    "titleSize": 126,
    "titleWeight": 800,
    "periodX": 1328,
    "periodY": 1311,
    "periodNoteY": 1355
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
      "name": 39,
      "value": 39,
      "note": 28,
      "lineGap": 10
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"242\" y=\"273\" text-anchor=\"middle\" font-size=\"39\" font-weight=\"700\" fill=\"#175578\">in yen</text><text x=\"228\" y=\"521\" text-anchor=\"middle\" font-size=\"34\" font-weight=\"700\" fill=\"#000\">Software</text><text x=\"195\" y=\"563\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\" data-operating-metric=\"software_units\">155M</text><text x=\"228\" y=\"600\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\">(22%) Y/Y</text><text x=\"195\" y=\"639\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\" data-operating-metric=\"digital_share\">54%</text><text x=\"268\" y=\"639\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\">Digital</text><text x=\"228\" y=\"678\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\">+3pp Y/Y</text><text x=\"228\" y=\"931\" text-anchor=\"middle\" font-size=\"34\" font-weight=\"700\" fill=\"#000\">Hardware</text><text x=\"195\" y=\"973\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\" data-operating-metric=\"hardware_units\">11M</text><text x=\"228\" y=\"1011\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\">(31%) Y/Y</text><text x=\"239\" y=\"563\" font-size=\"27\" fill=\"#777777\">units</text><text x=\"239\" y=\"973\" font-size=\"27\" fill=\"#777777\">units</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/nintendo/company-logo.png",
      "x": 839,
      "y": 280,
      "width": 591,
      "height": 155
    },
    {
      "key": "switch-wordmark",
      "href": "data/assets/raster-annotations/nintendo/switch-wordmark-9m-fy26.png",
      "x": 654,
      "y": 439,
      "width": 236,
      "height": 81
    },
    {
      "key": "switch-console-icon",
      "href": "data/assets/raster-annotations/nintendo/switch-console-icon.png",
      "x": 154,
      "y": 733,
      "width": 148,
      "height": 147
    },
    {
      "key": "mobile-store-icons",
      "href": "data/assets/raster-annotations/nintendo/mobile-store-icons-fy25.png",
      "x": 404,
      "y": 1073,
      "width": 96,
      "height": 191
    },
    {
      "key": "mario",
      "href": "data/assets/raster-annotations/nintendo/mario-fy25.png",
      "x": 1660,
      "y": 1005,
      "width": 210,
      "height": 420
    }
  ],
  "operatingMetrics": [
    {
      "id": "software_units",
      "label": "Software units",
      "value": "155000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "155M",
      "basis": "unspecified",
      "notes": [
        "(22%) Y/Y"
      ],
      "quote": "Software units\n155M units\n(22%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          152,
          537,
          156,
          36
        ]
      }
    },
    {
      "id": "hardware_units",
      "label": "Hardware units",
      "value": "11000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "11M",
      "basis": "unspecified",
      "notes": [
        "(31%) Y/Y"
      ],
      "quote": "Hardware units\n11M units\n(31%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          154,
          947,
          156,
          35
        ]
      }
    },
    {
      "id": "digital_share",
      "label": "Digital share",
      "value": "54",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "54%",
      "basis": "unspecified",
      "notes": [
        "+3pp Y/Y"
      ],
      "quote": "Digital share\n54%\n+3pp Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          154,
          616,
          156,
          35
        ]
      }
    }
  ],
  "layout": {
    "nodes": {
      "software": {
        "x": 357,
        "y": 487,
        "width": 73,
        "height": 170
      },
      "hardware": {
        "x": 357,
        "y": 892,
        "width": 73,
        "height": 132
      },
      "dedicated_video_game_platform": {
        "x": 731,
        "y": 629,
        "width": 73,
        "height": 300
      },
      "mobile_ip": {
        "x": 731,
        "y": 1164,
        "width": 73,
        "height": 19
      },
      "other_revenue": {
        "x": 731,
        "y": 1357,
        "width": 73,
        "height": 4
      },
      "revenue": {
        "x": 1105,
        "y": 726,
        "width": 73,
        "height": 324
      },
      "gross_profit": {
        "x": 1479,
        "y": 642,
        "width": 73,
        "height": 198
      },
      "cost_of_sales": {
        "x": 1479,
        "y": 1039,
        "width": 73,
        "height": 127
      },
      "operating_profit": {
        "x": 1848,
        "y": 551,
        "width": 73,
        "height": 80
      },
      "operating_expenses": {
        "x": 1848,
        "y": 802,
        "width": 73,
        "height": 119
      },
      "other_income": {
        "x": 2120,
        "y": 425,
        "width": 73,
        "height": 26
      },
      "net_profit": {
        "x": 2227,
        "y": 445,
        "width": 73,
        "height": 79
      },
      "tax": {
        "x": 2227,
        "y": 694,
        "width": 73,
        "height": 27
      },
      "other_sga": {
        "x": 2227,
        "y": 873,
        "width": 73,
        "height": 56
      },
      "rnd": {
        "x": 2227,
        "y": 1062,
        "width": 73,
        "height": 40
      },
      "advertising": {
        "x": 2227,
        "y": 1229,
        "width": 73,
        "height": 25
      }
    },
    "labels": {
      "software": {
        "blocks": [
          {
            "x": 393,
            "top": 389,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(46%) Y/Y",
                "size": 27,
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
            "x": 393,
            "top": 797,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(31%) Y/Y",
                "size": 27,
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
            "x": 767,
            "top": 527,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(31%) Y/Y",
                "size": 27,
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
            "x": 767,
            "top": 1066,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(27%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 593,
            "top": 1132,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Mobile &",
                "size": 34,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "IP related",
                "size": 34,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 767,
            "top": 1260,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+21% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 624,
            "top": 1339,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 34,
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
            "x": 1141,
            "top": 579,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(30%) Y/Y",
                "size": 27,
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
            "x": 1515,
            "top": 456,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "61% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27,
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
            "x": 1515,
            "top": 1180,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 34,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1884,
            "top": 365,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "24% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 27,
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
            "x": 1884,
            "top": 938,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "expenses",
                "size": 34,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2155,
            "top": 332,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#00944f"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2422,
            "top": 427,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00944f"
              },
              {
                "text": "24% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27,
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
            "x": 2422,
            "top": 669,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31,
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
            "x": 2422,
            "top": 835,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other SG&A",
                "size": 31,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "17% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 27,
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
            "x": 2422,
            "top": 1016,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "12% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27,
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
            "x": 2422,
            "top": 1194,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Advertising",
                "size": 31,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "7% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
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
      "value": 610,
      "type": "source",
      "valueText": "¥610B",
      "notes": [
        "(46%) Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "hardware",
      "label": "Hardware",
      "value": 474,
      "type": "source",
      "valueText": "¥474B",
      "notes": [
        "(31%) Y/Y"
      ],
      "col": 0,
      "order": 1
    },
    {
      "id": "dedicated_video_game_platform",
      "label": "Nintendo Switch",
      "value": 1084,
      "type": "hub",
      "valueText": "¥1,084B",
      "notes": [
        "(31%) Y/Y"
      ],
      "col": 0,
      "order": 2
    },
    {
      "id": "mobile_ip",
      "label": "Mobile & IP related",
      "value": 68,
      "type": "source",
      "valueText": "¥68B",
      "notes": [
        "(27%) Y/Y"
      ],
      "col": 0,
      "order": 3
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 14,
      "type": "source",
      "valueText": "¥14B",
      "notes": [
        "+21% Y/Y"
      ],
      "col": 0,
      "order": 4
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1165,
      "type": "hub",
      "valueText": "¥1,165B",
      "notes": [
        "(30%) Y/Y"
      ],
      "col": 0,
      "order": 5
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 710,
      "type": "profit",
      "valueText": "¥710B",
      "notes": [
        "61% margin",
        "+4pp Y/Y"
      ],
      "col": 0,
      "order": 6
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 455,
      "type": "cost",
      "valueText": "(¥455B)",
      "notes": [],
      "col": 0,
      "order": 7
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 283,
      "type": "profit",
      "valueText": "¥283B",
      "notes": [
        "24% margin",
        "(7pp) Y/Y"
      ],
      "col": 0,
      "order": 8
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 428,
      "type": "cost",
      "valueText": "(¥428B)",
      "notes": [],
      "col": 0,
      "order": 9
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 90,
      "type": "profit",
      "valueText": "¥90B",
      "notes": [],
      "col": 0,
      "order": 10
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 279,
      "type": "profit",
      "valueText": "¥279B",
      "notes": [
        "24% margin",
        "(5pp) Y/Y"
      ],
      "col": 0,
      "order": 11
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 94,
      "type": "cost",
      "valueText": "(¥94B)",
      "notes": [],
      "col": 0,
      "order": 12
    },
    {
      "id": "other_sga",
      "label": "Other SG&A",
      "value": 197,
      "type": "cost",
      "valueText": "(¥197B)",
      "notes": [
        "17% of revenue",
        "+6pp Y/Y"
      ],
      "col": 0,
      "order": 13
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 144,
      "type": "cost",
      "valueText": "(¥144B)",
      "notes": [
        "12% of revenue",
        "+4pp Y/Y"
      ],
      "col": 0,
      "order": 14
    },
    {
      "id": "advertising",
      "label": "Advertising",
      "value": 87,
      "type": "cost",
      "valueText": "(¥87B)",
      "notes": [
        "7% of revenue",
        "+1pp Y/Y"
      ],
      "col": 0,
      "order": 15
    }
  ],
  "links": [
    {
      "source": "software",
      "target": "dedicated_video_game_platform",
      "value": 610,
      "sourceWidth": 170,
      "targetWidth": 170,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "hardware",
      "target": "dedicated_video_game_platform",
      "value": 474,
      "sourceWidth": 132,
      "targetWidth": 130,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "dedicated_video_game_platform",
      "target": "revenue",
      "value": 1084,
      "sourceWidth": 300,
      "targetWidth": 301,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "mobile_ip",
      "target": "revenue",
      "value": 68,
      "sourceWidth": 19,
      "targetWidth": 19,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 14,
      "sourceWidth": 4,
      "targetWidth": 4,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 710,
      "sourceWidth": 198,
      "targetWidth": 198,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 455,
      "sourceWidth": 126,
      "targetWidth": 127,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 283,
      "sourceWidth": 80,
      "targetWidth": 80,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 428,
      "sourceWidth": 118,
      "targetWidth": 119,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 189,
      "sourceWidth": 53,
      "targetWidth": 53,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 94,
      "sourceWidth": 27,
      "targetWidth": 27,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 90,
      "sourceWidth": 26,
      "targetWidth": 26,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_sga",
      "value": 197,
      "sourceWidth": 56,
      "targetWidth": 56,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 144,
      "sourceWidth": 40,
      "targetWidth": 40,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 87,
      "sourceWidth": 23,
      "targetWidth": 25,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Nintendo · 2025 财年",
      "meta": {
        "title": "Nintendo 2025 财年利润表",
        "period": "2025 财年",
        "periodNote": "截至 2025 年 3 月",
        "titleSize": 118
      },
      "nodes": {
        "software": {
          "label": "软件",
          "notes": [
            "同比 (46%)"
          ]
        },
        "hardware": {
          "label": "硬件",
          "notes": [
            "同比 (31%)"
          ]
        },
        "dedicated_video_game_platform": {
          "label": "Nintendo Switch 平台",
          "notes": [
            "同比 (31%)"
          ]
        },
        "mobile_ip": {
          "label": "移动业务与 IP 相关收入",
          "notes": [
            "同比 (27%)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +21%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (30%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 61%",
            "同比 +4pp"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 24%",
            "同比 (7pp)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 24%",
            "同比 (5pp)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_sga": {
          "label": "其他 SG&A",
          "notes": [
            "占收入 17%",
            "同比 +6pp"
          ]
        },
        "rnd": {
          "label": "研发（R&D）",
          "notes": [
            "占收入 12%",
            "同比 +4pp"
          ]
        },
        "advertising": {
          "label": "广告",
          "notes": [
            "占收入 7%",
            "同比 +1pp"
          ]
        }
      },
      "layout": {
        "labels": {
          "software": {
            "blocks": [
              {
                "x": 393,
                "top": 389,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (46%)",
                    "size": 27,
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
                "x": 393,
                "top": 797,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (31%)",
                    "size": 27,
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
                "x": 767,
                "top": 527,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (31%)",
                    "size": 27,
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
                "x": 767,
                "top": 1066,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (27%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 593,
                "top": 1132,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "移动业务与",
                    "size": 34,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "IP 相关收入",
                    "size": 34,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 767,
                "top": 1260,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 624,
                "top": 1339,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 34,
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
                "x": 1141,
                "top": 579,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (30%)",
                    "size": 27,
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
                "x": 1515,
                "top": 456,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "利润率 61%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4pp",
                    "size": 27,
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
                "x": 1515,
                "top": 1180,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 34,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1884,
                "top": 365,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "利润率 24%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (7pp)",
                    "size": 27,
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
                "x": 1884,
                "top": 938,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
                    "size": 34,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2155,
                "top": 332,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#00944f"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2422,
                "top": 427,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00944f"
                  },
                  {
                    "text": "利润率 24%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5pp)",
                    "size": 27,
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
                "x": 2422,
                "top": 669,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 2422,
                "top": 835,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他 SG&A",
                    "size": 29,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 17%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6pp",
                    "size": 27,
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
                "x": 2422,
                "top": 1016,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "研发（R&D）",
                    "size": 31,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4pp",
                    "size": 27,
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
                "x": 2422,
                "top": 1194,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "广告",
                    "size": 31,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1pp",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"242\" y=\"273\" text-anchor=\"middle\" font-size=\"39\" font-weight=\"700\" fill=\"#175578\">以日元计</text><text x=\"228\" y=\"521\" text-anchor=\"middle\" font-size=\"34\" font-weight=\"700\" fill=\"#000\">软件</text><text x=\"195\" y=\"563\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\" data-operating-metric=\"software_units\">155M</text><text x=\"228\" y=\"600\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\">同比 (22%)</text><text x=\"195\" y=\"639\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\" data-operating-metric=\"digital_share\">54%</text><text x=\"268\" y=\"639\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\">数字版</text><text x=\"228\" y=\"678\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\">同比 +3pp</text><text x=\"228\" y=\"931\" text-anchor=\"middle\" font-size=\"34\" font-weight=\"700\" fill=\"#000\">硬件</text><text x=\"195\" y=\"973\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\" data-operating-metric=\"hardware_units\">11M</text><text x=\"228\" y=\"1011\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#777777\">同比 (31%)</text><text x=\"239\" y=\"563\" font-size=\"27\" fill=\"#777777\">套/台</text><text x=\"239\" y=\"973\" font-size=\"27\" fill=\"#777777\">套/台</text></g>"
    }
  }
});
