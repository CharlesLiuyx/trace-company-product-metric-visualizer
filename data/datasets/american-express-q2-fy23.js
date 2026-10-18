window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "american-express-q2-fy23",
  "name": "American Express · Q2 FY23",
  "company": "American Express",
  "meta": {
    "company": "American Express",
    "title": "American Express Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/american-express-q2-fy23.png",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"244.822265625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"26.044921875\" y=\"1191.55517578125\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"146.502685546875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"146.502685546875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">11.4%</text><text x=\"146.502685546875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+0.2pp Y/Y</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">$123B</text><text x=\"460.9951171875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+28% Y/Y</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">Loans and receivables</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">$179B</text><text x=\"871.20263671875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+15% Y/Y</text></g><text x=\"240.91552734375\" y=\"1389.49658203125\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = Common Equity Tier 1</text></g>",
  "nodes": [
    {
      "id": "us_consumer_services",
      "label": [
        "US Consumer",
        "Services"
      ],
      "value": 6.9,
      "notes": [
        "+17% Y/Y",
        "18% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$6.9B"
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
        "21% net margin"
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
        "+7% Y/Y",
        "7% net margin"
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
        "+43% Y/Y",
        "43% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$1.9B"
    },
    {
      "id": "amex_hub",
      "label": "",
      "value": 15.2,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$15.2B",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 15.1,
      "notes": [
        "+12% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "$15.1B"
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
      "valueText": "($0.1B)",
      "notes": []
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 2.7,
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$2.7B",
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 11.1,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($11.1B)",
      "notes": []
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
      "valueText": "($1.2B)",
      "notes": []
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 2.3,
      "notes": [
        "+11% Y/Y",
        "$2.89 EPS",
        "Source displays $1.2B; corrected by operator"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "$2.3B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 1,
      "valueText": "($0.4B)",
      "notes": []
    },
    {
      "id": "card_members_rewards",
      "label": [
        "Card members",
        "rewards"
      ],
      "value": 4,
      "type": "cost",
      "col": 4,
      "order": 2,
      "valueText": "($4.0B)",
      "notes": []
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
      "valueText": "($1.4B)",
      "notes": []
    },
    {
      "id": "card_member_services",
      "label": [
        "Card Member",
        "services"
      ],
      "value": 0.9,
      "type": "cost",
      "col": 4,
      "order": 4,
      "valueText": "($0.9B)",
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 1.4,
      "type": "cost",
      "col": 4,
      "order": 5,
      "valueText": "($1.4B)",
      "notes": []
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
      "valueText": "($1.9B)",
      "notes": []
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
      "valueText": "($1.5B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "us_consumer_services",
      "target": "amex_hub",
      "value": 6.9,
      "targetWidth": 141.94482421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 141.94482421875,
      "y0": 483.784423828125,
      "y1": 597.079833984375
    },
    {
      "source": "commercial_services",
      "target": "amex_hub",
      "value": 3.7,
      "targetWidth": 76.83251953125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 76.83251953125,
      "y0": 709.072998046875,
      "y1": 706.468505859375
    },
    {
      "source": "international_card_services",
      "target": "amex_hub",
      "value": 2.6,
      "targetWidth": 53.39208984375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 53.39208984375,
      "y0": 912.223388671875,
      "y1": 771.580810546875
    },
    {
      "source": "global_merchant_network",
      "target": "amex_hub",
      "value": 1.9,
      "targetWidth": 37.76513671875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 37.76513671875,
      "y0": 1098.444580078125,
      "y1": 817.159423828125
    },
    {
      "source": "amex_hub",
      "target": "revenue",
      "value": 15.1,
      "sourceWidth": 307.330078125,
      "targetWidth": 308.63232421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 679.7724609375,
      "y1": 715.584228515625
    },
    {
      "source": "amex_hub",
      "target": "all_other",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 834.73974609375,
      "y1": 1048.30810546875
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 2.7,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 589.266357421875,
      "y1": 447.321533203125
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 11.1,
      "sourceWidth": 227.89306640625,
      "targetWidth": 227.89306640625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 731.211181640625,
      "y1": 861.435791015625
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.2,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 857.529052734375,
      "y1": 1215.646728515625
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.3,
      "sourceWidth": 44.2763671875,
      "targetWidth": 44.2763671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 441.46142578125,
      "y1": 352.90869140625
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 469.459716796875,
      "y1": 524.154052734375
    },
    {
      "source": "operating_expenses",
      "target": "card_members_rewards",
      "value": 4,
      "sourceWidth": 80.7392578125,
      "targetWidth": 80.7392578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 787.85888671875,
      "y1": 631.58935546875
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
      "y0": 842.55322265625,
      "y1": 777.44091796875
    },
    {
      "source": "operating_expenses",
      "target": "card_member_services",
      "value": 0.9,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 866.644775390625,
      "y1": 890.085205078125
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.4,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 890.736328125,
      "y1": 1015.751953125
    },
    {
      "source": "operating_expenses",
      "target": "sales_employee_benefits",
      "value": 1.9,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 924.5947265625,
      "y1": 1142.06982421875
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 1.5,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 959.75537109375,
      "y1": 1265.783203125
    }
  ],
  "layout": {
    "scale": 20.439226769453644,
    "nodes": {
      "us_consumer_services": {
        "x": 393.2783203125,
        "y": 412.81201171875,
        "width": 72.92578125,
        "height": 141.94482421875
      },
      "commercial_services": {
        "x": 393.2783203125,
        "y": 670.65673828125,
        "width": 72.92578125,
        "height": 76.83251953125
      },
      "international_card_services": {
        "x": 393.2783203125,
        "y": 885.52734375,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "global_merchant_network": {
        "x": 393.2783203125,
        "y": 1079.56201171875,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "amex_hub": {
        "x": 855.57568359375,
        "y": 526.107421875,
        "width": 72.92578125,
        "height": 309.9345703125
      },
      "revenue": {
        "x": 1320.4775390625,
        "y": 561.26806640625,
        "width": 72.92578125,
        "height": 308.63232421875
      },
      "all_other": {
        "x": 1328.291015625,
        "y": 1047.005859375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "pretax_income": {
        "x": 1802.30859375,
        "y": 419.3232421875,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "operating_expenses": {
        "x": 1801.00634765625,
        "y": 747.4892578125,
        "width": 72.92578125,
        "height": 227.89306640625
      },
      "provision_for_credit_losses": {
        "x": 1808.81982421875,
        "y": 1203.275390625,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "net_income": {
        "x": 2262.00146484375,
        "y": 330.7705078125,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "tax": {
        "x": 2262.00146484375,
        "y": 518.2939453125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "card_members_rewards": {
        "x": 2262.00146484375,
        "y": 591.2197265625,
        "width": 72.92578125,
        "height": 80.7392578125
      },
      "business_development": {
        "x": 2262.00146484375,
        "y": 763.1162109375,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "card_member_services": {
        "x": 2262.00146484375,
        "y": 880.318359375,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "marketing": {
        "x": 2262.00146484375,
        "y": 1001.42724609375,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "sales_employee_benefits": {
        "x": 2262.00146484375,
        "y": 1122.5361328125,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "other_general_operating": {
        "x": 2262.00146484375,
        "y": 1250.15625,
        "width": 72.92578125,
        "height": 31.25390625
      }
    },
    "labels": {
      "us_consumer_services": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 308.63232421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 369.837890625,
            "top": 422.578857421875,
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
                "weight": 400
              },
              {
                "text": "18% net margin",
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
            "x": 429.7412109375,
            "top": 566.47705078125,
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
                "size": 39.0673828125,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 369.837890625,
            "top": 647.867431640625,
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
                "weight": 400
              },
              {
                "text": "21% net margin",
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
            "x": 429.7412109375,
            "top": 781.34765625,
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
                "size": 39.0673828125,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 369.837890625,
            "top": 851.017822265625,
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
                "weight": 400
              },
              {
                "text": "7% net margin",
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
            "x": 429.7412109375,
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
                "text": "+43% Y/Y",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 369.837890625,
            "top": 1037.239013671875,
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
                "weight": 400
              },
              {
                "text": "43% net margin",
                "size": 27.34716796875,
                "weight": 400,
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
            "x": 1356.9404296875,
            "top": 364.62890625,
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
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
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
            "x": 1364.75390625,
            "top": 1066.53955078125,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1838.771484375,
            "top": 306.02783203125,
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
            "x": 1837.46923828125,
            "top": 985.80029296875,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
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
            "top": 1238.43603515625,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
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
            "top": 281.28515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net income",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "$2.89 EPS",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "Source: $1.2B → $2.3B",
                "size": 23.4404296875,
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
            "top": 485.73779296875,
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
            "x": 2487.2900390625,
            "top": 586.0107421875,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "business_development": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 757.9072265625,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "card_member_services": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 875.109375,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 996.21826171875,
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
            "x": 2487.2900390625,
            "top": 1117.3271484375,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_general_operating": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 1244.947265625,
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
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
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
      "name": "美国运通 · 2023 财年第二季度",
      "meta": {
        "title": "美国运通 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "",
        "titleTextLength": 1800
      },
      "nodes": {
        "us_consumer_services": {
          "label": [
            "美国消费者",
            "服务"
          ],
          "notes": [
            "同比 +17%",
            "净利率 18%"
          ]
        },
        "commercial_services": {
          "label": [
            "商务",
            "服务"
          ],
          "notes": [
            "同比 +7%",
            "净利率 21%"
          ]
        },
        "international_card_services": {
          "label": [
            "国际",
            "卡服务"
          ],
          "notes": [
            "同比 +7%",
            "净利率 7%"
          ]
        },
        "global_merchant_network": {
          "label": [
            "全球商户",
            "与网络服务"
          ],
          "notes": [
            "同比 +43%",
            "净利率 43%"
          ]
        },
        "amex_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
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
            "同比 +11%",
            "每股收益 $2.89",
            "原图标为 $1.2B；操作员已更正"
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
          "us_consumer_services": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 308.63232421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 369.837890625,
                "top": 422.578857421875,
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
                    "weight": 400
                  },
                  {
                    "text": "净利率 18%",
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
                "x": 429.7412109375,
                "top": 566.47705078125,
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
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 369.837890625,
                "top": 647.867431640625,
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
                    "weight": 400
                  },
                  {
                    "text": "净利率 21%",
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
                "x": 429.7412109375,
                "top": 781.34765625,
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
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 369.837890625,
                "top": 851.017822265625,
                "anchor": "end",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "卡服务",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "净利率 7%",
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
                "x": 429.7412109375,
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
                    "text": "同比 +43%",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 369.837890625,
                "top": 1037.239013671875,
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
                    "weight": 400
                  },
                  {
                    "text": "净利率 43%",
                    "size": 27.34716796875,
                    "weight": 400,
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
                "x": 1356.9404296875,
                "top": 364.62890625,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
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
                "x": 1364.75390625,
                "top": 1066.53955078125,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1838.771484375,
                "top": 306.02783203125,
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
                "x": 1837.46923828125,
                "top": 985.80029296875,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
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
                "top": 1238.43603515625,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
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
                "top": 281.28515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "每股收益 $2.89",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "原图 $1.2B → 更正 $2.3B",
                    "size": 23.4404296875,
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
                "top": 485.73779296875,
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
                "x": 2487.2900390625,
                "top": 586.0107421875,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "business_development": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 757.9072265625,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "card_member_services": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 875.109375,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 996.21826171875,
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
                "x": 2487.2900390625,
                "top": 1117.3271484375,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_general_operating": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 1244.947265625,
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
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"97.66845703125\" y=\"244.822265625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"26.044921875\" y=\"1191.55517578125\" width=\"240.91552734375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"146.502685546875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"146.502685546875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">11.4%</text><text x=\"146.502685546875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +0.2pp</text></g><g><rect x=\"274.77392578125\" y=\"1191.55517578125\" width=\"372.4423828125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"460.9951171875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"460.9951171875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">$123B</text><text x=\"460.9951171875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +28%</text></g><g><rect x=\"656.33203125\" y=\"1191.55517578125\" width=\"429.7412109375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#006ad5\"/><text x=\"871.20263671875\" y=\"1239.73828125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" fill=\"white\">贷款与应收款</text><text data-operating-metric=\"loans_receivables\" x=\"871.20263671875\" y=\"1280.10791015625\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"white\">$179B</text><text x=\"871.20263671875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +15%</text></g><text x=\"240.91552734375\" y=\"1389.49658203125\" font-size=\"27.34716796875\" fill=\"#777\">CET1 = 普通股一级资本</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "11.4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "11.4%"
    },
    {
      "id": "deposits",
      "value": "123",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$123B"
    },
    {
      "id": "loans_receivables",
      "value": "179",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$179B"
    }
  ]
});
