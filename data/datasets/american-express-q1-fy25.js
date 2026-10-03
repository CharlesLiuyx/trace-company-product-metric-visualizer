window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "american-express-q1-fy25",
  "name": "American Express · Q1 FY25",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/american-express-q1-fy25.png",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"27.34716796875\" y=\"1194.15966796875\" width=\"173.19873046875\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"113.946533203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"113.946533203125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$146B</text><text x=\"113.946533203125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+9% Y/Y</text></g><g><rect x=\"208.359375\" y=\"1194.15966796875\" width=\"404.99853515625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"410.858642578125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"410.858642578125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$207B</text><text x=\"410.858642578125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+7% Y/Y</text></g><g><rect x=\"619.869140625\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"740.326904296875\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"740.326904296875\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.7%</text><text x=\"740.326904296875\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+0.1pp Y/Y</text></g><text x=\"546.943359375\" y=\"1384.28759765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 8.2,
      "notes": [
        "+10% Y/Y",
        "21% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$8.2B"
    },
    {
      "id": "commercial_services",
      "label": [
        "Commercial",
        "Services"
      ],
      "value": 4,
      "notes": [
        "+7% Y/Y",
        "21% pretax margin"
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
      "value": 2.9,
      "notes": [
        "+8% Y/Y",
        "13% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.9B"
    },
    {
      "id": "global_merchant_network",
      "label": [
        "Global Merchant",
        "& Network Service"
      ],
      "value": 1.8,
      "notes": [
        "(3%) Y/Y",
        "55% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.8B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 17,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$17.0B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 17,
      "notes": [
        "+7% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$17.0B"
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
      "value": 3.3,
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$3.3B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 12.5,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($12.5B)"
    },
    {
      "id": "provision_for_credit_losses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 1.2,
      "type": "cost",
      "col": 3,
      "order": 2,
      "valueText": "($1.2B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 2.6,
      "notes": [
        "+6% Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$2.6B"
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
      "value": 4.4,
      "type": "cost",
      "col": 4,
      "order": 2,
      "valueText": "($4.4B)"
    },
    {
      "id": "business_development",
      "label": [
        "Business",
        "development"
      ],
      "value": 1.5,
      "type": "cost",
      "col": 4,
      "order": 3,
      "valueText": "($1.5B)"
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
      "value": 2.1,
      "type": "cost",
      "col": 4,
      "order": 6,
      "valueText": "($2.1B)"
    },
    {
      "id": "other_general_operating",
      "label": [
        "Other general",
        "operating"
      ],
      "value": 1.6,
      "type": "cost",
      "col": 4,
      "order": 7,
      "valueText": "($1.6B)"
    }
  ],
  "links": [
    {
      "source": "us_consumer_services",
      "target": "amex_hub",
      "value": 8.2,
      "targetWidth": 162.78076171875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 162.78076171875,
      "y0": 488.993408203125,
      "y1": 636.147216796875
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 4,
      "targetWidth": 80.7392578125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 80.7392578125,
      "y0": 734.466796875,
      "y1": 757.9072265625
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 2.9,
      "targetWidth": 58.60107421875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 58.60107421875,
      "y0": 917.432373046875,
      "y1": 827.577392578125
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.8,
      "targetWidth": 33.8583984375,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 36.462890625,
      "y0": 1088.677734375,
      "y1": 873.80712890625
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 17,
      "sourceWidth": 334.67724609375,
      "targetWidth": 334.67724609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 722.095458984375,
      "y1": 811.950439453125
    },
    {
      "source": "amex_hub",
      "target": "all_other",
      "value": 0.1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 2.6044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 890.085205078125,
      "y1": 1131.65185546875
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.3,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 677.16796875,
      "y1": 583.40625
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 12.5,
      "sourceWidth": 246.12451171875,
      "targetWidth": 246.12451171875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 832.786376953125,
      "y1": 938.268310546875
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.2,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 967.56884765625,
      "y1": 1246.24951171875
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.6,
      "sourceWidth": 50.78759765625,
      "targetWidth": 50.78759765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 576.243896484375,
      "y1": 425.183349609375
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 608.800048828125,
      "y1": 535.874267578125
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 4.4,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 858.831298828125,
      "y1": 688.237060546875
    },
    {
      "source": "operating_expenses",
      "target": "business_development",
      "value": 1.5,
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 917.432373046875,
      "y1": 828.879638671875
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 1.3,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 946.081787109375,
      "y1": 948.686279296875
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.5,
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 974.731201171875,
      "y1": 1064.586181640625
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 2.1,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1010.54296875,
      "y1": 1188.95068359375
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 1.6,
      "sourceWidth": 29.95166015625,
      "targetWidth": 32.55615234375,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1046.354736328125,
      "y1": 1313.315185546875
    }
  ],
  "layout": {
    "scale": 19.663916015625,
    "nodes": {
      "us_consumer_services": {
        "x": 407.60302734375,
        "y": 407.60302734375,
        "width": 72.92578125,
        "height": 162.78076171875
      },
      "commercial_services": {
        "x": 407.60302734375,
        "y": 694.09716796875,
        "width": 72.92578125,
        "height": 80.7392578125
      },
      "international_card_services": {
        "x": 407.60302734375,
        "y": 888.1318359375,
        "width": 72.92578125,
        "height": 58.60107421875
      },
      "global_merchant_network": {
        "x": 407.60302734375,
        "y": 1070.4462890625,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "amex_hub": {
        "x": 872.5048828125,
        "y": 554.7568359375,
        "width": 72.92578125,
        "height": 335.9794921875
      },
      "revenue": {
        "x": 1342.61572265625,
        "y": 644.61181640625,
        "width": 72.92578125,
        "height": 334.67724609375
      },
      "all_other": {
        "x": 1342.61572265625,
        "y": 1130.349609375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "pretax_income": {
        "x": 1821.84228515625,
        "y": 550.85009765625,
        "width": 72.92578125,
        "height": 65.1123046875
      },
      "operating_expenses": {
        "x": 1821.84228515625,
        "y": 815.2060546875,
        "width": 72.92578125,
        "height": 246.12451171875
      },
      "provision_for_credit_losses": {
        "x": 1829.65576171875,
        "y": 1234.529296875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "net_income": {
        "x": 2276.326171875,
        "y": 399.78955078125,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "tax": {
        "x": 2276.326171875,
        "y": 528.7119140625,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "card_members_rewards": {
        "x": 2276.326171875,
        "y": 644.61181640625,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "business_development": {
        "x": 2276.326171875,
        "y": 813.90380859375,
        "width": 72.92578125,
        "height": 29.95166015625
      },
      "card_member_services": {
        "x": 2276.326171875,
        "y": 935.0126953125,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "marketing": {
        "x": 2276.326171875,
        "y": 1049.6103515625,
        "width": 72.92578125,
        "height": 29.95166015625
      },
      "sales_employee_benefits": {
        "x": 2276.326171875,
        "y": 1168.11474609375,
        "width": 72.92578125,
        "height": 41.671875
      },
      "other_general_operating": {
        "x": 2273.7216796875,
        "y": 1297.037109375,
        "width": 72.92578125,
        "height": 32.55615234375
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
            "top": 311.23681640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
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
                "text": "21% pretax margin",
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
            "top": 599.033203125,
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
            "top": 666.75,
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
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 390.673828125,
            "top": 847.76220703125,
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
                "text": "13% pretax margin",
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
            "top": 975.38232421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 390.673828125,
            "top": 1036.587890625,
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
            "top": 455.7861328125,
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
                "text": "+7% Y/Y",
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
            "top": 1147.27880859375,
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
            "x": 1858.30517578125,
            "top": 438.85693359375,
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
            "x": 1858.30517578125,
            "top": 1076.95751953125,
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
            "x": 1866.11865234375,
            "top": 1268.3876953125,
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
            "top": 341.1884765625,
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
                "text": "+6% Y/Y",
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
            "top": 497.4580078125,
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
            "top": 649.82080078125,
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
            "top": 768.3251953125,
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
            "top": 910.27001953125,
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
            "top": 1040.49462890625,
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
            "top": 1148.5810546875,
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
            "top": 1278.8056640625,
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
      "name": "American Express · 2025 财年第一季度",
      "meta": {
        "title": "American Express 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": ""
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ],
          "notes": [
            "同比 +10%",
            "税前利润率 21%"
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
            "同比 +8%",
            "税前利润率 13%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ],
          "notes": [
            "同比 (3%)",
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
            "同比 +7%"
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
            "同比 +6%"
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
                "top": 311.23681640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
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
                    "text": "税前利润率 21%",
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
                "top": 599.033203125,
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
                "top": 666.75,
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
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 390.673828125,
                "top": 847.76220703125,
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
                    "text": "税前利润率 13%",
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
                "top": 975.38232421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 390.673828125,
                "top": 1036.587890625,
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
                "top": 455.7861328125,
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
                    "text": "同比 +7%",
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
                "top": 1147.27880859375,
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
                "x": 1858.30517578125,
                "top": 438.85693359375,
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
                "x": 1858.30517578125,
                "top": 1076.95751953125,
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
                "x": 1866.11865234375,
                "top": 1268.3876953125,
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
                "top": 341.1884765625,
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
                    "text": "同比 +6%",
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
                "top": 497.4580078125,
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
                "top": 649.82080078125,
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
                "top": 768.3251953125,
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
                "top": 910.27001953125,
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
                "top": 1040.49462890625,
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
                "top": 1148.5810546875,
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
                "top": 1278.8056640625,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"27.34716796875\" y=\"1194.15966796875\" width=\"173.19873046875\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"113.946533203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"113.946533203125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$146B</text><text x=\"113.946533203125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +9%</text></g><g><rect x=\"208.359375\" y=\"1194.15966796875\" width=\"404.99853515625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"410.858642578125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"410.858642578125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$207B</text><text x=\"410.858642578125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +7%</text></g><g><rect x=\"619.869140625\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"740.326904296875\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"740.326904296875\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.7%</text><text x=\"740.326904296875\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +0.1pp</text></g><text x=\"546.943359375\" y=\"1384.28759765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "deposits",
      "value": "146",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$146B"
    },
    {
      "id": "loans_receivables",
      "value": "207",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$207B"
    },
    {
      "id": "cet1",
      "value": "10.7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.7%"
    }
  ]
});
