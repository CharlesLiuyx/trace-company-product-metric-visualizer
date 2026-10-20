/* ServiceNow Q1 FY23: Source gross-profit typo corrected by operator authorization on 2026-10-20. */
(function () {
  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
  "key": "servicenow-q1-fy23",
  "name": "ServiceNow · Q1 FY23",
  "company": "ServiceNow",
  "meta": {
    "company": "ServiceNow",
    "title": "ServiceNow Q1 FY23 Income Statement",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/servicenow-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 132,
    "titleWeight": 700,
    "titleTextLength": 2460
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
    "subtitleColor": "#737373",
    "noteColor": "#737373",
    "palette": {
      "source": {
        "node": "#293e40",
        "label": "#293e40"
      },
      "hub": {
        "node": "#293e40",
        "label": "#293e40"
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
      "source": "#97a1a2",
      "hub": "#97a1a2",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1
  },
  "annotationsSvg": "<g><g data-typography-role=\"brand\" transform=\"translate(290 254)\"><text x=\"0\" y=\"107\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"108\" font-weight=\"800\" fill=\"#243d3d\">service</text><text x=\"365\" y=\"107\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"108\" font-weight=\"800\" fill=\"#243d3d\">n</text><circle cx=\"478\" cy=\"77\" r=\"34\" fill=\"none\" stroke=\"#80b6a1\" stroke-width=\"23\"/><text x=\"516\" y=\"107\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"108\" font-weight=\"800\" fill=\"#243d3d\">w</text></g><g><rect x=\"40\" y=\"1180\" width=\"145\" height=\"169\" rx=\"38\" fill=\"#293e40\"/><text x=\"112.5\" y=\"1232\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">cRPO</text><text data-operating-metric=\"crpo\" x=\"112.5\" y=\"1276\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">$7.01B</text><text x=\"112.5\" y=\"1318\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">+23% Y/Y</text></g><g><rect x=\"200\" y=\"1180\" width=\"324\" height=\"169\" rx=\"38\" fill=\"#293e40\"/><text x=\"362.0\" y=\"1232\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">Renewal rate</text><text data-operating-metric=\"renewal_rate\" x=\"362.0\" y=\"1276\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">98%</text><text x=\"362.0\" y=\"1318\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">Unchanged</text></g><g><rect x=\"540\" y=\"1180\" width=\"380\" height=\"169\" rx=\"38\" fill=\"#293e40\"/><text x=\"730.0\" y=\"1232\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">Customers &gt; $1M</text><text data-operating-metric=\"customers_gt_1m\" x=\"730.0\" y=\"1276\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">1,682</text><text x=\"730.0\" y=\"1318\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">+20% Y/Y</text></g><text x=\"96\" y=\"1383\" font-size=\"28\" fill=\"#737373\">cRPO = Current Remaining Performance Obligation</text><text x=\"170\" y=\"1438\" font-size=\"38\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "crpo",
      "value": "7.01",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$7.01B"
    },
    {
      "id": "renewal_rate",
      "value": "98",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "98%"
    },
    {
      "id": "customers_gt_1m",
      "value": "1682",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,682"
    }
  ],
  "layout": {
    "scale": 0.163,
    "nodes": {
      "subscription": {
        "x": 366,
        "y": 540,
        "width": 72,
        "height": 330
      },
      "professional_services": {
        "x": 366,
        "y": 1072,
        "width": 72,
        "height": 12
      },
      "revenue": {
        "x": 833,
        "y": 632,
        "width": 72,
        "height": 342
      },
      "gross_profit": {
        "x": 1282,
        "y": 524,
        "width": 73,
        "height": 270
      },
      "cost_of_revenue": {
        "x": 1290,
        "y": 1012,
        "width": 72,
        "height": 72
      },
      "operating_profit": {
        "x": 1753,
        "y": 425,
        "width": 72,
        "height": 24
      },
      "operating_expenses": {
        "x": 1758,
        "y": 650,
        "width": 72,
        "height": 246
      },
      "interest": {
        "x": 2088,
        "y": 376,
        "width": 72,
        "height": 9
      },
      "net_profit": {
        "x": 2234,
        "y": 302,
        "width": 73,
        "height": 24
      },
      "tax": {
        "x": 2234,
        "y": 510,
        "width": 73,
        "height": 6
      },
      "other": {
        "x": 2234,
        "y": 609,
        "width": 73,
        "height": 3
      },
      "sm": {
        "x": 2234,
        "y": 703,
        "width": 73,
        "height": 134
      },
      "rnd": {
        "x": 2234,
        "y": 968,
        "width": 73,
        "height": 80
      },
      "ga": {
        "x": 2234,
        "y": 1208,
        "width": 73,
        "height": 32
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 866,
            "top": 485,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#293e40"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#293e40"
              },
              {
                "text": "+22% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1316,
            "top": 341,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
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
                "text": "79% margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+1pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1326,
            "top": 1100,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1789,
            "top": 242,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
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
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
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
            "x": 1790,
            "top": 919,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
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
                "size": 35,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2124,
            "top": 403,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Interest",
                "size": 32,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2427,
            "top": 294,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+3pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2427,
            "top": 485,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
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
      "other": {
        "blocks": [
          {
            "x": 2427,
            "top": 577,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 32,
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
      "sm": {
        "blocks": [
          {
            "x": 2427,
            "top": 706,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "S&M",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "39% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2427,
            "top": 939,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "23% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2427,
            "top": 1192,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "9% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 404,
            "top": 439,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#293e40"
              },
              {
                "text": "+24% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 205,
            "top": 662,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Subscription",
                "size": 39,
                "weight": 800,
                "color": "#293e40"
              },
              {
                "text": "83% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 404,
            "top": 972,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#80b6a1"
              },
              {
                "text": "(21%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 205,
            "top": 1008,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Professional",
                "size": 39,
                "weight": 800,
                "color": "#80b6a1"
              },
              {
                "text": "services",
                "size": 39,
                "weight": 800,
                "color": "#80b6a1"
              },
              {
                "text": "(17%) gross margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "semanticRole": "name"
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Subscription",
      "value": 2024,
      "notes": [
        "+24% Y/Y",
        "83% gross margin"
      ]
    },
    {
      "id": "professional_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Professional",
        "services"
      ],
      "value": 72,
      "notes": [
        "(21%) Y/Y",
        "(17%) gross margin"
      ],
      "color": "#80b6a1",
      "labelColor": "#80b6a1",
      "linkTint": "#bfd7cd"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 2096,
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 1658,
      "notes": [
        "79% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 438
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 144,
      "notes": [
        "7% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1514
    },
    {
      "id": "interest",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Interest",
      "value": 60
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 150,
      "notes": [
        "7% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 38
    },
    {
      "id": "other",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 16
    },
    {
      "id": "sm",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "S&M",
      "value": 823,
      "notes": [
        "39% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "R&D",
      "value": 492,
      "notes": [
        "23% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "G&A",
      "value": 199,
      "notes": [
        "9% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 2024,
      "sourceWidth": 330,
      "targetWidth": 330,
      "y0": 705,
      "y1": 797,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 72,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 1078,
      "y1": 968,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1658,
      "sourceWidth": 270,
      "targetWidth": 270,
      "y0": 767,
      "y1": 659,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 438,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 938,
      "y1": 1048,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 144,
      "sourceWidth": 24,
      "targetWidth": 24,
      "y0": 536,
      "y1": 437,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1514,
      "sourceWidth": 246,
      "targetWidth": 246,
      "y0": 671,
      "y1": 773,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 90,
      "sourceWidth": 15,
      "targetWidth": 15,
      "y0": 432.5,
      "y1": 309.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 38,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 443,
      "y1": 513,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 16,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 447.5,
      "y1": 610.5,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 60,
      "sourceWidth": 9,
      "targetWidth": 9,
      "y0": 380.5,
      "y1": 321.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 823,
      "sourceWidth": 134,
      "targetWidth": 134,
      "y0": 717,
      "y1": 770,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 492,
      "sourceWidth": 80,
      "targetWidth": 80,
      "y0": 824,
      "y1": 1008,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 199,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 880,
      "y1": 1224,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "cRPO",
      "service",
      "n",
      "w"
    ],
    "zh": {
      "name": "ServiceNow · 2023 财年第一季度",
      "meta": {
        "title": "ServiceNow 2023 财年第一季度利润表",
        "titleTextLength": 2200
      },
      "annotationsSvg": "<g><g data-typography-role=\"brand\" transform=\"translate(290 254)\"><text x=\"0\" y=\"107\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"108\" font-weight=\"800\" fill=\"#243d3d\">service</text><text x=\"365\" y=\"107\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"108\" font-weight=\"800\" fill=\"#243d3d\">n</text><circle cx=\"478\" cy=\"77\" r=\"34\" fill=\"none\" stroke=\"#80b6a1\" stroke-width=\"23\"/><text x=\"516\" y=\"107\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"108\" font-weight=\"800\" fill=\"#243d3d\">w</text></g><g><rect x=\"40\" y=\"1180\" width=\"145\" height=\"169\" rx=\"38\" fill=\"#293e40\"/><text x=\"112.5\" y=\"1232\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">cRPO</text><text data-operating-metric=\"crpo\" x=\"112.5\" y=\"1276\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">$7.01B</text><text x=\"112.5\" y=\"1318\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">同比 +23%</text></g><g><rect x=\"200\" y=\"1180\" width=\"324\" height=\"169\" rx=\"38\" fill=\"#293e40\"/><text x=\"362.0\" y=\"1232\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">续约率</text><text data-operating-metric=\"renewal_rate\" x=\"362.0\" y=\"1276\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">98%</text><text x=\"362.0\" y=\"1318\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">保持不变</text></g><g><rect x=\"540\" y=\"1180\" width=\"380\" height=\"169\" rx=\"38\" fill=\"#293e40\"/><text x=\"730.0\" y=\"1232\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">客户数 &gt; $1M</text><text data-operating-metric=\"customers_gt_1m\" x=\"730.0\" y=\"1276\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">1,682</text><text x=\"730.0\" y=\"1318\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">同比 +20%</text></g><text x=\"96\" y=\"1383\" font-size=\"28\" fill=\"#737373\">cRPO = 当前剩余履约义务</text><text x=\"170\" y=\"1438\" font-size=\"38\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text></g>",
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +24%",
            "毛利率 83%"
          ]
        },
        "professional_services": {
          "label": [
            "专业",
            "服务"
          ],
          "notes": [
            "同比 (21%)",
            "毛利率 (17%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +22%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "interest": {
          "label": "利息"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 +3 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他"
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 39%",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 23%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 866,
                "top": 485,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#293e40"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#293e40"
                  },
                  {
                    "text": "同比 +22%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1316,
                "top": 341,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
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
                    "text": "利润率 79%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1326,
                "top": 1100,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1789,
                "top": 242,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
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
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
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
                "x": 1790,
                "top": 919,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
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
                    "size": 35,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2124,
                "top": 403,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "利息",
                    "size": 32,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2427,
                "top": 294,
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
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2427,
                "top": 485,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
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
          "other": {
            "blocks": [
              {
                "x": 2427,
                "top": 577,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
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
          "sm": {
            "blocks": [
              {
                "x": 2427,
                "top": 706,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 39%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2427,
                "top": 939,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2427,
                "top": 1192,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 9%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 404,
                "top": 439,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#293e40"
                  },
                  {
                    "text": "同比 +24%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 205,
                "top": 662,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39,
                    "weight": 800,
                    "color": "#293e40"
                  },
                  {
                    "text": "毛利率 83%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 404,
                "top": 972,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#80b6a1"
                  },
                  {
                    "text": "同比 (21%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 205,
                "top": 1008,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39,
                    "weight": 800,
                    "color": "#80b6a1"
                  },
                  {
                    "text": "服务",
                    "size": 39,
                    "weight": 800,
                    "color": "#80b6a1"
                  },
                  {
                    "text": "毛利率 (17%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          }
        }
      }
    }
  }
});
})();
