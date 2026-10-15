window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "nintendo-fy23",
  "name": "Nintendo · FY23",
  "company": "Nintendo",
  "meta": {
    "company": "Nintendo",
    "title": "Nintendo FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processing/nintendo-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 125,
    "titleWeight": 800,
    "periodX": 2390,
    "periodY": 257,
    "periodNoteY": 300
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
        "label": "#666666"
      },
      "hub": {
        "node": "#808080",
        "label": "#666666"
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
      "name": 39,
      "value": 39,
      "note": 28,
      "lineGap": 10
    }
  },
  "layout": {
    "nodes": {
      "switch": {
        "x": 366,
        "y": 531,
        "width": 72,
        "height": 382
      },
      "other_consoles": {
        "x": 366,
        "y": 1065,
        "width": 72,
        "height": 7
      },
      "mobile_ip": {
        "x": 366,
        "y": 1220,
        "width": 72,
        "height": 11
      },
      "playing_cards": {
        "x": 366,
        "y": 1375,
        "width": 72,
        "height": 2
      },
      "revenue": {
        "x": 834,
        "y": 623,
        "width": 71,
        "height": 405
      },
      "gross_profit": {
        "x": 1298,
        "y": 572,
        "width": 72,
        "height": 223
      },
      "cost_of_sales": {
        "x": 1301,
        "y": 920,
        "width": 71,
        "height": 180
      },
      "operating_profit": {
        "x": 1766,
        "y": 477,
        "width": 70,
        "height": 127
      },
      "operating_expenses": {
        "x": 1764,
        "y": 786,
        "width": 70,
        "height": 94
      },
      "other_income": {
        "x": 2094,
        "y": 532,
        "width": 70,
        "height": 23
      },
      "net_profit": {
        "x": 2235,
        "y": 397,
        "width": 72,
        "height": 108
      },
      "tax": {
        "x": 2235,
        "y": 731,
        "width": 72,
        "height": 40
      },
      "rnd": {
        "x": 2235,
        "y": 914,
        "width": 72,
        "height": 25
      },
      "advertising": {
        "x": 2235,
        "y": 1081,
        "width": 72,
        "height": 23
      },
      "other_sga": {
        "x": 2235,
        "y": 1247,
        "width": 72,
        "height": 42
      }
    },
    "labels": {
      "switch": {
        "blocks": [
          {
            "x": 402.39,
            "top": 432.35,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
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
      "other_consoles": {
        "blocks": [
          {
            "x": 402.39,
            "top": 968.87,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
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
            "x": 351.61,
            "top": 1052.21,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other consoles",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "mobile_ip": {
        "blocks": [
          {
            "x": 402.39,
            "top": 1126.44,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 351.61,
            "top": 1205.3999999999999,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Mobile & IP related",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "playing_cards": {
        "blocks": [
          {
            "x": 402.39,
            "top": 1276.2,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+107% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 351.61,
            "top": 1355.92,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Playing cards",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 868.6,
            "top": 468.81,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
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
            "x": 1334.8,
            "top": 378.95,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "55% margin",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1802.31,
            "top": 286.49,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "31% margin",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2428.69,
            "top": 345.1,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "27% margin",
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1333.5,
            "top": 1119.93,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "sales",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 1802.31,
            "top": 897.25,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 2129.17,
            "top": 570.38,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#00944f"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2422.18,
            "top": 703.21,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
      "rnd": {
        "blocks": [
          {
            "x": 2422.18,
            "top": 877.71,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 2422.18,
            "top": 1076.96,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 2422.18,
            "top": 1238.44,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
  "nodes": [
    {
      "id": "switch",
      "label": "Nintendo Switch",
      "value": 1509,
      "valueText": "¥1,509B",
      "notes": [
        "(6%) Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "other_consoles",
      "label": "Other consoles",
      "value": 36,
      "valueText": "¥36B",
      "notes": [
        "(2%) Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "mobile_ip",
      "label": "Mobile & IP related",
      "value": 51,
      "valueText": "¥51B",
      "notes": [
        "(4%) Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "playing_cards",
      "label": "Playing cards",
      "value": 6,
      "valueText": "¥6B",
      "notes": [
        "+107% Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1601,
      "valueText": "¥1,601B",
      "notes": [
        "(6%) Y/Y"
      ],
      "type": "hub"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 886,
      "valueText": "¥886B",
      "notes": [
        "55% margin",
        "(1pp) Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 716,
      "valueText": "(¥716B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 504,
      "valueText": "¥504B",
      "notes": [
        "31% margin",
        "(4pp) Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 381,
      "valueText": "(¥381B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 96,
      "valueText": "¥96B",
      "notes": [],
      "type": "profit"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 433,
      "valueText": "¥433B",
      "notes": [
        "27% margin",
        "(1pp) Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 168,
      "valueText": "(¥168B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 110,
      "valueText": "(¥110B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "advertising",
      "label": "Advertising",
      "value": 95,
      "valueText": "(¥95B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "other_sga",
      "label": "Other SG&A",
      "value": 176,
      "valueText": "(¥176B)",
      "notes": [],
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "switch",
      "target": "revenue",
      "value": 1509,
      "sourceWidth": 382.0,
      "targetWidth": 381.1764705882353,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_consoles",
      "target": "revenue",
      "value": 36,
      "sourceWidth": 7.0,
      "targetWidth": 8.933823529411764,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "mobile_ip",
      "target": "revenue",
      "value": 51,
      "sourceWidth": 11.0,
      "targetWidth": 13.897058823529411,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "playing_cards",
      "target": "revenue",
      "value": 6,
      "sourceWidth": 2.0,
      "targetWidth": 0.9926470588235294,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 886,
      "sourceWidth": 223.34558823529412,
      "targetWidth": 223.0,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 716,
      "sourceWidth": 181.65441176470588,
      "targetWidth": 180.0,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 504,
      "sourceWidth": 126.86222222222223,
      "targetWidth": 127.0,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 381,
      "sourceWidth": 96.13777777777777,
      "targetWidth": 94.0,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 336,
      "sourceWidth": 84.3359375,
      "targetWidth": 83.45454545454545,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 168,
      "sourceWidth": 42.6640625,
      "targetWidth": 40.0,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 96,
      "sourceWidth": 23.0,
      "targetWidth": 24.545454545454547,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 110,
      "sourceWidth": 27.416666666666668,
      "targetWidth": 25.0,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 95,
      "sourceWidth": 24.479166666666668,
      "targetWidth": 23.0,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_sga",
      "value": 176,
      "sourceWidth": 42.104166666666664,
      "targetWidth": 42.0,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "switch_sell_in",
      "label": "Switch Sell-In",
      "value": "18000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "18M",
      "basis": "unspecified",
      "notes": [
        "(22%) Y/Y"
      ],
      "quote": "Switch Sell-In\n18M units\n(22%) Y/Y",
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
      "id": "digital_sales",
      "label": "Digital sales",
      "value": "405",
      "unit": "B",
      "currency": "JPY",
      "comparison": "eq",
      "literal": "¥405B",
      "basis": "unspecified",
      "notes": [
        "+13% Y/Y"
      ],
      "quote": "Digital sales\n¥405B +13% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          734,
          1106,
          270,
          113
        ]
      }
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/nintendo/company-logo.png",
      "x": 553.45458984375,
      "y": 261.75146484375,
      "width": 623.77587890625,
      "height": 182.314453125
    },
    {
      "key": "switch-logo",
      "href": "data/assets/raster-annotations/nintendo/switch-console-icon.png",
      "x": 123.71337890625,
      "y": 592.52197265625,
      "width": 138.0380859375,
      "height": 140.642578125
    },
    {
      "key": "mobile-store-icons",
      "href": "data/assets/raster-annotations/nintendo/mobile-store-icons.png",
      "x": 108.08642578125,
      "y": 1125.140625,
      "width": 178.40771484375,
      "height": 82.04150390625
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"251.33349609375\" y=\"282.076171875\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"700\" fill=\"#175578\" >in yen</text><rect data-annotation-clearance=\"true\" x=\"37.76513671875\" y=\"747.4892578125\" width=\"303.42333984375\" height=\"149.75830078125\" rx=\"28.6494140625\" fill=\"#e60012\"/><text x=\"188.82568359375\" y=\"800.88134765625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"#fff\" >Switch Sell-In</text><text x=\"167.98974609375\" y=\"839.94873046875\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"switch_sell_in\">18M</text><text x=\"235.70654296875\" y=\"839.94873046875\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\" >units</text><text x=\"188.82568359375\" y=\"877.7138671875\" text-anchor=\"middle\" font-size=\"23.4404296875\" font-weight=\"400\" fill=\"#fff\" >(22%) Y/Y</text><path d=\"M 734.466796875 1191.55517578125 L 734.466796875 1127.7451171875 Q 734.466796875 1105.60693359375 756.60498046875 1105.60693359375 L 845.15771484375 1105.60693359375 L 875.109375 1047.005859375 L 902.45654296875 1106.9091796875 L 977.98681640625 1106.9091796875 Q 1002.7294921875 1106.9091796875 1002.7294921875 1131.65185546875 L 1002.7294921875 1194.15966796875 Q 1002.7294921875 1217.60009765625 979.2890625 1217.60009765625 L 757.9072265625 1217.60009765625 Q 734.466796875 1217.60009765625 734.466796875 1191.55517578125 Z\" fill=\"none\" stroke=\"#888\" stroke-width=\"2\"/><text x=\"867.2958984375\" y=\"1153.7900390625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"700\" fill=\"#666\" >Digital sales</text><text x=\"799.5791015625\" y=\"1195.4619140625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#777777\" data-operating-metric=\"digital_sales\">¥405B</text><text x=\"914.1767578125\" y=\"1195.4619140625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#777777\" >+13% Y/Y</text></g>",
  "i18n": {
    "zh": {
      "name": "Nintendo · 2023 财年",
      "meta": {
        "title": "Nintendo 2023 财年利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 3 月"
      },
      "nodes": {
        "switch": {
          "label": "任天堂 Switch",
          "notes": [
            "同比 (6%)"
          ]
        },
        "other_consoles": {
          "label": "其他主机",
          "notes": [
            "同比 (2%)"
          ]
        },
        "mobile_ip": {
          "label": "移动与 IP 相关",
          "notes": [
            "同比 (4%)"
          ]
        },
        "playing_cards": {
          "label": "扑克牌",
          "notes": [
            "同比 +107%"
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
            "利润率 55%",
            "同比 (1pp)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 31%",
            "同比 (4pp)"
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
            "利润率 27%",
            "同比 (1pp)"
          ]
        },
        "tax": {
          "label": "税费",
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
        "other_sga": {
          "label": "其他 SG&A",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "switch": {
            "blocks": [
              {
                "x": 402.39,
                "top": 432.35,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
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
          "other_consoles": {
            "blocks": [
              {
                "x": 402.39,
                "top": 968.87,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
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
                "x": 351.61,
                "top": 1052.21,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他主机",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "mobile_ip": {
            "blocks": [
              {
                "x": 402.39,
                "top": 1126.44,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 351.61,
                "top": 1205.3999999999999,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "移动与 IP 相关",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "playing_cards": {
            "blocks": [
              {
                "x": 402.39,
                "top": 1276.2,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +107%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 351.61,
                "top": 1355.92,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "扑克牌",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 868.6,
                "top": 468.81,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
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
                "x": 1334.8,
                "top": 378.95,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "利润率 55%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1pp)",
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
                "x": 1802.31,
                "top": 286.49,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "利润率 31%",
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
          "net_profit": {
            "blocks": [
              {
                "x": 2428.69,
                "top": 345.1,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "利润率 27%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1pp)",
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
                "top": 1119.93,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 1802.31,
                "top": 897.25,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 2129.17,
                "top": 570.38,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#00944f"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2422.18,
                "top": 703.21,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
          "rnd": {
            "blocks": [
              {
                "x": 2422.18,
                "top": 877.71,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发（R&D）",
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
                "x": 2422.18,
                "top": 1076.96,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 2422.18,
                "top": 1238.44,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"251.33349609375\" y=\"282.076171875\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"700\" fill=\"#175578\" >以日元计</text><rect data-annotation-clearance=\"true\" x=\"37.76513671875\" y=\"747.4892578125\" width=\"303.42333984375\" height=\"149.75830078125\" rx=\"28.6494140625\" fill=\"#e60012\"/><text x=\"188.82568359375\" y=\"800.88134765625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"#fff\" >Switch 出货量</text><text x=\"167.98974609375\" y=\"839.94873046875\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"switch_sell_in\">18M</text><text x=\"235.70654296875\" y=\"839.94873046875\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\" >台</text><text x=\"188.82568359375\" y=\"877.7138671875\" text-anchor=\"middle\" font-size=\"23.4404296875\" font-weight=\"400\" fill=\"#fff\" >同比 (22%)</text><path d=\"M 734.466796875 1191.55517578125 L 734.466796875 1127.7451171875 Q 734.466796875 1105.60693359375 756.60498046875 1105.60693359375 L 845.15771484375 1105.60693359375 L 875.109375 1047.005859375 L 902.45654296875 1106.9091796875 L 977.98681640625 1106.9091796875 Q 1002.7294921875 1106.9091796875 1002.7294921875 1131.65185546875 L 1002.7294921875 1194.15966796875 Q 1002.7294921875 1217.60009765625 979.2890625 1217.60009765625 L 757.9072265625 1217.60009765625 Q 734.466796875 1217.60009765625 734.466796875 1191.55517578125 Z\" fill=\"none\" stroke=\"#888\" stroke-width=\"2\"/><text x=\"867.2958984375\" y=\"1153.7900390625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"700\" fill=\"#666\" >数字销售额</text><text x=\"799.5791015625\" y=\"1195.4619140625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#777777\" data-operating-metric=\"digital_sales\">¥405B</text><text x=\"914.1767578125\" y=\"1195.4619140625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#777777\" >同比 +13%</text></g>"
    }
  }
});
