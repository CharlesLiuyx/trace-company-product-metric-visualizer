window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "goldman-sachs-q4-fy24",
  "name": "Goldman Sachs · Q4 FY24",
  "company": "Goldman Sachs",
  "meta": {
    "company": "Goldman Sachs",
    "title": "Goldman Sachs Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/goldman-sachs-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2508,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 244,
    "logoHeight": 242,
    "logoY": 249,
    "logoViewBox": "0 0 244 242",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"244\" height=\"242\" fill=\"#709ac3\"/>\n    <text x=\"12\" y=\"58\" font-family=\"Georgia,Times New Roman,serif\" font-size=\"57\" font-weight=\"900\" fill=\"#ffffff\">Goldman</text>\n    <text x=\"12\" y=\"111\" font-family=\"Georgia,Times New Roman,serif\" font-size=\"57\" font-weight=\"900\" fill=\"#ffffff\">Sachs</text>\n  "
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#6b96c3",
        "label": "#6a96c3"
      },
      "hub": {
        "node": "#6b96c3",
        "label": "#6a96c3"
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
      "source": "#b4c9dc",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"123\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text>\n      <g fill=\"#6b96c3\">\n        <rect x=\"118\" y=\"1133\" width=\"240\" height=\"148\" rx=\"29\"/>\n        <rect x=\"368\" y=\"1133\" width=\"349\" height=\"148\" rx=\"29\"/>\n      </g>\n      <g fill=\"#ffffff\" text-anchor=\"middle\">\n        <text x=\"238\" y=\"1186\" font-size=\"29\" font-weight=\"800\">CET1 ratio</text>\n        <text x=\"238\" y=\"1226\" font-size=\"28\" font-weight=\"400\" data-operating-metric=\"cet1\">15.0%</text>\n        <text x=\"238\" y=\"1258\" font-size=\"22\" font-weight=\"400\">+0.6pp Y/Y</text>\n        <text x=\"542.5\" y=\"1186\" font-size=\"29\" font-weight=\"800\">Annualized ROE</text>\n        <text x=\"542.5\" y=\"1226\" font-size=\"28\" font-weight=\"400\" data-operating-metric=\"roe\">14.6%</text>\n        <text x=\"542.5\" y=\"1258\" font-size=\"22\" font-weight=\"400\">+7.5pp Y/Y</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"28\" font-weight=\"400\">\n        <text x=\"244\" y=\"1320\">CET1 = Common Equity Tier 1</text>\n        <text x=\"162\" y=\"1352\">ROE = Return on average common equity</text>\n      </g>\n    </g>",
  "layout": {
    "scale": 14.827586,
    "nodes": {
      "global_banking_markets": {
        "x": 398.4873046875,
        "y": 397.18505859375,
        "width": 72.92578125,
        "height": 179.7099609375
      },
      "asset_wealth_management": {
        "x": 398.4873046875,
        "y": 764.41845703125,
        "width": 72.92578125,
        "height": 101.5751953125
      },
      "platform_solutions": {
        "x": 398.4873046875,
        "y": 1056.12158203125,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "revenue": {
        "x": 1017.05419921875,
        "y": 652.42529296875,
        "width": 72.92578125,
        "height": 294.3076171875
      },
      "pretax_income": {
        "x": 1644.73681640625,
        "y": 488.34228515625,
        "width": 72.92578125,
        "height": 110.69091796875
      },
      "operating_expenses": {
        "x": 1642.13232421875,
        "y": 876.41162109375,
        "width": 72.92578125,
        "height": 175.80322265625
      },
      "provision_for_credit_loss": {
        "x": 1646.0390625,
        "y": 1234.529296875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "net_income": {
        "x": 2267.21044921875,
        "y": 286.494140625,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "tax": {
        "x": 2267.21044921875,
        "y": 419.3232421875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "compensation_benefits": {
        "x": 2267.21044921875,
        "y": 496.15576171875,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "transaction_based": {
        "x": 2267.21044921875,
        "y": 658.9365234375,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "market_development": {
        "x": 2267.21044921875,
        "y": 781.34765625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "communication_technology": {
        "x": 2267.21044921875,
        "y": 872.5048828125,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "da": {
        "x": 2267.21044921875,
        "y": 983.19580078125,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "occupancy": {
        "x": 2267.21044921875,
        "y": 1089.97998046875,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "professional_fees": {
        "x": 2267.21044921875,
        "y": 1187.6484375,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "other": {
        "x": 2267.21044921875,
        "y": 1290.52587890625,
        "width": 72.92578125,
        "height": 14.32470703125
      }
    },
    "labels": {
      "global_banking_markets": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 311.23681640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+33% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 364.62890625,
            "top": 426.485595703125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Global Banking &",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "Markets",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "35% net margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "asset_wealth_management": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 677.16796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 364.62890625,
            "top": 754.651611328125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Asset & Wealth",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "29% net margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "platform_solutions": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 964.96435546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 364.62890625,
            "top": 1026.169921875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Platform Solutions",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "(29%) net margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1053.51708984375,
            "top": 507.8759765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
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
            "x": 1681.19970703125,
            "top": 380.255859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Pretax income",
                "size": 37.76513671875,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1681.19970703125,
            "top": 1074.35302734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
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
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "provision_for_credit_loss": {
        "blocks": [
          {
            "x": 1681.19970703125,
            "top": 1264.48095703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2485.98779296875,
            "top": 252.6357421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net income",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+105% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 394.58056640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 800
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
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 505.271484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Compensation",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "& benefits",
                "size": 29.95166015625,
                "weight": 800
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
      "transaction_based": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 656.33203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Transaction based",
                "size": 29.95166015625,
                "weight": 800
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
      "market_development": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 755.302734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Market dev.",
                "size": 29.95166015625,
                "weight": 800
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
      "communication_technology": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 847.76220703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Communication,",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "Technology ($0.5B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 959.75537109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "D&A",
                "size": 29.95166015625,
                "weight": 800
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
      "occupancy": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 1061.33056640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Occupancy",
                "size": 29.95166015625,
                "weight": 800
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
      "professional_fees": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 1157.69677734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Professional fees",
                "size": 29.95166015625,
                "weight": 800
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
      "other": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 1264.48095703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 800
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
  "nonNodeMetrics": [
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "global_banking_markets",
      "label": [
        "Global Banking &",
        "Markets"
      ],
      "value": 8.5,
      "notes": [
        "+33% Y/Y",
        "35% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "asset_wealth_management",
      "label": [
        "Asset & Wealth",
        "Management"
      ],
      "value": 4.7,
      "notes": [
        "+8% Y/Y",
        "29% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "platform_solutions",
      "label": "Platform Solutions",
      "value": 0.7,
      "notes": [
        "+16% Y/Y",
        "(29%) net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 13.9,
      "notes": [
        "+23% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 5.3,
      "type": "profit",
      "col": 2,
      "order": 0
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 8.3,
      "type": "cost",
      "col": 2,
      "order": 1
    },
    {
      "id": "provision_for_credit_loss",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 0.4,
      "type": "cost",
      "col": 2,
      "order": 2
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 4.1,
      "notes": [
        "+105% Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 0
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 1
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 3.8,
      "type": "cost",
      "col": 3,
      "order": 2
    },
    {
      "id": "transaction_based",
      "label": "Transaction based",
      "value": 1.9,
      "type": "cost",
      "col": 3,
      "order": 3
    },
    {
      "id": "market_development",
      "label": "Market dev.",
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 4
    },
    {
      "id": "communication_technology",
      "label": [
        "Communication,",
        "Technology"
      ],
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 5
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 6
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 7
    },
    {
      "id": "professional_fees",
      "label": "Professional fees",
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 8
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.7,
      "type": "cost",
      "col": 3,
      "order": 9
    }
  ],
  "links": [
    {
      "source": "global_banking_markets",
      "target": "revenue",
      "value": 8.5,
      "sourceWidth": 179.7099609375,
      "targetWidth": 179.7099609375,
      "targetOrder": 0
    },
    {
      "source": "asset_wealth_management",
      "target": "revenue",
      "value": 4.7,
      "sourceWidth": 101.5751953125,
      "targetWidth": 101.5751953125,
      "targetOrder": 1
    },
    {
      "source": "platform_solutions",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 14.32470703125,
      "targetWidth": 13.0224609375,
      "targetOrder": 2,
      "linkTint": "#b4c9dc"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.3,
      "sourceWidth": 111.9931640625,
      "targetWidth": 110.69091796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 8.3,
      "sourceWidth": 175.80322265625,
      "targetWidth": 175.80322265625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_loss",
      "value": 0.4,
      "sourceWidth": 6.51123046875,
      "targetWidth": 7.8134765625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4.1,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.1,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 3.8,
      "sourceWidth": 79.43701171875,
      "targetWidth": 79.43701171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "transaction_based",
      "value": 1.9,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "market_development",
      "value": 0.2,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "communication_technology",
      "value": 0.5,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.5,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.2,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.5,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 6,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.7,
      "sourceWidth": 18.2314453125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 7,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Goldman Sachs · 2024 财年第四季度",
      "meta": {
        "title": "Goldman Sachs 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": ""
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"123\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text>\n      <g fill=\"#6b96c3\">\n        <rect x=\"118\" y=\"1133\" width=\"240\" height=\"148\" rx=\"29\"/>\n        <rect x=\"368\" y=\"1133\" width=\"349\" height=\"148\" rx=\"29\"/>\n      </g>\n      <g fill=\"#ffffff\" text-anchor=\"middle\">\n        <text x=\"238\" y=\"1186\" font-size=\"29\" font-weight=\"800\">CET1 比率</text>\n        <text x=\"238\" y=\"1226\" font-size=\"28\" font-weight=\"400\" data-operating-metric=\"cet1\">15.0%</text>\n        <text x=\"238\" y=\"1258\" font-size=\"22\" font-weight=\"400\">同比 +0.6 个百分点</text>\n        <text x=\"542.5\" y=\"1186\" font-size=\"29\" font-weight=\"800\">年化 ROE</text>\n        <text x=\"542.5\" y=\"1226\" font-size=\"28\" font-weight=\"400\" data-operating-metric=\"roe\">14.6%</text>\n        <text x=\"542.5\" y=\"1258\" font-size=\"22\" font-weight=\"400\">同比 +7.5 个百分点</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"28\" font-weight=\"400\">\n        <text x=\"244\" y=\"1320\">CET1 = 普通股一级资本</text>\n        <text x=\"162\" y=\"1352\">ROE = 平均普通股股东权益回报率</text>\n      </g>\n    </g>",
      "nodes": {
        "global_banking_markets": {
          "label": "全球银行与市场",
          "notes": [
            "同比 +33%",
            "净利率 35%"
          ]
        },
        "asset_wealth_management": {
          "label": "资产与财富管理",
          "notes": [
            "同比 +8%",
            "净利率 29%"
          ]
        },
        "platform_solutions": {
          "label": "平台解决方案",
          "notes": [
            "同比 +16%",
            "净利率 (29%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +23%"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "provision_for_credit_loss": {
          "label": "信用损失拨备"
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +105%"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "transaction_based": {
          "label": "交易相关"
        },
        "market_development": {
          "label": "市场开发"
        },
        "communication_technology": {
          "label": "通信与技术"
        },
        "da": {
          "label": "折旧与摊销"
        },
        "occupancy": {
          "label": "场地占用"
        },
        "professional_fees": {
          "label": "专业费用"
        },
        "other": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "global_banking_markets": {
            "blocks": [
              {
                "x": 434.9501953125,
                "top": 311.23681640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +33%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 364.62890625,
                "top": 449.926025390625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "全球银行与市场",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "净利率 35%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "asset_wealth_management": {
            "blocks": [
              {
                "x": 434.9501953125,
                "top": 677.16796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 364.62890625,
                "top": 778.092041015625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "资产与财富管理",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "净利率 29%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "platform_solutions": {
            "blocks": [
              {
                "x": 434.9501953125,
                "top": 964.96435546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 364.62890625,
                "top": 1026.169921875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "平台解决方案",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "净利率 (29%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1053.51708984375,
                "top": 507.8759765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
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
                "x": 1681.19970703125,
                "top": 380.255859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 37.76513671875,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1681.19970703125,
                "top": 1074.35302734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 37.76513671875,
                    "weight": 800
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
          "provision_for_credit_loss": {
            "blocks": [
              {
                "x": 1681.19970703125,
                "top": 1264.48095703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "信用损失拨备",
                    "size": 37.76513671875,
                    "weight": 800
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
          "net_income": {
            "blocks": [
              {
                "x": 2485.98779296875,
                "top": 252.6357421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +105%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 394.58056640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 800
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
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 505.271484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 29.95166015625,
                    "weight": 800
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
          "transaction_based": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 656.33203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "交易相关",
                    "size": 29.95166015625,
                    "weight": 800
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
          "market_development": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 755.302734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "市场开发",
                    "size": 29.95166015625,
                    "weight": 800
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
          "communication_technology": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 847.76220703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "通信与技术（$0.5B）",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 959.75537109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 29.95166015625,
                    "weight": 800
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
          "occupancy": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 1061.33056640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 29.95166015625,
                    "weight": 800
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
          "professional_fees": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 1157.69677734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 29.95166015625,
                    "weight": 800
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
          "other": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 1264.48095703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 800
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
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "15.0",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "15.0%"
    },
    {
      "id": "roe",
      "value": "14.6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.6%"
    }
  ]
});
