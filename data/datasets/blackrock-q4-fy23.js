(function(){ window.DATASETS=window.DATASETS||[]; window.DATASETS.push({
  "key": "blackrock-q4-fy23",
  "name": "BlackRock - Q4 FY23",
  "company": "BlackRock",
  "meta": {
    "company": "BlackRock",
    "title": "BlackRock Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/blackrock-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2360,
    "hidePeriodStamp": true,
    "logoX": 688,
    "logoY": 255,
    "logoWidth": 720,
    "logoHeight": 134,
    "logoViewBox": "0 0 720 134",
    "logoSvg": "<text x=\"350\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"137\" font-weight=\"900\" textLength=\"710\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\">BlackRock</text><text x=\"714\" y=\"121\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#000000\">&#174;</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#737373",
    "interfaceAudit": {
      "mode": "error"
    },
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
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 29,
      "lineGap": 8
    }
  },
  "layout": {
    "scale": 57.4,
    "nodes": {
      "investment_advisory_fees": {
        "x": 414,
        "y": 463,
        "width": 72,
        "height": 205
      },
      "performance_fees": {
        "x": 414,
        "y": 801,
        "width": 72,
        "height": 17
      },
      "technology_services": {
        "x": 414,
        "y": 935,
        "width": 72,
        "height": 21
      },
      "distribution_fees": {
        "x": 414,
        "y": 1089,
        "width": 72,
        "height": 17
      },
      "advisory_other": {
        "x": 414,
        "y": 1245,
        "width": 72,
        "height": 2
      },
      "revenue": {
        "x": 1034,
        "y": 675,
        "width": 72,
        "height": 264
      },
      "operating_profit": {
        "x": 1657,
        "y": 514,
        "width": 72,
        "height": 91
      },
      "operating_expenses": {
        "x": 1657,
        "y": 865,
        "width": 72,
        "height": 174
      },
      "net_profit": {
        "x": 2282,
        "y": 355,
        "width": 72,
        "height": 85
      },
      "other": {
        "x": 2152,
        "y": 469,
        "width": 72,
        "height": 19
      },
      "tax": {
        "x": 2282,
        "y": 662,
        "width": 72,
        "height": 25
      },
      "compensation_benefits": {
        "x": 2282,
        "y": 754,
        "width": 72,
        "height": 85
      },
      "distribution_servicing": {
        "x": 2282,
        "y": 916,
        "width": 72,
        "height": 29
      },
      "direct_fund": {
        "x": 2282,
        "y": 1029,
        "width": 72,
        "height": 19
      },
      "ga": {
        "x": 2282,
        "y": 1124,
        "width": 72,
        "height": 36
      },
      "restructuring": {
        "x": 2282,
        "y": 1246,
        "width": 72,
        "height": 3
      },
      "amortization": {
        "x": 2282,
        "y": 1342,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "investment_advisory_fees": {
        "blocks": [
          {
            "x": 449,
            "top": 369,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 449,
            "top": 419,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "+6% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 378,
            "top": 491.5,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Investment",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "advisory, fees &",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "securities lending",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "performance_fees": {
        "blocks": [
          {
            "x": 449,
            "top": 708,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 449,
            "top": 758,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "+36% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 378,
            "top": 735.5,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Investment",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "advisory",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "performance fees",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "technology_services": {
        "blocks": [
          {
            "x": 449,
            "top": 845,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 449,
            "top": 895,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 378,
            "top": 897,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Technology",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "services",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "distribution_fees": {
        "blocks": [
          {
            "x": 449,
            "top": 1000,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 449,
            "top": 1050,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "(4%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 378,
            "top": 1074,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Distribution fees",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "advisory_other": {
        "blocks": [
          {
            "x": 449,
            "top": 1156,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 449,
            "top": 1206,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "(23%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 378,
            "top": 1223,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Advisory & other",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1069,
            "top": 526,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 1069,
            "top": 579,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 1069,
            "top": 630,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1688,
            "top": 327,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1688,
            "top": 380,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1688,
            "top": 431,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "34% margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1692,
            "top": 1060,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1692,
            "top": 1161,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2480,
            "top": 340,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2480,
            "top": 393,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2480,
            "top": 444,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "32% margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2188,
            "top": 498,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other income",
                "size": 31,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2188,
            "top": 539,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2480,
            "top": 623,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2480,
            "top": 664,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
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
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2490,
            "top": 756,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Compensation &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "benefits",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2490,
            "top": 838,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
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
      "distribution_servicing": {
        "blocks": [
          {
            "x": 2490,
            "top": 890,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Distribution &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Services",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2490,
            "top": 972,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
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
      "direct_fund": {
        "blocks": [
          {
            "x": 2490,
            "top": 995,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Direct fund",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expense",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2490,
            "top": 1077,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
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
      "ga": {
        "blocks": [
          {
            "x": 2500,
            "top": 1122,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2500,
            "top": 1163,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
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
      "restructuring": {
        "blocks": [
          {
            "x": 2490,
            "top": 1195,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2490,
            "top": 1236,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
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
      "amortization": {
        "blocks": [
          {
            "x": 2490,
            "top": 1295,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Amortization",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2490,
            "top": 1336,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "cost_of_revenue",
      "representation": "data-only"
    },
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "investment_advisory_fees",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Investment advisory, fees & securities lending",
      "value": 3.6,
      "valueText": "$3.6B",
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "performance_fees",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Investment advisory performance fees",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [
        "+36% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "technology_services",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Technology services",
      "value": 0.4,
      "valueText": "$0.4B",
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "distribution_fees",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Distribution fees",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [
        "(4%) Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "advisory_other",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Advisory & other",
      "value": 0.033,
      "valueText": "$33M",
      "notes": [
        "(23%) Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 4.6,
      "valueText": "$4.6B",
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 6,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.6,
      "valueText": "$1.6B",
      "notes": [
        "34% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 7,
      "type": "cost",
      "label": "Operating expenses",
      "value": 3,
      "valueText": "($3.0B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 8,
      "type": "profit",
      "label": "Net income",
      "value": 1.5,
      "valueText": "$1.5B",
      "notes": [
        "32% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "other",
      "col": 2,
      "order": 9,
      "type": "profit",
      "label": "Other income",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "tax",
      "col": 3,
      "order": 10,
      "type": "cost",
      "label": "Tax",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "compensation_benefits",
      "col": 3,
      "order": 11,
      "type": "cost",
      "label": "Compensation & benefits",
      "value": 1.5,
      "valueText": "($1.5B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "distribution_servicing",
      "col": 3,
      "order": 12,
      "type": "cost",
      "label": "Distribution & Services",
      "value": 0.5,
      "valueText": "($0.5B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "direct_fund",
      "col": 3,
      "order": 13,
      "type": "cost",
      "label": "Direct fund expense",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "ga",
      "col": 3,
      "order": 14,
      "type": "cost",
      "label": "G&A",
      "value": 0.6,
      "valueText": "($0.6B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "restructuring",
      "col": 3,
      "order": 15,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.01,
      "valueText": "($0.01B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "amortization",
      "col": 3,
      "order": 16,
      "type": "cost",
      "label": "Amortization",
      "value": 0.038,
      "valueText": "($38M)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "investment_advisory_fees",
      "target": "revenue",
      "value": 3.6,
      "sourceWidth": 205,
      "targetWidth": 205,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "performance_fees",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 17,
      "targetWidth": 17,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "technology_services",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 21,
      "targetWidth": 21,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "distribution_fees",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 17,
      "targetWidth": 19,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "advisory_other",
      "target": "revenue",
      "value": 0.033,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.6,
      "sourceWidth": 91,
      "targetWidth": 91,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 3,
      "sourceWidth": 173,
      "targetWidth": 174,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.2,
      "sourceWidth": 66,
      "targetWidth": 66,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 25,
      "targetWidth": 25,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 19,
      "targetWidth": 19,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 1.5,
      "sourceWidth": 85,
      "targetWidth": 85,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "distribution_servicing",
      "value": 0.5,
      "sourceWidth": 29,
      "targetWidth": 29,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "direct_fund",
      "value": 0.3,
      "sourceWidth": 19,
      "targetWidth": 19,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.6,
      "sourceWidth": 36,
      "targetWidth": 36,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.01,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.038,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 5,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "BlackRock · 2023 财年第四季度",
      "meta": {
        "title": "BlackRock 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月"
      },
      "nodes": {
        "investment_advisory_fees": {
          "label": "投资顾问、费用及证券借贷",
          "notes": [
            "同比 +6%"
          ]
        },
        "performance_fees": {
          "label": "投资顾问绩效费",
          "notes": [
            "同比 +36%"
          ]
        },
        "technology_services": {
          "label": "技术服务",
          "notes": [
            "同比 +7%"
          ]
        },
        "distribution_fees": {
          "label": "分销费用",
          "notes": [
            "同比 -4%"
          ]
        },
        "advisory_other": {
          "label": "顾问及其他",
          "notes": [
            "同比 -23%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +7%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 34%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 32%",
            "同比 +2 个百分点"
          ]
        },
        "other": {
          "label": "其他收入",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "compensation_benefits": {
          "label": "薪酬与福利",
          "notes": []
        },
        "distribution_servicing": {
          "label": "分销与服务费用",
          "notes": []
        },
        "direct_fund": {
          "label": "直接基金费用",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "investment_advisory_fees": {
            "blocks": [
              {
                "x": 449,
                "top": 369,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 449,
                "top": 419,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 378,
                "top": 517.0,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "投资顾问、费用及",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "证券借贷",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "performance_fees": {
            "blocks": [
              {
                "x": 449,
                "top": 708,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 449,
                "top": 758,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 +36%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 378,
                "top": 761.0,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "投资顾问",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "绩效费",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "technology_services": {
            "blocks": [
              {
                "x": 449,
                "top": 845,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 449,
                "top": 895,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 378,
                "top": 922.5,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "技术服务",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "distribution_fees": {
            "blocks": [
              {
                "x": 449,
                "top": 1000,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 449,
                "top": 1050,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 -4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 378,
                "top": 1074.5,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "分销费用",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "advisory_other": {
            "blocks": [
              {
                "x": 449,
                "top": 1156,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 449,
                "top": 1206,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 -23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 378,
                "top": 1223.0,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "顾问及其他",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1069,
                "top": 526,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 1069,
                "top": 579,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 1069,
                "top": 630,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1688,
                "top": 327,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1688,
                "top": 380,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1688,
                "top": 431,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "利润率 34%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1692,
                "top": 1060,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1692,
                "top": 1111,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2480,
                "top": 340,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2480,
                "top": 393,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2480,
                "top": 444,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "利润率 32%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2188,
                "top": 498,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 31,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2188,
                "top": 539,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2480,
                "top": 623,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2480,
                "top": 664,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
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
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2490,
                "top": 756,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2490,
                "top": 797,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
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
          "distribution_servicing": {
            "blocks": [
              {
                "x": 2490,
                "top": 890,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "分销与服务费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2490,
                "top": 931,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
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
          "direct_fund": {
            "blocks": [
              {
                "x": 2490,
                "top": 995,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "直接基金费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2490,
                "top": 1036,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
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
          "ga": {
            "blocks": [
              {
                "x": 2500,
                "top": 1122,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2500,
                "top": 1163,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
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
          "restructuring": {
            "blocks": [
              {
                "x": 2490,
                "top": 1195,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2490,
                "top": 1236,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
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
          "amortization": {
            "blocks": [
              {
                "x": 2490,
                "top": 1295,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2490,
                "top": 1336,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 30,
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
  }
}); })();
