(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "roblox-q3-fy23",
  "name": "Roblox · Q3 FY23",
  "company": "Roblox",
  "meta": {
    "company": "Roblox",
    "title": "Roblox Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roblox-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2155.21728515625,
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
    "titleColor": "#155077",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 29,
      "note": 21,
      "lineGap": 7
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 459,
      "notes": [
        "+34% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#00a2ff",
      "labelColor": "#00a2ff"
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 128,
      "notes": [
        "+39% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#00a2ff",
      "labelColor": "#00a2ff"
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 74,
      "notes": [
        "+52% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#00a2ff",
      "labelColor": "#00a2ff"
    },
    {
      "id": "rest_of_world",
      "label": "Rest of world",
      "value": 53,
      "notes": [
        "+49% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#00a2ff",
      "labelColor": "#00a2ff"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 713,
      "notes": [
        "+38% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 4,
      "color": "#00a2ff",
      "labelColor": "#00a2ff"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 550,
      "notes": [
        "77% margin",
        "+1pp Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 5,
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 164,
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -300,
      "notes": [
        "(42%) margin",
        "+16pp Y/Y"
      ],
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 850,
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "developer_fees",
      "label": "Developer fees",
      "value": 171,
      "notes": [
        "24% of revenue",
        "+5pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "infrastructure",
      "label": "Infrastructure",
      "value": 219,
      "notes": [
        "31% of revenue",
        "+6pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 322,
      "notes": [
        "45% of revenue",
        "(0pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 98,
      "notes": [
        "14% of revenue",
        "(2pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 41,
      "notes": [
        "6% of revenue",
        "(0pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 459,
      "sourceWidth": 165.38525390625,
      "targetWidth": 165.38525390625,
      "y0": 464.250732421875,
      "y1": 658.285400390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cef7"
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 128,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "y0": 716.2353515625,
      "y1": 764.41845703125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cef7"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 74,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "y0": 893.3408203125,
      "y1": 800.88134765625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85cef7"
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 53,
      "sourceWidth": 19.53369140625,
      "targetWidth": 18.2314453125,
      "y0": 1061.981689453125,
      "y1": 823.01953125,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85cef7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 550,
      "sourceWidth": 197.94140625,
      "targetWidth": 197.94140625,
      "y0": 674.5634765625,
      "y1": 610.75341796875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 164,
      "sourceWidth": 58.60107421875,
      "targetWidth": 58.60107421875,
      "y0": 802.834716796875,
      "y1": 875.760498046875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 550,
      "sourceWidth": 197.94140625,
      "targetWidth": 197.94140625,
      "y0": 610.75341796875,
      "y1": 678.47021484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 300,
      "sourceWidth": 108.08642578125,
      "targetWidth": 106.7841796875,
      "y0": 901.805419921875,
      "y1": 830.8330078125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "developer_fees",
      "value": 171,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.20556640625,
      "y0": 610.102294921875,
      "y1": 374.395751953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "infrastructure",
      "value": 219,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "y0": 679.7724609375,
      "y1": 580.8017578125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 322,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "y0": 776.789794921875,
      "y1": 821.066162109375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 98,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "y0": 851.6689453125,
      "y1": 1054.8193359375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 41,
      "sourceWidth": 15.626953125,
      "targetWidth": 14.32470703125,
      "y0": 876.41162109375,
      "y1": 1241.691650390625,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 390.673828125,
        "y": 381.55810546875,
        "width": 72.92578125,
        "height": 165.38525390625
      },
      "europe": {
        "x": 390.673828125,
        "y": 692.794921875,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "apac": {
        "x": 390.673828125,
        "y": 880.318359375,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "rest_of_world": {
        "x": 390.673828125,
        "y": 1052.21484375,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "revenue": {
        "x": 858.18017578125,
        "y": 575.5927734375,
        "width": 72.92578125,
        "height": 256.54248046875
      },
      "gross_profit": {
        "x": 1320.4775390625,
        "y": 511.78271484375,
        "width": 72.92578125,
        "height": 197.94140625
      },
      "cost_of_revenue": {
        "x": 1320.4775390625,
        "y": 846.4599609375,
        "width": 72.92578125,
        "height": 58.60107421875
      },
      "operating_loss": {
        "x": 1570.5087890625,
        "y": 847.76220703125,
        "width": 72.92578125,
        "height": 108.08642578125
      },
      "operating_expenses": {
        "x": 1782.77490234375,
        "y": 579.49951171875,
        "width": 72.92578125,
        "height": 304.7255859375
      },
      "developer_fees": {
        "x": 2259.39697265625,
        "y": 343.79296875,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "infrastructure": {
        "x": 2259.39697265625,
        "y": 541.734375,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "rnd": {
        "x": 2259.39697265625,
        "y": 763.1162109375,
        "width": 72.92578125,
        "height": 115.89990234375
      },
      "ga": {
        "x": 2259.39697265625,
        "y": 1037.89013671875,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "sm": {
        "x": 2259.39697265625,
        "y": 1234.529296875,
        "width": 72.92578125,
        "height": 14.32470703125
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 286.494140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+34% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 416.71875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "North",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "America",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 597.73095703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+39% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 690.1904296875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Europe",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 782.64990234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+52% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 869.70712890625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "APAC",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 955.8486328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+49% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 1041.796875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Rest of world",
                "size": 39.0673828125,
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
            "top": 425.83447265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+38% Y/Y",
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
            "x": 1356.9404296875,
            "top": 322.95703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "77% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1356.9404296875,
            "top": 919.3857421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1606.9716796875,
            "top": 968.87109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(42%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+16pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1819.23779296875,
            "top": 421.927734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "developer_fees": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 343.79296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Developer fees",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "24% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2466.4541015625,
            "top": 539.1298828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Infrastructure",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "31% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2466.4541015625,
            "top": 768.3251953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "45% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2466.4541015625,
            "top": 1013.1474609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2466.4541015625,
            "top": 1208.484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "6% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(0.77)\">\n    <g transform=\"translate(670 285)\" data-typography-role=\"brand\">\n      <text x=\"0\" y=\"79\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\" fill=\"#000000\">R</text>\n      <g transform=\"translate(107 10) rotate(12 37 37)\">\n        <rect x=\"0\" y=\"0\" width=\"74\" height=\"74\" fill=\"#000000\"/>\n        <rect x=\"26\" y=\"26\" width=\"20\" height=\"20\" fill=\"#f2f2f2\"/>\n      </g>\n      <text x=\"188\" y=\"79\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\" fill=\"#000000\">BLOX</text>\n    </g>\n    <g data-typography-role=\"brand\" transform=\"translate(724 847)\" stroke=\"#2b2118\" stroke-width=\"2.3\" stroke-linejoin=\"round\">\n      <g transform=\"translate(0 27)\"><rect x=\"0\" y=\"26\" width=\"42\" height=\"62\" rx=\"6\" fill=\"#b91510\"/><circle cx=\"21\" cy=\"14\" r=\"19\" fill=\"#d28b16\"/><path d=\"M4 40 L39 66 M38 40 L6 72\" stroke=\"#ffd33f\" stroke-width=\"6\"/><rect x=\"7\" y=\"84\" width=\"12\" height=\"39\" fill=\"#c27a0b\"/><rect x=\"25\" y=\"84\" width=\"12\" height=\"39\" fill=\"#c27a0b\"/><path d=\"M43 0 L52 85\" stroke=\"#c89220\" stroke-width=\"4\"/></g>\n      <g transform=\"translate(65 10)\"><rect x=\"0\" y=\"30\" width=\"58\" height=\"74\" rx=\"5\" fill=\"#a76b30\"/><rect x=\"10\" y=\"6\" width=\"42\" height=\"36\" rx=\"5\" fill=\"#c58a45\"/><circle cx=\"18\" cy=\"46\" r=\"3\" fill=\"#111\"/><circle cx=\"38\" cy=\"46\" r=\"3\" fill=\"#111\"/><path d=\"M16 67 H42\" stroke=\"#1c1c1c\" stroke-width=\"5\"/><rect x=\"5\" y=\"101\" width=\"13\" height=\"43\" fill=\"#8c8c8c\"/><rect x=\"39\" y=\"101\" width=\"13\" height=\"43\" fill=\"#8c8c8c\"/></g>\n      <g transform=\"translate(145 0)\"><rect x=\"22\" y=\"55\" width=\"55\" height=\"80\" rx=\"10\" fill=\"#3b3b3b\"/><circle cx=\"50\" cy=\"35\" r=\"30\" fill=\"#ffd08b\"/><path d=\"M20 18 C35 0 64 0 78 18 L72 28 C58 19 40 18 28 29Z\" fill=\"#f7c02b\"/><path d=\"M38 41 Q50 54 63 41\" fill=\"none\" stroke=\"#3f2719\" stroke-width=\"3\"/><rect x=\"28\" y=\"131\" width=\"17\" height=\"55\" fill=\"#2d5d8f\"/><rect x=\"56\" y=\"131\" width=\"17\" height=\"55\" fill=\"#244f7c\"/><path d=\"M14 78 C0 63 0 44 17 37\" fill=\"none\" stroke=\"#3b3b3b\" stroke-width=\"15\"/><path d=\"M76 28 L95 4\" stroke=\"#666\" stroke-width=\"7\"/></g>\n      <g transform=\"translate(244 37)\"><rect x=\"4\" y=\"45\" width=\"53\" height=\"67\" rx=\"7\" fill=\"#5a4f55\"/><circle cx=\"31\" cy=\"27\" r=\"27\" fill=\"#ffd48b\"/><path d=\"M4 19 C26 -8 50 4 58 25 C45 18 24 17 6 29Z\" fill=\"#d44725\"/><path d=\"M16 36 Q31 51 46 36\" fill=\"none\" stroke=\"#6b2b22\" stroke-width=\"3\"/><rect x=\"9\" y=\"109\" width=\"16\" height=\"45\" fill=\"#5b4a3a\"/><rect x=\"37\" y=\"109\" width=\"16\" height=\"45\" fill=\"#5b4a3a\"/><path d=\"M55 46 L76 25\" stroke=\"#b7b7b7\" stroke-width=\"5\"/></g>\n      <g transform=\"translate(319 52)\"><rect x=\"7\" y=\"38\" width=\"58\" height=\"70\" rx=\"7\" fill=\"#1379d3\"/><rect x=\"15\" y=\"0\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#ffe12f\"/><circle cx=\"29\" cy=\"21\" r=\"3\" fill=\"#1c1c1c\"/><circle cx=\"46\" cy=\"21\" r=\"3\" fill=\"#1c1c1c\"/><path d=\"M29 32 Q38 24 47 32\" fill=\"none\" stroke=\"#1c1c1c\" stroke-width=\"3\"/><rect x=\"11\" y=\"104\" width=\"20\" height=\"57\" fill=\"#2db23d\"/><rect x=\"41\" y=\"104\" width=\"20\" height=\"57\" fill=\"#36a933\"/><path d=\"M64 46 L90 66\" stroke=\"#f3c22e\" stroke-width=\"14\"/></g>\n    </g></g><g><rect x=\"35\" y=\"893\" width=\"123\" height=\"123\" rx=\"30\" fill=\"#00a2ff\"/><text x=\"96.5\" y=\"932\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">DAU</text><text data-operating-metric=\"dau\" x=\"96.5\" y=\"965\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">70M</text><text x=\"96.5\" y=\"995\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+20% Y/Y</text></g><g><rect x=\"162\" y=\"891\" width=\"240\" height=\"127\" rx=\"30\" fill=\"#00a2ff\"/><text x=\"282.0\" y=\"930\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">DAU over 13</text><text data-operating-metric=\"dau_over_13\" x=\"282.0\" y=\"963\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">40M</text><text x=\"282.0\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+25% Y/Y</text></g><g><rect x=\"407\" y=\"891\" width=\"270\" height=\"127\" rx=\"30\" fill=\"#00a2ff\"/><text x=\"542.0\" y=\"930\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">Hours Engaged</text><text data-operating-metric=\"hours_engaged\" x=\"542.0\" y=\"963\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">16.0B</text><text x=\"542.0\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+20% Y/Y</text></g><g><rect x=\"682\" y=\"891\" width=\"146\" height=\"127\" rx=\"30\" fill=\"#00a2ff\"/><text x=\"755.0\" y=\"930\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">Bookings</text><text data-operating-metric=\"bookings\" x=\"755.0\" y=\"963\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">$840M</text><text x=\"755.0\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+20% Y/Y</text></g><text x=\"321\" y=\"1059\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">DAU = Daily Active Users</text><text x=\"130\" y=\"1104\" font-size=\"28\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "dau",
      "label": "DAU",
      "value": "70000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "70M",
      "basis": "unspecified",
      "notes": [
        "+20% Y/Y"
      ],
      "quote": "DAU\n70M\n+20% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          46,
          1163,
          160,
          160
        ]
      },
      "i18n": {
        "zh": {
          "label": "日活用户",
          "notes": [
            "同比 +20%"
          ]
        }
      }
    },
    {
      "id": "dau_over_13",
      "label": "DAU over 13",
      "value": "40000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "40M",
      "basis": "unspecified",
      "notes": [
        "+25% Y/Y"
      ],
      "quote": "DAU over 13\n40M\n+25% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          211,
          1160,
          313,
          165
        ]
      },
      "i18n": {
        "zh": {
          "label": "13 岁以上日活用户",
          "notes": [
            "同比 +25%"
          ]
        }
      }
    },
    {
      "id": "hours_engaged",
      "label": "Hours Engaged",
      "value": "16000000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "16.0B",
      "basis": "unspecified",
      "notes": [
        "+20% Y/Y"
      ],
      "quote": "Hours Engaged\n16.0B\n+20% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          530,
          1160,
          352,
          165
        ]
      },
      "i18n": {
        "zh": {
          "label": "参与时长",
          "notes": [
            "同比 +20%"
          ]
        }
      }
    },
    {
      "id": "bookings",
      "label": "Bookings",
      "value": "840",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$840M",
      "basis": "unspecified",
      "notes": [
        "+20% Y/Y"
      ],
      "quote": "Bookings\n$840M\n+20% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          888,
          1160,
          190,
          165
        ]
      },
      "i18n": {
        "zh": {
          "label": "预订额",
          "notes": [
            "同比 +20%"
          ]
        }
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Roblox · 2023 财年第三季度",
      "meta": {
        "title": "Roblox 2023 财年第三季度利润表",
        "period": "2023 财年第三季度"
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +34%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +39%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +52%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +49%"
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
            "利润率 77%",
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
            "利润率 (42%)",
            "同比 +16 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "developer_fees": {
          "label": "开发者费用",
          "notes": [
            "占收入 24%",
            "同比 +5 个百分点"
          ]
        },
        "infrastructure": {
          "label": "基础设施",
          "notes": [
            "占收入 31%",
            "同比 +6 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 45%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 14%",
            "同比 (2 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 6%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 286.494140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +34%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 440.810302734375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 597.73095703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +39%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 690.1904296875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 782.64990234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +52%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 869.70712890625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "亚太",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 955.8486328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +49%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 1041.796875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "世界其他地区",
                    "size": 39.0673828125,
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
                "top": 425.83447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +38%",
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
                "x": 1356.9404296875,
                "top": 322.95703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 77%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
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
                "x": 1356.9404296875,
                "top": 919.3857421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1606.9716796875,
                "top": 968.87109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (42%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +16 个百分点",
                    "size": 27.34716796875,
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
                "x": 1819.23779296875,
                "top": 421.927734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "developer_fees": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 343.79296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "开发者费用",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34716796875,
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
                "x": 2466.4541015625,
                "top": 539.1298828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "基础设施",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 31%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34716796875,
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
                "x": 2466.4541015625,
                "top": 768.3251953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 45%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2466.4541015625,
                "top": 1013.1474609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2466.4541015625,
                "top": 1208.484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(0.77)\">\n    <g transform=\"translate(670 285)\" data-typography-role=\"brand\">\n      <text x=\"0\" y=\"79\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\" fill=\"#000000\">R</text>\n      <g transform=\"translate(107 10) rotate(12 37 37)\">\n        <rect x=\"0\" y=\"0\" width=\"74\" height=\"74\" fill=\"#000000\"/>\n        <rect x=\"26\" y=\"26\" width=\"20\" height=\"20\" fill=\"#f2f2f2\"/>\n      </g>\n      <text x=\"188\" y=\"79\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"86\" font-weight=\"900\" fill=\"#000000\">BLOX</text>\n    </g>\n    <g data-typography-role=\"brand\" transform=\"translate(724 847)\" stroke=\"#2b2118\" stroke-width=\"2.3\" stroke-linejoin=\"round\">\n      <g transform=\"translate(0 27)\"><rect x=\"0\" y=\"26\" width=\"42\" height=\"62\" rx=\"6\" fill=\"#b91510\"/><circle cx=\"21\" cy=\"14\" r=\"19\" fill=\"#d28b16\"/><path d=\"M4 40 L39 66 M38 40 L6 72\" stroke=\"#ffd33f\" stroke-width=\"6\"/><rect x=\"7\" y=\"84\" width=\"12\" height=\"39\" fill=\"#c27a0b\"/><rect x=\"25\" y=\"84\" width=\"12\" height=\"39\" fill=\"#c27a0b\"/><path d=\"M43 0 L52 85\" stroke=\"#c89220\" stroke-width=\"4\"/></g>\n      <g transform=\"translate(65 10)\"><rect x=\"0\" y=\"30\" width=\"58\" height=\"74\" rx=\"5\" fill=\"#a76b30\"/><rect x=\"10\" y=\"6\" width=\"42\" height=\"36\" rx=\"5\" fill=\"#c58a45\"/><circle cx=\"18\" cy=\"46\" r=\"3\" fill=\"#111\"/><circle cx=\"38\" cy=\"46\" r=\"3\" fill=\"#111\"/><path d=\"M16 67 H42\" stroke=\"#1c1c1c\" stroke-width=\"5\"/><rect x=\"5\" y=\"101\" width=\"13\" height=\"43\" fill=\"#8c8c8c\"/><rect x=\"39\" y=\"101\" width=\"13\" height=\"43\" fill=\"#8c8c8c\"/></g>\n      <g transform=\"translate(145 0)\"><rect x=\"22\" y=\"55\" width=\"55\" height=\"80\" rx=\"10\" fill=\"#3b3b3b\"/><circle cx=\"50\" cy=\"35\" r=\"30\" fill=\"#ffd08b\"/><path d=\"M20 18 C35 0 64 0 78 18 L72 28 C58 19 40 18 28 29Z\" fill=\"#f7c02b\"/><path d=\"M38 41 Q50 54 63 41\" fill=\"none\" stroke=\"#3f2719\" stroke-width=\"3\"/><rect x=\"28\" y=\"131\" width=\"17\" height=\"55\" fill=\"#2d5d8f\"/><rect x=\"56\" y=\"131\" width=\"17\" height=\"55\" fill=\"#244f7c\"/><path d=\"M14 78 C0 63 0 44 17 37\" fill=\"none\" stroke=\"#3b3b3b\" stroke-width=\"15\"/><path d=\"M76 28 L95 4\" stroke=\"#666\" stroke-width=\"7\"/></g>\n      <g transform=\"translate(244 37)\"><rect x=\"4\" y=\"45\" width=\"53\" height=\"67\" rx=\"7\" fill=\"#5a4f55\"/><circle cx=\"31\" cy=\"27\" r=\"27\" fill=\"#ffd48b\"/><path d=\"M4 19 C26 -8 50 4 58 25 C45 18 24 17 6 29Z\" fill=\"#d44725\"/><path d=\"M16 36 Q31 51 46 36\" fill=\"none\" stroke=\"#6b2b22\" stroke-width=\"3\"/><rect x=\"9\" y=\"109\" width=\"16\" height=\"45\" fill=\"#5b4a3a\"/><rect x=\"37\" y=\"109\" width=\"16\" height=\"45\" fill=\"#5b4a3a\"/><path d=\"M55 46 L76 25\" stroke=\"#b7b7b7\" stroke-width=\"5\"/></g>\n      <g transform=\"translate(319 52)\"><rect x=\"7\" y=\"38\" width=\"58\" height=\"70\" rx=\"7\" fill=\"#1379d3\"/><rect x=\"15\" y=\"0\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#ffe12f\"/><circle cx=\"29\" cy=\"21\" r=\"3\" fill=\"#1c1c1c\"/><circle cx=\"46\" cy=\"21\" r=\"3\" fill=\"#1c1c1c\"/><path d=\"M29 32 Q38 24 47 32\" fill=\"none\" stroke=\"#1c1c1c\" stroke-width=\"3\"/><rect x=\"11\" y=\"104\" width=\"20\" height=\"57\" fill=\"#2db23d\"/><rect x=\"41\" y=\"104\" width=\"20\" height=\"57\" fill=\"#36a933\"/><path d=\"M64 46 L90 66\" stroke=\"#f3c22e\" stroke-width=\"14\"/></g>\n    </g></g><g><rect x=\"35\" y=\"893\" width=\"123\" height=\"123\" rx=\"30\" fill=\"#00a2ff\"/><text x=\"96.5\" y=\"932\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">日活用户</text><text data-operating-metric=\"dau\" x=\"96.5\" y=\"965\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">70M</text><text x=\"96.5\" y=\"995\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +20%</text></g><g><rect x=\"162\" y=\"891\" width=\"240\" height=\"127\" rx=\"30\" fill=\"#00a2ff\"/><text x=\"282.0\" y=\"930\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">13 岁以上日活用户</text><text data-operating-metric=\"dau_over_13\" x=\"282.0\" y=\"963\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">40M</text><text x=\"282.0\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +25%</text></g><g><rect x=\"407\" y=\"891\" width=\"270\" height=\"127\" rx=\"30\" fill=\"#00a2ff\"/><text x=\"542.0\" y=\"930\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">参与时长</text><text data-operating-metric=\"hours_engaged\" x=\"542.0\" y=\"963\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">16.0B</text><text x=\"542.0\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +20%</text></g><g><rect x=\"682\" y=\"891\" width=\"146\" height=\"127\" rx=\"30\" fill=\"#00a2ff\"/><text x=\"755.0\" y=\"930\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">预订额</text><text data-operating-metric=\"bookings\" x=\"755.0\" y=\"963\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">$840M</text><text x=\"755.0\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +20%</text></g><text x=\"321\" y=\"1059\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">DAU = 日活跃用户</text><text x=\"130\" y=\"1104\" font-size=\"28\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  }
});})();
