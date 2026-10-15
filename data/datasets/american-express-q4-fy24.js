window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "american-express-q4-fy24",
  "name": "American Express · Q4 FY24",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/american-express-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 191.43017578125,
    "titleSize": 109.388671875,
    "titleWeight": 800,
    "titleTextLength": 2487.2900390625,
    "hidePeriodStamp": true,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 255.240234375,
    "logoHeight": 255.240234375,
    "logoY": 264.35595703125,
    "logoViewBox": "0 0 279 252",
    "logoSvg": "\n    <rect x=\"17\" y=\"0\" width=\"253\" height=\"252\" fill=\"#006ad5\"/>\n    <text x=\"143.5\" y=\"121\" text-anchor=\"middle\" font-size=\"44\" font-weight=\"800\" fill=\"#ffffff\" letter-spacing=\"1\" textLength=\"234\" lengthAdjust=\"spacingAndGlyphs\">AMERICAN</text>\n    <text x=\"143.5\" y=\"173\" text-anchor=\"middle\" font-size=\"44\" font-weight=\"800\" fill=\"#ffffff\" letter-spacing=\"1\" textLength=\"205\" lengthAdjust=\"spacingAndGlyphs\">EXPRESS</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
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
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 44,
      "note": 30,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"27.34716796875\" y=\"1195.4619140625\" width=\"174.5009765625\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"114.59765625\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"114.59765625\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">$138B</text><text x=\"114.59765625\" y=\"1324.38427734375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+2% Y/Y</text></g><g><rect x=\"208.359375\" y=\"1195.4619140625\" width=\"404.99853515625\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"410.858642578125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"410.858642578125\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">$208B</text><text x=\"410.858642578125\" y=\"1324.38427734375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+8% Y/Y</text></g><g><rect x=\"618.56689453125\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"739.024658203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"739.024658203125\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">10.5%</text><text x=\"739.024658203125\" y=\"1324.38427734375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">Flat Y/Y</text></g><text x=\"548.24560546875\" y=\"1384.28759765625\" font-size=\"26.044921875\" fill=\"#666\">CET1 = Common Equity Tier 1</text><g data-node=\"all_other\"><text x=\"1377.7763671875\" y=\"1155.09228515625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"700\" fill=\"#941100\">All Other</text><text x=\"1377.7763671875\" y=\"1201.97314453125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#941100\">(noninterest loss)</text><text x=\"1377.7763671875\" y=\"1251.45849609375\" text-anchor=\"middle\" font-size=\"32.55615234375\" fill=\"#941100\">($0.1B)</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 8.3,
      "notes": [
        "+12% Y/Y",
        "19% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "commercial_services",
      "label": [
        "Commercial",
        "Services"
      ],
      "value": 4.1,
      "notes": [
        "+8% Y/Y",
        "20% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "international_card_services",
      "label": [
        "International",
        "Card Services"
      ],
      "value": 3,
      "notes": [
        "+11% Y/Y",
        "1% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.0B"
    },
    {
      "id": "global_merchant_network",
      "label": [
        "Global Merchant",
        "& Network Service"
      ],
      "value": 1.9,
      "notes": [
        "(2%) Y/Y",
        "45% pretax margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 17.3,
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 17.2,
      "notes": [
        "+9% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 2.8,
      "type": "profit",
      "col": 3,
      "order": 0
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 13.1,
      "type": "cost",
      "col": 3,
      "order": 1
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
      "order": 2
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 2.2,
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.6,
      "type": "cost",
      "col": 4,
      "order": 1
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
      "order": 2
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
      "order": 3
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
      "order": 4
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 1.6,
      "type": "cost",
      "col": 4,
      "order": 5
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
      "order": 6
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
      "order": 7
    },
    {
      "id": "all_other",
      "label": "All Other",
      "value": 0.1,
      "type": "cost",
      "col": 2,
      "order": 1
    }
  ],
  "links": [
    {
      "source": "us_consumer_services",
      "target": "amex_hub",
      "value": 8.3,
      "targetOrder": 0,
      "sourceWidth": 162.78076171875,
      "targetWidth": 161.81725015805637
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 4.1,
      "targetOrder": 1,
      "sourceWidth": 82.04150390625,
      "targetWidth": 79.93382236723265
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 3,
      "targetOrder": 2,
      "sourceWidth": 58.60107421875,
      "targetWidth": 58.48816270773121
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.9,
      "targetOrder": 3,
      "sourceWidth": 36.462890625,
      "targetWidth": 37.04250304822977
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 17.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 335.33213285765896,
      "targetWidth": 337.28173828125
    },
    {
      "source": "amex_hub",
      "value": 0.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "target": "all_other",
      "sourceWidth": 1.9496054235910405,
      "targetWidth": 1.953369140625
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 2.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 54.90632948764535,
      "targetWidth": 54.69433593749999
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 256.88318438862643,
      "targetWidth": 257.8447265625
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 25.4922244049782,
      "targetWidth": 26.044921875
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 11.720214843749998,
      "targetWidth": 11.72021484375
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 4.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 86.60433563931299,
      "targetWidth": 85.9482421875
    },
    {
      "source": "operating_expenses",
      "target": "business_development",
      "value": 1.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 31.492485687022906,
      "targetWidth": 32.55615234375
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 1.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 25.587644620706108,
      "targetWidth": 24.742675781250004
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 31.492485687022906,
      "targetWidth": 31.25390625
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 2.1,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 41.33388746421756,
      "targetWidth": 41.671875
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 2.1,
      "sourceOrder": 5,
      "targetOrder": 0,
      "sourceWidth": 41.33388746421756,
      "targetWidth": 40.36962890625
    }
  ],
  "layout": {
    "scale": 19.53369140625,
    "nodes": {
      "us_consumer_services": {
        "x": 402.39404296875,
        "y": 407.60302734375,
        "width": 71.62353515625,
        "height": 162.78076171875
      },
      "commercial_services": {
        "x": 402.39404296875,
        "y": 694.09716796875,
        "width": 71.62353515625,
        "height": 82.04150390625
      },
      "international_card_services": {
        "x": 402.39404296875,
        "y": 902.45654296875,
        "width": 71.62353515625,
        "height": 58.60107421875
      },
      "global_merchant_network": {
        "x": 402.39404296875,
        "y": 1083.46875,
        "width": 71.62353515625,
        "height": 36.462890625
      },
      "amex_hub": {
        "x": 865.99365234375,
        "y": 545.64111328125,
        "width": 72.92578125,
        "height": 337.28173828125
      },
      "revenue": {
        "x": 1333.5,
        "y": 642.00732421875,
        "width": 72.92578125,
        "height": 337.28173828125
      },
      "pretax_income": {
        "x": 1808.81982421875,
        "y": 516.99169921875,
        "width": 71.62353515625,
        "height": 54.6943359375
      },
      "operating_expenses": {
        "x": 1808.81982421875,
        "y": 806.09033203125,
        "width": 71.62353515625,
        "height": 257.8447265625
      },
      "provision_for_credit_losses": {
        "x": 1801.00634765625,
        "y": 1235.83154296875,
        "width": 71.62353515625,
        "height": 26.044921875
      },
      "net_income": {
        "x": 2269.81494140625,
        "y": 369.837890625,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "tax": {
        "x": 2269.81494140625,
        "y": 524.80517578125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "card_members_rewards": {
        "x": 2269.81494140625,
        "y": 631.58935546875,
        "width": 72.92578125,
        "height": 85.9482421875
      },
      "business_development": {
        "x": 2269.81494140625,
        "y": 802.18359375,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "card_member_services": {
        "x": 2269.81494140625,
        "y": 927.19921875,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "marketing": {
        "x": 2269.81494140625,
        "y": 1036.587890625,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "sales_employee_benefits": {
        "x": 2269.81494140625,
        "y": 1155.09228515625,
        "width": 72.92578125,
        "height": 41.671875
      },
      "other_general_operating": {
        "x": 2269.81494140625,
        "y": 1276.201171875,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "all_other": {
        "x": 1333.5,
        "y": 1105.60693359375,
        "width": 72.92578125,
        "height": 1.953369140625
      }
    },
    "labels": {
      "amex_hub": {
        "blocks": []
      },
      "us_consumer_services": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 317.748046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 424.5322265625,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "19% pretax margin",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "commercial_services": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 606.8466796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 681.07470703125,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "20% pretax margin",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "international_card_services": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 812.6015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 885.52734375,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "1% pretax margin",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "global_merchant_network": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 989.70703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 1053.51708984375,
            "anchor": "end",
            "lineGap": 10.41796875,
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
                "text": "45% pretax margin",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1372.5673828125,
            "top": 458.390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "(net of interest expenses)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "+9% Y/Y",
                "size": 26.044921875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1845.28271484375,
            "top": 414.1142578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Pretax income",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 1089.97998046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Noninterest",
                "size": 33.8583984375,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 33.8583984375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 700
              }
            ]
          }
        ]
      },
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 1278.8056640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "weight": 700
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2478.17431640625,
            "top": 329.46826171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net income",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "+12% Y/Y",
                "size": 26.044921875,
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
            "top": 498.76025390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "card_members_rewards": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 636.79833984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Card members",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "rewards ($4.4B)",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "business_development": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 764.41845703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Business",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "($1.6B)",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "card_member_services": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 906.36328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Card Member",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "services ($1.3B)",
                "size": 31.25390625,
                "weight": 700
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
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing ($1.6B)",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "sales_employee_benefits": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 1143.3720703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales & employee",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "benefits ($2.1B)",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "other_general_operating": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 1265.783203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other general",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "operating ($2.1B)",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "all_other": {
        "blocks": []
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "美国运通 · 2024 财年第四季度",
      "meta": {
        "title": "美国运通 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "titleTextLength": 1800
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ],
          "notes": [
            "同比 +12%",
            "税前利润率 19%"
          ]
        },
        "commercial_services": {
          "label": [
            "商务",
            "服务"
          ],
          "notes": [
            "同比 +8%",
            "税前利润率 20%"
          ]
        },
        "international_card_services": {
          "label": [
            "国际",
            "卡服务"
          ],
          "notes": [
            "同比 +11%",
            "税前利润率 1%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户与",
            "网络服务"
          ],
          "notes": [
            "同比 (2%)",
            "税前利润率 45%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "operating_expenses": {
          "label": [
            "非利息",
            "费用"
          ]
        },
        "provision_for_credit_losses": {
          "label": [
            "信用损失",
            "拨备"
          ]
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +12%"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "card_members_rewards": {
          "label": "持卡人奖励"
        },
        "business_development": {
          "label": "业务拓展"
        },
        "card_member_services": {
          "label": "持卡人服务"
        },
        "marketing": {
          "label": "营销"
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
        },
        "all_other": {
          "label": "所有其他"
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
                "x": 438.85693359375,
                "top": 317.748046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 424.5322265625,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "税前利润率 19%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "commercial_services": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 606.8466796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 681.07470703125,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                    "text": "税前利润率 20%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "international_card_services": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 812.6015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 885.52734375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国际",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "卡服务",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "税前利润率 1%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "global_merchant_network": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 989.70703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 1053.51708984375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "全球商户与",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "网络服务",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "税前利润率 45%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1372.5673828125,
                "top": 458.390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "（扣除利息支出后）",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "同比 +9%",
                    "size": 26.044921875,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1845.28271484375,
                "top": 414.1142578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 1089.97998046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 33.8583984375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 1278.8056640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2478.17431640625,
                "top": 329.46826171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "同比 +12%",
                    "size": 26.044921875,
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
                "top": 498.76025390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "card_members_rewards": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 636.79833984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "持卡人奖励",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "($4.4B)",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "business_development": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 764.41845703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "业务拓展",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "($1.6B)",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "card_member_services": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 906.36328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "持卡人服务",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "($1.3B)",
                    "size": 31.25390625,
                    "weight": 700
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
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营销 ($1.6B)",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "sales_employee_benefits": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 1143.3720703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与员工",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "福利 ($2.1B)",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "other_general_operating": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 1265.783203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他一般",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "运营 ($2.1B)",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "all_other": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"27.34716796875\" y=\"1195.4619140625\" width=\"174.5009765625\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"114.59765625\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"114.59765625\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">$138B</text><text x=\"114.59765625\" y=\"1324.38427734375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +2%</text></g><g><rect x=\"208.359375\" y=\"1195.4619140625\" width=\"404.99853515625\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"410.858642578125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"410.858642578125\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">$208B</text><text x=\"410.858642578125\" y=\"1324.38427734375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +8%</text></g><g><rect x=\"618.56689453125\" y=\"1195.4619140625\" width=\"240.91552734375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"739.024658203125\" y=\"1247.5517578125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"739.024658203125\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">10.5%</text><text x=\"739.024658203125\" y=\"1324.38427734375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比持平</text></g><text x=\"548.24560546875\" y=\"1384.28759765625\" font-size=\"26.044921875\" fill=\"#666\">CET1 = 普通股一级资本</text><g data-node=\"all_other\"><text x=\"1377.7763671875\" y=\"1155.09228515625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"700\" fill=\"#941100\">所有其他</text><text x=\"1377.7763671875\" y=\"1201.97314453125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#941100\">（非利息损失）</text><text x=\"1377.7763671875\" y=\"1251.45849609375\" text-anchor=\"middle\" font-size=\"32.55615234375\" fill=\"#941100\">($0.1B)</text></g>"
    }
  },
  "nonNodeMetrics": [],
  "operatingMetrics": [
    {
      "id": "deposits",
      "label": "Deposits",
      "value": "138",
      "unit": "B",
      "currency": "USD",
      "literal": "$138B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+2% Y/Y"
      ],
      "quote": "Deposits\n$138B\n+2% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          27,
          1195,
          175,
          148
        ]
      }
    },
    {
      "id": "loans_receivables",
      "label": "Loans and receivables",
      "value": "208",
      "unit": "B",
      "currency": "USD",
      "literal": "$208B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+8% Y/Y"
      ],
      "quote": "Loans and receivables\n$208B\n+8% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          208,
          1195,
          405,
          148
        ]
      }
    },
    {
      "id": "cet1",
      "label": "CET1 ratio",
      "value": "10.5",
      "unit": "%",
      "currency": null,
      "literal": "10.5%",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "Flat Y/Y"
      ],
      "quote": "CET1 ratio\n10.5%\nFlat Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          619,
          1195,
          241,
          148
        ]
      }
    }
  ]
});
