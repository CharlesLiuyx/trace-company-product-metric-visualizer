window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "american-express-q2-fy24",
  "name": "American Express · Q2 FY24",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/american-express-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 191.43017578125,
    "titleSize": 104.1796875,
    "titleWeight": 800,
    "titleTextLength": 2487.2900390625,
    "hidePeriodStamp": true,
    "logoWidth": 255.240234375,
    "logoHeight": 255.240234375,
    "logoY": 238.31103515625,
    "logoViewBox": "0 0 196 196",
    "logoSvg": "<rect width=\"196\" height=\"196\" fill=\"#006ad5\"/><text x=\"98\" y=\"94\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">AMERICAN</text><text x=\"98\" y=\"132\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">EXPRESS</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "all_other:left"
      ]
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#006ad5",
        "label": "#006ad5"
      },
      "hub": {
        "node": "#006ad5",
        "label": "#006ad5"
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
      "source": "#85b4e4",
      "hub": "#85b4e4",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 10.41796875
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"24.74267578125\" y=\"1191.55517578125\" width=\"242.2177734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"145.8515625\" y=\"1238.43603515625\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\" font-weight=\"800\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"145.8515625\" y=\"1282.71240234375\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\">10.8%</text><text x=\"145.8515625\" y=\"1316.57080078125\" text-anchor=\"middle\" fill=\"white\" font-size=\"23.4404296875\">+0.2pp Y/Y</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1238.43603515625\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\" font-weight=\"800\">Deposits</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1282.71240234375\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\">$134B</text><text x=\"460.9951171875\" y=\"1316.57080078125\" text-anchor=\"middle\" fill=\"white\" font-size=\"23.4404296875\">+9% Y/Y</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1238.43603515625\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\" font-weight=\"800\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1282.71240234375\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\">$199B</text><text x=\"871.20263671875\" y=\"1316.57080078125\" text-anchor=\"middle\" fill=\"white\" font-size=\"23.4404296875\">+11% Y/Y</text></g><text x=\"239.61328125\" y=\"1388.1943359375\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 7.7,
      "notes": [
        "+12% Y/Y",
        "20% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$7.7B"
    },
    {
      "id": "commercial_services",
      "label": [
        "Commercial",
        "Services"
      ],
      "value": 4,
      "notes": [
        "+6% Y/Y",
        "23% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.0B"
    },
    {
      "id": "international_card_services",
      "label": [
        "International",
        "Card Services"
      ],
      "value": 2.8,
      "notes": [
        "+9% Y/Y",
        "10% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.8B"
    },
    {
      "id": "global_merchant_network",
      "label": [
        "Global Merchant",
        "& Network Service"
      ],
      "value": 1.9,
      "notes": [
        "+1% Y/Y",
        "82% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.9B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 16.4,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$16.4B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 16.3,
      "notes": [
        "+8% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$16.3B"
    },
    {
      "id": "all_other",
      "label": "All Other",
      "value": 0.048,
      "type": "cost",
      "col": 2,
      "order": 1,
      "color": "#e08585",
      "labelColor": "#941100",
      "valueText": "($48M)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 3.8,
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$3.8B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 11.3,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($11.3B)"
    },
    {
      "id": "provision_for_credit_losses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 1.3,
      "type": "cost",
      "col": 3,
      "order": 2,
      "valueText": "($1.3B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 3,
      "notes": [
        "+39% Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$3.0B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.8,
      "type": "cost",
      "col": 4,
      "order": 1,
      "valueText": "($0.8B)"
    },
    {
      "id": "card_members_rewards",
      "label": [
        "Card members",
        "rewards"
      ],
      "value": 4.2,
      "type": "cost",
      "col": 4,
      "order": 2,
      "valueText": "($4.2B)"
    },
    {
      "id": "business_development",
      "label": [
        "Business",
        "development"
      ],
      "value": 1.4,
      "type": "cost",
      "col": 4,
      "order": 3,
      "valueText": "($1.4B)"
    },
    {
      "id": "card_member_services",
      "label": [
        "Card Member",
        "services"
      ],
      "value": 1.2,
      "type": "cost",
      "col": 4,
      "order": 4,
      "valueText": "($1.2B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 1.5,
      "type": "cost",
      "col": 4,
      "order": 5,
      "valueText": "($1.5B)"
    },
    {
      "id": "sales_employee_benefits",
      "label": [
        "Sales & employee",
        "benefits"
      ],
      "value": 1.9,
      "type": "cost",
      "col": 4,
      "order": 6,
      "valueText": "($1.9B)"
    },
    {
      "id": "other_general_operating",
      "label": [
        "Other general",
        "operating"
      ],
      "value": 1,
      "type": "cost",
      "col": 4,
      "order": 7,
      "valueText": "($1.0B)"
    }
  ],
  "links": [
    {
      "source": "us_consumer_services",
      "target": "amex_hub",
      "value": 7.7,
      "targetWidth": 160.17626953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 160.17626953125,
      "y0": 455.135009765625,
      "y1": 624.427001953125
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 4,
      "targetWidth": 82.04150390625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 82.04150390625,
      "y0": 705.166259765625,
      "y1": 745.535888671875
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 2.8,
      "targetWidth": 57.298828125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 57.298828125,
      "y0": 920.68798828125,
      "y1": 815.2060546875
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.9,
      "targetWidth": 39.0673828125,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 39.0673828125,
      "y0": 1121.23388671875,
      "y1": 863.38916015625
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 16.3,
      "sourceWidth": 337.28173828125,
      "targetWidth": 337.28173828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 712.979736328125,
      "y1": 789.812255859375
    },
    {
      "source": "amex_hub",
      "target": "all_other",
      "value": 0.048,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 882.271728515625,
      "y1": 1090.631103515625
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.8,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 660.23876953125,
      "y1": 515.689453125
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 11.3,
      "sourceWidth": 233.10205078125,
      "targetWidth": 233.10205078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 815.857177734375,
      "y1": 947.384033203125
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.3,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 945.4306640625,
      "y1": 1251.45849609375
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3,
      "sourceWidth": 62.5078125,
      "targetWidth": 62.5078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 507.8759765625,
      "y1": 306.02783203125
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.8,
      "sourceWidth": 15.626953125,
      "targetWidth": 16.92919921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 546.943359375,
      "y1": 455.135009765625
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 4.2,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 874.458251953125,
      "y1": 625.729248046875
    },
    {
      "source": "operating_expenses",
      "target": "business_development",
      "value": 1.4,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 932.408203125,
      "y1": 786.556640625
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 1.2,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 958.453125,
      "y1": 912.87451171875
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.5,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 985.80029296875,
      "y1": 1052.21484375
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 1.9,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1021.612060546875,
      "y1": 1194.810791015625
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 1,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1052.865966796875,
      "y1": 1343.266845703125
    }
  ],
  "layout": {
    "scale": 20.705712890625,
    "nodes": {
      "us_consumer_services": {
        "x": 407.60302734375,
        "y": 375.046875,
        "width": 72.92578125,
        "height": 160.17626953125
      },
      "commercial_services": {
        "x": 407.60302734375,
        "y": 664.1455078125,
        "width": 72.92578125,
        "height": 82.04150390625
      },
      "international_card_services": {
        "x": 407.60302734375,
        "y": 892.03857421875,
        "width": 72.92578125,
        "height": 57.298828125
      },
      "global_merchant_network": {
        "x": 407.60302734375,
        "y": 1101.7001953125,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "amex_hub": {
        "x": 875.109375,
        "y": 544.3388671875,
        "width": 72.92578125,
        "height": 338.583984375
      },
      "revenue": {
        "x": 1342.61572265625,
        "y": 621.17138671875,
        "width": 72.92578125,
        "height": 337.28173828125
      },
      "all_other": {
        "x": 1342.61572265625,
        "y": 1089.97998046875,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "pretax_income": {
        "x": 1811.42431640625,
        "y": 476.6220703125,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "operating_expenses": {
        "x": 1810.1220703125,
        "y": 830.8330078125,
        "width": 72.92578125,
        "height": 233.10205078125
      },
      "provision_for_credit_losses": {
        "x": 1811.42431640625,
        "y": 1238.43603515625,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "net_income": {
        "x": 2276.326171875,
        "y": 274.77392578125,
        "width": 72.92578125,
        "height": 62.5078125
      },
      "tax": {
        "x": 2276.326171875,
        "y": 446.67041015625,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "card_members_rewards": {
        "x": 2276.326171875,
        "y": 582.10400390625,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "business_development": {
        "x": 2276.326171875,
        "y": 772.23193359375,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "card_member_services": {
        "x": 2276.326171875,
        "y": 901.154296875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "marketing": {
        "x": 2276.326171875,
        "y": 1036.587890625,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "sales_employee_benefits": {
        "x": 2276.326171875,
        "y": 1174.6259765625,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "other_general_operating": {
        "x": 2276.326171875,
        "y": 1332.19775390625,
        "width": 72.92578125,
        "height": 22.13818359375
      }
    },
    "labels": {
      "amex_hub": {
        "blocks": []
      },
      "us_consumer_services": {
        "blocks": [
          {
            "x": 446.67041015625,
            "top": 281.28515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 376.34912109375,
            "anchor": "end",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "US Consumer",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "20% pretax margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "commercial_services": {
        "blocks": [
          {
            "x": 446.67041015625,
            "top": 567.779296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 627.6826171875,
            "anchor": "end",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "23% pretax margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "international_card_services": {
        "blocks": [
          {
            "x": 446.67041015625,
            "top": 793.06787109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 837.34423828125,
            "anchor": "end",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "International",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Card Services",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "10% pretax margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "global_merchant_network": {
        "blocks": [
          {
            "x": 446.67041015625,
            "top": 1001.42724609375,
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
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 1023.5654296875,
            "anchor": "end",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Global Merchant",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Network Service",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "82% pretax margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1377.7763671875,
            "top": 431.04345703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "(net of interest expenses)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "all_other": {
        "blocks": [
          {
            "x": 1377.7763671875,
            "top": 1103.00244140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "All Other",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "(noninterest loss)",
                "size": 31.25390625,
                "weight": 800
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
      "pretax_income": {
        "blocks": [
          {
            "x": 1847.88720703125,
            "top": 365.93115234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.0673828125,
                "weight": 800
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1847.88720703125,
            "top": 1073.05078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Noninterest",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800
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
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1847.88720703125,
            "top": 1274.89892578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Provision for",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "credit losses",
                "size": 39.0673828125,
                "weight": 800
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
      "net_income": {
        "blocks": [
          {
            "x": 2483.38330078125,
            "top": 242.2177734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net income",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+39% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2483.38330078125,
            "top": 418.02099609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
      "card_members_rewards": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 584.70849609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Card members",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "rewards ($4.2B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "business_development": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 720.14208984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Business",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "($1.4B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "card_member_services": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 869.900390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Card Member",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "services ($1.2B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 1026.169921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Marketing ($1.5B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "sales_employee_benefits": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 1138.1630859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales & employee",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "benefits ($1.9B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_general_operating": {
        "blocks": [
          {
            "x": 2504.21923828125,
            "top": 1293.13037109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other general",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "operating ($1.0B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "美国运通 · 2024 财年第二季度",
      "meta": {
        "title": "美国运通 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "",
        "titleTextLength": 1700
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ],
          "notes": [
            "同比 +12%",
            "税前利润率 20%"
          ]
        },
        "commercial_services": {
          "label": [
            "商务",
            "服务"
          ],
          "notes": [
            "同比 +6%",
            "税前利润率 23%"
          ]
        },
        "international_card_services": {
          "label": [
            "国际",
            "卡服务"
          ],
          "notes": [
            "同比 +9%",
            "税前利润率 10%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ],
          "notes": [
            "同比 +1%",
            "税前利润率 82%"
          ]
        },
        "amex_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
          ]
        },
        "all_other": {
          "label": "所有其他",
          "notes": []
        },
        "pretax_income": {
          "label": "税前利润",
          "notes": []
        },
        "operating_expenses": {
          "label": [
            "非利息",
            "费用"
          ],
          "notes": []
        },
        "provision_for_credit_losses": {
          "label": [
            "信用损失",
            "拨备"
          ],
          "notes": []
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +39%"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "card_members_rewards": {
          "label": [
            "持卡人",
            "奖励"
          ],
          "notes": []
        },
        "business_development": {
          "label": [
            "业务",
            "拓展"
          ],
          "notes": []
        },
        "card_member_services": {
          "label": [
            "持卡人",
            "服务"
          ],
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": []
        },
        "sales_employee_benefits": {
          "label": [
            "销售与员工",
            "福利"
          ],
          "notes": []
        },
        "other_general_operating": {
          "label": [
            "其他一般",
            "运营"
          ],
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "amex_hub": {
            "blocks": []
          },
          "us_consumer_services": {
            "blocks": [
              {
                "x": 446.67041015625,
                "top": 281.28515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 376.34912109375,
                "anchor": "end",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "美国消费者",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "税前利润率 20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "commercial_services": {
            "blocks": [
              {
                "x": 446.67041015625,
                "top": 567.779296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 627.6826171875,
                "anchor": "end",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "商务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "税前利润率 23%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "international_card_services": {
            "blocks": [
              {
                "x": 446.67041015625,
                "top": 793.06787109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 837.34423828125,
                "anchor": "end",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "国际卡",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "税前利润率 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "global_merchant_network": {
            "blocks": [
              {
                "x": 446.67041015625,
                "top": 1001.42724609375,
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
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 1023.5654296875,
                "anchor": "end",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "全球商户",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "与网络服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "税前利润率 82%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1377.7763671875,
                "top": 431.04345703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "（扣除利息支出后）",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 1377.7763671875,
                "top": 1103.00244140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "所有其他",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "（非利息亏损）",
                    "size": 39.0673828125,
                    "weight": 800
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
          "pretax_income": {
            "blocks": [
              {
                "x": 1847.88720703125,
                "top": 365.93115234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.0673828125,
                    "weight": 800
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1847.88720703125,
                "top": 1073.05078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800
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
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1847.88720703125,
                "top": 1274.89892578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "拨备",
                    "size": 39.0673828125,
                    "weight": 800
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
          "net_income": {
            "blocks": [
              {
                "x": 2483.38330078125,
                "top": 242.2177734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +39%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2483.38330078125,
                "top": 418.02099609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
          "card_members_rewards": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 584.70849609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "持卡人奖励",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "($4.2B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "business_development": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 720.14208984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "业务拓展",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "($1.4B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "card_member_services": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 869.900390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "持卡人服务",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "($1.2B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 1026.169921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营销 ($1.5B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "sales_employee_benefits": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 1138.1630859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与员工福利",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "($1.9B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_general_operating": {
            "blocks": [
              {
                "x": 2504.21923828125,
                "top": 1293.13037109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他一般运营",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "($1.0B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"24.74267578125\" y=\"1191.55517578125\" width=\"242.2177734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"145.8515625\" y=\"1238.43603515625\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\" font-weight=\"800\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"145.8515625\" y=\"1282.71240234375\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\">10.8%</text><text x=\"145.8515625\" y=\"1316.57080078125\" text-anchor=\"middle\" fill=\"white\" font-size=\"23.4404296875\">同比 +0.2pp</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1238.43603515625\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\" font-weight=\"800\">存款</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1282.71240234375\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\">$134B</text><text x=\"460.9951171875\" y=\"1316.57080078125\" text-anchor=\"middle\" fill=\"white\" font-size=\"23.4404296875\">同比 +9%</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1238.43603515625\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\" font-weight=\"800\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1282.71240234375\" text-anchor=\"middle\" fill=\"white\" font-size=\"27.34716796875\">$199B</text><text x=\"871.20263671875\" y=\"1316.57080078125\" text-anchor=\"middle\" fill=\"white\" font-size=\"23.4404296875\">同比 +11%</text></g><text x=\"239.61328125\" y=\"1388.1943359375\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "10.8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.8%"
    },
    {
      "id": "deposits",
      "value": "134",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$134B"
    },
    {
      "id": "loans_receivables",
      "value": "199",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$199B"
    }
  ]
});
