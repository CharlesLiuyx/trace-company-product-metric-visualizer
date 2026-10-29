window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "morgan-stanley-q1-fy23",
  "name": "Morgan Stanley · Q1 FY23",
  "company": "Morgan Stanley",
  "meta": {
    "company": "Morgan Stanley",
    "title": "Morgan Stanley Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/morgan-stanley-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 115,
    "titleWeight": 800,
    "titleTextLength": 2492,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
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
      "source": "#858585",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"89\" y=\"285\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><text x=\"628\" y=\"371\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"122\" textLength=\"770\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000\" data-typography-role=\"brand\">Morgan Stanley</text><rect x=\"150\" y=\"1152\" width=\"242\" height=\"149\" rx=\"30\" fill=\"#000\"/><rect x=\"400\" y=\"1152\" width=\"272\" height=\"149\" rx=\"30\" fill=\"#000\"/><g fill=\"#ddd\" text-anchor=\"middle\" font-size=\"28\"><text x=\"271\" y=\"1205\" font-weight=\"800\">CET1 ratio</text><text data-operating-metric=\"cet1_ratio\" x=\"271\" y=\"1244\">15.1%</text><text x=\"271\" y=\"1276\" font-size=\"23\">+0.6pp Y/Y</text><text x=\"536\" y=\"1205\" font-weight=\"800\">ROTCE</text><text data-operating-metric=\"rotce\" x=\"536\" y=\"1244\">16.9%</text><text x=\"536\" y=\"1276\" font-size=\"23\">(2.9pp) Y/Y</text></g><g fill=\"#666\" font-size=\"28\"><text x=\"242\" y=\"1340\">CET1 = Common Equity Tier 1</text><text x=\"89\" y=\"1385\">ROTCE = Return on average tangible common equity</text></g></g>",
  "layout": {
    "scale": 20.6,
    "nodes": {
      "institutional_securities": {
        "x": 390,
        "y": 426,
        "width": 72,
        "height": 112
      },
      "wealth_management": {
        "x": 390,
        "y": 688,
        "width": 72,
        "height": 155
      },
      "investment_management": {
        "x": 390,
        "y": 982,
        "width": 72,
        "height": 33
      },
      "segment_revenue": {
        "x": 861,
        "y": 560,
        "width": 70,
        "height": 303
      },
      "revenue": {
        "x": 1347,
        "y": 603,
        "width": 72,
        "height": 299
      },
      "eliminations": {
        "x": 1342,
        "y": 1055,
        "width": 72,
        "height": 2
      },
      "pretax_income": {
        "x": 1795,
        "y": 515,
        "width": 71,
        "height": 64
      },
      "non_interest_expenses": {
        "x": 1797,
        "y": 775,
        "width": 71,
        "height": 232
      },
      "operating_expenses": {
        "x": 1798,
        "y": 1218,
        "width": 72,
        "height": 2
      },
      "net_income": {
        "x": 2259,
        "y": 386,
        "width": 72,
        "height": 52
      },
      "tax": {
        "x": 2259,
        "y": 524,
        "width": 72,
        "height": 11
      },
      "compensation_benefits": {
        "x": 2259,
        "y": 596,
        "width": 72,
        "height": 131
      },
      "information_communications": {
        "x": 2259,
        "y": 928,
        "width": 72,
        "height": 21
      },
      "brokerage_clearing_exchange": {
        "x": 2259,
        "y": 811,
        "width": 72,
        "height": 19
      },
      "professional_services": {
        "x": 2259,
        "y": 1044,
        "width": 72,
        "height": 19
      },
      "occupancy": {
        "x": 2259,
        "y": 1160,
        "width": 72,
        "height": 9
      },
      "marketing_business_development": {
        "x": 2259,
        "y": 1267,
        "width": 72,
        "height": 5
      },
      "other_expenses": {
        "x": 2259,
        "y": 1361,
        "width": 72,
        "height": 19
      }
    },
    "labels": {
      "segment_revenue": {
        "blocks": []
      },
      "institutional_securities": {
        "blocks": [
          {
            "x": 338.583984375,
            "top": 411.509765625,
            "lines": [
              {
                "text": "Institutional",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Securities",
                "size": 40,
                "weight": 800
              },
              {
                "text": "28% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "end",
            "lineGap": 8
          },
          {
            "x": 429.7412109375,
            "top": 325.5615234375,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(11%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "wealth_management": {
        "blocks": [
          {
            "x": 334.67724609375,
            "top": 698.00390625,
            "lines": [
              {
                "text": "Wealth",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 40,
                "weight": 800
              },
              {
                "text": "26% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "end",
            "lineGap": 8
          },
          {
            "x": 425.83447265625,
            "top": 595.12646484375,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "investment_management": {
        "blocks": [
          {
            "x": 334.67724609375,
            "top": 916.78125,
            "lines": [
              {
                "text": "Investment",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 40,
                "weight": 800
              },
              {
                "text": "13% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "end",
            "lineGap": 8
          },
          {
            "x": 425.83447265625,
            "top": 884.22509765625,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1379.07861328125,
            "top": 451.87939453125,
            "lines": [
              {
                "text": "Revenue",
                "size": 41,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 41,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1379.07861328125,
            "top": 944.12841796875,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1833.5625,
            "top": 402.39404296875,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "non_interest_expenses": {
        "blocks": [
          {
            "x": 1823.14453125,
            "top": 1023.5654296875,
            "lines": [
              {
                "text": "Non interest",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1833.5625,
            "top": 1231.9248046875,
            "lines": [
              {
                "text": "Provision for",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 325.5615234375,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(18%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 487.0400390625,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 600.33544921875,
            "lines": [
              {
                "text": "Compensation",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "brokerage_clearing_exchange": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 755.302734375,
            "lines": [
              {
                "text": "Brokerage, clearing",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& exchange fees",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "information_communications": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 877.7138671875,
            "lines": [
              {
                "text": "Information &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "communications",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1013.1474609375,
            "lines": [
              {
                "text": "Professional",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "services",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1121.23388671875,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "marketing_business_development": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1213.693359375,
            "lines": [
              {
                "text": "Marketing &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "business dev.",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 1350.42919921875,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "institutional_securities",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Institutional",
        "Securities"
      ],
      "value": 6.8,
      "notes": [],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "wealth_management",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Wealth",
        "Management"
      ],
      "value": 6.6,
      "notes": [],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "investment_management",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Investment",
        "Management"
      ],
      "value": 1.3,
      "notes": [],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 14.7,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": []
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 14.5,
      "notes": [],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Pretax income",
      "value": 3.8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "non_interest_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Non interest",
        "expenses"
      ],
      "value": 10.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 0.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net income",
      "value": 3,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$3.0B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "compensation_benefits",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 6.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "information_communications",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": [
        "Information &",
        "communications"
      ],
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "brokerage_clearing_exchange",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": [
        "Brokerage, clearing",
        "& exchange fees"
      ],
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "professional_services",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": [
        "Professional",
        "services"
      ],
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "occupancy",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Occupancy",
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "marketing_business_development",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": [
        "Marketing &",
        "business dev."
      ],
      "value": 0.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Other",
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "institutional_securities",
      "target": "segment_revenue",
      "value": 6.8,
      "width": 112,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585",
      "targetWidth": 113
    },
    {
      "source": "wealth_management",
      "target": "segment_revenue",
      "value": 6.6,
      "width": 155,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585",
      "targetWidth": 156
    },
    {
      "source": "investment_management",
      "target": "segment_revenue",
      "value": 1.3,
      "width": 33,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#858585",
      "targetWidth": 34
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 14.5,
      "width": 299,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585",
      "sourceWidth": 301
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.1,
      "width": 2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.8,
      "width": 65,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "targetWidth": 64
    },
    {
      "source": "revenue",
      "target": "non_interest_expenses",
      "value": 10.5,
      "width": 232,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 0.2,
      "width": 2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3,
      "width": 52,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 53
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.7,
      "width": 11,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "non_interest_expenses",
      "target": "compensation_benefits",
      "value": 6.4,
      "width": 131,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 135
    },
    {
      "source": "non_interest_expenses",
      "target": "brokerage_clearing_exchange",
      "value": 0.9,
      "width": 19,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 23
    },
    {
      "source": "non_interest_expenses",
      "target": "information_communications",
      "value": 0.9,
      "width": 21,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 23
    },
    {
      "source": "non_interest_expenses",
      "target": "professional_services",
      "value": 0.7,
      "width": 19,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 19
    },
    {
      "source": "non_interest_expenses",
      "target": "occupancy",
      "value": 0.4,
      "width": 9,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 10
    },
    {
      "source": "non_interest_expenses",
      "target": "marketing_business_development",
      "value": 0.2,
      "width": 5,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 6
    },
    {
      "source": "non_interest_expenses",
      "target": "other_expenses",
      "value": 0.9,
      "width": 19,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 16
    }
  ],
  "i18n": {
    "zh": {
      "name": "摩根士丹利 · 2023 财年第一季度",
      "meta": {
        "title": "摩根士丹利 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "titleTextLength": 2280
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"89\" y=\"285\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><text x=\"628\" y=\"371\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"122\" textLength=\"770\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000\" data-typography-role=\"brand\">Morgan Stanley</text><rect x=\"150\" y=\"1152\" width=\"242\" height=\"149\" rx=\"30\" fill=\"#000\"/><rect x=\"400\" y=\"1152\" width=\"272\" height=\"149\" rx=\"30\" fill=\"#000\"/><g fill=\"#ddd\" text-anchor=\"middle\" font-size=\"28\"><text x=\"271\" y=\"1205\" font-weight=\"800\">CET1 比率</text><text data-operating-metric=\"cet1_ratio\" x=\"271\" y=\"1244\">15.1%</text><text x=\"271\" y=\"1276\" font-size=\"23\">同比 +0.6 个百分点</text><text x=\"536\" y=\"1205\" font-weight=\"800\">ROTCE</text><text data-operating-metric=\"rotce\" x=\"536\" y=\"1244\">16.9%</text><text x=\"536\" y=\"1276\" font-size=\"23\">同比 (2.9 个百分点)</text></g><g fill=\"#666\" font-size=\"28\"><text x=\"242\" y=\"1340\">CET1 = 普通股一级资本充足率</text><text x=\"89\" y=\"1385\">ROTCE = 平均有形普通股权益回报率</text></g></g>",
      "nodes": {
        "institutional_securities": {
          "label": "机构证券",
          "notes": []
        },
        "wealth_management": {
          "label": "财富管理",
          "notes": []
        },
        "investment_management": {
          "label": "投资管理",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": []
        },
        "eliminations": {
          "label": "抵销"
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "non_interest_expenses": {
          "label": [
            "非利息",
            "费用"
          ]
        },
        "operating_expenses": {
          "label": [
            "信用损失",
            "拨备"
          ]
        },
        "net_income": {
          "label": "净利润",
          "notes": []
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "information_communications": {
          "label": "信息与通信"
        },
        "brokerage_clearing_exchange": {
          "label": "经纪、清算与交易所费用"
        },
        "professional_services": {
          "label": "专业服务"
        },
        "occupancy": {
          "label": "场地占用"
        },
        "marketing_business_development": {
          "label": "市场与业务开发"
        },
        "other_expenses": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "segment_revenue": {
            "blocks": []
          },
          "institutional_securities": {
            "blocks": [
              {
                "x": 338.583984375,
                "top": 411.509765625,
                "lines": [
                  {
                    "text": "机构证券",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 28%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "end",
                "lineGap": 8
              },
              {
                "x": 429.7412109375,
                "top": 325.5615234375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (11%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "wealth_management": {
            "blocks": [
              {
                "x": 334.67724609375,
                "top": 698.00390625,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 26%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "end",
                "lineGap": 8
              },
              {
                "x": 425.83447265625,
                "top": 595.12646484375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "investment_management": {
            "blocks": [
              {
                "x": 334.67724609375,
                "top": 916.78125,
                "lines": [
                  {
                    "text": "投资管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 13%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "end",
                "lineGap": 8
              },
              {
                "x": 425.83447265625,
                "top": 884.22509765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1379.07861328125,
                "top": 451.87939453125,
                "lines": [
                  {
                    "text": "收入",
                    "size": 41,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 41,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1379.07861328125,
                "top": 944.12841796875,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1833.5625,
                "top": 402.39404296875,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "non_interest_expenses": {
            "blocks": [
              {
                "x": 1823.14453125,
                "top": 1023.5654296875,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1833.5625,
                "top": 1231.9248046875,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 325.5615234375,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (18%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 487.0400390625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 600.33544921875,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "brokerage_clearing_exchange": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 755.302734375,
                "lines": [
                  {
                    "text": "经纪、清算与",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "交易所费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "information_communications": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 877.7138671875,
                "lines": [
                  {
                    "text": "信息与通信",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1013.1474609375,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1121.23388671875,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "marketing_business_development": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1213.693359375,
                "lines": [
                  {
                    "text": "市场与",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "业务开发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 1350.42919921875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1_ratio",
      "value": "15.1",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "15.1%"
    },
    {
      "id": "rotce",
      "value": "16.9",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "16.9%"
    }
  ]
});
