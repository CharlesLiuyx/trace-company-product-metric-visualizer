window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "nintendo-q3-fy25",
  "name": "Nintendo · Q3 FY25",
  "company": "Nintendo",
  "meta": {
    "company": "Nintendo",
    "title": "Nintendo Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/nintendo-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199,
    "titleSize": 126,
    "titleWeight": 800,
    "periodX": 1328,
    "periodY": 1313,
    "periodNoteY": 1357
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
  "annotationsSvg": "<text x=\"185\" y=\"276\" font-size=\"40\" font-weight=\"700\" fill=\"#155077\">in yen</text><text data-operating-metric=\"hardware_units\" x=\"155\" y=\"612\" font-size=\"27\" fill=\"#777777\">4.8M</text><text x=\"214\" y=\"612\" font-size=\"27\" fill=\"#777777\"> units</text><text data-operating-metric=\"software_units\" x=\"154\" y=\"899\" font-size=\"27\" fill=\"#777777\">53.7M</text><text x=\"233\" y=\"899\" font-size=\"27\" fill=\"#777777\"> units</text><text data-operating-metric=\"digital_share\" x=\"156\" y=\"977\" font-size=\"27\" fill=\"#777777\">43%</text><text x=\"215\" y=\"977\" font-size=\"27\" fill=\"#777777\"> Digital</text>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/nintendo/company-logo.png",
      "x": 841,
      "y": 253,
      "width": 586,
      "height": 145
    },
    {
      "key": "switch-wordmark",
      "href": "data/assets/raster-annotations/nintendo/switch-wordmark-9m-fy26.png",
      "x": 662,
      "y": 430,
      "width": 223,
      "height": 66
    },
    {
      "key": "switch-console-icon",
      "href": "data/assets/raster-annotations/nintendo/switch-console-icon.png",
      "x": 154,
      "y": 356,
      "width": 143,
      "height": 143
    },
    {
      "key": "mobile-store-icons",
      "href": "data/assets/raster-annotations/nintendo/mobile-store-icons-fy25.png",
      "x": 410,
      "y": 1057,
      "width": 83,
      "height": 181
    },
    {
      "key": "mario",
      "href": "data/assets/raster-annotations/nintendo/mario-fy25.png",
      "x": 1673,
      "y": 1016,
      "width": 184,
      "height": 391
    }
  ],
  "layout": {
    "scale": 0.7575057736720554,
    "nodes": {
      "hardware": {
        "x": 360,
        "y": 515,
        "width": 73,
        "height": 160
      },
      "software": {
        "x": 360,
        "y": 830,
        "width": 73,
        "height": 149
      },
      "dedicated_video_game_platform": {
        "x": 734,
        "y": 614,
        "width": 72,
        "height": 310
      },
      "mobile_ip": {
        "x": 729,
        "y": 1134,
        "width": 72,
        "height": 14
      },
      "other_revenue": {
        "x": 731,
        "y": 1274,
        "width": 73,
        "height": 3
      },
      "revenue": {
        "x": 1105,
        "y": 710,
        "width": 72,
        "height": 328
      },
      "gross_profit": {
        "x": 1483,
        "y": 612,
        "width": 73,
        "height": 187
      },
      "cost_of_sales": {
        "x": 1481,
        "y": 1023,
        "width": 72,
        "height": 140
      },
      "operating_profit": {
        "x": 1857,
        "y": 516,
        "width": 73,
        "height": 95
      },
      "operating_expenses": {
        "x": 1855,
        "y": 808,
        "width": 72,
        "height": 92
      },
      "other_income": {
        "x": 2112,
        "y": 370,
        "width": 73,
        "height": 41
      },
      "net_profit": {
        "x": 2228,
        "y": 387,
        "width": 73,
        "height": 98
      },
      "tax": {
        "x": 2228,
        "y": 662,
        "width": 73,
        "height": 39
      },
      "other_sga": {
        "x": 2228,
        "y": 920,
        "width": 73,
        "height": 40
      },
      "rnd": {
        "x": 2228,
        "y": 1101,
        "width": 73,
        "height": 24
      },
      "advertising": {
        "x": 2228,
        "y": 1262,
        "width": 73,
        "height": 27
      }
    },
    "labels": {
      "hardware": {
        "blocks": [
          {
            "x": 404,
            "top": 415,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(26%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 225,
            "top": 542,
            "anchor": "middle",
            "lineGap": 8,
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Hardware",
                "size": 33,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "",
                "size": 27,
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
      "software": {
        "blocks": [
          {
            "x": 404,
            "top": 729,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
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
          },
          {
            "x": 225,
            "top": 828,
            "anchor": "middle",
            "lineGap": 8,
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Software",
                "size": 33,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "",
                "size": 27,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(30%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 770,
            "top": 513,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(29%) Y/Y",
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
            "x": 766,
            "top": 1037,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(8%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 594,
            "top": 1104,
            "anchor": "middle",
            "lineGap": 8,
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Mobile &",
                "size": 33,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "IP related",
                "size": 33,
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
            "x": 766,
            "top": 1181,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "Flat Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 672,
            "top": 1259,
            "anchor": "end",
            "lineGap": 8,
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Other",
                "size": 33,
                "weight": 800,
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
            "top": 559,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(28%) Y/Y",
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
            "top": 425,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "57% margin",
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1515,
            "top": 1177,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
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
            "x": 1892,
            "top": 328,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "29% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1892,
            "top": 915,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2141,
            "top": 280,
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
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2425,
            "top": 344,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "30% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
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
            "x": 2425,
            "top": 635,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "x": 2425,
            "top": 880,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other SG&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
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
      "rnd": {
        "blocks": [
          {
            "x": 2425,
            "top": 1050,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 2425,
            "top": 1219,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Advertising",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
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
      "value": 198,
      "type": "source",
      "valueText": "¥198B",
      "notes": [
        "(31%) Y/Y",
        "53.7M units",
        "(30%) Y/Y",
        "43% Digital",
        "(2pp) Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "hardware",
      "label": "Hardware",
      "value": 212,
      "type": "source",
      "valueText": "¥212B",
      "notes": [
        "(26%) Y/Y",
        "4.8M units",
        "(31%) Y/Y"
      ],
      "col": 0,
      "order": 1
    },
    {
      "id": "dedicated_video_game_platform",
      "label": "Nintendo Switch",
      "value": 410,
      "type": "hub",
      "valueText": "¥410B",
      "notes": [
        "(29%) Y/Y"
      ],
      "col": 0,
      "order": 2
    },
    {
      "id": "mobile_ip",
      "label": "Mobile & IP related",
      "value": 19,
      "type": "source",
      "valueText": "¥19B",
      "notes": [
        "(8%) Y/Y"
      ],
      "col": 0,
      "order": 3
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 4,
      "type": "source",
      "valueText": "¥4B",
      "notes": [
        "Flat Y/Y"
      ],
      "col": 0,
      "order": 4
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 433,
      "type": "hub",
      "valueText": "¥433B",
      "notes": [
        "(28%) Y/Y"
      ],
      "col": 0,
      "order": 5
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 248,
      "type": "profit",
      "valueText": "¥248B",
      "notes": [
        "57% margin",
        "+6pp Y/Y"
      ],
      "col": 0,
      "order": 6
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 185,
      "type": "cost",
      "valueText": "(¥185B)",
      "notes": [],
      "col": 0,
      "order": 7
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 126,
      "type": "profit",
      "valueText": "¥126B",
      "notes": [
        "29% margin",
        "(2pp) Y/Y"
      ],
      "col": 0,
      "order": 8
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 122,
      "type": "cost",
      "valueText": "(¥122B)",
      "notes": [],
      "col": 0,
      "order": 9
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 54,
      "type": "profit",
      "valueText": "¥54B",
      "notes": [],
      "col": 0,
      "order": 10
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 129,
      "type": "profit",
      "valueText": "¥129B",
      "notes": [
        "30% margin",
        "+7pp Y/Y"
      ],
      "col": 0,
      "order": 11
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 52,
      "type": "cost",
      "valueText": "(¥52B)",
      "notes": [],
      "col": 0,
      "order": 12
    },
    {
      "id": "other_sga",
      "label": "Other SG&A",
      "value": 53,
      "type": "cost",
      "valueText": "(¥53B)",
      "notes": [
        "12% of revenue",
        "+4pp Y/Y"
      ],
      "col": 0,
      "order": 13
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 36,
      "type": "cost",
      "valueText": "(¥36B)",
      "notes": [
        "8% of revenue",
        "+3pp Y/Y"
      ],
      "col": 0,
      "order": 14
    },
    {
      "id": "advertising",
      "label": "Advertising",
      "value": 33,
      "type": "cost",
      "valueText": "(¥33B)",
      "notes": [
        "8% of revenue",
        "+1pp Y/Y"
      ],
      "col": 0,
      "order": 15
    }
  ],
  "links": [
    {
      "source": "hardware",
      "target": "dedicated_video_game_platform",
      "value": 212,
      "sourceWidth": 160,
      "targetWidth": 160,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "software",
      "target": "dedicated_video_game_platform",
      "value": 198,
      "sourceWidth": 149,
      "targetWidth": 150,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "dedicated_video_game_platform",
      "target": "revenue",
      "value": 410,
      "sourceWidth": 310,
      "targetWidth": 311,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "mobile_ip",
      "target": "revenue",
      "value": 19,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 4,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 248,
      "sourceWidth": 188,
      "targetWidth": 187,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 185,
      "sourceWidth": 140,
      "targetWidth": 140,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 126,
      "sourceWidth": 96,
      "targetWidth": 95,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 122,
      "sourceWidth": 91,
      "targetWidth": 92,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 74,
      "sourceWidth": 56,
      "targetWidth": 57,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 52,
      "sourceWidth": 39,
      "targetWidth": 39,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 54,
      "sourceWidth": 41,
      "targetWidth": 41,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_sga",
      "value": 53,
      "sourceWidth": 40,
      "targetWidth": 40,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 36,
      "sourceWidth": 25,
      "targetWidth": 24,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 33,
      "sourceWidth": 27,
      "targetWidth": 27,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "Nintendo Switch"
    ],
    "zh": {
      "name": "Nintendo · 2025 财年第三季度",
      "meta": {
        "title": "Nintendo 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2024 年 12 月",
        "titleSize": 118
      },
      "nodes": {
        "software": {
          "label": "软件",
          "notes": [
            "同比 -31%",
            "53.7M 台/份",
            "同比 -30%",
            "数字化占比 43%",
            "同比 -2 个百分点"
          ]
        },
        "hardware": {
          "label": "硬件",
          "notes": [
            "同比 -26%",
            "4.8M 台/份",
            "同比 -31%"
          ]
        },
        "dedicated_video_game_platform": {
          "label": "任天堂 Switch",
          "notes": [
            "同比 -29%"
          ]
        },
        "mobile_ip": {
          "label": "移动与 IP 相关",
          "notes": [
            "同比 -8%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比持平"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 -28%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 57%",
            "同比 +6 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 29%",
            "同比 -2 个百分点"
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
            "利润率 30%",
            "同比 +7 个百分点"
          ]
        },
        "tax": {
          "label": "税项",
          "notes": []
        },
        "other_sga": {
          "label": "其他 SG&A",
          "notes": [
            "占收入 12%",
            "同比 +4 个百分点"
          ]
        },
        "rnd": {
          "label": "研发（R&D）",
          "notes": [
            "占收入 8%",
            "同比 +3 个百分点"
          ]
        },
        "advertising": {
          "label": "广告费用",
          "notes": [
            "占收入 8%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "hardware": {
            "blocks": [
              {
                "x": 404,
                "top": 415,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 -26%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 225,
                "top": 542,
                "anchor": "middle",
                "lineGap": 8,
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "硬件",
                    "size": 33,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "",
                    "size": 27,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 -31%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "software": {
            "blocks": [
              {
                "x": 404,
                "top": 729,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 -31%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 225,
                "top": 828,
                "anchor": "middle",
                "lineGap": 8,
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "软件",
                    "size": 33,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "",
                    "size": 27,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 -30%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -2 个百分点",
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
                "x": 770,
                "top": 513,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 -29%",
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
                "x": 766,
                "top": 1037,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 -8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 594,
                "top": 1104,
                "anchor": "middle",
                "lineGap": 8,
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "移动与",
                    "size": 33,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "IP 相关",
                    "size": 33,
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
                "x": 766,
                "top": 1181,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比持平",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 672,
                "top": 1259,
                "anchor": "end",
                "lineGap": 8,
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "其他",
                    "size": 33,
                    "weight": 800,
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
                "top": 559,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 -28%",
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
                "top": 425,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 57%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6 个百分点",
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
                "top": 1177,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
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
                "x": 1892,
                "top": 328,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 29%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -2 个百分点",
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
                "x": 1892,
                "top": 915,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2141,
                "top": 280,
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
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2425,
                "top": 344,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 30%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
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
                "x": 2425,
                "top": 635,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税项",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 2425,
                "top": 880,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他 SG&A",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
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
                "x": 2425,
                "top": 1050,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发（R&D）",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 2425,
                "top": 1219,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "广告费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
      "annotationsSvg": "<text x=\"185\" y=\"276\" font-size=\"40\" font-weight=\"700\" fill=\"#155077\">单位：日元</text><text data-operating-metric=\"hardware_units\" x=\"155\" y=\"612\" font-size=\"27\" fill=\"#777777\">4.8M</text><text x=\"214\" y=\"612\" font-size=\"27\" fill=\"#777777\"> 台</text><text data-operating-metric=\"software_units\" x=\"154\" y=\"899\" font-size=\"27\" fill=\"#777777\">53.7M</text><text x=\"233\" y=\"899\" font-size=\"27\" fill=\"#777777\"> 份</text><text data-operating-metric=\"digital_share\" x=\"156\" y=\"977\" font-size=\"27\" fill=\"#777777\">43%</text><text x=\"215\" y=\"977\" font-size=\"27\" fill=\"#777777\"> 数字化</text>"
    }
  },
  "operatingMetrics": [
    {
      "id": "hardware_units",
      "label": "Hardware units",
      "value": "4800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "4.8M",
      "basis": "unspecified",
      "notes": [
        "(31%) Y/Y"
      ],
      "quote": "Hardware units\n4.8M units\n(31%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          145,
          588,
          154,
          73
        ]
      }
    },
    {
      "id": "software_units",
      "label": "Software units",
      "value": "53700000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "53.7M",
      "basis": "unspecified",
      "notes": [
        "(30%) Y/Y"
      ],
      "quote": "Software units\n53.7M units\n(30%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          144,
          872,
          164,
          74
        ]
      }
    },
    {
      "id": "digital_share",
      "label": "Digital share",
      "value": "43",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "43%",
      "basis": "unspecified",
      "notes": [
        "(2pp) Y/Y"
      ],
      "quote": "Digital share\n43%\n(2pp) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          145,
          950,
          158,
          68
        ]
      }
    }
  ]
});
