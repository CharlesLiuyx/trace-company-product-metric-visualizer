window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "american-express-q3-fy24",
  "name": "American Express · Q3 FY24",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/american-express-q3-fy24.png",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"27.34716796875\" y=\"1194.15966796875\" width=\"173.19873046875\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"113.946533203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"113.946533203125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$135B</text><text x=\"113.946533203125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+9% Y/Y</text></g><g><rect x=\"208.359375\" y=\"1194.15966796875\" width=\"404.99853515625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"410.858642578125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"410.858642578125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$202B</text><text x=\"410.858642578125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+10% Y/Y</text></g><g><rect x=\"619.869140625\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"740.326904296875\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"740.326904296875\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.7%</text><text x=\"740.326904296875\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">Flat Y/Y</text></g><text x=\"546.943359375\" y=\"1384.28759765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 7.9,
      "notes": [
        "+10% Y/Y",
        "21% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$7.9B"
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
      "value": 2.9,
      "notes": [
        "+11% Y/Y",
        "15% pretax margin"
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
      "value": 1.9,
      "notes": [
        "(0%) Y/Y",
        "54% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.9B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 16.7,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$16.7B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 16.6,
      "notes": [
        "+8% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$16.6B"
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
      "value": 3.2,
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$3.2B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 12.1,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($12.1B)"
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
      "value": 2.5,
      "notes": [
        "+2% Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$2.5B"
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
      "value": 1.8,
      "type": "cost",
      "col": 4,
      "order": 7,
      "valueText": "($1.8B)"
    }
  ],
  "links": [
    {
      "source": "us_consumer_services",
      "target": "amex_hub",
      "value": 7.9,
      "targetWidth": 153.6650390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 154.96728515625,
      "y0": 492.900146484375,
      "y1": 622.4736328125
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 4,
      "targetWidth": 79.43701171875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 79.43701171875,
      "y0": 739.024658203125,
      "y1": 739.024658203125
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 2.9,
      "targetWidth": 57.298828125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 57.298828125,
      "y0": 921.990234375,
      "y1": 807.392578125
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.9,
      "targetWidth": 35.16064453125,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 36.462890625,
      "y0": 1092.58447265625,
      "y1": 853.622314453125
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 16.6,
      "sourceWidth": 324.25927734375,
      "targetWidth": 325.5615234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 707.770751953125,
      "y1": 826.92626953125
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
      "y0": 870.551513671875,
      "y1": 1128.396240234375
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.2,
      "sourceWidth": 62.5078125,
      "targetWidth": 62.5078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 695.3994140625,
      "y1": 576.89501953125
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 12.1,
      "sourceWidth": 235.70654296875,
      "targetWidth": 235.70654296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 844.506591796875,
      "y1": 959.104248046875
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.4,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 976.033447265625,
      "y1": 1253.411865234375
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.5,
      "sourceWidth": 49.4853515625,
      "targetWidth": 49.4853515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 570.3837890625,
      "y1": 433.64794921875
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 13.0224609375,
      "targetWidth": 14.32470703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 601.6376953125,
      "y1": 554.105712890625
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 4.2,
      "sourceWidth": 82.04150390625,
      "targetWidth": 82.04150390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 882.271728515625,
      "y1": 693.446044921875
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
      "y0": 937.6171875,
      "y1": 841.2509765625
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
      "y0": 963.662109375,
      "y1": 958.453125
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.5,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 989.70703125,
      "y1": 1076.95751953125
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
      "y0": 1024.216552734375,
      "y1": 1213.042236328125
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 1.8,
      "sourceWidth": 32.55615234375,
      "targetWidth": 35.16064453125,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1060.679443359375,
      "y1": 1356.289306640625
    }
  ],
  "layout": {
    "scale": 19.53369140625,
    "nodes": {
      "us_consumer_services": {
        "x": 407.60302734375,
        "y": 415.41650390625,
        "width": 72.92578125,
        "height": 154.96728515625
      },
      "commercial_services": {
        "x": 407.60302734375,
        "y": 699.30615234375,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "international_card_services": {
        "x": 407.60302734375,
        "y": 893.3408203125,
        "width": 72.92578125,
        "height": 57.298828125
      },
      "global_merchant_network": {
        "x": 407.60302734375,
        "y": 1074.35302734375,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "amex_hub": {
        "x": 872.5048828125,
        "y": 545.64111328125,
        "width": 72.92578125,
        "height": 325.5615234375
      },
      "revenue": {
        "x": 1342.61572265625,
        "y": 664.1455078125,
        "width": 72.92578125,
        "height": 325.5615234375
      },
      "all_other": {
        "x": 1342.61572265625,
        "y": 1127.7451171875,
        "width": 76.83251953125,
        "height": 1.30224609375
      },
      "pretax_income": {
        "x": 1811.42431640625,
        "y": 545.64111328125,
        "width": 72.92578125,
        "height": 62.5078125
      },
      "operating_expenses": {
        "x": 1811.42431640625,
        "y": 841.2509765625,
        "width": 72.92578125,
        "height": 235.70654296875
      },
      "provision_for_credit_losses": {
        "x": 1814.02880859375,
        "y": 1239.73828125,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "net_income": {
        "x": 2276.326171875,
        "y": 408.9052734375,
        "width": 72.92578125,
        "height": 49.4853515625
      },
      "tax": {
        "x": 2276.326171875,
        "y": 546.943359375,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "card_members_rewards": {
        "x": 2276.326171875,
        "y": 652.42529296875,
        "width": 72.92578125,
        "height": 82.04150390625
      },
      "business_development": {
        "x": 2276.326171875,
        "y": 826.92626953125,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "card_member_services": {
        "x": 2276.326171875,
        "y": 946.73291015625,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "marketing": {
        "x": 2276.326171875,
        "y": 1062.6328125,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "sales_employee_benefits": {
        "x": 2276.326171875,
        "y": 1192.857421875,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "other_general_operating": {
        "x": 2276.326171875,
        "y": 1338.708984375,
        "width": 72.92578125,
        "height": 35.16064453125
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
            "top": 315.1435546875,
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
            "top": 424.5322265625,
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
            "top": 596.4287109375,
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
            "top": 664.1455078125,
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
            "x": 444.06591796875,
            "top": 790.46337890625,
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
            "top": 846.4599609375,
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
                "text": "15% pretax margin",
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
            "top": 972.77783203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 390.673828125,
            "top": 1035.28564453125,
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
                "text": "54% pretax margin",
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
            "top": 470.11083984375,
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
            "x": 1379.07861328125,
            "top": 1142.06982421875,
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
            "top": 431.04345703125,
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
            "top": 1088.677734375,
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
            "top": 1278.8056640625,
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
            "top": 351.6064453125,
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
                "text": "+2% Y/Y",
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
            "top": 514.38720703125,
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
            "top": 652.42529296875,
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
            "top": 776.138671875,
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
            "top": 923.29248046875,
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
            "top": 1053.51708984375,
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
            "top": 1161.603515625,
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
            "top": 1307.455078125,
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
      "name": "American Express · 2024 财年第三季度",
      "meta": {
        "title": "American Express 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
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
            "税前利润率 23%"
          ]
        },
        "international_card_services": {
          "label": [
            "国际",
            "卡服务"
          ],
          "notes": [
            "同比 +11%",
            "税前利润率 15%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ],
          "notes": [
            "同比 (0%)",
            "税前利润率 54%"
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
            "同比 +2%"
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
                "top": 315.1435546875,
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
                "top": 424.5322265625,
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
                "top": 596.4287109375,
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
                "top": 664.1455078125,
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
                "x": 444.06591796875,
                "top": 790.46337890625,
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
                "top": 846.4599609375,
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
                    "text": "税前利润率 15%",
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
                "top": 972.77783203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (0%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 390.673828125,
                "top": 1035.28564453125,
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
                    "text": "税前利润率 54%",
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
                "top": 470.11083984375,
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
                "x": 1379.07861328125,
                "top": 1142.06982421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "所有其他",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "（非利息损失）",
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
                "top": 431.04345703125,
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
                "top": 1088.677734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "支出",
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
                "top": 1278.8056640625,
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
                "top": 351.6064453125,
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
                    "text": "同比 +2%",
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
                "top": 514.38720703125,
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
                "top": 652.42529296875,
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
                "top": 776.138671875,
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
                "top": 923.29248046875,
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
                "top": 1053.51708984375,
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
                "top": 1161.603515625,
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
                "top": 1307.455078125,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"27.34716796875\" y=\"1194.15966796875\" width=\"173.19873046875\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"113.946533203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"113.946533203125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$135B</text><text x=\"113.946533203125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +9%</text></g><g><rect x=\"208.359375\" y=\"1194.15966796875\" width=\"404.99853515625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"410.858642578125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"410.858642578125\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$202B</text><text x=\"410.858642578125\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +10%</text></g><g><rect x=\"619.869140625\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"740.326904296875\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"740.326904296875\" y=\"1287.92138671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.7%</text><text x=\"740.326904296875\" y=\"1320.4775390625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比持平</text></g><text x=\"546.943359375\" y=\"1384.28759765625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "deposits",
      "value": "135",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$135B"
    },
    {
      "id": "loans_receivables",
      "value": "202",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$202B"
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
