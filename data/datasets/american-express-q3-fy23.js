window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "american-express-q3-fy23",
  "name": "American Express · Q3 FY23",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/american-express-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 191,
    "titleSize": 104,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "logoWidth": 255.240234375,
    "logoHeight": 255.240234375,
    "logoY": 227.89306640625,
    "logoViewBox": "0 0 196 196",
    "logoSvg": "<rect width=\"196\" height=\"196\" fill=\"#006ad5\"/><text x=\"98\" y=\"94\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">AMERICAN</text><text x=\"98\" y=\"132\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">EXPRESS</text>",
    "logoX": 770.9296875
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"244.822265625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"24.74267578125\" y=\"1191.55517578125\" width=\"242.2177734375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"145.8515625\" y=\"1238.43603515625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"145.8515625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.7%</text><text x=\"145.8515625\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+0.1 pp Y/Y</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1238.43603515625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$124B</text><text x=\"460.9951171875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+13% Y/Y</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1238.43603515625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$183B</text><text x=\"871.20263671875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+15% Y/Y</text></g><text x=\"240.91552734375\" y=\"1388.1943359375\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"170.59423828125\" y=\"1437.6796875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#111\">Source: Quarterly results</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 7.2,
      "notes": [
        "+16% Y/Y",
        "22% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$7.2B"
    },
    {
      "id": "commercial_services",
      "label": [
        "Commercial",
        "Services"
      ],
      "value": 3.7,
      "notes": [
        "+7% Y/Y",
        "23% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$3.7B"
    },
    {
      "id": "international_card_services",
      "label": [
        "International",
        "Card Services"
      ],
      "value": 2.6,
      "notes": [
        "+17% Y/Y",
        "17% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.6B"
    },
    {
      "id": "global_merchant_network",
      "label": [
        "Global Merchant",
        "& Network Service"
      ],
      "value": 1.9,
      "notes": [
        "+11% Y/Y",
        "53% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.9B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 15.4,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$15.4B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 15.4,
      "notes": [
        "+13% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$15.4B"
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
      "value": 11,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($11.0B)"
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
      "value": 2.5,
      "notes": [
        "+30% Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$2.5B"
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
      "value": 1,
      "type": "cost",
      "col": 4,
      "order": 4,
      "valueText": "($1.0B)"
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
      "value": 2,
      "type": "cost",
      "col": 4,
      "order": 6,
      "valueText": "($2.0B)"
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
      "value": 7.2,
      "targetWidth": 131,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 131,
      "y0": 471.5,
      "y1": 603.5
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 3.7,
      "targetWidth": 68,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 68,
      "y0": 710,
      "y1": 703
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 2.6,
      "targetWidth": 49,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 49,
      "y0": 907.5,
      "y1": 761.5
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.9,
      "targetWidth": 32,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 34,
      "y0": 1088,
      "y1": 802
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 15.4,
      "sourceWidth": 278,
      "targetWidth": 278,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 677,
      "y1": 711
    },
    {
      "source": "amex_hub",
      "target": "all_other",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 817,
      "y1": 956
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.2,
      "sourceWidth": 57,
      "targetWidth": 56,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 600.5,
      "y1": 431
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 11,
      "sourceWidth": 199,
      "targetWidth": 201,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 728.5,
      "y1": 811.5
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.2,
      "sourceWidth": 22,
      "targetWidth": 24,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 839,
      "y1": 1140
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.5,
      "sourceWidth": 45,
      "targetWidth": 45,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 425.5,
      "y1": 311.5
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 11,
      "targetWidth": 12,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 453.5,
      "y1": 498
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 3.8,
      "sourceWidth": 70,
      "targetWidth": 69,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 746,
      "y1": 626.5
    },
    {
      "source": "operating_expenses",
      "target": "business_development",
      "value": 1.4,
      "sourceWidth": 26,
      "targetWidth": 25,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 794,
      "y1": 760.5
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 1,
      "sourceWidth": 18,
      "targetWidth": 17,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 816,
      "y1": 876.5
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.2,
      "sourceWidth": 23,
      "targetWidth": 23,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 836.5,
      "y1": 990.5
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 2,
      "sourceWidth": 36,
      "targetWidth": 38,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 866,
      "y1": 1123
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 1.6,
      "sourceWidth": 28,
      "targetWidth": 30,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 898,
      "y1": 1241
    }
  ],
  "layout": {
    "scale": 18,
    "nodes": {
      "us_consumer_services": {
        "x": 397,
        "y": 406,
        "width": 73,
        "height": 131
      },
      "commercial_services": {
        "x": 397,
        "y": 676,
        "width": 73,
        "height": 68
      },
      "international_card_services": {
        "x": 397,
        "y": 883,
        "width": 73,
        "height": 49
      },
      "global_merchant_network": {
        "x": 397,
        "y": 1071,
        "width": 73,
        "height": 34
      },
      "amex_hub": {
        "x": 864,
        "y": 538,
        "width": 73,
        "height": 280
      },
      "revenue": {
        "x": 1331,
        "y": 572,
        "width": 73,
        "height": 278
      },
      "all_other": {
        "x": 1331,
        "y": 955,
        "width": 73,
        "height": 2
      },
      "pretax_income": {
        "x": 1798,
        "y": 403,
        "width": 73,
        "height": 56
      },
      "operating_expenses": {
        "x": 1796,
        "y": 711,
        "width": 73,
        "height": 201
      },
      "provision_for_credit_losses": {
        "x": 1803,
        "y": 1128,
        "width": 73,
        "height": 24
      },
      "net_income": {
        "x": 2265,
        "y": 289,
        "width": 74,
        "height": 45
      },
      "tax": {
        "x": 2265,
        "y": 492,
        "width": 74,
        "height": 12
      },
      "card_members_rewards": {
        "x": 2265,
        "y": 592,
        "width": 74,
        "height": 69
      },
      "business_development": {
        "x": 2265,
        "y": 748,
        "width": 74,
        "height": 25
      },
      "card_member_services": {
        "x": 2265,
        "y": 868,
        "width": 74,
        "height": 17
      },
      "marketing": {
        "x": 2265,
        "y": 979,
        "width": 74,
        "height": 23
      },
      "sales_employee_benefits": {
        "x": 2265,
        "y": 1104,
        "width": 74,
        "height": 38
      },
      "other_general_operating": {
        "x": 2265,
        "y": 1226,
        "width": 74,
        "height": 30
      }
    },
    "labels": {
      "amex_hub": {
        "blocks": []
      },
      "us_consumer_services": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 307.330078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "size": 27.34716796875,
                "weight": 400,
                "text": "+16% Y/Y",
                "color": "#777"
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 416.71875,
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
                "size": 27.34716796875,
                "weight": 400,
                "text": "22% net margin",
                "color": "#777"
              }
            ]
          }
        ]
      },
      "commercial_services": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 575.5927734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "size": 27.34716796875,
                "weight": 400,
                "text": "+7% Y/Y",
                "color": "#777"
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 644.61181640625,
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
                "size": 27.34716796875,
                "weight": 400,
                "text": "23% net margin",
                "color": "#777"
              }
            ]
          }
        ]
      },
      "international_card_services": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 780.04541015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "size": 27.34716796875,
                "weight": 400,
                "text": "+17% Y/Y",
                "color": "#777"
              }
            ]
          },
          {
            "x": 367.2333984375,
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
                "size": 27.34716796875,
                "weight": 400,
                "text": "17% net margin",
                "color": "#777"
              }
            ]
          }
        ]
      },
      "global_merchant_network": {
        "blocks": [
          {
            "x": 433.64794921875,
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
                "size": 27.34716796875,
                "weight": 400,
                "text": "+11% Y/Y",
                "color": "#777"
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 1028.7744140625,
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
                "size": 27.34716796875,
                "weight": 400,
                "text": "53% net margin",
                "color": "#777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1355.63818359375,
            "top": 375.046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "size": 31.25390625,
                "weight": 800,
                "text": "(net of interest expenses)"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "size": 27.34716796875,
                "weight": 400,
                "text": "+13% Y/Y",
                "color": "#777"
              }
            ]
          }
        ]
      },
      "all_other": {
        "blocks": [
          {
            "x": 1367.3583984375,
            "top": 968.87109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "All Other",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "(noninterest loss)",
                "size": 36.462890625,
                "weight": 800
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
            "x": 1833.5625,
            "top": 286.494140625,
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
            "x": 1833.5625,
            "top": 924.5947265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Noninterest",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 800
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
            "x": 1833.5625,
            "top": 1158.9990234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Provision for",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "credit losses",
                "size": 36.462890625,
                "weight": 800
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
            "x": 2478.17431640625,
            "top": 244.822265625,
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
                "size": 27.34716796875,
                "weight": 400,
                "text": "+30% Y/Y",
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 440.1591796875,
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
            "x": 2497.7080078125,
            "top": 569.08154296875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
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
            "x": 2497.7080078125,
            "top": 700.6083984375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
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
            "x": 2497.7080078125,
            "top": 836.0419921875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
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
            "x": 2497.7080078125,
            "top": 966.2666015625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
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
            "x": 2497.7080078125,
            "top": 1074.35302734375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
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
            "x": 2497.7080078125,
            "top": 1198.06640625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
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
      "name": "美国运通 · 2023 财年第三季度",
      "meta": {
        "title": "美国运通 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "",
        "titleSize": 100
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ],
          "notes": [
            "同比 +16%",
            "净利率 22%"
          ]
        },
        "commercial_services": {
          "label": [
            "商务",
            "服务"
          ],
          "notes": [
            "同比 +7%",
            "净利率 23%"
          ]
        },
        "international_card_services": {
          "label": [
            "国际",
            "卡服务"
          ],
          "notes": [
            "同比 +17%",
            "净利率 17%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ],
          "notes": [
            "同比 +11%",
            "净利率 53%"
          ]
        },
        "amex_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +13%"
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
            "同比 +30%"
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
                "x": 433.64794921875,
                "top": 307.330078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "同比 +16%",
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 416.71875,
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
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "净利率 22%",
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "commercial_services": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 575.5927734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "同比 +7%",
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 644.61181640625,
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
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "净利率 23%",
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "international_card_services": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 780.04541015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "同比 +17%",
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 367.2333984375,
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
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "净利率 17%",
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "global_merchant_network": {
            "blocks": [
              {
                "x": 433.64794921875,
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
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "同比 +11%",
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 1028.7744140625,
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
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "净利率 53%",
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1355.63818359375,
                "top": 375.046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "size": 31.25390625,
                    "weight": 800,
                    "text": "（扣除利息支出后）"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "同比 +13%",
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 1367.3583984375,
                "top": 968.87109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "所有其他",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "（非利息亏损）",
                    "size": 36.462890625,
                    "weight": 800
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
                "x": 1833.5625,
                "top": 286.494140625,
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
                "x": 1833.5625,
                "top": 924.5947265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 800
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
                "x": 1833.5625,
                "top": 1158.9990234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "拨备",
                    "size": 36.462890625,
                    "weight": 800
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
                "x": 2478.17431640625,
                "top": 244.822265625,
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
                    "size": 27.34716796875,
                    "weight": 400,
                    "text": "同比 +30%",
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 440.1591796875,
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
                "x": 2497.7080078125,
                "top": 569.08154296875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
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
                "x": 2497.7080078125,
                "top": 700.6083984375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
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
                "x": 2497.7080078125,
                "top": 836.0419921875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
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
                "x": 2497.7080078125,
                "top": 966.2666015625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
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
                "x": 2497.7080078125,
                "top": 1074.35302734375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
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
                "x": 2497.7080078125,
                "top": 1198.06640625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"244.822265625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"24.74267578125\" y=\"1191.55517578125\" width=\"242.2177734375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"145.8515625\" y=\"1238.43603515625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"145.8515625\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">10.7%</text><text x=\"145.8515625\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +0.1 pp</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1238.43603515625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$124B</text><text x=\"460.9951171875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +13%</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1238.43603515625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"800\" fill=\"white\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$183B</text><text x=\"871.20263671875\" y=\"1316.57080078125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +15%</text></g><text x=\"240.91552734375\" y=\"1388.1943359375\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"170.59423828125\" y=\"1437.6796875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#111\">来源：季度业绩</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "10.7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.7%"
    },
    {
      "id": "deposits",
      "value": "124",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$124B"
    },
    {
      "id": "loans_receivables",
      "value": "183",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$183B"
    }
  ]
});
