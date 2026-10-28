(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "docusign-q2-fy26",
  "name": "DocuSign · Q2 FY26",
  "company": "DocuSign",
  "meta": {
    "company": "DocuSign",
    "title": "DocuSign Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/docusign-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333,
    "titleY": 199.2188,
    "titleSize": 119.7917,
    "titleWeight": 800,
    "periodX": 194.0104,
    "periodY": 338.5417,
    "periodNoteY": 380.2083,
    "logoX": 401.0417,
    "logoY": 263.0208,
    "logoWidth": 924.4792,
    "logoHeight": 152.3438,
    "logoViewBox": "0 0 923 152",
    "logoSvg": "\n        <path d=\"M34 1 H77 A43 43 0 0 1 77 87 H34 Z\" fill=\"#ff5252\"/>\n        <rect x=\"1\" y=\"35\" width=\"85\" height=\"86\" rx=\"16\" fill=\"#4c00ff\"/>\n        <path d=\"M35 35 H68 L117 53 V87 H35 Z\" fill=\"#000000\"/>\n        <text x=\"149\" y=\"120\" font-family=\"Montserrat,Arial,sans-serif\"\n          font-size=\"145\" font-weight=\"700\" textLength=\"599\" lengthAdjust=\"spacingAndGlyphs\"\n          fill=\"#000000\">docusign</text>\n        <text x=\"728\" y=\"30\" font-family=\"Montserrat,Arial,sans-serif\"\n          font-size=\"20\" font-weight=\"600\" fill=\"#000000\">™</text>\n      "
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#269f26",
        "label": "#00945b"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51a00"
      }
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 22,
      "lineGap": 9.1146
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Subscription",
      "value": 784,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Professional",
        "Services"
      ],
      "value": 16,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "(13%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 801,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 635,
      "color": "#269f26",
      "labelColor": "#00945b",
      "notes": [
        "79% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 165,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 5,
      "type": "profit",
      "label": "Operating profit",
      "value": 65,
      "color": "#269f26",
      "labelColor": "#00945b",
      "notes": [
        "8% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 570,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": []
    },
    {
      "id": "interest",
      "col": 4,
      "order": 7,
      "type": "profit",
      "label": "Interest",
      "value": 11,
      "color": "#269f26",
      "labelColor": "#00945b",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 8,
      "type": "profit",
      "label": "Net profit",
      "value": 63,
      "color": "#269f26",
      "labelColor": "#00945b",
      "notes": [
        "8% margin",
        "(113pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "Tax",
      "value": 13,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": []
    },
    {
      "id": "sm",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "S&M",
      "value": 305,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": [
        "38% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "R&D",
      "value": 170,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": [
        "21% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": "G&A",
      "value": 95,
      "color": "#cc0000",
      "labelColor": "#a51a00",
      "notes": [
        "12% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 784,
      "sourceWidth": 277.37841796875,
      "targetWidth": 277.37841796875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 16,
      "sourceWidth": 5.208984375,
      "targetWidth": 6.51123046875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 635,
      "sourceWidth": 225.28857421875,
      "targetWidth": 225.28857421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 165,
      "sourceWidth": 58.60107421875,
      "targetWidth": 59.9033203125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 65,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 570,
      "sourceWidth": 201.84814453125,
      "targetWidth": 201.84814453125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 52,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 13,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 11,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cc99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 305,
      "sourceWidth": 108.08642578125,
      "targetWidth": 108.08642578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 170,
      "sourceWidth": 59.9033203125,
      "targetWidth": 59.9033203125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 95,
      "sourceWidth": 33.8583984375,
      "targetWidth": 32.55615234375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "layout": {
    "nodes": {
      "subscription": {
        "x": 360.72216796875,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 277.37841796875
      },
      "professional_services": {
        "x": 360.72216796875,
        "y": 1032.68115234375,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "revenue": {
        "x": 828.228515625,
        "y": 645.9140625,
        "width": 72.92578125,
        "height": 283.8896484375
      },
      "gross_profit": {
        "x": 1295.73486328125,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 225.28857421875
      },
      "cost_of_revenue": {
        "x": 1295.73486328125,
        "y": 967.56884765625,
        "width": 72.92578125,
        "height": 59.9033203125
      },
      "operating_profit": {
        "x": 1763.2412109375,
        "y": 436.25244140625,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "operating_expenses": {
        "x": 1763.2412109375,
        "y": 675.86572265625,
        "width": 72.92578125,
        "height": 201.84814453125
      },
      "interest": {
        "x": 2114.84765625,
        "y": 389.37158203125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "net_profit": {
        "x": 2229.4453125,
        "y": 326.86376953125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "tax": {
        "x": 2229.4453125,
        "y": 553.45458984375,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "sm": {
        "x": 2229.4453125,
        "y": 746.18701171875,
        "width": 72.92578125,
        "height": 108.08642578125
      },
      "rnd": {
        "x": 2229.4453125,
        "y": 968.87109375,
        "width": 72.92578125,
        "height": 59.9033203125
      },
      "ga": {
        "x": 2229.4453125,
        "y": 1139.46533203125,
        "width": 72.92578125,
        "height": 32.55615234375
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 856.8779296875,
            "top": 497.4580078125,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 28.6458,
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
            "x": 1330.8955078125,
            "top": 351.6064453125,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "79% margin",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28.6458,
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
            "x": 1330.8955078125,
            "top": 1041.796875,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.8542,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 33.8542,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 33.8542,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1794.4951171875,
            "top": 247.4267578125,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "8% margin",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28.6458,
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
            "x": 1794.4951171875,
            "top": 890.736328125,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 700
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
      "interest": {
        "blocks": [
          {
            "x": 2151.310546875,
            "top": 406.30078125,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Interest",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2463.849609375,
            "top": 281.28515625,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "8% margin",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(113pp) Y/Y",
                "size": 28.6458,
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
            "x": 2463.849609375,
            "top": 520.8984375,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Tax",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2463.849609375,
            "top": 751.39599609375,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "S&M",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              },
              {
                "text": "38% of revenue",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.6458,
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
            "x": 2463.849609375,
            "top": 942.826171875,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "R&D",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              },
              {
                "text": "21% of revenue",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28.6458,
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
            "x": 2463.849609375,
            "top": 1123.83837890625,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "G&A",
                "size": 29.9479,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.9479,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 399.7396,
            "top": 441.46142578125,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 196.6146,
            "top": 655.02978515625,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 399.7396,
            "top": 935.0126953125,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(13%) Y/Y",
                "size": 28.6458,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 196.6146,
            "top": 990.30029296875,
            "anchor": "middle",
            "lineGap": 3.9062,
            "lines": [
              {
                "text": "Professional",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "Services",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "billings",
      "label": "Billings",
      "value": "818",
      "unit": "M",
      "currency": "USD",
      "literal": "$818M",
      "notes": [
        "+13% Y/Y"
      ],
      "quote": "Billings $818M +13% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          32,
          1163,
          209,
          148
        ]
      },
      "comparison": "eq",
      "basis": "unspecified"
    },
    {
      "id": "nrr",
      "label": "NRR",
      "value": "102",
      "unit": "%",
      "currency": null,
      "literal": "102%",
      "notes": [
        "+1pp Q/Q"
      ],
      "quote": "NRR 102% +1pp Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          255,
          1163,
          210,
          148
        ]
      },
      "comparison": "eq",
      "basis": "unspecified"
    },
    {
      "id": "customers",
      "label": "Customers",
      "value": "1740000",
      "unit": "count",
      "currency": null,
      "literal": "1.74M",
      "notes": [
        "+9% Y/Y"
      ],
      "quote": "Customers 1.74M (+9% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          510,
          1203,
          405,
          35
        ]
      },
      "comparison": "eq",
      "basis": "unspecified"
    },
    {
      "id": "enterprise",
      "label": "Enterprise",
      "value": "271000",
      "unit": "count",
      "currency": null,
      "literal": "271K",
      "notes": [
        "+7% Y/Y"
      ],
      "quote": "Enterprise 271K (+7% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          510,
          1243,
          405,
          35
        ]
      },
      "comparison": "eq",
      "basis": "unspecified"
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"32.55615234375\" y=\"1162.90576171875\" width=\"209.66162109375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#000000\"/><rect x=\"255.240234375\" y=\"1162.90576171875\" width=\"209.66162109375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#000000\"/><rect x=\"477.92431640625\" y=\"1162.90576171875\" width=\"464.90185546875\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#000000\"/><text x=\"136.73583984375\" y=\"1214.99560546875\" font-size=\"27.34716796875\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"700\">Billings</text><text x=\"136.73583984375\" y=\"1255.365234375\" font-size=\"28.6494140625\" fill=\"#ffffff\" text-anchor=\"middle\" data-operating-metric=\"billings\">$818M</text><text x=\"136.73583984375\" y=\"1289.2236328125\" font-size=\"22.13818359375\" fill=\"#ffffff\" text-anchor=\"middle\">+13% Y/Y</text><text x=\"360.72216796875\" y=\"1214.99560546875\" font-size=\"27.34716796875\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"700\">NRR</text><text x=\"360.72216796875\" y=\"1255.365234375\" font-size=\"28.6494140625\" fill=\"#ffffff\" text-anchor=\"middle\" data-operating-metric=\"nrr\">102%</text><text x=\"360.72216796875\" y=\"1289.2236328125\" font-size=\"22.13818359375\" fill=\"#ffffff\" text-anchor=\"middle\">+1pp Q/Q</text><text x=\"683.67919921875\" y=\"1230.62255859375\" font-size=\"28.6494140625\" fill=\"#ffffff\" text-anchor=\"end\" font-weight=\"700\">Customers</text><text x=\"692.794921875\" y=\"1230.62255859375\" font-size=\"28.6494140625\" fill=\"#ffffff\" data-operating-metric=\"customers\">1.74M</text><text x=\"781.34765625\" y=\"1230.62255859375\" font-size=\"26.044921875\" fill=\"#ffffff\" >(+9% Y/Y)</text><text x=\"683.67919921875\" y=\"1269.68994140625\" font-size=\"28.6494140625\" fill=\"#ffffff\" text-anchor=\"end\" font-weight=\"700\">Enterprise</text><text x=\"692.794921875\" y=\"1269.68994140625\" font-size=\"28.6494140625\" fill=\"#ffffff\" data-operating-metric=\"enterprise\">271K</text><text x=\"768.3251953125\" y=\"1269.68994140625\" font-size=\"26.044921875\" fill=\"#ffffff\" >(+7% Y/Y)</text><text x=\"372.4423828125\" y=\"1351.7314453125\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#777777\">NRR = Net Retention Rate</text></g>",
  "i18n": {
    "zh": {
      "name": "DocuSign · 2026 财年第二季度",
      "meta": {
        "title": "DocuSign 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2025 年 7 月",
        "titleSize": 101.5625
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +9%"
          ]
        },
        "professional_services": {
          "label": [
            "专业",
            "服务"
          ],
          "notes": [
            "同比 (13%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 8%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 8%",
            "同比 (113 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "S&M（销售与市场）",
          "notes": [
            "占收入 38%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "R&D（研发）",
          "notes": [
            "占收入 21%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "G&A（管理）",
          "notes": [
            "占收入 12%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 856.8779296875,
                "top": 497.4580078125,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28.6458,
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
                "x": 1330.8955078125,
                "top": 351.6064453125,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 79%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28.6458,
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
                "x": 1330.8955078125,
                "top": 1041.796875,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.8542,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 33.8542,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 33.8542,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1794.4951171875,
                "top": 247.4267578125,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 8%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28.6458,
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
                "x": 1794.4951171875,
                "top": 890.736328125,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 700
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
          "interest": {
            "blocks": [
              {
                "x": 2151.310546875,
                "top": 406.30078125,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "利息",
                    "size": 29.9479,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2463.849609375,
                "top": 281.28515625,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 8%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (113 个百分点)",
                    "size": 28.6458,
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
                "x": 2463.849609375,
                "top": 520.8984375,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.9479,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2463.849609375,
                "top": 751.39599609375,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "S&M（销售与市场）",
                    "size": 28.6458,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  },
                  {
                    "text": "占收入 38%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.6458,
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
                "x": 2463.849609375,
                "top": 942.826171875,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "R&D（研发）",
                    "size": 28.6458,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  },
                  {
                    "text": "占收入 21%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28.6458,
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
                "x": 2463.849609375,
                "top": 1123.83837890625,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "G&A（管理）",
                    "size": 28.6458,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.9479,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 399.7396,
                "top": 441.46142578125,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 196.6146,
                "top": 655.02978515625,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 399.7396,
                "top": 935.0126953125,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (13%)",
                    "size": 28.6458,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 196.6146,
                "top": 990.30029296875,
                "anchor": "middle",
                "lineGap": 3.9062,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "服务",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"32.55615234375\" y=\"1162.90576171875\" width=\"209.66162109375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#000000\"/><rect x=\"255.240234375\" y=\"1162.90576171875\" width=\"209.66162109375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#000000\"/><rect x=\"477.92431640625\" y=\"1162.90576171875\" width=\"464.90185546875\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#000000\"/><text x=\"136.73583984375\" y=\"1214.99560546875\" font-size=\"27.34716796875\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"700\">账单金额</text><text x=\"136.73583984375\" y=\"1255.365234375\" font-size=\"28.6494140625\" fill=\"#ffffff\" text-anchor=\"middle\" data-operating-metric=\"billings\">$818M</text><text x=\"136.73583984375\" y=\"1289.2236328125\" font-size=\"22.13818359375\" fill=\"#ffffff\" text-anchor=\"middle\">同比 +13%</text><text x=\"360.72216796875\" y=\"1214.99560546875\" font-size=\"27.34716796875\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"700\">净收入留存率</text><text x=\"360.72216796875\" y=\"1255.365234375\" font-size=\"28.6494140625\" fill=\"#ffffff\" text-anchor=\"middle\" data-operating-metric=\"nrr\">102%</text><text x=\"360.72216796875\" y=\"1289.2236328125\" font-size=\"22.13818359375\" fill=\"#ffffff\" text-anchor=\"middle\">环比 +1 个百分点</text><text x=\"683.67919921875\" y=\"1230.62255859375\" font-size=\"28.6494140625\" fill=\"#ffffff\" text-anchor=\"end\" font-weight=\"700\">客户</text><text x=\"692.794921875\" y=\"1230.62255859375\" font-size=\"28.6494140625\" fill=\"#ffffff\" data-operating-metric=\"customers\">1.74M</text><text x=\"781.34765625\" y=\"1230.62255859375\" font-size=\"26.044921875\" fill=\"#ffffff\" >(同比 +9%)</text><text x=\"683.67919921875\" y=\"1269.68994140625\" font-size=\"28.6494140625\" fill=\"#ffffff\" text-anchor=\"end\" font-weight=\"700\">企业客户</text><text x=\"692.794921875\" y=\"1269.68994140625\" font-size=\"28.6494140625\" fill=\"#ffffff\" data-operating-metric=\"enterprise\">271K</text><text x=\"768.3251953125\" y=\"1269.68994140625\" font-size=\"26.044921875\" fill=\"#ffffff\" >(同比 +7%)</text><text x=\"372.4423828125\" y=\"1351.7314453125\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#777777\">NRR = 净收入留存率</text></g>"
    }
  }
});})();
