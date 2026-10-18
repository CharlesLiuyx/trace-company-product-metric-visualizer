window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "american-express-q2-fy25",
  "name": "American Express · Q2 FY25",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/american-express-q2-fy25.png",
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
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"27.34716796875\" y=\"1194.15966796875\" width=\"173.19873046875\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"113.946533203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"113.946533203125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$149B</text><text x=\"113.946533203125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+12% Y/Y</text></g><g><rect x=\"208.359375\" y=\"1194.15966796875\" width=\"404.99853515625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"410.858642578125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"410.858642578125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$212B</text><text x=\"410.858642578125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+7% Y/Y</text></g><g><rect x=\"619.869140625\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"740.326904296875\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"740.326904296875\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.6%</text><text x=\"740.326904296875\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">(0.2pp) Y/Y</text></g><text x=\"546.943359375\" y=\"1384.28759765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 8.6,
      "notes": [
        "+11% Y/Y",
        "20% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$8.6B"
    },
    {
      "id": "commercial_services",
      "label": [
        "Commercial",
        "Services"
      ],
      "value": 4.2,
      "notes": [
        "+7% Y/Y",
        "21% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.2B"
    },
    {
      "id": "international_card_services",
      "label": [
        "International",
        "Card Services"
      ],
      "value": 3.2,
      "notes": [
        "+15% Y/Y",
        "14% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.2B"
    },
    {
      "id": "global_merchant_network",
      "label": [
        "Global Merchant",
        "& Network Service"
      ],
      "value": 1.9,
      "notes": [
        "+3% Y/Y",
        "55% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.9B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 18,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$18.0B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 17.9,
      "notes": [
        "+9% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$17.9B"
    },
    {
      "id": "all_other",
      "label": "All Other",
      "value": 0.1,
      "type": "cost",
      "col": 2,
      "order": 1,
      "color": "#e08585",
      "labelColor": "#941100",
      "valueText": "($0.1B)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 3.6,
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$3.6B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 12.9,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($12.9B)"
    },
    {
      "id": "provision_for_credit_losses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 1.4,
      "type": "cost",
      "col": 3,
      "order": 2,
      "valueText": "($1.4B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 2.9,
      "notes": [
        "(4%) Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$2.9B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.7,
      "type": "cost",
      "col": 4,
      "order": 1,
      "valueText": "($0.7B)"
    },
    {
      "id": "card_members_rewards",
      "label": [
        "Card members",
        "rewards"
      ],
      "value": 4.6,
      "type": "cost",
      "col": 4,
      "order": 2,
      "valueText": "($4.6B)"
    },
    {
      "id": "business_development",
      "label": [
        "Business",
        "development"
      ],
      "value": 1.6,
      "type": "cost",
      "col": 4,
      "order": 3,
      "valueText": "($1.6B)"
    },
    {
      "id": "card_member_services",
      "label": [
        "Card Member",
        "services"
      ],
      "value": 1.3,
      "type": "cost",
      "col": 4,
      "order": 4,
      "valueText": "($1.3B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 1.6,
      "type": "cost",
      "col": 4,
      "order": 5,
      "valueText": "($1.6B)"
    },
    {
      "id": "sales_employee_benefits",
      "label": [
        "Sales & employee",
        "benefits"
      ],
      "value": 2.3,
      "type": "cost",
      "col": 4,
      "order": 6,
      "valueText": "($2.3B)"
    },
    {
      "id": "other_general_operating",
      "label": [
        "Other general",
        "operating"
      ],
      "value": 1.7,
      "type": "cost",
      "col": 4,
      "order": 7,
      "valueText": "($1.7B)"
    }
  ],
  "links": [
    {
      "source": "us_consumer_services",
      "target": "amex_hub",
      "value": 8.6,
      "targetWidth": 140.642578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 140.642578125,
      "y0": 488.34228515625,
      "y1": 622.4736328125
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 4.2,
      "targetWidth": 70.3212890625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 70.3212890625,
      "y0": 735.76904296875,
      "y1": 727.95556640625
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 3.2,
      "targetWidth": 52.08984375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 53.39208984375,
      "y0": 923.943603515625,
      "y1": 789.1611328125
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.9,
      "targetWidth": 31.25390625,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 32.55615234375,
      "y0": 1093.235595703125,
      "y1": 830.8330078125
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 17.9,
      "sourceWidth": 293.00537109375,
      "targetWidth": 293.00537109375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 698.655029296875,
      "y1": 819.763916015625
    },
    {
      "source": "amex_hub",
      "target": "all_other",
      "value": 0.1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 845.808837890625,
      "y1": 1115.373779296875
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.6,
      "sourceWidth": 58.60107421875,
      "targetWidth": 58.60107421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 702.561767578125,
      "y1": 554.105712890625
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 12.9,
      "sourceWidth": 210.9638671875,
      "targetWidth": 210.9638671875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 837.34423828125,
      "y1": 941.52392578125
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.4,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 954.54638671875,
      "y1": 1241.04052734375
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.9,
      "sourceWidth": 48.18310546875,
      "targetWidth": 46.880859375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 548.896728515625,
      "y1": 407.60302734375
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 578.197265625,
      "y1": 516.99169921875
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 4.6,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 873.80712890625,
      "y1": 674.5634765625
    },
    {
      "source": "operating_expenses",
      "target": "business_development",
      "value": 1.6,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 924.5947265625,
      "y1": 820.4150390625
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 1.3,
      "sourceWidth": 22.13818359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 948.686279296875,
      "y1": 948.03515625
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.6,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 972.77783203125,
      "y1": 1073.05078125
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 2.3,
      "sourceWidth": 35.16064453125,
      "targetWidth": 36.462890625,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1003.380615234375,
      "y1": 1203.275390625
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 1.7,
      "sourceWidth": 26.044921875,
      "targetWidth": 27.34716796875,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1033.9833984375,
      "y1": 1332.848876953125
    }
  ],
  "layout": {
    "scale": 19.663916015625,
    "nodes": {
      "us_consumer_services": {
        "x": 407.60302734375,
        "y": 418.02099609375,
        "width": 72.92578125,
        "height": 140.642578125
      },
      "commercial_services": {
        "x": 407.60302734375,
        "y": 700.6083984375,
        "width": 72.92578125,
        "height": 70.3212890625
      },
      "international_card_services": {
        "x": 407.60302734375,
        "y": 897.24755859375,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "global_merchant_network": {
        "x": 407.60302734375,
        "y": 1076.95751953125,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "amex_hub": {
        "x": 875.109375,
        "y": 552.15234375,
        "width": 72.92578125,
        "height": 294.3076171875
      },
      "revenue": {
        "x": 1342.61572265625,
        "y": 673.26123046875,
        "width": 72.92578125,
        "height": 293.00537109375
      },
      "all_other": {
        "x": 1342.61572265625,
        "y": 1114.72265625,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "pretax_income": {
        "x": 1808.81982421875,
        "y": 524.80517578125,
        "width": 72.92578125,
        "height": 58.60107421875
      },
      "operating_expenses": {
        "x": 1808.81982421875,
        "y": 836.0419921875,
        "width": 72.92578125,
        "height": 210.9638671875
      },
      "provision_for_credit_losses": {
        "x": 1808.81982421875,
        "y": 1229.3203125,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "net_income": {
        "x": 2276.326171875,
        "y": 384.16259765625,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "tax": {
        "x": 2276.326171875,
        "y": 511.78271484375,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "card_members_rewards": {
        "x": 2276.326171875,
        "y": 636.79833984375,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "business_development": {
        "x": 2276.326171875,
        "y": 807.392578125,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "card_member_services": {
        "x": 2276.326171875,
        "y": 937.6171875,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "marketing": {
        "x": 2276.326171875,
        "y": 1060.0283203125,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "sales_employee_benefits": {
        "x": 2276.326171875,
        "y": 1185.0439453125,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "other_general_operating": {
        "x": 2276.326171875,
        "y": 1319.17529296875,
        "width": 72.92578125,
        "height": 27.34716796875
      }
    },
    "labels": {
      "amex_hub": {
        "blocks": []
      },
      "us_consumer_services": {
        "blocks": [
          {
            "x": 444.06591796875,
            "top": 328.166015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 390.673828125,
            "top": 427.13671875,
            "anchor": "end",
            "lineGap": 13.0224609375,
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
            "x": 444.06591796875,
            "top": 612.0556640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 390.673828125,
            "top": 678.47021484375,
            "anchor": "end",
            "lineGap": 13.0224609375,
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
                "text": "21% pretax margin",
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
            "x": 444.06591796875,
            "top": 808.69482421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 390.673828125,
            "top": 860.78466796875,
            "anchor": "end",
            "lineGap": 13.0224609375,
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
                "text": "14% pretax margin",
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
            "x": 444.06591796875,
            "top": 985.70703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 390.673828125,
            "top": 1043.09912109375,
            "anchor": "end",
            "lineGap": 13.0224609375,
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
                "text": "55% pretax margin",
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
            "x": 1379.07861328125,
            "top": 490.94677734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
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
                "text": "+9% Y/Y",
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
            "x": 1379.07861328125,
            "top": 1140.767578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "All Other",
                "size": 37.76513671875,
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
            "x": 1845.28271484375,
            "top": 420.62548828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Pretax income",
                "size": 37.76513671875,
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
            "x": 1845.28271484375,
            "top": 1065.2373046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Noninterest",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
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
            "x": 1845.28271484375,
            "top": 1274.89892578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Provision for",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "credit losses",
                "size": 37.76513671875,
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
            "x": 2479.4765625,
            "top": 334.67724609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net income",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
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
            "x": 2479.4765625,
            "top": 487.0400390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 37.76513671875,
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
      "card_members_rewards": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 640.705078125,
            "anchor": "middle",
            "lineGap": 5.208984375,
            "lines": [
              {
                "text": "Card members",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "rewards",
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
      "business_development": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 769.62744140625,
            "anchor": "middle",
            "lineGap": 5.208984375,
            "lines": [
              {
                "text": "Business",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development",
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
      "card_member_services": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 918.08349609375,
            "anchor": "middle",
            "lineGap": 5.208984375,
            "lines": [
              {
                "text": "Card Member",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "services",
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
            "x": 2500.3125,
            "top": 1050.91259765625,
            "anchor": "middle",
            "lineGap": 5.208984375,
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
      "sales_employee_benefits": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 1168.11474609375,
            "anchor": "middle",
            "lineGap": 5.208984375,
            "lines": [
              {
                "text": "Sales & employee",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "benefits",
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
      "other_general_operating": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 1306.15283203125,
            "anchor": "middle",
            "lineGap": 5.208984375,
            "lines": [
              {
                "text": "Other general",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "operating",
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
  "i18n": {
    "zh": {
      "name": "American Express · 2025 财年第二季度",
      "meta": {
        "title": "American Express 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": ""
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ],
          "notes": [
            "同比 +11%",
            "税前利润率 20%"
          ]
        },
        "commercial_services": {
          "label": [
            "商务",
            "服务"
          ],
          "notes": [
            "同比 +7%",
            "税前利润率 21%"
          ]
        },
        "international_card_services": {
          "label": [
            "国际",
            "卡服务"
          ],
          "notes": [
            "同比 +15%",
            "税前利润率 14%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ],
          "notes": [
            "同比 +3%",
            "税前利润率 55%"
          ]
        },
        "amex_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
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
            "同比 (4%)"
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
                "x": 444.06591796875,
                "top": 328.166015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 390.673828125,
                "top": 427.13671875,
                "anchor": "end",
                "lineGap": 13.0224609375,
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
                "x": 444.06591796875,
                "top": 612.0556640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 390.673828125,
                "top": 678.47021484375,
                "anchor": "end",
                "lineGap": 13.0224609375,
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
                    "text": "税前利润率 21%",
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
                "x": 444.06591796875,
                "top": 808.69482421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 390.673828125,
                "top": 860.78466796875,
                "anchor": "end",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "卡服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "税前利润率 14%",
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
                "x": 444.06591796875,
                "top": 985.70703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 390.673828125,
                "top": 1043.09912109375,
                "anchor": "end",
                "lineGap": 13.0224609375,
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
                    "text": "税前利润率 55%",
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
                "x": 1379.07861328125,
                "top": 490.94677734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "（扣除利息支出后）",
                    "size": 31.25390625,
                    "weight": 800
                  },
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
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 1379.07861328125,
                "top": 1140.767578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "所有其他",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "（非利息亏损）",
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
                "x": 1845.28271484375,
                "top": 420.62548828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 37.76513671875,
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
                "x": 1845.28271484375,
                "top": 1065.2373046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
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
                "x": 1845.28271484375,
                "top": 1274.89892578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "拨备",
                    "size": 37.76513671875,
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
                "x": 2479.4765625,
                "top": 334.67724609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
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
                "x": 2479.4765625,
                "top": 487.0400390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 37.76513671875,
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
          "card_members_rewards": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 640.705078125,
                "anchor": "middle",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "持卡人",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "奖励",
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
          "business_development": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 769.62744140625,
                "anchor": "middle",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "业务",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "拓展",
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
          "card_member_services": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 918.08349609375,
                "anchor": "middle",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "持卡人",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "服务",
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
                "x": 2500.3125,
                "top": 1050.91259765625,
                "anchor": "middle",
                "lineGap": 5.208984375,
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
          "sales_employee_benefits": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 1168.11474609375,
                "anchor": "middle",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "销售与员工",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "福利",
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
          "other_general_operating": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 1306.15283203125,
                "anchor": "middle",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "其他一般",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "运营",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"27.34716796875\" y=\"1194.15966796875\" width=\"173.19873046875\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"113.946533203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"113.946533203125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$149B</text><text x=\"113.946533203125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +12%</text></g><g><rect x=\"208.359375\" y=\"1194.15966796875\" width=\"404.99853515625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"410.858642578125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"410.858642578125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$212B</text><text x=\"410.858642578125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +7%</text></g><g><rect x=\"619.869140625\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"740.326904296875\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"740.326904296875\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.6%</text><text x=\"740.326904296875\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 (0.2pp)</text></g><text x=\"546.943359375\" y=\"1384.28759765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "deposits",
      "value": "149",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$149B"
    },
    {
      "id": "loans_receivables",
      "value": "212",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$212B"
    },
    {
      "id": "cet1",
      "value": "10.6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.6%"
    }
  ]
});
