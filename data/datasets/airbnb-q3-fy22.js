window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "airbnb-q3-fy22",
  "name": "Airbnb · Q3 FY22",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbnb-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 197.91666666666666,
    "titleSize": 125.0,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#ff385c",
        "label": "#ff385c"
      },
      "hub": {
        "node": "#ff385c",
        "label": "#ff385c"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009453"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941a00"
      }
    },
    "linkTint": {
      "source": "#f59db0",
      "hub": "#f59db0",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "United States",
      "value": 1.2,
      "valueText": "$1.2B",
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 1.7,
      "valueText": "$1.7B",
      "notes": [
        "+33% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 2.9,
      "valueText": "$2.9B",
      "notes": [
        "+29% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 2.5,
      "valueText": "$2.5B",
      "notes": [
        "86% margin",
        "Unchanged"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 5,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.2,
      "valueText": "$1.2B",
      "notes": [
        "42% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": "Operating Expenses",
      "value": 1.3,
      "valueText": "($1.3B)",
      "notes": []
    },
    {
      "id": "other_income",
      "col": 4,
      "order": 7,
      "type": "profit",
      "label": "Other",
      "value": 0.066,
      "valueText": "$66M",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 8,
      "type": "profit",
      "label": "Net profit",
      "value": 1.2,
      "valueText": "$1.2B",
      "notes": [
        "42% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "Tax",
      "value": 0.056,
      "valueText": "($56M)",
      "notes": []
    },
    {
      "id": "sm",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "S&M",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": []
    },
    {
      "id": "product",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "Product dev.",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": []
    },
    {
      "id": "ga",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": "G&A",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "support",
      "col": 5,
      "order": 13,
      "type": "cost",
      "label": "Support",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 1.2,
      "width": 114.58333333333333,
      "sourceWidth": 114.58333333333333,
      "targetWidth": 115.88541666666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 1.7,
      "width": 173.17708333333331,
      "sourceWidth": 173.17708333333331,
      "targetWidth": 173.17708333333331,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.5,
      "width": 248.69791666666666,
      "sourceWidth": 248.69791666666666,
      "targetWidth": 247.39583333333331,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.4,
      "width": 40.36458333333333,
      "sourceWidth": 40.36458333333333,
      "targetWidth": 40.36458333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.2,
      "width": 119.79166666666666,
      "sourceWidth": 119.79166666666666,
      "targetWidth": 119.79166666666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.3,
      "width": 127.60416666666666,
      "sourceWidth": 127.60416666666666,
      "targetWidth": 127.60416666666666,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.144,
      "width": 114.58333333333333,
      "sourceWidth": 114.58333333333333,
      "targetWidth": 114.58333333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.056,
      "width": 5.208333333333333,
      "sourceWidth": 5.208333333333333,
      "targetWidth": 5.208333333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.066,
      "width": 6.510416666666666,
      "sourceWidth": 6.510416666666666,
      "targetWidth": 7.8125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.4,
      "width": 37.760416666666664,
      "sourceWidth": 37.760416666666664,
      "targetWidth": 39.0625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.4,
      "width": 36.45833333333333,
      "sourceWidth": 36.45833333333333,
      "targetWidth": 37.760416666666664,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "width": 28.645833333333332,
      "sourceWidth": 28.645833333333332,
      "targetWidth": 28.645833333333332,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.2,
      "width": 24.739583333333332,
      "sourceWidth": 24.739583333333332,
      "targetWidth": 24.739583333333332,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 98.95833333333333,
    "nodes": {
      "united_states": {
        "x": 412.76041666666663,
        "y": 587.2395833333333,
        "width": 71.61458333333333,
        "height": 114.58333333333333
      },
      "international": {
        "x": 412.76041666666663,
        "y": 895.8333333333333,
        "width": 71.61458333333333,
        "height": 173.17708333333331
      },
      "revenue": {
        "x": 876.3020833333333,
        "y": 688.8020833333333,
        "width": 71.61458333333333,
        "height": 289.0625
      },
      "gross_profit": {
        "x": 1352.8645833333333,
        "y": 623.6979166666666,
        "width": 72.91666666666666,
        "height": 247.39583333333331
      },
      "cost_of_revenue": {
        "x": 1355.46875,
        "y": 1036.4583333333333,
        "width": 72.91666666666666,
        "height": 40.36458333333333
      },
      "operating_profit": {
        "x": 1811.1979166666665,
        "y": 565.1041666666666,
        "width": 72.91666666666666,
        "height": 119.79166666666666
      },
      "operating_expenses": {
        "x": 1808.59375,
        "y": 795.5729166666666,
        "width": 72.91666666666666,
        "height": 127.60416666666666
      },
      "other_income": {
        "x": 2158.8541666666665,
        "y": 686.1979166666666,
        "width": 72.91666666666666,
        "height": 6.510416666666666
      },
      "net_profit": {
        "x": 2264.3229166666665,
        "y": 514.3229166666666,
        "width": 72.91666666666666,
        "height": 122.39583333333333
      },
      "tax": {
        "x": 2264.3229166666665,
        "y": 804.6875,
        "width": 72.91666666666666,
        "height": 5.208333333333333
      },
      "sm": {
        "x": 2264.3229166666665,
        "y": 920.5729166666666,
        "width": 72.91666666666666,
        "height": 39.0625
      },
      "product": {
        "x": 2264.3229166666665,
        "y": 1032.5520833333333,
        "width": 72.91666666666666,
        "height": 37.760416666666664
      },
      "ga": {
        "x": 2264.3229166666665,
        "y": 1152.34375,
        "width": 72.91666666666666,
        "height": 28.645833333333332
      },
      "support": {
        "x": 2264.3229166666665,
        "y": 1263.0208333333333,
        "width": 72.91666666666666,
        "height": 24.739583333333332
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 447.91666666666663,
            "top": 485.6770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 98.95833333333333,
            "top": 582.03125,
            "anchor": "start",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "United States",
                "size": 37.760416666666664,
                "weight": 700
              }
            ],
            "semanticRole": "grouped-side-label"
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 447.91666666666663,
            "top": 799.4791666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+33% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 105.46875,
            "top": 899.7395833333333,
            "anchor": "start",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "International",
                "size": 37.760416666666664,
                "weight": 700
              }
            ],
            "semanticRole": "grouped-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 911.4583333333333,
            "top": 533.8541666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.760416666666664,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+29% Y/Y",
                "size": 27.34375,
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
            "x": 1389.3229166666665,
            "top": 430.9895833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.760416666666664,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "86% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Unchanged",
                "size": 27.34375,
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
            "x": 1847.65625,
            "top": 373.69791666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.760416666666664,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "42% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34375,
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
            "x": 1391.9270833333333,
            "top": 1087.2395833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 35.15625,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 35.15625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 33.854166666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1845.0520833333333,
            "top": 933.59375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 36.45833333333333,
                "weight": 700
              },
              {
                "text": "Expenses",
                "size": 36.45833333333333,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.15625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2195.3125,
            "top": 699.21875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2458.333333333333,
            "top": 490.88541666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "42% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34375,
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
            "x": 2458.333333333333,
            "top": 770.8333333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2458.333333333333,
            "top": 903.6458333333333,
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
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2458.333333333333,
            "top": 1016.9270833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Product dev.",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2458.333333333333,
            "top": 1131.5104166666665,
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
              }
            ]
          }
        ]
      },
      "support": {
        "blocks": [
          {
            "x": 2458.333333333333,
            "top": 1244.7916666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Support",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "value": "99700000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "99.7M"
    },
    {
      "id": "gbv",
      "value": "15.6",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$15.6B"
    },
    {
      "id": "long_term_stays",
      "value": "20",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "20%"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"923\" width=\"235\" height=\"115\" rx=\"23\" fill=\"#ff385c\"/><text x=\"136.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\" >Nights booked</text><text x=\"136.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"nights_booked\">99.7M</text><text x=\"136.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"white\" >+25% Y/Y</text><rect x=\"261\" y=\"923\" width=\"111\" height=\"115\" rx=\"23\" fill=\"#ff385c\"/><text x=\"316.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\" >GBV</text><text x=\"316.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"gbv\">$15.6B</text><text x=\"316.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"white\" >+31% Y/Y</text><rect x=\"379\" y=\"923\" width=\"320\" height=\"115\" rx=\"23\" fill=\"#ff385c\"/><text x=\"539.0\" y=\"975\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\" >Long-term stays (28+ days)</text><text x=\"539.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"long_term_stays\">20%</text><text x=\"539.0\" y=\"1028\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"400\" fill=\"white\" >of nights booked</text><text x=\"327\" y=\"1064\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#777777\" >GBV = Gross Booking Value</text><text x=\"333\" y=\"1104\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#000\" >Source: Quarterly results</text><g transform=\"translate(65 500)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 42V20L22 5L40 20V42H4 M15 42V25H29V42 M45 42H70 M57 42V5 M46 17L57 9L68 17 M46 29L57 21L68 29 M2 54Q10 48 19 54T37 54T55 54T73 54 M2 65Q10 59 19 65T37 65T55 65T73 65\"/></g><g transform=\"translate(151 505)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 30Q12 3 35 3Q61 6 62 32Z M35 3L22 62 M23 62Q12 72 8 61 M21 28Q22 8 35 3Q46 14 45 31\"/></g><g transform=\"translate(220 500)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 28L36 3L68 28H5 M10 29V65H63V29 M26 65V40H47V65 M10 40H24 M10 52H24 M49 41H62 M49 54H62\"/></g><g transform=\"translate(66 753)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 60V5 M0 18L7 10L17 18 M0 36L7 26L18 36 M10 45L38 7L64 45Z M24 27L38 7L48 24 M5 57H58Q68 64 57 68H31Q21 72 33 75H57\"/></g><g transform=\"translate(145 752)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 35L26 20H54L73 35L55 49H25Z M24 20Q25 0 42 0Q61 0 60 20 M27 48L20 63 M56 48L64 63 M26 35H26 M42 35H42 M58 35H58\"/></g><g transform=\"translate(233 751)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M35 11Q17 -4 4 13 M35 11Q52 -5 69 10 M35 11Q24 18 24 29 M35 11Q46 21 47 29 M35 12L30 48 M1 52Q13 29 33 44Q52 29 70 52 M2 59Q10 53 18 59T34 59T50 59T69 59 M2 70Q10 64 18 70T34 70T50 70T69 70\"/></g></g></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 778.6458333333333,
      "y": 246.09375,
      "width": 261.71875,
      "height": 261.71875
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2022 财年第三季度",
      "meta": {
        "title": "Airbnb 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "titleSize": 111.97916666666666
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +24%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +33%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +29%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 86%",
            "保持不变"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 42%",
            "同比 +4 个百分点"
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
            "利润率 42%",
            "同比 +5 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": []
        },
        "product": {
          "label": "产品开发",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "support": {
          "label": "客服支持",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 447.91666666666663,
                "top": 485.6770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 98.95833333333333,
                "top": 582.03125,
                "anchor": "start",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "美国",
                    "size": 37.760416666666664,
                    "weight": 700
                  }
                ],
                "semanticRole": "grouped-side-label"
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 447.91666666666663,
                "top": 799.4791666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +33%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 105.46875,
                "top": 899.7395833333333,
                "anchor": "start",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "国际",
                    "size": 37.760416666666664,
                    "weight": 700
                  }
                ],
                "semanticRole": "grouped-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 911.4583333333333,
                "top": 533.8541666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.760416666666664,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +29%",
                    "size": 27.34375,
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
                "x": 1389.3229166666665,
                "top": 430.9895833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.760416666666664,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "利润率 86%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "保持不变",
                    "size": 27.34375,
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
                "x": 1847.65625,
                "top": 373.69791666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.760416666666664,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "利润率 42%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34375,
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
                "x": 1391.9270833333333,
                "top": 1087.2395833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35.15625,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 35.15625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 33.854166666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1845.0520833333333,
                "top": 933.59375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.45833333333333,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 36.45833333333333,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.15625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2195.3125,
                "top": 699.21875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2458.333333333333,
                "top": 490.88541666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "利润率 42%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34375,
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
                "x": 2458.333333333333,
                "top": 770.8333333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2458.333333333333,
                "top": 903.6458333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2458.333333333333,
                "top": 1016.9270833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "产品开发",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2458.333333333333,
                "top": 1131.5104166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                  }
                ]
              }
            ]
          },
          "support": {
            "blocks": [
              {
                "x": 2458.333333333333,
                "top": 1244.7916666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "客服支持",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"923\" width=\"235\" height=\"115\" rx=\"23\" fill=\"#ff385c\"/><text x=\"136.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\" >预订间夜数</text><text x=\"136.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"nights_booked\">99.7M</text><text x=\"136.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"white\" >同比 +25%</text><rect x=\"261\" y=\"923\" width=\"111\" height=\"115\" rx=\"23\" fill=\"#ff385c\"/><text x=\"316.5\" y=\"963\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\" >GBV</text><text x=\"316.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"gbv\">$15.6B</text><text x=\"316.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"white\" >同比 +31%</text><rect x=\"379\" y=\"923\" width=\"320\" height=\"115\" rx=\"23\" fill=\"#ff385c\"/><text x=\"539.0\" y=\"975\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\" >长期住宿（28 天以上）</text><text x=\"539.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"long_term_stays\">20%</text><text x=\"539.0\" y=\"1028\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"400\" fill=\"white\" >占预订间夜数</text><text x=\"327\" y=\"1064\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#777777\" >GBV = 总预订价值</text><text x=\"333\" y=\"1104\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#000\" >来源：季度业绩</text><g transform=\"translate(65 500)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 42V20L22 5L40 20V42H4 M15 42V25H29V42 M45 42H70 M57 42V5 M46 17L57 9L68 17 M46 29L57 21L68 29 M2 54Q10 48 19 54T37 54T55 54T73 54 M2 65Q10 59 19 65T37 65T55 65T73 65\"/></g><g transform=\"translate(151 505)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 30Q12 3 35 3Q61 6 62 32Z M35 3L22 62 M23 62Q12 72 8 61 M21 28Q22 8 35 3Q46 14 45 31\"/></g><g transform=\"translate(220 500)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 28L36 3L68 28H5 M10 29V65H63V29 M26 65V40H47V65 M10 40H24 M10 52H24 M49 41H62 M49 54H62\"/></g><g transform=\"translate(66 753)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 60V5 M0 18L7 10L17 18 M0 36L7 26L18 36 M10 45L38 7L64 45Z M24 27L38 7L48 24 M5 57H58Q68 64 57 68H31Q21 72 33 75H57\"/></g><g transform=\"translate(145 752)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 35L26 20H54L73 35L55 49H25Z M24 20Q25 0 42 0Q61 0 60 20 M27 48L20 63 M56 48L64 63 M26 35H26 M42 35H42 M58 35H58\"/></g><g transform=\"translate(233 751)\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M35 11Q17 -4 4 13 M35 11Q52 -5 69 10 M35 11Q24 18 24 29 M35 11Q46 21 47 29 M35 12L30 48 M1 52Q13 29 33 44Q52 29 70 52 M2 59Q10 53 18 59T34 59T50 59T69 59 M2 70Q10 64 18 70T34 70T50 70T69 70\"/></g></g></g>"
    }
  }
});
