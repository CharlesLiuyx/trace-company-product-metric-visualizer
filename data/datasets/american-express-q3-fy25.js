window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "american-express-q3-fy25",
  "name": "American Express · Q3 FY25",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/american-express-q3-fy25.png",
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
    "logoY": 244.822265625,
    "logoViewBox": "0 0 196 196",
    "logoSvg": "<rect width=\"196\" height=\"196\" fill=\"#006ad5\"/><text x=\"98\" y=\"94\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">AMERICAN</text><text x=\"98\" y=\"132\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">EXPRESS</text>",
    "logoX": 787.85888671875
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
      "lineGap": 9.11572265625
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"244.822265625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"27.34716796875\" y=\"1195.4619140625\" width=\"173.19873046875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"113.946533203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"113.946533203125\" y=\"1286.619140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$150B</text><text x=\"113.946533203125\" y=\"1319.17529296875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+11% Y/Y</text></g><g><rect x=\"208.359375\" y=\"1195.4619140625\" width=\"329.46826171875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"373.093505859375\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">Billed Business</text><text data-operating-metric=\"billed_business\" x=\"373.093505859375\" y=\"1286.619140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$421B</text><text x=\"373.093505859375\" y=\"1319.17529296875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+9% Y/Y</text></g><g><rect x=\"546.943359375\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"667.401123046875\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"667.401123046875\" y=\"1286.619140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.5%</text><text x=\"667.401123046875\" y=\"1319.17529296875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">(0.2pp) Y/Y</text></g><text x=\"492.2490234375\" y=\"1382.9853515625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 8.9,
      "notes": [
        "+11% Y/Y",
        "21% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$8.9B"
    },
    {
      "id": "commercial_services",
      "label": [
        "Commercial",
        "Services"
      ],
      "value": 4.3,
      "notes": [
        "+7% Y/Y",
        "25% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.3B"
    },
    {
      "id": "international_card_services",
      "label": [
        "International",
        "Card Services"
      ],
      "value": 3.3,
      "notes": [
        "+14% Y/Y",
        "13% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.3B"
    },
    {
      "id": "global_merchant_network",
      "label": [
        "Global Merchant",
        "& Network Service"
      ],
      "value": 2,
      "notes": [
        "+7% Y/Y",
        "53% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$2.0B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 18.5,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$18.5B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 18.4,
      "notes": [
        "+11% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$18.4B"
    },
    {
      "id": "all_other",
      "label": "All Other",
      "value": 0.019,
      "type": "cost",
      "col": 2,
      "order": 1,
      "color": "#e08585",
      "labelColor": "#941100",
      "valueText": "($19M)",
      "notes": []
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
      "value": 13.3,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($13.3B)"
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
      "value": 2.9,
      "notes": [
        "+16% Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$2.9B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.9,
      "type": "cost",
      "col": 4,
      "order": 1,
      "valueText": "($0.9B)"
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
      "value": 1.5,
      "type": "cost",
      "col": 4,
      "order": 4,
      "valueText": "($1.5B)"
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
      "value": 8.9,
      "targetWidth": 143.46528452280407,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 143.2470703125,
      "y0": 481.8310546875,
      "y1": 619.978247730152
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 4.3,
      "targetWidth": 69.31468802787161,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 69.01904296875,
      "y0": 739.024658203125,
      "y1": 726.3682340054899
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 3.3,
      "targetWidth": 53.19499313766892,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 53.39208984375,
      "y0": 929.152587890625,
      "y1": 787.6230745882601
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 2,
      "targetWidth": 32.2393897804054,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 32.55615234375,
      "y0": 1088.026611328125,
      "y1": 830.3402660472974
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 18.4,
      "sourceWidth": 296.912109375,
      "targetWidth": 298.21435546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 696.70166015625,
      "y1": 826.275146484375
    },
    {
      "source": "amex_hub",
      "target": "all_other",
      "value": 0.019,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 845.808837890625,
      "y1": 1095.840087890625
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.8,
      "sourceWidth": 61.58774732506792,
      "targetWidth": 62.50781249999999,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 707.9618424125339,
      "y1": 575.5927734375
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.3,
      "sourceWidth": 215.55711563773775,
      "targetWidth": 214.87060546875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 846.5342738939368,
      "y1": 961.708740234375
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.3,
      "sourceWidth": 21.06949250594429,
      "targetWidth": 20.8359375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 964.8475779657779,
      "y1": 1255.365234375
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.9,
      "sourceWidth": 47.70333059210526,
      "targetWidth": 48.18310546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 568.1905324835526,
      "y1": 416.067626953125
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.9,
      "sourceWidth": 14.804481907894738,
      "targetWidth": 14.32470703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 599.4444387335526,
      "y1": 546.292236328125
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 4.6,
      "sourceWidth": 73.76155113106343,
      "targetWidth": 74.22802734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 891.1542130655316,
      "y1": 693.446044921875
    },
    {
      "source": "operating_expenses",
      "target": "business_development",
      "value": 1.6,
      "sourceWidth": 25.656191697761198,
      "targetWidth": 26.044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 940.8630844799441,
      "y1": 837.34423828125
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 1.5,
      "sourceWidth": 24.052679716651124,
      "targetWidth": 24.74267578125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 965.7175201871502,
      "y1": 965.615478515625
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.6,
      "sourceWidth": 25.656191697761198,
      "targetWidth": 26.044921875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 990.5719558943565,
      "y1": 1086.0732421875
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 2.3,
      "sourceWidth": 36.880775565531714,
      "targetWidth": 36.462890625,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1021.840439526003,
      "y1": 1208.484375
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 1.8,
      "sourceWidth": 28.863215659981346,
      "targetWidth": 28.6494140625,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1054.7124351387595,
      "y1": 1329.59326171875
    }
  ],
  "layout": {
    "scale": 16.199941406249998,
    "nodes": {
      "us_consumer_services": {
        "x": 407.60302734375,
        "y": 410.20751953125,
        "width": 72.92578125,
        "height": 143.2470703125
      },
      "commercial_services": {
        "x": 407.60302734375,
        "y": 704.51513671875,
        "width": 72.92578125,
        "height": 69.01904296875
      },
      "international_card_services": {
        "x": 407.60302734375,
        "y": 902.45654296875,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "global_merchant_network": {
        "x": 407.60302734375,
        "y": 1071.74853515625,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "amex_hub": {
        "x": 875.109375,
        "y": 548.24560546875,
        "width": 72.92578125,
        "height": 298.21435546875
      },
      "revenue": {
        "x": 1342.61572265625,
        "y": 677.16796875,
        "width": 72.92578125,
        "height": 298.21435546875
      },
      "all_other": {
        "x": 1342.61572265625,
        "y": 1095.18896484375,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "pretax_income": {
        "x": 1808.81982421875,
        "y": 544.3388671875,
        "width": 72.92578125,
        "height": 62.5078125
      },
      "operating_expenses": {
        "x": 1808.81982421875,
        "y": 854.2734375,
        "width": 72.92578125,
        "height": 214.87060546875
      },
      "provision_for_credit_losses": {
        "x": 1808.81982421875,
        "y": 1244.947265625,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "net_income": {
        "x": 2276.326171875,
        "y": 391.97607421875,
        "width": 72.92578125,
        "height": 48.18310546875
      },
      "tax": {
        "x": 2276.326171875,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "card_members_rewards": {
        "x": 2276.326171875,
        "y": 656.33203125,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "business_development": {
        "x": 2276.326171875,
        "y": 824.32177734375,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "card_member_services": {
        "x": 2276.326171875,
        "y": 953.244140625,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "marketing": {
        "x": 2276.326171875,
        "y": 1073.05078125,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "sales_employee_benefits": {
        "x": 2276.326171875,
        "y": 1190.2529296875,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "other_general_operating": {
        "x": 2276.326171875,
        "y": 1315.2685546875,
        "width": 72.92578125,
        "height": 28.6494140625
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
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 389.37158203125,
            "top": 416.71875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "US Consumer",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "Services",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "21% pretax margin",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "commercial_services": {
        "blocks": [
          {
            "x": 444.06591796875,
            "top": 605.54443359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 389.37158203125,
            "top": 711.0263671875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Commercial",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "Services",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "25% pretax margin",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "international_card_services": {
        "blocks": [
          {
            "x": 444.06591796875,
            "top": 803.48583984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 389.37158203125,
            "top": 908.9677734375,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "International",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "Card Services",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "13% pretax margin",
                "size": 27.34716796875,
                "weight": 400
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
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 389.37158203125,
            "top": 1078.259765625,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Global Merchant",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "& Network Service",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "53% pretax margin",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1379.07861328125,
            "top": 485.73779296875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "(net of interest expenses)",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "all_other": {
        "blocks": [
          {
            "x": 1379.07861328125,
            "top": 1113.42041015625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "All Other",
                "size": 33.8583984375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 33.8583984375,
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
            "top": 431.04345703125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.0673828125,
                "weight": 700
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
            "top": 1079.56201171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Noninterest",
                "size": 35.16064453125,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 35.16064453125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
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
            "top": 1276.201171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Provision for",
                "size": 33.8583984375,
                "weight": 700
              },
              {
                "text": "credit losses",
                "size": 33.8583984375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2471.6630859375,
            "top": 343.79296875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net income",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2471.6630859375,
            "top": 506.57373046875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700
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
            "x": 2502.9169921875,
            "top": 647.21630859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Card members",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "rewards",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "business_development": {
        "blocks": [
          {
            "x": 2502.9169921875,
            "top": 815.2060546875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Business",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "development",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "card_member_services": {
        "blocks": [
          {
            "x": 2502.9169921875,
            "top": 944.12841796875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Card Member",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "services",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2502.9169921875,
            "top": 1063.93505859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Marketing",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sales_employee_benefits": {
        "blocks": [
          {
            "x": 2502.9169921875,
            "top": 1181.13720703125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Sales & employee",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "benefits",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_general_operating": {
        "blocks": [
          {
            "x": 2502.9169921875,
            "top": 1306.15283203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other general",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "operating",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
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
      "name": "美国运通 · 2025 财年第三季度",
      "meta": {
        "title": "美国运通 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "titleSize": 93.76171875
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ]
        },
        "commercial_services": {
          "label": [
            "商务",
            "服务"
          ]
        },
        "international_card_services": {
          "label": [
            "国际卡",
            "服务"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ]
        },
        "revenue": {
          "label": [
            "收入",
            "（扣除利息支出后）"
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
          "amex_hub": {
            "blocks": []
          },
          "us_consumer_services": {
            "blocks": [
              {
                "x": 444.06591796875,
                "top": 311.23681640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 389.37158203125,
                "top": 416.71875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "美国消费者",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "服务",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "税前利润率 21%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "commercial_services": {
            "blocks": [
              {
                "x": 444.06591796875,
                "top": 605.54443359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 389.37158203125,
                "top": 711.0263671875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "商务",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "服务",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "税前利润率 25%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "international_card_services": {
            "blocks": [
              {
                "x": 444.06591796875,
                "top": 803.48583984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 389.37158203125,
                "top": 908.9677734375,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "国际卡",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "服务",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "税前利润率 13%",
                    "size": 27.34716796875,
                    "weight": 400
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
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 389.37158203125,
                "top": 1078.259765625,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "全球商户",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "与网络服务",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "税前利润率 53%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1379.07861328125,
                "top": 485.73779296875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "（扣除利息支出后）",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 1379.07861328125,
                "top": 1113.42041015625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "所有其他",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "（非利息亏损）",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
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
                "top": 431.04345703125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.0673828125,
                    "weight": 700
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
                "top": 1079.56201171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 35.16064453125,
                    "weight": 700
                  },
                  {
                    "text": "支出",
                    "size": 35.16064453125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
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
                "top": 1276.201171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "拨备",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2471.6630859375,
                "top": 343.79296875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2471.6630859375,
                "top": 506.57373046875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700
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
                "x": 2502.9169921875,
                "top": 647.21630859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "持卡人",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "奖励",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "business_development": {
            "blocks": [
              {
                "x": 2502.9169921875,
                "top": 815.2060546875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "业务",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "拓展",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "card_member_services": {
            "blocks": [
              {
                "x": 2502.9169921875,
                "top": 944.12841796875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "持卡人",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "服务",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2502.9169921875,
                "top": 1063.93505859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营销",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sales_employee_benefits": {
            "blocks": [
              {
                "x": 2502.9169921875,
                "top": 1181.13720703125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售与员工",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "福利",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_general_operating": {
            "blocks": [
              {
                "x": 2502.9169921875,
                "top": 1306.15283203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他一般",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "运营",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"244.822265625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"27.34716796875\" y=\"1195.4619140625\" width=\"173.19873046875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"113.946533203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"113.946533203125\" y=\"1286.619140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$150B</text><text x=\"113.946533203125\" y=\"1319.17529296875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +11%</text></g><g><rect x=\"208.359375\" y=\"1195.4619140625\" width=\"329.46826171875\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"373.093505859375\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">签账业务额</text><text data-operating-metric=\"billed_business\" x=\"373.093505859375\" y=\"1286.619140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$421B</text><text x=\"373.093505859375\" y=\"1319.17529296875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +9%</text></g><g><rect x=\"546.943359375\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"667.401123046875\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"667.401123046875\" y=\"1286.619140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.5%</text><text x=\"667.401123046875\" y=\"1319.17529296875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 (0.2pp)</text></g><text x=\"492.2490234375\" y=\"1382.9853515625\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "deposits",
      "value": "150",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$150B"
    },
    {
      "id": "billed_business",
      "value": "421",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$421B"
    },
    {
      "id": "cet1",
      "value": "10.5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.5%"
    }
  ]
});
