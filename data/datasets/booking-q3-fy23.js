(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "booking-q3-fy23",
  "name": "Booking Holdings · Q3 FY23",
  "company": "Booking Holdings",
  "meta": {
    "company": "Booking Holdings",
    "title": "Booking Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/booking-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.91666666666666,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2233.35205078125,
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
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#00b0f0",
        "label": "#00a9e8"
      },
      "hub": {
        "node": "#00b0f0",
        "label": "#00a9e8"
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
      "source": "#85d3f0",
      "hub": "#85d3f0",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 37.76513671875,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "nodes": [
    {
      "id": "merchant",
      "label": "Merchant",
      "value": 3.9,
      "valueText": "$3.9B",
      "col": 0,
      "order": 0,
      "type": "source",
      "notes": [
        "+51% Y/Y",
        "Commissions, payments, insurance"
      ]
    },
    {
      "id": "agency",
      "label": "Agency",
      "value": 3.1,
      "valueText": "$3.1B",
      "col": 0,
      "order": 1,
      "type": "source",
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "advertising_other",
      "label": "Advertising & Other",
      "value": 0.3,
      "valueText": "$0.3B",
      "col": 0,
      "order": 2,
      "type": "source",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 7.3,
      "valueText": "$7.3B",
      "col": 1,
      "order": 3,
      "type": "hub",
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 3.1,
      "valueText": "$3.1B",
      "col": 2,
      "order": 4,
      "type": "profit",
      "notes": [
        "42% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.2,
      "valueText": "($4.2B)",
      "col": 2,
      "order": 5,
      "type": "cost"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.046,
      "valueText": "$46M",
      "col": 3,
      "order": 6,
      "type": "profit"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2.5,
      "valueText": "$2.5B",
      "col": 4,
      "order": 7,
      "type": "profit",
      "notes": [
        "34% margin",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.6,
      "valueText": "($0.6B)",
      "col": 4,
      "order": 8,
      "type": "cost"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 2,
      "valueText": "($2.0B)",
      "col": 4,
      "order": 9,
      "type": "cost"
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 0.8,
      "valueText": "($0.8B)",
      "col": 4,
      "order": 10,
      "type": "cost"
    },
    {
      "id": "sales",
      "label": "Sales",
      "value": 0.7,
      "valueText": "($0.7B)",
      "col": 4,
      "order": 11,
      "type": "cost"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.4,
      "valueText": "($0.4B)",
      "col": 4,
      "order": 12,
      "type": "cost"
    },
    {
      "id": "info_tech",
      "label": "Info Tech",
      "value": 0.2,
      "valueText": "($0.2B)",
      "col": 4,
      "order": 13,
      "type": "cost"
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 0.1,
      "valueText": "($0.1B)",
      "col": 4,
      "order": 14,
      "type": "cost"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.002,
      "valueText": "($2M)",
      "col": 4,
      "order": 15,
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "merchant",
      "target": "revenue",
      "value": 3.9,
      "sourceWidth": 174.5009765625,
      "targetWidth": 174.5009765625,
      "y0": 528.6458333333333,
      "y1": 714.84375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d3f0"
    },
    {
      "source": "agency",
      "target": "revenue",
      "value": 3.1,
      "sourceWidth": 139.34033203125,
      "targetWidth": 139.34033203125,
      "y0": 871.7447916666666,
      "y1": 871.7447916666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85d3f0"
    },
    {
      "source": "advertising_other",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 11.72021484375,
      "targetWidth": 10.41796875,
      "y0": 1128.2552083333333,
      "y1": 946.6145833333333,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85d3f0"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 3.1,
      "sourceWidth": 136.73583984375,
      "targetWidth": 136.73583984375,
      "y0": 695.9635416666666,
      "y1": 512.3697916666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 4.2,
      "sourceWidth": 187.5234375,
      "targetWidth": 187.5234375,
      "y0": 858.0729166666666,
      "y1": 962.2395833333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.454,
      "sourceWidth": 109.388671875,
      "targetWidth": 108.08642578125,
      "y0": 498.69791666666663,
      "y1": 410.80729166666663,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "y0": 567.0572916666666,
      "y1": 650.390625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.046,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 516.9270833333333,
      "y1": 466.1458333333333,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 2,
      "sourceWidth": 88.552734375,
      "targetWidth": 88.552734375,
      "y0": 912.7604166666666,
      "y1": 761.71875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 0.8,
      "sourceWidth": 35.16064453125,
      "targetWidth": 33.8583984375,
      "y0": 974.609375,
      "y1": 895.8333333333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales",
      "value": 0.7,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "y0": 1007.8124999999999,
      "y1": 989.5833333333333,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.4,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "y0": 1031.9010416666665,
      "y1": 1090.4947916666665,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "info_tech",
      "value": 0.2,
      "sourceWidth": 7.8134765625,
      "targetWidth": 6.51123046875,
      "y0": 1044.2708333333333,
      "y1": 1172.5260416666665,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125,
      "y0": 1050.78125,
      "y1": 1255.859375,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.002,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 1054.6875,
      "y1": 1338.5416666666665,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "merchant": {
        "x": 460.9951171875,
        "y": 441.40625,
        "width": 71.62353515625,
        "height": 174.47916666666666
      },
      "agency": {
        "x": 460.9951171875,
        "y": 802.0833333333333,
        "width": 71.62353515625,
        "height": 139.32291666666666
      },
      "advertising_other": {
        "x": 460.9951171875,
        "y": 1122.3958333333333,
        "width": 71.62353515625,
        "height": 11.71875
      },
      "revenue": {
        "x": 1083.46875,
        "y": 627.6041666666666,
        "width": 72.92578125,
        "height": 324.21875
      },
      "operating_profit": {
        "x": 1716.3603515625,
        "y": 444.01041666666663,
        "width": 72.92578125,
        "height": 136.71875
      },
      "operating_expenses": {
        "x": 1724.173828125,
        "y": 868.4895833333333,
        "width": 72.92578125,
        "height": 187.5
      },
      "other_income": {
        "x": 2169.5419921875,
        "y": 515.625,
        "width": 71.62353515625,
        "height": 2.6041666666666665
      },
      "net_profit": {
        "x": 2329.71826171875,
        "y": 356.7708333333333,
        "width": 71.62353515625,
        "height": 110.67708333333333
      },
      "tax": {
        "x": 2329.71826171875,
        "y": 636.71875,
        "width": 71.62353515625,
        "height": 27.34375
      },
      "marketing": {
        "x": 2329.71826171875,
        "y": 717.4479166666666,
        "width": 71.62353515625,
        "height": 88.54166666666666
      },
      "personnel": {
        "x": 2329.71826171875,
        "y": 878.90625,
        "width": 71.62353515625,
        "height": 33.854166666666664
      },
      "sales": {
        "x": 2329.71826171875,
        "y": 973.9583333333333,
        "width": 71.62353515625,
        "height": 31.25
      },
      "ga": {
        "x": 2329.71826171875,
        "y": 1082.03125,
        "width": 71.62353515625,
        "height": 16.927083333333332
      },
      "info_tech": {
        "x": 2329.71826171875,
        "y": 1169.2708333333333,
        "width": 71.62353515625,
        "height": 6.510416666666666
      },
      "amortization": {
        "x": 2329.71826171875,
        "y": 1253.90625,
        "width": 71.62353515625,
        "height": 3.90625
      },
      "restructuring": {
        "x": 2329.71826171875,
        "y": 1337.2395833333333,
        "width": 71.62353515625,
        "height": 2.6041666666666665
      }
    },
    "labels": {
      "merchant": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 342.44791666666663,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "+51% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 412.81201171875,
            "top": 472.675,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Merchant",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "Commissions,",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "payments, insurance",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "agency": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 701.8229166666666,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 847.65625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Agency",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "advertising_other": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 1028.6458333333333,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 1082.6020833333332,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Advertising",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1119.931640625,
            "top": 475.26041666666663,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
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
            "x": 1754.12548828125,
            "top": 252.60416666666666,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "42% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1761.93896484375,
            "top": 1066.40625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2203.400390625,
            "top": 527.34375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
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
            "x": 2515.939453125,
            "top": 342.44791666666663,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "34% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
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
            "x": 2513.3349609375,
            "top": 605.46875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800
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
      "marketing": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 721.3541666666666,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Marketing",
                "size": 31.25390625,
                "weight": 800
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
      "personnel": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 852.8645833333333,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Personnel",
                "size": 31.25390625,
                "weight": 800
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
      "sales": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 950.5208333333333,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales",
                "size": 31.25390625,
                "weight": 800
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
      "ga": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 1053.3854166666665,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
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
      "info_tech": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 1143.2291666666665,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Info Tech",
                "size": 31.25390625,
                "weight": 800
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
      "amortization": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 1233.0729166666665,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.25390625,
                "weight": 800
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
      "restructuring": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 1316.40625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
      "id": "gross_bookings",
      "label": "Gross bookings",
      "value": "39.8",
      "unit": "B",
      "currency": "USD",
      "literal": "$39.8B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+24% Y/Y"
      ],
      "quote": "Gross bookings\n$39.8B\n+24% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          99,
          1243,
          305,
          150
        ]
      }
    },
    {
      "id": "nights_booked",
      "label": "Nights booked",
      "value": "276000000",
      "unit": "count",
      "currency": null,
      "literal": "276M",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+15% Y/Y"
      ],
      "quote": "Nights booked\n276M\n+15% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          414,
          1243,
          332,
          152
        ]
      }
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"76\" y=\"955\" width=\"234\" height=\"115\" rx=\"24\" fill=\"#002a6e\"/><text x=\"193\" y=\"995\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">Gross bookings</text><text data-operating-metric=\"gross_bookings\" x=\"193\" y=\"1026\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">$39.8B</text><text x=\"193\" y=\"1053\" text-anchor=\"middle\" font-size=\"19\" fill=\"white\">+24% Y/Y</text><rect x=\"318\" y=\"955\" width=\"255\" height=\"115\" rx=\"24\" fill=\"#002a6e\"/><text x=\"445.5\" y=\"995\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"445.5\" y=\"1026\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">276M</text><text x=\"445.5\" y=\"1053\" text-anchor=\"middle\" font-size=\"19\" fill=\"white\">+15% Y/Y</text><text x=\"131\" y=\"1104\" font-size=\"30\" font-weight=\"800\">Source: Quarterly results</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "booking-company-logo",
      "href": "data/assets/raster-annotations/booking/company-logo.png",
      "x": 813.90380859375,
      "y": 240.88541666666666,
      "width": 553.45458984375,
      "height": 143.22916666666666
    },
    {
      "key": "booking-merchant-brands",
      "href": "data/assets/raster-annotations/booking/merchant-brands.png",
      "x": 0,
      "y": 442.7083333333333,
      "width": 169.2919921875,
      "height": 188.80208333333331
    },
    {
      "key": "booking-agency-brand",
      "href": "data/assets/raster-annotations/booking/agency-brand.png",
      "x": 15.626953125,
      "y": 794.2708333333333,
      "width": 160.17626953125,
      "height": 151.04166666666666
    },
    {
      "key": "booking-advertising-brands",
      "href": "data/assets/raster-annotations/booking/advertising-brands.png",
      "x": 15.626953125,
      "y": 1084.6354166666665,
      "width": 145.8515625,
      "height": 122.39583333333333
    }
  ],
  "i18n": {
    "zh": {
      "name": "缤客控股 · 2023 财年第三季度",
      "meta": {
        "title": "缤客控股 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "titleTextLength": 2233.35205078125
      },
      "nodes": {
        "merchant": {
          "label": "商户",
          "notes": [
            "同比 +51%",
            "佣金、支付、保险"
          ]
        },
        "agency": {
          "label": "代理",
          "notes": [
            "同比 (2%)"
          ]
        },
        "advertising_other": {
          "label": "广告及其他",
          "notes": [
            "同比 +11%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 42%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "other_income": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 34%",
            "同比 +7 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "marketing": {
          "label": "营销"
        },
        "personnel": {
          "label": "人员"
        },
        "sales": {
          "label": "销售"
        },
        "ga": {
          "label": "管理费用"
        },
        "info_tech": {
          "label": "信息技术"
        },
        "amortization": {
          "label": "摊销"
        },
        "restructuring": {
          "label": "重组费用"
        }
      },
      "layout": {
        "labels": {
          "merchant": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 342.44791666666663,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "同比 +51%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 412.81201171875,
                "top": 493.375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "商户",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "佣金、支付、保险",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "agency": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 701.8229166666666,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 847.65625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "代理",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "advertising_other": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 1028.6458333333333,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 1082.6020833333332,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "广告",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "及其他",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1119.931640625,
                "top": 475.26041666666663,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
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
                "x": 1754.12548828125,
                "top": 252.60416666666666,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 42%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
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
                "x": 1761.93896484375,
                "top": 1066.40625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2203.400390625,
                "top": 527.34375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
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
                "x": 2515.939453125,
                "top": 342.44791666666663,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 34%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
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
                "x": 2513.3349609375,
                "top": 605.46875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800
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
          "marketing": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 721.3541666666666,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31.25390625,
                    "weight": 800
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
          "personnel": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 852.8645833333333,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "人员",
                    "size": 31.25390625,
                    "weight": 800
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
          "sales": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 950.5208333333333,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售",
                    "size": 31.25390625,
                    "weight": 800
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
          "ga": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 1053.3854166666665,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800
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
          "info_tech": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 1143.2291666666665,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "信息技术",
                    "size": 31.25390625,
                    "weight": 800
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
          "amortization": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 1233.0729166666665,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.25390625,
                    "weight": 800
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
          "restructuring": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 1316.40625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"76\" y=\"955\" width=\"234\" height=\"115\" rx=\"24\" fill=\"#002a6e\"/><text x=\"193\" y=\"995\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">总预订额</text><text data-operating-metric=\"gross_bookings\" x=\"193\" y=\"1026\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">$39.8B</text><text x=\"193\" y=\"1053\" text-anchor=\"middle\" font-size=\"19\" fill=\"white\">同比 +24%</text><rect x=\"318\" y=\"955\" width=\"255\" height=\"115\" rx=\"24\" fill=\"#002a6e\"/><text x=\"445.5\" y=\"995\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">预订夜晚数</text><text data-operating-metric=\"nights_booked\" x=\"445.5\" y=\"1026\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">276M</text><text x=\"445.5\" y=\"1053\" text-anchor=\"middle\" font-size=\"19\" fill=\"white\">同比 +15%</text><text x=\"131\" y=\"1104\" font-size=\"30\" font-weight=\"800\">来源：季度业绩</text></g></g>"
    }
  }
});})();
