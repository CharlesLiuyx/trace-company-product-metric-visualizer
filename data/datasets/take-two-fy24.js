window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "take-two-fy24",
  "name": "Take-Two · FY24",
  "company": "Take-Two",
  "meta": {
    "company": "Take-Two",
    "title": "Take-Two FY24 Income Statement",
    "period": "FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/take-two-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.941,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2122.661,
    "periodX": 2431.293,
    "periodY": 319.05,
    "periodNoteY": 362.024
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#0a8ad2",
        "label": "#1478c6"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
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
    "linkOpacity": 1
  },
  "nodes": [
    {
      "id": "mobile",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Mobile",
      "value": 2.7,
      "valueText": "$2.7B",
      "notes": [
        "+8% Y/Y",
        "Includes Zynga"
      ]
    },
    {
      "id": "console",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Console",
      "value": 2.2,
      "valueText": "$2.2B",
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "pc_other",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "PC & other",
      "value": 0.4,
      "valueText": "$0.4B",
      "notes": [
        "(14%) Y/Y"
      ]
    },
    {
      "id": "platform_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 5.3,
      "valueText": "$5.3B",
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "game",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Game",
      "value": 4.7,
      "valueText": "$4.7B",
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "advertising",
      "col": 2,
      "order": 1,
      "type": "hub",
      "label": "Advertising",
      "value": 0.7,
      "valueText": "$0.7B",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 5.3,
      "valueText": "$5.3B",
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 2.2,
      "valueText": "$2.2B",
      "notes": [
        "42% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 3.1,
      "valueText": "($3.1B)"
    },
    {
      "id": "operating_loss",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "Operating loss",
      "value": -3.6,
      "valueText": "($3.6B)",
      "notes": [
        "(67%) margin",
        "(45pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 6,
      "order": 0,
      "type": "cost",
      "label": "Operating expenses",
      "value": 5.8,
      "valueText": "($5.8B)"
    },
    {
      "id": "impairment",
      "col": 7,
      "order": 0,
      "type": "cost",
      "label": "Impairment",
      "value": 2.3,
      "valueText": "($2.3B)",
      "notes": [
        "44% of revenue"
      ]
    },
    {
      "id": "sm",
      "col": 7,
      "order": 1,
      "type": "cost",
      "label": "S&M",
      "value": 1.6,
      "valueText": "($1.6B)",
      "notes": [
        "29% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 7,
      "order": 2,
      "type": "cost",
      "label": "R&D",
      "value": 0.9,
      "valueText": "($0.9B)",
      "notes": [
        "18% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 7,
      "order": 3,
      "type": "cost",
      "label": "G&A",
      "value": 0.7,
      "valueText": "($0.7B)",
      "notes": [
        "13% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "other",
      "col": 7,
      "order": 4,
      "type": "cost",
      "label": "Other",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [
        "5% of revenue",
        "+3pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "mobile",
      "target": "platform_revenue",
      "value": 2.7,
      "sourceWidth": 149.758,
      "targetWidth": 149.758,
      "y0": 621.823,
      "y1": 748.14,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8ac2e4"
    },
    {
      "source": "console",
      "target": "platform_revenue",
      "value": 2.2,
      "sourceWidth": 118.504,
      "targetWidth": 118.504,
      "y0": 883.574,
      "y1": 882.272,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8ac2e4"
    },
    {
      "source": "pc_other",
      "target": "platform_revenue",
      "value": 0.4,
      "sourceWidth": 23.44,
      "targetWidth": 23.44,
      "y0": 1095.189,
      "y1": 953.244,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#8ac2e4"
    },
    {
      "source": "platform_revenue",
      "target": "game",
      "value": 4.7,
      "sourceWidth": 256.542,
      "targetWidth": 255.24,
      "y0": 801.532,
      "y1": 701.911,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "platform_revenue",
      "target": "advertising",
      "value": 0.7,
      "sourceWidth": 35.161,
      "targetWidth": 35.161,
      "y0": 947.384,
      "y1": 1084.12,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "game",
      "target": "revenue",
      "value": 4.7,
      "sourceWidth": 255.24,
      "targetWidth": 256.542,
      "y0": 701.911,
      "y1": 801.532,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 35.161,
      "targetWidth": 35.161,
      "y0": 1084.12,
      "y1": 947.384,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.2,
      "sourceWidth": 122.411,
      "targetWidth": 122.411,
      "y0": 734.467,
      "y1": 652.425,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 3.1,
      "sourceWidth": 169.292,
      "targetWidth": 169.292,
      "y0": 880.318,
      "y1": 966.267,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.2,
      "sourceWidth": 122.411,
      "targetWidth": 123.713,
      "y0": 652.425,
      "y1": 733.816,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 3.6,
      "sourceWidth": 196.639,
      "targetWidth": 195.337,
      "y0": 952.593,
      "y1": 893.341,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "impairment",
      "value": 2.3,
      "sourceWidth": 127.62,
      "targetWidth": 127.62,
      "y0": 735.769,
      "y1": 550.85,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 1.6,
      "sourceWidth": 84.646,
      "targetWidth": 84.646,
      "y0": 841.902,
      "y1": 780.697,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.9,
      "sourceWidth": 52.09,
      "targetWidth": 52.09,
      "y0": 910.27,
      "y1": 963.662,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "sourceWidth": 39.067,
      "targetWidth": 39.067,
      "y0": 955.849,
      "y1": 1134.256,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.3,
      "sourceWidth": 15.627,
      "targetWidth": 14.325,
      "y0": 983.196,
      "y1": 1309.408,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 55.085,
    "nodes": {
      "mobile": {
        "x": 363.327,
        "y": 546.943,
        "width": 71.624,
        "height": 149.758
      },
      "console": {
        "x": 363.327,
        "y": 824.322,
        "width": 71.624,
        "height": 118.504
      },
      "pc_other": {
        "x": 363.327,
        "y": 1083.469,
        "width": 71.624,
        "height": 23.44
      },
      "platform_revenue": {
        "x": 674.563,
        "y": 673.261,
        "width": 71.624,
        "height": 291.703
      },
      "game": {
        "x": 983.196,
        "y": 574.291,
        "width": 71.624,
        "height": 255.24
      },
      "advertising": {
        "x": 985.8,
        "y": 1066.54,
        "width": 71.624,
        "height": 35.161
      },
      "revenue": {
        "x": 1297.037,
        "y": 673.261,
        "width": 71.624,
        "height": 291.703
      },
      "gross_profit": {
        "x": 1561.393,
        "y": 591.22,
        "width": 71.624,
        "height": 122.411
      },
      "cost_of_revenue": {
        "x": 1569.207,
        "y": 881.621,
        "width": 71.624,
        "height": 169.292
      },
      "operating_loss": {
        "x": 1751.521,
        "y": 854.273,
        "width": 71.624,
        "height": 196.639
      },
      "operating_expenses": {
        "x": 1910.395,
        "y": 671.959,
        "width": 71.624,
        "height": 319.05
      },
      "impairment": {
        "x": 2232.05,
        "y": 487.04,
        "width": 71.624,
        "height": 127.62
      },
      "sm": {
        "x": 2232.05,
        "y": 738.374,
        "width": 71.624,
        "height": 84.646
      },
      "rnd": {
        "x": 2232.05,
        "y": 937.617,
        "width": 71.624,
        "height": 52.09
      },
      "ga": {
        "x": 2232.05,
        "y": 1114.723,
        "width": 71.624,
        "height": 39.067
      },
      "other": {
        "x": 2232.05,
        "y": 1302.246,
        "width": 71.624,
        "height": 14.325
      }
    },
    "labels": {
      "mobile": {
        "blocks": [
          {
            "x": 402.394,
            "top": 446.67,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#1478c6"
              },
              {
                "text": "+8% Y/Y",
                "size": 37.765,
                "weight": 400,
                "color": "#1478c6"
              }
            ]
          },
          {
            "x": 203.15,
            "top": 526.107,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Mobile",
                "size": 37.765,
                "weight": 700,
                "color": "#1478c6"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 201.848,
            "top": 679.772,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Includes Zynga",
                "size": 27.347,
                "weight": 700,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "console": {
        "blocks": [
          {
            "x": 402.394,
            "top": 710.653,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#1478c6"
              },
              {
                "text": "(6%) Y/Y",
                "size": 37.765,
                "weight": 400,
                "color": "#1478c6"
              }
            ]
          },
          {
            "x": 203.15,
            "top": 791.766,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Console",
                "size": 37.765,
                "weight": 700,
                "color": "#1478c6"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "pc_other": {
        "blocks": [
          {
            "x": 402.394,
            "top": 969.8,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#1478c6"
              },
              {
                "text": "(14%) Y/Y",
                "size": 37.765,
                "weight": 400,
                "color": "#1478c6"
              }
            ]
          },
          {
            "x": 212.266,
            "top": 1067.842,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "PC & other",
                "size": 37.765,
                "weight": 700,
                "color": "#1478c6"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "platform_revenue": {
        "blocks": [
          {
            "x": 711.026,
            "top": 520.898,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.765,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(0%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "game": {
        "blocks": [
          {
            "x": 1018.356,
            "top": 423.23,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Game",
                "size": 37.765,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.347,
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
            "x": 1018.356,
            "top": 1118.629,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Advertising",
                "size": 37.765,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+7% Y/Y",
                "size": 27.347,
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
            "x": 1332.198,
            "top": 520.898,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.765,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(0%) Y/Y",
                "size": 27.347,
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
            "x": 1596.554,
            "top": 399.79,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.765,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "42% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.347,
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
            "x": 1605.669,
            "top": 1065.237,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.765,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 37.765,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.347,
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
            "x": 1787.984,
            "top": 1068.913,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating",
                "size": 37.765,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "loss",
                "size": 37.765,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(67%) margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(45pp) Y/Y",
                "size": 27.347,
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
            "x": 1946.858,
            "top": 515.689,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating",
                "size": 37.765,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 37.765,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "impairment": {
        "blocks": [
          {
            "x": 2431.293,
            "top": 488.342,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Impairment",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "44% of revenue",
                "size": 27.347,
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
            "x": 2431.293,
            "top": 727.956,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "S&M",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "29% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.347,
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
            "x": 2431.293,
            "top": 910.27,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "18% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.347,
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
            "x": 2431.293,
            "top": 1076.958,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "G&A",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "13% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.347,
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
            "x": 2431.293,
            "top": 1248.854,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "5% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans, Arial, sans-serif\" fill=\"#777777\" font-size=\"27.347\"><text x=\"813.904\" y=\"1308.757\" text-anchor=\"middle\">Zynga acquisition</text><text x=\"813.904\" y=\"1347.825\" text-anchor=\"middle\">completed May 23, 2022</text><text x=\"169.292\" y=\"1437.68\" fill=\"#000000\" font-size=\"37.765\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/take-two/company-logo.png",
      "x": 586.011,
      "y": 260.449,
      "width": 257.845,
      "height": 184.919
    },
    {
      "key": "mobile-store-icons",
      "href": "data/assets/raster-annotations/take-two/mobile-store-icons.png",
      "x": 106.784,
      "y": 566.477,
      "width": 203.15,
      "height": 98.971
    },
    {
      "key": "console-cluster",
      "href": "data/assets/raster-annotations/take-two/console-cluster.png",
      "x": 55.997,
      "y": 838.646,
      "width": 283.89,
      "height": 98.971
    },
    {
      "key": "steam-icon",
      "href": "data/assets/raster-annotations/take-two/steam-icon.png",
      "x": 170.594,
      "y": 1129.047,
      "width": 85.948,
      "height": 85.948
    },
    {
      "key": "studio-portfolio",
      "href": "data/assets/raster-annotations/take-two/studio-portfolio.png",
      "x": 62.508,
      "y": 1261.876,
      "width": 575.593,
      "height": 113.295
    }
  ],
  "i18n": {
    "zh": {
      "name": "Take-Two · 2024 财年",
      "meta": {
        "title": "Take-Two 2024 财年利润表",
        "period": "2024 财年",
        "periodNote": "截至 2024 年 3 月",
        "titleTextLength": 1600
      },
      "nodes": {
        "mobile": {
          "label": "移动端",
          "notes": [
            "同比 +8%",
            "包括 Zynga"
          ]
        },
        "console": {
          "label": "主机",
          "notes": [
            "同比 (6%)"
          ]
        },
        "pc_other": {
          "label": "PC 及其他",
          "notes": [
            "同比 (14%)"
          ]
        },
        "platform_revenue": {
          "label": "收入",
          "notes": [
            "同比 (0%)"
          ]
        },
        "game": {
          "label": "游戏",
          "notes": [
            "同比 (1%)"
          ]
        },
        "advertising": {
          "label": "广告",
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (0%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 42%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (67%)",
            "同比 (45 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "impairment": {
          "label": "减值",
          "notes": [
            "占收入 44%"
          ]
        },
        "sm": {
          "label": "销售与市场营销",
          "notes": [
            "占收入 29%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 18%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 13%",
            "同比 (2 个百分点)"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "占收入 5%",
            "同比 +3 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "mobile": {
            "blocks": [
              {
                "x": 402.394,
                "top": 446.67,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#1478c6"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#1478c6"
                  }
                ]
              },
              {
                "x": 203.15,
                "top": 526.107,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "移动端",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#1478c6"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 201.848,
                "top": 679.772,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "包括 Zynga",
                    "size": 27.347,
                    "weight": 700,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "console": {
            "blocks": [
              {
                "x": 402.394,
                "top": 710.653,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#1478c6"
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#1478c6"
                  }
                ]
              },
              {
                "x": 203.15,
                "top": 791.766,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "主机",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#1478c6"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "pc_other": {
            "blocks": [
              {
                "x": 402.394,
                "top": 969.8,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#1478c6"
                  },
                  {
                    "text": "同比 (14%)",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#1478c6"
                  }
                ]
              },
              {
                "x": 212.266,
                "top": 1067.842,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "PC 及其他",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#1478c6"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "platform_revenue": {
            "blocks": [
              {
                "x": 711.026,
                "top": 520.898,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (0%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "game": {
            "blocks": [
              {
                "x": 1018.356,
                "top": 423.23,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "游戏",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.347,
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
                "x": 1018.356,
                "top": 1118.629,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "广告",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.347,
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
                "x": 1332.198,
                "top": 520.898,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (0%)",
                    "size": 27.347,
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
                "x": 1596.554,
                "top": 399.79,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 42%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.347,
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
                "x": 1605.669,
                "top": 1065.237,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.347,
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
                "x": 1787.984,
                "top": 1068.913,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "亏损",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "利润率 (67%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (45 个百分点)",
                    "size": 27.347,
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
                "x": 1946.858,
                "top": 515.689,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.765,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 37.765,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "impairment": {
            "blocks": [
              {
                "x": 2431.293,
                "top": 488.342,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "减值",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 44%",
                    "size": 27.347,
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
                "x": 2431.293,
                "top": 727.956,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "销售与市场营销",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 29%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.347,
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
                "x": 2431.293,
                "top": 910.27,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.347,
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
                "x": 2431.293,
                "top": 1076.958,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 13%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.347,
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
                "x": 2431.293,
                "top": 1248.854,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans, Arial, sans-serif\" fill=\"#777777\" font-size=\"27.347\"><text x=\"813.904\" y=\"1308.757\" text-anchor=\"middle\">Zynga 收购</text><text x=\"813.904\" y=\"1347.825\" text-anchor=\"middle\">于 2022 年 5 月 23 日完成</text><text x=\"169.292\" y=\"1437.68\" fill=\"#000000\" font-size=\"37.765\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});
