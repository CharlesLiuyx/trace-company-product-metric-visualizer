window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "booking-q3-fy22",
  "name": "Booking Holdings · Q3 FY22",
  "company": "Booking Holdings",
  "meta": {
    "company": "Booking Holdings",
    "title": "Booking Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/booking-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.61458333333331,
    "titleSize": 127.60416666666666,
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
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 7
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Arial,sans-serif\"><rect x=\"21\" y=\"953\" width=\"234\" height=\"115\" rx=\"24\" fill=\"#003075\"/><text x=\"138.0\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">Gross bookings</text><text data-operating-metric=\"gross_bookings\" x=\"138.0\" y=\"1023\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">$32.1B</text><text x=\"138.0\" y=\"1048\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">+36% Y/Y</text><rect x=\"264\" y=\"953\" width=\"255\" height=\"115\" rx=\"24\" fill=\"#003075\"/><text x=\"391.5\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"391.5\" y=\"1023\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">240M</text><text x=\"391.5\" y=\"1048\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">+31% Y/Y</text><rect x=\"527\" y=\"953\" width=\"234\" height=\"115\" rx=\"24\" fill=\"#003075\"/><text x=\"644.0\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">Alternative</text><text data-operating-metric=\"alternative\" x=\"644.0\" y=\"1023\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">30%</text><text x=\"644.0\" y=\"1048\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">of total nights</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "booking-company-logo",
      "href": "data/assets/raster-annotations/booking/company-logo.png",
      "x": 800.88134765625,
      "y": 277.34375,
      "width": 533.9208984375,
      "height": 130.20833333333331
    },
    {
      "key": "booking-agency-brand",
      "href": "data/assets/raster-annotations/booking/agency-brand.png",
      "x": 37.76513671875,
      "y": 498.69791666666663,
      "width": 143.2470703125,
      "height": 144.53125
    },
    {
      "key": "booking-merchant-brands",
      "href": "data/assets/raster-annotations/booking/merchant-brands.png",
      "x": 33.8583984375,
      "y": 789.0625,
      "width": 153.6650390625,
      "height": 174.47916666666666
    },
    {
      "key": "booking-advertising-brands",
      "href": "data/assets/raster-annotations/booking/advertising-brands.png",
      "x": 37.76513671875,
      "y": 1057.2916666666665,
      "width": 130.224609375,
      "height": 115.88541666666666
    }
  ],
  "layout": {
    "scale": 47.39583333333333,
    "nodes": {
      "agency": {
        "x": 468.80859375,
        "y": 497.3958333333333,
        "width": 74.22802734375,
        "height": 153.64583333333331
      },
      "merchant": {
        "x": 470.11083984375,
        "y": 822.9166666666666,
        "width": 74.22802734375,
        "height": 126.30208333333333
      },
      "advertising_other": {
        "x": 468.80859375,
        "y": 1106.7708333333333,
        "width": 74.22802734375,
        "height": 11.71875
      },
      "revenue": {
        "x": 1087.37548828125,
        "y": 593.75,
        "width": 72.92578125,
        "height": 289.0625
      },
      "operating_profit": {
        "x": 1715.05810546875,
        "y": 468.75,
        "width": 72.92578125,
        "height": 123.69791666666666
      },
      "operating_expenses": {
        "x": 1715.05810546875,
        "y": 829.4270833333333,
        "width": 72.92578125,
        "height": 166.66666666666666
      },
      "net_profit": {
        "x": 2323.20703125,
        "y": 365.88541666666663,
        "width": 72.92578125,
        "height": 79.42708333333333
      },
      "tax": {
        "x": 2323.20703125,
        "y": 596.3541666666666,
        "width": 72.92578125,
        "height": 24.739583333333332
      },
      "other": {
        "x": 2323.20703125,
        "y": 686.1979166666666,
        "width": 72.92578125,
        "height": 19.53125
      },
      "marketing": {
        "x": 2323.20703125,
        "y": 785.15625,
        "width": 72.92578125,
        "height": 85.9375
      },
      "personnel": {
        "x": 2323.20703125,
        "y": 941.40625,
        "width": 72.92578125,
        "height": 29.947916666666664
      },
      "sales": {
        "x": 2323.20703125,
        "y": 1053.3854166666665,
        "width": 72.92578125,
        "height": 26.041666666666664
      },
      "ga": {
        "x": 2323.20703125,
        "y": 1167.96875,
        "width": 72.92578125,
        "height": 11.71875
      },
      "info_tech": {
        "x": 2323.20703125,
        "y": 1273.4375,
        "width": 72.92578125,
        "height": 5.208333333333333
      },
      "da": {
        "x": 2323.20703125,
        "y": 1350.2604166666665,
        "width": 72.92578125,
        "height": 3.90625
      }
    },
    "labels": {
      "agency": {
        "blocks": [
          {
            "x": 507.8759765625,
            "top": 399.7395833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
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
            "x": 431.04345703125,
            "top": 550.78125,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Agency",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "merchant": {
        "blocks": [
          {
            "x": 507.8759765625,
            "top": 725.2604166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+61% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 431.04345703125,
            "top": 819.0104166666666,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Merchant",
                "size": 39.0625,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 345.09521484375,
            "top": 877.6041666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Commissions,",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "payments, insurance",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "advertising_other": {
        "blocks": [
          {
            "x": 507.8759765625,
            "top": 1010.4166666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+26% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 431.04345703125,
            "top": 1064.9833333333333,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Advertising",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1122.5361328125,
            "top": 445.3125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1751.52099609375,
            "top": 277.34375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "43% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1751.52099609375,
            "top": 1009.1145833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating expenses",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2506.82373046875,
            "top": 312.5,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "28% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+11pp Y/Y",
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
            "x": 2493.80126953125,
            "top": 563.8020833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 800
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
      "other": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 670.5729166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 800
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
      "marketing": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 790.3645833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Marketing",
                "size": 31.25,
                "weight": 800
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
      "personnel": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 910.15625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Personnel",
                "size": 31.25,
                "weight": 800
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
      "sales": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 1027.34375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Sales",
                "size": 31.25,
                "weight": 800
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
            "x": 2493.80126953125,
            "top": 1132.8125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 800
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
      "info_tech": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 1233.0729166666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Info Tech",
                "size": 31.25,
                "weight": 800
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
      "da": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 1320.3125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.25,
                "weight": 800
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
  "nodes": [
    {
      "id": "merchant",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Merchant",
      "value": 2.6,
      "notes": [
        "+61% Y/Y",
        "Commissions, payments, insurance"
      ]
    },
    {
      "id": "agency",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Agency",
      "value": 3.2,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "advertising_other",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Advertising & Other",
      "value": 0.2,
      "notes": [
        "+26% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "Revenue",
      "value": 6.1,
      "notes": [
        "+29% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 4,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.6,
      "notes": [
        "43% margin",
        "Unchanged"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": "Operating expenses",
      "value": 3.5
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": "Net profit",
      "value": 1.7,
      "notes": [
        "28% margin",
        "+11pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Tax",
      "value": 0.5
    },
    {
      "id": "other",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Other",
      "value": 0.4
    },
    {
      "id": "marketing",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Marketing",
      "value": 1.8
    },
    {
      "id": "personnel",
      "col": 3,
      "order": 10,
      "type": "cost",
      "label": "Personnel",
      "value": 0.6
    },
    {
      "id": "sales",
      "col": 3,
      "order": 11,
      "type": "cost",
      "label": "Sales",
      "value": 0.5
    },
    {
      "id": "ga",
      "col": 3,
      "order": 12,
      "type": "cost",
      "label": "G&A",
      "value": 0.3
    },
    {
      "id": "info_tech",
      "col": 3,
      "order": 13,
      "type": "cost",
      "label": "Info Tech",
      "value": 0.1
    },
    {
      "id": "da",
      "col": 3,
      "order": 14,
      "type": "cost",
      "label": "Amortization",
      "value": 0.1
    }
  ],
  "links": [
    {
      "source": "agency",
      "target": "revenue",
      "value": 3.2,
      "sourceWidth": 153.64583333333331,
      "targetWidth": 153.64583333333331,
      "y0": 574.21875,
      "y1": 670.5729166666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d3f0"
    },
    {
      "source": "merchant",
      "target": "revenue",
      "value": 2.6,
      "sourceWidth": 126.30208333333333,
      "targetWidth": 123.69791666666666,
      "y0": 886.0677083333333,
      "y1": 809.2447916666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85d3f0"
    },
    {
      "source": "advertising_other",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 11.71875,
      "targetWidth": 11.71875,
      "y0": 1112.6302083333333,
      "y1": 876.953125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85d3f0"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 2.6,
      "sourceWidth": 123.69791666666666,
      "targetWidth": 123.69791666666666,
      "y0": 655.5989583333333,
      "y1": 530.5989583333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 3.5,
      "sourceWidth": 165.36458333333331,
      "targetWidth": 166.66666666666666,
      "y0": 800.1302083333333,
      "y1": 912.7604166666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.7,
      "sourceWidth": 79.42708333333333,
      "targetWidth": 79.42708333333333,
      "y0": 508.46354166666663,
      "y1": 405.5989583333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 24.739583333333332,
      "targetWidth": 24.739583333333332,
      "y0": 560.546875,
      "y1": 608.7239583333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.4,
      "sourceWidth": 19.53125,
      "targetWidth": 19.53125,
      "y0": 582.6822916666666,
      "y1": 695.9635416666666,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.8,
      "sourceWidth": 85.9375,
      "targetWidth": 85.9375,
      "y0": 872.3958333333333,
      "y1": 828.125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 0.6,
      "sourceWidth": 29.947916666666664,
      "targetWidth": 29.947916666666664,
      "y0": 930.3385416666666,
      "y1": 956.3802083333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales",
      "value": 0.5,
      "sourceWidth": 26.041666666666664,
      "targetWidth": 26.041666666666664,
      "y0": 958.3333333333333,
      "y1": 1066.40625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 13.020833333333332,
      "targetWidth": 11.71875,
      "y0": 977.8645833333333,
      "y1": 1173.828125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "info_tech",
      "value": 0.1,
      "sourceWidth": 6.510416666666666,
      "targetWidth": 5.208333333333333,
      "y0": 987.6302083333333,
      "y1": 1276.0416666666665,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.1,
      "sourceWidth": 5.208333333333333,
      "targetWidth": 3.90625,
      "y0": 993.4895833333333,
      "y1": 1352.2135416666665,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "缤客控股 · 2022 财年第三季度",
      "meta": {
        "title": "缤客控股 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "titleTextLength": 2233.35205078125
      },
      "nodes": {
        "agency": {
          "label": "代理",
          "notes": [
            "同比 +12%"
          ]
        },
        "merchant": {
          "label": "商户",
          "notes": [
            "同比 +61%",
            "佣金、支付、保险"
          ]
        },
        "advertising_other": {
          "label": [
            "广告",
            "及其他"
          ],
          "notes": [
            "同比 +26%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +29%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 43%",
            "保持不变"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 28%",
            "同比 +11 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他"
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
        "da": {
          "label": "摊销"
        }
      },
      "layout": {
        "labels": {
          "agency": {
            "blocks": [
              {
                "x": 507.8759765625,
                "top": 399.7395833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
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
                "x": 431.04345703125,
                "top": 550.78125,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "代理",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "merchant": {
            "blocks": [
              {
                "x": 507.8759765625,
                "top": 725.2604166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +61%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 431.04345703125,
                "top": 819.0104166666666,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "商户",
                    "size": 39.0625,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 345.09521484375,
                "top": 877.6041666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "佣金、支付、保险",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "advertising_other": {
            "blocks": [
              {
                "x": 507.8759765625,
                "top": 1010.4166666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +26%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 431.04345703125,
                "top": 1064.9833333333333,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "广告",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "及其他",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1122.5361328125,
                "top": 445.3125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1751.52099609375,
                "top": 277.34375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 43%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1751.52099609375,
                "top": 1009.1145833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2516.82373046875,
                "top": 312.5,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 28%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +11 个百分点",
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
                "x": 2493.80126953125,
                "top": 563.8020833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 800
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
          "other": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 670.5729166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 800
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
          "marketing": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 790.3645833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31.25,
                    "weight": 800
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
          "personnel": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 910.15625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "人员",
                    "size": 31.25,
                    "weight": 800
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
          "sales": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 1027.34375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售",
                    "size": 31.25,
                    "weight": 800
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
                "x": 2493.80126953125,
                "top": 1132.8125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 800
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
          "info_tech": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 1233.0729166666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "信息技术",
                    "size": 31.25,
                    "weight": 800
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
          "da": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 1320.3125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.25,
                    "weight": 800
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Arial,sans-serif\"><rect x=\"21\" y=\"953\" width=\"234\" height=\"115\" rx=\"24\" fill=\"#003075\"/><text x=\"138.0\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">总预订额</text><text data-operating-metric=\"gross_bookings\" x=\"138.0\" y=\"1023\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">$32.1B</text><text x=\"138.0\" y=\"1048\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">同比 +36%</text><rect x=\"264\" y=\"953\" width=\"255\" height=\"115\" rx=\"24\" fill=\"#003075\"/><text x=\"391.5\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">预订夜晚数</text><text data-operating-metric=\"nights_booked\" x=\"391.5\" y=\"1023\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">240M</text><text x=\"391.5\" y=\"1048\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">同比 +31%</text><rect x=\"527\" y=\"953\" width=\"234\" height=\"115\" rx=\"24\" fill=\"#003075\"/><text x=\"644.0\" y=\"993\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"white\">其他住宿</text><text data-operating-metric=\"alternative\" x=\"644.0\" y=\"1023\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">30%</text><text x=\"644.0\" y=\"1048\" text-anchor=\"middle\" font-size=\"18\" fill=\"white\">占总夜晚数</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\">来源：季度财报</text></g></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gross_bookings",
      "label": "Gross bookings",
      "value": "32.1",
      "unit": "B",
      "currency": "USD",
      "literal": "$32.1B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+36% Y/Y"
      ],
      "quote": "Gross bookings\n$32.1B\n+36% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          27,
          1241,
          305,
          150
        ]
      }
    },
    {
      "id": "nights_booked",
      "label": "Nights booked",
      "value": "240000000",
      "unit": "count",
      "currency": null,
      "literal": "240M",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+31% Y/Y"
      ],
      "quote": "Nights booked\n240M\n+31% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          344,
          1241,
          332,
          150
        ]
      }
    },
    {
      "id": "alternative",
      "label": "Alternative",
      "value": "30",
      "unit": "%",
      "currency": null,
      "literal": "30%",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "of total nights"
      ],
      "quote": "Alternative\n30%\nof total nights",
      "anchor": {
        "type": "image-box",
        "box": [
          686,
          1241,
          305,
          150
        ]
      }
    }
  ]
});
