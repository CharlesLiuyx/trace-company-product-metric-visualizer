(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "roblox-q3-fy25",
  "name": "Roblox · Q3 FY25",
  "company": "Roblox",
  "meta": {
    "company": "Roblox",
    "title": "Roblox Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roblox-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.61458333333331,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2148.7060546875,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155477",
    "subtitleColor": "#777",
    "noteColor": "#777",
    "linkOpacity": 1,
    "linkTint": {
      "source": "#85cef7",
      "hub": "#85cef7",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "type": {
      "name": 29,
      "value": 29,
      "note": 21,
      "lineGap": 7
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 817,
      "col": 0,
      "order": 0,
      "type": "source",
      "notes": [
        "+40% Y/Y"
      ],
      "color": "#00a5f7",
      "labelColor": "#00a5f7"
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 265,
      "col": 0,
      "order": 1,
      "type": "source",
      "notes": [
        "+58% Y/Y"
      ],
      "color": "#00a5f7",
      "labelColor": "#00a5f7"
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 153,
      "col": 0,
      "order": 2,
      "type": "source",
      "notes": [
        "+60% Y/Y"
      ],
      "color": "#00a5f7",
      "labelColor": "#00a5f7"
    },
    {
      "id": "rest_of_world",
      "label": "Rest of world",
      "value": 126,
      "col": 0,
      "order": 3,
      "type": "source",
      "notes": [
        "+73% Y/Y"
      ],
      "color": "#00a5f7",
      "labelColor": "#00a5f7"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1360,
      "col": 1,
      "order": 4,
      "type": "hub",
      "notes": [
        "+48% Y/Y"
      ],
      "color": "#00a5f7",
      "labelColor": "#00a5f7"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1063,
      "col": 2,
      "order": 5,
      "type": "profit",
      "notes": [
        "78% margin",
        "+1pp Y/Y"
      ],
      "color": "#279d27",
      "labelColor": "#009653"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 296,
      "col": 2,
      "order": 6,
      "type": "cost",
      "notes": [],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -297,
      "col": 3,
      "order": 7,
      "type": "cost",
      "notes": [
        "(22%) margin",
        "+9pp Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1360,
      "col": 4,
      "order": 8,
      "type": "cost",
      "notes": [],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "developer_fees",
      "label": "Developer fees",
      "value": 428,
      "col": 5,
      "order": 9,
      "type": "cost",
      "notes": [
        "31% of revenue",
        "+6pp Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 398,
      "col": 5,
      "order": 10,
      "type": "cost",
      "notes": [
        "29% of revenue",
        "(10pp) Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "infrastructure",
      "label": "Infrastructure",
      "value": 321,
      "col": 5,
      "order": 11,
      "type": "cost",
      "notes": [
        "24% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 145,
      "col": 5,
      "order": 12,
      "type": "cost",
      "notes": [
        "11% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 67,
      "col": 5,
      "order": 13,
      "type": "cost",
      "notes": [
        "5% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 817,
      "sourceWidth": 195.3125,
      "targetWidth": 195.4081710751898,
      "y0": 451.82291666666663,
      "y1": 686.2457522042615,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 265,
      "sourceWidth": 62.5,
      "targetWidth": 63.382087313250054,
      "y0": 731.7708333333333,
      "y1": 815.6408813984814,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 153,
      "sourceWidth": 36.45833333333333,
      "targetWidth": 36.594186260102866,
      "y0": 919.2708333333333,
      "y1": 865.6290181851579,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 126,
      "sourceWidth": 29.947916666666664,
      "targetWidth": 30.136388684790592,
      "y0": 1090.4947916666665,
      "y1": 898.9943056576047,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1063,
      "sourceWidth": 255.20833333333331,
      "targetWidth": 255.20833333333331,
      "y0": 716.1458333333333,
      "y1": 593.75,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 296,
      "sourceWidth": 70.3125,
      "targetWidth": 70.3125,
      "y0": 878.90625,
      "y1": 996.09375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1063,
      "sourceWidth": 255.20833333333331,
      "targetWidth": 255.20833333333331,
      "y0": 593.75,
      "y1": 716.1458333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 297,
      "sourceWidth": 70.3125,
      "targetWidth": 70.3125,
      "y0": 963.5416666666666,
      "y1": 878.90625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "developer_fees",
      "value": 428,
      "sourceWidth": 102.51870247731173,
      "targetWidth": 102.86458333333333,
      "y0": 639.8010179053225,
      "y1": 307.9427083333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 398,
      "sourceWidth": 95.33281211675252,
      "targetWidth": 95.05208333333333,
      "y0": 738.7267752023546,
      "y1": 568.359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "infrastructure",
      "value": 321,
      "sourceWidth": 76.88902685798381,
      "targetWidth": 76.82291666666666,
      "y0": 824.8376946897228,
      "y1": 817.0572916666666,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 145,
      "sourceWidth": 34.73180340936963,
      "targetWidth": 33.854166666666664,
      "y0": 880.6481098233995,
      "y1": 1044.2708333333333,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 67,
      "sourceWidth": 16.048488471915622,
      "targetWidth": 15.625,
      "y0": 906.0382557640422,
      "y1": 1234.375,
      "sourceOrder": 4,
      "targetOrder": 0
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "tax",
      "representation": "data-only"
    }
  ],
  "operatingMetrics": [
    {
      "id": "dau",
      "value": "152000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "152M"
    },
    {
      "id": "dau_over_13",
      "value": "101000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "101M"
    },
    {
      "id": "hours_engaged",
      "value": "39600000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "39.6B"
    },
    {
      "id": "bookings",
      "value": "1922",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1,922M"
    }
  ],
  "layout": {
    "scale": 0.23935355392156862,
    "nodes": {
      "north_america": {
        "x": 390.673828125,
        "y": 354.16666666666663,
        "width": 72.92578125,
        "height": 195.3125
      },
      "europe": {
        "x": 390.673828125,
        "y": 700.5208333333333,
        "width": 72.92578125,
        "height": 62.5
      },
      "apac": {
        "x": 390.673828125,
        "y": 901.0416666666666,
        "width": 72.92578125,
        "height": 36.45833333333333
      },
      "rest_of_world": {
        "x": 390.673828125,
        "y": 1075.5208333333333,
        "width": 72.92578125,
        "height": 29.947916666666664
      },
      "revenue": {
        "x": 858.18017578125,
        "y": 588.5416666666666,
        "width": 72.92578125,
        "height": 325.5208333333333
      },
      "gross_profit": {
        "x": 1325.6865234375,
        "y": 466.1458333333333,
        "width": 71.62353515625,
        "height": 255.20833333333331
      },
      "cost_of_revenue": {
        "x": 1326.98876953125,
        "y": 960.9375,
        "width": 72.92578125,
        "height": 70.3125
      },
      "operating_loss": {
        "x": 1592.64697265625,
        "y": 928.3854166666666,
        "width": 72.92578125,
        "height": 70.3125
      },
      "operating_expenses": {
        "x": 1793.19287109375,
        "y": 588.5416666666666,
        "width": 71.62353515625,
        "height": 325.5208333333333
      },
      "developer_fees": {
        "x": 2259.39697265625,
        "y": 256.51041666666663,
        "width": 72.92578125,
        "height": 102.86458333333333
      },
      "rnd": {
        "x": 2259.39697265625,
        "y": 520.8333333333333,
        "width": 72.92578125,
        "height": 95.05208333333333
      },
      "infrastructure": {
        "x": 2259.39697265625,
        "y": 778.6458333333333,
        "width": 72.92578125,
        "height": 76.82291666666666
      },
      "ga": {
        "x": 2259.39697265625,
        "y": 1027.34375,
        "width": 72.92578125,
        "height": 33.854166666666664
      },
      "sm": {
        "x": 2259.39697265625,
        "y": 1226.5625,
        "width": 72.92578125,
        "height": 15.625
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 260.41666666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+40% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 405.1375,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "North",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "America",
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
            "x": 433.64794921875,
            "top": 605.46875,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+58% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 709.6354166666666,
            "anchor": "end",
            "lineGap": 9.114583333333332,
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
      "apac": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 807.2916666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+60% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 899.7395833333333,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "APAC",
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
            "x": 433.64794921875,
            "top": 979.1666666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+73% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 1067.7083333333333,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Rest of world",
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
            "x": 894.64306640625,
            "top": 438.8020833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "+48% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1360.84716796875,
            "top": 279.94791666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "78% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1363.45166015625,
            "top": 1044.2708333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 33.854166666666664,
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1625.203125,
            "top": 1014.3229166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "(22%) margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+9pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 438.8020833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating",
                "size": 33.854166666666664,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 33.854166666666664,
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
      "developer_fees": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 256.51041666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Developer fees",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              },
              {
                "text": "31% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 509.1145833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "R&D",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              },
              {
                "text": "29% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(10pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "infrastructure": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 763.0208333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Infrastructure",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              },
              {
                "text": "24% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 1000.0,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "G&A",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 1195.3125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "S&M",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              },
              {
                "text": "5% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g data-typography-role=\"brand\" transform=\"translate(515 243) scale(.76)\"><text x=\"0\" y=\"70\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\">R</text><g transform=\"translate(85 0) rotate(12 37 37)\"><rect width=\"74\" height=\"74\"/><rect x=\"26\" y=\"26\" width=\"20\" height=\"20\" fill=\"#f2f2f2\"/></g><text x=\"165\" y=\"70\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\">BLOX</text></g><g><rect x=\"35\" y=\"882\" width=\"122\" height=\"123\" rx=\"29\" fill=\"#00a5f7\"/><text x=\"96.0\" y=\"923\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">DAU</text><text data-operating-metric=\"dau\" x=\"96.0\" y=\"956\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">152M</text><text x=\"96.0\" y=\"987\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">+70% Y/Y</text></g><g><rect x=\"162\" y=\"880\" width=\"239\" height=\"127\" rx=\"29\" fill=\"#00a5f7\"/><text x=\"281.5\" y=\"921\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">DAU over 13</text><text data-operating-metric=\"dau_over_13\" x=\"281.5\" y=\"954\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">101M</text><text x=\"281.5\" y=\"985\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">+89% Y/Y</text></g><g><rect x=\"406\" y=\"880\" width=\"272\" height=\"127\" rx=\"29\" fill=\"#00a5f7\"/><text x=\"542.0\" y=\"921\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">Hours Engaged</text><text data-operating-metric=\"hours_engaged\" x=\"542.0\" y=\"954\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">39.6B</text><text x=\"542.0\" y=\"985\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">+91% Y/Y</text></g><g><rect x=\"682\" y=\"880\" width=\"146\" height=\"127\" rx=\"29\" fill=\"#00a5f7\"/><text x=\"755.0\" y=\"921\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">Bookings</text><text data-operating-metric=\"bookings\" x=\"755.0\" y=\"954\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">$1,922M</text><text x=\"755.0\" y=\"985\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">+70% Y/Y</text></g><text x=\"287\" y=\"1032\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777\">DAU = Daily Active Users</text></g>",
  "i18n": {
    "zh": {
      "name": "Roblox · 2025 财年第三季度",
      "meta": {
        "title": "Roblox 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月"
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +40%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +58%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +60%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +73%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +48%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 78%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (22%)",
            "同比 +9 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "developer_fees": {
          "label": "开发者费用",
          "notes": [
            "占收入 31%",
            "同比 +6 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 29%",
            "同比 (10 个百分点)"
          ]
        },
        "infrastructure": {
          "label": "基础设施",
          "notes": [
            "占收入 24%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 (0 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 5%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 260.41666666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +40%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 428.5375,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "北美",
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
                "x": 433.64794921875,
                "top": 605.46875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +58%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 709.6354166666666,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 807.2916666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +60%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 899.7395833333333,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "亚太",
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
                "x": 433.64794921875,
                "top": 979.1666666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +73%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 1067.7083333333333,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "世界其他地区",
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
                "x": 894.64306640625,
                "top": 438.8020833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "同比 +48%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1360.84716796875,
                "top": 279.94791666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 78%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1363.45166015625,
                "top": 1044.2708333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 33.854166666666664,
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1625.203125,
                "top": 1014.3229166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 (22%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +9 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 438.8020833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "运营",
                    "size": 33.854166666666664,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 33.854166666666664,
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
          "developer_fees": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 256.51041666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "开发者费用",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  },
                  {
                    "text": "占收入 31%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 509.1145833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "研发",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  },
                  {
                    "text": "占收入 29%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (10 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "infrastructure": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 763.0208333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "基础设施",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 1000.0,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 1195.3125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g data-typography-role=\"brand\" transform=\"translate(515 243) scale(.76)\"><text x=\"0\" y=\"70\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\">R</text><g transform=\"translate(85 0) rotate(12 37 37)\"><rect width=\"74\" height=\"74\"/><rect x=\"26\" y=\"26\" width=\"20\" height=\"20\" fill=\"#f2f2f2\"/></g><text x=\"165\" y=\"70\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\">BLOX</text></g><g><rect x=\"35\" y=\"882\" width=\"122\" height=\"123\" rx=\"29\" fill=\"#00a5f7\"/><text x=\"96.0\" y=\"923\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">日活用户</text><text data-operating-metric=\"dau\" x=\"96.0\" y=\"956\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">152M</text><text x=\"96.0\" y=\"987\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">同比 +70%</text></g><g><rect x=\"162\" y=\"880\" width=\"239\" height=\"127\" rx=\"29\" fill=\"#00a5f7\"/><text x=\"281.5\" y=\"921\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">13 岁以上日活用户</text><text data-operating-metric=\"dau_over_13\" x=\"281.5\" y=\"954\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">101M</text><text x=\"281.5\" y=\"985\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">同比 +89%</text></g><g><rect x=\"406\" y=\"880\" width=\"272\" height=\"127\" rx=\"29\" fill=\"#00a5f7\"/><text x=\"542.0\" y=\"921\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">参与时长</text><text data-operating-metric=\"hours_engaged\" x=\"542.0\" y=\"954\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">39.6B</text><text x=\"542.0\" y=\"985\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">同比 +91%</text></g><g><rect x=\"682\" y=\"880\" width=\"146\" height=\"127\" rx=\"29\" fill=\"#00a5f7\"/><text x=\"755.0\" y=\"921\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"#fff\">预订额</text><text data-operating-metric=\"bookings\" x=\"755.0\" y=\"954\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">$1,922M</text><text x=\"755.0\" y=\"985\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">同比 +70%</text></g><text x=\"287\" y=\"1032\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777\">DAU = 日活跃用户</text></g>"
    }
  }
});})();
