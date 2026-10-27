window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "booking-q1-fy23",
  "name": "Booking Holdings · Q1 FY23",
  "company": "Booking Holdings",
  "meta": {
    "company": "Booking Holdings",
    "title": "Booking Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/booking-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.9414,
    "titleSize": 127.6201,
    "titleWeight": 800,
    "titleTextLength": 2233.3521,
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
      "name": 39.0674,
      "value": 37.7651,
      "note": 27.3472,
      "lineGap": 7.8135
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"98.9707\" y=\"1243.6450\" width=\"304.7256\" height=\"149.7583\" rx=\"29.9517\" fill=\"#002a6e\"/><text x=\"251.3335\" y=\"1297.0371\" text-anchor=\"middle\" font-size=\"28.6494\" font-weight=\"800\" fill=\"#ffffff\">Gross bookings</text><text data-operating-metric=\"gross_bookings\" x=\"251.3335\" y=\"1336.1045\" text-anchor=\"middle\" font-size=\"28.6494\" fill=\"#ffffff\">$39B</text><text x=\"251.3335\" y=\"1368.6606\" text-anchor=\"middle\" font-size=\"23.4404\" fill=\"#ffffff\">+44% Y/Y</text><rect x=\"414.1143\" y=\"1243.6450\" width=\"332.0728\" height=\"149.7583\" rx=\"29.9517\" fill=\"#002a6e\"/><text x=\"580.1506\" y=\"1297.0371\" text-anchor=\"middle\" font-size=\"28.6494\" font-weight=\"800\" fill=\"#ffffff\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"580.1506\" y=\"1336.1045\" text-anchor=\"middle\" font-size=\"28.6494\" fill=\"#ffffff\">274M</text><text x=\"580.1506\" y=\"1368.6606\" text-anchor=\"middle\" font-size=\"23.4404\" fill=\"#ffffff\">+38% Y/Y</text><text x=\"171.8965\" y=\"1438.9819\" font-size=\"39.0674\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "booking-company-logo",
      "href": "data/assets/raster-annotations/booking/company-logo.png",
      "x": 823.0195,
      "y": 247.4268,
      "width": 533.9209,
      "height": 128.9224
    },
    {
      "key": "booking-merchant-brands",
      "href": "data/assets/raster-annotations/booking/merchant-brands.png",
      "x": 13.0225,
      "y": 722.7466,
      "width": 166.6875,
      "height": 188.8257
    },
    {
      "key": "booking-agency-brand",
      "href": "data/assets/raster-annotations/booking/agency-brand.png",
      "x": 28.6494,
      "y": 402.394,
      "width": 145.8516,
      "height": 147.1538
    },
    {
      "key": "booking-advertising-brands",
      "href": "data/assets/raster-annotations/booking/advertising-brands.png",
      "x": 20.8359,
      "y": 1031.3789,
      "width": 145.8516,
      "height": 125.0156
    }
  ],
  "layout": {
    "scale": 83.3438,
    "nodes": {
      "agency": {
        "x": 460.9951,
        "y": 398.4873,
        "width": 71.6235,
        "height": 149.7583
      },
      "merchant": {
        "x": 460.9951,
        "y": 746.187,
        "width": 71.6235,
        "height": 147.1538
      },
      "advertising_other": {
        "x": 460.9951,
        "y": 1079.562,
        "width": 71.6235,
        "height": 20.8359
      },
      "revenue": {
        "x": 1083.4688,
        "y": 587.313,
        "width": 72.9258,
        "height": 315.1436
      },
      "operating_profit": {
        "x": 1704.6401,
        "y": 436.2524,
        "width": 71.6235,
        "height": 37.7651
      },
      "operating_expenses": {
        "x": 1705.9424,
        "y": 731.8623,
        "width": 72.9258,
        "height": 277.3784
      },
      "net_profit": {
        "x": 2329.7183,
        "y": 325.5615,
        "width": 71.6235,
        "height": 22.1382
      },
      "other": {
        "x": 2329.7183,
        "y": 476.6221,
        "width": 71.6235,
        "height": 11.7202
      },
      "tax": {
        "x": 2329.7183,
        "y": 591.2197,
        "width": 71.6235,
        "height": 2.6045
      },
      "marketing": {
        "x": 2329.7183,
        "y": 662.8433,
        "width": 71.6235,
        "height": 125.0156
      },
      "personnel": {
        "x": 2329.7183,
        "y": 858.1802,
        "width": 71.6235,
        "height": 61.2056
      },
      "sales": {
        "x": 2329.7183,
        "y": 988.4048,
        "width": 71.6235,
        "height": 45.5786
      },
      "ga": {
        "x": 2329.7183,
        "y": 1096.4912,
        "width": 71.6235,
        "height": 24.7427
      },
      "info_tech": {
        "x": 2329.7183,
        "y": 1187.6484,
        "width": 71.6235,
        "height": 11.7202
      },
      "amortization": {
        "x": 2329.7183,
        "y": 1270.9922,
        "width": 71.6235,
        "height": 9.1157
      },
      "restructuring": {
        "x": 2329.7183,
        "y": 1349.127,
        "width": 71.6235,
        "height": 1.3022
      }
    },
    "labels": {
      "agency": {
        "blocks": [
          {
            "x": 497.458,
            "top": 304.7256,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "$value",
                "size": 37.7651,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 27.3472,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.6963,
            "top": 449.7929,
            "anchor": "end",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Agency",
                "size": 39.0674,
                "weight": 800
              }
            ]
          }
        ]
      },
      "merchant": {
        "blocks": [
          {
            "x": 497.458,
            "top": 652.4253,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "$value",
                "size": 37.7651,
                "weight": 400
              },
              {
                "text": "+67% Y/Y",
                "size": 27.3472,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.9277,
            "top": 761.814,
            "anchor": "end",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Merchant",
                "size": 39.0674,
                "weight": 800
              },
              {
                "text": "Commissions,",
                "size": 26.0449,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "payments, insurance",
                "size": 26.0449,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "advertising_other": {
        "blocks": [
          {
            "x": 497.458,
            "top": 985.8003,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "$value",
                "size": 37.7651,
                "weight": 400
              },
              {
                "text": "+25% Y/Y",
                "size": 27.3472,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 420.6255,
            "top": 1042.3901,
            "anchor": "end",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Advertising",
                "size": 39.0674,
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 39.0674,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1119.9316,
            "top": 440.1592,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0674,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0674,
                "weight": 400
              },
              {
                "text": "+40% Y/Y",
                "size": 27.3472,
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
            "x": 1741.103,
            "top": 250.0312,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0674,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0674,
                "weight": 400
              },
              {
                "text": "12% margin",
                "size": 27.3472,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.3472,
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
            "x": 1741.103,
            "top": 1022.2632,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0674,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0674,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0674,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2518.5439,
            "top": 243.52,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0674,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0674,
                "weight": 400
              },
              {
                "text": "7% margin",
                "size": 27.3472,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(32pp) Y/Y",
                "size": 27.3472,
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
            "x": 2508.126,
            "top": 445.3682,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Other",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2508.126,
            "top": 557.3613,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Tax",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2512.0327,
            "top": 691.4927,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Marketing",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
                "weight": 400
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2508.126,
            "top": 850.3667,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Personnel",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sales": {
        "blocks": [
          {
            "x": 2508.126,
            "top": 963.6621,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Sales",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2513.335,
            "top": 1065.2373,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "G&A",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
                "weight": 400
              }
            ]
          }
        ]
      },
      "info_tech": {
        "blocks": [
          {
            "x": 2508.126,
            "top": 1151.1855,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Info Tech",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2518.5439,
            "top": 1235.8315,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
                "weight": 400
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2508.126,
            "top": 1317.873,
            "anchor": "middle",
            "lineGap": 9.1157,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.2539,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.2539,
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
      "id": "agency",
      "label": "Agency",
      "value": 1.8,
      "valueText": "$1.8B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+23% Y/Y"
      ]
    },
    {
      "id": "merchant",
      "label": "Merchant",
      "value": 1.8,
      "valueText": "$1.8B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+67% Y/Y"
      ]
    },
    {
      "id": "advertising_other",
      "label": "Advertising & Other",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+25% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.8,
      "valueText": "$3.8B",
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+40% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.5,
      "valueText": "$0.5B",
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "12% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 3.3,
      "valueText": "($3.3B)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.3,
      "valueText": "$0.3B",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "7% margin",
        "(32pp) Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.037,
      "valueText": "($37M)",
      "type": "cost",
      "col": 3,
      "order": 8,
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 1.5,
      "valueText": "($1.5B)",
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": []
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 0.7,
      "valueText": "($0.7B)",
      "type": "cost",
      "col": 3,
      "order": 10,
      "notes": []
    },
    {
      "id": "sales",
      "label": "Sales",
      "value": 0.5,
      "valueText": "($0.5B)",
      "type": "cost",
      "col": 3,
      "order": 11,
      "notes": []
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 3,
      "order": 12,
      "notes": []
    },
    {
      "id": "info_tech",
      "label": "Info Tech",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 3,
      "order": 13,
      "notes": []
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 3,
      "order": 14,
      "notes": []
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.001,
      "valueText": "($1M)",
      "type": "cost",
      "col": 3,
      "order": 15,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "agency",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 149.7583,
      "targetWidth": 149.7583,
      "y0": 473.3665,
      "y1": 662.1921,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d3f0"
    },
    {
      "source": "merchant",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 147.1538,
      "targetWidth": 145.8516,
      "y0": 819.7639,
      "y1": 809.9971,
      "sourceOrder": 1,
      "targetOrder": 1,
      "linkTint": "#85d3f0"
    },
    {
      "source": "advertising_other",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 20.8359,
      "targetWidth": 22.1382,
      "y0": 1089.98,
      "y1": 891.3875,
      "sourceOrder": 2,
      "targetOrder": 2,
      "linkTint": "#85d3f0"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.5,
      "sourceWidth": 37.7651,
      "targetWidth": 37.7651,
      "y0": 606.1956,
      "y1": 455.135,
      "sourceOrder": 3,
      "targetOrder": 3,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 3.3,
      "sourceWidth": 277.3784,
      "targetWidth": 277.3784,
      "y0": 763.7673,
      "y1": 870.5515,
      "sourceOrder": 4,
      "targetOrder": 4,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 22.1382,
      "targetWidth": 22.1382,
      "y0": 447.3215,
      "y1": 336.6306,
      "sourceOrder": 5,
      "targetOrder": 5,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.2,
      "sourceWidth": 11.7202,
      "targetWidth": 11.7202,
      "y0": 464.2507,
      "y1": 482.4822,
      "sourceOrder": 6,
      "targetOrder": 6,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.037,
      "sourceWidth": 2.6045,
      "targetWidth": 2.6045,
      "y0": 471.4131,
      "y1": 592.522,
      "sourceOrder": 7,
      "targetOrder": 7,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.5,
      "sourceWidth": 125.015625,
      "targetWidth": 125.0156,
      "y0": 794.3701171875,
      "y1": 725.3511,
      "sourceOrder": 8,
      "targetOrder": 8,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 0.7,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.2056,
      "y0": 887.480712890625,
      "y1": 888.783,
      "sourceOrder": 9,
      "targetOrder": 9,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales",
      "value": 0.5,
      "sourceWidth": 45.57861328125,
      "targetWidth": 45.5786,
      "y0": 940.872802734375,
      "y1": 1011.1941,
      "sourceOrder": 10,
      "targetOrder": 10,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.7427,
      "y0": 976.033447265625,
      "y1": 1108.8625,
      "sourceOrder": 11,
      "targetOrder": 11,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "info_tech",
      "value": 0.1,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.7202,
      "y0": 994.264892578125,
      "y1": 1193.5085,
      "sourceOrder": 12,
      "targetOrder": 12,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "sourceWidth": 7.8134765625,
      "targetWidth": 9.1157,
      "y0": 1004.03173828125,
      "y1": 1275.55,
      "sourceOrder": 13,
      "targetOrder": 13,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.001,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.3022,
      "y0": 1008.589599609375,
      "y1": 1349.7781,
      "sourceOrder": 14,
      "targetOrder": 14,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "缤客控股 · 2023 财年第一季度",
      "meta": {
        "title": "缤客控股 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "titleTextLength": 2233.3521
      },
      "nodes": {
        "agency": {
          "label": "代理",
          "notes": [
            "同比 +23%"
          ]
        },
        "merchant": {
          "label": "商户",
          "notes": [
            "同比 +67%"
          ]
        },
        "advertising_other": {
          "label": "广告及其他",
          "notes": [
            "同比 +25%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +40%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 12%",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 (32 个百分点)"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": []
        },
        "personnel": {
          "label": "人员",
          "notes": []
        },
        "sales": {
          "label": "销售",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "info_tech": {
          "label": "信息技术",
          "notes": []
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        },
        "restructuring": {
          "label": "重组",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "agency": {
            "blocks": [
              {
                "x": 497.458,
                "top": 304.7256,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7651,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 27.3472,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.6963,
                "top": 449.33275859375,
                "anchor": "end",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "代理",
                    "size": 39.0674,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "merchant": {
            "blocks": [
              {
                "x": 497.458,
                "top": 652.4253,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7651,
                    "weight": 400
                  },
                  {
                    "text": "同比 +67%",
                    "size": 27.3472,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.9277,
                "top": 781.1139999999999,
                "anchor": "end",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "商户",
                    "size": 39.0674,
                    "weight": 800
                  },
                  {
                    "text": "佣金、支付、保险",
                    "size": 26.0449,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "advertising_other": {
            "blocks": [
              {
                "x": 497.458,
                "top": 985.8003,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7651,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27.3472,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 420.6255,
                "top": 1065.94625859375,
                "anchor": "end",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "广告及其他",
                    "size": 39.0674,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1119.9316,
                "top": 440.1592,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0674,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0674,
                    "weight": 400
                  },
                  {
                    "text": "同比 +40%",
                    "size": 27.3472,
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
                "x": 1741.103,
                "top": 250.0312,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0674,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0674,
                    "weight": 400
                  },
                  {
                    "text": "利润率 12%",
                    "size": 27.3472,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.3472,
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
                "x": 1741.103,
                "top": 1022.2632,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0674,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0674,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0674,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2518.5439,
                "top": 243.52,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0674,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0674,
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
                    "size": 27.3472,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (32 个百分点)",
                    "size": 27.3472,
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
                "x": 2508.126,
                "top": 445.3682,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2508.126,
                "top": 557.3613,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2512.0327,
                "top": 691.4927,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2508.126,
                "top": 850.3667,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "人员",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sales": {
            "blocks": [
              {
                "x": 2508.126,
                "top": 963.6621,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "销售",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2513.335,
                "top": 1065.2373,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "info_tech": {
            "blocks": [
              {
                "x": 2508.126,
                "top": 1151.1855,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "信息技术",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2518.5439,
                "top": 1235.8315,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2508.126,
                "top": 1317.873,
                "anchor": "middle",
                "lineGap": 9.1157,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.2539,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.2539,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"98.9707\" y=\"1243.6450\" width=\"304.7256\" height=\"149.7583\" rx=\"29.9517\" fill=\"#002a6e\"/><text x=\"251.3335\" y=\"1297.0371\" text-anchor=\"middle\" font-size=\"28.6494\" font-weight=\"800\" fill=\"#ffffff\">总预订额</text><text data-operating-metric=\"gross_bookings\" x=\"251.3335\" y=\"1336.1045\" text-anchor=\"middle\" font-size=\"28.6494\" fill=\"#ffffff\">$39B</text><text x=\"251.3335\" y=\"1368.6606\" text-anchor=\"middle\" font-size=\"23.4404\" fill=\"#ffffff\">同比 +44%</text><rect x=\"414.1143\" y=\"1243.6450\" width=\"332.0728\" height=\"149.7583\" rx=\"29.9517\" fill=\"#002a6e\"/><text x=\"580.1506\" y=\"1297.0371\" text-anchor=\"middle\" font-size=\"28.6494\" font-weight=\"800\" fill=\"#ffffff\">预订夜晚数</text><text data-operating-metric=\"nights_booked\" x=\"580.1506\" y=\"1336.1045\" text-anchor=\"middle\" font-size=\"28.6494\" fill=\"#ffffff\">274M</text><text x=\"580.1506\" y=\"1368.6606\" text-anchor=\"middle\" font-size=\"23.4404\" fill=\"#ffffff\">同比 +38%</text><text x=\"171.8965\" y=\"1438.9819\" font-size=\"39.0674\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gross_bookings",
      "label": "Gross bookings",
      "value": "39",
      "unit": "B",
      "currency": "USD",
      "literal": "$39B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+44% Y/Y"
      ],
      "quote": "Gross bookings\n$39B\n+44% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          99,
          1244,
          305,
          150
        ]
      }
    },
    {
      "id": "nights_booked",
      "label": "Nights booked",
      "value": "274000000",
      "unit": "count",
      "currency": null,
      "literal": "274M",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+38% Y/Y"
      ],
      "quote": "Nights booked\n274M\n+38% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          414,
          1244,
          332,
          152
        ]
      }
    }
  ]
});
