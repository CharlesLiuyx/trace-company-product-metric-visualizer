(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "electronic-arts-q1-fy25",
  "name": "Electronic Arts · Q1 FY25",
  "company": "Electronic Arts",
  "meta": {
    "company": "Electronic Arts",
    "title": "Electronic Arts Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "referenceImage": {
      "src": "input/processed/electronic-arts-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3125,
    "titleSize": 111.97916666666666,
    "titleWeight": 800,
    "titleTextLength": 2448.22265625,
    "periodX": 2443.013671875,
    "periodY": 261.71875,
    "periodNoteY": 305.9895833333333,
    "periodSize": 39.0625,
    "periodNoteSize": 28.645833333333332
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155477",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#e9238e",
        "label": "#eb268f"
      },
      "hub": {
        "node": "#9566ba",
        "label": "#9966c2"
      },
      "profit": {
        "node": "#299f2b",
        "label": "#009453"
      },
      "cost": {
        "node": "#ce0000",
        "label": "#9c1b00"
      }
    },
    "linkTint": {
      "source": "#e99ac5",
      "hub": "#c9b5d9",
      "profit": "#99cd99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0625,
      "value": 39.0625,
      "note": 27.34375,
      "lineGap": 10.416666666666666
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "console",
      "label": "Console",
      "value": 1,
      "valueText": "$1.0B",
      "notes": [
        "(14%) Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "pc_other",
      "label": "PC & other",
      "value": 0.4,
      "valueText": "$0.4B",
      "notes": [
        "(19%) Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "mobile",
      "label": "Mobile",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [
        "(5%) Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "platform_revenue",
      "label": "Revenue",
      "value": 1.7,
      "valueText": "$1.7B",
      "notes": [
        "(14%) Y/Y"
      ],
      "type": "hub"
    },
    {
      "id": "live_services",
      "label": "Live services",
      "value": 1.4,
      "valueText": "$1.4B",
      "notes": [
        "(5%) Y/Y"
      ],
      "type": "hub"
    },
    {
      "id": "full_games",
      "label": "Full games",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [
        "(44%) Y/Y"
      ],
      "type": "hub"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1.7,
      "valueText": "$1.7B",
      "notes": [
        "(14%) Y/Y"
      ],
      "type": "hub"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.4,
      "valueText": "$1.4B",
      "notes": [
        "84% margin",
        "+3pp Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.4,
      "valueText": "$0.4B",
      "notes": [
        "22% margin",
        "(6pp) Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1,
      "valueText": "($1.0B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [
        "17% margin",
        "(4pp) Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.03,
      "valueText": "$30M",
      "notes": [],
      "type": "profit"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.6,
      "valueText": "($0.6B)",
      "notes": [
        "38% of revenue",
        "+7pp Y/Y"
      ],
      "type": "cost"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": [
        "12% of revenue",
        "+4pp Y/Y"
      ],
      "type": "cost"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": [
        "11% of revenue",
        "+2pp Y/Y"
      ],
      "type": "cost"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.019,
      "valueText": "($19M)",
      "notes": [],
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "console",
      "target": "platform_revenue",
      "value": 1,
      "sourceWidth": 192.70833333333331,
      "targetWidth": 191.40625,
      "y0": 660.15625,
      "y1": 779.296875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pc_other",
      "target": "platform_revenue",
      "value": 0.4,
      "sourceWidth": 70.3125,
      "targetWidth": 70.3125,
      "y0": 911.4583333333333,
      "y1": 910.15625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "mobile",
      "target": "platform_revenue",
      "value": 0.3,
      "sourceWidth": 54.6875,
      "targetWidth": 55.98958333333333,
      "y0": 1093.75,
      "y1": 973.3072916666666,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "platform_revenue",
      "target": "live_services",
      "value": 1.4,
      "sourceWidth": 268.22916666666663,
      "targetWidth": 268.22916666666663,
      "y0": 817.7083333333333,
      "y1": 714.84375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "platform_revenue",
      "target": "full_games",
      "value": 0.3,
      "sourceWidth": 49.479166666666664,
      "targetWidth": 48.17708333333333,
      "y0": 976.5625,
      "y1": 1076.171875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "live_services",
      "target": "revenue",
      "value": 1.4,
      "sourceWidth": 268.22916666666663,
      "targetWidth": 268.22916666666663,
      "y0": 714.84375,
      "y1": 817.7083333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "full_games",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 48.17708333333333,
      "targetWidth": 49.479166666666664,
      "y0": 1076.171875,
      "y1": 976.5625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.4,
      "sourceWidth": 266.9270833333333,
      "targetWidth": 266.9270833333333,
      "y0": 817.0572916666666,
      "y1": 728.515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.3,
      "sourceWidth": 50.78125,
      "targetWidth": 50.78125,
      "y0": 975.9114583333333,
      "y1": 1065.7552083333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.4,
      "sourceWidth": 70.3125,
      "targetWidth": 70.3125,
      "y0": 630.2083333333333,
      "y1": 550.78125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1,
      "sourceWidth": 196.61458333333331,
      "targetWidth": 196.61458333333331,
      "y0": 763.671875,
      "y1": 866.5364583333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 48.17708333333333,
      "targetWidth": 48.17708333333333,
      "y0": 539.7135416666666,
      "y1": 447.265625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 22.135416666666664,
      "targetWidth": 22.135416666666664,
      "y0": 574.8697916666666,
      "y1": 685.546875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.03,
      "sourceWidth": 5.208333333333333,
      "targetWidth": 6.510416666666666,
      "y0": 528.6458333333333,
      "y1": 474.609375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.6,
      "sourceWidth": 119.79166666666666,
      "targetWidth": 119.79166666666666,
      "y0": 828.125,
      "y1": 886.71875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.2,
      "sourceWidth": 39.0625,
      "targetWidth": 39.0625,
      "y0": 907.5520833333333,
      "y1": 1049.4791666666665,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 33.854166666666664,
      "targetWidth": 33.854166666666664,
      "y0": 944.0104166666666,
      "y1": 1175.78125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.019,
      "sourceWidth": 3.90625,
      "targetWidth": 2.6041666666666665,
      "y0": 962.890625,
      "y1": 1295.5729166666665,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "console": {
        "x": 369.837890625,
        "y": 563.8020833333333,
        "width": 72.92578125,
        "height": 192.70833333333331
      },
      "pc_other": {
        "x": 369.837890625,
        "y": 876.3020833333333,
        "width": 72.92578125,
        "height": 70.3125
      },
      "mobile": {
        "x": 369.837890625,
        "y": 1066.40625,
        "width": 72.92578125,
        "height": 54.6875
      },
      "platform_revenue": {
        "x": 681.07470703125,
        "y": 683.59375,
        "width": 72.92578125,
        "height": 317.7083333333333
      },
      "live_services": {
        "x": 992.3115234375,
        "y": 580.7291666666666,
        "width": 72.92578125,
        "height": 268.22916666666663
      },
      "full_games": {
        "x": 994.916015625,
        "y": 1052.0833333333333,
        "width": 72.92578125,
        "height": 48.17708333333333
      },
      "revenue": {
        "x": 1304.8505859375,
        "y": 683.59375,
        "width": 72.92578125,
        "height": 317.7083333333333
      },
      "gross_profit": {
        "x": 1613.48291015625,
        "y": 595.0520833333333,
        "width": 72.92578125,
        "height": 266.9270833333333
      },
      "cost_of_revenue": {
        "x": 1614.78515625,
        "y": 1040.3645833333333,
        "width": 72.92578125,
        "height": 50.78125
      },
      "operating_profit": {
        "x": 1927.32421875,
        "y": 515.625,
        "width": 72.92578125,
        "height": 70.3125
      },
      "operating_expenses": {
        "x": 1927.32421875,
        "y": 768.2291666666666,
        "width": 72.92578125,
        "height": 196.61458333333331
      },
      "interest": {
        "x": 2135.68359375,
        "y": 526.0416666666666,
        "width": 72.92578125,
        "height": 5.208333333333333
      },
      "net_profit": {
        "x": 2238.56103515625,
        "y": 423.1770833333333,
        "width": 72.92578125,
        "height": 54.6875
      },
      "tax": {
        "x": 2238.56103515625,
        "y": 674.4791666666666,
        "width": 72.92578125,
        "height": 22.135416666666664
      },
      "rnd": {
        "x": 2238.56103515625,
        "y": 826.8229166666666,
        "width": 72.92578125,
        "height": 119.79166666666666
      },
      "sm": {
        "x": 2238.56103515625,
        "y": 1029.9479166666665,
        "width": 72.92578125,
        "height": 39.0625
      },
      "ga": {
        "x": 2238.56103515625,
        "y": 1158.8541666666665,
        "width": 72.92578125,
        "height": 33.854166666666664
      },
      "other": {
        "x": 2238.56103515625,
        "y": 1294.2708333333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      }
    },
    "labels": {
      "platform_revenue": {
        "blocks": [
          {
            "x": 717.53759765625,
            "top": 537.7604166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800,
                "color": "#9966c2"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#9966c2"
              },
              {
                "text": "(14%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "live_services": {
        "blocks": [
          {
            "x": 1028.7744140625,
            "top": 429.6875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Live services",
                "size": 39.0625,
                "weight": 800,
                "color": "#9966c2"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#9966c2"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "full_games": {
        "blocks": [
          {
            "x": 1035.28564453125,
            "top": 1113.28125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Full games",
                "size": 39.0625,
                "weight": 800,
                "color": "#9966c2"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#9966c2"
              },
              {
                "text": "(44%) Y/Y",
                "size": 27.34375,
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
            "x": 1341.3134765625,
            "top": 535.15625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800,
                "color": "#9966c2"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#9966c2"
              },
              {
                "text": "(14%) Y/Y",
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
            "x": 1649.94580078125,
            "top": 404.94791666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#009453"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#009453"
              },
              {
                "text": "84% margin",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1962.48486328125,
            "top": 325.5208333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#009453"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#009453"
              },
              {
                "text": "22% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 27.34375,
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
            "x": 2435.2001953125,
            "top": 360.6770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#009453"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#009453"
              },
              {
                "text": "17% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "console": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 467.44791666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#eb268f"
              },
              {
                "text": "(14%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 582.03125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Console",
                "size": 39.0625,
                "weight": 800,
                "color": "#eb268f"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "pc_other": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 774.7395833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#eb268f"
              },
              {
                "text": "(19%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 854.1666666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "PC & other",
                "size": 39.0625,
                "weight": 800,
                "color": "#eb268f"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "mobile": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 968.75,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#eb268f"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 1048.1770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Mobile",
                "size": 39.0625,
                "weight": 800,
                "color": "#eb268f"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1651.248046875,
            "top": 1101.5625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "revenue",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#9c1b00"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1949.46240234375,
            "top": 976.5625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "expenses",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#9c1b00"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2174.7509765625,
            "top": 545.5729166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Interest",
                "size": 31.25,
                "weight": 800,
                "color": "#009453"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#009453"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 643.2291666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Tax",
                "size": 28.645833333333332,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#9c1b00"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2445.6181640625,
            "top": 846.3541666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#9c1b00"
              },
              {
                "text": "38% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
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
            "x": 2435.2001953125,
            "top": 1006.5104166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#9c1b00"
              },
              {
                "text": "12% of revenue",
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
      "ga": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 1136.71875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#9c1b00"
              },
              {
                "text": "11% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34375,
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
            "x": 2435.2001953125,
            "top": 1268.2291666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 800,
                "color": "#9c1b00"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#9c1b00"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "net_bookings",
      "value": "1.3",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.3B"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><rect x=\"141\" y=\"1014\" width=\"377\" height=\"57\" rx=\"20\" fill=\"#9566ba\"/><text x=\"176\" y=\"1051\" font-size=\"21\" font-weight=\"700\" fill=\"#ffffff\">Net bookings</text><text data-operating-metric=\"net_bookings\" x=\"324\" y=\"1051\" font-size=\"21\" fill=\"#ffffff\">$1.3B</text><text x=\"384\" y=\"1051\" font-size=\"21\" fill=\"#ffffff\">(-19% Y/Y)</text><text x=\"131\" y=\"1103\" font-size=\"30\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Electronic Arts · 2025 财年第一季度",
      "meta": {
        "title": "Electronic Arts 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 6 月"
      },
      "nodes": {
        "console": {
          "label": "主机",
          "notes": [
            "同比 (14%)"
          ]
        },
        "pc_other": {
          "label": "PC 及其他",
          "notes": [
            "同比 (19%)"
          ]
        },
        "mobile": {
          "label": "移动端",
          "notes": [
            "同比 (5%)"
          ]
        },
        "platform_revenue": {
          "label": "收入",
          "notes": [
            "同比 (14%)"
          ]
        },
        "live_services": {
          "label": "在线服务",
          "notes": [
            "同比 (5%)"
          ]
        },
        "full_games": {
          "label": "完整游戏",
          "notes": [
            "同比 (44%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (14%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 84%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 22%",
            "同比 (6 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 17%",
            "同比 (4 个百分点)"
          ]
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "tax": {
          "label": "所得税",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 38%",
            "同比 +7 个百分点"
          ]
        },
        "sm": {
          "label": "销售及营销",
          "notes": [
            "占收入 12%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 11%",
            "同比 +2 个百分点"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "platform_revenue": {
            "blocks": [
              {
                "x": 717.53759765625,
                "top": 537.7604166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#9966c2"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#9966c2"
                  },
                  {
                    "text": "同比 (14%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "live_services": {
            "blocks": [
              {
                "x": 1028.7744140625,
                "top": 429.6875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "在线服务",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#9966c2"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#9966c2"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "full_games": {
            "blocks": [
              {
                "x": 1035.28564453125,
                "top": 1113.28125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "完整游戏",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#9966c2"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#9966c2"
                  },
                  {
                    "text": "同比 (44%)",
                    "size": 27.34375,
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
                "x": 1341.3134765625,
                "top": 535.15625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#9966c2"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#9966c2"
                  },
                  {
                    "text": "同比 (14%)",
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
                "x": 1649.94580078125,
                "top": 404.94791666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#009453"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#009453"
                  },
                  {
                    "text": "利润率 84%",
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1962.48486328125,
                "top": 325.5208333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#009453"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#009453"
                  },
                  {
                    "text": "利润率 22%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 27.34375,
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
                "x": 2435.2001953125,
                "top": 360.6770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#009453"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#009453"
                  },
                  {
                    "text": "利润率 17%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "console": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 467.44791666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#eb268f"
                  },
                  {
                    "text": "同比 (14%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 582.03125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "主机",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#eb268f"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "pc_other": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 774.7395833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#eb268f"
                  },
                  {
                    "text": "同比 (19%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 854.1666666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "PC 及其他",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#eb268f"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "mobile": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 968.75,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#eb268f"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 1048.1770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "移动端",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#eb268f"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1651.248046875,
                "top": 1101.5625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "成本",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#9c1b00"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1949.46240234375,
                "top": 976.5625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "费用",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#9c1b00"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2174.7509765625,
                "top": 545.5729166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#009453"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#009453"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 643.2291666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "所得税",
                    "size": 28.645833333333332,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#9c1b00"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2445.6181640625,
                "top": 846.3541666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "占收入 38%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
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
                "x": 2435.2001953125,
                "top": 1006.5104166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售及营销",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "占收入 12%",
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
          "ga": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 1136.71875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34375,
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
                "x": 2435.2001953125,
                "top": 1268.2291666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#9c1b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#9c1b00"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><rect x=\"141\" y=\"1014\" width=\"377\" height=\"57\" rx=\"20\" fill=\"#9566ba\"/><text x=\"176\" y=\"1051\" font-size=\"21\" font-weight=\"700\" fill=\"#ffffff\">净预订额</text><text data-operating-metric=\"net_bookings\" x=\"324\" y=\"1051\" font-size=\"21\" fill=\"#ffffff\">$1.3B</text><text x=\"384\" y=\"1051\" font-size=\"21\" fill=\"#ffffff\">（同比 -19%）</text><text x=\"131\" y=\"1103\" font-size=\"30\" font-weight=\"800\" fill=\"#000000\">来源：季度财报</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "ea-logo",
      "href": "data/assets/raster-annotations/electronic-arts/ea-logo.png",
      "x": 597.73095703125,
      "y": 226.5625,
      "width": 240.91552734375,
      "height": 240.88541666666666
    },
    {
      "key": "playstation",
      "href": "data/assets/raster-annotations/electronic-arts/playstation.png",
      "x": 74.22802734375,
      "y": 630.2083333333333,
      "width": 108.08642578125,
      "height": 87.23958333333333
    },
    {
      "key": "xbox",
      "href": "data/assets/raster-annotations/electronic-arts/xbox.png",
      "x": 181.01220703125,
      "y": 634.1145833333333,
      "width": 84.64599609375,
      "height": 85.9375
    },
    {
      "key": "switch",
      "href": "data/assets/raster-annotations/electronic-arts/switch.png",
      "x": 269.56494140625,
      "y": 634.1145833333333,
      "width": 84.64599609375,
      "height": 85.9375
    },
    {
      "key": "steam",
      "href": "data/assets/raster-annotations/electronic-arts/steam.png",
      "x": 84.64599609375,
      "y": 899.7395833333333,
      "width": 80.7392578125,
      "height": 80.72916666666666
    },
    {
      "key": "origin",
      "href": "data/assets/raster-annotations/electronic-arts/origin.png",
      "x": 171.896484375,
      "y": 911.4583333333333,
      "width": 171.896484375,
      "height": 65.10416666666666
    },
    {
      "key": "app-store",
      "href": "data/assets/raster-annotations/electronic-arts/app-store.png",
      "x": 130.224609375,
      "y": 1092.4479166666665,
      "width": 91.1572265625,
      "height": 92.44791666666666
    },
    {
      "key": "google-play",
      "href": "data/assets/raster-annotations/electronic-arts/google-play.png",
      "x": 235.70654296875,
      "y": 1095.0520833333333,
      "width": 83.34375,
      "height": 91.14583333333333
    }
  ]
});})();
