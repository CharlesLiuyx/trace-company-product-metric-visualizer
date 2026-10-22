window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#767676",
    "noteColor": "#767676",
    "palette": {
      "source": {
        "node": "#07008e",
        "label": "#07008e"
      },
      "hub": {
        "node": "#07008e",
        "label": "#07008e"
      },
      "profit": {
        "node": "#29a32a",
        "label": "#008f51"
      },
      "cost": {
        "node": "#d70000",
        "label": "#8f1200"
      }
    },
    "linkTint": {
      "source": "#8785c4",
      "hub": "#8785c4",
      "profit": "#99cd99",
      "cost": "#df8184"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "type": {
      "name": 37.77,
      "value": 36.46,
      "note": 27.35,
      "lineGap": 10.42
    },
    "allowRasterAnnotations": true
  },
  "key": "sea-q4-fy23",
  "name": "Sea · Q4 FY23",
  "company": "Sea",
  "meta": {
    "company": "Sea",
    "title": "Sea Limited Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sea-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.34,
    "titleSize": 122.41,
    "titleWeight": 800,
    "titleTextLength": 2461.25,
    "hidePeriodStamp": true
  },
  "nodes": [
    {
      "id": "shopee",
      "label": "Shopee",
      "value": 2.6,
      "valueText": "$2.6B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+23% Y/Y"
      ]
    },
    {
      "id": "garena",
      "label": "Garena",
      "value": 0.5,
      "valueText": "$0.5B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(46%) Y/Y"
      ]
    },
    {
      "id": "seamoney",
      "label": "SeaMoney",
      "value": 0.5,
      "valueText": "$0.5B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "other_services",
      "label": "Other Services",
      "value": 0.042,
      "valueText": "$42M",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.6,
      "valueText": "$3.6B",
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.5,
      "valueText": "$1.5B",
      "type": "profit",
      "col": 2,
      "order": 5,
      "notes": [
        "42% margin",
        "(7pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2.1,
      "valueText": "($2.1B)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other income",
      "value": 0.059,
      "valueText": "$59M",
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 0.056,
      "valueText": "($56M)",
      "type": "cost",
      "col": 3,
      "order": 8,
      "notes": [
        "(2%) margin",
        "(14pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.6,
      "valueText": "($1.6B)",
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 1,
      "valueText": "($1.0B)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [
        "27% of revenue",
        "+13pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": [
        "8% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [
        "6% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "credit_losses",
      "label": "Provision for credit losses",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 4,
      "order": 13,
      "notes": [
        "4% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "layout": {
    "nodes": {
      "shopee": {
        "x": 461,
        "y": 489.64,
        "width": 72.93,
        "height": 196.64
      },
      "garena": {
        "x": 461,
        "y": 845.16,
        "width": 72.93,
        "height": 39.07
      },
      "seamoney": {
        "x": 461,
        "y": 1043.1,
        "width": 72.93,
        "height": 35.16
      },
      "other_services": {
        "x": 461,
        "y": 1243.65,
        "width": 72.93,
        "height": 2.6
      },
      "revenue": {
        "x": 928.5,
        "y": 638.1,
        "width": 72.93,
        "height": 273.47
      },
      "gross_profit": {
        "x": 1389.5,
        "y": 476.62,
        "width": 72.93,
        "height": 114.6
      },
      "cost_of_revenue": {
        "x": 1388.19,
        "y": 957.15,
        "width": 72.93,
        "height": 158.87
      },
      "other_income": {
        "x": 1655.15,
        "y": 475.32,
        "width": 72.93,
        "height": 2.6
      },
      "operating_loss": {
        "x": 1668.18,
        "y": 826.93,
        "width": 72.93,
        "height": 3.91
      },
      "operating_expenses": {
        "x": 1862.21,
        "y": 636.8,
        "width": 72.93,
        "height": 122.41
      },
      "sm": {
        "x": 2329.72,
        "y": 474.02,
        "width": 72.93,
        "height": 72.93
      },
      "rnd": {
        "x": 2329.72,
        "y": 776.14,
        "width": 72.93,
        "height": 20.84
      },
      "ga": {
        "x": 2329.72,
        "y": 1001.43,
        "width": 72.93,
        "height": 16.93
      },
      "credit_losses": {
        "x": 2329.72,
        "y": 1231.92,
        "width": 72.93,
        "height": 11.72
      }
    },
    "labels": {
      "shopee": {
        "blocks": [
          {
            "x": 497.46,
            "top": 393.28,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "garena": {
        "blocks": [
          {
            "x": 497.46,
            "top": 747.49,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              },
              {
                "text": "(46%) Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "seamoney": {
        "blocks": [
          {
            "x": 497.46,
            "top": 945.43,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_services": {
        "blocks": [
          {
            "x": 497.46,
            "top": 1182.44,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              }
            ]
          },
          {
            "x": 260.45,
            "top": 1221.78,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Other Services",
                "size": 37.77,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 964.96,
            "top": 493.55,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1425.96,
            "top": 289.1,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              },
              {
                "text": "42% margin",
                "size": 27.35,
                "weight": 400
              },
              {
                "text": "(7pp) Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1424.66,
            "top": 1134.26,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.46,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 36.46,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1691.62,
            "top": 345.1,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "income",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29.95,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1515.81609375,
            "top": 757.91,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Operating loss",
                "size": 36.46,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16,
                "weight": 400
              },
              {
                "text": "(2%) margin",
                "size": 27.35,
                "weight": 400
              },
              {
                "text": "(14pp) Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1898.67,
            "top": 484.44,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Operating",
                "size": 36.46,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 36.46,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 35.16,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2519.85,
            "top": 475.32,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95,
                "weight": 400
              },
              {
                "text": "27% of revenue",
                "size": 27.35,
                "weight": 400
              },
              {
                "text": "+13pp Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2519.85,
            "top": 739.68,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 27.35,
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2519.85,
            "top": 971.48,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95,
                "weight": 400
              },
              {
                "text": "6% of revenue",
                "size": 27.35,
                "weight": 400
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "credit_losses": {
        "blocks": [
          {
            "x": 2519.85,
            "top": 1192.86,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Provision for",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "credit losses",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29.95,
                "weight": 400
              },
              {
                "text": "4% of revenue",
                "size": 27.35,
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "links": [
    {
      "source": "shopee",
      "target": "revenue",
      "value": 2.6,
      "y0": 587.96,
      "y1": 736.42,
      "sourceWidth": 196.64,
      "targetWidth": 196.64,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "garena",
      "target": "revenue",
      "value": 0.5,
      "y0": 864.69,
      "y1": 854.27,
      "sourceWidth": 39.07,
      "targetWidth": 39.07,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "seamoney",
      "target": "revenue",
      "value": 0.5,
      "y0": 1060.68,
      "y1": 891.39,
      "sourceWidth": 35.16,
      "targetWidth": 35.16,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_services",
      "target": "revenue",
      "value": 0.042,
      "y0": 1244.95,
      "y1": 910.27,
      "sourceWidth": 2.6,
      "targetWidth": 2.6,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.5,
      "y0": 696.05,
      "y1": 533.92,
      "sourceWidth": 115.9,
      "targetWidth": 114.6,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.1,
      "y0": 832.79,
      "y1": 1036.59,
      "sourceWidth": 157.57,
      "targetWidth": 158.87,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.5,
      "y0": 533.92,
      "y1": 696.70166015625,
      "sourceWidth": 114.6,
      "targetWidth": 114.59765625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_income",
      "target": "operating_expenses",
      "value": 0.059,
      "y0": 476.62,
      "y1": 638.1005859375,
      "sourceWidth": 2.6,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.056,
      "y0": 828.88,
      "y1": 756.60498046875,
      "sourceWidth": 3.91,
      "targetWidth": 5.208984375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 1,
      "y0": 673.26,
      "y1": 510.48,
      "sourceWidth": 72.93,
      "targetWidth": 72.93,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.3,
      "y0": 720.14,
      "y1": 786.56,
      "sourceWidth": 20.84,
      "targetWidth": 20.84,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "y0": 739.02,
      "y1": 1009.89,
      "sourceWidth": 16.93,
      "targetWidth": 16.93,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "credit_losses",
      "value": 0.2,
      "y0": 753.349365234375,
      "y1": 1237.78,
      "sourceWidth": 11.72,
      "targetWidth": 11.72,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "shopee-marketplace",
      "label": "Shopee Marketplace",
      "value": "2.3",
      "literal": "$2.3B",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+23% Y/Y"
      ],
      "quote": "Shopee Marketplace $2.3B +23% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          31,
          1287,
          430,
          100
        ]
      }
    },
    {
      "id": "garena-bookings",
      "label": "Garena Bookings",
      "value": "0.5",
      "literal": "$0.5B",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "(16%) Y/Y and +2% Q/Q"
      ],
      "quote": "Garena Bookings $0.5B (16%) Y/Y and +2% Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          471,
          1287,
          380,
          100
        ]
      }
    },
    {
      "id": "shopee-operating-profit",
      "label": "Shopee",
      "value": "-0.3",
      "literal": "($0.3B)",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [],
      "quote": "Shopee ($0.3B)",
      "anchor": {
        "type": "image-box",
        "box": [
          1654,
          913,
          268,
          52
        ]
      }
    },
    {
      "id": "garena-operating-profit",
      "label": "Garena",
      "value": "0.3",
      "literal": "$0.3B",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [],
      "quote": "Garena $0.3B",
      "anchor": {
        "type": "image-box",
        "box": [
          1654,
          974,
          268,
          49
        ]
      }
    },
    {
      "id": "seamoney-operating-profit",
      "label": "SeaMoney",
      "value": "0.1",
      "literal": "$0.1B",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [],
      "quote": "SeaMoney $0.1B",
      "anchor": {
        "type": "image-box",
        "box": [
          1654,
          1033,
          268,
          47
        ]
      }
    },
    {
      "id": "other-operating-profit",
      "label": "Other",
      "value": "-0.1",
      "literal": "($0.1B)",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [],
      "quote": "Other ($0.1B)",
      "anchor": {
        "type": "image-box",
        "box": [
          1706,
          1094,
          216,
          47
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><text x=\"272.17\" y=\"606.85\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#ff5a00\" >E-commerce</text><text x=\"272.17\" y=\"638.1\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >(9%) adjusted margin</text><text x=\"272.17\" y=\"669.35\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >(18pp) Y/Y</text><text x=\"272.17\" y=\"897.25\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#d70000\" >Digital Entertainment</text><text x=\"272.17\" y=\"928.5\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >43% adjusted margin</text><text x=\"272.17\" y=\"959.76\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >+15pp Y/Y</text><text x=\"265.66\" y=\"1086.07\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#408bff\" >Digital Financial Services</text><text x=\"265.66\" y=\"1117.33\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >31% adjusted margin</text><text x=\"265.66\" y=\"1148.58\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >+20pp Y/Y</text><rect x=\"31.25\" y=\"1286.62\" width=\"429.74\" height=\"100.27\" rx=\"20.84\" fill=\"#07008e\"/><text x=\"61.21\" y=\"1330.9\" text-anchor=\"start\" font-size=\"27.35\" fill=\"white\" >Shopee Marketplace</text><text x=\"429.74\" y=\"1330.9\" text-anchor=\"end\" font-size=\"27.35\" fill=\"white\" data-operating-metric=\"shopee-marketplace\">$2.3B</text><text x=\"246.12\" y=\"1364.75\" text-anchor=\"middle\" font-size=\"22.14\" fill=\"white\" >+23% Y/Y</text><rect x=\"471.41\" y=\"1286.62\" width=\"380.26\" height=\"100.27\" rx=\"20.84\" fill=\"#07008e\"/><text x=\"501.36\" y=\"1330.9\" text-anchor=\"start\" font-size=\"27.35\" fill=\"white\" >Garena Bookings</text><text x=\"820.42\" y=\"1330.9\" text-anchor=\"end\" font-size=\"27.35\" fill=\"white\" data-operating-metric=\"garena-bookings\">$0.5B</text><text x=\"661.54\" y=\"1364.75\" text-anchor=\"middle\" font-size=\"22.14\" fill=\"white\" >(16%) Y/Y and +2% Q/Q</text><path d=\"M 1661.67 894.64 H 1679.9 L 1703.34 855.58 L 1729.38 894.64 H 1924.72 Q 1944.25 894.64 1944.25 915.48 V 1132.95 Q 1944.25 1152.49 1924.72 1152.49 H 1661.67 Q 1642.13 1152.49 1642.13 1132.95 V 915.48 Q 1642.13 894.64 1661.67 894.64 Z\" fill=\"#f2f2f2\" stroke=\"#07008e\" stroke-width=\"2.6\"/><text x=\"1922.12\" y=\"955.85\" text-anchor=\"end\" font-size=\"29.95\" fill=\"#a21900\" data-operating-metric=\"shopee-operating-profit\">($0.3B)</text><text x=\"1922.12\" y=\"1013.15\" text-anchor=\"end\" font-size=\"29.95\" fill=\"#008f00\" data-operating-metric=\"garena-operating-profit\">$0.3B</text><text x=\"1922.12\" y=\"1069.14\" text-anchor=\"end\" font-size=\"29.95\" fill=\"#008f00\" data-operating-metric=\"seamoney-operating-profit\">$0.1B</text><text x=\"1922.12\" y=\"1123.84\" text-anchor=\"end\" font-size=\"29.95\" fill=\"#a21900\" data-operating-metric=\"other-operating-profit\">($0.1B)</text><text x=\"1745.01\" y=\"1123.84\" text-anchor=\"middle\" font-size=\"28.65\" fill=\"#767676\" >Other</text><text x=\"429.74\" y=\"1437.68\" text-anchor=\"middle\" font-size=\"39.07\" fill=\"#000000\" >Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "sea-q4-fy23-company",
      "href": "data/assets/raster-annotations/sea-q4-fy23/company.png",
      "x": 689,
      "y": 252,
      "width": 433,
      "height": 174
    },
    {
      "key": "sea-q4-fy23-shopee",
      "href": "data/assets/raster-annotations/sea-q4-fy23/shopee.png",
      "x": 116,
      "y": 478,
      "width": 289,
      "height": 106
    },
    {
      "key": "sea-q4-fy23-garena",
      "href": "data/assets/raster-annotations/sea-q4-fy23/garena.png",
      "x": 106,
      "y": 788,
      "width": 290,
      "height": 88
    },
    {
      "key": "sea-q4-fy23-seamoney",
      "href": "data/assets/raster-annotations/sea-q4-fy23/seamoney.png",
      "x": 103,
      "y": 990,
      "width": 320,
      "height": 75
    },
    {
      "key": "sea-q4-fy23-callout-shopee",
      "href": "data/assets/raster-annotations/sea-q4-fy23/callout-shopee.png",
      "x": 1650,
      "y": 904,
      "width": 166,
      "height": 65
    },
    {
      "key": "sea-q4-fy23-callout-garena",
      "href": "data/assets/raster-annotations/sea-q4-fy23/callout-garena.png",
      "x": 1650,
      "y": 970,
      "width": 166,
      "height": 56
    },
    {
      "key": "sea-q4-fy23-callout-seamoney",
      "href": "data/assets/raster-annotations/sea-q4-fy23/callout-seamoney.png",
      "x": 1650,
      "y": 1032,
      "width": 166,
      "height": 45
    }
  ],
  "i18n": {
    "zh": {
      "name": "Sea · 2023 财年第四季度",
      "meta": {
        "title": "Sea Limited 2023 财年第四季度利润表",
        "period": "2023 财年第四季度"
      },
      "nodes": {
        "shopee": {
          "label": "Shopee 电商",
          "notes": [
            "同比 +23%"
          ]
        },
        "garena": {
          "label": "Garena 游戏",
          "notes": [
            "同比 (46%)"
          ]
        },
        "seamoney": {
          "label": "SeaMoney 金融服务",
          "notes": [
            "同比 +24%"
          ]
        },
        "other_services": {
          "label": "其他服务",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 42%",
            "同比 (7 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "other_income": {
          "label": "其他收入",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (2%)",
            "同比 (14 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 27%",
            "同比 +13 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 8%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 6%",
            "同比 (4 个百分点)"
          ]
        },
        "credit_losses": {
          "label": "信用损失拨备",
          "notes": [
            "占收入 4%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "shopee": {
            "blocks": [
              {
                "x": 497.46,
                "top": 393.28,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "garena": {
            "blocks": [
              {
                "x": 497.46,
                "top": 747.49,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  },
                  {
                    "text": "同比 (46%)",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "seamoney": {
            "blocks": [
              {
                "x": 497.46,
                "top": 945.43,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_services": {
            "blocks": [
              {
                "x": 497.46,
                "top": 1182.44,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 260.45,
                "top": 1221.78,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "其他服务",
                    "size": 37.77,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 964.96,
                "top": 493.55,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1425.96,
                "top": 289.1,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  },
                  {
                    "text": "利润率 42%",
                    "size": 27.35,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1424.66,
                "top": 1134.26,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.46,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 36.46,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1691.62,
                "top": 345.1,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "收入",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 29.95,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1515.81609375,
                "top": 757.91,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 36.46,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (2%)",
                    "size": 27.35,
                    "weight": 400
                  },
                  {
                    "text": "同比 (14 个百分点)",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1898.67,
                "top": 484.44,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.46,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 36.46,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 35.16,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2519.85,
                "top": 475.32,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95,
                    "weight": 400
                  },
                  {
                    "text": "占收入 27%",
                    "size": 27.35,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13 个百分点",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2519.85,
                "top": 739.68,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.35,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2519.85,
                "top": 971.48,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95,
                    "weight": 400
                  },
                  {
                    "text": "占收入 6%",
                    "size": 27.35,
                    "weight": 400
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "credit_losses": {
            "blocks": [
              {
                "x": 2519.85,
                "top": 1192.86,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "拨备",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 29.95,
                    "weight": 400
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.35,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><text x=\"272.17\" y=\"606.85\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#ff5a00\" >电商</text><text x=\"272.17\" y=\"638.1\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >调整后利润率 (9%)</text><text x=\"272.17\" y=\"669.35\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >同比 (18 个百分点)</text><text x=\"272.17\" y=\"897.25\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#d70000\" >数字娱乐</text><text x=\"272.17\" y=\"928.5\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >调整后利润率 43%</text><text x=\"272.17\" y=\"959.76\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >同比 +15 个百分点</text><text x=\"265.66\" y=\"1086.07\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#408bff\" >数字金融服务</text><text x=\"265.66\" y=\"1117.33\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >调整后利润率 31%</text><text x=\"265.66\" y=\"1148.58\" text-anchor=\"middle\" font-size=\"23.44\" fill=\"#767676\" >同比 +20 个百分点</text><rect x=\"31.25\" y=\"1286.62\" width=\"429.74\" height=\"100.27\" rx=\"20.84\" fill=\"#07008e\"/><text x=\"61.21\" y=\"1330.9\" text-anchor=\"start\" font-size=\"27.35\" fill=\"white\" >Shopee 电商平台</text><text x=\"429.74\" y=\"1330.9\" text-anchor=\"end\" font-size=\"27.35\" fill=\"white\" data-operating-metric=\"shopee-marketplace\">$2.3B</text><text x=\"246.12\" y=\"1364.75\" text-anchor=\"middle\" font-size=\"22.14\" fill=\"white\" >同比 +23%</text><rect x=\"471.41\" y=\"1286.62\" width=\"380.26\" height=\"100.27\" rx=\"20.84\" fill=\"#07008e\"/><text x=\"501.36\" y=\"1330.9\" text-anchor=\"start\" font-size=\"27.35\" fill=\"white\" >Garena 预订额</text><text x=\"820.42\" y=\"1330.9\" text-anchor=\"end\" font-size=\"27.35\" fill=\"white\" data-operating-metric=\"garena-bookings\">$0.5B</text><text x=\"661.54\" y=\"1364.75\" text-anchor=\"middle\" font-size=\"22.14\" fill=\"white\" >同比 (16%)，环比 +2%</text><path d=\"M 1661.67 894.64 H 1679.9 L 1703.34 855.58 L 1729.38 894.64 H 1924.72 Q 1944.25 894.64 1944.25 915.48 V 1132.95 Q 1944.25 1152.49 1924.72 1152.49 H 1661.67 Q 1642.13 1152.49 1642.13 1132.95 V 915.48 Q 1642.13 894.64 1661.67 894.64 Z\" fill=\"#f2f2f2\" stroke=\"#07008e\" stroke-width=\"2.6\"/><text x=\"1922.12\" y=\"955.85\" text-anchor=\"end\" font-size=\"29.95\" fill=\"#a21900\" data-operating-metric=\"shopee-operating-profit\">($0.3B)</text><text x=\"1922.12\" y=\"1013.15\" text-anchor=\"end\" font-size=\"29.95\" fill=\"#008f00\" data-operating-metric=\"garena-operating-profit\">$0.3B</text><text x=\"1922.12\" y=\"1069.14\" text-anchor=\"end\" font-size=\"29.95\" fill=\"#008f00\" data-operating-metric=\"seamoney-operating-profit\">$0.1B</text><text x=\"1922.12\" y=\"1123.84\" text-anchor=\"end\" font-size=\"29.95\" fill=\"#a21900\" data-operating-metric=\"other-operating-profit\">($0.1B)</text><text x=\"1745.01\" y=\"1123.84\" text-anchor=\"middle\" font-size=\"28.65\" fill=\"#767676\" >其他</text><text x=\"429.74\" y=\"1437.68\" text-anchor=\"middle\" font-size=\"39.07\" fill=\"#000000\" >来源：季度业绩</text></g>"
    },
    "preservedAnnotationText": [
      "Shopee",
      "Garena",
      "SeaMoney"
    ]
  }
});