window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "american-express-q4-fy23",
  "name": "American Express · Q4 FY23",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/american-express-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 191.43017578125,
    "titleSize": 104.1796875,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "logoWidth": 255.240234375,
    "logoHeight": 255.240234375,
    "logoY": 227.89306640625,
    "logoViewBox": "0 0 196 196",
    "logoSvg": "<rect width=\"196\" height=\"196\" fill=\"#006ad5\"/><text x=\"98\" y=\"94\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">AMERICAN</text><text x=\"98\" y=\"132\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">EXPRESS</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"244.822265625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"24.74267578125\" y=\"1191.55517578125\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"145.200439453125\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"145.200439453125\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.5%</text><text x=\"145.200439453125\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+0.2pp Y/Y</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$129B</text><text x=\"460.9951171875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+17% Y/Y</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$193B</text><text x=\"871.20263671875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+13% Y/Y</text></g><text x=\"239.61328125\" y=\"1388.1943359375\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"170.59423828125\" y=\"1437.6796875\" font-size=\"39.0673828125\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 7.4,
      "notes": [
        "+13% Y/Y",
        "20% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$7.4B"
    },
    {
      "id": "commercial_services",
      "label": [
        "Commercial",
        "Services"
      ],
      "value": 3.8,
      "notes": [
        "+7% Y/Y",
        "17% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$3.8B"
    },
    {
      "id": "international_card_services",
      "label": [
        "International",
        "Card Services"
      ],
      "value": 2.7,
      "notes": [
        "+12% Y/Y",
        "5% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.7B"
    },
    {
      "id": "global_merchant_network",
      "label": [
        "Global Merchant",
        "& Network Service"
      ],
      "value": 1.9,
      "notes": [
        "+10% Y/Y",
        "42% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.9B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 15.837,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$15.8B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 15.8,
      "notes": [
        "+11% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$15.8B"
    },
    {
      "id": "all_other",
      "label": "All Other",
      "value": 0.037,
      "type": "cost",
      "col": 2,
      "order": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "valueText": "($37M)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 2.5,
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$2.5B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 11.9,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($11.9B)"
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
      "value": 1.9,
      "notes": [
        "+23% Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$1.9B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.6,
      "type": "cost",
      "col": 4,
      "order": 1,
      "valueText": "($0.6B)"
    },
    {
      "id": "card_members_rewards",
      "label": [
        "Card members",
        "rewards"
      ],
      "value": 3.9,
      "type": "cost",
      "col": 4,
      "order": 2,
      "valueText": "($3.9B)"
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
      "value": 1.1,
      "type": "cost",
      "col": 4,
      "order": 4,
      "valueText": "($1.1B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 1.2,
      "type": "cost",
      "col": 4,
      "order": 5,
      "valueText": "($1.2B)"
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
      "value": 2.1,
      "type": "cost",
      "col": 4,
      "order": 7,
      "valueText": "($2.1B)"
    }
  ],
  "links": [
    {
      "source": "us_consumer_services",
      "target": "amex_hub",
      "value": 7.4,
      "targetWidth": 151.82142857142858,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 152.36279296875,
      "y0": 504.620361328125,
      "y1": 618.9107142857143
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 3.8,
      "targetWidth": 79.15476190476191,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 79.43701171875,
      "y0": 741.629150390625,
      "y1": 734.3988095238095
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 2.7,
      "targetWidth": 55.79761904761905,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 55.99658203125,
      "y0": 927.850341796875,
      "y1": 801.875
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.9,
      "targetWidth": 40.226190476190474,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 40.36962890625,
      "y0": 1097.142333984375,
      "y1": 849.8869047619048
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 15.8,
      "sourceWidth": 324.4150197628458,
      "targetWidth": 326.86376953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 705.207509881423,
      "y1": 733.815673828125
    },
    {
      "source": "amex_hub",
      "target": "all_other",
      "value": 0.037,
      "sourceWidth": 2.5849802371541504,
      "targetWidth": 2.6044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 868.7075098814228,
      "y1": 1030.07666015625
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 2.5,
      "sourceWidth": 51.19553016754518,
      "targetWidth": 50.78759765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 595.9815541462726,
      "y1": 443.414794921875
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 11.9,
      "sourceWidth": 246.78870952560243,
      "targetWidth": 244.822265625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 744.9736739928464,
      "y1": 832.13525390625
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.4,
      "sourceWidth": 28.879529838102407,
      "targetWidth": 28.6494140625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 882.8077936746989,
      "y1": 1212.39111328125
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 1.9,
      "sourceWidth": 39.36038818359375,
      "targetWidth": 40.36962890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 437.70119018554686,
      "y1": 288.447509765625
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 11.42720947265625,
      "targetWidth": 11.72021484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 463.09498901367186,
      "y1": 418.672119140625
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 3.9,
      "sourceWidth": 79.88937088815788,
      "targetWidth": 80.7392578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 749.6688065378289,
      "y1": 575.5927734375
    },
    {
      "source": "operating_expenses",
      "target": "business_development",
      "value": 1.5,
      "sourceWidth": 30.924917763157893,
      "targetWidth": 31.25390625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 805.0759508634868,
      "y1": 735.76904296875
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 1.1,
      "sourceWidth": 21.90515008223684,
      "targetWidth": 22.13818359375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 831.4909847861843,
      "y1": 870.551513671875
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.2,
      "sourceWidth": 25.77076480263158,
      "targetWidth": 26.044921875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 855.3289422286184,
      "y1": 1001.42724609375
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 2.1,
      "sourceWidth": 43.81030016447368,
      "targetWidth": 44.2763671875,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 890.119474712171,
      "y1": 1142.06982421875
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 2.1,
      "sourceWidth": 42.52176192434211,
      "targetWidth": 42.97412109375,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 933.2855057565789,
      "y1": 1285.968017578125
    }
  ],
  "layout": {
    "scale": 20.8359375,
    "nodes": {
      "us_consumer_services": {
        "x": 412.81201171875,
        "y": 428.43896484375,
        "width": 72.92578125,
        "height": 152.36279296875
      },
      "commercial_services": {
        "x": 412.81201171875,
        "y": 701.91064453125,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "international_card_services": {
        "x": 412.81201171875,
        "y": 899.85205078125,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "global_merchant_network": {
        "x": 412.81201171875,
        "y": 1076.95751953125,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "amex_hub": {
        "x": 880.318359375,
        "y": 543,
        "width": 72.92578125,
        "height": 327
      },
      "revenue": {
        "x": 1340.01123046875,
        "y": 570.3837890625,
        "width": 72.92578125,
        "height": 326.86376953125
      },
      "all_other": {
        "x": 1345.22021484375,
        "y": 1028.7744140625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "pretax_income": {
        "x": 1808.81982421875,
        "y": 418.02099609375,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "operating_expenses": {
        "x": 1808.81982421875,
        "y": 709.72412109375,
        "width": 72.92578125,
        "height": 244.822265625
      },
      "provision_for_credit_losses": {
        "x": 1816.63330078125,
        "y": 1198.06640625,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "net_income": {
        "x": 2281.53515625,
        "y": 268.2626953125,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "tax": {
        "x": 2281.53515625,
        "y": 412.81201171875,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "card_members_rewards": {
        "x": 2281.53515625,
        "y": 535.22314453125,
        "width": 72.92578125,
        "height": 80.7392578125
      },
      "business_development": {
        "x": 2281.53515625,
        "y": 720.14208984375,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "card_member_services": {
        "x": 2281.53515625,
        "y": 859.482421875,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "marketing": {
        "x": 2281.53515625,
        "y": 988.40478515625,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "sales_employee_benefits": {
        "x": 2281.53515625,
        "y": 1119.931640625,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "other_general_operating": {
        "x": 2281.53515625,
        "y": 1264.48095703125,
        "width": 72.92578125,
        "height": 42.97412109375
      }
    },
    "labels": {
      "us_consumer_services": {
        "blocks": [
          {
            "x": 449.27490234375,
            "top": 329.46826171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 442.112548828125,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "20% net margin",
                "size": 27.34716796875,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "commercial_services": {
        "blocks": [
          {
            "x": 449.27490234375,
            "top": 602.93994140625,
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
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 679.121337890625,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "17% net margin",
                "size": 27.34716796875,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "international_card_services": {
        "blocks": [
          {
            "x": 449.27490234375,
            "top": 800.88134765625,
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
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 865.342529296875,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "5% net margin",
                "size": 27.34716796875,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "global_merchant_network": {
        "blocks": [
          {
            "x": 449.27490234375,
            "top": 977.98681640625,
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
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 1034.634521484375,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "42% net margin",
                "size": 27.34716796875,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "amex_hub": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1376.47412109375,
            "top": 371.14013671875,
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
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "all_other": {
        "blocks": [
          {
            "x": 1384.28759765625,
            "top": 1040.49462890625,
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
                "size": 39.0673828125,
                "weight": 400
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
      "pretax_income": {
        "blocks": [
          {
            "x": 1845.28271484375,
            "top": 299.5166015625,
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
            "x": 1845.28271484375,
            "top": 967.56884765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Noninterest",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 400
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
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1853.09619140625,
            "top": 1239.73828125,
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
                "weight": 400
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
      "net_income": {
        "blocks": [
          {
            "x": 2482.0810546875,
            "top": 216.1728515625,
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
                "text": "+23% Y/Y",
                "size": 27.34716796875,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2496.40576171875,
            "top": 377.6513671875,
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
            "x": 2496.40576171875,
            "top": 500.0625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Card members",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "rewards",
                "size": 31.25390625,
                "weight": 400
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
            "x": 2496.40576171875,
            "top": 684.9814453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Business",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 400
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
            "x": 2496.40576171875,
            "top": 824.32177734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Card Member",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "services",
                "size": 31.25390625,
                "weight": 400
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
            "x": 2496.40576171875,
            "top": 953.244140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 2496.40576171875,
            "top": 1084.77099609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales & employee",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "benefits",
                "size": 31.25390625,
                "weight": 400
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
            "x": 2496.40576171875,
            "top": 1229.3203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other general",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "operating",
                "size": 31.25390625,
                "weight": 400
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
      "id": "cet1",
      "value": "10.5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.5%"
    },
    {
      "id": "deposits",
      "value": "129",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$129B"
    },
    {
      "id": "loans_receivables",
      "value": "193",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$193B"
    }
  ],
  "i18n": {
    "zh": {
      "name": "美国运通 · 2023 财年第四季度",
      "meta": {
        "title": "美国运通 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "titleSize": 88.552734375
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ],
          "notes": [
            "同比 +13%",
            "净利润率 20%"
          ]
        },
        "commercial_services": {
          "label": [
            "商务",
            "服务"
          ],
          "notes": [
            "同比 +7%",
            "净利润率 17%"
          ]
        },
        "international_card_services": {
          "label": [
            "国际",
            "卡服务"
          ],
          "notes": [
            "同比 +12%",
            "净利润率 5%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ],
          "notes": [
            "同比 +10%",
            "净利润率 42%"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 +11%"
          ]
        },
        "all_other": {
          "label": [
            "所有其他",
            "（非利息亏损）"
          ]
        },
        "pretax_income": {
          "label": [
            "税前利润"
          ]
        },
        "operating_expenses": {
          "label": [
            "非利息",
            "支出"
          ]
        },
        "provision_for_credit_losses": {
          "label": [
            "信用损失",
            "拨备"
          ]
        },
        "net_income": {
          "label": [
            "净利润"
          ],
          "notes": [
            "同比 +23%"
          ]
        },
        "tax": {
          "label": [
            "税费"
          ]
        },
        "card_members_rewards": {
          "label": [
            "持卡人",
            "奖励"
          ]
        },
        "business_development": {
          "label": [
            "业务",
            "拓展"
          ]
        },
        "card_member_services": {
          "label": [
            "持卡人",
            "服务"
          ]
        },
        "marketing": {
          "label": [
            "营销"
          ]
        },
        "sales_employee_benefits": {
          "label": [
            "销售与员工",
            "福利"
          ]
        },
        "other_general_operating": {
          "label": [
            "其他一般",
            "运营"
          ]
        }
      },
      "layout": {
        "labels": {
          "us_consumer_services": {
            "blocks": [
              {
                "x": 449.27490234375,
                "top": 329.46826171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 442.112548828125,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "净利润率 20%",
                    "size": 27.34716796875,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "commercial_services": {
            "blocks": [
              {
                "x": 449.27490234375,
                "top": 602.93994140625,
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
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 679.121337890625,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "净利润率 17%",
                    "size": 27.34716796875,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "international_card_services": {
            "blocks": [
              {
                "x": 449.27490234375,
                "top": 800.88134765625,
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
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 865.342529296875,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "净利润率 5%",
                    "size": 27.34716796875,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "global_merchant_network": {
            "blocks": [
              {
                "x": 449.27490234375,
                "top": 977.98681640625,
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
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 1034.634521484375,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "净利润率 42%",
                    "size": 27.34716796875,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "amex_hub": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1376.47412109375,
                "top": 371.14013671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "（扣除利息支出）",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 1384.28759765625,
                "top": 1040.49462890625,
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
                    "weight": 400
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
          "pretax_income": {
            "blocks": [
              {
                "x": 1845.28271484375,
                "top": 299.5166015625,
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
                "x": 1845.28271484375,
                "top": 967.56884765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "支出",
                    "size": 39.0673828125,
                    "weight": 400
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
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1853.09619140625,
                "top": 1239.73828125,
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
                    "weight": 400
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
          "net_income": {
            "blocks": [
              {
                "x": 2482.0810546875,
                "top": 216.1728515625,
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
                    "text": "同比 +23%",
                    "size": 27.34716796875,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2496.40576171875,
                "top": 377.6513671875,
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
                "x": 2496.40576171875,
                "top": 500.0625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "持卡人",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "奖励",
                    "size": 31.25390625,
                    "weight": 400
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
                "x": 2496.40576171875,
                "top": 684.9814453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "业务",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "拓展",
                    "size": 31.25390625,
                    "weight": 400
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
                "x": 2496.40576171875,
                "top": 824.32177734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "持卡人",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 31.25390625,
                    "weight": 400
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
                "x": 2496.40576171875,
                "top": 953.244140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 2496.40576171875,
                "top": 1084.77099609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与员工",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "福利",
                    "size": 31.25390625,
                    "weight": 400
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
                "x": 2496.40576171875,
                "top": 1229.3203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他一般",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "运营",
                    "size": 31.25390625,
                    "weight": 400
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"244.822265625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"24.74267578125\" y=\"1191.55517578125\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"145.200439453125\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"145.200439453125\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.5%</text><text x=\"145.200439453125\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +0.2pp</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$129B</text><text x=\"460.9951171875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +17%</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1241.04052734375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$193B</text><text x=\"871.20263671875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +13%</text></g><text x=\"239.61328125\" y=\"1388.1943359375\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"170.59423828125\" y=\"1437.6796875\" font-size=\"39.0673828125\" font-weight=\"800\">来源：季度业绩</text></g>"
    }
  }
});
