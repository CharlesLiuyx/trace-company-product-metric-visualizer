/* Pinterest Q1 FY25; native Source geometry, USD millions. */
(function () {
const data = {
  "key": "pinterest-q1-fy25",
  "name": "Pinterest · Q1 FY25",
  "company": "Pinterest",
  "meta": {
    "company": "Pinterest",
    "title": "Pinterest Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/pinterest-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.91666666666666,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2304.9755859375,
    "hidePeriodStamp": true,
    "logoWidth": 213.568359375,
    "logoHeight": 213.568359375,
    "logoY": 226.5625,
    "logoViewBox": "0 0 208 208"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#165578",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#1b3078",
        "label": "#1b3078"
      },
      "hub": {
        "node": "#1b3078",
        "label": "#1b3078"
      },
      "profit": {
        "node": "#259e2a",
        "label": "#00994e"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9a1800"
      }
    },
    "linkTint": {
      "source": "#929cba",
      "hub": "#929cba",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 29,
      "value": 28,
      "note": 21,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\" font-family=\"Montserrat,Arial,sans-serif\"><rect x=\"26\" y=\"174\" width=\"145\" height=\"129\" rx=\"23\" fill=\"#ce000b\"/><path d=\"M97 318L122 354H72Z\" fill=\"#ce000b\"/><rect x=\"45\" y=\"354\" width=\"104\" height=\"545\" rx=\"12\" fill=\"#ce000b\"/><rect x=\"247\" y=\"865\" width=\"161\" height=\"117\" rx=\"24\" fill=\"#ce000b\"/><text x=\"98\" y=\"218\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"800\" fill=\"white\">MAU</text><text x=\"98\" y=\"254\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau\">570M</text><text x=\"98\" y=\"284\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"white\">+10% Y/Y</text><text x=\"97\" y=\"444\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_us_canada\">102M</text><text x=\"97\" y=\"475\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"white\">+4% Y/Y</text><text x=\"97\" y=\"676\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_europe\">148M</text><text x=\"97\" y=\"707\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"white\">+5% Y/Y</text><text x=\"97\" y=\"806\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_rest_of_world\">320M</text><text x=\"97\" y=\"837\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"white\">+14% Y/Y</text><text x=\"327\" y=\"907\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"800\" fill=\"white\">ARPU</text><text x=\"327\" y=\"937\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"500\" fill=\"white\" data-operating-metric=\"arpu\">$1.52</text><text x=\"327\" y=\"966\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"500\" fill=\"white\">+5% Y/Y</text><text x=\"326\" y=\"1010\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#777777\">MAU = Monthly Active Users</text><text x=\"326\" y=\"1040\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#777777\">ARPU = Average Revenue Per User</text></g>",
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "570000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "570M"
    },
    {
      "id": "mau_us_canada",
      "value": "102000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "102M"
    },
    {
      "id": "mau_europe",
      "value": "148000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "148M"
    },
    {
      "id": "mau_rest_of_world",
      "value": "320000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "320M"
    },
    {
      "id": "arpu",
      "value": "0.00152",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.52"
    }
  ],
  "layout": {
    "scale": 0.3746345029239766,
    "nodes": {
      "us_canada": {
        "x": 432.345703125,
        "y": 450.5208333333333,
        "width": 72.92578125,
        "height": 247.39583333333331
      },
      "europe": {
        "x": 432.345703125,
        "y": 851.5625,
        "width": 72.92578125,
        "height": 55.98958333333333
      },
      "rest_of_world": {
        "x": 432.345703125,
        "y": 1049.4791666666665,
        "width": 72.92578125,
        "height": 16.927083333333332
      },
      "revenue": {
        "x": 899.85205078125,
        "y": 587.2395833333333,
        "width": 72.92578125,
        "height": 320.3125
      },
      "gross_profit": {
        "x": 1366.05615234375,
        "y": 447.91666666666663,
        "width": 72.92578125,
        "height": 246.09375
      },
      "cost_of_revenue": {
        "x": 1366.05615234375,
        "y": 968.75,
        "width": 72.92578125,
        "height": 75.52083333333333
      },
      "operating_profit": {
        "x": 1599.158203125,
        "y": 869.7916666666666,
        "width": 72.92578125,
        "height": 14.322916666666666
      },
      "operating_expenses": {
        "x": 1833.5625,
        "y": 584.6354166666666,
        "width": 72.92578125,
        "height": 259.1145833333333
      },
      "rnd": {
        "x": 2301.06884765625,
        "y": 391.9270833333333,
        "width": 72.92578125,
        "height": 125.0
      },
      "sm": {
        "x": 2301.06884765625,
        "y": 707.03125,
        "width": 72.92578125,
        "height": 95.05208333333333
      },
      "ga": {
        "x": 2301.06884765625,
        "y": 997.3958333333333,
        "width": 72.92578125,
        "height": 39.0625
      }
    },
    "labels": {
      "us_canada": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 352.5833333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 388.0693359375,
            "top": 526.8708333333333,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "US &",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "Canada",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 756.5104166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+25% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 388.0693359375,
            "top": 856.3791666666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Europe",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 954.4270833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+50% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 388.0693359375,
            "top": 1010.4166666666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Rest of",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "the world",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 935.0126953125,
            "top": 442.7083333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
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
            "x": 1402.51904296875,
            "top": 264.32291666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "77% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
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
            "x": 1402.51904296875,
            "top": 1063.8020833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 35.15625,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 35.15625,
                "weight": 800
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1635.62109375,
            "top": 904.9479166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "(4%) margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34375,
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
            "x": 1870.025390625,
            "top": 425.78125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2510.73046875,
            "top": 407.5520833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              },
              {
                "text": "39% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
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
            "x": 2510.73046875,
            "top": 718.75,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              },
              {
                "text": "30% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
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
            "x": 2510.73046875,
            "top": 984.375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34375,
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
      "id": "us_canada",
      "label": [
        "US &",
        "Canada"
      ],
      "value": 663,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#1b3078",
      "labelColor": "#1b3078",
      "linkTint": "#929cba"
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 147,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+25% Y/Y"
      ],
      "color": "#1b3078",
      "labelColor": "#1b3078",
      "linkTint": "#929cba"
    },
    {
      "id": "rest_of_world",
      "label": [
        "Rest of",
        "the world"
      ],
      "value": 45,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+50% Y/Y"
      ],
      "color": "#1b3078",
      "labelColor": "#1b3078",
      "linkTint": "#929cba"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 855,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#1b3078",
      "labelColor": "#1b3078",
      "linkTint": "#929cba"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 656,
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "77% margin",
        "+1pp Y/Y"
      ],
      "color": "#259e2a",
      "labelColor": "#00994e",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 199,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "label": [
        "Operating",
        "loss"
      ],
      "value": 35,
      "type": "cost",
      "col": 3,
      "order": 0,
      "notes": [
        "(4%) margin",
        "+3pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 691,
      "type": "cost",
      "col": 4,
      "order": 0,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 332,
      "type": "cost",
      "col": 5,
      "order": 0,
      "notes": [
        "39% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 254,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [
        "30% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 106,
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [
        "12% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "us_canada",
      "target": "revenue",
      "value": 663,
      "width": 247.39583333333331,
      "sourceWidth": 247.39583333333331,
      "targetWidth": 247.39583333333331,
      "y0": 574.21875,
      "y1": 710.9375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 147,
      "width": 55.98958333333333,
      "sourceWidth": 55.98958333333333,
      "targetWidth": 55.98958333333333,
      "y0": 879.5572916666666,
      "y1": 862.6302083333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 45,
      "width": 16.927083333333332,
      "sourceWidth": 16.927083333333332,
      "targetWidth": 16.927083333333332,
      "y0": 1057.9427083333333,
      "y1": 899.0885416666666,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 656,
      "width": 246.09375,
      "sourceWidth": 246.09375,
      "targetWidth": 246.09375,
      "y0": 710.2864583333333,
      "y1": 570.9635416666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 199,
      "width": 74.21875,
      "sourceWidth": 74.21875,
      "targetWidth": 75.52083333333333,
      "y0": 870.4427083333333,
      "y1": 1006.5104166666666,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 656,
      "width": 246.09375,
      "sourceWidth": 246.09375,
      "targetWidth": 246.09375,
      "y0": 570.9635416666666,
      "y1": 707.6822916666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "operating_expenses",
      "value": 35,
      "width": 14.322916666666666,
      "sourceWidth": 14.322916666666666,
      "targetWidth": 13.020833333333332,
      "y0": 876.953125,
      "y1": 837.2395833333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 332,
      "width": 123.69791666666666,
      "sourceWidth": 123.69791666666666,
      "targetWidth": 125.0,
      "y0": 646.484375,
      "y1": 454.4270833333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 254,
      "width": 96.35416666666666,
      "sourceWidth": 96.35416666666666,
      "targetWidth": 95.05208333333333,
      "y0": 756.5104166666666,
      "y1": 754.5572916666666,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 106,
      "width": 39.0625,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "y0": 824.21875,
      "y1": 1016.9270833333333,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Pinterest · 2025 财年第一季度",
      "meta": {
        "title": "Pinterest 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "titleSize": 111.9931640625,
        "titleTextLength": 1823.14453125
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\" font-family=\"Montserrat,Arial,sans-serif\"><rect x=\"26\" y=\"174\" width=\"145\" height=\"129\" rx=\"23\" fill=\"#ce000b\"/><path d=\"M97 318L122 354H72Z\" fill=\"#ce000b\"/><rect x=\"45\" y=\"354\" width=\"104\" height=\"545\" rx=\"12\" fill=\"#ce000b\"/><rect x=\"247\" y=\"865\" width=\"161\" height=\"117\" rx=\"24\" fill=\"#ce000b\"/><text x=\"98\" y=\"218\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"800\" fill=\"white\">MAU</text><text x=\"98\" y=\"254\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau\">570M</text><text x=\"98\" y=\"284\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"white\">同比 +10%</text><text x=\"97\" y=\"444\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_us_canada\">102M</text><text x=\"97\" y=\"475\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"white\">同比 +4%</text><text x=\"97\" y=\"676\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_europe\">148M</text><text x=\"97\" y=\"707\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"white\">同比 +5%</text><text x=\"97\" y=\"806\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"800\" fill=\"white\" data-operating-metric=\"mau_rest_of_world\">320M</text><text x=\"97\" y=\"837\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"white\">同比 +14%</text><text x=\"327\" y=\"907\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"800\" fill=\"white\">ARPU</text><text x=\"327\" y=\"937\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"500\" fill=\"white\" data-operating-metric=\"arpu\">$1.52</text><text x=\"327\" y=\"966\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"500\" fill=\"white\">同比 +5%</text><text x=\"326\" y=\"1010\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#777777\">MAU = 月活跃用户</text><text x=\"326\" y=\"1040\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#777777\">ARPU = 每用户平均收入</text></g>",
      "nodes": {
        "us_canada": {
          "label": "美国和加拿大",
          "notes": [
            "同比 +12%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +25%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +50%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +16%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 77%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业亏损",
          "notes": [
            "利润率 (4%)",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 39%",
            "同比 +1 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 30%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "us_canada": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 352.5833333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 388.0693359375,
                "top": 526.8708333333333,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "美国和",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "加拿大",
                    "size": 36.45833333333333,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 756.5104166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 388.0693359375,
                "top": 856.3791666666666,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 36.45833333333333,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 954.4270833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +50%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 388.0693359375,
                "top": 1010.4166666666666,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "世界",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "其他地区",
                    "size": 36.45833333333333,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 935.0126953125,
                "top": 442.7083333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
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
                "x": 1402.51904296875,
                "top": 264.32291666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "利润率 77%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 1402.51904296875,
                "top": 1063.8020833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35.15625,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 35.15625,
                    "weight": 800
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1635.62109375,
                "top": 904.9479166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34375,
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
                "x": 1870.025390625,
                "top": 425.78125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2510.73046875,
                "top": 407.5520833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  },
                  {
                    "text": "占收入 39%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
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
                "x": 2510.73046875,
                "top": 718.75,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  },
                  {
                    "text": "占收入 30%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
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
                "x": 2510.73046875,
                "top": 984.375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34375,
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
};
data.meta.logoSvg = (window.SANKEY_BUSINESS_ICONS || {}).pinterestLogo || "";
window.DATASETS = window.DATASETS || [];
window.DATASETS.push(data);
})();
