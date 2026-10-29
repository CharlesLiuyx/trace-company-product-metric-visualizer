window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "morgan-stanley-q2-fy25",
  "name": "Morgan Stanley · Q2 FY25",
  "company": "Morgan Stanley",
  "meta": {
    "company": "Morgan Stanley",
    "title": "Morgan Stanley Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/morgan-stanley-q2-fy25.png",
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
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"89\" y=\"276\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text>\n      <text x=\"606\" y=\"397\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"126\" font-weight=\"400\" textLength=\"760\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\" data-typography-role=\"brand\">Morgan Stanley</text>\n\n      <g fill=\"#000000\">\n        <rect x=\"123\" y=\"1108\" width=\"242\" height=\"149\" rx=\"30\"/>\n        <rect x=\"373\" y=\"1108\" width=\"272\" height=\"149\" rx=\"30\"/>\n      </g>\n      <g fill=\"#ffffff\" text-anchor=\"middle\">\n        <text x=\"244\" y=\"1160\" font-size=\"29\" font-weight=\"800\">CET1 ratio</text>\n        <text data-operating-metric=\"cet1\" x=\"244\" y=\"1199\" font-size=\"28\" font-weight=\"400\">15.0%</text>\n        <text x=\"244\" y=\"1231\" font-size=\"24\" font-weight=\"400\">(0.2pp) Y/Y</text>\n        <text x=\"509\" y=\"1160\" font-size=\"29\" font-weight=\"800\">ROTCE</text>\n        <text data-operating-metric=\"rotce\" x=\"509\" y=\"1199\" font-size=\"28\" font-weight=\"400\">18.2%</text>\n        <text x=\"509\" y=\"1231\" font-size=\"24\" font-weight=\"400\">+0.7pp Y/Y</text>\n      </g>\n      <g fill=\"#666666\" font-weight=\"400\">\n        <text x=\"232\" y=\"1296\" font-size=\"28\">CET1 = Common Equity Tier 1</text>\n        <text x=\"78\" y=\"1343\" font-size=\"28\">ROTCE = Return on average tangible common equity</text>\n      </g>\n    </g>",
  "layout": {
    "scale": 18.4,
    "nodes": {
      "institutional_securities": {
        "x": 379,
        "y": 416,
        "width": 72,
        "height": 123
      },
      "wealth_management": {
        "x": 379,
        "y": 700,
        "width": 72,
        "height": 126
      },
      "investment_management": {
        "x": 379,
        "y": 986,
        "width": 72,
        "height": 24
      },
      "segment_revenue": {
        "x": 847,
        "y": 560,
        "width": 72,
        "height": 276
      },
      "revenue": {
        "x": 1314,
        "y": 668,
        "width": 72,
        "height": 273
      },
      "eliminations": {
        "x": 1314,
        "y": 1064,
        "width": 72,
        "height": 2
      },
      "pretax_income": {
        "x": 1781,
        "y": 485,
        "width": 72,
        "height": 75
      },
      "non_interest_expenses": {
        "x": 1781,
        "y": 823,
        "width": 72,
        "height": 195
      },
      "operating_expenses": {
        "x": 1781,
        "y": 1222,
        "width": 72,
        "height": 2
      },
      "net_income": {
        "x": 2248,
        "y": 316,
        "width": 72,
        "height": 58
      },
      "tax": {
        "x": 2248,
        "y": 468,
        "width": 72,
        "height": 17
      },
      "compensation_benefits": {
        "x": 2248,
        "y": 552,
        "width": 72,
        "height": 117
      },
      "information_communications": {
        "x": 2248,
        "y": 884,
        "width": 72,
        "height": 18
      },
      "brokerage_clearing_exchange": {
        "x": 2248,
        "y": 761,
        "width": 72,
        "height": 19
      },
      "professional_services": {
        "x": 2248,
        "y": 1009,
        "width": 72,
        "height": 11
      },
      "occupancy": {
        "x": 2248,
        "y": 1124,
        "width": 72,
        "height": 8
      },
      "marketing_business_development": {
        "x": 2248,
        "y": 1233,
        "width": 72,
        "height": 4
      },
      "other_expenses": {
        "x": 2248,
        "y": 1337,
        "width": 72,
        "height": 16
      }
    },
    "labels": {
      "segment_revenue": {
        "blocks": []
      },
      "institutional_securities": {
        "blocks": [
          {
            "x": 315,
            "top": 413,
            "anchor": "end",
            "lineGap": 8,
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
                "text": "21% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 415,
            "top": 320,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "wealth_management": {
        "blocks": [
          {
            "x": 315,
            "top": 697,
            "anchor": "end",
            "lineGap": 8,
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
                "text": "22% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 415,
            "top": 605,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "investment_management": {
        "blocks": [
          {
            "x": 315,
            "top": 938,
            "anchor": "end",
            "lineGap": 8,
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
                "text": "16% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 415,
            "top": 890,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
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
            "x": 1349,
            "top": 520,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 41,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1349,
            "top": 1088,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1817,
            "top": 373,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2456,
            "top": 282,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2456,
            "top": 438,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "non_interest_expenses": {
        "blocks": [
          {
            "x": 1817,
            "top": 1038,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Non interest",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1817,
            "top": 1240,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Provision for",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2470,
            "top": 558,
            "anchor": "middle",
            "lineGap": 8,
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
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "information_communications": {
        "blocks": [
          {
            "x": 2470,
            "top": 838,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Information &",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "communications",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "brokerage_clearing_exchange": {
        "blocks": [
          {
            "x": 2470,
            "top": 704,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Brokerage, clearing",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& exchange fees",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 2470,
            "top": 979,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Professional",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "services",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2470,
            "top": 1089,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Occupancy",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "marketing_business_development": {
        "blocks": [
          {
            "x": 2470,
            "top": 1188,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Marketing &",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "business dev.",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2470,
            "top": 1325,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100"
              }
            ]
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
      "value": 7.6,
      "notes": [
        "+9% Y/Y",
        "21% net margin"
      ],
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
      "value": 7.8,
      "notes": [
        "+14% Y/Y",
        "22% net margin"
      ],
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
      "value": 1.6,
      "notes": [
        "+12% Y/Y",
        "16% net margin"
      ],
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
      "value": 17,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 16.8,
      "notes": [
        "+12% Y/Y"
      ],
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
      "value": 0.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.2B)"
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Pretax income",
      "value": 4.6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
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
      "value": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($12.0B)"
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
      "valueText": "($0.2B)"
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net income",
      "value": 3.6,
      "notes": [
        "+15% Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.0B)"
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
      "value": 7.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($7.2B)"
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
      "value": 1.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.1B)"
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
      "value": 1.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.2B)"
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
      "valueText": "($0.7B)"
    },
    {
      "id": "occupancy",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Occupancy",
      "value": 0.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.5B)"
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
      "value": 0.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.3B)"
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Other",
      "value": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.0B)"
    }
  ],
  "links": [
    {
      "source": "institutional_securities",
      "target": "segment_revenue",
      "value": 7.6,
      "width": 123,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "wealth_management",
      "target": "segment_revenue",
      "value": 7.8,
      "width": 126,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "investment_management",
      "target": "segment_revenue",
      "value": 1.6,
      "width": 24,
      "sourceOrder": 0,
      "targetOrder": 2,
      "targetWidth": 27
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 16.8,
      "width": 273,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 274
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.2,
      "width": 2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 4.6,
      "width": 75,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 75
    },
    {
      "source": "revenue",
      "target": "non_interest_expenses",
      "value": 12,
      "width": 195,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 196
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.6,
      "width": 58,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1,
      "width": 17,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 17
    },
    {
      "source": "non_interest_expenses",
      "target": "compensation_benefits",
      "value": 7.2,
      "width": 117,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 118.21243523316062
    },
    {
      "source": "non_interest_expenses",
      "target": "information_communications",
      "value": 1.1,
      "width": 18,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 18.186528497409327
    },
    {
      "source": "non_interest_expenses",
      "target": "brokerage_clearing_exchange",
      "value": 1.2,
      "width": 19,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 19.196891191709845
    },
    {
      "source": "non_interest_expenses",
      "target": "professional_services",
      "value": 0.7,
      "width": 11,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 11.1139896373057
    },
    {
      "source": "non_interest_expenses",
      "target": "occupancy",
      "value": 0.5,
      "width": 8,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 8.082901554404145
    },
    {
      "source": "non_interest_expenses",
      "target": "marketing_business_development",
      "value": 0.3,
      "width": 4,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 4.041450777202073
    },
    {
      "source": "non_interest_expenses",
      "target": "other_expenses",
      "value": 1,
      "width": 16,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 16.16580310880829
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 0.2,
      "width": 2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "摩根士丹利 · 2025 财年第二季度",
      "meta": {
        "title": "摩根士丹利 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "titleTextLength": 2280
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"89\" y=\"276\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">按业务分部</text>\n      <text x=\"606\" y=\"397\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"126\" font-weight=\"400\" textLength=\"760\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\" data-typography-role=\"brand\">Morgan Stanley</text>\n\n      <g fill=\"#000000\">\n        <rect x=\"123\" y=\"1108\" width=\"242\" height=\"149\" rx=\"30\"/>\n        <rect x=\"373\" y=\"1108\" width=\"272\" height=\"149\" rx=\"30\"/>\n      </g>\n      <g fill=\"#ffffff\" text-anchor=\"middle\">\n        <text x=\"244\" y=\"1160\" font-size=\"29\" font-weight=\"800\">CET1 比率</text>\n        <text data-operating-metric=\"cet1\" x=\"244\" y=\"1199\" font-size=\"28\" font-weight=\"400\">15.0%</text>\n        <text x=\"244\" y=\"1231\" font-size=\"22\" font-weight=\"400\">同比 (0.2 个百分点)</text>\n        <text x=\"509\" y=\"1160\" font-size=\"29\" font-weight=\"800\">ROTCE</text>\n        <text data-operating-metric=\"rotce\" x=\"509\" y=\"1199\" font-size=\"28\" font-weight=\"400\">18.2%</text>\n        <text x=\"509\" y=\"1231\" font-size=\"22\" font-weight=\"400\">同比 +0.7 个百分点</text>\n      </g>\n      <g fill=\"#666666\" font-weight=\"400\">\n        <text x=\"232\" y=\"1296\" font-size=\"23\">CET1 = 普通股一级资本充足率</text>\n        <text x=\"78\" y=\"1343\" font-size=\"23\">ROTCE = 平均有形普通股权益回报率</text>\n      </g>\n    </g>",
      "nodes": {
        "institutional_securities": {
          "label": "机构证券",
          "notes": [
            "同比 +9%",
            "净利率 21%"
          ]
        },
        "wealth_management": {
          "label": "财富管理",
          "notes": [
            "同比 +14%",
            "净利率 22%"
          ]
        },
        "investment_management": {
          "label": "投资管理",
          "notes": [
            "同比 +12%",
            "净利率 16%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
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
          "notes": [
            "同比 +15%"
          ]
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
                "x": 315,
                "top": 413,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "机构证券",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 21%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 415,
                "top": 320,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "wealth_management": {
            "blocks": [
              {
                "x": 315,
                "top": 697,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 415,
                "top": 605,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "investment_management": {
            "blocks": [
              {
                "x": 315,
                "top": 938,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "投资管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 415,
                "top": 890,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
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
                "x": 1349,
                "top": 520,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 41,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1349,
                "top": 1088,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1817,
                "top": 373,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2456,
                "top": 282,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2456,
                "top": 438,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "non_interest_expenses": {
            "blocks": [
              {
                "x": 1817,
                "top": 1038,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 35,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 35,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1817,
                "top": 1240,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2470,
                "top": 558,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "information_communications": {
            "blocks": [
              {
                "x": 2470,
                "top": 838,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "信息与通信",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "brokerage_clearing_exchange": {
            "blocks": [
              {
                "x": 2470,
                "top": 704,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "经纪、清算与",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "交易所费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 2470,
                "top": 979,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2470,
                "top": 1089,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "marketing_business_development": {
            "blocks": [
              {
                "x": 2470,
                "top": 1188,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "市场与",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "业务开发",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2470,
                "top": 1325,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
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
      "id": "rotce",
      "value": "18.2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "18.2%"
    }
  ]
});
