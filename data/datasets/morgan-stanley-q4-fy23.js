window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "morgan-stanley-q4-fy23",
  "name": "Morgan Stanley · Q4 FY23",
  "company": "Morgan Stanley",
  "meta": {
    "company": "Morgan Stanley",
    "title": "Morgan Stanley Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/morgan-stanley-q4-fy23.png",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"89\" y=\"276\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><text x=\"606\" y=\"371\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"126\" font-weight=\"400\" textLength=\"775\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\" data-typography-role=\"brand\">Morgan Stanley</text><g fill=\"#000000\"><rect x=\"134\" y=\"1153\" width=\"241\" height=\"148\" rx=\"30\"/><rect x=\"385\" y=\"1153\" width=\"272\" height=\"148\" rx=\"30\"/></g><g fill=\"#ffffff\" text-anchor=\"middle\"><text x=\"254\" y=\"1204\" font-size=\"29\" font-weight=\"800\">CET1 ratio</text><text x=\"254\" y=\"1245\" font-size=\"28\" data-operating-metric=\"cet1\">15.2%</text><text x=\"254\" y=\"1277\" font-size=\"24\">(0.1pp) Y/Y</text><text x=\"521\" y=\"1204\" font-size=\"29\" font-weight=\"800\">ROTCE</text><text x=\"521\" y=\"1245\" font-size=\"28\" data-operating-metric=\"rotce\">12.8%</text><text x=\"521\" y=\"1277\" font-size=\"24\">+0.2pp Y/Y</text></g><g fill=\"#666666\"><text x=\"242\" y=\"1341\" font-size=\"28\">CET1 = Common Equity Tier 1</text><text x=\"89\" y=\"1387\" font-size=\"28\">ROTCE = Return on average tangible common equity</text></g><text x=\"170\" y=\"1438\" font-size=\"40\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "layout": {
    "scale": 23.2,
    "nodes": {
      "institutional_securities": {
        "x": 393,
        "y": 427,
        "width": 73,
        "height": 113
      },
      "wealth_management": {
        "x": 393,
        "y": 684,
        "width": 73,
        "height": 153
      },
      "investment_management": {
        "x": 393,
        "y": 976,
        "width": 73,
        "height": 32
      },
      "segment_revenue": {
        "x": 860,
        "y": 574,
        "width": 73,
        "height": 302
      },
      "revenue": {
        "x": 1327,
        "y": 622,
        "width": 73,
        "height": 298
      },
      "eliminations": {
        "x": 1327,
        "y": 1025,
        "width": 73,
        "height": 2
      },
      "pretax_income": {
        "x": 1789,
        "y": 497,
        "width": 73,
        "height": 49
      },
      "non_interest_expenses": {
        "x": 1789,
        "y": 794,
        "width": 73,
        "height": 249
      },
      "operating_expenses": {
        "x": 1789,
        "y": 1278,
        "width": 73,
        "height": 1
      },
      "net_income": {
        "x": 2262,
        "y": 327,
        "width": 73,
        "height": 35
      },
      "tax": {
        "x": 2262,
        "y": 471,
        "width": 73,
        "height": 12
      },
      "compensation_benefits": {
        "x": 2262,
        "y": 554,
        "width": 73,
        "height": 137
      },
      "information_communications": {
        "x": 2262,
        "y": 885,
        "width": 73,
        "height": 22
      },
      "brokerage_clearing_exchange": {
        "x": 2262,
        "y": 770,
        "width": 73,
        "height": 19
      },
      "professional_services": {
        "x": 2262,
        "y": 998,
        "width": 73,
        "height": 18
      },
      "occupancy": {
        "x": 2262,
        "y": 1120,
        "width": 73,
        "height": 11
      },
      "marketing_business_development": {
        "x": 2262,
        "y": 1235,
        "width": 73,
        "height": 4
      },
      "other_expenses": {
        "x": 2262,
        "y": 1338,
        "width": 73,
        "height": 32
      }
    },
    "labels": {
      "segment_revenue": {
        "blocks": []
      },
      "institutional_securities": {
        "blocks": [
          {
            "x": 322,
            "top": 442,
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
            ],
            "anchor": "end",
            "lineGap": 8
          },
          {
            "x": 431,
            "top": 328,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
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
      "wealth_management": {
        "blocks": [
          {
            "x": 322,
            "top": 695,
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
                "text": "27% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "end",
            "lineGap": 8
          },
          {
            "x": 431,
            "top": 580,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
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
      "investment_management": {
        "blocks": [
          {
            "x": 322,
            "top": 951,
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
            ],
            "anchor": "end",
            "lineGap": 8
          },
          {
            "x": 431,
            "top": 871,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
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
      "revenue": {
        "blocks": [
          {
            "x": 1362,
            "top": 476,
            "lines": [
              {
                "text": "Revenue",
                "size": 41,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 41,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+1% Y/Y",
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
            "x": 1363,
            "top": 1048,
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
            "x": 1825,
            "top": 391,
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
                "weight": 400,
                "color": "#008f51"
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
            "x": 2470,
            "top": 276,
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
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "(32%) Y/Y",
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
            "x": 2470,
            "top": 434,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
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
            "x": 1825,
            "top": 1060,
            "lines": [
              {
                "text": "Non interest",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1825,
            "top": 1294,
            "lines": [
              {
                "text": "Provision for",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 35,
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
            "x": 2478,
            "top": 558,
            "lines": [
              {
                "text": "Compensation",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
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
            "x": 2480,
            "top": 714,
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
                "size": 30,
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
            "x": 2480,
            "top": 842,
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
            "x": 2480,
            "top": 981,
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
            "x": 2480,
            "top": 1091,
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
            "x": 2480,
            "top": 1199,
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
            "x": 2480,
            "top": 1336,
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
      "value": 4.9,
      "notes": [
        "+3% Y/Y",
        "21% net margin"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$4.9B"
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
      "notes": [
        "+0% Y/Y",
        "27% net margin"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$6.6B"
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
        "+0% Y/Y",
        "18% net margin"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$1.5B"
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "",
      "value": 13,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 12.9,
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$12.9B"
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 5,
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
      "order": 6,
      "type": "profit",
      "label": "Pretax income",
      "value": 2.1,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$2.1B"
    },
    {
      "id": "non_interest_expenses",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": [
        "Non interest",
        "expenses"
      ],
      "value": 10.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($10.7B)"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 0.003,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($3M)"
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 9,
      "type": "profit",
      "label": "Net income",
      "value": 1.5,
      "notes": [
        "(32%) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$1.5B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "Tax",
      "value": 0.6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.6B)"
    },
    {
      "id": "compensation_benefits",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($6.0B)"
    },
    {
      "id": "brokerage_clearing_exchange",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": [
        "Brokerage, clearing",
        "& exchange fees"
      ],
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.9B)"
    },
    {
      "id": "information_communications",
      "col": 4,
      "order": 13,
      "type": "cost",
      "label": [
        "Information &",
        "communications"
      ],
      "value": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.0B)"
    },
    {
      "id": "professional_services",
      "col": 4,
      "order": 14,
      "type": "cost",
      "label": [
        "Professional",
        "services"
      ],
      "value": 0.8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.8B)"
    },
    {
      "id": "occupancy",
      "col": 4,
      "order": 15,
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
      "order": 16,
      "type": "cost",
      "label": [
        "Marketing &",
        "business dev."
      ],
      "value": 0.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.2B)"
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 17,
      "type": "cost",
      "label": "Other",
      "value": 1.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.4B)"
    }
  ],
  "links": [
    {
      "source": "institutional_securities",
      "target": "segment_revenue",
      "value": 4.9,
      "width": 113,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 113,
      "targetWidth": 113
    },
    {
      "source": "wealth_management",
      "target": "segment_revenue",
      "value": 6.6,
      "width": 153,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 153,
      "targetWidth": 153
    },
    {
      "source": "investment_management",
      "target": "segment_revenue",
      "value": 1.5,
      "width": 36,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 32,
      "targetWidth": 36
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 12.9,
      "width": 298,
      "targetWidth": 298,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 298
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.2,
      "width": 2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 4,
      "targetWidth": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 2.1,
      "width": 49,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 49,
      "targetWidth": 49
    },
    {
      "source": "revenue",
      "target": "non_interest_expenses",
      "value": 10.7,
      "width": 249,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 248,
      "targetWidth": 249
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 1.5,
      "width": 35,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 36,
      "targetWidth": 35
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.6,
      "width": 12,
      "sourceWidth": 13,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 12
    },
    {
      "source": "non_interest_expenses",
      "target": "compensation_benefits",
      "value": 6,
      "width": 137,
      "sourceWidth": 137,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 137
    },
    {
      "source": "non_interest_expenses",
      "target": "information_communications",
      "value": 1,
      "width": 22,
      "sourceWidth": 22,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 22
    },
    {
      "source": "non_interest_expenses",
      "target": "brokerage_clearing_exchange",
      "value": 0.9,
      "width": 19,
      "sourceWidth": 20,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 19
    },
    {
      "source": "non_interest_expenses",
      "target": "professional_services",
      "value": 0.8,
      "width": 18,
      "sourceWidth": 18,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 18
    },
    {
      "source": "non_interest_expenses",
      "target": "occupancy",
      "value": 0.5,
      "width": 11,
      "sourceWidth": 12,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 11
    },
    {
      "source": "non_interest_expenses",
      "target": "marketing_business_development",
      "value": 0.2,
      "width": 4,
      "sourceWidth": 5,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 4
    },
    {
      "source": "non_interest_expenses",
      "target": "other_expenses",
      "value": 1.4,
      "width": 32,
      "sourceWidth": 35,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 32
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 0.003,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "width": 1,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 919.5
    }
  ],
  "i18n": {
    "zh": {
      "name": "摩根士丹利 · 2023 财年第四季度",
      "meta": {
        "title": "摩根士丹利 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "titleTextLength": 2280
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"89\" y=\"276\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><text x=\"606\" y=\"371\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"126\" font-weight=\"400\" textLength=\"775\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\" data-typography-role=\"brand\">Morgan Stanley</text><g fill=\"#000000\"><rect x=\"134\" y=\"1153\" width=\"241\" height=\"148\" rx=\"30\"/><rect x=\"385\" y=\"1153\" width=\"272\" height=\"148\" rx=\"30\"/></g><g fill=\"#ffffff\" text-anchor=\"middle\"><text x=\"254\" y=\"1204\" font-size=\"29\" font-weight=\"800\">CET1 比率</text><text x=\"254\" y=\"1245\" font-size=\"28\" data-operating-metric=\"cet1\">15.2%</text><text x=\"254\" y=\"1277\" font-size=\"24\">同比 (0.1 个百分点)</text><text x=\"521\" y=\"1204\" font-size=\"29\" font-weight=\"800\">ROTCE</text><text x=\"521\" y=\"1245\" font-size=\"28\" data-operating-metric=\"rotce\">12.8%</text><text x=\"521\" y=\"1277\" font-size=\"24\">同比 +0.2 个百分点</text></g><g fill=\"#666666\"><text x=\"242\" y=\"1341\" font-size=\"28\">CET1 = 普通股一级资本充足率</text><text x=\"89\" y=\"1387\" font-size=\"28\">ROTCE = 平均有形普通股权益回报率</text></g><text x=\"170\" y=\"1438\" font-size=\"40\" font-weight=\"800\">来源：季度业绩</text></g>",
      "nodes": {
        "institutional_securities": {
          "label": "机构证券",
          "notes": [
            "同比 +3%",
            "净利率 21%"
          ]
        },
        "wealth_management": {
          "label": "财富管理",
          "notes": [
            "同比 +0%",
            "净利率 27%"
          ]
        },
        "investment_management": {
          "label": "投资管理",
          "notes": [
            "同比 +0%",
            "净利率 18%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
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
          "label": "信用损失拨备"
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 (32%)"
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
                "x": 322,
                "top": 442,
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
                ],
                "anchor": "end",
                "lineGap": 8
              },
              {
                "x": 431,
                "top": 328,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
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
          "wealth_management": {
            "blocks": [
              {
                "x": 322,
                "top": 695,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "end",
                "lineGap": 8
              },
              {
                "x": 431,
                "top": 580,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
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
          "investment_management": {
            "blocks": [
              {
                "x": 322,
                "top": 951,
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
                ],
                "anchor": "end",
                "lineGap": 8
              },
              {
                "x": 431,
                "top": 871,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
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
          "revenue": {
            "blocks": [
              {
                "x": 1362,
                "top": 476,
                "lines": [
                  {
                    "text": "收入",
                    "size": 41,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 41,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +1%",
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
                "x": 1363,
                "top": 1048,
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
                "x": 1825,
                "top": 391,
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
                    "weight": 400,
                    "color": "#008f51"
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
                "x": 2470,
                "top": 276,
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
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 (32%)",
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
                "x": 2470,
                "top": 434,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
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
                "x": 1825,
                "top": 1060,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1825,
                "top": 1294,
                "lines": [
                  {
                    "text": "信用损失拨备",
                    "size": 35,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 35,
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
                "x": 2478,
                "top": 558,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
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
                "x": 2480,
                "top": 714,
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
                    "size": 30,
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
                "x": 2480,
                "top": 842,
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
                "x": 2480,
                "top": 981,
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
                "x": 2480,
                "top": 1091,
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
                "x": 2480,
                "top": 1199,
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
                "x": 2480,
                "top": 1336,
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
      "id": "cet1",
      "value": "15.2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "15.2%"
    },
    {
      "id": "rotce",
      "value": "12.8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "12.8%"
    }
  ]
});
