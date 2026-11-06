(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "morgan-stanley-q3-fy26",
  "name": "Morgan Stanley · Q3 FY26",
  "company": "Morgan Stanley",
  "meta": {
    "company": "Morgan Stanley",
    "title": "Morgan Stanley Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/morgan-stanley-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 115,
    "titleWeight": 800,
    "titleTextLength": 2492,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
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
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"89\" y=\"279\" font-size=\"30\" font-weight=\"800\" fill=\"#15527a\">By Business Segment</text>\n      <text x=\"606\" y=\"397\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"126\" font-weight=\"400\" textLength=\"760\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\" data-typography-role=\"brand\">Morgan Stanley</text>\n      <g fill=\"#000000\">\n        <rect x=\"123\" y=\"1122\" width=\"242\" height=\"149\" rx=\"30\"/>\n        <rect x=\"373\" y=\"1122\" width=\"272\" height=\"149\" rx=\"30\"/>\n      </g>\n      <g fill=\"#ffffff\" text-anchor=\"middle\">\n        <text x=\"244\" y=\"1174\" font-size=\"29\" font-weight=\"800\">CET1 ratio</text>\n        <text x=\"244\" y=\"1213\" font-size=\"28\" data-operating-metric=\"cet1\">14.9%</text>\n        <text x=\"244\" y=\"1245\" font-size=\"24\">(0.2pp) Y/Y</text>\n        <text x=\"509\" y=\"1174\" font-size=\"29\" font-weight=\"800\">ROTCE</text>\n        <text x=\"509\" y=\"1213\" font-size=\"28\" data-operating-metric=\"rotce\">22.6%</text>\n        <text x=\"509\" y=\"1245\" font-size=\"24\">(0.9pp) Y/Y</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"28\">\n        <text x=\"232\" y=\"1310\">CET1 = Common Equity Tier 1</text>\n        <text x=\"78\" y=\"1357\">ROTCE = Return on average tangible common equity</text>\n      </g>\n    </g>",
  "layout": {
    "scale": 16.5,
    "nodes": {
      "institutional_securities": {
        "x": 372,
        "y": 399,
        "width": 73,
        "height": 165
      },
      "wealth_management": {
        "x": 372,
        "y": 722,
        "width": 73,
        "height": 150
      },
      "investment_management": {
        "x": 372,
        "y": 1023,
        "width": 73,
        "height": 24
      },
      "segment_revenue": {
        "x": 839,
        "y": 527,
        "width": 73,
        "height": 340
      },
      "eliminations": {
        "x": 1306,
        "y": 1151,
        "width": 73,
        "height": 2
      },
      "revenue": {
        "x": 1306,
        "y": 635,
        "width": 73,
        "height": 336
      },
      "pretax_income": {
        "x": 1773,
        "y": 525,
        "width": 73,
        "height": 107
      },
      "operating_expenses": {
        "x": 1773,
        "y": 1267,
        "width": 73,
        "height": 2
      },
      "non_interest_expenses": {
        "x": 1773,
        "y": 859,
        "width": 73,
        "height": 226
      },
      "net_income": {
        "x": 2240,
        "y": 279,
        "width": 73,
        "height": 83
      },
      "tax": {
        "x": 2240,
        "y": 455,
        "width": 73,
        "height": 24
      },
      "compensation_benefits": {
        "x": 2240,
        "y": 564,
        "width": 73,
        "height": 133
      },
      "brokerage_clearing_exchange": {
        "x": 2240,
        "y": 781,
        "width": 73,
        "height": 24
      },
      "information_communications": {
        "x": 2240,
        "y": 910,
        "width": 73,
        "height": 22
      },
      "professional_services": {
        "x": 2240,
        "y": 1032,
        "width": 73,
        "height": 11
      },
      "occupancy": {
        "x": 2240,
        "y": 1141,
        "width": 73,
        "height": 8
      },
      "marketing_business_development": {
        "x": 2240,
        "y": 1250,
        "width": 73,
        "height": 6
      },
      "other_expenses": {
        "x": 2240,
        "y": 1352,
        "width": 73,
        "height": 23
      }
    },
    "labels": {
      "segment_revenue": {
        "blocks": []
      },
      "institutional_securities": {
        "blocks": [
          {
            "x": 314.8,
            "top": 441,
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
                "text": "29% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 404.3,
            "top": 309,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
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
            "x": 319.5,
            "top": 741,
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
                "text": "24% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 408.5,
            "top": 632,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
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
            "x": 322.5,
            "top": 964,
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
                "text": "18% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 408.2,
            "top": 934,
            "anchor": "middle",
            "lineGap": 9,
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
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1345,
            "top": 495,
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
            "x": 1344,
            "top": 1175,
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
            "x": 1810,
            "top": 414.5,
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
            "x": 2347,
            "top": 271,
            "anchor": "start",
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
                "text": "+7% Y/Y",
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
            "x": 2457.5,
            "top": 441,
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
            "x": 1810,
            "top": 1139,
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
            "x": 1810,
            "top": 1288,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Provision",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "for credit loss",
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
            "x": 2468,
            "top": 591,
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
      "brokerage_clearing_exchange": {
        "blocks": [
          {
            "x": 2469.5,
            "top": 735,
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
      "information_communications": {
        "blocks": [
          {
            "x": 2467,
            "top": 868,
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
      "professional_services": {
        "blocks": [
          {
            "x": 2467,
            "top": 1001,
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
                "text": "services ($0.7B)",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2467.5,
            "top": 1112,
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
            "x": 2468.5,
            "top": 1183,
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
            "x": 2467,
            "top": 1350,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other ($1.4B)",
                "size": 30,
                "weight": 800,
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
      "value": 10,
      "notes": [
        "+18% Y/Y",
        "29% net margin"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$10.0B"
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
      "value": 9.1,
      "notes": [
        "+10% Y/Y",
        "24% net margin"
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
      "value": 1.5,
      "notes": [
        "(11%) Y/Y",
        "18% net margin"
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
      "value": 20.6,
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
      "value": -0.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 20.3,
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Pretax income",
      "value": 6.5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": [
        "Provision",
        "for credit loss"
      ],
      "value": 0.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
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
      "value": 13.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net income",
      "value": 5,
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$5.0B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 1.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
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
      "value": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "$8.0B"
    },
    {
      "id": "brokerage_clearing_exchange",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": [
        "Brokerage, clearing",
        "& exchange fees"
      ],
      "value": 1.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "information_communications",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": [
        "Information &",
        "communications"
      ],
      "value": 1.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
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
      "linkTint": "#e08585"
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
      "linkTint": "#e08585"
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
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Other",
      "value": 1.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "institutional_securities",
      "target": "segment_revenue",
      "value": 10,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 165,
      "sourceWidth": 165
    },
    {
      "source": "wealth_management",
      "target": "segment_revenue",
      "value": 9.1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "targetWidth": 150,
      "sourceWidth": 150
    },
    {
      "source": "investment_management",
      "target": "segment_revenue",
      "value": 1.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "targetWidth": 24,
      "sourceWidth": 24
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 20.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 336,
      "sourceWidth": 338
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 2,
      "sourceWidth": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 6.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "targetWidth": 107,
      "sourceWidth": 107
    },
    {
      "source": "revenue",
      "target": "non_interest_expenses",
      "value": 13.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 226,
      "sourceWidth": 227
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 0.1,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 2,
      "sourceWidth": 2
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "targetWidth": 83,
      "sourceWidth": 83
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 24,
      "sourceWidth": 24
    },
    {
      "source": "non_interest_expenses",
      "target": "compensation_benefits",
      "value": 8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 133,
      "sourceWidth": 133
    },
    {
      "source": "non_interest_expenses",
      "target": "brokerage_clearing_exchange",
      "value": 1.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 24,
      "sourceWidth": 24
    },
    {
      "source": "non_interest_expenses",
      "target": "information_communications",
      "value": 1.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 22,
      "sourceWidth": 22
    },
    {
      "source": "non_interest_expenses",
      "target": "professional_services",
      "value": 0.7,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 11,
      "sourceWidth": 11
    },
    {
      "source": "non_interest_expenses",
      "target": "occupancy",
      "value": 0.5,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 8,
      "sourceWidth": 8
    },
    {
      "source": "non_interest_expenses",
      "target": "marketing_business_development",
      "value": 0.4,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 6,
      "sourceWidth": 5
    },
    {
      "source": "non_interest_expenses",
      "target": "other_expenses",
      "value": 1.4,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 23,
      "sourceWidth": 23
    }
  ],
  "i18n": {
    "zh": {
      "name": "摩根士丹利 · 2026 财年第三季度",
      "meta": {
        "title": "摩根士丹利 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 2280
      },
      "nodes": {
        "institutional_securities": {
          "label": "机构证券",
          "notes": [
            "同比 +18%",
            "净利率 29%"
          ]
        },
        "wealth_management": {
          "label": "财富管理",
          "notes": [
            "同比 +10%",
            "净利率 24%"
          ]
        },
        "investment_management": {
          "label": "投资管理",
          "notes": [
            "同比 (11%)",
            "净利率 18%"
          ]
        },
        "eliminations": {
          "label": "抵销"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "operating_expenses": {
          "label": "信用损失拨备"
        },
        "non_interest_expenses": {
          "label": [
            "非利息",
            "费用"
          ]
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +7%"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "brokerage_clearing_exchange": {
          "label": "经纪、清算与交易所费用"
        },
        "information_communications": {
          "label": "信息与通信"
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
                "x": 314.8,
                "top": 441,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "机构证券",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 29%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 404.3,
                "top": 309,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
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
                "x": 319.5,
                "top": 741,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 408.5,
                "top": 632,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
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
                "x": 322.5,
                "top": 964,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "投资管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 18%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 408.2,
                "top": 934,
                "anchor": "middle",
                "lineGap": 9,
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
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1345,
                "top": 495,
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
                "x": 1344,
                "top": 1175,
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
                "x": 1810,
                "top": 414.5,
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
                "x": 2347,
                "top": 271,
                "anchor": "start",
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
                    "text": "同比 +7%",
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
                "x": 2457.5,
                "top": 441,
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
                "x": 1810,
                "top": 1139,
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
                "x": 1810,
                "top": 1288,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "信用损失拨备",
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
                "x": 2468,
                "top": 591,
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
          "brokerage_clearing_exchange": {
            "blocks": [
              {
                "x": 2469.5,
                "top": 735,
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
          "information_communications": {
            "blocks": [
              {
                "x": 2467,
                "top": 868,
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
          "professional_services": {
            "blocks": [
              {
                "x": 2467,
                "top": 1001,
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
                "x": 2467.5,
                "top": 1112,
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
                "x": 2468.5,
                "top": 1183,
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
                "x": 2467,
                "top": 1350,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他（$1.4B）",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"89\" y=\"279\" font-size=\"30\" font-weight=\"800\" fill=\"#15527a\">按业务分部</text>\n      <text x=\"606\" y=\"397\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"126\" font-weight=\"400\" textLength=\"760\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\" data-typography-role=\"brand\">Morgan Stanley</text>\n      <g fill=\"#000000\">\n        <rect x=\"123\" y=\"1122\" width=\"242\" height=\"149\" rx=\"30\"/>\n        <rect x=\"373\" y=\"1122\" width=\"272\" height=\"149\" rx=\"30\"/>\n      </g>\n      <g fill=\"#ffffff\" text-anchor=\"middle\">\n        <text x=\"244\" y=\"1174\" font-size=\"29\" font-weight=\"800\">CET1 比率</text>\n        <text x=\"244\" y=\"1213\" font-size=\"28\" data-operating-metric=\"cet1\">14.9%</text>\n        <text x=\"244\" y=\"1245\" font-size=\"24\">同比 (0.2 个百分点)</text>\n        <text x=\"509\" y=\"1174\" font-size=\"29\" font-weight=\"800\">ROTCE</text>\n        <text x=\"509\" y=\"1213\" font-size=\"28\" data-operating-metric=\"rotce\">22.6%</text>\n        <text x=\"509\" y=\"1245\" font-size=\"24\">同比 (0.9 个百分点)</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"28\">\n        <text x=\"232\" y=\"1310\">CET1 = 普通股一级资本充足率</text>\n        <text x=\"78\" y=\"1357\">ROTCE = 平均有形普通股权益回报率</text>\n      </g>\n    </g>"
    }
  },
  "nonNodeMetrics": [
    {
      "id": "pre_provision_pretax",
      "representation": "data-only"
    }
  ],
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "14.9",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.9%"
    },
    {
      "id": "rotce",
      "value": "22.6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "22.6%"
    }
  ]
});})();
