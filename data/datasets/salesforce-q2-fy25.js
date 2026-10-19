window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "salesforce-q2-fy25",
  "name": "Salesforce · Q2 FY25",
  "meta": {
    "title": "Salesforce Q2 FY25 Income Statement",
    "titleSize": 122.41,
    "titleY": 145.85,
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "periodX": 2422.18,
    "periodY": 256.54,
    "periodNoteY": 299.52,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/salesforce-q2-fy25.png",
      "width": 2667,
      "height": 1500
    }
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#6f6f6f",
    "noteColor": "#6f6f6f",
    "labelWeight": null,
    "valueWeight": null,
    "linkOpacity": 1,
    "palette": {
      "source": {
        "node": "#00a1e0",
        "label": "#009bd8"
      },
      "hub": {
        "node": "#00a1e0",
        "label": "#009bd8"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9d1600"
      }
    },
    "linkTint": {
      "source": "#86c9de",
      "hub": "#86c9de",
      "profit": "#9dce9b",
      "cost": "#e28486"
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "layout": {
    "scale": 36.85,
    "nodes": {
      "sales": {
        "x": 466.2,
        "y": 373.74,
        "width": 67.72,
        "height": 75.53
      },
      "service": {
        "x": 466.2,
        "y": 593.82,
        "width": 67.72,
        "height": 84.65
      },
      "platform_slack_other": {
        "x": 466.2,
        "y": 817.81,
        "width": 67.72,
        "height": 66.41
      },
      "marketing_commerce": {
        "x": 466.2,
        "y": 1040.49,
        "width": 67.72,
        "height": 48.18
      },
      "integration_analytics": {
        "x": 466.2,
        "y": 1233.23,
        "width": 67.72,
        "height": 49.49
      },
      "subscription_support": {
        "x": 817.81,
        "y": 569.08,
        "width": 69.02,
        "height": 322.96
      },
      "professional_services": {
        "x": 815.21,
        "y": 1084.77,
        "width": 69.02,
        "height": 20.84
      },
      "revenue": {
        "x": 1179.83,
        "y": 666.75,
        "width": 69.02,
        "height": 343.79
      },
      "gross_profit": {
        "x": 1530.14,
        "y": 570.38,
        "width": 69.02,
        "height": 264.36
      },
      "cost_of_revenue": {
        "x": 1536.65,
        "y": 1031.38,
        "width": 69.02,
        "height": 80.74
      },
      "operating_profit": {
        "x": 1888.26,
        "y": 479.23,
        "width": 69.02,
        "height": 66.41
      },
      "operating_expenses": {
        "x": 1888.26,
        "y": 701.91,
        "width": 69.02,
        "height": 199.24
      },
      "other": {
        "x": 2142.19,
        "y": 479.23,
        "width": 67.72,
        "height": 1.3
      },
      "net_profit": {
        "x": 2250.28,
        "y": 364.63,
        "width": 69.02,
        "height": 52.09
      },
      "tax": {
        "x": 2250.28,
        "y": 617.26,
        "width": 69.02,
        "height": 14.32
      },
      "sm": {
        "x": 2250.28,
        "y": 781.35,
        "width": 69.02,
        "height": 119.81
      },
      "rnd": {
        "x": 2250.28,
        "y": 992.31,
        "width": 69.02,
        "height": 49.49
      },
      "ga": {
        "x": 2250.28,
        "y": 1135.56,
        "width": 69.02,
        "height": 26.04
      },
      "restructuring": {
        "x": 2250.28,
        "y": 1264.48,
        "width": 69.02,
        "height": 2.6
      }
    },
    "labels": {
      "sales": {
        "blocks": [
          {
            "x": 450.58,
            "top": 391.98,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Sales",
                "size": 36.46,
                "weight": 700,
                "color": "#11cec0"
              }
            ]
          },
          {
            "x": 500.06,
            "top": 276.08,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 700,
                "color": "#11cec0"
              },
              {
                "text": "+9% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "service": {
        "blocks": [
          {
            "x": 450.58,
            "top": 612.06,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Service",
                "size": 36.46,
                "weight": 700,
                "color": "#d3669d"
              }
            ]
          },
          {
            "x": 500.06,
            "top": 496.16,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 700,
                "color": "#d3669d"
              },
              {
                "text": "+10% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "platform_slack_other": {
        "blocks": [
          {
            "x": 450.58,
            "top": 797.2149999999999,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Platform",
                "size": 36.46,
                "weight": 700,
                "color": "#5f197a"
              },
              {
                "text": "& Other",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "Slack",
                "size": 21,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          },
          {
            "x": 500.06,
            "top": 720.14,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 700,
                "color": "#5f197a"
              },
              {
                "text": "+9% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "marketing_commerce": {
        "blocks": [
          {
            "x": 450.58,
            "top": 1025.93,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Marketing &",
                "size": 36.46,
                "weight": 700,
                "color": "#f28e2c"
              },
              {
                "text": "Commerce",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          },
          {
            "x": 500.06,
            "top": 942.83,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 700,
                "color": "#f28e2c"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "integration_analytics": {
        "blocks": [
          {
            "x": 450.58,
            "top": 1204.235,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Integration",
                "size": 36.46,
                "weight": 700,
                "color": "#009bd8"
              },
              {
                "text": "& Analytics",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "Mulesoft, Tableau",
                "size": 21,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          },
          {
            "x": 500.06,
            "top": 1135.56,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 36.46,
                "weight": 700,
                "color": "#009bd8"
              },
              {
                "text": "+13% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "subscription_support": {
        "blocks": [
          {
            "x": 852.97,
            "top": 365.93,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Subscription",
                "size": 37.77,
                "weight": 700,
                "color": "#009bd8"
              },
              {
                "text": "and support",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#009bd8"
              },
              {
                "text": "+9% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 852.97,
            "top": 1125.14,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Professional",
                "size": 37.77,
                "weight": 700,
                "color": "#009bd8"
              },
              {
                "text": "services",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#009bd8"
              },
              {
                "text": "(6%) Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1213.69,
            "top": 518.29,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.77,
                "weight": 700,
                "color": "#009bd8"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#009bd8"
              },
              {
                "text": "+8% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1564,
            "top": 386.77,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.77,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "77% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1571.81,
            "top": 1134.26,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.77,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#9d1600"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1922.12,
            "top": 293.01,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.77,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "19% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1919.51,
            "top": 924.59,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating",
                "size": 37.77,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "expenses",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#9d1600"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2179.96,
            "top": 501.36,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Other",
                "size": 37.77,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#008f47"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2435.2,
            "top": 338.58,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Net profit",
                "size": 31.25,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "15% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2435.2,
            "top": 593.82,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#9d1600"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2346.65,
            "top": 794.37,
            "anchor": "start",
            "lineGap": 6,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#9d1600"
              },
              {
                "text": "35% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2346.65,
            "top": 962.36,
            "anchor": "start",
            "lineGap": 6,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#9d1600"
              },
              {
                "text": "14% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2346.65,
            "top": 1103,
            "anchor": "start",
            "lineGap": 6,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#9d1600"
              },
              {
                "text": "8% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2435.2,
            "top": 1235.83,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400,
                "color": "#9d1600"
              },
              {
                "text": "1% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#6f6f6f"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "sales",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Sales",
      "value": 2.1,
      "color": "#11cec0",
      "labelColor": "#11cec0",
      "linkTint": "#85d9d2",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "service",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Service",
      "value": 2.3,
      "color": "#d3669d",
      "labelColor": "#d3669d",
      "linkTint": "#ddb2cc",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "platform_slack_other",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Platform",
        "& Other"
      ],
      "value": 1.8,
      "notes": [
        "+9% Y/Y",
        "Slack"
      ],
      "color": "#5f197a",
      "labelColor": "#5f197a",
      "linkTint": "#ae91bf"
    },
    {
      "id": "marketing_commerce",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Marketing &",
        "Commerce"
      ],
      "value": 1.3,
      "color": "#f28e2c",
      "labelColor": "#f28e2c",
      "linkTint": "#facb96",
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "integration_analytics",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": [
        "Integration",
        "& Analytics"
      ],
      "value": 1.3,
      "notes": [
        "+13% Y/Y",
        "Mulesoft, Tableau"
      ],
      "color": "#00a1e0",
      "labelColor": "#009bd8",
      "linkTint": "#86c9de"
    },
    {
      "id": "subscription_support",
      "col": 1,
      "order": 0,
      "type": "source",
      "label": [
        "Subscription",
        "and support"
      ],
      "value": 8.8,
      "notes": [
        "+9% Y/Y"
      ],
      "color": "#00a1e0",
      "labelColor": "#009bd8",
      "linkTint": "#86c9de"
    },
    {
      "id": "professional_services",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": [
        "Professional",
        "services"
      ],
      "value": 0.6,
      "notes": [
        "(6%) Y/Y"
      ],
      "color": "#00a1e0",
      "labelColor": "#009bd8",
      "linkTint": "#86c9de"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 9.3,
      "notes": [
        "+8% Y/Y"
      ],
      "color": "#00a1e0",
      "labelColor": "#009bd8",
      "linkTint": "#86c9de"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 7.2,
      "notes": [
        "77% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#9dce9b"
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 2.2,
      "color": "#cc0000",
      "labelColor": "#9d1600",
      "linkTint": "#e28486",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.8,
      "notes": [
        "19% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#9dce9b"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 5.4,
      "color": "#cc0000",
      "labelColor": "#9d1600",
      "linkTint": "#e28486",
      "notes": []
    },
    {
      "id": "other",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.1,
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#9dce9b",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.4,
      "notes": [
        "15% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#9dce9b"
    },
    {
      "id": "tax",
      "col": 6,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#9d1600",
      "linkTint": "#e28486",
      "notes": []
    },
    {
      "id": "sm",
      "col": 6,
      "order": 2,
      "type": "cost",
      "label": "S&M",
      "value": 3.2,
      "notes": [
        "35% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9d1600",
      "linkTint": "#e28486"
    },
    {
      "id": "rnd",
      "col": 6,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 1.3,
      "notes": [
        "14% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9d1600",
      "linkTint": "#e28486"
    },
    {
      "id": "ga",
      "col": 6,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 0.7,
      "notes": [
        "8% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9d1600",
      "linkTint": "#e28486"
    },
    {
      "id": "restructuring",
      "col": 6,
      "order": 5,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.1,
      "notes": [
        "1% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9d1600",
      "linkTint": "#e28486"
    }
  ],
  "links": [
    {
      "source": "sales",
      "target": "subscription_support",
      "value": 2.1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#85d9d2",
        "right": "#85d9d2"
      },
      "sourceWidth": 75.53,
      "targetWidth": 75.53,
      "y0": 411.51,
      "y1": 606.85
    },
    {
      "source": "service",
      "target": "subscription_support",
      "value": 2.3,
      "targetOrder": 1,
      "linkTint": {
        "left": "#ddb2cc",
        "right": "#ddb2cc"
      },
      "sourceWidth": 84.65,
      "targetWidth": 84.65,
      "y0": 636.15,
      "y1": 686.93
    },
    {
      "source": "platform_slack_other",
      "target": "subscription_support",
      "value": 1.8,
      "targetOrder": 2,
      "linkTint": {
        "left": "#ae91bf",
        "right": "#ae91bf"
      },
      "sourceWidth": 66.41,
      "targetWidth": 66.41,
      "y0": 851.02,
      "y1": 762.47
    },
    {
      "source": "marketing_commerce",
      "target": "subscription_support",
      "value": 1.3,
      "targetOrder": 3,
      "linkTint": {
        "left": "#facb96",
        "right": "#facb96"
      },
      "sourceWidth": 48.18,
      "targetWidth": 48.18,
      "y0": 1064.59,
      "y1": 819.76
    },
    {
      "source": "integration_analytics",
      "target": "subscription_support",
      "value": 1.3,
      "targetOrder": 4,
      "linkTint": {
        "left": "#86c9de",
        "right": "#86c9de"
      },
      "sourceWidth": 49.49,
      "targetWidth": 48.18,
      "y0": 1257.97,
      "y1": 867.95
    },
    {
      "source": "subscription_support",
      "target": "revenue",
      "value": 8.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#86c9de",
        "right": "#86c9de"
      },
      "sourceWidth": 322.96,
      "targetWidth": 322.96,
      "y0": 730.56,
      "y1": 828.23
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 0.6,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#86c9de",
        "right": "#86c9de"
      },
      "sourceWidth": 20.84,
      "targetWidth": 20.84,
      "y0": 1095.19,
      "y1": 1000.13
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#9dce9b",
        "right": "#9dce9b"
      },
      "sourceWidth": 264.36,
      "targetWidth": 264.36,
      "y0": 798.93,
      "y1": 702.56
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#e28486",
        "right": "#e28486"
      },
      "sourceWidth": 79.44,
      "targetWidth": 80.74,
      "y0": 970.82,
      "y1": 1071.75
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#9dce9b",
        "right": "#9dce9b"
      },
      "sourceWidth": 66.41,
      "targetWidth": 66.41,
      "y0": 603.59,
      "y1": 512.43
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#e28486",
        "right": "#e28486"
      },
      "sourceWidth": 197.94,
      "targetWidth": 199.24,
      "y0": 735.77,
      "y1": 801.53
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#9dce9b",
        "right": "#9dce9b"
      },
      "sourceWidth": 52.09,
      "targetWidth": 50.79,
      "y0": 505.27,
      "y1": 390.02
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#e28486",
        "right": "#e28486"
      },
      "sourceWidth": 14.32,
      "targetWidth": 14.32,
      "y0": 538.48,
      "y1": 624.43
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#9dce9b",
        "right": "#9dce9b"
      },
      "sourceWidth": 1.3,
      "targetWidth": 1.3,
      "y0": 479.88,
      "y1": 416.07
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 3.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#e28486",
        "right": "#e28486"
      },
      "sourceWidth": 119.81,
      "targetWidth": 119.81,
      "y0": 761.81,
      "y1": 841.25
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#e28486",
        "right": "#e28486"
      },
      "sourceWidth": 49.49,
      "targetWidth": 49.49,
      "y0": 846.46,
      "y1": 1017.05
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": {
        "left": "#e28486",
        "right": "#e28486"
      },
      "sourceWidth": 26.04,
      "targetWidth": 26.04,
      "y0": 884.23,
      "y1": 1148.58
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": {
        "left": "#e28486",
        "right": "#e28486"
      },
      "sourceWidth": 3.91,
      "targetWidth": 2.6,
      "y0": 899.2,
      "y1": 1265.78
    }
  ],
  "i18n": {
    "zh": {
      "name": "Salesforce · 2025 财年第二季度",
      "meta": {
        "title": "Salesforce 2025 财年第二季度利润表",
        "titleSize": 106.78,
        "period": "2025 财年第二季度",
        "periodX": 2396.13,
        "periodNote": "截至 2024 年 7 月"
      },
      "nodes": {
        "sales": {
          "label": "销售",
          "notes": [
            "同比 +9%"
          ]
        },
        "service": {
          "label": "服务",
          "notes": [
            "同比 +10%"
          ]
        },
        "platform_slack_other": {
          "label": [
            "平台",
            "与其他"
          ],
          "notes": [
            "同比 +9%",
            "Slack 协作工具"
          ]
        },
        "marketing_commerce": {
          "label": [
            "营销与",
            "商务"
          ],
          "notes": [
            "同比 +6%"
          ]
        },
        "integration_analytics": {
          "label": [
            "集成与",
            "分析"
          ],
          "notes": [
            "同比 +13%",
            "MuleSoft、Tableau"
          ]
        },
        "subscription_support": {
          "label": [
            "订阅",
            "与支持"
          ],
          "notes": [
            "同比 +9%"
          ]
        },
        "professional_services": {
          "label": [
            "专业",
            "服务"
          ],
          "notes": [
            "同比 (6%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 77%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 19%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 15%",
            "同比 +1 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 35%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 14%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 8%",
            "同比 +0 个百分点"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 1%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "sales": {
            "blocks": [
              {
                "x": 450.58,
                "top": 391.98,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "销售",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#11cec0"
                  }
                ]
              },
              {
                "x": 500.06,
                "top": 276.08,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#11cec0"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "service": {
            "blocks": [
              {
                "x": 450.58,
                "top": 612.06,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "服务",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#d3669d"
                  }
                ]
              },
              {
                "x": 500.06,
                "top": 496.16,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#d3669d"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "platform_slack_other": {
            "blocks": [
              {
                "x": 450.58,
                "top": 797.2149999999999,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "平台",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#5f197a"
                  },
                  {
                    "text": "与其他",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "Slack 协作工具",
                    "size": 21,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              },
              {
                "x": 500.06,
                "top": 720.14,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#5f197a"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "marketing_commerce": {
            "blocks": [
              {
                "x": 450.58,
                "top": 1025.93,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "营销与",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#f28e2c"
                  },
                  {
                    "text": "商务",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              },
              {
                "x": 500.06,
                "top": 942.83,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#f28e2c"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "integration_analytics": {
            "blocks": [
              {
                "x": 450.58,
                "top": 1204.235,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "集成与",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#009bd8"
                  },
                  {
                    "text": "分析",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "MuleSoft、Tableau",
                    "size": 21,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              },
              {
                "x": 500.06,
                "top": 1135.56,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#009bd8"
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "subscription_support": {
            "blocks": [
              {
                "x": 852.97,
                "top": 365.93,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 37.77,
                    "weight": 700,
                    "color": "#009bd8"
                  },
                  {
                    "text": "与支持",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#009bd8"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 852.97,
                "top": 1125.14,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "专业",
                    "size": 37.77,
                    "weight": 700,
                    "color": "#009bd8"
                  },
                  {
                    "text": "服务",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#009bd8"
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1213.69,
                "top": 518.29,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.77,
                    "weight": 700,
                    "color": "#009bd8"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#009bd8"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1564,
                "top": 386.77,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.77,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 77%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1571.81,
                "top": 1134.26,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.77,
                    "weight": 700,
                    "color": "#9d1600"
                  },
                  {
                    "text": "成本",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#9d1600"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1922.12,
                "top": 293.01,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.77,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 19%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1919.51,
                "top": 924.59,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.77,
                    "weight": 700,
                    "color": "#9d1600"
                  },
                  {
                    "text": "费用",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#9d1600"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2179.96,
                "top": 501.36,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.77,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2435.2,
                "top": 338.58,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2435.2,
                "top": 593.82,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#9d1600"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#9d1600"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2346.65,
                "top": 794.37,
                "anchor": "start",
                "lineGap": 6,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#9d1600"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#9d1600"
                  },
                  {
                    "text": "占收入 35%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2346.65,
                "top": 962.36,
                "anchor": "start",
                "lineGap": 6,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#9d1600"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#9d1600"
                  },
                  {
                    "text": "占收入 14%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2346.65,
                "top": 1103,
                "anchor": "start",
                "lineGap": 6,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#9d1600"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#9d1600"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2435.2,
                "top": 1235.83,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#9d1600"
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#9d1600"
                  },
                  {
                    "text": "占收入 1%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#6f6f6f"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/salesforce/q2-fy25-company-logo.png",
      "x": 1035,
      "y": 230,
      "width": 353,
      "height": 250,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q2-fy25-sales-icon.png",
      "x": 220,
      "y": 356,
      "width": 115,
      "height": 115,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q2-fy25-service-icon.png",
      "x": 193,
      "y": 583,
      "width": 111,
      "height": 98,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q2-fy25-slack-icon.png",
      "x": 151,
      "y": 780,
      "width": 130,
      "height": 130,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q2-fy25-marketing-commerce-icon.png",
      "x": 99,
      "y": 1025,
      "width": 120,
      "height": 121,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q2-fy25-mulesoft-icon.png",
      "x": 96,
      "y": 1171,
      "width": 119,
      "height": 117,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q2-fy25-tableau-icon.png",
      "x": 130,
      "y": 1292,
      "width": 104,
      "height": 103,
      "clearance": true
    }
  ]
});
