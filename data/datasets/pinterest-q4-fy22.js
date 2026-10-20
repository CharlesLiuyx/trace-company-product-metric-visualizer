(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "pinterest-q4-fy22",
  "name": "Pinterest · Q4 FY22",
  "company": "Pinterest",
  "meta": {
    "company": "Pinterest",
    "title": "Pinterest Q4 FY22 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/pinterest-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 125.015625,
    "titleWeight": 1041.796875,
    "titleTextLength": 2317.998046875,
    "periodX": -1302.24609375,
    "periodY": -1302.24609375,
    "periodNoteY": -1237.1337890625,
    "logoWidth": 210.9638671875,
    "logoHeight": 210.9638671875,
    "logoY": 240.91552734375,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).pinterestLogo || ""
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#154f79",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#1b3279",
        "label": "#7b80b0"
      },
      "hub": {
        "node": "#1b3279",
        "label": "#7b80b0"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00994f"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a21800"
      }
    },
    "linkTint": {
      "source": "#929dbb",
      "hub": "#929dbb",
      "profit": "#98cc98",
      "cost": "#df8585"
    },
    "linkOpacity": 1
  },
  "nodes": [
    {
      "id": "us_canada",
      "label": "US & Canada",
      "value": 722,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#1b3279",
      "labelColor": "#7b80b0"
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 123,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(7%) Y/Y"
      ],
      "color": "#1b3279",
      "labelColor": "#7b80b0"
    },
    {
      "id": "rest_of_world",
      "label": "Rest of the world",
      "value": 32,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+28% Y/Y"
      ],
      "color": "#1b3279",
      "labelColor": "#7b80b0"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 877,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#1b3279",
      "labelColor": "#7b80b0"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 692,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "79% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00994f"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 185,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a21800"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 6,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "1% margin",
        "(21pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00994f"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 686,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a21800"
    },
    {
      "id": "other",
      "label": "Interest / Other",
      "value": 23,
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#00994f"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 17,
      "type": "profit",
      "col": 5,
      "order": 9,
      "notes": [
        "2% margin",
        "(19pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00994f"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 11,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a21800"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 265,
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [
        "30% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a21800"
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 317,
      "type": "cost",
      "col": 5,
      "order": 12,
      "notes": [
        "36% of revenue",
        "+14pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a21800"
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 104,
      "type": "cost",
      "col": 5,
      "order": 13,
      "notes": [
        "11% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a21800"
    },
    {
      "id": "pretax",
      "label": "Pre-tax profit",
      "value": 29,
      "type": "profit",
      "col": 4,
      "order": 9,
      "color": "#2ca02c",
      "labelColor": "#00994f"
    }
  ],
  "links": [
    {
      "value": 722,
      "width": 218.77734375,
      "sourceWidth": 218.77734375,
      "targetWidth": 218.77734375,
      "y0": 595.12646484375,
      "y1": 724.048828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "source": "us_canada",
      "target": "revenue",
      "linkTint": "#929dbb"
    },
    {
      "value": 123,
      "width": 37.76513671875,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "y0": 891.387451171875,
      "y1": 852.320068359375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "source": "europe",
      "target": "revenue",
      "linkTint": "#929dbb"
    },
    {
      "value": 32,
      "width": 9.11572265625,
      "sourceWidth": 9.11572265625,
      "targetWidth": 10.41796875,
      "y0": 1093.235595703125,
      "y1": 876.41162109375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "source": "rest_of_world",
      "target": "revenue",
      "linkTint": "#929dbb"
    },
    {
      "value": 692,
      "width": 210.9638671875,
      "sourceWidth": 210.9638671875,
      "targetWidth": 209.66162109375,
      "y0": 720.14208984375,
      "y1": 670.005615234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "source": "revenue",
      "target": "gross_profit",
      "linkTint": "#98cc98"
    },
    {
      "value": 185,
      "width": 55.99658203125,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "y0": 853.622314453125,
      "y1": 946.081787109375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "source": "revenue",
      "target": "cost_of_revenue",
      "linkTint": "#df8585"
    },
    {
      "value": 6,
      "width": 2.6044921875,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 566.47705078125,
      "y1": 492.2490234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "source": "gross_profit",
      "target": "operating_profit",
      "linkTint": "#98cc98"
    },
    {
      "value": 686,
      "width": 207.05712890625,
      "sourceWidth": 207.05712890625,
      "targetWidth": 208.359375,
      "y0": 671.307861328125,
      "y1": 754.00048828125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "source": "gross_profit",
      "target": "operating_expenses",
      "linkTint": "#df8585"
    },
    {
      "value": 6,
      "width": 2.6044921875,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 492.2490234375,
      "y1": 436.25244140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "source": "operating_profit",
      "linkTint": "#98cc98",
      "target": "pretax"
    },
    {
      "value": 23,
      "width": 6.51123046875,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "y0": 537.176513671875,
      "y1": 440.810302734375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "source": "other",
      "linkTint": "#98cc98",
      "target": "pretax"
    },
    {
      "value": 17,
      "width": 5.208984375,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "y0": 437.5546875,
      "y1": 382.8603515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "target": "net_profit",
      "linkTint": "#98cc98",
      "source": "pretax"
    },
    {
      "value": 11,
      "width": 3.90673828125,
      "sourceWidth": 3.90673828125,
      "targetWidth": 2.6044921875,
      "y0": 442.112548828125,
      "y1": 522.20068359375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "target": "tax",
      "linkTint": "#df8585",
      "source": "pretax"
    },
    {
      "value": 265,
      "width": 80.7392578125,
      "sourceWidth": 80.7392578125,
      "targetWidth": 80.7392578125,
      "y0": 690.1904296875,
      "y1": 791.765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "source": "operating_expenses",
      "target": "rnd",
      "linkTint": "#df8585"
    },
    {
      "value": 317,
      "width": 96.3662109375,
      "sourceWidth": 96.3662109375,
      "targetWidth": 96.3662109375,
      "y0": 778.7431640625,
      "y1": 998.82275390625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "source": "operating_expenses",
      "target": "sm",
      "linkTint": "#df8585"
    },
    {
      "value": 104,
      "width": 31.25390625,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "y0": 842.55322265625,
      "y1": 1204.57763671875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "source": "operating_expenses",
      "target": "ga",
      "linkTint": "#df8585"
    }
  ],
  "operatingMetrics": [
    {
      "id": "mau_top",
      "value": "450000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "450M"
    },
    {
      "id": "mau_us_canada",
      "value": "95000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "95M"
    },
    {
      "id": "mau_europe",
      "value": "124000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "124M"
    },
    {
      "id": "mau_rest_of_world",
      "value": "231000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "231M"
    },
    {
      "id": "mau",
      "value": "450000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "450M"
    },
    {
      "id": "arpu",
      "value": "0.00196",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.96"
    }
  ],
  "layout": {
    "scale": 0.3044018805230901,
    "nodes": {
      "us_canada": {
        "x": 423.22998046875,
        "y": 485.73779296875,
        "width": 71.62353515625,
        "height": 218.77734375
      },
      "europe": {
        "x": 423.22998046875,
        "y": 872.5048828125,
        "width": 71.62353515625,
        "height": 37.76513671875
      },
      "rest_of_world": {
        "x": 423.22998046875,
        "y": 1088.677734375,
        "width": 71.62353515625,
        "height": 9.11572265625
      },
      "revenue": {
        "x": 936.31494140625,
        "y": 614.66015625,
        "width": 71.62353515625,
        "height": 266.96044921875
      },
      "gross_profit": {
        "x": 1397.31005859375,
        "y": 565.1748046875,
        "width": 71.62353515625,
        "height": 209.66162109375
      },
      "cost_of_revenue": {
        "x": 1399.91455078125,
        "y": 918.08349609375,
        "width": 71.62353515625,
        "height": 55.99658203125
      },
      "operating_profit": {
        "x": 1823.14453125,
        "y": 490.94677734375,
        "width": 71.62353515625,
        "height": 2.6044921875
      },
      "operating_expenses": {
        "x": 1823.14453125,
        "y": 649.82080078125,
        "width": 71.62353515625,
        "height": 208.359375
      },
      "other": {
        "x": 1975.50732421875,
        "y": 533.9208984375,
        "width": 71.62353515625,
        "height": 6.51123046875
      },
      "net_profit": {
        "x": 2271.1171875,
        "y": 380.255859375,
        "width": 71.62353515625,
        "height": 5.208984375
      },
      "tax": {
        "x": 2271.1171875,
        "y": 520.8984375,
        "width": 71.62353515625,
        "height": 2.6044921875
      },
      "rnd": {
        "x": 2271.1171875,
        "y": 751.39599609375,
        "width": 71.62353515625,
        "height": 80.7392578125
      },
      "sm": {
        "x": 2271.1171875,
        "y": 950.6396484375,
        "width": 71.62353515625,
        "height": 96.3662109375
      },
      "ga": {
        "x": 2271.1171875,
        "y": 1188.95068359375,
        "width": 71.62353515625,
        "height": 31.25390625
      },
      "pretax": {
        "x": 2094.01171875,
        "y": 434.9501953125,
        "width": 71.62353515625,
        "height": 9.11572265625
      }
    },
    "labels": {
      "us_canada": {
        "blocks": [
          {
            "x": 458.390625,
            "top": 390.673828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 368.53564453125,
            "top": 548.379296875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "US &",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "Canada",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 458.390625,
            "top": 773.5341796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 368.53564453125,
            "top": 868.59814453125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Europe",
                "size": 37.76513671875,
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
            "x": 458.390625,
            "top": 993.61376953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "color": "#777777"
              }
            ]
          },
          {
            "x": 368.53564453125,
            "top": 1046.487890625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Rest of",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "the world",
                "size": 37.76513671875,
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
            "x": 972.77783203125,
            "top": 464.90185546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
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
            "x": 1432.470703125,
            "top": 376.34912109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "79% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 1432.470703125,
            "top": 992.3115234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "revenue",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1858.30517578125,
            "top": 300.81884765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "1% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(21pp) Y/Y",
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
            "x": 1858.30517578125,
            "top": 872.5048828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
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
      "other": {
        "blocks": [
          {
            "x": 2011.319091796875,
            "top": 548.24560546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Interest / Other",
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
            "x": 2470.36083984375,
            "top": 320.3525390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "2% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(19pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2470.36083984375,
            "top": 507.8759765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
      "rnd": {
        "blocks": [
          {
            "x": 2482.0810546875,
            "top": 754.00048828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "30% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 2487.2900390625,
            "top": 951.94189453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "36% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+14pp Y/Y",
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
            "x": 2487.2900390625,
            "top": 1161.603515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "11% of revenue",
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
      "pretax": {
        "blocks": []
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"26\" y=\"206\" width=\"144\" height=\"97\" rx=\"20\" fill=\"#cc0000\"/><text x=\"98.0\" y=\"239\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">MAU</text><text data-operating-metric=\"mau_top\" x=\"98.0\" y=\"277\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">450M</text><rect x=\"53\" y=\"354\" width=\"87\" height=\"296\" rx=\"20\" fill=\"#cc0000\"/><text data-operating-metric=\"mau_us_canada\" x=\"96.5\" y=\"454\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">95M</text><text x=\"96.5\" y=\"485\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">Flat Y/Y</text><rect x=\"53\" y=\"650\" width=\"87\" height=\"148\" rx=\"20\" fill=\"#cc0000\"/><text data-operating-metric=\"mau_europe\" x=\"96.5\" y=\"668\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">124M</text><text x=\"96.5\" y=\"699\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">+2% Y/Y</text><rect x=\"53\" y=\"798\" width=\"87\" height=\"102\" rx=\"20\" fill=\"#cc0000\"/><text data-operating-metric=\"mau_rest_of_world\" x=\"96.5\" y=\"815\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">231M</text><text x=\"96.5\" y=\"846\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">+8% Y/Y</text><rect x=\"174\" y=\"899\" width=\"160\" height=\"114\" rx=\"20\" fill=\"#1b3279\"/><text x=\"254.0\" y=\"930\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">MAU</text><text data-operating-metric=\"mau\" x=\"254.0\" y=\"962\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">450M</text><text x=\"254.0\" y=\"993\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">+4% Y/Y</text><rect x=\"340\" y=\"899\" width=\"161\" height=\"114\" rx=\"20\" fill=\"#1b3279\"/><text x=\"420.5\" y=\"930\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"420.5\" y=\"962\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">$1.96</text><text x=\"420.5\" y=\"993\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">+1% Y/Y</text><path d=\"M53 354L97 318L140 354Z\" fill=\"#cc0000\"/><text x=\"330\" y=\"1040\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">MAU = Monthly Active Users</text><text x=\"330\" y=\"1070\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"330\" y=\"1104\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">Source: Quarterly results</text></g></g>",
  "i18n": {
    "zh": {
      "name": "Pinterest · 2022 财年第四季度",
      "meta": {
        "title": "Pinterest 2022 财年第四季度利润表",
        "period": "",
        "periodNote": "",
        "titleSize": 109.388671875,
        "titleTextLength": 1953.369140625
      },
      "nodes": {
        "us_canada": {
          "label": "美国和加拿大",
          "notes": [
            "同比 +5%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 (7%)"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +28%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 (4 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 1%",
            "同比 (21 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other": {
          "label": "利息 / 其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 (19 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 30%",
            "同比 +2 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 36%",
            "同比 +14 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 +1 个百分点"
          ]
        },
        "pretax": {
          "label": "税前利润"
        }
      },
      "layout": {
        "labels": {
          "us_canada": {
            "blocks": [
              {
                "x": 458.390625,
                "top": 390.673828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 368.53564453125,
                "top": 548.379296875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "美国和",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "加拿大",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 458.390625,
                "top": 773.5341796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 368.53564453125,
                "top": 868.59814453125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 37.76513671875,
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
                "x": 458.390625,
                "top": 993.61376953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 368.53564453125,
                "top": 1046.487890625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "世界",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "其他地区",
                    "size": 37.76513671875,
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
                "x": 972.77783203125,
                "top": 464.90185546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
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
                "x": 1432.470703125,
                "top": 376.34912109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 79%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 1432.470703125,
                "top": 992.3115234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "成本",
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1858.30517578125,
                "top": 300.81884765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (21 个百分点)",
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
                "x": 1858.30517578125,
                "top": 872.5048828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
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
          "other": {
            "blocks": [
              {
                "x": 2011.319091796875,
                "top": 548.24560546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利息 / 其他",
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
                "x": 2470.36083984375,
                "top": 320.3525390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (19 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2470.36083984375,
                "top": 507.8759765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
          "rnd": {
            "blocks": [
              {
                "x": 2482.0810546875,
                "top": 754.00048828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 30%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 2487.2900390625,
                "top": 951.94189453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 36%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +14 个百分点",
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
                "x": 2487.2900390625,
                "top": 1161.603515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
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
          "pretax": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"26\" y=\"206\" width=\"144\" height=\"97\" rx=\"20\" fill=\"#cc0000\"/><text x=\"98.0\" y=\"239\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">MAU</text><text data-operating-metric=\"mau_top\" x=\"98.0\" y=\"277\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">450M</text><rect x=\"53\" y=\"354\" width=\"87\" height=\"296\" rx=\"20\" fill=\"#cc0000\"/><text data-operating-metric=\"mau_us_canada\" x=\"96.5\" y=\"454\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">95M</text><text x=\"96.5\" y=\"485\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">同比持平</text><rect x=\"53\" y=\"650\" width=\"87\" height=\"148\" rx=\"20\" fill=\"#cc0000\"/><text data-operating-metric=\"mau_europe\" x=\"96.5\" y=\"668\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">124M</text><text x=\"96.5\" y=\"699\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">同比 +2%</text><rect x=\"53\" y=\"798\" width=\"87\" height=\"102\" rx=\"20\" fill=\"#cc0000\"/><text data-operating-metric=\"mau_rest_of_world\" x=\"96.5\" y=\"815\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">231M</text><text x=\"96.5\" y=\"846\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">同比 +8%</text><rect x=\"174\" y=\"899\" width=\"160\" height=\"114\" rx=\"20\" fill=\"#1b3279\"/><text x=\"254.0\" y=\"930\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">MAU</text><text data-operating-metric=\"mau\" x=\"254.0\" y=\"962\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">450M</text><text x=\"254.0\" y=\"993\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">同比 +4%</text><rect x=\"340\" y=\"899\" width=\"161\" height=\"114\" rx=\"20\" fill=\"#1b3279\"/><text x=\"420.5\" y=\"930\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"420.5\" y=\"962\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">$1.96</text><text x=\"420.5\" y=\"993\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">同比 +1%</text><path d=\"M53 354L97 318L140 354Z\" fill=\"#cc0000\"/><text x=\"330\" y=\"1040\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">MAU = 月活跃用户</text><text x=\"330\" y=\"1070\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"330\" y=\"1104\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">来源：季度业绩</text></g></g>"
    }
  }
}); })();
