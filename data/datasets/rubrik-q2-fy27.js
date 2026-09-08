/* Rubrik Q2 FY27 — Source-measured View Adapter; money and operating metrics are SSOT-backed. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "rubrik-q2-fy27",
  "name": "Rubrik · Q2 FY27",
  "company": "Rubrik",
  "meta": {
    "company": "Rubrik",
    "title": "Rubrik Q2 FY27 Income Statement",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/rubrik-q2-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1337,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2130,
    "periodX": 2499.5,
    "periodY": 325,
    "periodNoteY": 367
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#606060",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 9
    }
  },
  "layout": {
    "scale": 0.73,
    "nodes": {
      "subscription": {
        "x": 447,
        "y": 486,
        "width": 73,
        "height": 297
      },
      "other": {
        "x": 447,
        "y": 1033,
        "width": 73,
        "height": 15
      },
      "revenue": {
        "x": 914,
        "y": 602,
        "width": 73,
        "height": 312
      },
      "gross_profit": {
        "x": 1381,
        "y": 484,
        "width": 73,
        "height": 244
      },
      "cost_of_revenue": {
        "x": 1381,
        "y": 986,
        "width": 73,
        "height": 67
      },
      "operating_loss": {
        "x": 1644,
        "y": 882,
        "width": 73,
        "height": 53
      },
      "operating_expenses": {
        "x": 1848,
        "y": 565,
        "width": 73,
        "height": 297
      },
      "sm": {
        "x": 2313,
        "y": 443,
        "width": 73,
        "height": 164
      },
      "rnd": {
        "x": 2315,
        "y": 825,
        "width": 73,
        "height": 92
      },
      "ga": {
        "x": 2315,
        "y": 1149,
        "width": 73,
        "height": 41
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 481.5,
            "top": 384.51999855041504,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#00aea2",
                "textLength": 119
              }
            ]
          },
          {
            "x": 482.5,
            "top": 436.572265625,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "+37% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 117
              }
            ]
          },
          {
            "x": 264.0,
            "top": 591.3999996185303,
            "anchor": "middle",
            "lineGap": 13.505762100219727,
            "lines": [
              {
                "text": "Subscription",
                "size": 40,
                "weight": 800,
                "color": "#00aea2",
                "textLength": 239
              },
              {
                "text": "82% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 227
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 481,
            "top": 933.019998550415,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#4a4a4a",
                "textLength": 96
              }
            ]
          },
          {
            "x": 482.5,
            "top": 985.572265625,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "+56% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 117
              }
            ]
          },
          {
            "x": 273.25,
            "top": 997.9999990463257,
            "anchor": "middle",
            "lineGap": 13.905762672424316,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#4a4a4a",
                "textLength": 111
              },
              {
                "text": "10% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 226
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 951,
            "top": 447.07999897003174,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#4a4a4a",
                "textLength": 162
              }
            ]
          },
          {
            "x": 949,
            "top": 500.01999855041504,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#4a4a4a",
                "textLength": 118
              }
            ]
          },
          {
            "x": 950.5,
            "top": 552.572265625,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "+38% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1422.5,
            "top": 292.49999809265137,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 225
              }
            ]
          },
          {
            "x": 1421.5,
            "top": 345.51999855041504,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51",
                "textLength": 119
              }
            ]
          },
          {
            "x": 1421,
            "top": 398.90576171875,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "78% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 150
              }
            ]
          },
          {
            "x": 1422.5,
            "top": 437.734130859375,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1419.5,
            "top": 1066.0899982452393,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800,
                "color": "#941100",
                "textLength": 115
              }
            ]
          },
          {
            "x": 1418,
            "top": 1112.7559986114502,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "revenue",
                "size": 36,
                "weight": 800,
                "color": "#941100",
                "textLength": 134
              }
            ]
          },
          {
            "x": 1417.5,
            "top": 1160.517499923706,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400,
                "color": "#941100",
                "textLength": 105
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1885,
            "top": 418.2159996032715,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#941100",
                "textLength": 166
              }
            ]
          },
          {
            "x": 1884,
            "top": 465.1160001754761,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#941100",
                "textLength": 152
              }
            ]
          },
          {
            "x": 1884,
            "top": 514.517499923706,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400,
                "color": "#941100",
                "textLength": 124
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1677.5,
            "top": 948.2399978637695,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 193
              }
            ]
          },
          {
            "x": 1677.5,
            "top": 1000.4999990463257,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "loss",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 71
              }
            ]
          },
          {
            "x": 1676.5,
            "top": 1053.0199966430664,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#941100",
                "textLength": 123
              }
            ]
          },
          {
            "x": 1676,
            "top": 1107.734130859375,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "(17%) margin",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 166
              }
            ]
          },
          {
            "x": 1677,
            "top": 1145.90576171875,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "+14pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 128
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2505.5,
            "top": 448.92399883270264,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "S&M",
                "size": 32,
                "weight": 800,
                "color": "#941100",
                "textLength": 65
              }
            ]
          },
          {
            "x": 2506,
            "top": 488.9164991378784,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100",
                "textLength": 114
              }
            ]
          },
          {
            "x": 2506,
            "top": 532.375,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "53% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 198
              }
            ]
          },
          {
            "x": 2506.5,
            "top": 572.734130859375,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "(6pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2507,
            "top": 790.9239988327026,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800,
                "color": "#941100",
                "textLength": 62
              }
            ]
          },
          {
            "x": 2506,
            "top": 830.9164991378784,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100",
                "textLength": 114
              }
            ]
          },
          {
            "x": 2506,
            "top": 874.375,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "30% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 198
              }
            ]
          },
          {
            "x": 2506.5,
            "top": 914.734130859375,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "(0pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2507,
            "top": 1111.9239988327026,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 800,
                "color": "#941100",
                "textLength": 64
              }
            ]
          },
          {
            "x": 2506,
            "top": 1151.9164991378784,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100",
                "textLength": 96
              }
            ]
          },
          {
            "x": 2506.5,
            "top": 1195.375,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "13% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 197
              }
            ]
          },
          {
            "x": 2506.5,
            "top": 1235.734130859375,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "(8pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "value": 407,
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Subscription",
      "notes": [
        "+37% Y/Y",
        "82% gross margin"
      ],
      "color": "#00aea2",
      "labelColor": "#00aea2"
    },
    {
      "id": "other",
      "value": 20,
      "col": 0,
      "order": 1,
      "type": "hub",
      "label": "Other",
      "notes": [
        "+56% Y/Y",
        "10% gross margin"
      ],
      "color": "#4a4a4a",
      "labelColor": "#4a4a4a"
    },
    {
      "id": "revenue",
      "value": 427,
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "notes": [
        "+38% Y/Y"
      ],
      "color": "#4a4a4a",
      "labelColor": "#4a4a4a"
    },
    {
      "id": "gross_profit",
      "value": 335,
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "notes": [
        "78% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "value": 92,
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_loss",
      "value": -72,
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "notes": [
        "(17%) margin",
        "+14pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_expenses",
      "value": 407,
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sm",
      "value": 224,
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "S&M",
      "notes": [
        "53% of revenue",
        "(6pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "rnd",
      "value": 127,
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "R&D",
      "notes": [
        "30% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "ga",
      "value": 56,
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "notes": [
        "13% of revenue",
        "(8pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 407,
      "sourceWidth": 297,
      "targetWidth": 297,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d3ce"
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 20,
      "sourceWidth": 15,
      "targetWidth": 15,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#a6a6a6"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 335,
      "sourceWidth": 244,
      "targetWidth": 244,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 92,
      "sourceWidth": 68,
      "targetWidth": 67,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 335,
      "sourceWidth": 244,
      "targetWidth": 244,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 72,
      "sourceWidth": 53,
      "targetWidth": 53,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 224,
      "sourceWidth": 164,
      "targetWidth": 164,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 127,
      "sourceWidth": 92,
      "targetWidth": 92,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 56,
      "sourceWidth": 41,
      "targetWidth": 41,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "operatingMetrics": [
    {
      "id": "subscription_arr",
      "value": "1.66",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.66B"
    },
    {
      "id": "cloud_arr",
      "value": "1.48",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.48B"
    },
    {
      "id": "dbnr",
      "value": "119",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 119%"
    },
    {
      "id": "customers_above_100k",
      "value": "3084",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "3,084"
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\">\n<g><rect x=\"23\" y=\"1113\" width=\"379\" height=\"159\" rx=\"40\" fill=\"#00aea2\"/>\n<text x=\"212.5\" y=\"1165\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Subscription ARR</text>\n<text data-operating-metric=\"subscription_arr\" x=\"212.5\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#fff\">$1.66B</text>\n<text x=\"212.5\" y=\"1248\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#fff\">+33% Y/Y</text></g>\n<g><rect x=\"415\" y=\"1108\" width=\"274\" height=\"159\" rx=\"40\" fill=\"#00aea2\"/>\n<text x=\"552\" y=\"1160\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Cloud ARR</text>\n<text data-operating-metric=\"cloud_arr\" x=\"552\" y=\"1202\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#fff\">$1.48B</text>\n<text x=\"552\" y=\"1243\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#fff\">+39% Y/Y</text></g>\n<g><rect x=\"702\" y=\"1105\" width=\"189\" height=\"165\" rx=\"40\" fill=\"#00a7d1\"/>\n<text x=\"796.5\" y=\"1157\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">DBNR</text>\n<text data-operating-metric=\"dbnr\" x=\"796.5\" y=\"1199\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#fff\">&gt; 119%</text>\n<text x=\"796.5\" y=\"1240\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#fff\">(1pp) Q/Q</text></g>\n<g><rect x=\"902\" y=\"1105\" width=\"379\" height=\"165\" rx=\"40\" fill=\"#00a7d1\"/>\n<text x=\"1091.5\" y=\"1157\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Customers &gt; $100K</text>\n<text data-operating-metric=\"customers_above_100k\" x=\"1091.5\" y=\"1199\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#fff\">3,084</text>\n<text x=\"1091.5\" y=\"1240\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#fff\">+23% Y/Y</text></g>\n<text x=\"118\" y=\"1312\" font-size=\"29\" font-weight=\"400\" fill=\"#777777\">ARR = Annual Recurring Revenue</text>\n<text x=\"108\" y=\"1351\" font-size=\"29\" font-weight=\"400\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text>\n</g>",
  "rasterAnnotations": [
    {
      "key": "rubrik-company-logo",
      "href": "data/assets/raster-annotations/rubrik/company-logo.png",
      "x": 611,
      "y": 277,
      "width": 575,
      "height": 176
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "ARR",
      "DBNR"
    ],
    "zh": {
      "name": "Rubrik · 2027 财年第二季度",
      "meta": {
        "title": "Rubrik 2027 财年第二季度利润表",
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "titleTextLength": 1790
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\">\n<g><rect x=\"23\" y=\"1113\" width=\"379\" height=\"159\" rx=\"40\" fill=\"#00aea2\"/>\n<text x=\"212.5\" y=\"1165\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">订阅 ARR</text>\n<text data-operating-metric=\"subscription_arr\" x=\"212.5\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#fff\">$1.66B</text>\n<text x=\"212.5\" y=\"1248\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#fff\">同比 +33%</text></g>\n<g><rect x=\"415\" y=\"1108\" width=\"274\" height=\"159\" rx=\"40\" fill=\"#00aea2\"/>\n<text x=\"552\" y=\"1160\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">云 ARR</text>\n<text data-operating-metric=\"cloud_arr\" x=\"552\" y=\"1202\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#fff\">$1.48B</text>\n<text x=\"552\" y=\"1243\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#fff\">同比 +39%</text></g>\n<g><rect x=\"702\" y=\"1105\" width=\"189\" height=\"165\" rx=\"40\" fill=\"#00a7d1\"/>\n<text x=\"796.5\" y=\"1157\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">DBNR</text>\n<text data-operating-metric=\"dbnr\" x=\"796.5\" y=\"1199\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#fff\">&gt; 119%</text>\n<text x=\"796.5\" y=\"1240\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\">环比 (1 个百分点)</text></g>\n<g><rect x=\"902\" y=\"1105\" width=\"379\" height=\"165\" rx=\"40\" fill=\"#00a7d1\"/>\n<text x=\"1091.5\" y=\"1157\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">客户数 &gt; $100K</text>\n<text data-operating-metric=\"customers_above_100k\" x=\"1091.5\" y=\"1199\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#fff\">3,084</text>\n<text x=\"1091.5\" y=\"1240\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#fff\">同比 +23%</text></g>\n<text x=\"118\" y=\"1312\" font-size=\"29\" font-weight=\"400\" fill=\"#777777\">ARR = 年度经常性收入</text>\n<text x=\"108\" y=\"1351\" font-size=\"29\" font-weight=\"400\" fill=\"#777777\">DBNR = 美元净留存率</text>\n</g>",
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +37%",
            "毛利率 82%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +56%",
            "毛利率 10%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +38%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 78%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (17%)",
            "同比 +14 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 53%",
            "同比 (6 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 30%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 13%",
            "同比 (8 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 481.5,
                "top": 384.51999855041504,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#00aea2"
                  }
                ]
              },
              {
                "x": 482.5,
                "top": 436.572265625,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 +37%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 264.0,
                "top": 591.3999996185303,
                "anchor": "middle",
                "lineGap": 13.505762100219727,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 40,
                    "weight": 800,
                    "color": "#00aea2"
                  },
                  {
                    "text": "毛利率 82%",
                    "size": 29,
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
                "x": 481,
                "top": 933.019998550415,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#4a4a4a"
                  }
                ]
              },
              {
                "x": 482.5,
                "top": 985.572265625,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 +56%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 273.25,
                "top": 997.9999990463257,
                "anchor": "middle",
                "lineGap": 13.905762672424316,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#4a4a4a"
                  },
                  {
                    "text": "毛利率 10%",
                    "size": 29,
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
                "x": 951,
                "top": 447.07999897003174,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#4a4a4a"
                  }
                ]
              },
              {
                "x": 949,
                "top": 500.01999855041504,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#4a4a4a"
                  }
                ]
              },
              {
                "x": 950.5,
                "top": 552.572265625,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 +38%",
                    "size": 29,
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
                "x": 1422.5,
                "top": 292.49999809265137,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1421.5,
                "top": 345.51999855041504,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1421,
                "top": 398.90576171875,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "利润率 78%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1422.5,
                "top": 437.734130859375,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1419.5,
                "top": 1066.0899982452393,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1418,
                "top": 1112.7559986114502,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1417.5,
                "top": 1160.517499923706,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1885,
                "top": 418.2159996032715,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1884,
                "top": 465.1160001754761,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1884,
                "top": 514.517499923706,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1677.5,
                "top": 948.2399978637695,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1677.5,
                "top": 1000.4999990463257,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1676.5,
                "top": 1053.0199966430664,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1676,
                "top": 1107.734130859375,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "利润率 (17%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1677,
                "top": 1145.90576171875,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 +14 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2505.5,
                "top": 448.92399883270264,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2506,
                "top": 488.9164991378784,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2506,
                "top": 532.375,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "占收入 53%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2506.5,
                "top": 572.734130859375,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 29,
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
                "x": 2507,
                "top": 790.9239988327026,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2506,
                "top": 830.9164991378784,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2506,
                "top": 874.375,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "占收入 30%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2506.5,
                "top": 914.734130859375,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
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
                "x": 2507,
                "top": 1111.9239988327026,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2506,
                "top": 1151.9164991378784,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2506.5,
                "top": 1195.375,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "占收入 13%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2506.5,
                "top": 1235.734130859375,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 (8 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
