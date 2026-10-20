(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "roblox-q1-fy24",
  "name": "Roblox · Q1 FY24",
  "company": "Roblox",
  "meta": {
    "company": "Roblox",
    "title": "Roblox Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roblox-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.91666666666666,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2148.7060546875,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#6f7073",
    "noteColor": "#6f7073",
    "palette": {
      "source": {
        "node": "#11a5ed",
        "label": "#11a5ed"
      },
      "hub": {
        "node": "#11a5ed",
        "label": "#11a5ed"
      },
      "profit": {
        "node": "#289f24",
        "label": "#098f43"
      },
      "cost": {
        "node": "#d50000",
        "label": "#8b1000"
      }
    },
    "linkTint": {
      "source": "#7ecaf0",
      "hub": "#7ecaf0",
      "profit": "#99cb96",
      "cost": "#e38184"
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 30,
      "value": 29,
      "note": 22,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 510,
      "notes": [
        "+20% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 146,
      "notes": [
        "+23% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 85,
      "notes": [
        "+31% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2
    },
    {
      "id": "rest_of_world",
      "label": "Rest of world",
      "value": 61,
      "notes": [
        "+22% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 3
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 801,
      "notes": [
        "+22% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 622,
      "notes": [
        "78% margin",
        "(1pp) Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 0
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 179,
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 1
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -302,
      "notes": [
        "(38%) margin",
        "+6pp Y/Y"
      ],
      "type": "cost",
      "col": 3,
      "order": 1
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 925,
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 0
    },
    {
      "id": "developer_fees",
      "label": "Developer fees",
      "value": 202,
      "notes": [
        "25% of revenue",
        "(3pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 0
    },
    {
      "id": "infrastructure",
      "label": "Infrastructure",
      "value": 227,
      "notes": [
        "28% of revenue",
        "(4pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 1
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 362,
      "notes": [
        "45% of revenue",
        "+3pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 2
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 98,
      "notes": [
        "12% of revenue",
        "(3pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 3
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 36,
      "notes": [
        "4% of revenue",
        "+0pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 4
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 510,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 190.10416666666666,
      "targetWidth": 190.10416666666666,
      "y0": 419.2708333333333,
      "y1": 665.3645833333333
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 146,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 55.98958333333333,
      "targetWidth": 54.6875,
      "y0": 682.9427083333333,
      "y1": 787.7604166666666
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 85,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 32.55208333333333,
      "targetWidth": 32.55208333333333,
      "y0": 849.609375,
      "y1": 831.3802083333333
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 61,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 22.135416666666664,
      "targetWidth": 23.4375,
      "y0": 1017.5781249999999,
      "y1": 859.375
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 622,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 233.07291666666666,
      "targetWidth": 233.07291666666666,
      "y0": 686.8489583333333,
      "y1": 580.078125
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 179,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 67.70833333333333,
      "targetWidth": 67.70833333333333,
      "y0": 837.2395833333333,
      "y1": 1000.0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 622,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 233.07291666666666,
      "targetWidth": 233.07291666666666,
      "y0": 580.078125,
      "y1": 686.8489583333333
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 302,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 113.28125,
      "targetWidth": 113.28125,
      "y0": 912.109375,
      "y1": 860.0260416666666
    },
    {
      "source": "operating_expenses",
      "target": "developer_fees",
      "value": 202,
      "sourceOrder": 8,
      "targetOrder": 0,
      "sourceWidth": 75.52083333333333,
      "targetWidth": 75.52083333333333,
      "y0": 608.0729166666666,
      "y1": 361.97916666666663
    },
    {
      "source": "operating_expenses",
      "target": "infrastructure",
      "value": 227,
      "sourceOrder": 9,
      "targetOrder": 0,
      "sourceWidth": 84.63541666666666,
      "targetWidth": 84.63541666666666,
      "y0": 688.1510416666666,
      "y1": 580.078125
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 362,
      "sourceOrder": 10,
      "targetOrder": 0,
      "sourceWidth": 135.41666666666666,
      "targetWidth": 134.11458333333331,
      "y0": 798.1770833333333,
      "y1": 804.0364583333333
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 98,
      "sourceOrder": 11,
      "targetOrder": 0,
      "sourceWidth": 36.45833333333333,
      "targetWidth": 36.45833333333333,
      "y0": 884.1145833333333,
      "y1": 1032.5520833333333
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 36,
      "sourceOrder": 12,
      "targetOrder": 0,
      "sourceWidth": 14.322916666666666,
      "targetWidth": 13.020833333333332,
      "y0": 909.5052083333333,
      "y1": 1200.5208333333333
    }
  ],
  "layout": {
    "scale": 0.3755071785268414,
    "nodes": {
      "north_america": {
        "x": 390.673828125,
        "y": 324.21875,
        "width": 72.92578125,
        "height": 190.10416666666666
      },
      "europe": {
        "x": 390.673828125,
        "y": 654.9479166666666,
        "width": 72.92578125,
        "height": 55.98958333333333
      },
      "apac": {
        "x": 390.673828125,
        "y": 833.3333333333333,
        "width": 72.92578125,
        "height": 32.55208333333333
      },
      "rest_of_world": {
        "x": 390.673828125,
        "y": 1006.5104166666666,
        "width": 72.92578125,
        "height": 22.135416666666664
      },
      "revenue": {
        "x": 855.57568359375,
        "y": 570.3125,
        "width": 72.92578125,
        "height": 300.78125
      },
      "gross_profit": {
        "x": 1324.38427734375,
        "y": 463.54166666666663,
        "width": 72.92578125,
        "height": 233.07291666666666
      },
      "cost_of_revenue": {
        "x": 1326.98876953125,
        "y": 966.1458333333333,
        "width": 72.92578125,
        "height": 67.70833333333333
      },
      "operating_loss": {
        "x": 1579.62451171875,
        "y": 855.46875,
        "width": 72.92578125,
        "height": 113.28125
      },
      "operating_expenses": {
        "x": 1794.4951171875,
        "y": 570.3125,
        "width": 72.92578125,
        "height": 346.35416666666663
      },
      "developer_fees": {
        "x": 2259.39697265625,
        "y": 324.21875,
        "width": 72.92578125,
        "height": 75.52083333333333
      },
      "infrastructure": {
        "x": 2259.39697265625,
        "y": 537.7604166666666,
        "width": 72.92578125,
        "height": 84.63541666666666
      },
      "rnd": {
        "x": 2259.39697265625,
        "y": 736.9791666666666,
        "width": 72.92578125,
        "height": 134.11458333333331
      },
      "ga": {
        "x": 2259.39697265625,
        "y": 1014.3229166666666,
        "width": 72.92578125,
        "height": 36.45833333333333
      },
      "sm": {
        "x": 2259.39697265625,
        "y": 1194.0104166666665,
        "width": 72.92578125,
        "height": 13.020833333333332
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 231.77083333333331,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 372.4423828125,
            "top": 372.3958333333333,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "North",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "America",
                "size": 39.0625,
                "weight": 400
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 562.5,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 372.4423828125,
            "top": 662.109375,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Europe",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 744.7916666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+31% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 372.4423828125,
            "top": 828.7760416666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "APAC",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 916.6666666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 372.4423828125,
            "top": 996.7447916666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Rest of world",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 892.03857421875,
            "top": 427.0833333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 28.645833333333332,
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
            "x": 1360.84716796875,
            "top": 276.04166666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "78% margin",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.645833333333332,
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
            "x": 1363.45166015625,
            "top": 1054.6875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.760416666666664,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1616.08740234375,
            "top": 984.375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 37.760416666666664,
                "weight": 700
              },
              {
                "text": "loss",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(38%) margin",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 28.645833333333332,
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
            "x": 1830.9580078125,
            "top": 416.66666666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 37.760416666666664,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "developer_fees": {
        "blocks": [
          {
            "x": 2465.15185546875,
            "top": 283.85416666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Developer fees",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "infrastructure": {
        "blocks": [
          {
            "x": 2465.15185546875,
            "top": 518.2291666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Infrastructure",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "28% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 28.645833333333332,
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
            "x": 2465.15185546875,
            "top": 744.7916666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "45% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.645833333333332,
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
            "x": 2465.15185546875,
            "top": 984.375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.645833333333332,
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
            "x": 2465.15185546875,
            "top": 1171.875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "4% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Arial,sans-serif\"><g transform=\"translate(34 -1) scale(0.72)\"><g transform=\"translate(665 306)\" data-typography-role=\"brand\">\n      <text x=\"0\" y=\"79\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\" fill=\"#000000\">R</text>\n      <g transform=\"translate(107 10) rotate(12 37 37)\">\n        <rect x=\"0\" y=\"0\" width=\"74\" height=\"74\" fill=\"#000000\"/>\n        <rect x=\"26\" y=\"26\" width=\"20\" height=\"20\" fill=\"#efefef\"/>\n      </g>\n      <text x=\"188\" y=\"79\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\" fill=\"#000000\">BLOX</text>\n    </g>\n      \n    </g><g transform=\"translate(27 16) scale(0.735)\"><g transform=\"translate(720 927)\" stroke=\"#2b2118\" stroke-width=\"2.3\" stroke-linejoin=\"round\">\n      <g transform=\"translate(0 27)\">\n        <rect x=\"0\" y=\"26\" width=\"42\" height=\"62\" rx=\"6\" fill=\"#b91510\"/>\n        <circle cx=\"21\" cy=\"14\" r=\"19\" fill=\"#d28b16\"/>\n        <path d=\"M4 40 L39 66 M38 40 L6 72\" stroke=\"#ffd33f\" stroke-width=\"6\"/>\n        <rect x=\"7\" y=\"84\" width=\"12\" height=\"39\" fill=\"#c27a0b\"/>\n        <rect x=\"25\" y=\"84\" width=\"12\" height=\"39\" fill=\"#c27a0b\"/>\n        <path d=\"M43 0 L52 85\" stroke=\"#c89220\" stroke-width=\"4\"/>\n      </g>\n      <g transform=\"translate(65 10)\">\n        <rect x=\"0\" y=\"30\" width=\"58\" height=\"74\" rx=\"5\" fill=\"#a76b30\"/>\n        <rect x=\"10\" y=\"6\" width=\"42\" height=\"36\" rx=\"5\" fill=\"#c58a45\"/>\n        <circle cx=\"18\" cy=\"46\" r=\"3\" fill=\"#111\"/>\n        <circle cx=\"38\" cy=\"46\" r=\"3\" fill=\"#111\"/>\n        <path d=\"M16 67 H42\" stroke=\"#1c1c1c\" stroke-width=\"5\"/>\n        <rect x=\"5\" y=\"101\" width=\"13\" height=\"43\" fill=\"#8c8c8c\"/>\n        <rect x=\"39\" y=\"101\" width=\"13\" height=\"43\" fill=\"#8c8c8c\"/>\n      </g>\n      <g transform=\"translate(145 0)\">\n        <rect x=\"22\" y=\"55\" width=\"55\" height=\"80\" rx=\"10\" fill=\"#3b3b3b\"/>\n        <circle cx=\"50\" cy=\"35\" r=\"30\" fill=\"#ffd08b\"/>\n        <path d=\"M20 18 C35 0 64 0 78 18 L72 28 C58 19 40 18 28 29Z\" fill=\"#f7c02b\"/>\n        <path d=\"M38 41 Q50 54 63 41\" fill=\"none\" stroke=\"#3f2719\" stroke-width=\"3\"/>\n        <rect x=\"28\" y=\"131\" width=\"17\" height=\"55\" fill=\"#2d5d8f\"/>\n        <rect x=\"56\" y=\"131\" width=\"17\" height=\"55\" fill=\"#244f7c\"/>\n        <path d=\"M14 78 C0 63 0 44 17 37\" fill=\"none\" stroke=\"#3b3b3b\" stroke-width=\"15\"/>\n        <path d=\"M76 28 L95 4\" stroke=\"#666\" stroke-width=\"7\"/>\n      </g>\n      <g transform=\"translate(244 37)\">\n        <rect x=\"4\" y=\"45\" width=\"53\" height=\"67\" rx=\"7\" fill=\"#5a4f55\"/>\n        <circle cx=\"31\" cy=\"27\" r=\"27\" fill=\"#ffd48b\"/>\n        <path d=\"M4 19 C26 -8 50 4 58 25 C45 18 24 17 6 29Z\" fill=\"#d44725\"/>\n        <path d=\"M16 36 Q31 51 46 36\" fill=\"none\" stroke=\"#6b2b22\" stroke-width=\"3\"/>\n        <rect x=\"9\" y=\"109\" width=\"16\" height=\"45\" fill=\"#5b4a3a\"/>\n        <rect x=\"37\" y=\"109\" width=\"16\" height=\"45\" fill=\"#5b4a3a\"/>\n        <path d=\"M55 46 L76 25\" stroke=\"#b7b7b7\" stroke-width=\"5\"/>\n      </g>\n      <g transform=\"translate(319 52)\">\n        <rect x=\"7\" y=\"38\" width=\"58\" height=\"70\" rx=\"7\" fill=\"#1379d3\"/>\n        <rect x=\"15\" y=\"0\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#ffe12f\"/>\n        <circle cx=\"29\" cy=\"21\" r=\"3\" fill=\"#1c1c1c\"/>\n        <circle cx=\"46\" cy=\"21\" r=\"3\" fill=\"#1c1c1c\"/>\n        <path d=\"M29 32 Q38 24 47 32\" fill=\"none\" stroke=\"#1c1c1c\" stroke-width=\"3\"/>\n        <rect x=\"11\" y=\"104\" width=\"20\" height=\"57\" fill=\"#2db23d\"/>\n        <rect x=\"41\" y=\"104\" width=\"20\" height=\"57\" fill=\"#36a933\"/>\n        <path d=\"M64 46 L90 66\" stroke=\"#f3c22e\" stroke-width=\"14\"/>\n      </g>\n    </g>\n      \n    </g><g><rect x=\"35\" y=\"894\" width=\"123\" height=\"120\" rx=\"28\" fill=\"#00a6ef\"/><text x=\"96.5\" y=\"934\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">DAU</text><text data-operating-metric=\"dau\" x=\"96.5\" y=\"968\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">78M</text><text x=\"96.5\" y=\"998\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+15% Y/Y</text></g><g><rect x=\"162\" y=\"891\" width=\"240\" height=\"126\" rx=\"28\" fill=\"#00a6ef\"/><text x=\"282.0\" y=\"931\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">DAU over 13</text><text data-operating-metric=\"dau_over_13\" x=\"282.0\" y=\"965\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">45M</text><text x=\"282.0\" y=\"995\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+22% Y/Y</text></g><g><rect x=\"406\" y=\"891\" width=\"271\" height=\"126\" rx=\"28\" fill=\"#00a6ef\"/><text x=\"541.5\" y=\"931\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Hours Engaged</text><text data-operating-metric=\"hours_engaged\" x=\"541.5\" y=\"965\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">16.7B</text><text x=\"541.5\" y=\"995\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+15% Y/Y</text></g><g><rect x=\"681\" y=\"891\" width=\"147\" height=\"126\" rx=\"28\" fill=\"#00a6ef\"/><text x=\"754.5\" y=\"931\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Bookings</text><text data-operating-metric=\"bookings\" x=\"754.5\" y=\"965\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">$924M</text><text x=\"754.5\" y=\"995\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+19% Y/Y</text></g><text x=\"320\" y=\"1058\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">DAU = Daily Active Users</text><text x=\"130\" y=\"1105\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g></g>",
  "operatingMetrics": [
    {
      "id": "dau",
      "label": "DAU",
      "value": "78000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "78M",
      "basis": "unspecified",
      "notes": [
        "+15% Y/Y"
      ],
      "quote": "DAU\n78M\n+15% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          46,
          1164,
          160,
          156
        ]
      }
    },
    {
      "id": "dau_over_13",
      "label": "DAU over 13",
      "value": "45000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "45M",
      "basis": "unspecified",
      "notes": [
        "+22% Y/Y"
      ],
      "quote": "DAU over 13\n45M\n+22% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          211,
          1160,
          313,
          164
        ]
      }
    },
    {
      "id": "hours_engaged",
      "label": "Hours Engaged",
      "value": "16700000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "16.7B",
      "basis": "unspecified",
      "notes": [
        "+15% Y/Y"
      ],
      "quote": "Hours Engaged\n16.7B\n+15% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          529,
          1160,
          353,
          164
        ]
      }
    },
    {
      "id": "bookings",
      "label": "Bookings",
      "value": "924",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$924M",
      "basis": "unspecified",
      "notes": [
        "+19% Y/Y"
      ],
      "quote": "Bookings\n$924M\n+19% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          887,
          1160,
          191,
          164
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Roblox · 2024 财年第一季度",
      "meta": {
        "title": "Roblox 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月"
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +20%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +23%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +31%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +22%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +22%"
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
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (38%)",
            "同比 +6 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "developer_fees": {
          "label": "开发者费用",
          "notes": [
            "占收入 25%",
            "同比 (3 个百分点)"
          ]
        },
        "infrastructure": {
          "label": "基础设施",
          "notes": [
            "占收入 28%",
            "同比 (4 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 45%",
            "同比 +3 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (3 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 4%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.0625,
                    "weight": 700
                  }
                ],
                "top": 399.7395833333333
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +31%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "亚太",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "lines": [
                  {
                    "text": "世界其他地区",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 28.645833333333332,
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
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "利润率 78%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.645833333333332,
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
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.760416666666664,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.760416666666664,
                    "weight": 700
                  },
                  {
                    "text": "亏损",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "利润率 (38%)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28.645833333333332,
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
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.760416666666664,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "developer_fees": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "开发者费用",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "infrastructure": {
            "blocks": [
              {
                "lines": [
                  {
                    "text": "基础设施",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 28%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 28.645833333333332,
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
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 45%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.645833333333332,
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
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.645833333333332,
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
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 4%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Arial,sans-serif\"><g transform=\"translate(34 -1) scale(0.72)\"><g transform=\"translate(665 306)\" data-typography-role=\"brand\">\n      <text x=\"0\" y=\"79\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\" fill=\"#000000\">R</text>\n      <g transform=\"translate(107 10) rotate(12 37 37)\">\n        <rect x=\"0\" y=\"0\" width=\"74\" height=\"74\" fill=\"#000000\"/>\n        <rect x=\"26\" y=\"26\" width=\"20\" height=\"20\" fill=\"#efefef\"/>\n      </g>\n      <text x=\"188\" y=\"79\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\" fill=\"#000000\">BLOX</text>\n    </g>\n      \n    </g><g transform=\"translate(27 16) scale(0.735)\"><g transform=\"translate(720 927)\" stroke=\"#2b2118\" stroke-width=\"2.3\" stroke-linejoin=\"round\">\n      <g transform=\"translate(0 27)\">\n        <rect x=\"0\" y=\"26\" width=\"42\" height=\"62\" rx=\"6\" fill=\"#b91510\"/>\n        <circle cx=\"21\" cy=\"14\" r=\"19\" fill=\"#d28b16\"/>\n        <path d=\"M4 40 L39 66 M38 40 L6 72\" stroke=\"#ffd33f\" stroke-width=\"6\"/>\n        <rect x=\"7\" y=\"84\" width=\"12\" height=\"39\" fill=\"#c27a0b\"/>\n        <rect x=\"25\" y=\"84\" width=\"12\" height=\"39\" fill=\"#c27a0b\"/>\n        <path d=\"M43 0 L52 85\" stroke=\"#c89220\" stroke-width=\"4\"/>\n      </g>\n      <g transform=\"translate(65 10)\">\n        <rect x=\"0\" y=\"30\" width=\"58\" height=\"74\" rx=\"5\" fill=\"#a76b30\"/>\n        <rect x=\"10\" y=\"6\" width=\"42\" height=\"36\" rx=\"5\" fill=\"#c58a45\"/>\n        <circle cx=\"18\" cy=\"46\" r=\"3\" fill=\"#111\"/>\n        <circle cx=\"38\" cy=\"46\" r=\"3\" fill=\"#111\"/>\n        <path d=\"M16 67 H42\" stroke=\"#1c1c1c\" stroke-width=\"5\"/>\n        <rect x=\"5\" y=\"101\" width=\"13\" height=\"43\" fill=\"#8c8c8c\"/>\n        <rect x=\"39\" y=\"101\" width=\"13\" height=\"43\" fill=\"#8c8c8c\"/>\n      </g>\n      <g transform=\"translate(145 0)\">\n        <rect x=\"22\" y=\"55\" width=\"55\" height=\"80\" rx=\"10\" fill=\"#3b3b3b\"/>\n        <circle cx=\"50\" cy=\"35\" r=\"30\" fill=\"#ffd08b\"/>\n        <path d=\"M20 18 C35 0 64 0 78 18 L72 28 C58 19 40 18 28 29Z\" fill=\"#f7c02b\"/>\n        <path d=\"M38 41 Q50 54 63 41\" fill=\"none\" stroke=\"#3f2719\" stroke-width=\"3\"/>\n        <rect x=\"28\" y=\"131\" width=\"17\" height=\"55\" fill=\"#2d5d8f\"/>\n        <rect x=\"56\" y=\"131\" width=\"17\" height=\"55\" fill=\"#244f7c\"/>\n        <path d=\"M14 78 C0 63 0 44 17 37\" fill=\"none\" stroke=\"#3b3b3b\" stroke-width=\"15\"/>\n        <path d=\"M76 28 L95 4\" stroke=\"#666\" stroke-width=\"7\"/>\n      </g>\n      <g transform=\"translate(244 37)\">\n        <rect x=\"4\" y=\"45\" width=\"53\" height=\"67\" rx=\"7\" fill=\"#5a4f55\"/>\n        <circle cx=\"31\" cy=\"27\" r=\"27\" fill=\"#ffd48b\"/>\n        <path d=\"M4 19 C26 -8 50 4 58 25 C45 18 24 17 6 29Z\" fill=\"#d44725\"/>\n        <path d=\"M16 36 Q31 51 46 36\" fill=\"none\" stroke=\"#6b2b22\" stroke-width=\"3\"/>\n        <rect x=\"9\" y=\"109\" width=\"16\" height=\"45\" fill=\"#5b4a3a\"/>\n        <rect x=\"37\" y=\"109\" width=\"16\" height=\"45\" fill=\"#5b4a3a\"/>\n        <path d=\"M55 46 L76 25\" stroke=\"#b7b7b7\" stroke-width=\"5\"/>\n      </g>\n      <g transform=\"translate(319 52)\">\n        <rect x=\"7\" y=\"38\" width=\"58\" height=\"70\" rx=\"7\" fill=\"#1379d3\"/>\n        <rect x=\"15\" y=\"0\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#ffe12f\"/>\n        <circle cx=\"29\" cy=\"21\" r=\"3\" fill=\"#1c1c1c\"/>\n        <circle cx=\"46\" cy=\"21\" r=\"3\" fill=\"#1c1c1c\"/>\n        <path d=\"M29 32 Q38 24 47 32\" fill=\"none\" stroke=\"#1c1c1c\" stroke-width=\"3\"/>\n        <rect x=\"11\" y=\"104\" width=\"20\" height=\"57\" fill=\"#2db23d\"/>\n        <rect x=\"41\" y=\"104\" width=\"20\" height=\"57\" fill=\"#36a933\"/>\n        <path d=\"M64 46 L90 66\" stroke=\"#f3c22e\" stroke-width=\"14\"/>\n      </g>\n    </g>\n      \n    </g><g><rect x=\"35\" y=\"894\" width=\"123\" height=\"120\" rx=\"28\" fill=\"#00a6ef\"/><text x=\"96.5\" y=\"934\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">日活用户</text><text data-operating-metric=\"dau\" x=\"96.5\" y=\"968\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">78M</text><text x=\"96.5\" y=\"998\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">同比 +15%</text></g><g><rect x=\"162\" y=\"891\" width=\"240\" height=\"126\" rx=\"28\" fill=\"#00a6ef\"/><text x=\"282.0\" y=\"931\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">13 岁以上日活用户</text><text data-operating-metric=\"dau_over_13\" x=\"282.0\" y=\"965\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">45M</text><text x=\"282.0\" y=\"995\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">同比 +22%</text></g><g><rect x=\"406\" y=\"891\" width=\"271\" height=\"126\" rx=\"28\" fill=\"#00a6ef\"/><text x=\"541.5\" y=\"931\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">参与时长</text><text data-operating-metric=\"hours_engaged\" x=\"541.5\" y=\"965\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">16.7B</text><text x=\"541.5\" y=\"995\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">同比 +15%</text></g><g><rect x=\"681\" y=\"891\" width=\"147\" height=\"126\" rx=\"28\" fill=\"#00a6ef\"/><text x=\"754.5\" y=\"931\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">预订额</text><text data-operating-metric=\"bookings\" x=\"754.5\" y=\"965\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">$924M</text><text x=\"754.5\" y=\"995\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">同比 +19%</text></g><text x=\"320\" y=\"1058\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">DAU = 日活跃用户</text><text x=\"130\" y=\"1105\" font-size=\"30\" font-weight=\"700\">来源：季度财报</text></g></g>"
    }
  }
});})();
