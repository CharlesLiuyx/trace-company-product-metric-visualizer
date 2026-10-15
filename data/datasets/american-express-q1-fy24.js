window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "american-express-q1-fy24",
  "name": "American Express · Q1 FY24",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/american-express-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 192.732421875,
    "titleSize": 104.1796875,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "logoWidth": 255.240234375,
    "logoHeight": 255.240234375,
    "logoY": 266.96044921875,
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
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"24.74267578125\" y=\"1191.55517578125\" width=\"242.2177734375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"145.8515625\" y=\"1243.64501953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"145.8515625\" y=\"1282.71240234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.6%</text><text x=\"145.8515625\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"white\">Flat Y/Y</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1243.64501953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1282.71240234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$134B</text><text x=\"460.9951171875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"white\">+11% Y/Y</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1243.64501953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1282.71240234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$181B</text><text x=\"871.20263671875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"white\">+12% Y/Y</text></g><text x=\"239.61328125\" y=\"1388.1943359375\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 7.5,
      "notes": [
        "+14% Y/Y",
        "22% margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$7.5B"
    },
    {
      "id": "commercial_services",
      "label": [
        "Commercial",
        "Services"
      ],
      "value": 3.8,
      "notes": [
        "+8% Y/Y",
        "23% net margin"
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
        "+8% Y/Y",
        "9% net margin"
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
        "+7% Y/Y",
        "54% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.9B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 15.9,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$15.9B"
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
      "value": 0.1,
      "type": "cost",
      "col": 2,
      "order": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "valueText": "($0.1B)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 3.1,
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$3.1B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 11.4,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($11.4B)"
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
      "value": 2.4,
      "notes": [
        "+9% Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$2.4B"
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
      "value": 3.8,
      "type": "cost",
      "col": 4,
      "order": 2,
      "valueText": "($3.8B)"
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
      "value": 1.1,
      "type": "cost",
      "col": 4,
      "order": 4,
      "valueText": "($1.1B)"
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
      "value": 1.5,
      "type": "cost",
      "col": 4,
      "order": 7,
      "valueText": "($1.5B)"
    }
  ],
  "links": [
    {
      "source": "us_consumer_services",
      "target": "amex_hub",
      "value": 7.5,
      "targetWidth": 142.50994988207546,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 143.2470703125,
      "y0": 488.34228515625,
      "y1": 674.1949163472877
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 3.8,
      "targetWidth": 72.2050412735849,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 72.92578125,
      "y0": 721.4443359375,
      "y1": 781.5524119251179
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 2.7,
      "targetWidth": 51.30358195754718,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 52.08984375,
      "y0": 914.1767578125,
      "y1": 843.306723540684
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.9,
      "targetWidth": 36.10252063679245,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 36.462890625,
      "y0": 1091.2822265625,
      "y1": 887.0097748378538
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 15.8,
      "sourceWidth": 300.2209610849057,
      "targetWidth": 302.12109375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 753.0504219487029,
      "y1": 807.392578125
    },
    {
      "source": "amex_hub",
      "target": "all_other",
      "value": 0.1,
      "sourceWidth": 1.9001326650943398,
      "targetWidth": 2.6044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 904.1109688237027,
      "y1": 1071.74853515625
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.1,
      "sourceWidth": 59.276923457278485,
      "targetWidth": 59.9033203125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 685.9704929786392,
      "y1": 557.361328125
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 11.4,
      "sourceWidth": 217.9861056170886,
      "targetWidth": 216.1728515625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 824.6020075158227,
      "y1": 908.9677734375
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.3,
      "sourceWidth": 24.858064675632914,
      "targetWidth": 23.4404296875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 946.0240926621835,
      "y1": 1190.2529296875
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.4,
      "sourceWidth": 46.37676411290323,
      "targetWidth": 46.880859375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 550.5980500252016,
      "y1": 377.6513671875
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 13.526556199596774,
      "targetWidth": 13.0224609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 580.5497101814516,
      "y1": 501.36474609375
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 3.8,
      "sourceWidth": 72.0576171875,
      "targetWidth": 71.62353515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 836.91015625,
      "y1": 654.378662109375
    },
    {
      "source": "operating_expenses",
      "target": "business_development",
      "value": 1.4,
      "sourceWidth": 26.547543174342106,
      "targetWidth": 26.044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 886.2127364309212,
      "y1": 799.5791015625
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 1.1,
      "sourceWidth": 20.858783922697373,
      "targetWidth": 22.13818359375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 909.9158999794407,
      "y1": 920.036865234375
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.5,
      "sourceWidth": 28.44379625822369,
      "targetWidth": 27.34716796875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 934.5671900699012,
      "y1": 1035.936767578125
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 2.1,
      "sourceWidth": 39.821314761513165,
      "targetWidth": 39.0673828125,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 968.6997455797697,
      "y1": 1173.32373046875
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 1.5,
      "sourceWidth": 28.44379625822369,
      "targetWidth": 28.6494140625,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1002.8323010896381,
      "y1": 1295.73486328125
    }
  ],
  "layout": {
    "scale": 19.663916015625,
    "nodes": {
      "us_consumer_services": {
        "x": 412.81201171875,
        "y": 416.71875,
        "width": 72.92578125,
        "height": 143.2470703125
      },
      "commercial_services": {
        "x": 412.81201171875,
        "y": 684.9814453125,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "international_card_services": {
        "x": 412.81201171875,
        "y": 888.1318359375,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "global_merchant_network": {
        "x": 412.81201171875,
        "y": 1073.05078125,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "amex_hub": {
        "x": 880.318359375,
        "y": 602.93994140625,
        "width": 72.92578125,
        "height": 302.12109375
      },
      "revenue": {
        "x": 1342.61572265625,
        "y": 656.33203125,
        "width": 72.92578125,
        "height": 302.12109375
      },
      "all_other": {
        "x": 1342.61572265625,
        "y": 1070.4462890625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "pretax_income": {
        "x": 1814.02880859375,
        "y": 527.40966796875,
        "width": 72.92578125,
        "height": 59.9033203125
      },
      "operating_expenses": {
        "x": 1814.02880859375,
        "y": 800.88134765625,
        "width": 72.92578125,
        "height": 216.1728515625
      },
      "provision_for_credit_losses": {
        "x": 1814.02880859375,
        "y": 1178.53271484375,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "net_income": {
        "x": 2281.53515625,
        "y": 354.2109375,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "tax": {
        "x": 2281.53515625,
        "y": 494.853515625,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "card_members_rewards": {
        "x": 2281.53515625,
        "y": 618.56689453125,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "business_development": {
        "x": 2281.53515625,
        "y": 786.556640625,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "card_member_services": {
        "x": 2281.53515625,
        "y": 908.9677734375,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "marketing": {
        "x": 2281.53515625,
        "y": 1022.26318359375,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "sales_employee_benefits": {
        "x": 2281.53515625,
        "y": 1153.7900390625,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "other_general_operating": {
        "x": 2281.53515625,
        "y": 1281.41015625,
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
            "x": 449.27490234375,
            "top": 320.3525390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 432.345703125,
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
                "text": "22% margin",
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
            "x": 449.27490234375,
            "top": 588.615234375,
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
            "x": 385.46484375,
            "top": 662.84326171875,
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
                "text": "23% net margin",
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
            "x": 449.27490234375,
            "top": 791.765625,
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
            "x": 385.46484375,
            "top": 852.97119140625,
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
                "text": "9% net margin",
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
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 385.46484375,
            "top": 1024.86767578125,
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
                "text": "54% net margin",
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
            "top": 463.599609375,
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
                "text": "+11% Y/Y",
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
            "top": 1084.77099609375,
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
            "x": 1850.49169921875,
            "top": 414.1142578125,
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
            "x": 1850.49169921875,
            "top": 1030.07666015625,
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
            "x": 1850.49169921875,
            "top": 1216.2978515625,
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
            "x": 2480.77880859375,
            "top": 321.65478515625,
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
                "text": "+9% Y/Y",
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
            "x": 2480.77880859375,
            "top": 472.71533203125,
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
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "10.6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.6%"
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
      "value": "181",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$181B"
    }
  ],
  "period": "Q1 FY24",
  "i18n": {
    "zh": {
      "name": "American Express · 2024 财年第一季度",
      "meta": {
        "title": "American Express 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": ""
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ],
          "notes": [
            "同比 +14%",
            "利润率 22%"
          ]
        },
        "commercial_services": {
          "label": [
            "商务",
            "服务"
          ],
          "notes": [
            "同比 +8%",
            "净利润率 23%"
          ]
        },
        "international_card_services": {
          "label": [
            "国际",
            "卡服务"
          ],
          "notes": [
            "同比 +8%",
            "净利润率 9%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ],
          "notes": [
            "同比 +7%",
            "净利润率 54%"
          ]
        },
        "amex_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
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
            "同比 +9%"
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
                "x": 449.27490234375,
                "top": 320.3525390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 432.345703125,
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
                    "text": "利润率 22%",
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
                "x": 449.27490234375,
                "top": 588.615234375,
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
                "x": 385.46484375,
                "top": 662.84326171875,
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
                    "text": "净利润率 23%",
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
                "x": 449.27490234375,
                "top": 791.765625,
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
                "x": 385.46484375,
                "top": 852.97119140625,
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
                    "text": "净利润率 9%",
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
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385.46484375,
                "top": 1024.86767578125,
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
                    "text": "净利润率 54%",
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
                "top": 463.599609375,
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
                    "text": "同比 +11%",
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
                "top": 1084.77099609375,
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
                "x": 1850.49169921875,
                "top": 414.1142578125,
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
                "x": 1850.49169921875,
                "top": 1030.07666015625,
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
                "x": 1850.49169921875,
                "top": 1216.2978515625,
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
                "x": 2480.77880859375,
                "top": 321.65478515625,
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
                    "text": "同比 +9%",
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
                "x": 2480.77880859375,
                "top": 472.71533203125,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"246.12451171875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"24.74267578125\" y=\"1191.55517578125\" width=\"242.2177734375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"145.8515625\" y=\"1243.64501953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"145.8515625\" y=\"1282.71240234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.6%</text><text x=\"145.8515625\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"white\">同比持平</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1243.64501953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1282.71240234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$134B</text><text x=\"460.9951171875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"white\">同比 +11%</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"148.4560546875\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1243.64501953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1282.71240234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$181B</text><text x=\"871.20263671875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"white\">同比 +12%</text></g><text x=\"239.61328125\" y=\"1388.1943359375\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text></g>"
    }
  }
});
