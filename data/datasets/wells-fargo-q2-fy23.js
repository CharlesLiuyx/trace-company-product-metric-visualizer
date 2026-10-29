window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "wells-fargo-q2-fy23",
  "name": "Wells Fargo · Q2 FY23",
  "company": "Wells Fargo",
  "meta": {
    "company": "Wells Fargo",
    "title": "Wells Fargo Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/wells-fargo-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.91666666666666,
    "titleSize": 122.39583333333333,
    "titleWeight": 800,
    "titleTextLength": 2445.6181640625,
    "hidePeriodStamp": true,
    "logoWidth": 235.70654296875,
    "logoHeight": 253.90624999999997,
    "logoY": 239.58333333333331,
    "logoViewBox": "0 0 234 252",
    "logoSvg": "<rect width=\"234\" height=\"252\" fill=\"#d71e28\"/><rect y=\"233\" width=\"234\" height=\"19\" fill=\"#ffcd41\"/><text x=\"18\" y=\"105\" fill=\"#ffffff\" font-family=\"Georgia,Times New Roman,serif\" font-size=\"49\" font-weight=\"700\" textLength=\"197\" lengthAdjust=\"spacingAndGlyphs\">WELLS</text><text x=\"18\" y=\"162\" fill=\"#ffffff\" font-family=\"Georgia,Times New Roman,serif\" font-size=\"49\" font-weight=\"700\" textLength=\"197\" lengthAdjust=\"spacingAndGlyphs\">FARGO</text>",
    "logoX": 781.34765625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#666666",
        "label": "#666666"
      },
      "hub": {
        "node": "#666666",
        "label": "#666666"
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
      "source": "#b3b3b3",
      "hub": "#b3b3b3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0625,
      "value": 39.0625,
      "note": 27.34375,
      "lineGap": 7.8125
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122.4111\" y=\"256.5104\" font-size=\"39.0625\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><rect x=\"24.7427\" y=\"1191.4062\" width=\"242.2178\" height=\"148.4375\" rx=\"29.9479\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"145.8516\" y=\"1244.7917\" font-size=\"27.3438\" font-weight=\"800\">CET1 ratio</text><text x=\"145.8516\" y=\"1283.8542\" font-size=\"27.3438\" data-operating-metric=\"cet1\">10.7%</text><text x=\"145.8516\" y=\"1315.1042\" font-size=\"22.1354\">+0.3pp Y/Y</text></g><rect x=\"274.7739\" y=\"1191.4062\" width=\"372.4424\" height=\"148.4375\" rx=\"29.9479\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"460.9951\" y=\"1244.7917\" font-size=\"27.3438\" font-weight=\"800\">Average deposits</text><text x=\"460.9951\" y=\"1283.8542\" font-size=\"27.3438\" data-operating-metric=\"deposits\">$1.3T</text><text x=\"460.9951\" y=\"1315.1042\" font-size=\"22.1354\">(6%) Y/Y</text></g><rect x=\"656.3320\" y=\"1191.4062\" width=\"429.7412\" height=\"148.4375\" rx=\"29.9479\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"871.2026\" y=\"1244.7917\" font-size=\"27.3438\" font-weight=\"800\">Average loans and leases</text><text x=\"871.2026\" y=\"1283.8542\" font-size=\"27.3438\" data-operating-metric=\"loans\">$0.9T</text><text x=\"871.2026\" y=\"1315.1042\" font-size=\"22.1354\">+2% Y/Y</text></g><text x=\"429.7412\" y=\"1388.0208\" text-anchor=\"middle\" font-size=\"27.3438\" fill=\"#666666\">CET1 = Common Equity Tier 1</text><text x=\"171.8965\" y=\"1436.1979\" font-size=\"39.0625\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "layout": {
    "scale": 15.885416666666664,
    "nodes": {
      "consumer_banking": {
        "x": 390.673828125,
        "y": 404.94791666666663,
        "width": 72.92578125,
        "height": 151.04166666666666
      },
      "commercial_banking": {
        "x": 390.673828125,
        "y": 683.59375,
        "width": 72.92578125,
        "height": 53.385416666666664
      },
      "corporate_investment_banking": {
        "x": 390.673828125,
        "y": 868.4895833333333,
        "width": 72.92578125,
        "height": 75.52083333333333
      },
      "wealth_investment_management": {
        "x": 390.673828125,
        "y": 1066.40625,
        "width": 72.92578125,
        "height": 58.59375
      },
      "segment_revenue": {
        "x": 858.18017578125,
        "y": 555.9895833333333,
        "width": 72.92578125,
        "height": 338.54166666666663
      },
      "revenue": {
        "x": 1323.08203125,
        "y": 591.1458333333333,
        "width": 72.92578125,
        "height": 329.4270833333333
      },
      "other": {
        "x": 1324.38427734375,
        "y": 1071.6145833333333,
        "width": 72.92578125,
        "height": 9.114583333333332
      },
      "pretax_income": {
        "x": 1790.58837890625,
        "y": 464.84375,
        "width": 71.62353515625,
        "height": 92.44791666666666
      },
      "noninterest_expenses": {
        "x": 1790.58837890625,
        "y": 768.2291666666666,
        "width": 71.62353515625,
        "height": 207.03125
      },
      "operating_expenses": {
        "x": 1798.40185546875,
        "y": 1177.0833333333333,
        "width": 71.62353515625,
        "height": 27.34375
      },
      "net_income": {
        "x": 2259.39697265625,
        "y": 324.21875,
        "width": 72.92578125,
        "height": 78.125
      },
      "tax": {
        "x": 2259.39697265625,
        "y": 455.72916666666663,
        "width": 72.92578125,
        "height": 15.625
      },
      "personnel": {
        "x": 2259.39697265625,
        "y": 519.53125,
        "width": 72.92578125,
        "height": 138.02083333333331
      },
      "technology": {
        "x": 2259.39697265625,
        "y": 736.9791666666666,
        "width": 72.92578125,
        "height": 15.625
      },
      "occupancy": {
        "x": 2259.39697265625,
        "y": 835.9375,
        "width": 72.92578125,
        "height": 11.71875
      },
      "operating_losses": {
        "x": 2259.39697265625,
        "y": 938.8020833333333,
        "width": 72.92578125,
        "height": 3.90625
      },
      "leases": {
        "x": 2259.39697265625,
        "y": 1044.2708333333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "advertising": {
        "x": 2259.39697265625,
        "y": 1134.1145833333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "professional_fees": {
        "x": 2259.39697265625,
        "y": 1233.0729166666665,
        "width": 72.92578125,
        "height": 20.833333333333332
      },
      "other_expenses": {
        "x": 2259.39697265625,
        "y": 1350.2604166666665,
        "width": 72.92578125,
        "height": 13.020833333333332
      }
    },
    "labels": {
      "consumer_banking": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 307.29166666666663,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          },
          {
            "x": 427.13671875,
            "top": 361.97916666666663,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "+11% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 354.2109375,
            "top": 412.76041666666663,
            "anchor": "end",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Consumer",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "20% net margin",
                "size": 27.34375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "commercial_banking": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 585.9375,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          },
          {
            "x": 427.13671875,
            "top": 640.625,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "+35% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 354.2109375,
            "top": 606.7708333333333,
            "anchor": "end",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "38% net margin",
                "size": 27.34375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "corporate_investment_banking": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 774.7395833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          },
          {
            "x": 427.13671875,
            "top": 829.4270833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "+30% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 354.2109375,
            "top": 778.6458333333333,
            "anchor": "end",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Corporate &",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Investment",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "26% net margin",
                "size": 27.34375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "wealth_investment_management": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 976.5625,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          },
          {
            "x": 427.13671875,
            "top": 1022.25,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "(2%) Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          },
          {
            "x": 354.2109375,
            "top": 989.5833333333333,
            "anchor": "end",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Wealth &",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Investment",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "13% net margin",
                "size": 27.34375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "segment_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1359.544921875,
            "top": 438.8020833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Revenue",
                "size": 40.36458333333333,
                "weight": 800
              }
            ]
          },
          {
            "x": 1359.544921875,
            "top": 492.1875,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          },
          {
            "x": 1359.544921875,
            "top": 545.5729166666666,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "+20% Y/Y",
                "size": 27.34375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 1359.544921875,
            "top": 1092.4479166666665,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "All Other",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "(noninterest loss)",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1359.544921875,
            "top": 1194.0104166666665,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1825.7490234375,
            "top": 355.46875,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1825.7490234375,
            "top": 406.25,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "noninterest_expenses": {
        "blocks": [
          {
            "x": 1825.7490234375,
            "top": 986.9791666666666,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Noninterest",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1825.7490234375,
            "top": 1088.5416666666665,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
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
            "x": 1833.5625,
            "top": 1216.1458333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Provision for",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1833.5625,
            "top": 1317.7083333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 242.1875,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Net income",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2484.685546875,
            "top": 292.96875,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2484.685546875,
            "top": 350.26041666666663,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "+57% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "$1.25 EPS",
                "size": 27.34375,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 429.6875,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2484.685546875,
            "top": 473.9583333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 544.2708333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Personnel",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2491.19677734375,
            "top": 588.5416666666666,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 700.5208333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Technology",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2492.4990234375,
            "top": 744.7916666666666,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 803.3854166666666,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2492.4990234375,
            "top": 847.65625,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_losses": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 899.7395833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Operating losses",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 944.0104166666666,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "leases": {
        "blocks": [
          {
            "x": 2360.97216796875,
            "top": 1018.2291666666666,
            "anchor": "start",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Leases ($0.2B)",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 2360.97216796875,
            "top": 1114.5833333333333,
            "anchor": "start",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Advertising ($0.2B)",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 1204.4270833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Professional fees",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2495.103515625,
            "top": 1248.6979166666665,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2360.97216796875,
            "top": 1332.03125,
            "anchor": "start",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Other ($0.8B)",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "consumer_banking",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Consumer",
        "Banking"
      ],
      "value": 9.5,
      "notes": [
        "+11% Y/Y",
        "20% net margin"
      ],
      "valueText": "$9.5B"
    },
    {
      "id": "commercial_banking",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Commercial",
        "Banking"
      ],
      "value": 3.4,
      "notes": [
        "+35% Y/Y",
        "38% net margin"
      ],
      "valueText": "$3.4B"
    },
    {
      "id": "corporate_investment_banking",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Corporate &",
        "Investment",
        "Banking"
      ],
      "value": 4.6,
      "notes": [
        "+30% Y/Y",
        "26% net margin"
      ],
      "valueText": "$4.6B"
    },
    {
      "id": "wealth_investment_management",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Wealth &",
        "Investment",
        "Management"
      ],
      "value": 3.6,
      "notes": [
        "(2%) Y/Y",
        "13% net margin"
      ],
      "valueText": "$3.6B"
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 21.1
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 20.5,
      "notes": [
        "+20% Y/Y"
      ],
      "valueText": "$20.5B"
    },
    {
      "id": "other",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "All Other",
        "(noninterest loss)"
      ],
      "value": -0.6,
      "valueText": "($0.6B)"
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Pretax income",
      "value": 5.8,
      "valueText": "$5.8B"
    },
    {
      "id": "noninterest_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 13,
      "valueText": "($13.0B)"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 1.7,
      "valueText": "($1.7B)"
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 1,
      "type": "profit",
      "label": "Net income",
      "value": 4.9,
      "notes": [
        "+57% Y/Y",
        "$1.25 EPS"
      ],
      "valueText": "$4.9B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 1,
      "valueText": "($1.0B)"
    },
    {
      "id": "personnel",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Personnel",
      "value": 8.6,
      "valueText": "($8.6B)"
    },
    {
      "id": "technology",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "Technology",
      "value": 0.9,
      "valueText": "($0.9B)"
    },
    {
      "id": "occupancy",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "Occupancy",
      "value": 0.7,
      "valueText": "($0.7B)"
    },
    {
      "id": "operating_losses",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Operating losses",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "leases",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": "Leases",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "advertising",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Advertising",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "professional_fees",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": "Professional fees",
      "value": 1.3,
      "valueText": "($1.3B)"
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "Other",
      "value": 0.8,
      "valueText": "($0.8B)"
    }
  ],
  "links": [
    {
      "source": "consumer_banking",
      "target": "segment_revenue",
      "value": 9.5,
      "sourceWidth": 151.04166666666666,
      "targetWidth": 151.04166666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "commercial_banking",
      "target": "segment_revenue",
      "value": 3.4,
      "sourceWidth": 53.385416666666664,
      "targetWidth": 53.385416666666664,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "corporate_investment_banking",
      "target": "segment_revenue",
      "value": 4.6,
      "sourceWidth": 75.52083333333333,
      "targetWidth": 75.52083333333333,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "wealth_investment_management",
      "target": "segment_revenue",
      "value": 3.6,
      "sourceWidth": 58.59375,
      "targetWidth": 58.59375,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 20.5,
      "sourceWidth": 329.4270833333333,
      "targetWidth": 329.4270833333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "segment_revenue",
      "target": "other",
      "value": 0.6,
      "sourceWidth": 9.114583333333332,
      "targetWidth": 9.114583333333332,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.8,
      "sourceWidth": 93.75,
      "targetWidth": 92.44791666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "noninterest_expenses",
      "value": 13,
      "sourceWidth": 208.33333333333331,
      "targetWidth": 207.03125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 1.7,
      "sourceWidth": 27.34375,
      "targetWidth": 27.34375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4.9,
      "sourceWidth": 78.125,
      "targetWidth": 78.125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1,
      "sourceWidth": 14.322916666666666,
      "targetWidth": 15.625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "personnel",
      "value": 8.6,
      "sourceWidth": 138.02083333333331,
      "targetWidth": 138.02083333333331,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "technology",
      "value": 0.9,
      "sourceWidth": 15.625,
      "targetWidth": 15.625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "occupancy",
      "value": 0.7,
      "sourceWidth": 11.71875,
      "targetWidth": 11.71875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "operating_losses",
      "value": 0.2,
      "sourceWidth": 3.90625,
      "targetWidth": 3.90625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "leases",
      "value": 0.2,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "advertising",
      "value": 0.2,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "professional_fees",
      "value": 1.3,
      "sourceWidth": 20.833333333333332,
      "targetWidth": 20.833333333333332,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "other_expenses",
      "value": 0.8,
      "sourceWidth": 11.71875,
      "targetWidth": 13.020833333333332,
      "sourceOrder": 7,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "$1.3T",
      "$0.9T"
    ],
    "zh": {
      "name": "富国银行 · 2023 财年第二季度",
      "meta": {
        "title": "富国银行 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "titleTextLength": 2057.548828125
      },
      "nodes": {
        "consumer_banking": {
          "label": "消费者银行",
          "notes": [
            "同比 +11%",
            "净利率 20%"
          ]
        },
        "commercial_banking": {
          "label": "商业银行",
          "notes": [
            "同比 +35%",
            "净利率 38%"
          ]
        },
        "corporate_investment_banking": {
          "label": "企业与投资银行",
          "notes": [
            "同比 +30%",
            "净利率 26%"
          ]
        },
        "wealth_investment_management": {
          "label": "财富与投资管理",
          "notes": [
            "同比 (2%)",
            "净利率 13%"
          ]
        },
        "segment_revenue": {
          "label": ""
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +20%"
          ]
        },
        "other": {
          "label": "所有其他（非利息亏损）"
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "noninterest_expenses": {
          "label": "非利息费用"
        },
        "operating_expenses": {
          "label": "信用损失拨备"
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +57%",
            "每股收益 $1.25"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "personnel": {
          "label": "人员费用"
        },
        "technology": {
          "label": "技术"
        },
        "occupancy": {
          "label": "场地占用"
        },
        "operating_losses": {
          "label": "经营损失"
        },
        "leases": {
          "label": "租赁"
        },
        "advertising": {
          "label": "广告"
        },
        "professional_fees": {
          "label": "专业服务费"
        },
        "other_expenses": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "consumer_banking": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 307.29166666666663,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 427.13671875,
                "top": 361.97916666666663,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "同比 +11%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 354.2109375,
                "top": 412.76041666666663,
                "anchor": "end",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "消费者",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "银行",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "净利率 20%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "commercial_banking": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 585.9375,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 427.13671875,
                "top": 640.625,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "同比 +35%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 354.2109375,
                "top": 606.7708333333333,
                "anchor": "end",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "商业",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "银行",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "净利率 38%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "corporate_investment_banking": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 774.7395833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 427.13671875,
                "top": 829.4270833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "同比 +30%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 354.2109375,
                "top": 778.6458333333333,
                "anchor": "end",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "企业与",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "投资",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "银行",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "净利率 26%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "wealth_investment_management": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 976.5625,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 427.13671875,
                "top": 1022.25,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "同比 (2%)",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 354.2109375,
                "top": 989.5833333333333,
                "anchor": "end",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "财富与",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "投资",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "管理",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "净利率 13%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "segment_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1359.544921875,
                "top": 438.8020833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40.36458333333333,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1359.544921875,
                "top": 492.1875,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1359.544921875,
                "top": 545.5729166666666,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "同比 +20%",
                    "size": 27.34375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 1359.544921875,
                "top": 1092.4479166666665,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "所有其他（非利息亏损）",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1359.544921875,
                "top": 1194.0104166666665,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1825.7490234375,
                "top": 355.46875,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1825.7490234375,
                "top": 407.5520833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "noninterest_expenses": {
            "blocks": [
              {
                "x": 1825.7490234375,
                "top": 986.9791666666666,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1825.7490234375,
                "top": 1088.5416666666665,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
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
                "x": 1833.5625,
                "top": 1216.1458333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1833.5625,
                "top": 1317.7083333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 242.1875,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2484.685546875,
                "top": 294.2708333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2484.685546875,
                "top": 350.26041666666663,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "同比 +57%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "每股收益 $1.25",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 429.6875,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2484.685546875,
                "top": 473.9583333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 544.2708333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "人员费用",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2491.19677734375,
                "top": 588.5416666666666,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 700.5208333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "技术",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2492.4990234375,
                "top": 744.7916666666666,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 803.3854166666666,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2492.4990234375,
                "top": 847.65625,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_losses": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 899.7395833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "经营损失",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493.80126953125,
                "top": 944.0104166666666,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "leases": {
            "blocks": [
              {
                "x": 2360.97216796875,
                "top": 1018.2291666666666,
                "anchor": "start",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "租赁 ($0.2B)",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 2360.97216796875,
                "top": 1114.5833333333333,
                "anchor": "start",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "广告 ($0.2B)",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 1204.4270833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "专业服务费",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2495.103515625,
                "top": 1248.6979166666665,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2360.97216796875,
                "top": 1332.03125,
                "anchor": "start",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "其他 ($0.8B)",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122.4111\" y=\"256.5104\" font-size=\"39.0625\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><rect x=\"24.7427\" y=\"1191.4062\" width=\"242.2178\" height=\"148.4375\" rx=\"29.9479\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"145.8516\" y=\"1244.7917\" font-size=\"27.3438\" font-weight=\"800\">CET1 比率</text><text x=\"145.8516\" y=\"1283.8542\" font-size=\"27.3438\" data-operating-metric=\"cet1\">10.7%</text><text x=\"145.8516\" y=\"1315.1042\" font-size=\"22.1354\">同比 +0.3 个百分点</text></g><rect x=\"274.7739\" y=\"1191.4062\" width=\"372.4424\" height=\"148.4375\" rx=\"29.9479\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"460.9951\" y=\"1244.7917\" font-size=\"27.3438\" font-weight=\"800\">平均存款</text><text x=\"460.9951\" y=\"1283.8542\" font-size=\"27.3438\" data-operating-metric=\"deposits\">$1.3T</text><text x=\"460.9951\" y=\"1315.1042\" font-size=\"22.1354\">同比 (6%)</text></g><rect x=\"656.3320\" y=\"1191.4062\" width=\"429.7412\" height=\"148.4375\" rx=\"29.9479\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"871.2026\" y=\"1244.7917\" font-size=\"27.3438\" font-weight=\"800\">平均贷款与租赁</text><text x=\"871.2026\" y=\"1283.8542\" font-size=\"27.3438\" data-operating-metric=\"loans\">$0.9T</text><text x=\"871.2026\" y=\"1315.1042\" font-size=\"22.1354\">同比 +2%</text></g><text x=\"429.7412\" y=\"1388.0208\" text-anchor=\"middle\" font-size=\"27.3438\" fill=\"#666666\">CET1 = 普通股一级资本</text><text x=\"171.8965\" y=\"1436.1979\" font-size=\"39.0625\" font-weight=\"800\">来源：季度业绩</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "10.7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.7%"
    },
    {
      "id": "deposits",
      "value": "1.3",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.3T"
    },
    {
      "id": "loans",
      "value": "0.9",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.9T"
    }
  ]
});
