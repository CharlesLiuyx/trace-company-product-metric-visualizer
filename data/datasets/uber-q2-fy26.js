(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "uber-q2-fy26",
  "name": "Uber - Q2 FY26",
  "meta": {
    "title": "Uber Q2 FY26 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/uber-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 700,
    "logoX": 647.21630859375,
    "logoY": 247.4267578125,
    "logoWidth": 455.7861328125,
    "logoHeight": 171.896484375,
    "logoViewBox": "0 0 350 132",
    "logoSvg": "<text x=\"175\" y=\"123\" text-anchor=\"middle\" font-size=\"150\" font-weight=\"500\" fill=\"#000\" >Uber</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155679",
    "noteColor": "#7c7c7c",
    "linkOpacity": 1,
    "labelYOffset": 0,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "mobility",
      "label": "Mobility",
      "value": 7.4,
      "valueText": "$7.4B",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#878787",
      "notes": [
        "+1% Y/Y",
        "30% adjusted margin",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "delivery",
      "label": "Delivery",
      "value": 5.2,
      "valueText": "$5.2B",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#878787",
      "notes": [
        "+28% Y/Y",
        "20% adjusted margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "freight",
      "label": "Uber Freight",
      "value": 1.6,
      "valueText": "$1.6B",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#878787",
      "notes": [
        "+26% Y/Y",
        "(2%) adjusted margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 14.2,
      "valueText": "$14.2B",
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#878787",
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 6.4,
      "valueText": "$6.4B",
      "type": "profit",
      "col": 2,
      "order": 4,
      "color": "#279f2b",
      "labelColor": "#009655",
      "linkTint": "#98cd97",
      "notes": [
        "45% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 7.8,
      "valueText": "($7.8B)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#ce0000",
      "labelColor": "#a61c06",
      "linkTint": "#df8587",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.9,
      "valueText": "$1.9B",
      "type": "profit",
      "col": 3,
      "order": 6,
      "color": "#279f2b",
      "labelColor": "#009655",
      "linkTint": "#98cd97",
      "notes": [
        "13% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.5,
      "valueText": "($4.5B)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#ce0000",
      "labelColor": "#a61c06",
      "linkTint": "#df8587",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 1.4,
      "valueText": "$1.4B",
      "type": "profit",
      "col": 4,
      "order": 8,
      "color": "#279f2b",
      "labelColor": "#009655",
      "linkTint": "#98cd97",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2.4,
      "valueText": "$2.4B",
      "type": "profit",
      "col": 4,
      "order": 9,
      "color": "#279f2b",
      "labelColor": "#009655",
      "linkTint": "#98cd97",
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.8,
      "valueText": "($0.8B)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "color": "#ce0000",
      "labelColor": "#a61c06",
      "linkTint": "#df8587",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 1.5,
      "valueText": "($1.5B)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "color": "#ce0000",
      "labelColor": "#a61c06",
      "linkTint": "#df8587",
      "notes": [
        "11% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1.0,
      "valueText": "($1.0B)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "color": "#ce0000",
      "labelColor": "#a61c06",
      "linkTint": "#df8587",
      "notes": [
        "7% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.9,
      "valueText": "($0.9B)",
      "type": "cost",
      "col": 4,
      "order": 13,
      "color": "#ce0000",
      "labelColor": "#a61c06",
      "linkTint": "#df8587",
      "notes": [
        "7% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "operations",
      "label": "Operations",
      "value": 0.8,
      "valueText": "($0.8B)",
      "type": "cost",
      "col": 4,
      "order": 14,
      "color": "#ce0000",
      "labelColor": "#a61c06",
      "linkTint": "#df8587",
      "notes": [
        "6% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 4,
      "order": 15,
      "color": "#ce0000",
      "labelColor": "#a61c06",
      "linkTint": "#df8587",
      "notes": [
        "1% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "mobility",
      "target": "revenue",
      "value": 7.4,
      "y0": 497.0,
      "y1": 734.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 220,
      "targetWidth": 220
    },
    {
      "source": "delivery",
      "target": "revenue",
      "value": 5.2,
      "y0": 845.5,
      "y1": 923.0,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 157,
      "targetWidth": 158
    },
    {
      "source": "freight",
      "target": "revenue",
      "value": 1.6,
      "y0": 1115.5,
      "y1": 1026.0,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 47,
      "targetWidth": 48
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 6.4,
      "y0": 720.0,
      "y1": 600.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 192,
      "targetWidth": 191
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 7.8,
      "y0": 933.0,
      "y1": 1021.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 234,
      "targetWidth": 235
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.9,
      "y0": 533.5,
      "y1": 442.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 57,
      "targetWidth": 57
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.5,
      "y0": 629.0,
      "y1": 695.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 134,
      "targetWidth": 133
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.1,
      "y0": 430.0,
      "y1": 365.0,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 32,
      "targetWidth": 32
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.8,
      "y0": 458.5,
      "y1": 527.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 25,
      "targetWidth": 25
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 1.4,
      "y0": 316.0,
      "y1": 329.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 40,
      "targetWidth": 40
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 1.5,
      "y0": 652.5,
      "y1": 691.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 47,
      "targetWidth": 45
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.0,
      "y0": 691.5,
      "y1": 848.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 31,
      "targetWidth": 31
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.9,
      "y0": 720.5,
      "y1": 994.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 27,
      "targetWidth": 27
    },
    {
      "source": "operating_expenses",
      "target": "operations",
      "value": 0.8,
      "y0": 745.5,
      "y1": 1129.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 23,
      "targetWidth": 23
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.2,
      "y0": 759.5,
      "y1": 1266.5,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 5,
      "targetWidth": 5
    }
  ],
  "layout": {
    "nodes": {
      "mobility": {
        "x": 377,
        "y": 387,
        "width": 73,
        "height": 220
      },
      "delivery": {
        "x": 377,
        "y": 767,
        "width": 73,
        "height": 157
      },
      "freight": {
        "x": 377,
        "y": 1092,
        "width": 73,
        "height": 47
      },
      "revenue": {
        "x": 844,
        "y": 624,
        "width": 72,
        "height": 426
      },
      "gross_profit": {
        "x": 1311,
        "y": 505,
        "width": 73,
        "height": 191
      },
      "cost_of_revenue": {
        "x": 1311,
        "y": 904,
        "width": 73,
        "height": 235
      },
      "operating_profit": {
        "x": 1778,
        "y": 414,
        "width": 73,
        "height": 57
      },
      "operating_expenses": {
        "x": 1778,
        "y": 629,
        "width": 73,
        "height": 133
      },
      "other": {
        "x": 2144,
        "y": 296,
        "width": 73,
        "height": 40
      },
      "net_profit": {
        "x": 2245,
        "y": 309,
        "width": 73,
        "height": 72
      },
      "tax": {
        "x": 2246,
        "y": 515,
        "width": 72,
        "height": 25
      },
      "sm": {
        "x": 2246,
        "y": 669,
        "width": 72,
        "height": 45
      },
      "rnd": {
        "x": 2246,
        "y": 833,
        "width": 72,
        "height": 31
      },
      "ga": {
        "x": 2246,
        "y": 981,
        "width": 72,
        "height": 27
      },
      "operations": {
        "x": 2246,
        "y": 1118,
        "width": 72,
        "height": 23
      },
      "da": {
        "x": 2246,
        "y": 1264,
        "width": 72,
        "height": 5
      }
    },
    "labels": {
      "mobility": {
        "blocks": [
          {
            "x": 414.1142578125,
            "top": 289.0986328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          },
          {
            "x": 213.568359375,
            "top": 484.435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Mobility",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "30% adjusted margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "delivery": {
        "blocks": [
          {
            "x": 414.1142578125,
            "top": 670.65673828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          },
          {
            "x": 213.568359375,
            "top": 813.90380859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Delivery",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "20% adjusted margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "freight": {
        "blocks": [
          {
            "x": 414.1142578125,
            "top": 989.70703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+26% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          },
          {
            "x": 213.568359375,
            "top": 1076.95751953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "(2%) adjusted margin",
                "size": 27.34716796875,
                "weight": 700
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 880.318359375,
            "top": 472.71533203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1347.82470703125,
            "top": 315.1435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "45% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1814.02880859375,
            "top": 225.28857421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "13% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1347.82470703125,
            "top": 1152.48779296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.8583984375,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1814.02880859375,
            "top": 777.44091796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#7c7c7c"
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
      "other": {
        "blocks": [
          {
            "x": 2179.9599609375,
            "top": 208.359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 304.7255859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 488.34228515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 656.33203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "S&M ($1.5B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 804.7880859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D ($1.0B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 954.54638671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A ($0.9B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "operations": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1095.18896484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operations ($0.8B)",
                "size": 28.6494140625,
                "weight": 700
              },
              {
                "text": "6% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1244.947265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "D&A ($0.2B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "1% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7c7c7c"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\"><rect x=\"120\" y=\"273\" width=\"87\" height=\"87\" rx=\"15\" fill=\"#000\"/><text x=\"163.5\" y=\"328\" text-anchor=\"middle\" font-size=\"34\" font-weight=\"400\" fill=\"#fff\" >Uber</text><text x=\"65\" y=\"617\" text-anchor=\"start\" font-size=\"40\" font-weight=\"500\" fill=\"#001e24\" >Uber</text><text x=\"165\" y=\"617\" text-anchor=\"start\" font-size=\"40\" font-weight=\"700\" fill=\"#00c74b\" >Eats</text><text x=\"62\" y=\"821\" text-anchor=\"start\" font-size=\"36\" font-weight=\"500\" fill=\"#000\" >Uber Freight</text></g><g><rect x=\"23\" y=\"893\" width=\"121\" height=\"114\" rx=\"22\" fill=\"#000\"/><text x=\"83.5\" y=\"933\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\" >Trips</text><text x=\"83.5\" y=\"963\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"trips\">3.9B</text><text x=\"83.5\" y=\"989\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"400\" fill=\"#fff\" >+18% Y/Y</text></g><g><rect x=\"148\" y=\"893\" width=\"132\" height=\"114\" rx=\"22\" fill=\"#000\"/><text x=\"214.0\" y=\"933\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\" >MAPC</text><text x=\"214.0\" y=\"963\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"mapc\">208M</text><text x=\"214.0\" y=\"989\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"400\" fill=\"#fff\" >+16% Y/Y</text></g><g><rect x=\"285\" y=\"893\" width=\"254\" height=\"114\" rx=\"22\" fill=\"#000\"/><text x=\"412.0\" y=\"933\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\" >Gross Bookings</text><text x=\"412.0\" y=\"963\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"gross_bookings\">$58.0B</text><text x=\"412.0\" y=\"989\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"400\" fill=\"#fff\" >+24% Y/Y</text></g><g><rect x=\"544\" y=\"893\" width=\"292\" height=\"114\" rx=\"22\" fill=\"#000\"/><text x=\"690\" y=\"930\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"#fff\" >Take rate</text><text x=\"568\" y=\"959\" text-anchor=\"start\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" >Mobility</text><text x=\"663\" y=\"959\" text-anchor=\"start\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"mobility_take_rate\">25.4%</text><text x=\"732\" y=\"959\" text-anchor=\"start\" font-size=\"14\" font-weight=\"400\" fill=\"#fff\" >(-5.3pp Y/Y)</text><text x=\"568\" y=\"989\" text-anchor=\"start\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" >Delivery</text><text x=\"663\" y=\"989\" text-anchor=\"start\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"delivery_take_rate\">19.1%</text><text x=\"732\" y=\"989\" text-anchor=\"start\" font-size=\"14\" font-weight=\"400\" fill=\"#fff\" >(+0.2pp Y/Y)</text></g><text x=\"65\" y=\"1035\" text-anchor=\"start\" font-size=\"21\" font-weight=\"400\" fill=\"#7c7c7c\" >MAPC = Monthly active users completing ride or delivery</text></g></g>",
  "operatingMetrics": [
    {
      "id": "trips",
      "label": "Trips",
      "value": "3900000000",
      "unit": "count",
      "currency": null,
      "literal": "3.9B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+18% Y/Y"
      ],
      "quote": "Trips\n3.9B\n+18% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          30,
          1163,
          158,
          148
        ]
      }
    },
    {
      "id": "mapc",
      "label": "MAPC",
      "value": "208000000",
      "unit": "count",
      "currency": null,
      "literal": "208M",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+16% Y/Y"
      ],
      "quote": "MAPC\n208M\n+16% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          193,
          1163,
          172,
          148
        ]
      }
    },
    {
      "id": "gross_bookings",
      "label": "Gross Bookings",
      "value": "58.0",
      "unit": "B",
      "currency": "USD",
      "literal": "$58.0B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+24% Y/Y"
      ],
      "quote": "Gross Bookings\n$58.0B\n+24% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          371,
          1163,
          331,
          148
        ]
      }
    },
    {
      "id": "mobility_take_rate",
      "label": "Mobility take rate",
      "value": "25.4",
      "unit": "%",
      "currency": null,
      "literal": "25.4%",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "-5.3pp Y/Y"
      ],
      "quote": "Mobility take rate\n25.4%\n-5.3pp Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          708,
          1163,
          380,
          148
        ]
      }
    },
    {
      "id": "delivery_take_rate",
      "label": "Delivery take rate",
      "value": "19.1",
      "unit": "%",
      "currency": null,
      "literal": "19.1%",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+0.2pp Y/Y"
      ],
      "quote": "Delivery take rate\n19.1%\n+0.2pp Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          708,
          1163,
          380,
          148
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Uber · 2026 财年第二季度",
      "meta": {
        "title": "Uber 2026 财年第二季度利润表",
        "titleSize": 111.9931640625
      },
      "nodes": {
        "mobility": {
          "label": "出行",
          "notes": [
            "同比 +1%",
            "调整后利润率 30%",
            "同比 +6 个百分点"
          ]
        },
        "delivery": {
          "label": "配送",
          "notes": [
            "同比 +28%",
            "调整后利润率 20%",
            "同比 +1 个百分点"
          ]
        },
        "freight": {
          "label": "Uber Freight 货运",
          "notes": [
            "同比 +26%",
            "调整后利润率 (2%)",
            "同比 +1 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 45%",
            "同比 +5 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 13%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "S&M 销售与市场",
          "notes": [
            "占收入 11%",
            "同比 +1 个百分点"
          ]
        },
        "rnd": {
          "label": "R&D 研发",
          "notes": [
            "占收入 7%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "G&A 管理费用",
          "notes": [
            "占收入 7%",
            "同比 +1 个百分点"
          ]
        },
        "operations": {
          "label": "运营",
          "notes": [
            "占收入 6%",
            "同比 +0 个百分点"
          ]
        },
        "da": {
          "label": "D&A 折旧与摊销",
          "notes": [
            "占收入 1%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "mobility": {
            "blocks": [
              {
                "x": 414.1142578125,
                "top": 289.0986328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              },
              {
                "x": 213.568359375,
                "top": 484.435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "出行",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "调整后利润率 30%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "delivery": {
            "blocks": [
              {
                "x": 414.1142578125,
                "top": 670.65673828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              },
              {
                "x": 213.568359375,
                "top": 813.90380859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "配送",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "调整后利润率 20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "freight": {
            "blocks": [
              {
                "x": 414.1142578125,
                "top": 989.70703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              },
              {
                "x": 213.568359375,
                "top": 1076.95751953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "调整后利润率 (2%)",
                    "size": 27.34716796875,
                    "weight": 700
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 880.318359375,
                "top": 472.71533203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1347.82470703125,
                "top": 315.1435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 45%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1814.02880859375,
                "top": 225.28857421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1347.82470703125,
                "top": 1152.48779296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1814.02880859375,
                "top": 777.44091796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#7c7c7c"
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
          "other": {
            "blocks": [
              {
                "x": 2179.9599609375,
                "top": 208.359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 304.7255859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 488.34228515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 656.33203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "S&M 销售与市场 ($1.5B)",
                    "size": 25,
                    "weight": 700
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 804.7880859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "R&D 研发 ($1.0B)",
                    "size": 25,
                    "weight": 700
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 954.54638671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "G&A 管理费用 ($0.9B)",
                    "size": 25,
                    "weight": 700
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "operations": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1095.18896484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营 ($0.8B)",
                    "size": 28.6494140625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1244.947265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "D&A 折旧与摊销 ($0.2B)",
                    "size": 25,
                    "weight": 700
                  },
                  {
                    "text": "占收入 1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7c7c7c"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\"><rect x=\"120\" y=\"273\" width=\"87\" height=\"87\" rx=\"15\" fill=\"#000\"/><text x=\"163.5\" y=\"328\" text-anchor=\"middle\" font-size=\"34\" font-weight=\"400\" fill=\"#fff\" >Uber</text><text x=\"65\" y=\"617\" text-anchor=\"start\" font-size=\"40\" font-weight=\"500\" fill=\"#001e24\" >Uber</text><text x=\"165\" y=\"617\" text-anchor=\"start\" font-size=\"40\" font-weight=\"700\" fill=\"#00c74b\" >Eats</text><text x=\"62\" y=\"821\" text-anchor=\"start\" font-size=\"36\" font-weight=\"500\" fill=\"#000\" >Uber Freight</text></g><g><rect x=\"23\" y=\"893\" width=\"121\" height=\"114\" rx=\"22\" fill=\"#000\"/><text x=\"83.5\" y=\"933\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\" >行程</text><text x=\"83.5\" y=\"963\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"trips\">3.9B</text><text x=\"83.5\" y=\"989\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"400\" fill=\"#fff\" >同比 +18%</text></g><g><rect x=\"148\" y=\"893\" width=\"132\" height=\"114\" rx=\"22\" fill=\"#000\"/><text x=\"214.0\" y=\"933\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\" >MAPC</text><text x=\"214.0\" y=\"963\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"mapc\">208M</text><text x=\"214.0\" y=\"989\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"400\" fill=\"#fff\" >同比 +16%</text></g><g><rect x=\"285\" y=\"893\" width=\"254\" height=\"114\" rx=\"22\" fill=\"#000\"/><text x=\"412.0\" y=\"933\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\" >总预订额</text><text x=\"412.0\" y=\"963\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"gross_bookings\">$58.0B</text><text x=\"412.0\" y=\"989\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"400\" fill=\"#fff\" >同比 +24%</text></g><g><rect x=\"544\" y=\"893\" width=\"292\" height=\"114\" rx=\"22\" fill=\"#000\"/><text x=\"690\" y=\"930\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"#fff\" >抽成率</text><text x=\"568\" y=\"959\" text-anchor=\"start\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" >出行</text><text x=\"663\" y=\"959\" text-anchor=\"start\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"mobility_take_rate\">25.4%</text><text x=\"732\" y=\"959\" text-anchor=\"start\" font-size=\"14\" font-weight=\"400\" fill=\"#fff\" >(同比 -5.3 个百分点)</text><text x=\"568\" y=\"989\" text-anchor=\"start\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" >配送</text><text x=\"663\" y=\"989\" text-anchor=\"start\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"delivery_take_rate\">19.1%</text><text x=\"732\" y=\"989\" text-anchor=\"start\" font-size=\"14\" font-weight=\"400\" fill=\"#fff\" >(同比 +0.2 个百分点)</text></g><text x=\"65\" y=\"1035\" text-anchor=\"start\" font-size=\"21\" font-weight=\"400\" fill=\"#7c7c7c\" >MAPC = 完成出行或配送的月活跃用户</text></g></g>"
    }
  }
});})();
