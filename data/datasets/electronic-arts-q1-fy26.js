window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "electronic-arts-q1-fy26",
  "name": "Electronic Arts · Q1 FY26",
  "company": "Electronic Arts",
  "meta": {
    "company": "Electronic Arts",
    "title": "Electronic Arts Q1 FY26 Income Statement",
    "period": "Q1 FY26",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/electronic-arts-q1-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 111.9931640625,
    "titleWeight": 800,
    "periodX": 2435.2001953125,
    "periodY": 263.0537109375,
    "periodNoteY": 306.02783203125
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155578",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#eb208f",
        "label": "#eb208f"
      },
      "hub": {
        "node": "#9966bb",
        "label": "#9966bb"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a61900"
      }
    },
    "linkTint": {
      "source": "#eb98c6",
      "hub": "#cab5d9",
      "profit": "#99cc99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 37.76513671875,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    }
  },
  "nodes": [
    {
      "id": "console",
      "label": "Console",
      "value": 1.0,
      "valueText": "$1.0B",
      "type": "source",
      "color": "#eb208f",
      "labelColor": "#eb208f",
      "notes": [
        "Flat Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "pc_other",
      "label": "PC & other",
      "value": 0.4,
      "valueText": "$0.4B",
      "type": "source",
      "color": "#eb208f",
      "labelColor": "#eb208f",
      "notes": [
        "+2% Y/Y"
      ],
      "col": 1,
      "order": 1
    },
    {
      "id": "mobile",
      "label": "Mobile",
      "value": 0.3,
      "valueText": "$0.3B",
      "type": "source",
      "color": "#eb208f",
      "labelColor": "#eb208f",
      "notes": [
        "Flat Y/Y"
      ],
      "col": 2,
      "order": 2
    },
    {
      "id": "revenue_platform",
      "label": "Revenue",
      "value": 1.7,
      "valueText": "$1.7B",
      "type": "hub",
      "color": "#9966bb",
      "labelColor": "#9966bb",
      "notes": [
        "+1% Y/Y"
      ],
      "col": 3,
      "order": 3
    },
    {
      "id": "live_services",
      "label": "Live services",
      "value": 1.4,
      "valueText": "$1.4B",
      "type": "hub",
      "color": "#9966bb",
      "labelColor": "#9966bb",
      "notes": [
        "(2%) Y/Y"
      ],
      "col": 4,
      "order": 4
    },
    {
      "id": "full_games",
      "label": "Full games",
      "value": 0.3,
      "valueText": "$0.3B",
      "type": "hub",
      "color": "#9966bb",
      "labelColor": "#9966bb",
      "notes": [
        "+16% Y/Y"
      ],
      "col": 5,
      "order": 5
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1.7,
      "valueText": "$1.7B",
      "type": "hub",
      "color": "#9966bb",
      "labelColor": "#9966bb",
      "notes": [
        "+1% Y/Y"
      ],
      "col": 6,
      "order": 6
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.4,
      "valueText": "$1.4B",
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "83% margin",
        "(1pp) Y/Y"
      ],
      "col": 7,
      "order": 7
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#a61900",
      "notes": [],
      "col": 8,
      "order": 8
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.3,
      "valueText": "$0.3B",
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "16% margin",
        "(6pp) Y/Y"
      ],
      "col": 9,
      "order": 9
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.1,
      "valueText": "($1.1B)",
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#a61900",
      "notes": [],
      "col": 10,
      "order": 10
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "12% margin",
        "(5pp) Y/Y"
      ],
      "col": 11,
      "order": 11
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.002,
      "valueText": "$2M",
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [],
      "col": 12,
      "order": 12
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#a61900",
      "notes": [],
      "col": 13,
      "order": 13
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.7,
      "valueText": "($0.7B)",
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#a61900",
      "notes": [
        "42% of revenue",
        "+4pp Y/Y"
      ],
      "col": 14,
      "order": 14
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#a61900",
      "notes": [
        "13% of revenue",
        "+0pp Y/Y"
      ],
      "col": 15,
      "order": 15
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#a61900",
      "notes": [
        "11% of revenue",
        "+0pp Y/Y"
      ],
      "col": 16,
      "order": 16
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.017,
      "valueText": "($17M)",
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#a61900",
      "notes": [],
      "col": 17,
      "order": 17
    }
  ],
  "links": [
    {
      "source": "console",
      "target": "revenue_platform",
      "value": 1,
      "sourceWidth": 162.78076171875,
      "targetWidth": 161.478515625,
      "y0": 634.844970703125,
      "y1": 761.81396484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#eb98c6"
    },
    {
      "source": "pc_other",
      "target": "revenue_platform",
      "value": 0.4,
      "sourceWidth": 59.9033203125,
      "targetWidth": 59.9033203125,
      "y0": 901.154296875,
      "y1": 872.5048828125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "color": "#eb98c6"
    },
    {
      "source": "mobile",
      "target": "revenue_platform",
      "value": 0.3,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "y0": 1079.56201171875,
      "y1": 925.89697265625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "color": "#eb98c6"
    },
    {
      "source": "revenue_platform",
      "target": "live_services",
      "value": 1.4,
      "sourceWidth": 221.3818359375,
      "targetWidth": 222.68408203125,
      "y0": 791.765625,
      "y1": 668.703369140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#cab5d9"
    },
    {
      "source": "revenue_platform",
      "target": "full_games",
      "value": 0.3,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "y0": 925.89697265625,
      "y1": 1079.56201171875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#cab5d9"
    },
    {
      "source": "live_services",
      "target": "revenue",
      "value": 1.4,
      "sourceWidth": 222.68408203125,
      "targetWidth": 222.68408203125,
      "y0": 668.703369140625,
      "y1": 796.323486328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#cab5d9"
    },
    {
      "source": "full_games",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 46.880859375,
      "targetWidth": 45.57861328125,
      "y0": 1079.56201171875,
      "y1": 930.454833984375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "color": "#cab5d9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.4,
      "sourceWidth": 222.68408203125,
      "targetWidth": 222.68408203125,
      "y0": 796.323486328125,
      "y1": 675.214599609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.3,
      "sourceWidth": 45.57861328125,
      "targetWidth": 44.2763671875,
      "y0": 930.454833984375,
      "y1": 1069.14404296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.3,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "y0": 585.359619140625,
      "y1": 507.224853515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#99cc99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.1,
      "sourceWidth": 179.7099609375,
      "targetWidth": 179.7099609375,
      "y0": 696.70166015625,
      "y1": 770.9296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 31.25390625,
      "targetWidth": 32.1003662109375,
      "y0": 501.36474609375,
      "y1": 402.81727294921876,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#99cc99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "y0": 522.851806640625,
      "y1": 630.938232421875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#df8585"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.002,
      "sourceWidth": 0.45578613281249997,
      "targetWidth": 0.45578613281249997,
      "y0": 478.15220947265624,
      "y1": 419.09534912109376,
      "sourceOrder": 0,
      "targetOrder": 1,
      "color": "#99cc99"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.7,
      "sourceWidth": 113.29541015625,
      "targetWidth": 113.29541015625,
      "y0": 737.722412109375,
      "y1": 823.670654296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.2,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "y0": 811.29931640625,
      "y1": 988.40478515625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 29.95166015625,
      "targetWidth": 28.6494140625,
      "y0": 843.204345703125,
      "y1": 1122.5361328125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "color": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.017,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 859.482421875,
      "y1": 1257.9697265625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "color": "#df8585"
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "console": {
        "x": 369.837890625,
        "y": 553.45458984375,
        "width": 72.92578125,
        "height": 162.78076171875
      },
      "pc_other": {
        "x": 369.837890625,
        "y": 871.20263671875,
        "width": 72.92578125,
        "height": 59.9033203125
      },
      "mobile": {
        "x": 369.837890625,
        "y": 1056.12158203125,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "revenue_platform": {
        "x": 681.07470703125,
        "y": 681.07470703125,
        "width": 72.92578125,
        "height": 268.2626953125
      },
      "live_services": {
        "x": 992.3115234375,
        "y": 557.361328125,
        "width": 72.92578125,
        "height": 222.68408203125
      },
      "full_games": {
        "x": 992.3115234375,
        "y": 1056.12158203125,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "revenue": {
        "x": 1303.54833984375,
        "y": 684.9814453125,
        "width": 72.92578125,
        "height": 268.2626953125
      },
      "gross_profit": {
        "x": 1614.78515625,
        "y": 563.87255859375,
        "width": 72.92578125,
        "height": 222.68408203125
      },
      "cost_of_revenue": {
        "x": 1614.78515625,
        "y": 1047.005859375,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "operating_profit": {
        "x": 1927.32421875,
        "y": 485.73779296875,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "operating_expenses": {
        "x": 1927.32421875,
        "y": 681.07470703125,
        "width": 72.92578125,
        "height": 179.7099609375
      },
      "net_profit": {
        "x": 2238.56103515625,
        "y": 386.76708984375,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "interest": {
        "x": 2127.8701171875,
        "y": 477.92431640625,
        "width": 72.92578125,
        "height": 0.45578613281249997
      },
      "tax": {
        "x": 2238.56103515625,
        "y": 625.078125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "rnd": {
        "x": 2238.56103515625,
        "y": 767.02294921875,
        "width": 72.92578125,
        "height": 113.29541015625
      },
      "sm": {
        "x": 2238.56103515625,
        "y": 971.4755859375,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "ga": {
        "x": 2238.56103515625,
        "y": 1108.21142578125,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "other": {
        "x": 2238.56103515625,
        "y": 1256.66748046875,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "revenue_platform": {
        "blocks": [
          {
            "x": 717.53759765625,
            "top": 532.61865234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#9966bb"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#9966bb"
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34716796875,
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
            "x": 1340.01123046875,
            "top": 537.82763671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#9966bb"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#9966bb"
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34716796875,
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
            "top": 412.81201171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Live services",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#9966bb"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#9966bb"
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.34716796875,
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
            "x": 1028.7744140625,
            "top": 1116.02490234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Full games",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#9966bb"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#9966bb"
              },
              {
                "text": "+16% Y/Y",
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
            "x": 1651.248046875,
            "top": 377.6513671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "83% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1963.787109375,
            "top": 299.5166015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "16% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2437.8046875,
            "top": 326.86376953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "12% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.34716796875,
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
            "top": 455.7861328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#eb208f"
              },
              {
                "text": "Flat Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 569.08154296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Console",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#eb208f"
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
            "top": 772.23193359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#eb208f"
              },
              {
                "text": "+2% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 865.99365234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "PC & other",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#eb208f"
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
            "top": 958.453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#eb208f"
              },
              {
                "text": "Flat Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 1056.12158203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Mobile",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#eb208f"
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
            "top": 1106.9091796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "revenue",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1963.787109375,
            "top": 879.01611328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "expenses",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2164.3330078125,
            "top": 492.2490234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Interest",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2429.9912109375,
            "top": 601.6376953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2441.71142578125,
            "top": 1224.111328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#a61900"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2441.71142578125,
            "top": 768.3251953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "42% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
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
            "x": 2441.71142578125,
            "top": 949.33740234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "S&M",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "13% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
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
            "x": 2441.71142578125,
            "top": 1086.0732421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#a61900"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#a61900"
              },
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
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
  "operatingMetrics": [
    {
      "id": "net_bookings",
      "label": "Net bookings",
      "value": "1.3",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.3B",
      "basis": "unspecified",
      "notes": [
        "+3% Y/Y"
      ],
      "quote": "Net bookings $1.3B (+3% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          69,
          1276,
          489,
          74
        ]
      }
    }
  ],
  "annotationsSvg": "<rect x=\"69.01904296875\" y=\"1276.201171875\" width=\"489.64453125\" height=\"74.22802734375\" rx=\"23.4404296875\" fill=\"#9966bb\"/><text x=\"118.50439453125\" y=\"1325.6865234375\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">Net bookings</text><text data-operating-metric=\"net_bookings\" x=\"308.63232421875\" y=\"1325.6865234375\" font-size=\"27.34716796875\" fill=\"#ffffff\">$1.3B</text><text x=\"388.0693359375\" y=\"1325.6865234375\" font-size=\"27.34716796875\" fill=\"#ffffff\">(+3% Y/Y)</text>",
  "i18n": {
    "zh": {
      "name": "Electronic Arts · 2026 财年第一季度",
      "meta": {
        "title": "Electronic Arts 2026 财年第一季度利润表",
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 6 月"
      },
      "nodes": {
        "console": {
          "label": "主机",
          "notes": [
            "同比持平"
          ]
        },
        "pc_other": {
          "label": "PC 及其他",
          "notes": [
            "同比 +2%"
          ]
        },
        "mobile": {
          "label": "移动端",
          "notes": [
            "同比持平"
          ]
        },
        "revenue_platform": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "live_services": {
          "label": "在线服务",
          "notes": [
            "同比 (2%)"
          ]
        },
        "full_games": {
          "label": "完整游戏",
          "notes": [
            "同比 +16%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 83%",
            "同比 (1pp)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 16%",
            "同比 (6pp)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 12%",
            "同比 (5pp)"
          ]
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 42%",
            "同比 +4pp"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 13%",
            "同比 +0pp"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 11%",
            "同比 +0pp"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "revenue_platform": {
            "blocks": [
              {
                "x": 717.53759765625,
                "top": 532.61865234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#9966bb"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#9966bb"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34716796875,
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
                "x": 1340.01123046875,
                "top": 537.82763671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#9966bb"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#9966bb"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34716796875,
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
                "top": 412.81201171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "在线服务",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#9966bb"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#9966bb"
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 27.34716796875,
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
                "x": 1028.7744140625,
                "top": 1116.02490234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "完整游戏",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#9966bb"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#9966bb"
                  },
                  {
                    "text": "同比 +16%",
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
                "x": 1651.248046875,
                "top": 377.6513671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 83%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1pp)",
                    "size": 27.34716796875,
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
                "x": 1963.787109375,
                "top": 299.5166015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6pp)",
                    "size": 27.34716796875,
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
                "x": 2437.8046875,
                "top": 326.86376953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5pp)",
                    "size": 27.34716796875,
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
                "top": 455.7861328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#eb208f"
                  },
                  {
                    "text": "同比持平",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 569.08154296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "主机",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#eb208f"
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
                "top": 772.23193359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#eb208f"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 865.99365234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "PC 及其他",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#eb208f"
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
                "top": 958.453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#eb208f"
                  },
                  {
                    "text": "同比持平",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 1056.12158203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "移动端",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#eb208f"
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
                "top": 1106.9091796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "成本",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1963.787109375,
                "top": 879.01611328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "费用",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2164.3330078125,
                "top": 492.2490234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利息",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2429.9912109375,
                "top": 601.6376953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2441.71142578125,
                "top": 1224.111328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2441.71142578125,
                "top": 768.3251953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 42%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4pp",
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
                "x": 2441.71142578125,
                "top": 949.33740234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0pp",
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
                "x": 2441.71142578125,
                "top": 1086.0732421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#a61900"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#a61900"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0pp",
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
      "annotationsSvg": "<rect x=\"69.01904296875\" y=\"1276.201171875\" width=\"489.64453125\" height=\"74.22802734375\" rx=\"23.4404296875\" fill=\"#9966bb\"/><text x=\"118.50439453125\" y=\"1325.6865234375\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">净预订额</text><text data-operating-metric=\"net_bookings\" x=\"308.63232421875\" y=\"1325.6865234375\" font-size=\"27.34716796875\" fill=\"#ffffff\">$1.3B</text><text x=\"388.0693359375\" y=\"1325.6865234375\" font-size=\"27.34716796875\" fill=\"#ffffff\">(同比 +3%)</text>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "ea-logo",
      "href": "data/assets/raster-annotations/electronic-arts/ea-logo.png",
      "x": 602.93994140625,
      "y": 230.49755859375,
      "width": 230.49755859375,
      "height": 230.49755859375
    },
    {
      "key": "playstation",
      "href": "data/assets/raster-annotations/electronic-arts/playstation.png",
      "x": 78.134765625,
      "y": 617.2646484375,
      "width": 104.1796875,
      "height": 80.7392578125
    },
    {
      "key": "xbox",
      "href": "data/assets/raster-annotations/electronic-arts/xbox.png",
      "x": 184.9189453125,
      "y": 622.4736328125,
      "width": 75.5302734375,
      "height": 75.5302734375
    },
    {
      "key": "switch",
      "href": "data/assets/raster-annotations/electronic-arts/switch.png",
      "x": 272.16943359375,
      "y": 621.17138671875,
      "width": 78.134765625,
      "height": 78.134765625
    },
    {
      "key": "steam",
      "href": "data/assets/raster-annotations/electronic-arts/steam.png",
      "x": 88.552734375,
      "y": 914.1767578125,
      "width": 72.92578125,
      "height": 70.3212890625
    },
    {
      "key": "origin",
      "href": "data/assets/raster-annotations/electronic-arts/origin.png",
      "x": 175.80322265625,
      "y": 921.990234375,
      "width": 164.0830078125,
      "height": 59.9033203125
    },
    {
      "key": "app-store",
      "href": "data/assets/raster-annotations/electronic-arts/app-store.png",
      "x": 135.43359375,
      "y": 1101.7001953125,
      "width": 83.34375,
      "height": 83.34375
    },
    {
      "key": "google-play",
      "href": "data/assets/raster-annotations/electronic-arts/google-play.png",
      "x": 240.91552734375,
      "y": 1105.60693359375,
      "width": 72.92578125,
      "height": 78.134765625
    }
  ]
});
